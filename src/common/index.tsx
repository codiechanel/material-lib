import * as React from "react"
import classnames from "classnames"
import * as PropTypes from "prop-types"
import { theme } from "./getTheme"
import merge from "deepmerge"

class Common {
  context = null
  getContext() {
    return this.context
  }
  createTheme(userTheme) {
    let result = merge(theme, userTheme)
    return result
  }
  createProvider() {
    const ThemeContext: any = React.createContext(theme)
    this.context = ThemeContext
    return class ThemeProvider extends React.Component<any, any> {
      render() {
        return (
          <ThemeContext.Provider value={this.props.theme}>
            {this.props.children}
          </ThemeContext.Provider>
        )
      }
    }
  }
}

interface ProviderProps {}

let common = new Common()
export default common
