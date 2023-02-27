import { styled } from "./config";

export const MusicCardContainer = styled('div', {
  justifySelf: 'center',
  backgroundColor: '$gray-800',
  padding: '1rem',
  borderRadius: 10,
  color: '$gray-400',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  minWidth: '12.5rem',
  maxWidth: '12.5rem',
  position: 'relative',

  '&:hover': {
    transform: 'scale(1.05)',
    '.play-button': {
      opacity: 1
    }
  },

  img: {
    borderRadius: 10,
    height: 'auto'
  },

  h2: {
    fontSize: '1.125rem',
    color: '$gray-300',
    fontWeight: 700,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: '0 !important'
  },

  '.music-info': {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    fontSize: '0.875rem'
  },

  '.play-button': {
    opacity: 0,
    width: '100%',
    height: '34%',
    position: 'absolute',
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(0, 135, 95, 0) 0%, rgba(0, 135, 95, 1) 100%);',
    borderRadius: 10,
    transition: 'all 0.2s',

    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: '0.5rem',

    button: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      borderRadius: 10,

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      color: '$gray-300',
      transition: 'all 0.2s',

      '&:hover': {
        color: '$white'
      }
    }
  }
})