import { extendTheme } from "@chakra-ui/react"

export default extendTheme({
  colors: {
    brand: {
      100: "#C2FCFF",
      200: "#C2FCFF",
      300: "#C2FCFF",
      400: "#C2FCFF",
      500: "#C2FCFF",
      600: "#C2FCFF",
      700: "#C2FCFF",
      800: "#C2FCFF",
      900: "#C2FCFF",
    }
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    body: "Montserrat",
    heading: "Montserrat",
    mono: "Menlo, monospace",
  },
  styles: {
    global: {
      body: {
        bg: 'none'
      },
      div: {
        p: {
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '150%',
          color: '#BABABA'
        },
        a: {
          color: '#C2FCFF'
        }
      }
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW:'1200px',
        paddingInline: '1em',
      }
    },
    Text: {
      baseStyle: {
        color: "#FFFFFF"
      }
    },
    Link: {
      variants: {
        solid: {
          color: "#C2FCFF"
        }
      }
    },
    Button: {
      variants: {
        solid: {
          bg: '#C2FCFF',
          boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.07), 0px 3px 14px rgba(0, 0, 0, 0.06), 0px 4px 5px rgba(0, 0, 0, 0.1)',
          borderRadius: '4px',
          color: '#272931'
        },
        ghost: {
          bg: 'none',
          borderRadius: '4px',
          color: '#C2FCFF',
          _hover: {
            bg: 'rgba(166, 183, 255, 0.4)'
          },
          _focus: {
            bg: 'rgba(166, 183, 255, 0.4)'
          },
          _active: {
            bg: 'rgba(166, 183, 255, 0.4)'
          },
          fontWeight: 500
        }
      }
    }
  }
})