import * as React from "react"
import classnames from "classnames"
import * as PropTypes from "prop-types"

// export interface CardProps {
//   className: String
//   outlined: Boolean
// }

export default class Thumbnail extends React.Component<any, any> {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    small: PropTypes.bool,
    large: PropTypes.bool,
    source: PropTypes.object.isRequired
  }
  static defaultProps = {
    children: null,
    className: "",
    small: false,
    large: false
  }

  public render() {
    const { className, children, small, ...otherProps } = this.props
    const classes = classnames(className, {
      // 'mdc-card--outlined': outlined,
    })
    let size = {
      height: 50,
      width: 50
    }
    if (this.props.large) {
      size = {
        height: 100,
        width: 100
      }
    }
    let { height, width } = size
    let src = this.props.source.uri
    // const classes = classnames('mdc-card', className, {
    //   'mdc-card--outlined': outlined,
    // })

    return <img src={src} height={height} width={width} />
  }
}
