import * as React from "react"
import classnames from "classnames"
import * as PropTypes from "prop-types"
import common from "../common"
import "./index.css"

// export interface CardProps {
//   className: String
//   outlined: Boolean
// }

class Icon extends React.Component<any, any> {
  state = {
    on: false
  }
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    active: PropTypes.bool
  }
  static defaultProps = {
    children: null,
    className: "",
    active: false
  }

  forTogle() {}

  public render() {
    const ThemeContext: any = common.getContext()
    const {
      theme,
      active,
      className,
      name,
      children,
      ...otherProps
    } = this.props
    const classesNew = classnames("material-icons", className, {})
    // mdc-icon-button__icon--on
    // const styles = this.props.style
    let newName = name

    if (!this.props.active) {
      newName = name + "_border"
    }

    return (
      // <i className={classesNew} {...otherProps}>
      //   {newName}
      // </i>
      <ThemeContext.Consumer>
        {theme => {
          return (
            //  <div style={theme.content} className={classesNew} {...otherProps}>
            //    {children}
            //  </div>
            // <button className="mdc-icon-button material-icons">
            //   {newName}
            // </button>
            // <span>
            <i style={theme.icon} className={classesNew} {...otherProps}>
              {newName}
            </i>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

// const styles = theme => ({
//   /**
//    * if theme.container exists
//    * then we need to use that override here
//    */
//   icon: {
//     color: theme.icon.color,
//     fontSize: theme.icon.fontSize,
//     padding: theme.common.padding
//     // backgroundColor: theme.container.backgroundColor,
//   }
// })

export default Icon
// export default Container
