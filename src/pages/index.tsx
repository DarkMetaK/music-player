import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { KeenSliderPlugin, useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import MusicCard from '@/components/MusicCard'
import SkeletonCard from '@/components/SkeletonCard'
import { FeedContainer, SliderContainer } from '@/styles/pages/feed'

import useSpotify from '@/hooks/useSpotify'
import { millisToMinutesAndSeconds } from '@/lib/timeConverter'
import { playerContext } from '@/context/player'
import { useRouter } from 'next/router'

export default function Home() {
  // Spotify and auth configs
  const { data: session, status } = useSession()
  const spotifyApi = useSpotify()

  const router = useRouter()

  const { setCurrentPlayingTrack } = useContext(playerContext)

  const [mostListenedTracks, setMostListenedTracks] = useState<SpotifyApi.TrackObjectFull[]>([])

  const [newReleasesTracks, setNewReleasesTracks] = useState<SpotifyApi.AlbumObjectSimplified[]>([])

  const [userName, setUserName] = useState('')

  useEffect(() => {
    session?.user.name && setUserName(session.user.name)

    if (spotifyApi.getAccessToken()) {
      // Get most listened
      spotifyApi.getMyTopTracks().then((data) => {
        setMostListenedTracks(data.body.items.filter(item => item.preview_url !== null))
      })
      // Get new releases
      spotifyApi.getNewReleases({
        limit: 20,
        offset: 0,
        country: 'BR'
      }).then((data) => {
        setNewReleasesTracks(data.body.albums.items)
      })
    }
  }, [session, spotifyApi])

  // Sliders configs
  const MutationPlugin: KeenSliderPlugin = (slider) => {
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        slider.update()
      })
    })
    const config = { childList: true }
  
    slider.on('created', () => {
      observer.observe(slider.container, config)
    })
    slider.on('destroyed', () => {
      observer.disconnect()
    })
  }

  const [mostListenedRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 'auto',
      spacing: 16
    },
  },
  [MutationPlugin]
  )

  const [releasesRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 'auto',
      spacing: 16
    },
  },
  [MutationPlugin]
  )

  // Click config

  function retrieveTrack(song: SpotifyApi.TrackObjectFull) {
    setCurrentPlayingTrack(song)
    router.push('/player')
  }

  function retrieveTrackOrPlaylist(item: SpotifyApi.AlbumObjectSimplified) {
    spotifyApi.getAlbum(item.id).then((data) => {
      const tracksWithUrl = data.body.tracks.items.filter(item => item.preview_url !== null)
      
      if (tracksWithUrl.length) {
        spotifyApi.getTracks([...tracksWithUrl.map(item => item.id)]).then((data) => {
          setCurrentPlayingTrack(data.body.tracks[0])
          router.push('/player')
        })        
      }
    })
  }

  return (
    <>
    <Head>
      <title>DarkMetak | Feed</title>
    </Head>
    <FeedContainer>

      <h1>Bem vindo {userName}</h1>

      <div>
        <h2>No replay</h2>
        <SliderContainer>
          <div ref={mostListenedRef} className='keen-slider' id='mostListened'>
            {mostListenedTracks.length ? (
              mostListenedTracks.map(item => (
                <MusicCard
                  key={item.id}
                  className='keen-slider__slide'
                  image_url={item.album.images[1].url}
                  song_title={item.name}
                  author={item.artists[0].name}
                  duration={millisToMinutesAndSeconds(item.duration_ms)}
                  handleClick={() => {
                    retrieveTrack(item)
                  }}
                />
              ))
            ) : (
              <>
              {[...Array(10)].map((_item, index) => <SkeletonCard key={index} className='keen-slider__slide' height={200} width={200}/>)}
              </>
            )}
          </div>
        </SliderContainer>
      </div>

      <div>
        <h2>Lançamentos</h2>
        <SliderContainer>
          <div ref={releasesRef} className='keen-slider' id='releases'>
          {newReleasesTracks.length ? (
              newReleasesTracks.map(item => (
                <MusicCard
                  key={item.id}
                  className='keen-slider__slide'
                  image_url={item.images[1].url}
                  song_title={item.name}
                  author={item.artists[0].name}
                  duration={item.album_type.toLocaleUpperCase()}
                  handleClick={() => {retrieveTrackOrPlaylist(item)}}
                />
              ))
            ) : (
              <>
              {[...Array(10)].map((_item, index) => <SkeletonCard key={index} className='keen-slider__slide' height={300} width={300}/>)}
              </>
            )}
          </div>
        </SliderContainer>
      </div>
    </FeedContainer>
    </>
  )
}
