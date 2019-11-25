"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * The component is used when the children passed
 * to <FormTab> component have their own unique layout
 */
var CustomLayout = function CustomLayout(_ref) {
  var basePath = _ref.basePath,
      children = _ref.children,
      record = _ref.record,
      resource = _ref.resource;
  return _react.Children.map(children, function (content) {
    return content && _react.default.cloneElement(content, {
      basePath: basePath,
      record: record,
      resource: resource
    });
  });
};

CustomLayout.propTypes = {
  basePath: PropTypes.string,
  children: PropTypes.node,
  record: PropTypes.objectOf(PropTypes.any),
  resource: PropTypes.string
};
var _default = CustomLayout;
exports.default = _default;
module.exports = exports.default;