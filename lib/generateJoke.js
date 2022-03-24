"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function generateJoke() {
  var config = {
    headers: {
      Accept: 'application/json'
    }
  };

  _axios["default"].get('https://icanhazdadjoke.com', config).then(function (res) {
    document.getElementById('joke').innerHTML = res.data.joke;
  });
}

var _default = generateJoke;
exports["default"] = _default;