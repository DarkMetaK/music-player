import { globalCss } from "./config";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  body: {
    backgroundColor: "$gray-900"
  },

  'body, input, textarea, button': {
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: 'Roboto',
    color: '$gray-400'
  },

  img: {
    display: 'block',
    maxWidth: '100%'
  },

  a: {
    textDecoration: 'none',
    color: '$gray-400'
  }
})