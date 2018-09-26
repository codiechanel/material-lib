import * as React from "react"
import classnames from "classnames"
import * as PropTypes from "prop-types"
import common from "../common"
// export interface CardProps {
//   className: String
//   outlined: Boolean
// }

class ListItem extends React.Component<any, any> {
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
    const { onPress, className, children, ...otherProps } = this.props
    const classesNew = classnames(className, {})

    return (
      <ThemeContext.Consumer>
        {theme => {
          return (
            <div
              style={theme.listItem}
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

export default ListItem
