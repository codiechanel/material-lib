import * as React from "react"
import classnames from "classnames"
import * as PropTypes from "prop-types"

import common from "../common"

class Input extends React.Component<any, any> {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  }
  static defaultProps = {
    children: null,
    className: ""
  }

  public render() {
    const ThemeContext: any = common.getContext()
    const { className, style, children, ...otherProps } = this.props
    /**
     * unelevated doesn't seem to change much
     */
    const classesNew = classnames(className, {})

    return (
      <ThemeContext.Consumer>
        {theme => {
          let newStyle = Object.assign({ ...theme.input }, style)
          return (
            <input
              type="text"
              style={newStyle}
              className={classesNew}
              {...otherProps}
            />
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Input
