import * as React from "react"
import classnames from "classnames"
import * as PropTypes from "prop-types"
import common from "../common"

// export interface CardProps {
//   className: String
//   outlined: Boolean
// }

class IconButton extends React.Component<any, any> {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onPress: PropTypes.func
  }
  static defaultProps = {
    children: null,
    className: ""
  }

  onPress = () => {
    if (this.props.onPress) {
      this.props.onPress()
    }
  }

  public render() {
    const ThemeContext: any = common.getContext()

    const {
      theme,
      className,
      children,
      onPress,
      style,

      innerRef,
      ...otherProps
    } = this.props
    const classesNew = classnames("btn btn-primary px-3", className, {})

    return (
      // material-icons
      <ThemeContext.Consumer>
        {theme => {
          return (
            <button
              onClick={this.onPress}
              className={classesNew}
              style={{ ...theme.iconButton, ...style }}
              {...otherProps}
              type="button"
            >
              <i className="material-icons">{children}</i>
            </button>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
{
  /* <span className="badge badge-pill badge-primary">P</span> */
}

export default IconButton
// export default Container
