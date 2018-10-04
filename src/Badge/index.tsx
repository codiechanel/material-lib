import * as React from "react"
import classnames from "classnames"
import * as PropTypes from "prop-types"
import common from "../common"

// export interface CardProps {
//   className: String
//   outlined: Boolean
// }

class Badge extends React.Component<any, any> {
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
    const classesNew = classnames(
      "badge badge-pill badge-primary",
      className,
      {}
    )

    return (
      <ThemeContext.Consumer>
        {theme => {
          return (
            <span
              ref={innerRef}
              style={{ ...theme.badge, ...style }}
              className={classesNew}
              {...otherProps}
            >
              {children}
            </span>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
{
  /* <span className="badge badge-pill badge-primary">P</span> */
}

export default Badge
// export default Container
