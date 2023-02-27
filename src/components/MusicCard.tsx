import Image from 'next/image'
import { AiFillPlayCircle } from 'react-icons/ai'

import { MusicCardContainer } from '@/styles/musicCard'
import { MouseEventHandler } from 'react'

interface IMusicCard {
  image_url: string,
  song_title: string,
  author?: string,
  duration?: string,
  className?: string,
  handleClick: MouseEventHandler<HTMLButtonElement>
}

export default function MusicCard({
  image_url,
  song_title,
  author,
  duration,
  className,
  handleClick
}: IMusicCard) {
  return (
    <MusicCardContainer className={className}>
      <Image
        src={image_url}
        alt=''
        width={200}
        height={200}
      />
      <h2>{song_title}</h2>
      <div className='music-info'>
        <p>{author}</p>
        <span>{duration}</span>
      </div>
      <div className='play-button'>
        <button onClick={handleClick}>
          <AiFillPlayCircle size={40}/>
        </button>
      </div>
    </MusicCardContainer>
  )
}
