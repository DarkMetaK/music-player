import { createContext, Dispatch, MutableRefObject, ReactNode, SetStateAction, useRef, useState } from 'react'

interface IPlayerContext {
  currentPlayingTrack: SpotifyApi.TrackObjectFull | undefined,
  playlistQueue: SpotifyApi.PlaylistTrackObject[],
  audioIsPlaying: boolean
  audioDemoFile: MutableRefObject<HTMLAudioElement | undefined>,
  setPlaylistQueue: Dispatch<SetStateAction<SpotifyApi.PlaylistTrackObject[]>>,
  setCurrentPlayingTrack: Dispatch<SetStateAction<SpotifyApi.TrackObjectFull | undefined>>
  setAudioIsPlaying: Dispatch<SetStateAction<boolean>>
}

interface IPlayerContextProvider {
  children: ReactNode
}

export const playerContext = createContext<IPlayerContext>({} as IPlayerContext)

export function PlayerContextProvider({ children }: IPlayerContextProvider) {
  const [currentPlayingTrack, setCurrentPlayingTrack] = useState<SpotifyApi.TrackObjectFull>()
  const [playlistQueue, setPlaylistQueue] = useState<SpotifyApi.PlaylistTrackObject[]>([])
  const [audioIsPlaying, setAudioIsPlaying] = useState(false)

  const audioDemoFile = useRef<HTMLAudioElement>()

  return (
    <playerContext.Provider value={{
      currentPlayingTrack,
      playlistQueue,
      audioIsPlaying,
      audioDemoFile,
      setCurrentPlayingTrack,
      setPlaylistQueue,
      setAudioIsPlaying
    }}>
      {children}
    </playerContext.Provider>    
  )
}
