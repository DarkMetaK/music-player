import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

import { PlayerSongInfoContainer } from '@/styles/PlayerSongInfo'

import useSpotify from '@/hooks/useSpotify'

interface IPlayerSongInfo {
  image_url: string,
  track_name: string,
  album_name: string,
  artist_name: string,
  album_type: string,
  total_tracks: number,
  release_date: string,
  track_id: string
}

export default function PlayerSongInfo({
  image_url,
  track_name,
  album_name,
  artist_name,
  album_type,
  total_tracks,
  release_date,
  track_id
}: IPlayerSongInfo) {
  const { data: session, status } = useSession()
  const spotifyApi = useSpotify()
  
  const [currentTrackIsFavorited, setCurrentTrackIsFavorited] = useState<boolean>(false)
  const [actionIsBeingMadeButtonDisable, setActionIsBeingMadeButtonDisable] = useState<boolean>(false)

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.containsMySavedTracks([track_id]).then((data) => {
        setCurrentTrackIsFavorited(data.body[0])
      })
    }
  }, [track_id, session, spotifyApi])

  function handleAddToFavorites(trackId: string) {
    spotifyApi.addToMySavedTracks([trackId]).then(() => {
      setCurrentTrackIsFavorited(true)
      setActionIsBeingMadeButtonDisable(true)
    }).then(() => {
      setActionIsBeingMadeButtonDisable(false)
    })
  }

  function handleRemoveFromFavorites(trackId: string) {
    spotifyApi.removeFromMySavedTracks([trackId]).then(() => {
      setCurrentTrackIsFavorited(false)
      setActionIsBeingMadeButtonDisable(true)
    }).then(() => {
      setActionIsBeingMadeButtonDisable(false)
    })
  }

  return (
    <PlayerSongInfoContainer>
      <Image
        src={image_url}
        alt=''
        width={450}
        height={450}
      />
      <div>
        <div>
          <h2>{track_name}</h2>                
        </div>
        <button
          disabled={actionIsBeingMadeButtonDisable}
          onClick={() => {
            currentTrackIsFavorited ? 
            handleRemoveFromFavorites(track_id) 
            : handleAddToFavorites(track_id)
          }}
        >
        {currentTrackIsFavorited ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24}/>}
        </button>
      </div>
      <span>
        <p>
          {`"${album_name}" de ${artist_name}, é um ${album_type} composto por ${total_tracks} faixa(s)`}
        </p>
        <p>Data de lançamento: {release_date}</p>              
      </span>
  </PlayerSongInfoContainer>
  )
}
