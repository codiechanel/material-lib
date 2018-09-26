import * as React from "react"
import classnames from "classnames"
import * as PropTypes from "prop-types"
import common from "../common"

class CardItem extends React.Component<any, any> {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
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
      className,

      onPress,
      children,
      ...otherProps
    } = this.props
    const classesNew = classnames(className, {})

    return (
      <ThemeContext.Consumer>
        {theme => {
          return (
            <div
              style={theme.cardItem}
              onClick={this.onPress}
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

export default CardItem
