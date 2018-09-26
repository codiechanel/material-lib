import * as React from "react"
import classnames from "classnames"
import * as PropTypes from "prop-types"
import common from "../common"

// export interface CardProps {
//   className: String
//   outlined: Boolean
// }

class Container extends React.Component<any, any> {
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

    // const styles = this.props.style

    return (
      <ThemeContext.Consumer>
        {theme => {
          return (
            <div style={theme.container} className={classesNew} {...otherProps}>
              {children}
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Container
// export default Container
