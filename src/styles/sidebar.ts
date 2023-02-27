import { styled } from './config'
import * as Dialog from '@radix-ui/react-dialog'

export const SidebarContainer = styled('div', {
  minHeight: '100vh',
  backgroundColor: '$gray-800',
  minWidth: '6.25rem',
  padding: '0.5rem',

  '@md': {
    minHeight: 0,
    width: '100%',
    padding: '1rem'
  },

  '& > div': {
    height: '100vh',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',

    img: {
      borderRadius: 10,
    },

    nav: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },

    '.dialog': {
      display: 'none',

      button: {
        padding: '1rem',
        borderRadius: 10,
        background: 'none',
        border: 'none',
        color: '$gray-400',
        lineHeight: 0,

        '&:hover': {
          color: '$gray-300'
        }
      }
    },
    
    '@md': {
      display: '',
      height: 'auto',
      position: 'static',
      flexDirection: 'row',

      'nav, .signOut': {
        display: 'none'
      },

      '.dialog': {
        display: 'block'
      }
    }
  }
})

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: '$gray-900',
  opacity: 0.6,
  inset: 0,
  position: 'fixed',
})

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: '$gray-800',
  borderRadius: 10,
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxHeight: '85vh',
  padding: 25,
  
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
})

export const DialogClose = styled(Dialog.Close, {
  borderRadius: 10,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray-400',
  alignSelf: 'end',

  padding: '0.25rem',
  background: 'none',
  border: 0
})