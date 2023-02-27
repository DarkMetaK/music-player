import { useContext, useEffect, useRef } from 'react';
import Head from 'next/head';

import { GiPreviousButton, GiNextButton } from 'react-icons/gi'
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs'

import { 
  ButtonsContainer,
  PlayerComponentContainer,
  PlayerContainer,
  PlayerOptionsContainer,
  ProgressContainer 
} from '@/styles/pages/player';

import { playerContext } from '@/context/player';
import PlayerSongInfo from '@/components/PlayerSongInfo';

export default function Player() {
  const { 
    currentPlayingTrack,
    setCurrentPlayingTrack,
    playlistQueue,
    audioDemoFile,
    audioIsPlaying,
    setAudioIsPlaying,
  } = useContext(playerContext)

  useEffect(() => {
    if (audioDemoFile.current && currentPlayingTrack) {
      // Setted audio is playing
      if (audioDemoFile.current.played.length) {
        audioDemoFile.current.pause()
        setAudioIsPlaying(false)
        const newAudioUrl = currentPlayingTrack.preview_url!
        const newAudioToPlay = new Audio(newAudioUrl)
        audioDemoFile.current = newAudioToPlay  
      }
      // First time setting an audio
    } else if (!audioDemoFile.current && currentPlayingTrack) {
        const audioUrl = currentPlayingTrack.preview_url!
        const audioToPlay = new Audio(audioUrl)
        audioDemoFile.current = audioToPlay
    }
  }, [audioDemoFile, currentPlayingTrack, setAudioIsPlaying])

  useEffect(() => {
    if (audioDemoFile.current) {
      // Audio changed and didnt played yet
      if (!audioDemoFile.current.played.length) {
        const playPromise = audioDemoFile.current.play().then(() => {
          setAudioIsPlaying(true)  
        }).catch((error) => {
          alert('Um erro ocorreu. Tente mudar de faixa para normalizar')
        })
      }
    }
  }, [audioDemoFile, currentPlayingTrack, setAudioIsPlaying])

  function handleNextSong() {
    if (playlistQueue.length && currentPlayingTrack) {
      const currentSongIndex = playlistQueue.findIndex(item => item.track?.id === currentPlayingTrack.id)
      // Last song in playlist
      if(currentSongIndex === playlistQueue.length - 1) {
        setCurrentPlayingTrack(playlistQueue[0].track!)
      }
      // Any other position in playlist
      else {
        setCurrentPlayingTrack(playlistQueue[currentSongIndex + 1].track!)  
      }
    }
  }

  function handlePreviousSong() {
    if (playlistQueue.length && currentPlayingTrack) {
      const currentSongIndex = playlistQueue.findIndex(item => item.track?.id === currentPlayingTrack.id)
      // First song in playlist
      if(currentSongIndex === 0) {
        setCurrentPlayingTrack(playlistQueue[playlistQueue.length-1].track!)
      }
      // Any other position in playlist
      else {
        setCurrentPlayingTrack(playlistQueue[currentSongIndex - 1].track!)  
      }
    }
  }

  function playOrPauseSong() {
    if (audioIsPlaying && audioDemoFile.current) {
      audioDemoFile.current.pause()
      setAudioIsPlaying(false)
    } else if (!audioIsPlaying && audioDemoFile.current) {
      const playPromise = audioDemoFile.current.play().then(() => {
        setAudioIsPlaying(true)
      }).catch((error) => {
        alert('Um erro ocorreu. Tente mudar de faixa para normalizar')
      }) 
    }
  }

  return (
    <>
    <Head>
      <title>DarkMetaK | Player</title>
    </Head>
    <PlayerContainer>
      <PlayerOptionsContainer>
        {currentPlayingTrack ? (
          <>
          <PlayerSongInfo 
            key={currentPlayingTrack.id}
            album_name={currentPlayingTrack.album.name}
            album_type={currentPlayingTrack.album.type}
            artist_name={currentPlayingTrack.artists[0].name}
            release_date={currentPlayingTrack.album.release_date}
            image_url={currentPlayingTrack.album.images[0].url}
            total_tracks={currentPlayingTrack.album.total_tracks}
            track_id={currentPlayingTrack.id}
            track_name={currentPlayingTrack.name}
          />
          
          <PlayerComponentContainer>
            <h1>{currentPlayingTrack.name}</h1>
            <p>{currentPlayingTrack.album.artists[0].name}</p>
            <div>
              <ProgressContainer>
                <span>0:00</span>
                <input type="range" disabled/>
                <span>0:30</span>                
              </ProgressContainer>
              <ButtonsContainer>
                <button onClick={handlePreviousSong}>
                  <GiPreviousButton size={48}/>
                </button>
                <button className='play-pause' onClick={playOrPauseSong}>
                  {!audioIsPlaying ? <BsFillPlayFill size={64}/> : <BsFillPauseFill size={64} />} 
                </button>
                <button onClick={handleNextSong}>
                  <GiNextButton size={48}/>
                </button>                
              </ButtonsContainer>
            </div>
          </PlayerComponentContainer>
          </>
        ) : (
          <h1>Escolha uma música ou playlist</h1>
        )}       
      </PlayerOptionsContainer>
    </PlayerContainer>
    </>
  )
}
