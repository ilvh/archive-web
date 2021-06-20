import { ImageProps } from "../../../../components/elements/image";
export const clips: { [k: number]: ImageProps } = {
  1: {
    webp: {
      1: require("./1.png?webp"),
      2: require("./1.png?webp")
    },
    png: {
      1: require("./1.png"),
      2: require("./1.png")
    }
  },
  2: {
    webp: {
      1: require("./2.png?webp"),
      2: require("./2.png?webp")
    },
    png: {
      1: require("./2.png"),
      2: require("./2.png")
    }
  },
  3: {
    webp: {
      1: require("./3.png?webp"),
      2: require("./3.png?webp")
    },
    png: {
      1: require("./3.png"),
      2: require("./3.png")
    }
  },
  4: {
    webp: {
      1: require("./4.png?webp"),
      2: require("./4.png?webp")
    },
    png: {
      1: require("./4.png"),
      2: require("./4.png")
    }
  }
};
