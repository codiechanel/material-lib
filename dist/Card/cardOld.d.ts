import * as React from 'react';
import * as PropTypes from 'prop-types';
import '@material/react-card/dist/card.css';
export default class Card extends React.Component<any, any> {
    static propTypes: {
        children: PropTypes.Requireable<React.ReactNode>;
        className: PropTypes.Requireable<string>;
        outlined: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        children: null;
        className: string;
        outlined: boolean;
    };
    render(): JSX.Element;
}
