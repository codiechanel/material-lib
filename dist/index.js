'use strict';



function __$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

const palette = {
    // Color
    brandPrimary: "#606984",
    brandInfo: "#62B1F6",
    brandSuccess: "#5cb85c",
    brandDanger: "#d9534f",
    brandWarning: "#f0ad4e",
    brandDark: "#191b22",
    brandLight: "#f4f4f4",
    backgroundPrimary: "#282c37"
    // backgroundSecondary: ""
};
const theme = {
    palette,
    common: {
        padding: 10
    },
    /**
     * overrides
     */
    container: {
        backgroundColor: palette.brandDark
    },
    content: {
        backgroundColor: palette.backgroundPrimary
    },
    list: {
        flex: 1,
        overflowY: "auto"
    },
    button: {
        backgroundColor: palette.brandPrimary,
        margin: 10
    },
    body: {
        padding: 10
    },
    input: {
        color: "white"
    },
    left: {
        display: "flex",
        /**
         * this should not be flex 1
         */
        // flex: 1,
        padding: 10
    },
    cardItem: {
        display: "flex",
        flex: 1
    },
    text: {
        color: "white",
        display: "block"
    },
    listItem: {
        display: "flex",
        flex: 1,
        padding: 10
    },
    item: {
        display: "flex"
        // flex: 1
    },
    icon: {
        color: "white",
        fontSize: 27,
        padding: 10,
        width: 40,
        height: 40
    }
};

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

class Common {
    constructor() {
        this.context = null;
    }
    getContext() {
        return this.context;
    }
    createTheme(userTheme) {
        let result = deepmerge_1(theme, userTheme);
        return result;
    }
    createProvider() {
        const ThemeContext = React.createContext(theme);
        this.context = ThemeContext;
        return class ThemeProvider extends React.Component {
            render() {
                console.log(this.props);
                return (React.createElement(ThemeContext.Provider, { value: this.props.theme }, this.props.children));
            }
        };
    }
}
// const Provider  = (WrappedComponent) => {
//   return class ThemeProvider extends React.Component<any, any> {
//     render() {
//       console.log(this.props)
//       return (
//         <WrappedComponent.Provider value={this.props.theme}>
//           {this.props.children}
//         </WrappedComponent.Provider>
//       )
//     }
//   }
// };
// export default Provider;
let common = new Common();

// export interface CardProps {
//   className: String
//   outlined: Boolean
// }
class Container extends React.Component {
    render() {
        const ThemeContext = common.getContext();
        const _a = this.props, { theme, className, children } = _a, otherProps = __rest(_a, ["theme", "className", "children"]);
        const classesNew = classnames(className, {});
        // const styles = this.props.style
        return (React.createElement(ThemeContext.Consumer, null, theme => {
            return (React.createElement("div", Object.assign({ style: theme.container, className: classesNew }, otherProps), children));
        }));
    }
}
Container.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
Container.defaultProps = {
    children: null,
    className: ""
};
// export default Container

// export interface CardProps {
//   className: String
//   outlined: Boolean
// }
class Content extends React.Component {
    render() {
        const ThemeContext = common.getContext();
        const _a = this.props, { className, theme, children } = _a, otherProps = __rest(_a, ["className", "theme", "children"]);
        const classesNew = classnames(className, {});
        return (React.createElement(ThemeContext.Consumer, null, theme => {
            return (React.createElement("div", Object.assign({ style: theme.content, className: classesNew }, otherProps), children));
        }));
    }
}
Content.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
Content.defaultProps = {
    children: null,
    className: ""
};

__$styleInject("@keyframes _mdc-ripple-fg-radius-in_11swe_1 {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1); }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n\n@keyframes _mdc-ripple-fg-opacity-in_11swe_1 {\n  from {\n    animation-timing-function: linear;\n    opacity: 0; }\n  to {\n    opacity: var(--mdc-ripple-fg-opacity, 0); } }\n\n@keyframes _mdc-ripple-fg-opacity-out_11swe_1 {\n  from {\n    animation-timing-function: linear;\n    opacity: var(--mdc-ripple-fg-opacity, 0); }\n  to {\n    opacity: 0; } }\n\n._mdc-ripple-surface--test-edge-var-bug_11swe_22 {\n  --mdc-ripple-surface-test-edge-var: 1px solid #000;\n  visibility: hidden; }\n  ._mdc-ripple-surface--test-edge-var-bug_11swe_22::before {\n    border: var(--mdc-ripple-surface-test-edge-var); }\n\n._mdc-icon-button_11swe_28 {\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity;\n  width: 48px;\n  height: 48px;\n  padding: 12px;\n  font-size: 24px;\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  fill: currentColor;\n  color: inherit;\n  text-decoration: none;\n  cursor: pointer;\n  user-select: none; }\n  ._mdc-icon-button_11swe_28::before, ._mdc-icon-button_11swe_28::after {\n    position: absolute;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  ._mdc-icon-button_11swe_28::before {\n    transition: opacity 15ms linear;\n    z-index: 1; }\n  ._mdc-icon-button_11swe_28._mdc-ripple-upgraded_11swe_61::before {\n    transform: scale(var(--mdc-ripple-fg-scale, 1)); }\n  ._mdc-icon-button_11swe_28._mdc-ripple-upgraded_11swe_61::after {\n    top: 0;\n    /* @noflip */\n    left: 0;\n    transform: scale(0);\n    transform-origin: center center; }\n  ._mdc-icon-button_11swe_28._mdc-ripple-upgraded--unbounded_11swe_69::after {\n    top: var(--mdc-ripple-top, 0);\n    /* @noflip */\n    left: var(--mdc-ripple-left, 0); }\n  ._mdc-icon-button_11swe_28._mdc-ripple-upgraded--foreground-activation_11swe_73::after {\n    animation: 225ms :local(mdc-ripple-fg-radius-in) forwards, 75ms :local(mdc-ripple-fg-opacity-in) forwards; }\n  ._mdc-icon-button_11swe_28._mdc-ripple-upgraded--foreground-deactivation_11swe_75::after {\n    animation: 150ms :local(mdc-ripple-fg-opacity-out);\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); }\n  ._mdc-icon-button_11swe_28::before, ._mdc-icon-button_11swe_28::after {\n    top: calc(50% - 50%);\n    /* @noflip */\n    left: calc(50% - 50%);\n    width: 100%;\n    height: 100%; }\n  ._mdc-icon-button_11swe_28._mdc-ripple-upgraded_11swe_61::before, ._mdc-icon-button_11swe_28._mdc-ripple-upgraded_11swe_61::after {\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    /* @noflip */\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: var(--mdc-ripple-fg-size, 100%); }\n  ._mdc-icon-button_11swe_28._mdc-ripple-upgraded_11swe_61::after {\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: var(--mdc-ripple-fg-size, 100%); }\n  ._mdc-icon-button_11swe_28 svg,\n  ._mdc-icon-button_11swe_28 img {\n    width: 24px;\n    height: 24px; }\n  ._mdc-icon-button_11swe_28:disabled {\n    color: rgba(0, 0, 0, 0.38);\n    /* @alternate */\n    color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n    cursor: default;\n    pointer-events: none; }\n  ._mdc-icon-button_11swe_28::before, ._mdc-icon-button_11swe_28::after {\n    background-color: #000; }\n  ._mdc-icon-button_11swe_28:hover::before {\n    opacity: 0.04; }\n  ._mdc-icon-button_11swe_28:not(._mdc-ripple-upgraded_11swe_61):focus::before, ._mdc-icon-button_11swe_28._mdc-ripple-upgraded--background-focused_11swe_107::before {\n    transition-duration: 75ms;\n    opacity: 0.12; }\n  ._mdc-icon-button_11swe_28:not(._mdc-ripple-upgraded_11swe_61)::after {\n    transition: opacity 150ms linear; }\n  ._mdc-icon-button_11swe_28:not(._mdc-ripple-upgraded_11swe_61):active::after {\n    transition-duration: 75ms;\n    opacity: 0.16; }\n  ._mdc-icon-button_11swe_28._mdc-ripple-upgraded_11swe_61 {\n    --mdc-ripple-fg-opacity: 0.16; }\n\n._mdc-icon-button__icon_11swe_118 {\n  display: inline-block; }\n  ._mdc-icon-button__icon_11swe_118._mdc-icon-button__icon--on_11swe_120 {\n    display: none; }\n\n._mdc-icon-button--on_11swe_123 ._mdc-icon-button__icon_11swe_118 {\n  display: none; }\n  ._mdc-icon-button--on_11swe_123 ._mdc-icon-button__icon_11swe_118._mdc-icon-button__icon--on_11swe_120 {\n    display: inline-block; }\n", {});

// export interface CardProps {
//   className: String
//   outlined: Boolean
// }
class Icon extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            on: false
        };
    }
    forTogle() { }
    render() {
        const ThemeContext = common.getContext();
        const _a = this.props, { theme, active, className, name, children } = _a, otherProps = __rest(_a, ["theme", "active", "className", "name", "children"]);
        const classesNew = classnames("material-icons mdc-icon-button__icon", className, {});
        // mdc-icon-button__icon--on
        // const styles = this.props.style
        let newName = name;
        if (!this.props.active) {
            newName = name + "_border";
        }
        return (
        // <i className={classesNew} {...otherProps}>
        //   {newName}
        // </i>
        React.createElement(ThemeContext.Consumer, null, theme => {
            return (
            //  <div style={theme.content} className={classesNew} {...otherProps}>
            //    {children}
            //  </div>
            React.createElement("i", Object.assign({ style: theme.icon, className: classesNew }, otherProps), newName));
        }));
    }
}
Icon.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    active: PropTypes.bool
};
Icon.defaultProps = {
    children: null,
    className: "",
    active: false
};
// export default Container

// export interface CardProps {
//   className: String
//   outlined: Boolean
// }
class List extends React.Component {
    render() {
        const ThemeContext = common.getContext();
        const _a = this.props, { className, children } = _a, otherProps = __rest(_a, ["className", "children"]);
        const classes = classnames(className, {});
        return (React.createElement(ThemeContext.Consumer, null, theme => {
            return (React.createElement("div", Object.assign({ style: theme.list, className: classes }, otherProps), children));
        }));
    }
}
List.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
List.defaultProps = {
    children: null,
    className: ""
};

// export interface CardProps {
//   className: String
//   outlined: Boolean
// }
class ListItem extends React.Component {
    constructor() {
        super(...arguments);
        this.onPress = () => {
            if (this.props.onPress) {
                this.props.onPress();
            }
        };
    }
    render() {
        const ThemeContext = common.getContext();
        const _a = this.props, { onPress, className, children } = _a, otherProps = __rest(_a, ["onPress", "className", "children"]);
        const classesNew = classnames(className, {});
        return (React.createElement(ThemeContext.Consumer, null, theme => {
            return (React.createElement("div", Object.assign({ style: theme.listItem, onClick: this.onPress, className: classesNew }, otherProps), children));
        }));
    }
}
ListItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onPress: PropTypes.func
};
ListItem.defaultProps = {
    children: null,
    className: ""
};

// export interface CardProps {
//   className: String
//   outlined: Boolean
// }
class Text extends React.Component {
    render() {
        const ThemeContext = common.getContext();
        const _a = this.props, { theme, className, children } = _a, otherProps = __rest(_a, ["theme", "className", "children"]);
        const classesNew = classnames(className, {});
        return (
        // <div className={classesNew} {...otherProps}>
        //   {children}
        // </div>
        React.createElement(ThemeContext.Consumer, null, theme => {
            return (React.createElement("div", Object.assign({ style: theme.text, className: classesNew }, otherProps), children));
        }));
    }
}
Text.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
Text.defaultProps = {
    children: null,
    className: ""
};

class Left extends React.Component {
    render() {
        const ThemeContext = common.getContext();
        const _a = this.props, { className, children } = _a, otherProps = __rest(_a, ["className", "children"]);
        const classesNew = classnames(className, {});
        return (React.createElement(ThemeContext.Consumer, null, theme => {
            return (React.createElement("div", Object.assign({ style: theme.left, className: classesNew }, otherProps), children));
        }));
    }
}
Left.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
Left.defaultProps = {
    children: null,
    className: ""
};

// export interface CardProps {
//   className: String
//   outlined: Boolean
// }
class Body extends React.Component {
    render() {
        const ThemeContext = common.getContext();
        const _a = this.props, { theme, className, children } = _a, otherProps = __rest(_a, ["theme", "className", "children"]);
        const classesNew = classnames(className, {});
        return (React.createElement(ThemeContext.Consumer, null, theme => {
            return (React.createElement("div", Object.assign({ style: theme.body, className: classesNew }, otherProps), children));
        }));
    }
}
Body.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
Body.defaultProps = {
    children: null,
    className: ""
};
// export default Container

class Button extends React.Component {
    constructor() {
        super(...arguments);
        this.onPress = () => {
            if (this.props.onPress) {
                this.props.onPress();
            }
        };
    }
    render() {
        const ThemeContext = common.getContext();
        const _a = this.props, { className, onPress, style, children, raised, success } = _a, otherProps = __rest(_a, ["className", "onPress", "style", "children", "raised", "success"]);
        /**
         * unelevated doesn't seem to change much
         */
        const classesNew = classnames("mdc-button", "mdc-button--unelevated", className, {
            "mdc-button--raised": raised
        });
        return (React.createElement(ThemeContext.Consumer, null, theme => {
            let backgroundColor = theme.button.backgroundColor;
            if (success) {
                backgroundColor = theme.palette.brandSuccess;
            }
            /**
             * theme is readonly so we need to make a copy
             */
            let buttonStyle = Object.assign({}, theme.button);
            let newStyle = Object.assign(buttonStyle, { backgroundColor }, style);
            return (React.createElement("button", Object.assign({ style: newStyle, onClick: this.onPress, className: classesNew }, otherProps), children));
        }));
    }
}
Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    raised: PropTypes.bool,
    success: PropTypes.bool,
    onPress: PropTypes.func
};
Button.defaultProps = {
    children: null,
    className: "",
    raised: false,
    success: false
};

class Card extends React.Component {
    render() {
        const ThemeContext = common.getContext();
        const _a = this.props, { className, children } = _a, otherProps = __rest(_a, ["className", "children"]);
        const classesNew = classnames(className, {});
        // const styles = this.props.style
        return (React.createElement(ThemeContext.Consumer, null, theme => {
            return (React.createElement("div", Object.assign({ style: theme.card, className: classesNew }, otherProps), children));
        }));
    }
}
Card.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
Card.defaultProps = {
    children: null,
    className: ""
};
// export default Container

class CardItem extends React.Component {
    constructor() {
        super(...arguments);
        this.onPress = () => {
            if (this.props.onPress) {
                this.props.onPress();
            }
        };
    }
    render() {
        const ThemeContext = common.getContext();
        const _a = this.props, { className, onPress, children } = _a, otherProps = __rest(_a, ["className", "onPress", "children"]);
        const classesNew = classnames(className, {});
        return (React.createElement(ThemeContext.Consumer, null, theme => {
            return (React.createElement("div", Object.assign({ style: theme.cardItem, onClick: this.onPress, className: classesNew }, otherProps), children));
        }));
    }
}
CardItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
CardItem.defaultProps = {
    children: null,
    className: ""
};

// export interface CardProps {
//   className: String
//   outlined: Boolean
// }
class Thumbnail extends React.Component {
    render() {
        const _a = this.props, { className, children, small } = _a, otherProps = __rest(_a, ["className", "children", "small"]);
        const classes = classnames(className, {
        // 'mdc-card--outlined': outlined,
        });
        let size = {
            height: 50,
            width: 50
        };
        if (this.props.large) {
            size = {
                height: 100,
                width: 100
            };
        }
        let { height, width } = size;
        let src = this.props.source.uri;
        // const classes = classnames('mdc-card', className, {
        //   'mdc-card--outlined': outlined,
        // })
        return React.createElement("img", { src: src, height: height, width: width });
    }
}
Thumbnail.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    small: PropTypes.bool,
    large: PropTypes.bool,
    source: PropTypes.object.isRequired
};
Thumbnail.defaultProps = {
    children: null,
    className: "",
    small: false,
    large: false
};

class Linking {
    static openURL(link) {
        window.open(link, "_blank");
    }
}
// export { Linking }

class Input extends React.Component {
    render() {
        const ThemeContext = common.getContext();
        const _a = this.props, { className, children } = _a, otherProps = __rest(_a, ["className", "children"]);
        /**
         * unelevated doesn't seem to change much
         */
        const classesNew = classnames("mdc-text-field__input", className, {});
        return (React.createElement(ThemeContext.Consumer, null, theme => {
            return (React.createElement("input", Object.assign({ style: theme.input, className: classesNew }, otherProps)));
        }));
    }
}
Input.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
Input.defaultProps = {
    children: null,
    className: ""
};

class Item extends React.Component {
    render() {
        const ThemeContext = common.getContext();
        const _a = this.props, { className, children } = _a, otherProps = __rest(_a, ["className", "children"]);
        const classesNew = classnames(className, {});
        return (React.createElement(ThemeContext.Consumer, null, theme => {
            return (React.createElement("div", Object.assign({ style: theme.item, className: classesNew }, otherProps), children));
        }));
    }
}
Item.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};
Item.defaultProps = {
    children: null,
    className: ""
};

exports.Item = Item;
exports.Input = Input;
exports.common = common;
exports.Linking = Linking;
exports.Thumbnail = Thumbnail;
exports.Card = Card;
exports.CardItem = CardItem;
exports.Container = Container;
exports.Content = Content;
exports.Icon = Icon;
exports.List = List;
exports.ListItem = ListItem;
exports.Text = Text;
exports.Left = Left;
exports.Body = Body;
exports.Button = Button;
//# sourceMappingURL=index.js.map
