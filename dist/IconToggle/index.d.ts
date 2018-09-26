import * as React from "react";
import * as PropTypes from "prop-types";
import "./index.css";
declare class IconToggle extends React.Component<any, any> {
    state: {
        on: boolean;
    };
    static propTypes: {
        children: PropTypes.Requireable<React.ReactNode>;
        className: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        children: null;
        className: string;
    };
    forTogle(): void;
    render(): JSX.Element;
}
export default IconToggle;
