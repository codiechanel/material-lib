import * as React from 'react'
import classnames from 'classnames'
import * as PropTypes from 'prop-types'
import '@material/react-card/dist/card.css'
// export interface CardProps {
//   className: String
//   outlined: Boolean
// }

export default class Card extends React.Component<any, any> {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    outlined: PropTypes.bool,
  }
  static defaultProps = {
    children: null,
    className: '',
    outlined: false,
  }

  public render() {
    const { className, children, outlined, ...otherProps } = this.props
    const classes = classnames('mdc-card', className, {
      'mdc-card--outlined': outlined,
    })
    console.log('classes', classes)

    return (
      <div className={classes} {...otherProps}>
        {children}
      </div>
    )
  }
}
