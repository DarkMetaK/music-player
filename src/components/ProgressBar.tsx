import { playerContext } from "@/context/player"
import { useContext, useState, useRef, useEffect } from "react"

export default function ProgressBar() {
  const { currentPlayingTrack, audioIsPlaying } = useContext(playerContext)

  const [progressBar, setProgressBar] = useState<number>(0)

  const musicTimerInterval = useRef<NodeJS.Timer>()

  useEffect(() => {
    if (musicTimerInterval.current) {
      clearInterval(musicTimerInterval.current)
      setProgressBar(0)
    }
  }, [currentPlayingTrack])

  useEffect(() => {
    if (progressBar > 99.76) {
      clearInterval(musicTimerInterval.current)
    }
  }, [progressBar])

  useEffect(() => {
    if (!audioIsPlaying) {
      clearInterval(musicTimerInterval.current)
    } else {
      musicTimerInterval.current = setInterval(() => setProgressBar(state => state+3.44827), 1000)
    }
  }, [audioIsPlaying])

  return (
    <input
      type="range"
      disabled
      value={progressBar}
    />
  )
}