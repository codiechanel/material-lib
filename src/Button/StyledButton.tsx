import * as React from "react"
import classnames from "classnames"
import * as PropTypes from "prop-types"
// import './button.css'
import "@material/react-button/dist/button.css"
import * as CSS from "csstype"
// import './mdc.shape.css'
import "./mine.css"
export interface CardProps {
  className: String
  raised: Boolean
}

export default class StyledButton extends React.Component<CardProps, any> {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    raised: PropTypes.bool
  }
  static defaultProps = {
    children: null,
    className: "",
    raised: false
  }

  public render() {
    const styles: CSS.Properties = {
      backgroundColor: "green"
    }
    const { className, children, raised, ...otherProps } = this.props
    const classes = classnames("mdc-button", className, {
      "mdc-button--raised": raised
    })

    return (
      <div className="mdc-shape-container my-shape-container">
        {/* <div className={classes} {...otherProps}>
          {children}
        </div> */}
        <button className="mdc-button mdc-button--unelevated">Button</button>
        <div className="mdc-shape-container__corner mdc-shape-container__corner--top-left" />
        <div className="mdc-shape-container__corner mdc-shape-container__corner--top-right" />
        <div className="mdc-shape-container__corner mdc-shape-container__corner--bottom-right" />
        <div className="mdc-shape-container__corner mdc-shape-container__corner--bottom-left" />
      </div>
    )
  }
}
