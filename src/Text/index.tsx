import * as React from "react"
import classnames from "classnames"
import * as PropTypes from "prop-types"

import common from "../common"
// export interface CardProps {
//   className: String
//   outlined: Boolean
// }

class Text extends React.Component<any, any> {
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
    const { theme, className, children, ...otherProps } = this.props
    const classesNew = classnames(className, {})

    return (
      // <div className={classesNew} {...otherProps}>
      //   {children}
      // </div>
      <ThemeContext.Consumer>
        {theme => {
          return (
            <div style={theme.text} className={classesNew} {...otherProps}>
              {children}
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Text
