/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers/baseController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/baseController.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseController": () => (/* binding */ BaseController)
/* harmony export */ });
class BaseController {
    constructor(router) {
        this.router = router;
    }
    /**
     *
     * @param tagName HTML tagName. Ex: div, p, span, main
     * @param HTMLContent HTML content
     * @returns All page builded content
     */
    createElement(tagName, HTMLContent, action) {
        const container = document.createElement(tagName);
        HTMLContent ? (container.innerHTML = HTMLContent) : container;
        action ? (container.onclick = action) : container;
        return container;
    }
}


/***/ }),

/***/ "./src/controllers/dashboardController.ts":
/*!************************************************!*\
  !*** ./src/controllers/dashboardController.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardController": () => (/* binding */ DashboardController)
/* harmony export */ });
/* harmony import */ var _services_dataService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/dataService */ "./src/services/dataService.ts");
/* harmony import */ var _baseController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseController */ "./src/controllers/baseController.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class DashboardController extends _baseController__WEBPACK_IMPORTED_MODULE_1__.BaseController {
    constructor() {
        super(...arguments);
        this.html = '';
        this.fetchData = new _services_dataService__WEBPACK_IMPORTED_MODULE_0__.FetchData();
    }
    /**
     * Sets sessionToken globally
     * @param sessionToken SessionToken
     */
    setSessionToken(sessionToken) {
        this.sessionToken = sessionToken;
    }
    /**
     * Create a main route View
     * @returns HTMLDivElement with all page content
     */
    createView() {
        var _a;
        const container = this.createElement('div');
        this.html = `
        <h2>This is a Dashboard page</h2>
        <br>
        <h2>
          Welcome  ${(_a = this.sessionToken) === null || _a === void 0 ? void 0 : _a.username}
        </h2>
        <br>
    `;
        const mainContent = this.createElement('div', this.html);
        const buttonsGroup = this.createAccessButtons();
        container.append(mainContent, buttonsGroup);
        return container;
    }
    /**
     * Create a buttons group component
     * @returns HTMLDivElement with all buttons
     */
    createAccessButtons() {
        var _a;
        const containerButtons = this.createElement('div');
        (_a = this.sessionToken) === null || _a === void 0 ? void 0 : _a.accessRights.forEach((access) => {
            const button = this.createElement('button', access, () => __awaiter(this, void 0, void 0, function* () {
                var _a;
                if (this.sessionToken) { }
                const result = yield this.fetchData.getUser((_a = this.sessionToken) === null || _a === void 0 ? void 0 : _a.sessionTokenId, 'Emily');
                console.log(result);
            }));
            containerButtons.append(button);
        });
        return containerButtons;
    }
}


/***/ }),

/***/ "./src/controllers/index.ts":
/*!**********************************!*\
  !*** ./src/controllers/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardController": () => (/* reexport safe */ _dashboardController__WEBPACK_IMPORTED_MODULE_2__.DashboardController),
/* harmony export */   "LoginController": () => (/* reexport safe */ _loginController__WEBPACK_IMPORTED_MODULE_0__.LoginController),
/* harmony export */   "MainController": () => (/* reexport safe */ _mainController__WEBPACK_IMPORTED_MODULE_1__.MainController)
/* harmony export */ });
/* harmony import */ var _loginController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginController */ "./src/controllers/loginController.ts");
/* harmony import */ var _mainController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainController */ "./src/controllers/mainController.ts");
/* harmony import */ var _dashboardController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboardController */ "./src/controllers/dashboardController.ts");






/***/ }),

/***/ "./src/controllers/loginController.ts":
/*!********************************************!*\
  !*** ./src/controllers/loginController.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginController": () => (/* binding */ LoginController)
/* harmony export */ });
/* harmony import */ var _services_loginService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/loginService */ "./src/services/loginService.ts");
/* harmony import */ var _baseController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseController */ "./src/controllers/baseController.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LoginController extends _baseController__WEBPACK_IMPORTED_MODULE_1__.BaseController {
    constructor() {
        super(...arguments);
        this.html = '';
        this.fetchData = new _services_loginService__WEBPACK_IMPORTED_MODULE_0__.FetchData();
    }
    /**
     * Create a main route View
     * @returns HTMLDivElement with all page content
     */
    createView() {
        const container = this.createElement('div');
        this.html = `
        <h2>This is a Login page</h2>
        <br>
        <span>
          Please login :)
        </span>
        <br>
        <div id="label-error" style="color:red; visibility:hidden"></div>
        <br>
        <label for="username">username</label>
        <br>
        <input type="text" name="username" id="username">
        <br>
        <label for="password">password</label>
        <br>
        <input type="password" name="password" id="password">
        <br>
    `;
        const mainContent = this.createElement('div', this.html);
        const appendContent = this.createElement('button', 'login', () => this.handleLogin());
        container.append(mainContent, appendContent);
        return container;
    }
    /**
     * Handle login and redirect to dashboard page
     * @returns void
     */
    handleLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            const labelError = document.getElementById('label-error');
            const username = document.getElementsByTagName('input')[0].value.trim();
            const password = document.getElementsByTagName('input')[1].value.trim();
            const isValidationSuccess = this.inputValidator(username, password);
            if (!isValidationSuccess) {
                if (labelError) {
                    labelError.style.visibility = 'visible';
                    labelError.textContent = 'Oops! You must complete all fields';
                }
                return null;
            }
            try {
                if (labelError)
                    labelError.style.visibility = 'hidden';
                const result = yield this.fetchData.login(username, password);
                if (result)
                    this.router.dashboardPage(result);
            }
            catch (error) {
                if (labelError) {
                    labelError.style.visibility = 'visible';
                    labelError.textContent = error;
                }
            }
        });
    }
    /**
     * Validate inputs data
     * @returns true || false
     */
    inputValidator(username, password) {
        if (username !== '' && password !== '')
            return true;
        return false;
    }
}


/***/ }),

/***/ "./src/controllers/mainController.ts":
/*!*******************************************!*\
  !*** ./src/controllers/mainController.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainController": () => (/* binding */ MainController)
/* harmony export */ });
/* harmony import */ var _baseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseController */ "./src/controllers/baseController.ts");

class MainController extends _baseController__WEBPACK_IMPORTED_MODULE_0__.BaseController {
    constructor() {
        super(...arguments);
        this.html = '';
    }
    /**
     * Create a main route View
     * @returns HTMLDivElement with all page content
     */
    createView() {
        const container = this.createElement('div');
        this.html = `
      <div>
        <h2>This is a Title</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident tempore laboriosam non amet expedita quo nostrum unde, at sapiente.
          Placeat reiciendis assumenda id neque illum rerum aut similique, ipsa voluptas.
        </span>
      </div>
    `;
        const mainContent = this.createElement('div', this.html);
        const appendContent = this.createElement('button', 'Go to Login', () => this.switchToLoginPage());
        container.append(mainContent, appendContent);
        return container;
    }
    /**
     * Navigate to login page
     */
    switchToLoginPage() {
        this.router.loginPage();
    }
}


/***/ }),

/***/ "./src/enums/baseUrls.ts":
/*!*******************************!*\
  !*** ./src/enums/baseUrls.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseUrl": () => (/* binding */ baseUrl)
/* harmony export */ });
var baseUrl;
(function (baseUrl) {
    baseUrl["LOGIN"] = "login";
    baseUrl["DASHBOARD"] = "dashboard";
})(baseUrl || (baseUrl = {}));


/***/ }),

/***/ "./src/enums/httpMethods.ts":
/*!**********************************!*\
  !*** ./src/enums/httpMethods.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpMethods": () => (/* binding */ HttpMethods)
/* harmony export */ });
var HttpMethods;
(function (HttpMethods) {
    HttpMethods["POST"] = "POST";
    HttpMethods["GET"] = "GET";
    HttpMethods["DELETE"] = "DELETE";
    HttpMethods["PUT"] = "PUT";
})(HttpMethods || (HttpMethods = {}));


/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var _controllers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/index */ "./src/controllers/index.ts");
/* harmony import */ var _enums_baseUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums/baseUrls */ "./src/enums/baseUrls.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");



const { LOGIN, DASHBOARD } = _enums_baseUrls__WEBPACK_IMPORTED_MODULE_1__.baseUrl;
class Router {
    constructor() {
        this.rootElement = document.getElementById('root');
        this.currentRoute = _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.getRoute();
    }
    /**
     * Handle all url routes
     */
    handleRequest() {
        console.log('Handling requests for', this.currentRoute);
        switch (this.currentRoute) {
            case LOGIN:
                this.loginPage();
                break;
            case DASHBOARD:
                this.dashboardPage(null);
                break;
            default:
                this.homePage();
                break;
        }
    }
    /**
     * Handle the homePage view
     */
    homePage() {
        var _a;
        if (this.rootElement) {
            (this.rootElement.innerHTML = ''), (_a = this.rootElement) === null || _a === void 0 ? void 0 : _a.append(new _controllers_index__WEBPACK_IMPORTED_MODULE_0__.MainController(this).createView());
        }
    }
    /**
     * Handle the loginPage view
     */
    loginPage() {
        if (this.rootElement) {
            (this.rootElement.innerHTML = ''), this.rootElement.append(new _controllers_index__WEBPACK_IMPORTED_MODULE_0__.LoginController(this).createView());
        }
    }
    /**
     * Handle the DashboardPage view
     * But previously, this sets a token if it has
     * @param sessionToken token
     */
    dashboardPage(sessionToken) {
        if (this.rootElement) {
            this.rootElement.innerHTML = '';
            const dashboardController = new _controllers_index__WEBPACK_IMPORTED_MODULE_0__.DashboardController(this);
            if (sessionToken) {
                dashboardController.setSessionToken(sessionToken);
            }
            this.rootElement.append(dashboardController.createView());
        }
    }
}


/***/ }),

/***/ "./src/services/base.ts":
/*!******************************!*\
  !*** ./src/services/base.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseService": () => (/* binding */ BaseService)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class BaseService {
    constructor() {
        this.baseUrl = 'http://localhost:8000';
    }
    buildContext(method, customBody, headers) {
        return {
            method,
            headers: Object.assign({}, (headers && Object.assign({}, headers))),
            body: Object.keys(customBody).length ? JSON.stringify(Object.assign({}, customBody)) : null,
        };
    }
    handleErrorResponse(result) {
        return __awaiter(this, void 0, void 0, function* () {
            return result.text().then(text => {
                throw new Error(text);
            });
        });
    }
}


/***/ }),

/***/ "./src/services/dataService.ts":
/*!*************************************!*\
  !*** ./src/services/dataService.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchData": () => (/* binding */ FetchData)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/services/base.ts");
/* harmony import */ var _enums_httpMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/httpMethods */ "./src/enums/httpMethods.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const { GET } = _enums_httpMethods__WEBPACK_IMPORTED_MODULE_1__.HttpMethods;
class FetchData extends _base__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    getUser(Authorization, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/users?name=${query}`;
            const customHeaders = { Authorization };
            const context = this.buildContext(GET, {}, customHeaders);
            console.log('Context to Fetch:', context);
            return fetch(url, context).then(result => {
                if (!result.ok) {
                    return this.handleErrorResponse(result);
                }
                return result.json();
            });
        });
    }
}


/***/ }),

/***/ "./src/services/loginService.ts":
/*!**************************************!*\
  !*** ./src/services/loginService.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FetchData": () => (/* binding */ FetchData)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./src/services/base.ts");
/* harmony import */ var _enums_httpMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/httpMethods */ "./src/enums/httpMethods.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const { POST } = _enums_httpMethods__WEBPACK_IMPORTED_MODULE_1__.HttpMethods;
class FetchData extends _base__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/login`;
            const customHeaders = { 'Content-Type': 'application/json' };
            const context = this.buildContext(POST, { username, password }, customHeaders);
            return fetch(url, context).then(result => {
                if (!result.ok) {
                    return this.handleErrorResponse(result);
                }
                return result.json();
            });
        });
    }
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": () => (/* binding */ Utils)
/* harmony export */ });
class Utils {
    /**
     * Retrieves a current url
     * @returns parsed url
     */
    static getRoute() {
        return window.location.pathname.split('/')[1];
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/router.ts");

class Main {
    constructor() {
        this.router = new _router__WEBPACK_IMPORTED_MODULE_0__.Router();
    }
    launchApp() {
        this.router.handleRequest();
    }
}
new Main().launchApp();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBTU8sTUFBZSxjQUFjO0lBUWxDLFlBQVksTUFBYztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyxhQUFhLENBQ3JCLE9BQVUsRUFDVixXQUFvQixFQUNwQixNQUFpQjtRQUVqQixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xELFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDOUQsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUVsRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNtRDtBQUNGO0FBRTNDLE1BQU0sbUJBQW9CLFNBQVEsMkRBQWM7SUFBdkQ7O1FBQ1UsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUlWLGNBQVMsR0FBRyxJQUFJLDREQUFTLEVBQUUsQ0FBQztJQWdEdEMsQ0FBQztJQTlDQzs7O09BR0c7SUFDSSxlQUFlLENBQUMsWUFBMEI7UUFDL0MsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFVBQVU7O1FBQ2YsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHOzs7O3FCQUlLLFVBQUksQ0FBQyxZQUFZLDBDQUFFLFFBQVE7OztLQUczQyxDQUFDO1FBRUYsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRTVDLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7O09BR0c7SUFDSyxtQkFBbUI7O1FBQ3pCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxVQUFJLENBQUMsWUFBWSwwQ0FBRSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBb0IsRUFBRSxFQUFFO1lBQy9ELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFTLEVBQUU7O2dCQUM3RCxJQUFHLElBQUksQ0FBQyxZQUFZLEVBQUMsR0FBRTtnQkFDdkIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFJLENBQUMsWUFBWSwwQ0FBRSxjQUFjLEVBQUUsT0FBTyxDQUFDO2dCQUN2RixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUNyQixDQUFDLEVBQUMsQ0FBQztZQUNILGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDakMsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURtRDtBQUNGO0FBQ1U7QUFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKWDtBQUNIO0FBRTNDLE1BQU0sZUFBZ0IsU0FBUSwyREFBYztJQUFuRDs7UUFDVSxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBRVYsY0FBUyxHQUFHLElBQUksNkRBQVMsRUFBRSxDQUFDO0lBd0V0QyxDQUFDO0lBdEVDOzs7T0FHRztJQUNJLFVBQVU7UUFDZixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaUJYLENBQUM7UUFFRixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQ3RGLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRTdDLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7O09BR0c7SUFDRyxXQUFXOztZQUNmLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN4RSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXhFLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLG1CQUFtQixFQUFFO2dCQUN4QixJQUFJLFVBQVUsRUFBRTtvQkFDZCxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7b0JBQ3hDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsb0NBQW9DLENBQUM7aUJBQy9EO2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxJQUFJO2dCQUNGLElBQUksVUFBVTtvQkFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7Z0JBQ3ZELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLE1BQU07b0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0M7WUFBQyxPQUFPLEtBQVUsRUFBRTtnQkFDbkIsSUFBSSxVQUFVLEVBQUU7b0JBQ2QsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO29CQUN4QyxVQUFVLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztpQkFDaEM7YUFDRjtRQUNILENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNLLGNBQWMsQ0FBQyxRQUFnQixFQUFFLFFBQWdCO1FBQ3ZELElBQUksUUFBUSxLQUFLLEVBQUUsSUFBSSxRQUFRLEtBQUssRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBQ3BELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUVpRDtBQUUzQyxNQUFNLGNBQWUsU0FBUSwyREFBYztJQUFsRDs7UUFDVSxTQUFJLEdBQUcsRUFBRSxDQUFDO0lBZ0NwQixDQUFDO0lBOUJDOzs7T0FHRztJQUNJLFVBQVU7UUFDZixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUc7Ozs7Ozs7OztLQVNYLENBQUM7UUFFRixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7UUFDbEcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFN0MsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssaUJBQWlCO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDMUIsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0QsSUFBWSxPQUdYO0FBSEQsV0FBWSxPQUFPO0lBQ2pCLDBCQUFlO0lBQ2Ysa0NBQXVCO0FBQ3pCLENBQUMsRUFIVyxPQUFPLEtBQVAsT0FBTyxRQUdsQjs7Ozs7Ozs7Ozs7Ozs7O0FDSEQsSUFBWSxXQUtYO0FBTEQsV0FBWSxXQUFXO0lBQ3JCLDRCQUFhO0lBQ2IsMEJBQVc7SUFDWCxnQ0FBaUI7SUFDakIsMEJBQVc7QUFDYixDQUFDLEVBTFcsV0FBVyxLQUFYLFdBQVcsUUFLdEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0wwRjtBQUNoRDtBQUVYO0FBRWhDLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsb0RBQU8sQ0FBQztBQUU5QixNQUFNLE1BQU07SUFBbkI7UUFDVSxnQkFBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUMsaUJBQVksR0FBRyxrREFBYyxFQUFFLENBQUM7SUFzRDFDLENBQUM7SUFwREM7O09BRUc7SUFDSSxhQUFhO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXhELFFBQVEsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN6QixLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLE1BQU07WUFDUjtnQkFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2hCLE1BQU07U0FDVDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVE7O1FBQ2IsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsVUFBSSxDQUFDLFdBQVcsMENBQUUsTUFBTSxDQUFDLElBQUksOERBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQ3BHO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUztRQUNkLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksK0RBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQ3BHO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxhQUFhLENBQUMsWUFBaUM7UUFDcEQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUNoQyxNQUFNLG1CQUFtQixHQUF3QixJQUFJLG1FQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9FLElBQUksWUFBWSxFQUFFO2dCQUNoQixtQkFBbUIsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbkQ7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RE0sTUFBTSxXQUFXO0lBQXhCO1FBQ1MsWUFBTyxHQUFHLHVCQUF1QixDQUFDO0lBaUIzQyxDQUFDO0lBZlEsWUFBWSxDQUFDLE1BQWMsRUFBRSxVQUFrQixFQUFFLE9BQWE7UUFDbkUsT0FBTztZQUNMLE1BQU07WUFDTixPQUFPLG9CQUNGLENBQUMsT0FBTyxzQkFBUyxPQUFPLENBQUUsQ0FBQyxDQUMvQjtZQUNELElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsbUJBQU0sVUFBVSxFQUFHLEVBQUMsQ0FBQyxJQUFJO1NBQy9FLENBQUM7SUFDSixDQUFDO0lBRVksbUJBQW1CLENBQUMsTUFBZ0I7O1lBQy9DLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCb0M7QUFDYTtBQUdsRCxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsMkRBQVcsQ0FBQztBQUVyQixNQUFNLFNBQVUsU0FBUSw4Q0FBVztJQUMzQixPQUFPLENBQUMsYUFBa0IsRUFBRSxLQUFhOztZQUNwRCxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLGVBQWUsS0FBSyxFQUFFLENBQUM7WUFFbEQsTUFBTSxhQUFhLEdBQUcsRUFBRSxhQUFhLEVBQUU7WUFDdkMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDO1lBRXpDLE9BQU8sS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO29CQUNkLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUN6QztnQkFDRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCb0M7QUFDYTtBQUVsRCxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsMkRBQVcsQ0FBQztBQUV0QixNQUFNLFNBQVUsU0FBUSw4Q0FBVztJQUMzQixLQUFLLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjs7WUFDbkQsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxRQUFRLENBQUM7WUFFcEMsTUFBTSxhQUFhLEdBQUcsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUU7WUFDNUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFFL0UsT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7b0JBQ2QsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3pDO2dCQUNELE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7OztBQ3BCTSxNQUFNLEtBQUs7SUFDaEI7OztPQUdHO0lBQ0ksTUFBTSxDQUFDLFFBQVE7UUFDcEIsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNGOzs7Ozs7O1VDUkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05rQztBQUUzQixNQUFNLElBQUk7SUFBakI7UUFDVSxXQUFNLEdBQVcsSUFBSSwyQ0FBTSxFQUFFLENBQUM7SUFLeEMsQ0FBQztJQUhRLFNBQVM7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzlCLENBQUM7Q0FDRjtBQUVELElBQUksSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb250cm9sbGVycy9iYXNlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb250cm9sbGVycy9kYXNoYm9hcmRDb250cm9sbGVyLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbnRyb2xsZXJzL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NvbnRyb2xsZXJzL2xvZ2luQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb250cm9sbGVycy9tYWluQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9lbnVtcy9iYXNlVXJscy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9lbnVtcy9odHRwTWV0aG9kcy50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2VydmljZXMvYmFzZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zZXJ2aWNlcy9kYXRhU2VydmljZS50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zZXJ2aWNlcy9sb2dpblNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL3JvdXRlcic7XG5cbnR5cGUgY2FsbEJhY2sgPSB7XG4gICgpOiB2b2lkO1xufTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VDb250cm9sbGVyIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIG1haW4gcm91dGUgVmlld1xuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGNyZWF0ZVZpZXcoKTogSFRNTERpdkVsZW1lbnQ7XG5cbiAgcHVibGljIHJvdXRlcjogUm91dGVyO1xuXG4gIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHRhZ05hbWUgSFRNTCB0YWdOYW1lLiBFeDogZGl2LCBwLCBzcGFuLCBtYWluXG4gICAqIEBwYXJhbSBIVE1MQ29udGVudCBIVE1MIGNvbnRlbnRcbiAgICogQHJldHVybnMgQWxsIHBhZ2UgYnVpbGRlZCBjb250ZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgY3JlYXRlRWxlbWVudDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihcbiAgICB0YWdOYW1lOiBLLFxuICAgIEhUTUxDb250ZW50Pzogc3RyaW5nLFxuICAgIGFjdGlvbj86IGNhbGxCYWNrLFxuICApOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgSFRNTENvbnRlbnQgPyAoY29udGFpbmVyLmlubmVySFRNTCA9IEhUTUxDb250ZW50KSA6IGNvbnRhaW5lcjtcbiAgICBhY3Rpb24gPyAoY29udGFpbmVyLm9uY2xpY2sgPSBhY3Rpb24pIDogY29udGFpbmVyO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQWNjZXNzUmlnaHRzIH0gZnJvbSAnLi4vZW51bXMvYWNjZXNzUmlnaHRzJztcbmltcG9ydCB7IFNlc3Npb25Ub2tlbiB9IGZyb20gJy4uL21vZGVscy9BdXRoZW50aWNhdGlvbic7XG5pbXBvcnQgeyBGZXRjaERhdGEgfSBmcm9tICcuLi9zZXJ2aWNlcy9kYXRhU2VydmljZSc7XG5pbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gJy4vYmFzZUNvbnRyb2xsZXInO1xuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBodG1sID0gJyc7XG5cbiAgcHJpdmF0ZSBzZXNzaW9uVG9rZW46IFNlc3Npb25Ub2tlbiB8IG51bGwgfCB1bmRlZmluZWQ7XG5cbiAgcHJpdmF0ZSBmZXRjaERhdGEgPSBuZXcgRmV0Y2hEYXRhKCk7XG5cbiAgLyoqXG4gICAqIFNldHMgc2Vzc2lvblRva2VuIGdsb2JhbGx5XG4gICAqIEBwYXJhbSBzZXNzaW9uVG9rZW4gU2Vzc2lvblRva2VuXG4gICAqL1xuICBwdWJsaWMgc2V0U2Vzc2lvblRva2VuKHNlc3Npb25Ub2tlbjogU2Vzc2lvblRva2VuKTogdm9pZCB7XG4gICAgdGhpcy5zZXNzaW9uVG9rZW4gPSBzZXNzaW9uVG9rZW47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbWFpbiByb3V0ZSBWaWV3XG4gICAqIEByZXR1cm5zIEhUTUxEaXZFbGVtZW50IHdpdGggYWxsIHBhZ2UgY29udGVudFxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVZpZXcoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmh0bWwgPSBgXG4gICAgICAgIDxoMj5UaGlzIGlzIGEgRGFzaGJvYXJkIHBhZ2U8L2gyPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICBXZWxjb21lICAke3RoaXMuc2Vzc2lvblRva2VuPy51c2VybmFtZX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGJyPlxuICAgIGA7XG5cbiAgICBjb25zdCBtYWluQ29udGVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgdGhpcy5odG1sKTtcbiAgICBjb25zdCBidXR0b25zR3JvdXAgPSB0aGlzLmNyZWF0ZUFjY2Vzc0J1dHRvbnMoKTtcbiAgICBjb250YWluZXIuYXBwZW5kKG1haW5Db250ZW50LCBidXR0b25zR3JvdXApO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBidXR0b25zIGdyb3VwIGNvbXBvbmVudFxuICAgKiBAcmV0dXJucyBIVE1MRGl2RWxlbWVudCB3aXRoIGFsbCBidXR0b25zXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZUFjY2Vzc0J1dHRvbnMoKTogSFRNTERpdkVsZW1lbnQge1xuICAgIGNvbnN0IGNvbnRhaW5lckJ1dHRvbnMgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuc2Vzc2lvblRva2VuPy5hY2Nlc3NSaWdodHMuZm9yRWFjaCgoYWNjZXNzOiBBY2Nlc3NSaWdodHMpID0+IHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgYWNjZXNzLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmKHRoaXMuc2Vzc2lvblRva2VuKXt9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZmV0Y2hEYXRhLmdldFVzZXIodGhpcy5zZXNzaW9uVG9rZW4/LnNlc3Npb25Ub2tlbklkLCAnRW1pbHknKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICB9KTtcbiAgICAgIGNvbnRhaW5lckJ1dHRvbnMuYXBwZW5kKGJ1dHRvbilcbiAgICB9KVxuICAgIHJldHVybiBjb250YWluZXJCdXR0b25zO1xuICB9XG59XG4iLCJpbXBvcnQgeyBMb2dpbkNvbnRyb2xsZXIgfSBmcm9tICcuL2xvZ2luQ29udHJvbGxlcic7XG5pbXBvcnQgeyBNYWluQ29udHJvbGxlciB9IGZyb20gJy4vbWFpbkNvbnRyb2xsZXInO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29udHJvbGxlciB9IGZyb20gJy4vZGFzaGJvYXJkQ29udHJvbGxlcic7XG5cbmV4cG9ydCB7IExvZ2luQ29udHJvbGxlciwgTWFpbkNvbnRyb2xsZXIsIERhc2hib2FyZENvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IEZldGNoRGF0YSB9IGZyb20gJy4uL3NlcnZpY2VzL2xvZ2luU2VydmljZSc7XG5pbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gJy4vYmFzZUNvbnRyb2xsZXInO1xuXG5leHBvcnQgY2xhc3MgTG9naW5Db250cm9sbGVyIGV4dGVuZHMgQmFzZUNvbnRyb2xsZXIge1xuICBwcml2YXRlIGh0bWwgPSAnJztcblxuICBwcml2YXRlIGZldGNoRGF0YSA9IG5ldyBGZXRjaERhdGEoKTtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbWFpbiByb3V0ZSBWaWV3XG4gICAqIEByZXR1cm5zIEhUTUxEaXZFbGVtZW50IHdpdGggYWxsIHBhZ2UgY29udGVudFxuICAgKi9cbiAgcHVibGljIGNyZWF0ZVZpZXcoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmh0bWwgPSBgXG4gICAgICAgIDxoMj5UaGlzIGlzIGEgTG9naW4gcGFnZTwvaDI+XG4gICAgICAgIDxicj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgUGxlYXNlIGxvZ2luIDopXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8ZGl2IGlkPVwibGFiZWwtZXJyb3JcIiBzdHlsZT1cImNvbG9yOnJlZDsgdmlzaWJpbGl0eTpoaWRkZW5cIj48L2Rpdj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8bGFiZWwgZm9yPVwidXNlcm5hbWVcIj51c2VybmFtZTwvbGFiZWw+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgaWQ9XCJ1c2VybmFtZVwiPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPnBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgPGJyPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiPlxuICAgICAgICA8YnI+XG4gICAgYDtcblxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCB0aGlzLmh0bWwpO1xuICAgIGNvbnN0IGFwcGVuZENvbnRlbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdsb2dpbicsICgpID0+IHRoaXMuaGFuZGxlTG9naW4oKSk7XG4gICAgY29udGFpbmVyLmFwcGVuZChtYWluQ29udGVudCwgYXBwZW5kQ29udGVudCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBsb2dpbiBhbmQgcmVkaXJlY3QgdG8gZGFzaGJvYXJkIHBhZ2VcbiAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgYXN5bmMgaGFuZGxlTG9naW4oKSB7XG4gICAgY29uc3QgbGFiZWxFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYWJlbC1lcnJvcicpO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMF0udmFsdWUudHJpbSgpO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JylbMV0udmFsdWUudHJpbSgpO1xuXG4gICAgY29uc3QgaXNWYWxpZGF0aW9uU3VjY2VzcyA9IHRoaXMuaW5wdXRWYWxpZGF0b3IodXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICBpZiAoIWlzVmFsaWRhdGlvblN1Y2Nlc3MpIHtcbiAgICAgIGlmIChsYWJlbEVycm9yKSB7XG4gICAgICAgIGxhYmVsRXJyb3Iuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgbGFiZWxFcnJvci50ZXh0Q29udGVudCA9ICdPb3BzISBZb3UgbXVzdCBjb21wbGV0ZSBhbGwgZmllbGRzJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpZiAobGFiZWxFcnJvcikgbGFiZWxFcnJvci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmZldGNoRGF0YS5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xuICAgICAgaWYgKHJlc3VsdCkgdGhpcy5yb3V0ZXIuZGFzaGJvYXJkUGFnZShyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGlmIChsYWJlbEVycm9yKSB7XG4gICAgICAgIGxhYmVsRXJyb3Iuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgbGFiZWxFcnJvci50ZXh0Q29udGVudCA9IGVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSBpbnB1dHMgZGF0YVxuICAgKiBAcmV0dXJucyB0cnVlIHx8IGZhbHNlXG4gICAqL1xuICBwcml2YXRlIGlucHV0VmFsaWRhdG9yKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodXNlcm5hbWUgIT09ICcnICYmIHBhc3N3b3JkICE9PSAnJykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlQ29udHJvbGxlciB9IGZyb20gJy4vYmFzZUNvbnRyb2xsZXInO1xuXG5leHBvcnQgY2xhc3MgTWFpbkNvbnRyb2xsZXIgZXh0ZW5kcyBCYXNlQ29udHJvbGxlciB7XG4gIHByaXZhdGUgaHRtbCA9ICcnO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBtYWluIHJvdXRlIFZpZXdcbiAgICogQHJldHVybnMgSFRNTERpdkVsZW1lbnQgd2l0aCBhbGwgcGFnZSBjb250ZW50XG4gICAqL1xuICBwdWJsaWMgY3JlYXRlVmlldygpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuaHRtbCA9IGBcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5UaGlzIGlzIGEgVGl0bGU8L2gyPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxuICAgICAgICAgIFByb3ZpZGVudCB0ZW1wb3JlIGxhYm9yaW9zYW0gbm9uIGFtZXQgZXhwZWRpdGEgcXVvIG5vc3RydW0gdW5kZSwgYXQgc2FwaWVudGUuXG4gICAgICAgICAgUGxhY2VhdCByZWljaWVuZGlzIGFzc3VtZW5kYSBpZCBuZXF1ZSBpbGx1bSByZXJ1bSBhdXQgc2ltaWxpcXVlLCBpcHNhIHZvbHVwdGFzLlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHRoaXMuaHRtbCk7XG4gICAgY29uc3QgYXBwZW5kQ29udGVudCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgJ0dvIHRvIExvZ2luJywgKCkgPT4gdGhpcy5zd2l0Y2hUb0xvZ2luUGFnZSgpKTtcbiAgICBjb250YWluZXIuYXBwZW5kKG1haW5Db250ZW50LCBhcHBlbmRDb250ZW50KTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGUgdG8gbG9naW4gcGFnZVxuICAgKi9cbiAgcHJpdmF0ZSBzd2l0Y2hUb0xvZ2luUGFnZSgpIHtcbiAgICB0aGlzLnJvdXRlci5sb2dpblBhZ2UoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGVudW0gYmFzZVVybCB7XG4gIExPR0lOID0gJ2xvZ2luJyxcbiAgREFTSEJPQVJEID0gJ2Rhc2hib2FyZCcsXG59XG4iLCJleHBvcnQgZW51bSBIdHRwTWV0aG9kcyB7XG4gIFBPU1QgPSAnUE9TVCcsXG4gIEdFVCA9ICdHRVQnLFxuICBERUxFVEUgPSAnREVMRVRFJyxcbiAgUFVUID0gJ1BVVCcsXG59XG4iLCJpbXBvcnQgeyBMb2dpbkNvbnRyb2xsZXIsIE1haW5Db250cm9sbGVyLCBEYXNoYm9hcmRDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9pbmRleCc7XG5pbXBvcnQgeyBiYXNlVXJsIH0gZnJvbSAnLi9lbnVtcy9iYXNlVXJscyc7XG5pbXBvcnQgeyBTZXNzaW9uVG9rZW4gfSBmcm9tICcuL21vZGVscy9BdXRoZW50aWNhdGlvbic7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCB7IExPR0lOLCBEQVNIQk9BUkQgfSA9IGJhc2VVcmw7XG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXIge1xuICBwcml2YXRlIHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuICBwcml2YXRlIGN1cnJlbnRSb3V0ZSA9IFV0aWxzLmdldFJvdXRlKCk7XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBhbGwgdXJsIHJvdXRlc1xuICAgKi9cbiAgcHVibGljIGhhbmRsZVJlcXVlc3QoKSB7XG4gICAgY29uc29sZS5sb2coJ0hhbmRsaW5nIHJlcXVlc3RzIGZvcicsIHRoaXMuY3VycmVudFJvdXRlKTtcblxuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50Um91dGUpIHtcbiAgICAgIGNhc2UgTE9HSU46XG4gICAgICAgIHRoaXMubG9naW5QYWdlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBEQVNIQk9BUkQ6XG4gICAgICAgIHRoaXMuZGFzaGJvYXJkUGFnZShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmhvbWVQYWdlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgdGhlIGhvbWVQYWdlIHZpZXdcbiAgICovXG4gIHB1YmxpYyBob21lUGFnZSgpIHtcbiAgICBpZiAodGhpcy5yb290RWxlbWVudCkge1xuICAgICAgKHRoaXMucm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gJycpLCB0aGlzLnJvb3RFbGVtZW50Py5hcHBlbmQobmV3IE1haW5Db250cm9sbGVyKHRoaXMpLmNyZWF0ZVZpZXcoKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSB0aGUgbG9naW5QYWdlIHZpZXdcbiAgICovXG4gIHB1YmxpYyBsb2dpblBhZ2UoKSB7XG4gICAgaWYgKHRoaXMucm9vdEVsZW1lbnQpIHtcbiAgICAgICh0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9ICcnKSwgdGhpcy5yb290RWxlbWVudC5hcHBlbmQobmV3IExvZ2luQ29udHJvbGxlcih0aGlzKS5jcmVhdGVWaWV3KCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgdGhlIERhc2hib2FyZFBhZ2Ugdmlld1xuICAgKiBCdXQgcHJldmlvdXNseSwgdGhpcyBzZXRzIGEgdG9rZW4gaWYgaXQgaGFzXG4gICAqIEBwYXJhbSBzZXNzaW9uVG9rZW4gdG9rZW5cbiAgICovXG4gIHB1YmxpYyBkYXNoYm9hcmRQYWdlKHNlc3Npb25Ub2tlbjogU2Vzc2lvblRva2VuIHwgbnVsbCkge1xuICAgIGlmICh0aGlzLnJvb3RFbGVtZW50KSB7XG4gICAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgY29uc3QgZGFzaGJvYXJkQ29udHJvbGxlcjogRGFzaGJvYXJkQ29udHJvbGxlciA9IG5ldyBEYXNoYm9hcmRDb250cm9sbGVyKHRoaXMpO1xuICAgICAgaWYgKHNlc3Npb25Ub2tlbikge1xuICAgICAgICBkYXNoYm9hcmRDb250cm9sbGVyLnNldFNlc3Npb25Ub2tlbihzZXNzaW9uVG9rZW4pO1xuICAgICAgfVxuICAgICAgdGhpcy5yb290RWxlbWVudC5hcHBlbmQoZGFzaGJvYXJkQ29udHJvbGxlci5jcmVhdGVWaWV3KCkpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgU2VydmljZUNvbnRleHQgfSBmcm9tICcuLi9tb2RlbHMvU2VydmljZUNvbnRleHQnO1xuXG5leHBvcnQgY2xhc3MgQmFzZVNlcnZpY2Uge1xuICBwdWJsaWMgYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnO1xuXG4gIHB1YmxpYyBidWlsZENvbnRleHQobWV0aG9kOiBzdHJpbmcsIGN1c3RvbUJvZHk6IG9iamVjdCwgaGVhZGVycz86IGFueSk6IFNlcnZpY2VDb250ZXh0IHtcbiAgICByZXR1cm4ge1xuICAgICAgbWV0aG9kLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAuLi4oaGVhZGVycyAmJiB7IC4uLmhlYWRlcnMgfSksXG4gICAgICB9LFxuICAgICAgYm9keTogT2JqZWN0LmtleXMoY3VzdG9tQm9keSkubGVuZ3RoID8gSlNPTi5zdHJpbmdpZnkoeyAuLi5jdXN0b21Cb2R5IH0pOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgaGFuZGxlRXJyb3JSZXNwb25zZShyZXN1bHQ6IFJlc3BvbnNlKTogUHJvbWlzZTxFcnJvckV2ZW50PiB7XG4gICAgcmV0dXJuIHJlc3VsdC50ZXh0KCkudGhlbih0ZXh0ID0+IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcih0ZXh0KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgSHR0cE1ldGhvZHMgfSBmcm9tICcuLi9lbnVtcy9odHRwTWV0aG9kcydcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvVXNlcic7XG5cbmNvbnN0IHsgR0VUIH0gPSBIdHRwTWV0aG9kcztcblxuZXhwb3J0IGNsYXNzIEZldGNoRGF0YSBleHRlbmRzIEJhc2VTZXJ2aWNlIHtcbiAgcHVibGljIGFzeW5jIGdldFVzZXIoQXV0aG9yaXphdGlvbjogYW55LCBxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxVc2VyW10+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L3VzZXJzP25hbWU9JHtxdWVyeX1gO1xuXG4gICAgY29uc3QgY3VzdG9tSGVhZGVycyA9IHsgQXV0aG9yaXphdGlvbiB9XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuYnVpbGRDb250ZXh0KEdFVCwge30sIGN1c3RvbUhlYWRlcnMpO1xuICAgIGNvbnNvbGUubG9nKCdDb250ZXh0IHRvIEZldGNoOicsIGNvbnRleHQpXG5cbiAgICByZXR1cm4gZmV0Y2godXJsLCBjb250ZXh0KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICBpZiAoIXJlc3VsdC5vaykge1xuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvclJlc3BvbnNlKHJlc3VsdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0Lmpzb24oKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU2Vzc2lvblRva2VuIH0gZnJvbSAnLi4vbW9kZWxzL0F1dGhlbnRpY2F0aW9uJztcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7IEh0dHBNZXRob2RzIH0gZnJvbSAnLi4vZW51bXMvaHR0cE1ldGhvZHMnXG5cbmNvbnN0IHsgUE9TVCB9ID0gSHR0cE1ldGhvZHM7XG5cbmV4cG9ydCBjbGFzcyBGZXRjaERhdGEgZXh0ZW5kcyBCYXNlU2VydmljZSB7XG4gIHB1YmxpYyBhc3luYyBsb2dpbih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxTZXNzaW9uVG9rZW4+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVcmx9L2xvZ2luYDtcblxuICAgIGNvbnN0IGN1c3RvbUhlYWRlcnMgPSB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmJ1aWxkQ29udGV4dChQT1NULCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9LCBjdXN0b21IZWFkZXJzKTtcblxuICAgIHJldHVybiBmZXRjaCh1cmwsIGNvbnRleHQpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIGlmICghcmVzdWx0Lm9rKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVycm9yUmVzcG9uc2UocmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQuanNvbigpO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVXRpbHMge1xuICAvKipcbiAgICogUmV0cmlldmVzIGEgY3VycmVudCB1cmxcbiAgICogQHJldHVybnMgcGFyc2VkIHVybFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZXRSb3V0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVsxXTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcic7XG5cbmV4cG9ydCBjbGFzcyBNYWluIHtcbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblxuICBwdWJsaWMgbGF1bmNoQXBwKCkge1xuICAgIHRoaXMucm91dGVyLmhhbmRsZVJlcXVlc3QoKTtcbiAgfVxufVxuXG5uZXcgTWFpbigpLmxhdW5jaEFwcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9