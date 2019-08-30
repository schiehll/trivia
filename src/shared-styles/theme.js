import colors from "open-color/open-color"
import { cssElevation } from "css-elevation"

const baseSpacing = 8

const theme = {
  colors: {
    ...colors,
    text: colors.gray[9],
    border: colors.gray[2]
  },

  spacing: {
    base: baseSpacing,
    small: baseSpacing * 2,
    medium: baseSpacing * 3,
    big: baseSpacing * 4,
    huge: baseSpacing * 5
  },

  elevation: level => cssElevation({ z: level }),

  border: {
    size: 10,
    radius: 10
  },

  font: {
    family: "Arial",
    weights: {
      normal: 400,
      thin: 200,
      bold: 600
    },
    sizes: {
      default: 30,
      small: 22,
      big: 40
    }
  }
}

export default theme
