import { extendTheme } from "@chakra-ui/react"

export default extendTheme({
  colors: {
    grey: "#BABABA",
    brand: {
      100: "#C2FCFF",
      200: "#BABABA",
      300: "FFFFFF",
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
      }
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW: '1200px',
        paddingInline: '1em',
      }
    },
    Text: {
      baseStyle: {
        color: "#FFFFFF"
      },
      variants: {
        content: {
          color: '#BABABA',
          fontSize: '1em',
          fontWeight: 400,
        }
      }
    },
    Heading: {
      baseStyle: {
        fontSize: '2em',
        mt: '1.5em',
        mb: '0.5em',
        fontWeight: 500
      },
      sizes: {
        md: {
          fontSize: '1.5em',
          mt: '1em',
          mb: '1em',
          fontWeight: 500
        },
        lg: {
          fontSize: '2.05em',
          mt: '1.5em',
          mb: '0.6em',
          fontWeight: 500
        }
      }
    },
    Link: {
      baseStyle: {
        fontSize: '1em',
        fontWeight: 500,
        color: "#C2FCFF"
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