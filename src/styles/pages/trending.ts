import { styled } from "../config";

export const TrendingContainer = styled('main', {
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

export const CategoriesContainer = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1rem'
})

export const CategoryCard = styled('div', {
  justifySelf: 'center',
  backgroundColor: '$gray-800',
  padding: '1rem',
  borderRadius: 10,
  color: '$gray-400',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  img: {
    borderRadius: 10,
    height: 'auto'
  },

  h2: {
    fontSize: '1.125rem',
    color: '$gray-300',
    fontWeight: 700,
    textAlign: 'center'
  }
})