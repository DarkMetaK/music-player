import { styled } from '../config'

export const FeedContainer = styled('main', {
  width: '100%',
  padding: '2rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  h1: {
    color: '$gray-300',
    fontWeight: 700
  },

  '& > div': {
    h2: {
      marginBottom: '0.75rem',
      color: '$gray-300',
    }
  }
})

export const SliderContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr'
})
