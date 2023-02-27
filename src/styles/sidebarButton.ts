import Link from "next/link";
import { styled } from "./config";

export const ButtonContainer = styled(Link, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,

  width: '5rem',
  height: '5rem',
  borderRadius: 20,
  color: '$green',
  transition: 'all 0.2s ease',
  backgroundColor: 'rgba(244, 187, 146,0)',

  span: {
    fontWeight: 600,
    fontSize: '0.875rem'
  },

  '&:hover': {
    color: '$green-light'
  },

  '&.active': {
    backgroundColor: '$green-light',
    color: '$white',
    transform: 'scale(1.05)'
  },

  '@md': {
    width: '100%',
    
  }
})

export const RealButtonContainer = styled('button', {
  border: 0,
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,

  width: '5rem',
  height: '5rem',
  borderRadius: 20,
  color: '$green',
  transition: 'all 0.2s ease',
  backgroundColor: 'rgba(244, 187, 146,0)',

  span: {
    fontWeight: 600,
    fontSize: '0.875rem'
  },

  '&:hover': {
    color: '$green-light'
  },

  '@md': {
    width: '100%',
    
  }
})