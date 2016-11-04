'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlInputPropNames = undefined;

var _includes2 = require('lodash/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require('../../lib');

var _Button = require('../../elements/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Label = require('../../elements/Label');

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var htmlInputPropNames = exports.htmlInputPropNames = [
// React
'selected', 'defaultValue', 'defaultChecked',

// Limited HTML props
'autoComplete', 'autoFocus', 'checked',
// 'disabled', do not pass (duplicates SUI CSS opacity rule)
'form', 'max', 'maxLength', 'min', 'name', 'onChange', 'pattern', 'placeholder', 'readOnly', 'required', 'step', 'type', 'value'];

/**
 * An Input is a field used to elicit a response from a user
 * @see Button
 * @see Form
 * @see Icon
 * @see Label
 */
function Input(props) {
  var action = props.action,
      actionPosition = props.actionPosition,
      children = props.children,
      className = props.className,
      disabled = props.disabled,
      error = props.error,
      focus = props.focus,
      fluid = props.fluid,
      icon = props.icon,
      iconPosition = props.iconPosition,
      inverted = props.inverted,
      label = props.label,
      labelPosition = props.labelPosition,
      loading = props.loading,
      size = props.size,
      type = props.type,
      input = props.input,
      transparent = props.transparent;


  var classes = (0, _classnames2.default)('ui', size, (0, _lib.useValueAndKey)(actionPosition, 'action') || (0, _lib.useKeyOnly)(action, 'action'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(error, 'error'), (0, _lib.useKeyOnly)(focus, 'focus'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useValueAndKey)(labelPosition, 'labeled') || (0, _lib.useKeyOnly)(label, 'labeled'), (0, _lib.useKeyOnly)(loading, 'loading'), (0, _lib.useKeyOnly)(transparent, 'transparent'), (0, _lib.useValueAndKey)(iconPosition, 'icon') || (0, _lib.useKeyOnly)(icon, 'icon'), className, 'input');
  var unhandled = (0, _lib.getUnhandledProps)(Input, props);

  var rest = (0, _omit3.default)(unhandled, htmlInputPropNames);
  var htmlInputProps = (0, _pick3.default)(props, htmlInputPropNames);
  var ElementType = (0, _lib.getElementType)(Input, props);

  if (children) {
    return _react2.default.createElement(
      ElementType,
      _extends({}, rest, { className: classes }),
      children
    );
  }

  var actionElement = _Button2.default.create(action, function (elProps) {
    return {
      className: (0, _classnames2.default)(
      // all action components should have the button className
      !(0, _includes3.default)(elProps.className, 'button') && 'button')
    };
  });
  var iconElement = _Icon2.default.create(icon);
  var labelElement = _Label2.default.create(label, function (elProps) {
    return {
      className: (0, _classnames2.default)(
      // all label components should have the label className
      !(0, _includes3.default)(elProps.className, 'label') && 'label',
      // add 'left|right corner'
      (0, _includes3.default)(labelPosition, 'corner') && labelPosition)
    };
  });

  return _react2.default.createElement(
    ElementType,
    _extends({}, rest, { className: classes }),
    actionPosition === 'left' && actionElement,
    iconPosition === 'left' && iconElement,
    labelPosition !== 'right' && labelElement,
    (0, _lib.createHTMLInput)(input || type, htmlInputProps),
    actionPosition !== 'left' && actionElement,
    iconPosition !== 'left' && iconElement,
    labelPosition === 'right' && labelElement
  );
}

Input._meta = {
  name: 'Input',
  type: _lib.META.TYPES.ELEMENT,
  props: {
    actionPosition: ['left'],
    iconPosition: ['left'],
    labelPosition: ['left', 'right', 'left corner', 'right corner'],
    size: _lib.SUI.SIZES
  }
};

Input.defaultProps = {
  type: 'text'
};

Input.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** An Input can be formatted to alert the user to an action they may perform */
  action: _react.PropTypes.oneOfType([_react.PropTypes.bool, _lib.customPropTypes.itemShorthand]),

  /** An action can appear along side an Input on the left or right */
  actionPosition: _react.PropTypes.oneOf(Input._meta.props.actionPosition),

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** An Input field can show that it is disabled */
  disabled: _react.PropTypes.bool,

  /** An Input field can show the data contains errors */
  error: _react.PropTypes.bool,

  /** An Input field can show a user is currently interacting with it */
  focus: _react.PropTypes.bool,

  /** Take on the size of it's container */
  fluid: _react.PropTypes.bool,

  /** Optional Icon to display inside the Input */
  icon: _react.PropTypes.oneOfType([_react.PropTypes.bool, _lib.customPropTypes.itemShorthand]),

  /** An Icon can appear inside an Input on the left or right */
  iconPosition: _react.PropTypes.oneOf(Input._meta.props.iconPosition),

  /** Format to appear on dark backgrounds */
  inverted: _react.PropTypes.bool,

  /** Shorthand for creating the HTML Input */
  input: _lib.customPropTypes.itemShorthand,

  /** Optional Label to display along side the Input */
  label: _lib.customPropTypes.itemShorthand,

  /** A Label can appear outside an Input on the left or right */
  labelPosition: _react.PropTypes.oneOf(Input._meta.props.labelPosition),

  /** An Icon Input field can show that it is currently loading data */
  loading: _react.PropTypes.bool,

  /** An Input can vary in size */
  size: _react.PropTypes.oneOf(Input._meta.props.size),

  /** Transparent Input has no background */
  transparent: _react.PropTypes.bool,

  /** The HTML input type */
  type: _react.PropTypes.string
};

exports.default = Input;