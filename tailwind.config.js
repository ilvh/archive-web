module.exports = {
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    colors: {
      transparent: "transparent",
      inherit: "inherit",
      black: "#000",
      "black-a50": "rgba(0,0,0,0.5)",
      "black-a75": "rgba(0,0,0,0.75)",
      "black-a90": "rgba(0,0,0,0.90)",
      white: "#fff",
      "white-a75": "rgba(255,255,255,0.75)",
      "white-a85": "rgba(255,255,255,0.85)",
      "white-a30": "rgba(255,255,255,0.30)",

      gray: {
        100: "#F8F8F8",
        200: "#F0F0F0",
        // 300: "#e2e8f0",
        400: "#C8C8C8",
        // 500: "#a0aec0",
        600: "#979797",
        700: "#5C5C5C"
        // 800: "#2d3748",
        // 900: "#1a202c"
      },
      red: {
        // 100: "#fff5f5",
        // 200: "#fed7d7",
        // 300: "#feb2b2",
        400: "#fc8181",
        500: "#FF7676"
        // 600: "#e53e3e",
        // 700: "#c53030",
        // 800: "#9b2c2c",
        // 900: "#742a2a"
      },
      orange: {
        100: "#fffaf0",
        200: "#feebc8",
        300: "#fbd38d",
        400: "#f6ad55",
        500: "#ed8936",
        600: "#dd6b20",
        700: "#c05621",
        800: "#9c4221",
        900: "#7b341e"
      },
      yellow: {
        // 100: "#fffff0",
        // 200: "#fefcbf",
        // 300: "#faf089",
        // 400: "#f6e05e",
        500: "#FFD855",
        // 600: "#d69e2e",
        700: "#F0C141"
        // 800: "#975a16",
        // 900: "#744210"
      },
      green: {
        // 100: "#f0fff4",
        // 200: "#c6f6d5",
        // 300: "#9ae6b4",
        400: "#68d391",
        500: "#54B78A"
        // 600: "#38a169"
        // 700: "#2f855a",
        // 800: "#276749",
        // 900: "#22543d"
      },
      teal: {
        // 100: "#e6fffa",
        // 200: "#b2f5ea",
        // 300: "#81e6d9",
        // 400: "#4fd1c5",
        500: "#39BABD",
        600: "#21a4a6"
        // 700: "#2c7a7b",
        // 800: "#285e61",
        // 900: "#234e52"
      },
      blue: {
        // 100: "#ebf8ff",
        // 200: "#bee3f8",
        // 300: "#90cdf4",
        400: "#4896FE",
        500: "#3882E4",
        "500-a50": "rgba(56, 130, 228, 0.50)"
        // 600: "#3182ce",
        // 700: "#2b6cb0",
        // 800: "#2c5282",
        // 900: "#2a4365"
      },
      indigo: {
        100: "#ebf4ff",
        200: "#c3dafe",
        300: "#a3bffa",
        400: "#7f9cf5",
        500: "#667eea",
        600: "#5a67d8",
        700: "#4c51bf",
        800: "#434190",
        900: "#3c366b"
      },
      purple: {
        100: "#faf5ff",
        200: "#e9d8fd",
        300: "#d6bcfa",
        400: "#b794f4",
        500: "#9f7aea",
        600: "#805ad5",
        700: "#6b46c1",
        800: "#553c9a",
        900: "#44337a"
      },
      pink: {
        100: "#fff5f7",
        200: "#fed7e2",
        300: "#fbb6ce",
        400: "#f687b3",
        500: "#ed64a6",
        600: "#d53f8c",
        700: "#b83280",
        800: "#97266d",
        900: "#702459"
      }
    },
    spacing: {
      px: "1px",
      "0": "0",
      "0.5": "0.125rem",
      "1": "0.25rem",
      "1.5": "0.3125rem",
      "2": "0.5rem",
      "3": "0.75rem",
      "4": "1rem",
      "5": "1.25rem",
      "6": "1.5rem",
      "7": "1.75rem",
      "8": "2rem",
      "9": "2.375rem",
      "10": "2.5rem",
      "12": "3rem",
      "14": "3.4375rem",
      "16": "4rem",
      "20": "5rem",
      "24": "6rem",
      "32": "8rem",
      "36": "9.375rem",
      "40": "10rem",
      "44": "11rem",
      "48": "12rem",
      "56": "14rem",
      "60": "15rem",
      "64": "16rem",
      "70": "20rem",
      "76": "22.75rem",
      "80": "24rem",
      "87": "35rem"
    },
    percSpacing: {
      "1/2": "50%",
      "1/3": "33.33333%",
      "2/3": "66.66667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.66667%",
      "2/6": "33.33333%",
      "3/6": "50%",
      "4/6": "66.66667%",
      "5/6": "83.33333%",
      "1/7": "14.285714285714286%",
      "2/7": "28.571428571428572%",
      "3/7": "42.857142857142858%",
      "4/7": "57.142857142857144%",
      "1/12": "8.33333%",
      "2/12": "16.66667%",
      "3/12": "25%",
      "4/12": "33.33333%",
      "5/12": "41.66667%",
      "6/12": "50%",
      "7/12": "58.33333%",
      "8/12": "66.66667%",
      "9/12": "75%",
      "10/12": "83.33333%",
      "11/12": "91.66667%",
      full: "100%"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ],
      customFont: ["Noto Sans SC", "sans-serif"]
    },
    fontSize: {
      xs: "0.68rem",
      s: "0.8rem",
      sm: "0.85rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "2.5xl": "1.74rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "2.6rem",
      "6xl": "4rem",
      "7xl": "5rem"
    },
    fontWeight: {
      hairline: "100",
      thin: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      custom: "1.5rem",
      loose: "2"
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    textColor: theme => theme("colors"),
    backgroundColor: theme => theme("colors"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain"
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "1": "1px",
      "2": "2px",
      // "4": "4px",
      // "8": "8px",
      "10": "10px"
      // "12": "12px"
    },
    borderColor: theme => ({
      ...theme("colors"),
      current: "currentColor",
      default: theme("colors.gray.300", "currentColor")
    }),
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      default: "0.25rem",
      lg: "0.5rem",
      full: "9999px"
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      "not-allowed": "not-allowed"
    },
    width: theme => ({
      auto: "auto",
      ...theme("spacing"),
      ...theme("percSpacing"),
      screen: "100vw"
    }),
    height: theme => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100vh"
    }),
    minWidth: {
      "0": "0",
      full: "100%"
    },
    minHeight: {
      "0": "0",
      full: "100%",
      250: "15.625rem",
      screen: "100vh"
    },
    maxWidth: {
      xxs: "16rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "5.5xl": "67.5rem",
      "6xl": "72rem",
      full: "100%"
    },
    maxHeight: {
      full: "100%",
      screen: "100vh"
    },
    padding: theme => ({ ...theme("spacing"), ...theme("percSpacing") }),
    margin: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...theme("percSpacing"),
      ...negative(theme("spacing"))
    }),
    objectPosition: {
      bottom: "bottom",
      center: "center",
      "center-bottom": "center bottom",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    boxShadow: {
      default:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md:
        "0 0px 6px -1px rgba(0, 0, 0, 0.1), 0 1px 4px -1px rgba(0, 0, 0, 0.06)",
      lg:
        "0 0px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl:
        "0 0px 25px -5px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      custom:
        "0 0px 6px -1px rgba(0, 0, 0, 0.1), 0 1px 4px 1px rgba(0, 0, 0, 0.2)",
      custom2: "0 9px 17px 0 rgba(0,0,0,0.20)",
      custom3: "0px 10px 20px 0px rgba(0,0,0,0.15)",
      none: "none"
    },
    zIndex: {
      auto: "auto",
      behind: "-1",
      "0": "0",
      "10": "10",
      "20": "20",
      "30": "30",
      "40": "40",
      "50": "50"
    },
    opacity: {
      "0": "0",
      "15": "0.15",
      "25": "0.25",
      "50": "0.5",
      "75": "0.75",
      "95": "0.95",
      "100": "1"
    },
    fill: {
      current: "currentColor"
    },
    stroke: {
      current: "currentColor"
    },
    flex: {
      "1": "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none"
    },
    flexGrow: {
      "0": "0",
      default: "1"
    },
    flexShrink: {
      "0": "0",
      default: "1"
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12"
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal"
    },

    inset: (theme, { negative }) => ({
      "0": "0",
      auto: "auto",
      ...theme("spacing"),
      ...theme("percSpacing"),
      ...negative({
        ...theme("spacing"),
        ...theme("percSpacing")
      })
    }),
    container: {}
  },
  variants: {
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundColor: ["responsive", "hover", "focus"],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: ["responsive"],
    borderColor: ["responsive", "hover", "focus"],
    borderRadius: ["responsive"],
    borderStyle: ["responsive"],
    borderWidth: ["responsive"],
    boxShadow: ["responsive", "hover", "focus"],
    cursor: ["responsive"],
    display: ["responsive", "hover", "group-hover"],
    flexDirection: ["responsive"],
    flexWrap: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    justifyContent: ["responsive"],
    alignContent: ["responsive"],
    flex: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    order: ["responsive"],
    float: ["responsive"],
    fontFamily: ["responsive"],
    fontWeight: ["responsive", "hover", "focus"],
    height: ["responsive", "group-hover"],
    lineHeight: ["responsive"],
    listStylePosition: ["responsive"],
    listStyleType: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    objectFit: ["responsive"],
    objectPosition: ["responsive"],
    opacity: ["responsive", "hover", "group-hover"],
    outline: ["responsive", "focus"],
    overflow: ["responsive"],
    padding: ["responsive"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    inset: ["responsive", "group-hover", "hover"],
    resize: ["responsive"],
    boxShadow: ["responsive", "hover", "focus"],
    fill: ["responsive"],
    stroke: ["responsive"],
    tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
    fontSize: ["responsive"],
    fontStyle: ["responsive"],
    textTransform: ["responsive"],
    textDecoration: ["responsive", "hover", "focus"],
    fontSmoothing: ["responsive"],
    letterSpacing: ["responsive"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive"],
    whitespace: ["responsive"],
    wordBreak: ["responsive"],
    width: ["responsive"],
    zIndex: ["responsive", "group-hover"]
  },
  corePlugins: {},
  plugins: []
};
