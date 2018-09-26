import * as React from "react"
import classnames from "classnames"
import * as PropTypes from "prop-types"
// import "./index.css"

// import "@material/react-button/dist/button.css"

// import './mdc.shape.css'
// import "./mine.css"

import common from "../common"

class Button extends React.Component<any, any> {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    raised: PropTypes.bool,
    success: PropTypes.bool,

    onPress: PropTypes.func
  }
  static defaultProps = {
    children: null,
    className: "",
    raised: false,
    success: false
  }

  onPress = () => {
    if (this.props.onPress) {
      this.props.onPress()
    }
  }

  public render() {
    const ThemeContext: any = common.getContext()

    const {
      className,
      onPress,
      style,
      children,
      raised,
      success,
      ...otherProps
    } = this.props

    /**
     * unelevated doesn't seem to change much
     */

    const classesNew = classnames(
      "mdc-button",

      "mdc-button--unelevated",

      className,
      {
        "mdc-button--raised": raised
      }
    )

    return (
      <ThemeContext.Consumer>
        {theme => {
          let backgroundColor = theme.button.backgroundColor
          if (success) {
            backgroundColor = theme.palette.brandSuccess
          }
          /**
           * theme is readonly so we need to make a copy
           */
          let buttonStyle = { ...theme.button }
          let newStyle = Object.assign(buttonStyle, { backgroundColor }, style)

          return (
            <button
              style={newStyle}
              onClick={this.onPress}
              className={classesNew}
              {...otherProps}
            >
              {children}
            </button>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Button
