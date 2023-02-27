import { styled, rightToLeft } from './config'

export const PlayerSongInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  backgroundColor: '$gray-800',
  padding: '2rem',
  borderRadius: 10,
  maxWidth: '28.125rem',

  img: {
    height: 'auto',
    borderRadius: 10,
  },

  '& > div': {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    div: {
      flex: 1,
      color: '$gray-300',
      overflowX: 'hidden',

      h2: {
        animation: `${rightToLeft} 8.5s linear infinite`
      },
    },

    button: {
      background: 'none',
      border: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      lineHeight: 0,
      color: '$green',
      cursor: 'pointer',
      transition: 'color 0.2s',

      '&:hover': {
        color: '$green-light'
      }
    }
  },

  span: {
    fontSize: '0.875rem',
    color: '$gray-500',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }
})
