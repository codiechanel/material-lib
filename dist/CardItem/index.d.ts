import * as React from "react";
import * as PropTypes from "prop-types";
declare class CardItem extends React.Component<any, any> {
    static propTypes: {
        children: PropTypes.Requireable<React.ReactNode>;
        className: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        children: null;
        className: string;
    };
    onPress: () => void;
    render(): JSX.Element;
}
export default CardItem;
