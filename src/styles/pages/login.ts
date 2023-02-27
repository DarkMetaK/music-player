import { styled } from "../config";

export const LoginContainer = styled('div', {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  gap: '2rem',
  padding: '0 1rem',

  img: {
    objectFit: 'contain'
  },

  button: {
    width: '12.5rem',
    padding: '1rem 0',
    textAlign: 'center',
    backgroundColor: '$green',
    borderRadius: 50,
    color: '$gray-300',
    fontWeight: 600,
    border: 0,
    transition: 'all 0.2s',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '$green-light',
      color: '$white'
    }
  }
})