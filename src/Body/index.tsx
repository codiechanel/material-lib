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

    return (
      <ThemeContext.Consumer>
        {theme => {
          let bodyStyle = { ...theme.body }
          let newStyle = Object.assign(bodyStyle, style)
          return (
            <div
              ref={innerRef}
              style={newStyle}
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
