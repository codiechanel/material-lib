import * as React from 'react';
import * as PropTypes from 'prop-types';
import '@material/react-card/dist/card.css';
export default class Header extends React.Component<any, any> {
    static propTypes: {
        children: PropTypes.Requireable<React.ReactNode>;
        className: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        children: null;
        className: string;
    };
    render(): JSX.Element;
}
