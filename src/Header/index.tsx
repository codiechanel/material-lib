import * as React from 'react'
import classnames from 'classnames'
import * as PropTypes from 'prop-types'
import '@material/react-card/dist/card.css'
import * as CSS from 'csstype'
// export interface CardProps {
//   className: String
//   outlined: Boolean
// }

export default class Header extends React.Component<any, any> {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }
  static defaultProps = {
    children: null,
    className: '',
  }

  public render() {
    /** @type {{root: React.CSSProperties}} */
    const styles: CSS.Properties = {
      display: 'flex',
      flex: 1,
    }
    const { className, children, ...otherProps } = this.props
    const classes = classnames(className, {})

    return (
      <div style={styles} className={classes} {...otherProps}>
        {children}
      </div>
    )
  }
}
