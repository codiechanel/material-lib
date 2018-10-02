import * as React from "react"
import classnames from "classnames"
import * as PropTypes from "prop-types"
import common from "../common"

// export interface CardProps {
//   className: String
//   outlined: Boolean
// }

class Body extends React.Component<any, any> {
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
      theme,
      className,
      children,
      style,

      innerRef,
      ...otherProps
    } = this.props
    const classesNew = classnames(className, {})
    console.log("...otherProps", otherProps)

    return (
      <ThemeContext.Consumer>
        {theme => {
          return (
            <div
              ref={innerRef}
              style={{ ...theme.body, ...style }}
              className={classesNew}
              {...otherProps}
            >
              {children}
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Body
// export default Container
