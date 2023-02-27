import { styled } from "../config";

export const LibraryContainer = styled('main', {
  width: '100%',
  padding: '2rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  h1: {
    color: '$gray-300',
    fontWeight: 700
  },
})

export const PlaylistsContainer = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1rem'
})
