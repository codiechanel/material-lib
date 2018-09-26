import * as React from "react";
import * as PropTypes from "prop-types";
declare class ListItem extends React.Component<any, any> {
    static propTypes: {
        children: PropTypes.Requireable<React.ReactNode>;
        className: PropTypes.Requireable<string>;
        onPress: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        children: null;
        className: string;
    };
    onPress: () => void;
    render(): JSX.Element;
}
export default ListItem;
