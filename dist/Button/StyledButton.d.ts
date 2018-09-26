import * as React from 'react';
import * as PropTypes from 'prop-types';
import '@material/react-button/dist/button.css';
import './mine.css';
export interface CardProps {
    className: String;
    raised: Boolean;
}
export default class StyledButton extends React.Component<CardProps, any> {
    static propTypes: {
        children: PropTypes.Requireable<React.ReactNode>;
        className: PropTypes.Requireable<string>;
        raised: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        children: null;
        className: string;
        raised: boolean;
    };
    render(): JSX.Element;
}
