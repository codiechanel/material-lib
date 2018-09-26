import * as React from "react";
import * as PropTypes from "prop-types";
import "./index.css";
declare class Icon extends React.Component<any, any> {
    state: {
        on: boolean;
    };
    static propTypes: {
        children: PropTypes.Requireable<React.ReactNode>;
        className: PropTypes.Requireable<string>;
        name: PropTypes.Validator<string>;
        active: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        children: null;
        className: string;
        active: boolean;
    };
    forTogle(): void;
    render(): JSX.Element;
}
export default Icon;
