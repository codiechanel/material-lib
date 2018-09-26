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

    const {
      className,

      children,

      ...otherProps
    } = this.props

    /**
     * unelevated doesn't seem to change much
     */

    const classesNew = classnames("mdc-text-field__input", className, {})

    return (
      <ThemeContext.Consumer>
        {theme => {
          return (
            <input style={theme.input} className={classesNew} {...otherProps} />
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Input
