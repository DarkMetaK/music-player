import { styled } from '../config'

export const PlayerContainer = styled('main', {
  width: '100%',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})

export const PlayerOptionsContainer = styled('div', {
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',

  '@md': {
    flexDirection: 'column',
    width: '100%'
  },

  '& > h1': {
    textAlign: 'center'
  }
})

export const PlayerComponentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  alignItems: 'center',
  flex: 1,

  h1: {
    fontSize: '3rem',
    color: '$gray-300',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    maxWidth: '24rem',
  },

  p: {
    fontSize: '1rem',
    color: '$gray-500'
  },

  '@md': {
    width: '100%',
  },

  '& > div':{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  }
})

export const ProgressContainer = styled('div', {
  display: 'flex',
  gap: '1rem',

  input: {
    width: '100%',
  }
})

export const ButtonsContainer = styled('div', {
  display: 'flex',
  gap: '2rem',
  alignSelf: 'center',

  button: {
    background: 'none',
    border: 'none',
    borderRadius: 20,
    padding: '0.5rem',
    color: '$gray-300',
    cursor: 'pointer',
    transition: 'all 0.2s',

    display: 'flex',
    alignItems: 'center',
    justifyCenter: 'center',

    '&.play-pause': {
      backgroundColor: '$green',
      '&:hover': {
        backgroundColor: '$green-light'
      }
    },

    '&:hover': {
      color: '$white'
    }
  }
})
