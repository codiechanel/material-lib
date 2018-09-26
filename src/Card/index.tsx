import * as React from "react"
import classnames from "classnames"
import * as PropTypes from "prop-types"
import common from "../common"

class Card extends React.Component<any, any> {
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
    const { className, children, ...otherProps } = this.props
    const classesNew = classnames(className, {})

    // const styles = this.props.style

    return (
      <ThemeContext.Consumer>
        {theme => {
          return (
            <div style={theme.card} className={classesNew} {...otherProps}>
              {children}
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Card
// export default Container
