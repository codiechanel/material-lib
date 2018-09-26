import * as React from "react";
import * as PropTypes from "prop-types";
export default class Thumbnail extends React.Component<any, any> {
    static propTypes: {
        children: PropTypes.Requireable<React.ReactNode>;
        className: PropTypes.Requireable<string>;
        small: PropTypes.Requireable<boolean>;
        large: PropTypes.Requireable<boolean>;
        source: PropTypes.Validator<object>;
    };
    static defaultProps: {
        children: null;
        className: string;
        small: boolean;
        large: boolean;
    };
    render(): JSX.Element;
}
