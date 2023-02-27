import { useState, useEffect, useContext } from 'react'
import Head from 'next/head'
import { useSession } from 'next-auth/react'

import SkeletonCard from '@/components/SkeletonCard'
import { FavoritesContainer, FavoritesTracksContainer } from '@/styles/pages/favorites'

import useSpotify from '@/hooks/useSpotify'
import { millisToMinutesAndSeconds } from '@/lib/timeConverter'
import MusicCard from '@/components/MusicCard'
import { useRouter } from 'next/router'
import { playerContext } from '@/context/player'

export default function Favorites() {
  const { setCurrentPlayingTrack } = useContext(playerContext)
  
  const { data: session, status } = useSession()
  const spotifyApi = useSpotify()

  const router = useRouter()

  const [savedTracks, setSavedTracks] = useState<SpotifyApi.SavedTrackObject[]>([])

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getMySavedTracks({
        limit: 50
      }).then((data) => {
        const tracksWithPreview = data.body.items.filter(item => item.track.preview_url !== null)
        setSavedTracks(tracksWithPreview)
      })
    }
  }, [session, spotifyApi])

  function retrieveTrack(song: SpotifyApi.TrackObjectFull) {
    setCurrentPlayingTrack(song)
    router.push('/player')
  }

  return (
    <>
    <Head>
      <title>DarkMetak | Favoritos</title>
    </Head>
    <FavoritesContainer>
      <h1>Favoritos</h1>
      <FavoritesTracksContainer>
        {savedTracks.length ? (
          savedTracks.map(item => (
            <MusicCard
              key={item.track.id}
              className='keen-slider__slide'
              image_url={item.track.album.images[1].url}
              song_title={item.track.name}
              author={item.track.artists[0].name}
              duration={millisToMinutesAndSeconds(item.track.duration_ms)}
              handleClick={() => {
                retrieveTrack(item.track)
              }}
            />
          ))
        ) : (
          <>
          {[...Array(10)].map((item, index) => <SkeletonCard key={index} height={200} width={200}/>)}
          </>
        )}
      </FavoritesTracksContainer>
    </FavoritesContainer>
    </>
  )
}
