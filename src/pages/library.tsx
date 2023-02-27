import { useState, useEffect, useContext } from 'react'
import Head from 'next/head'
import { useSession } from 'next-auth/react'

import SkeletonCard from '@/components/SkeletonCard'

import useSpotify from '@/hooks/useSpotify'
import { LibraryContainer, PlaylistsContainer } from '@/styles/pages/library'
import MusicCard from '@/components/MusicCard'
import { playerContext } from '@/context/player'
import { useRouter } from 'next/router'

export default function Library() {
  const { data: session, status } = useSession()
  const spotifyApi = useSpotify()
  const { setPlaylistQueue, setCurrentPlayingTrack } = useContext(playerContext)

  const route = useRouter()

  const [userPlaylists, setUserPlaylists] = useState<SpotifyApi.PlaylistObjectSimplified[]>([])

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setUserPlaylists(data.body.items)
      })
    }
  }, [session, spotifyApi])

  function retrievePlaylistTracks(playlistId: string) {
    spotifyApi.getPlaylistTracks(playlistId).then((data) => {
      const tracks = [...data.body.items.filter(item => item.track !== null && item.track.preview_url !== null)]
      setPlaylistQueue(tracks)

      const trackToStartPlaying = tracks.find(item => item.track?.preview_url)
      trackToStartPlaying && setCurrentPlayingTrack(trackToStartPlaying.track!)
      
      route.push('/player')
    })
  }

  return (
    <>
    <Head>
      <title>DarkMetak | Biblioteca</title>
    </Head>
    <LibraryContainer>
      <h1>Biblioteca</h1>
      <PlaylistsContainer>
        {userPlaylists.length ? (
          userPlaylists.map(item => (
            <MusicCard
              key={item.id}
              image_url={item.images[0].url}
              song_title={item.name}
              author={`${item.tracks.total} músicas`}
              handleClick={() => retrievePlaylistTracks(item.id)}
            />
          ))
        ) : (
          <>
          {[...Array(10)].map((_item, index) => <SkeletonCard key={index} height={200} width={200}/>)}
          </>
        )}
      </PlaylistsContainer>
    </LibraryContainer>
    </>
  )
}
