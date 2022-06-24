import { extendTheme } from '@chakra-ui/react'

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        textAlign: 'left',
        fontSize: 15,
        textUnderlineOffset: 2,
        textDecorationColor: '#525252',
        textDecorationThickness: 2,
        marginTop: 3,
        marginBottom: 3
      },
      'page-title': {
        textAlign: 'center',
        fontSize: 25
      }
    }
  },
}

const config = {
  initialColorMode: 'Dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, components })

export default theme