import { extendTheme } from '@chakra-ui/react'

const colors = {}

const fonts = {}

const fontSizes = {}

export const breakpoints = {}

const styles = {
  global: () => ({
    body: {},
  }),
}

const space = [
  '0px',
  '8px',
  '16px',
  '24px',
  '32px',
  '40px',
  '48px',
  '56px',
  '64px',
  '72px',
  '80px',
  '88px',
  '96px',
  '104px',
]

export const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  space,
  fontSizes,
  styles,
})
