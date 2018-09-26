import * as React from "react"
import classnames from "classnames"
import * as PropTypes from "prop-types"

import "./index.css"

// export interface CardProps {
//   className: String
//   outlined: Boolean
// }

class IconToggle extends React.Component<any, any> {
  state = {
    on: false
  }
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  }
  static defaultProps = {
    children: null,
    className: ""
  }

  forTogle() {}

  public render() {
    const {
      classes,
      theme,
      onPress,
      className,
      children,
      ...otherProps
    } = this.props
    const classesNew = classnames(classes.icon, className, {})
    // mdc-icon-button__icon--on
    // const styles = this.props.style

    return (
      <button
        onClick={() => {
          // toggle
          this.setState({ on: !this.state.on })
        }}
        id="add-to-favorites"
        className="mdc-icon-button "
        aria-label="Add to favorites"
        aria-hidden="true"
        aria-pressed="false"
      >
        <i
          className={`material-icons mdc-icon-button__icon ${
            this.state.on ? "" : "mdc-icon-button__icon--on"
          }`}
        >
          favorite
        </i>
        <i
          className={`material-icons mdc-icon-button__icon ${
            this.state.on ? "mdc-icon-button__icon--on" : ""
          }`}
        >
          favorite_border
        </i>
      </button>

      // <div>
      //   <span style={{ color: 'white' }} className="mi mi-face" />
      //   <span style={{ color: 'white' }} className="material-icons">
      //     face
      //   </span>
      // </div>
      // <div className={classesNew} {...otherProps}>
      //   {children}
      // </div>
    )
  }
}

const styles = theme => ({
  /**
   * if theme.container exists
   * then we need to use that override here
   */
  icon: {
    // backgroundColor: theme.colorPrimary,
    // backgroundColor: theme.container.backgroundColor,
  }
})

export default IconToggle
// export default Container
