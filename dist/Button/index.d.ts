import * as React from "react";
import * as PropTypes from "prop-types";
declare class Button extends React.Component<any, any> {
    static propTypes: {
        children: PropTypes.Requireable<React.ReactNode>;
        className: PropTypes.Requireable<string>;
        raised: PropTypes.Requireable<boolean>;
        success: PropTypes.Requireable<boolean>;
        onPress: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        children: null;
        className: string;
        raised: boolean;
        success: boolean;
    };
    onPress: () => void;
    render(): JSX.Element;
}
export default Button;
