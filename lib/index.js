"use strict";

var _generateJoke = _interopRequireDefault(require("./generateJoke.js"));

require("./styles/main.scss");

var _uuid = require("uuid");

var _laughing = _interopRequireDefault(require("./assets/laughing.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log("App Started");
document.write((0, _uuid.v4)());
var laughImg = document.getElementById('laughImg');
laughImg.src = _laughing["default"];
var jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', _generateJoke["default"]);
(0, _generateJoke["default"])();