/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dotenv/lib/main.js":
/*!*****************************************!*\
  !*** ./node_modules/dotenv/lib/main.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* @flow */\n/*::\n\ntype DotenvParseOptions = {\n  debug?: boolean\n}\n\n// keys and values from src\ntype DotenvParseOutput = { [string]: string }\n\ntype DotenvConfigOptions = {\n  path?: string, // path to .env file\n  encoding?: string, // encoding of .env file\n  debug?: string // turn on logging for debugging purposes\n}\n\ntype DotenvConfigOutput = {\n  parsed?: DotenvParseOutput,\n  error?: Error\n}\n\n*/\n\nconst fs = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))\nconst path = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'path'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))\n\nfunction log (message /*: string */) {\n  console.log(`[dotenv][DEBUG] ${message}`)\n}\n\nconst NEWLINE = '\\n'\nconst RE_INI_KEY_VAL = /^\\s*([\\w.-]+)\\s*=\\s*(.*)?\\s*$/\nconst RE_NEWLINES = /\\\\n/g\nconst NEWLINES_MATCH = /\\n|\\r|\\r\\n/\n\n// Parses src into an Object\nfunction parse (src /*: string | Buffer */, options /*: ?DotenvParseOptions */) /*: DotenvParseOutput */ {\n  const debug = Boolean(options && options.debug)\n  const obj = {}\n\n  // convert Buffers before splitting into lines and processing\n  src.toString().split(NEWLINES_MATCH).forEach(function (line, idx) {\n    // matching \"KEY' and 'VAL' in 'KEY=VAL'\n    const keyValueArr = line.match(RE_INI_KEY_VAL)\n    // matched?\n    if (keyValueArr != null) {\n      const key = keyValueArr[1]\n      // default undefined or missing values to empty string\n      let val = (keyValueArr[2] || '')\n      const end = val.length - 1\n      const isDoubleQuoted = val[0] === '\"' && val[end] === '\"'\n      const isSingleQuoted = val[0] === \"'\" && val[end] === \"'\"\n\n      // if single or double quoted, remove quotes\n      if (isSingleQuoted || isDoubleQuoted) {\n        val = val.substring(1, end)\n\n        // if double quoted, expand newlines\n        if (isDoubleQuoted) {\n          val = val.replace(RE_NEWLINES, NEWLINE)\n        }\n      } else {\n        // remove surrounding whitespace\n        val = val.trim()\n      }\n\n      obj[key] = val\n    } else if (debug) {\n      log(`did not match key and value when parsing line ${idx + 1}: ${line}`)\n    }\n  })\n\n  return obj\n}\n\n// Populates process.env from .env file\nfunction config (options /*: ?DotenvConfigOptions */) /*: DotenvConfigOutput */ {\n  let dotenvPath = path.resolve(process.cwd(), '.env')\n  let encoding /*: string */ = 'utf8'\n  let debug = false\n\n  if (options) {\n    if (options.path != null) {\n      dotenvPath = options.path\n    }\n    if (options.encoding != null) {\n      encoding = options.encoding\n    }\n    if (options.debug != null) {\n      debug = true\n    }\n  }\n\n  try {\n    // specifying an encoding returns a string instead of a buffer\n    const parsed = parse(fs.readFileSync(dotenvPath, { encoding }), { debug })\n\n    Object.keys(parsed).forEach(function (key) {\n      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {\n        process.env[key] = parsed[key]\n      } else if (debug) {\n        log(`\"${key}\" is already defined in \\`process.env\\` and will not be overwritten`)\n      }\n    })\n\n    return { parsed }\n  } catch (e) {\n    return { error: e }\n  }\n}\n\nmodule.exports.config = config\nmodule.exports.parse = parse\n\n\n//# sourceURL=webpack://salah_times/./node_modules/dotenv/lib/main.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\");\n\n\nconst salahTimesTimes = document.querySelector('.salah-times-times')\n\nlet [day, month, year] = new Date().toLocaleDateString('en-GB').split('/')\n\ndocument.querySelector('.date').textContent = `${day}/${month}/${year}`\n\nconst getSalahTimes = async () => {\n  const API_KEY = process.env.API_KEY\n  try {\n    const fetchData = await fetch(\n      `https://www.londonprayertimes.com/api/times/?format=json&key=${API_KEY}&24hours=true`\n    )\n    const dataJSON = await fetchData.json()\n    // console.log(dataJSON)\n    const timeNames = ['fajr', 'sunrise', 'dhuhr', 'asr', 'magrib', 'isha']\n    const times = []\n    timeNames.forEach(time => {\n      times.push(dataJSON[time])\n    })\n\n    const timestamps = []\n    times.forEach(time => {\n      timestamps.push(new Date(`${year}-${month}-${day}t${time}:00`).getTime())\n    })\n\n    times.forEach(time => {\n      const li = document.createElement('li')\n      li.textContent = time\n      salahTimesTimes.appendChild(li)\n    })\n\n    document.querySelector('.container').style.opacity = '1'\n  } catch (error) {\n    console.error(error)\n  }\n}\n\ngetSalahTimes()\n\n\n//# sourceURL=webpack://salah_times/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;