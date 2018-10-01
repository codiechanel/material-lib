const palette = {
  // Color
  brandPrimary: "#606984",
  brandInfo: "#62B1F6",
  brandSuccess: "#5cb85c",
  brandDanger: "#d9534f",
  brandWarning: "#f0ad4e",
  brandDark: "#191b22",
  brandLight: "#f4f4f4",
  backgroundPrimary: "#282c37"
  // backgroundSecondary: ""
}

export const theme = {
  palette,
  common: {
    padding: 10
  },
  /**
   * overrides
   */
  container: {
    backgroundColor: palette.brandDark
  },
  content: {
    backgroundColor: palette.backgroundPrimary
  },
  list: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    overflowY: "auto"
  },
  button: {
    backgroundColor: palette.brandPrimary,
    margin: 10
  },
  body: {
    display: "flex",
    flex: 1,
    padding: 10
  },
  input: {
    color: "white",
    border: "none",
    margin: 10,
    paddingRight: 10,
    backgroundColor: "inherit"
  },
  left: {
    display: "flex",
    /**
     * this should not be flex 1
     */
    // flex: 1,
    padding: 10
  },
  cardItem: {
    display: "flex",
    flex: 1
  },
  text: {
    color: "white",
    display: "block"
  },
  listItem: {
    // display: "flex",
    // flex: 1,
    padding: 10
  },
  item: {
    display: "flex"
    // flex: 1
  },

  icon: {
    color: "white",
    fontSize: 27,
    // padding: 10,
    width: 40,
    height: 40
  }
}
