/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(1);

	var _routes = __webpack_require__(3);

	var _routes2 = _interopRequireDefault(_routes);

	var _globalRouter = __webpack_require__(52);

	var _globalRouter2 = _interopRequireDefault(_globalRouter);

	/* Initialize Locales */
	l20n.initializeLocales(("app"), {
	  'locales': ['en-US', 'fr', 'it', 'ge', 'ar', 'ch'],
	  'default': 'en-US'
	});

	Pace.once('hide', function () {
	  $('#pace-loader').removeClass('pace-big').addClass('pace-small');
	});

	module.exports = (0, _globalRouter2['default'])(_routes2['default']);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _servicesAuth = __webpack_require__(2);

	var _servicesAuth2 = _interopRequireDefault(_servicesAuth);

	var Ploader = React.createClass({
	  displayName: 'Ploader',

	  getInitialState: function getInitialState() {
	    return {
	      display: 'none'
	    };
	  },
	  show: function show(cb) {
	    this.setState({ display: 'block' }, cb);
	  },
	  hide: function hide(cb) {
	    this.setState({ display: 'none' }, cb);
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'preloader', style: { display: this.state.display } },
	      React.createElement('img', { src: '/imgs/preloader.gif', width: '128', height: '128' })
	    );
	  }
	});

	if ('document' in window) {
	  window.Preloader = React.render(React.createElement(Ploader, null), document.getElementById('app-preloader'));
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  login: function login(email, pass, cb) {
	    var _this = this;

	    cb = arguments[arguments.length - 1];
	    if (localStorage.token) {
	      if (cb) cb(true);
	      this.onChange(true);
	      return;
	    }
	    pretendRequest(email, pass, function (res) {
	      if (res.authenticated) {
	        localStorage.token = res.token;
	        if (cb) cb(true);
	        _this.onChange(true);
	      } else {
	        if (cb) cb(false);
	        _this.onChange(false);
	      }
	    });
	  },

	  getToken: function getToken() {
	    return localStorage.token;
	  },

	  logout: function logout(cb) {
	    delete localStorage.token;
	    if (cb) cb();
	    this.onChange(false);
	  },

	  loggedIn: function loggedIn() {
	    return !!localStorage.token;
	  },

	  onChange: function onChange() {}
	};

	function pretendRequest(email, pass, cb) {
	  setTimeout(function () {
	    if (email === 'joe@example.com' && pass === 'password1') {
	      cb({
	        authenticated: true,
	        token: Math.random().toString(36).substring(7)
	      });
	    } else {
	      cb({ authenticated: false });
	    }
	  }, 0);
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRouter = __webpack_require__(4);

	var _reactAddonsLibLinkedStateMixin = __webpack_require__(34);

	var _reactRouterLibBrowserHistory = __webpack_require__(37);

	var _reactRouterLibBrowserHistory2 = _interopRequireDefault(_reactRouterLibBrowserHistory);

	var _reactRouterLibHashHistory = __webpack_require__(39);

	var _reactRouterLibHashHistory2 = _interopRequireDefault(_reactRouterLibHashHistory);

	var _routesBlank = __webpack_require__(40);

	var _routesBlank2 = _interopRequireDefault(_routesBlank);

	var _routesLogin = __webpack_require__(48);

	var _routesLogin2 = _interopRequireDefault(_routesLogin);

	var _routesDashboard = __webpack_require__(49);

	var _routesDashboard2 = _interopRequireDefault(_routesDashboard);

	var _routesMerchantsDetails = __webpack_require__(50);

	var _routesMerchantsDetails2 = _interopRequireDefault(_routesMerchantsDetails);

	var _routesMerchantsList = __webpack_require__(51);

	var _routesMerchantsList2 = _interopRequireDefault(_routesMerchantsList);

	var _servicesAuth = __webpack_require__(2);

	var _servicesAuth2 = _interopRequireDefault(_servicesAuth);

	//import {requireAuthentication} from 'components/AuthenticatedComponent';
	//import NavigatableMixin from 'react-router-component';

	var App = React.createClass({
	  displayName: 'App',

	  mixins: [_reactRouter.State, _reactRouter.Navigation, _reactAddonsLibLinkedStateMixin.LinkedStateMixin],
	  getInitialState: function getInitialState() {
	    return { loggedIn: _servicesAuth2['default'].loggedIn() };
	  },

	  updateAuth: function updateAuth(loggedIn) {
	    this.setState({ loggedIn: loggedIn });
	  },

	  componentWillMount: function componentWillMount() {
	    _servicesAuth2['default'].onChange = this.updateAuth;
	    _servicesAuth2['default'].login();
	  },

	  componentDidMount: function componentDidMount() {
	    this.transitionTo('/app/login');
	  },

	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'ul',
	        null,
	        React.createElement(
	          'li',
	          null,
	          this.state.loggedIn ? React.createElement(
	            _reactRouter.Link,
	            { to: '/logout' },
	            'Log out'
	          ) : React.createElement(
	            _reactRouter.Link,
	            { to: '/login' },
	            'Sign in'
	          )
	        ),
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            _reactRouter.Link,
	            { to: '/about' },
	            'About'
	          )
	        ),
	        React.createElement(
	          'li',
	          null,
	          React.createElement(
	            _reactRouter.Link,
	            { to: '/app/dashboard' },
	            'Dashboard'
	          ),
	          '(authenticated)'
	        )
	      ),
	      this.props.children || React.createElement(
	        'p',
	        null,
	        'You are',
	        !this.state.loggedIn && 'not',
	        'logged in.'
	      )
	    );
	  }
	});
	function requireAuth(nextState, replaceState) {
	  if (!_servicesAuth2['default'].loggedIn()) {
	    _reactRouter.Navigation.transitionTo('/app/login');
	    //replaceState({nextPathname: nextState.location.pathname}, '/app/login')
	  }
	}

	exports['default'] = function (withHistory, onUpdate) {
	  //mixins: [ Navigatable ],

	  function requireAuth1(nextState, replaceState) {
	    /*if (!auth.loggedIn()){
	      console.log(this);
	      this.transitionTo('/app/login');
	      //this.navigate('/app/login');
	      //history.replaceState({
	      //  nextPathname: nextState.location.pathname
	      //}, '/app/login')
	    }*/}

	  var history = withHistory ? Modernizr.history ? new _reactRouterLibBrowserHistory2['default']() : new _reactRouterLibHashHistory2['default']() : null;
	  return React.createElement(
	    _reactRouter.Router,
	    { history: history, onUpdate: onUpdate },
	    React.createElement(_reactRouter.Route, { path: '/', component: App }),
	    React.createElement(_reactRouter.Route, { path: '/app/login', component: _routesLogin2['default'] }),
	    React.createElement(_reactRouter.Route, { path: '/app/dashboard', component: _routesDashboard2['default'] }),
	    ' //onEnter=',
	    requireAuth,
	    React.createElement(_reactRouter.Route, { path: '/app/merchants/details/:accountNo', component: _routesMerchantsDetails2['default'] }),
	    React.createElement(_reactRouter.Route, { path: '/app/merchants/list', component: _routesMerchantsList2['default'], onEnter: requireAuth })
	  );

	  var jwt = localStorage.getItem('jwt');
	  if (jwt) {
	    LoginActions.loginUser(jwt);
	  }
	};

	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* components */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Router2 = __webpack_require__(5);

	var _Router3 = _interopRequireDefault(_Router2);

	exports.Router = _Router3['default'];

	var _Link2 = __webpack_require__(28);

	var _Link3 = _interopRequireDefault(_Link2);

	exports.Link = _Link3['default'];

	/* components (configuration) */

	var _Redirect2 = __webpack_require__(29);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	exports.Redirect = _Redirect3['default'];

	var _Route2 = __webpack_require__(30);

	var _Route3 = _interopRequireDefault(_Route2);

	exports.Route = _Route3['default'];

	/* mixins */

	var _Navigation2 = __webpack_require__(31);

	var _Navigation3 = _interopRequireDefault(_Navigation2);

	exports.Navigation = _Navigation3['default'];

	var _TransitionHook2 = __webpack_require__(32);

	var _TransitionHook3 = _interopRequireDefault(_TransitionHook2);

	exports.TransitionHook = _TransitionHook3['default'];

	var _State2 = __webpack_require__(33);

	var _State3 = _interopRequireDefault(_State2);

	exports.State = _State3['default'];

	/* utils */

	var _RouteUtils = __webpack_require__(11);

	exports.createRoutesFromReactChildren = _RouteUtils.createRoutesFromReactChildren;

	var _PropTypes2 = __webpack_require__(19);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	exports.PropTypes = _PropTypes3['default'];

	var _Router4 = _interopRequireDefault(_Router2);

	exports['default'] = _Router4['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(7);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(9);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _AsyncUtils = __webpack_require__(10);

	var _RouteUtils = __webpack_require__(11);

	var _RoutingUtils = __webpack_require__(12);

	var _PropTypes = __webpack_require__(19);

	var _RouterContextMixin = __webpack_require__(24);

	var _RouterContextMixin2 = _interopRequireDefault(_RouterContextMixin);

	var _ScrollManagementMixin = __webpack_require__(25);

	var _ScrollManagementMixin2 = _interopRequireDefault(_ScrollManagementMixin);

	var _Location = __webpack_require__(20);

	var _Transition = __webpack_require__(27);

	var _Transition2 = _interopRequireDefault(_Transition);

	var _React$PropTypes = _react2['default'].PropTypes;
	var arrayOf = _React$PropTypes.arrayOf;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	function runTransition(prevState, routes, location, hooks, callback) {
	  var transition = new _Transition2['default']();

	  (0, _RoutingUtils.getState)(routes, location, function (error, nextState) {
	    if (error || nextState == null || transition.isCancelled) {
	      callback(error, null, transition);
	    } else {
	      nextState.location = location;

	      var transitionHooks = (0, _RoutingUtils.getTransitionHooks)(prevState, nextState);
	      if (Array.isArray(hooks)) transitionHooks.unshift.apply(transitionHooks, hooks);

	      (0, _AsyncUtils.loopAsync)(transitionHooks.length, function (index, next, done) {
	        transitionHooks[index](nextState, transition, function (error) {
	          if (error || transition.isCancelled) {
	            done(error); // No need to continue.
	          } else {
	            next();
	          }
	        });
	      }, function (error) {
	        if (error || transition.isCancelled) {
	          callback(error, null, transition);
	        } else {
	          (0, _RoutingUtils.getComponents)(nextState.branch, function (error, components) {
	            if (error || transition.isCancelled) {
	              callback(error, null, transition);
	            } else {
	              nextState.components = components;
	              callback(null, nextState, transition);
	            }
	          });
	        }
	      });
	    }
	  });
	}

	var Router = _react2['default'].createClass({
	  displayName: 'Router',

	  mixins: [_RouterContextMixin2['default'], _ScrollManagementMixin2['default']],

	  statics: {

	    /**
	     * Runs a transition to the given location using the given routes and
	     * transition hooks (optional) and calls callback(error, state, transition)
	     * when finished. This is primarily useful for server-side rendering.
	     */
	    run: function run(routes, location, transitionHooks, callback) {
	      if (typeof transitionHooks === 'function') {
	        callback = transitionHooks;
	        transitionHooks = null;
	      }

	      (0, _invariant2['default'])(typeof callback === 'function', 'Router.run needs a callback');

	      runTransition(null, routes, location, transitionHooks, callback);
	    }

	  },

	  propTypes: {
	    createElement: func.isRequired,
	    onAbort: func,
	    onError: func,
	    onUpdate: func,

	    // Client-side
	    history: _PropTypes.history,
	    routes: _PropTypes.routes,
	    // Routes may also be given as children (JSX)
	    children: _PropTypes.routes,

	    // Server-side
	    location: _PropTypes.location,
	    branch: _PropTypes.routes,
	    params: object,
	    components: arrayOf(_PropTypes.components)
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react.createElement
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      isTransitioning: false,
	      location: null,
	      branch: null,
	      params: null,
	      components: null
	    };
	  },

	  _updateState: function _updateState(location) {
	    var _this = this;

	    (0, _invariant2['default'])((0, _Location.isLocation)(location), 'A <Router> needs a valid Location');

	    var hooks = this.transitionHooks;
	    if (hooks) hooks = hooks.map(function (hook) {
	      return (0, _RoutingUtils.createTransitionHook)(hook, _this);
	    });

	    this.setState({ isTransitioning: true });

	    runTransition(this.state, this.routes, location, hooks, function (error, state, transition) {
	      if (error) {
	        _this.handleError(error);
	      } else if (transition.isCancelled) {
	        if (transition.redirectInfo) {
	          var _transition$redirectInfo = transition.redirectInfo;
	          var pathname = _transition$redirectInfo.pathname;
	          var query = _transition$redirectInfo.query;
	          var state = _transition$redirectInfo.state;

	          _this.replaceWith(pathname, query, state);
	        } else {
	          (0, _invariant2['default'])(_this.state.location, 'You may not abort the initial transition');

	          _this.handleAbort(transition.abortReason);
	        }
	      } else if (state == null) {
	        (0, _warning2['default'])(false, 'Location "%s" did not match any routes', location.pathname);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }

	      _this.setState({ isTransitioning: false });
	    });
	  },

	  /**
	   * Adds a transition hook that runs before all route hooks in a
	   * transition. The signature is the same as route transition hooks.
	   */
	  addTransitionHook: function addTransitionHook(hook) {
	    if (!this.transitionHooks) this.transitionHooks = [];

	    this.transitionHooks.push(hook);
	  },

	  /**
	   * Removes the given transition hook.
	   */
	  removeTransitionHook: function removeTransitionHook(hook) {
	    if (this.transitionHooks) this.transitionHooks = this.transitionHooks.filter(function (h) {
	      return h !== hook;
	    });
	  },

	  handleAbort: function handleAbort(reason) {
	    if (this.props.onAbort) {
	      this.props.onAbort.call(this, reason);
	    } else {
	      // The best we can do here is goBack so the location state reverts
	      // to what it was. However, we also set a flag so that we know not
	      // to run through _updateState again since state did not change.
	      this._ignoreNextHistoryChange = true;
	      this.goBack();
	    }
	  },

	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably originated in getChildRoutes or getComponents.
	    }
	  },

	  handleHistoryChange: function handleHistoryChange() {
	    if (this._ignoreNextHistoryChange) {
	      this._ignoreNextHistoryChange = false;
	    } else {
	      this._updateState(this.props.history.location);
	    }
	  },

	  componentWillMount: function componentWillMount() {
	    var _props = this.props;
	    var history = _props.history;
	    var routes = _props.routes;
	    var children = _props.children;
	    var location = _props.location;
	    var branch = _props.branch;
	    var params = _props.params;
	    var components = _props.components;

	    if (history) {
	      (0, _invariant2['default'])(routes || children, 'Client-side <Router>s need routes. Try using <Router routes> or ' + 'passing your routes as nested <Route> children');

	      this.routes = (0, _RouteUtils.createRoutes)(routes || children);

	      if (typeof history.setup === 'function') history.setup();

	      // We need to listen first in case we redirect immediately.
	      if (history.addChangeListener) history.addChangeListener(this.handleHistoryChange);

	      this._updateState(history.location);
	    } else {
	      (0, _invariant2['default'])(location && branch && params && components, 'Server-side <Router>s need location, branch, params, and components ' + 'props. Try using Router.run to get all the props you need');

	      this.setState({ location: location, branch: branch, params: params, components: components });
	    }
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    (0, _invariant2['default'])(this.props.history === nextProps.history, '<Router history> may not be changed');

	    if (nextProps.history) {
	      var currentRoutes = this.props.routes || this.props.children;
	      var nextRoutes = nextProps.routes || nextProps.children;

	      if (currentRoutes !== nextRoutes) {
	        this.routes = (0, _RouteUtils.createRoutes)(nextRoutes);

	        // Call this here because _updateState
	        // uses this.routes to determine state.
	        if (nextProps.history.location) this._updateState(nextProps.history.location);
	      }
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    var history = this.props.history;

	    if (history && history.removeChangeListener) history.removeChangeListener(this.handleHistoryChange);
	  },

	  _createElement: function _createElement(component, props) {
	    return typeof component === 'function' ? this.props.createElement(component, props) : null;
	  },

	  render: function render() {
	    var _this2 = this;

	    var _state = this.state;
	    var branch = _state.branch;
	    var params = _state.params;
	    var components = _state.components;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = branch[index];
	        var routeParams = (0, _RoutingUtils.getRouteParams)(route, params);
	        var props = _extends({}, _this2.state, { route: route, routeParams: routeParams });

	        if ((0, _react.isValidElement)(element)) {
	          props.children = element;
	        } else if (element) {
	          // In render, do var { header, sidebar } = this.props;
	          _extends(props, element);
	        }

	        if (typeof components === 'object') {
	          var elements = {};

	          for (var key in components) if (components.hasOwnProperty(key)) elements[key] = _this2._createElement(components[key], props);

	          return elements;
	        }

	        return _this2._createElement(components, props);
	      }, element);
	    }

	    (0, _invariant2['default'])(element === null || element === false || (0, _react.isValidElement)(element), 'The root route must render a single element');

	    return element;
	  }

	});

	exports['default'] = Router;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var __DEV__ = process.env.NODE_ENV !== 'production';

	var warning = function() {};

	if (__DEV__) {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	exports.hashAsync = hashAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0;
	  var isDone = false;

	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) return;

	    if (currentTurn < turns) {
	      currentTurn += 1;
	      work.call(this, currentTurn - 1, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false;
	  var doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

	function hashAsync(object, work, callback) {
	  var keys = Object.keys(object);

	  mapAsync(keys, function (key, index, callback) {
	    work(object[key], callback);
	  }, function (error, valuesArray) {
	    if (error) {
	      callback(error);
	    } else {
	      var values = valuesArray.reduce(function (memo, results, index) {
	        memo[keys[index]] = results;
	        return memo;
	      }, {});

	      callback(null, values);
	    }
	  });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(7);

	var _warning2 = _interopRequireDefault(_warning);

	function isValidChild(object) {
	  return object == null || (0, _react.isValidElement)(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function checkPropTypes(componentName, propTypes, props) {
	  componentName = componentName || 'UnknownComponent';

	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error = propTypes[propName](props, propName, componentName);

	      if (error instanceof Error) (0, _warning2['default'])(false, error.message);
	    }
	  }
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = _extends({}, type.defaultProps, element.props);

	  if (type.propTypes) checkPropTypes(type.displayName || type.name, type.propTypes, route);

	  if (route.children) {
	    route.childRoutes = createRoutesFromReactChildren(route.children);
	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router';
	 *   
	 *   var routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   );
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */

	function createRoutesFromReactChildren(children) {
	  var routes = [];

	  _react2['default'].Children.forEach(children, function (element) {
	    if ((0, _react.isValidElement)(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        routes.push(element.type.createRouteFromReactElement(element));
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */

	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (!Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getState = getState;
	exports.createTransitionHook = createTransitionHook;
	exports.getTransitionHooks = getTransitionHooks;
	exports.getComponents = getComponents;
	exports.getRouteParams = getRouteParams;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(9);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(11);

	var _URLUtils = __webpack_require__(13);

	var _AsyncUtils = __webpack_require__(10);

	function getChildRoutes(route, locationState, callback) {
	  if (route.childRoutes) {
	    callback(null, route.childRoutes);
	  } else if (route.getChildRoutes) {
	    route.getChildRoutes(locationState, callback);
	  } else {
	    callback();
	  }
	}

	function getIndexRoute(route, locationState, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    route.getIndexRoute(callback, locationState);
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduceRight(function (params, paramName, index) {
	    var paramValue = paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].unshift(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [paramValue, params[paramName]];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, pathname, locationState, callback) {
	  var _matchPattern = (0, _URLUtils.matchPattern)(route.path, pathname);

	  var remainingPathname = _matchPattern.remainingPathname;
	  var paramNames = _matchPattern.paramNames;
	  var paramValues = _matchPattern.paramValues;

	  var isExactMatch = remainingPathname === '';

	  if (isExactMatch && route.path) {
	    var params = createParams(paramNames, paramValues);
	    var branch = [route];

	    getIndexRoute(route, locationState, function (error, indexRoute) {
	      if (error) {
	        callback(error);
	      } else {
	        if (indexRoute) branch.push(indexRoute);

	        callback(null, { params: params, branch: branch });
	      }
	    });
	  } else if (remainingPathname != null) {
	    // This route matched at least some of the path.
	    getChildRoutes(route, locationState, function (error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, remainingPathname, locationState, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            assignParams(match.params, paramNames, paramValues);
	            match.branch.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        });
	      } else {
	        callback();
	      }
	    });
	  } else {
	    callback();
	  }
	}

	function matchRoutes(routes, pathname, locationState, callback) {
	  routes = (0, _RouteUtils.createRoutes)(routes);

	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], pathname, locationState, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object may have the
	 * following properties:
	 *
	 * - branch       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may return synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */

	function getState(routes, location, callback) {
	  matchRoutes(routes, (0, _URLUtils.stripLeadingSlashes)(location.pathname), location.state, callback);
	}

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = (0, _URLUtils.getParamNames)(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Runs a diff on the two router states and returns an array of two
	 * arrays: 1) the routes that we are leaving, starting with the leaf
	 * route and 2) the routes that we are entering, ending with the leaf
	 * route.
	 */
	function computeDiff(prevState, nextState) {
	  var fromRoutes = prevState && prevState.branch;
	  var toRoutes = nextState.branch;

	  var leavingRoutes, enteringRoutes;
	  if (fromRoutes) {
	    leavingRoutes = fromRoutes.filter(function (route) {
	      return toRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	    });

	    // onLeave hooks start at the leaf route.
	    leavingRoutes.reverse();

	    enteringRoutes = toRoutes.filter(function (route) {
	      return fromRoutes.indexOf(route) === -1 || leavingRoutes.indexOf(route) !== -1;
	    });
	  } else {
	    leavingRoutes = [];
	    enteringRoutes = toRoutes;
	  }

	  return [leavingRoutes, enteringRoutes];
	}

	function createTransitionHook(fn, context) {
	  return function (nextState, transition, callback) {
	    if (fn.length > 2) {
	      fn.call(context, nextState, transition, callback);
	    } else {
	      // Assume fn executes synchronously and
	      // automatically call the callback for them.
	      fn.call(context, nextState, transition);
	      callback();
	    }
	  };
	}

	function getTransitionHooksFromRoutes(routes, hookName) {
	  return routes.reduce(function (hooks, route) {
	    if (route[hookName]) hooks.push(createTransitionHook(route[hookName], route));

	    return hooks;
	  }, []);
	}

	/**
	 * Compiles and returns an array of transition hook functions that
	 * should be called before we transition to a new state. Transition
	 * hook signatures are:
	 *
	 *   - route.onLeave(nextState, transition[, callback ])
	 *   - route.onEnter(nextState, transition[, callback ])
	 *
	 * Transition hooks run in order from the leaf route in the branch
	 * we're leaving, up the tree to the common parent route, and back
	 * down the branch we're entering to the leaf route.
	 *
	 * If a transition hook needs to execute asynchronously it may have
	 * a 3rd argument that it should call when it is finished. Otherwise
	 * the transition executes synchronously.
	 */

	function getTransitionHooks(prevState, nextState) {
	  var _computeDiff = computeDiff(prevState, nextState);

	  var leavingRoutes = _computeDiff[0];
	  var enteringRoutes = _computeDiff[1];

	  var hooks = getTransitionHooksFromRoutes(leavingRoutes, 'onLeave');

	  hooks.push.apply(hooks, getTransitionHooksFromRoutes(enteringRoutes, 'onEnter'));

	  return hooks;
	}

	function getComponentsForRoute(route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	  } else if (route.getComponents) {
	    route.getComponents(callback);
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may return synchronously if no routes have an
	 * asynchronous getComponents method.
	 */

	function getComponents(routes, callback) {
	  (0, _AsyncUtils.mapAsync)(routes, function (route, index, callback) {
	    getComponentsForRoute(route, callback);
	  }, callback);
	}

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */

	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  var paramNames = (0, _URLUtils.getParamNames)(route.path);

	  for (var p in params) if (params.hasOwnProperty(p) && paramNames.indexOf(p) !== -1) routeParams[p] = params[p];

	  return routeParams;
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.stringifyQuery = stringifyQuery;
	exports.getPathname = getPathname;
	exports.getQueryString = getQueryString;
	exports.stripLeadingSlashes = stripLeadingSlashes;
	exports.isAbsolutePath = isAbsolutePath;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _qs = __webpack_require__(14);

	var _qs2 = _interopRequireDefault(_qs);

	var _invariant = __webpack_require__(9);

	var _invariant2 = _interopRequireDefault(_invariant);

	var parseQueryString = _qs2['default'].parse;

	exports.parseQueryString = parseQueryString;

	function stringifyQuery(query) {
	  return _qs2['default'].stringify(query, { arrayFormat: 'brackets' });
	}

	var queryMatcher = /\?([\s\S]*)$/;

	function getPathname(path) {
	  return path.replace(queryMatcher, '');
	}

	function getQueryString(path) {
	  var match = path.match(queryMatcher);
	  return match ? match[1] : '';
	}

	function stripLeadingSlashes(path) {
	  return path ? path.replace(/^\/+/, '') : '';
	}

	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function escapeSource(string) {
	  return escapeRegExp(string).replace(/\/+/g, '/+');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeSource(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/?#]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '*') {
	      regexpSource += '([\\s\\S]*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeSource(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = {};

	function compilePattern(pattern) {
	  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 *
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */

	function matchPattern(pattern, pathname) {
	  var _compilePattern2 = compilePattern(stripLeadingSlashes(pattern));

	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;

	  regexpSource += '/*'; // Ignore trailing slashes

	  var captureRemaining = tokens[tokens.length - 1] !== '*';

	  if (captureRemaining) regexpSource += '([\\s\\S]*?)';

	  var match = pathname.match(new RegExp('^' + regexpSource + '$', 'i'));

	  var remainingPathname, paramValues;
	  if (match != null) {
	    paramValues = Array.prototype.slice.call(match, 1).map(function (v) {
	      return v != null ? decodeURIComponent(v.replace(/\+/g, '%20')) : v;
	    });

	    if (captureRemaining) {
	      remainingPathname = paramValues.pop();
	    } else {
	      remainingPathname = pathname.replace(match[0], '');
	    }
	  } else {
	    remainingPathname = paramValues = null;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: paramValues
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var _matchPattern = matchPattern(pattern, stripLeadingSlashes(pathname));

	  var paramNames = _matchPattern.paramNames;
	  var paramValues = _matchPattern.paramValues;

	  if (paramValues != null) {
	    return paramNames.reduce(function (memo, paramName, index) {
	      memo[paramName] = paramValues[index];
	      return memo;
	    }, {});
	  }

	  return null;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */

	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern);

	  var tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;

	  var token, paramName, paramValue;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      (0, _invariant2['default'])(paramValue != null || parenCount > 0, 'Missing splat #%s for path "%s"', splatIndex, pattern);

	      if (paramValue != null) pathname += encodeURI(paramValue).replace(/%20/g, '+');
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      (0, _invariant2['default'])(paramValue != null || parenCount > 0, 'Missing "%s" parameter for path "%s"', paramName, pattern);

	      if (paramValue != null) pathname += encodeURIComponent(paramValue).replace(/%20/g, '+');
	    } else {
	      pathname += token;
	    }
	  }

	  return pathname.replace(/\/+/g, '/');
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Stringify = __webpack_require__(16);
	var Parse = __webpack_require__(18);


	// Declare internals

	var internals = {};


	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(17);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    arrayPrefixGenerators: {
	        brackets: function (prefix, key) {
	            return prefix + '[]';
	        },
	        indices: function (prefix, key) {
	            return prefix + '[' + key + ']';
	        },
	        repeat: function (prefix, key) {
	            return prefix;
	        }
	    }
	};


	internals.stringify = function (obj, prefix, generateArrayPrefix) {

	    if (Utils.isBuffer(obj)) {
	        obj = obj.toString();
	    }
	    else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    }
	    else if (obj === null) {
	        obj = '';
	    }

	    if (typeof obj === 'string' ||
	        typeof obj === 'number' ||
	        typeof obj === 'boolean') {

	        return [encodeURIComponent(prefix) + '=' + encodeURIComponent(obj)];
	    }

	    var values = [];

	    if (typeof obj === 'undefined') {
	        return values;
	    }

	    var objKeys = Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        if (Array.isArray(obj)) {
	            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix));
	        }
	        else {
	            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix));
	        }
	    }

	    return values;
	};


	module.exports = function (obj, options) {

	    options = options || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;

	    var keys = [];

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return '';
	    }

	    var arrayFormat;
	    if (options.arrayFormat in internals.arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    }
	    else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    }
	    else {
	        arrayFormat = 'indices';
	    }

	    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

	    var objKeys = Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix));
	    }

	    return keys.join(delimiter);
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	// Load modules


	// Declare internals

	var internals = {};


	exports.arrayToObject = function (source) {

	    var obj = {};
	    for (var i = 0, il = source.length; i < il; ++i) {
	        if (typeof source[i] !== 'undefined') {

	            obj[i] = source[i];
	        }
	    }

	    return obj;
	};


	exports.merge = function (target, source) {

	    if (!source) {
	        return target;
	    }

	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        }
	        else {
	            target[source] = true;
	        }

	        return target;
	    }

	    if (typeof target !== 'object') {
	        target = [target].concat(source);
	        return target;
	    }

	    if (Array.isArray(target) &&
	        !Array.isArray(source)) {

	        target = exports.arrayToObject(target);
	    }

	    var keys = Object.keys(source);
	    for (var k = 0, kl = keys.length; k < kl; ++k) {
	        var key = keys[k];
	        var value = source[key];

	        if (!target[key]) {
	            target[key] = value;
	        }
	        else {
	            target[key] = exports.merge(target[key], value);
	        }
	    }

	    return target;
	};


	exports.decode = function (str) {

	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};


	exports.compact = function (obj, refs) {

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return obj;
	    }

	    refs = refs || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }

	    refs.push(obj);

	    if (Array.isArray(obj)) {
	        var compacted = [];

	        for (var i = 0, il = obj.length; i < il; ++i) {
	            if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }

	        return compacted;
	    }

	    var keys = Object.keys(obj);
	    for (i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        obj[key] = exports.compact(obj[key], refs);
	    }

	    return obj;
	};


	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};


	exports.isBuffer = function (obj) {

	    if (obj === null ||
	        typeof obj === 'undefined') {

	        return false;
	    }

	    return !!(obj.constructor &&
	        obj.constructor.isBuffer &&
	        obj.constructor.isBuffer(obj));
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(17);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000
	};


	internals.parseValues = function (str, options) {

	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

	    for (var i = 0, il = parts.length; i < il; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

	        if (pos === -1) {
	            obj[Utils.decode(part)] = '';
	        }
	        else {
	            var key = Utils.decode(part.slice(0, pos));
	            var val = Utils.decode(part.slice(pos + 1));

	            if (Object.prototype.hasOwnProperty(key)) {
	                continue;
	            }

	            if (!obj.hasOwnProperty(key)) {
	                obj[key] = val;
	            }
	            else {
	                obj[key] = [].concat(obj[key]).concat(val);
	            }
	        }
	    }

	    return obj;
	};


	internals.parseObject = function (chain, val, options) {

	    if (!chain.length) {
	        return val;
	    }

	    var root = chain.shift();

	    var obj = {};
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(internals.parseObject(chain, val, options));
	    }
	    else {
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        var indexString = '' + index;
	        if (!isNaN(index) &&
	            root !== cleanRoot &&
	            indexString === cleanRoot &&
	            index >= 0 &&
	            index <= options.arrayLimit) {

	            obj = [];
	            obj[index] = internals.parseObject(chain, val, options);
	        }
	        else {
	            obj[cleanRoot] = internals.parseObject(chain, val, options);
	        }
	    }

	    return obj;
	};


	internals.parseKeys = function (key, val, options) {

	    if (!key) {
	        return;
	    }

	    // The regex chunks

	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;

	    // Get the parent

	    var segment = parent.exec(key);

	    // Don't allow them to overwrite object prototype properties

	    if (Object.prototype.hasOwnProperty(segment[1])) {
	        return;
	    }

	    // Stash the parent if it exists

	    var keys = [];
	    if (segment[1]) {
	        keys.push(segment[1]);
	    }

	    // Loop through children appending to the array until we hit depth

	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {

	        ++i;
	        if (!Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
	            keys.push(segment[1]);
	        }
	    }

	    // If there's a remainder, just add whatever is left

	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }

	    return internals.parseObject(keys, val, options);
	};


	module.exports = function (str, options) {

	    if (str === '' ||
	        str === null ||
	        typeof str === 'undefined') {

	        return {};
	    }

	    options = options || {};
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;

	    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
	    var obj = {};

	    // Iterate over the keys and setup the new object

	    var keys = Object.keys(tempObj);
	    for (var i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        var newObj = internals.parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj);
	    }

	    return Utils.compact(obj);
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _Location = __webpack_require__(20);

	var _Location2 = _interopRequireDefault(_Location);

	var _History = __webpack_require__(23);

	var _History2 = _interopRequireDefault(_History);

	var _React$PropTypes = _react2['default'].PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;
	var arrayOf = _React$PropTypes.arrayOf;
	var instanceOf = _React$PropTypes.instanceOf;
	var oneOfType = _React$PropTypes.oneOfType;
	var element = _React$PropTypes.element;

	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var component = func;
	var components = oneOfType([component, object]);
	var history = instanceOf(_History2['default']);
	var location = instanceOf(_Location2['default']);
	var route = oneOfType([object, element]);
	var routes = oneOfType([route, arrayOf(route)]);

	module.exports = {
	  falsy: falsy,
	  component: component,
	  components: components,
	  history: history,
	  location: location,
	  route: route,
	  routes: routes
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _NavigationTypes = __webpack_require__(21);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	/**
	 * A Location answers two important questions:
	 *
	 * 1. Where am I?
	 * 2. How did I get here?
	 */

	var Location = (function () {
	  function Location() {
	    var pathname = arguments[0] === undefined ? '/' : arguments[0];
	    var query = arguments[1] === undefined ? null : arguments[1];
	    var state = arguments[2] === undefined ? null : arguments[2];
	    var navigationType = arguments[3] === undefined ? _NavigationTypes2['default'].POP : arguments[3];

	    _classCallCheck(this, Location);

	    this.pathname = pathname;
	    this.query = query;
	    this.state = state;
	    this.navigationType = navigationType;
	  }

	  Location.isLocation = function isLocation(object) {
	    return object instanceof Location;
	  };

	  return Location;
	})();

	exports['default'] = Location;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _keymirror = __webpack_require__(22);

	var _keymirror2 = _interopRequireDefault(_keymirror);

	var NavigationTypes = (0, _keymirror2['default'])({

	  /**
	   * Indicates that navigation was caused by a call to history.push.
	   */
	  PUSH: null,

	  /**
	   * Indicates that navigation was caused by a call to history.replace.
	   */
	  REPLACE: null,

	  /**
	   * Indicates that navigation was caused by some other action such
	   * as using a browser's back/forward buttons and/or manually manipulating
	   * the URL in a browser's location bar. This is the default.
	   *
	   * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	   * for more information.
	   */
	  POP: null

	});

	exports['default'] = NavigationTypes;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */

	"use strict";

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function(obj) {
	  var ret = {};
	  var key;
	  if (!(obj instanceof Object && !Array.isArray(obj))) {
	    throw new Error('keyMirror(...): Argument must be an object.');
	  }
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(9);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _URLUtils = __webpack_require__(13);

	var _Location = __webpack_require__(20);

	var _Location2 = _interopRequireDefault(_Location);

	var RequiredHistorySubclassMethods = ['pushState', 'replaceState', 'go'];

	function createRandomKey() {
	  return Math.random().toString(36).substr(2);
	}

	/**
	 * A history interface that normalizes the differences across
	 * various environments and implementations. Requires concrete
	 * subclasses to implement the following methods:
	 *
	 * - pushState(state, path)
	 * - replaceState(state, path)
	 * - go(n)
	 */

	var History = (function () {
	  function History() {
	    var options = arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, History);

	    RequiredHistorySubclassMethods.forEach(function (method) {
	      (0, _invariant2['default'])(typeof this[method] === 'function', '%s needs a "%s" method', this.constructor.name, method);
	    }, this);

	    this.parseQueryString = options.parseQueryString || _URLUtils.parseQueryString;
	    this.changeListeners = [];
	    this.location = null;
	  }

	  History.prototype._notifyChange = function _notifyChange() {
	    for (var i = 0, len = this.changeListeners.length; i < len; ++i) this.changeListeners[i].call(this);
	  };

	  History.prototype.addChangeListener = function addChangeListener(listener) {
	    this.changeListeners.push(listener);
	  };

	  History.prototype.removeChangeListener = function removeChangeListener(listener) {
	    this.changeListeners = this.changeListeners.filter(function (li) {
	      return li !== listener;
	    });
	  };

	  History.prototype.back = function back() {
	    this.go(-1);
	  };

	  History.prototype.forward = function forward() {
	    this.go(1);
	  };

	  History.prototype._createState = function _createState(state) {
	    state = state || {};

	    if (!state.key) state.key = createRandomKey();

	    return state;
	  };

	  History.prototype.createLocation = function createLocation(path, state, navigationType) {
	    var pathname = (0, _URLUtils.getPathname)(path);
	    var queryString = (0, _URLUtils.getQueryString)(path);
	    var query = queryString ? this.parseQueryString(queryString) : null;
	    return new _Location2['default'](pathname, query, state, navigationType);
	  };

	  return History;
	})();

	exports['default'] = History;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(9);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _URLUtils = __webpack_require__(13);

	var _React$PropTypes = _react2['default'].PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	function pathnameIsActive(pathname, activePathname) {
	  if ((0, _URLUtils.stripLeadingSlashes)(activePathname).indexOf((0, _URLUtils.stripLeadingSlashes)(pathname)) === 0) return true; // This quick comparison satisfies most use cases.

	  // TODO: Implement a more stringent comparison that checks
	  // to see if the pathname matches any routes (and params)
	  // in the currently active branch.

	  return false;
	}

	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  for (var p in query) if (query.hasOwnProperty(p) && String(query[p]) !== String(activeQuery[p])) return false;

	  return true;
	}

	var RouterContextMixin = {

	  propTypes: {
	    stringifyQuery: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      stringifyQuery: _URLUtils.stringifyQuery
	    };
	  },

	  childContextTypes: {
	    router: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      router: this
	    };
	  },

	  /**
	   * Returns a full URL path from the given pathname and query.
	   */
	  makePath: function makePath(pathname, query) {
	    if (query) {
	      if (typeof query !== 'string') query = this.props.stringifyQuery(query);

	      if (query !== '') return pathname + '?' + query;
	    }

	    return pathname;
	  },

	  /**
	   * Returns a string that may safely be used to link to the given
	   * pathname and query.
	   */
	  makeHref: function makeHref(pathname, query) {
	    var path = this.makePath(pathname, query);
	    var history = this.props.history;

	    if (history && history.makeHref) return history.makeHref(path);

	    return path;
	  },

	  /**
	   * Pushes a new Location onto the history stack.
	   */
	  transitionTo: function transitionTo(pathname, query) {
	    var state = arguments[2] === undefined ? null : arguments[2];
	    var history = this.props.history;

	    (0, _invariant2['default'])(history, 'Router#transitionTo is client-side only (needs history)');

	    history.pushState(state, this.makePath(pathname, query));
	  },

	  /**
	   * Replaces the current Location on the history stack.
	   */
	  replaceWith: function replaceWith(pathname, query) {
	    var state = arguments[2] === undefined ? null : arguments[2];
	    var history = this.props.history;

	    (0, _invariant2['default'])(history, 'Router#replaceWith is client-side only (needs history)');

	    history.replaceState(state, this.makePath(pathname, query));
	  },

	  /**
	   * Navigates forward/backward n entries in the history stack.
	   */
	  go: function go(n) {
	    var history = this.props.history;

	    (0, _invariant2['default'])(history, 'Router#go is client-side only (needs history)');

	    history.go(n);
	  },

	  /**
	   * Navigates back one entry in the history stack. This is identical to
	   * the user clicking the browser's back button.
	   */
	  goBack: function goBack() {
	    this.go(-1);
	  },

	  /**
	   * Navigates forward one entry in the history stack. This is identical to
	   * the user clicking the browser's forward button.
	   */
	  goForward: function goForward() {
	    this.go(1);
	  },

	  /**
	   * Returns true if a <Link> to the given pathname/query combination is
	   * currently active.
	   */
	  isActive: function isActive(pathname, query) {
	    var location = this.state.location;

	    if (location == null) return false;

	    return pathnameIsActive(pathname, location.pathname) && queryIsActive(query, location.query);
	  }

	};

	exports['default'] = RouterContextMixin;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _DOMUtils = __webpack_require__(26);

	var _NavigationTypes = __webpack_require__(21);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	var func = _react2['default'].PropTypes.func;

	function getCommonAncestors(branch, otherBranch) {
	  return branch.filter(function (route) {
	    return otherBranch.indexOf(route) !== -1;
	  });
	}

	function shouldUpdateScrollPosition(state, prevState) {
	  var location = state.location;
	  var branch = state.branch;
	  var prevLocation = prevState.location;
	  var prevBranch = prevState.branch;

	  // When an onEnter hook uses transition.to to redirect
	  // on the initial load prevLocation is null, so assume
	  // we don't want to update the scroll position.
	  if (prevLocation === null) return false;

	  // Don't update scroll position if only the query has changed.
	  if (location.pathname === prevLocation.pathname) return false;

	  // Don't update scroll position if any of the ancestors
	  // has `ignoreScrollPosition` set to `true` on the route.
	  var sharedAncestors = getCommonAncestors(branch, prevBranch);
	  if (sharedAncestors.some(function (route) {
	    return route.ignoreScrollBehavior;
	  })) return false;

	  return true;
	}

	function updateWindowScrollPosition(navigationType, scrollX, scrollY) {
	  if (_DOMUtils.canUseDOM) {
	    if (navigationType === _NavigationTypes2['default'].POP) {
	      (0, _DOMUtils.setWindowScrollPosition)(scrollX, scrollY);
	    } else {
	      (0, _DOMUtils.setWindowScrollPosition)(0, 0);
	    }
	  }
	}

	var ScrollManagementMixin = {

	  propTypes: {
	    shouldUpdateScrollPosition: func.isRequired,
	    updateScrollPosition: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      shouldUpdateScrollPosition: shouldUpdateScrollPosition,
	      updateScrollPosition: updateWindowScrollPosition
	    };
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    var location = this.state.location;

	    var locationState = location && location.state;

	    if (locationState && this.props.shouldUpdateScrollPosition(this.state, prevState)) {
	      var scrollX = locationState.scrollX;
	      var scrollY = locationState.scrollY;

	      this.props.updateScrollPosition(location.navigationType, scrollX || 0, scrollY || 0);
	    }
	  }

	};

	exports['default'] = ScrollManagementMixin;
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.getWindowScrollPosition = getWindowScrollPosition;
	exports.setWindowScrollPosition = setWindowScrollPosition;
	exports.supportsHistory = supportsHistory;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	exports.canUseDOM = canUseDOM;

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search;
	}

	function getWindowScrollPosition() {
	  return {
	    scrollX: window.pageXOffset || document.documentElement.scrollLeft,
	    scrollY: window.pageYOffset || document.documentElement.scrollTop
	  };
	}

	function setWindowScrollPosition(scrollX, scrollY) {
	  window.scrollTo(scrollX, scrollY);
	}

	/**
	 * taken from modernizr
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Transition = (function () {
	  function Transition() {
	    _classCallCheck(this, Transition);

	    this.isCancelled = false;
	    this.redirectInfo = null;
	    this.abortReason = null;
	  }

	  Transition.prototype.to = function to(pathname, query, state) {
	    this.redirectInfo = { pathname: pathname, query: query, state: state };
	    this.isCancelled = true;
	  };

	  Transition.prototype.abort = function abort(reason) {
	    this.abortReason = reason;
	    this.isCancelled = true;
	  };

	  return Transition;
	})();

	exports["default"] = Transition;
	module.exports = exports["default"];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _React$PropTypes = _react2['default'].PropTypes;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	/**
	 * <Link> components are used to create an <a> element that links to a route.
	 * When that route is active, the link gets an "active" class name (or the
	 * value of its `activeClassName` prop).
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route name="showPost" path="/posts/:postID" handler={Post}/>
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along query string parameters
	 * using the `query` prop.
	 *
	 *   <Link to="/posts/123" query={{ show:true }}/>
	 */
	var Link = _react2['default'].createClass({
	  displayName: 'Link',

	  contextTypes: {
	    router: object
	  },

	  propTypes: {
	    activeStyle: object,
	    activeClassName: string,
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onClick: func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      className: '',
	      activeClassName: 'active',
	      style: {}
	    };
	  },

	  handleClick: function handleClick(event) {
	    var allowTransition = true;
	    var clickResult;

	    if (this.props.onClick) clickResult = this.props.onClick(event);

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    if (clickResult === false || event.defaultPrevented === true) allowTransition = false;

	    event.preventDefault();

	    if (allowTransition) this.context.router.transitionTo(this.props.to, this.props.query, this.props.state);
	  },

	  render: function render() {
	    var router = this.context.router;
	    var _props = this.props;
	    var to = _props.to;
	    var query = _props.query;

	    var props = _extends({}, this.props, {
	      href: router.makeHref(to, query),
	      onClick: this.handleClick
	    });

	    // ignore if rendered outside of the context of a router, simplifies unit testing
	    if (router && router.isActive(to, query)) {
	      if (props.activeClassName) props.className += props.className !== '' ? ' ' + props.activeClassName : props.activeClassName;

	      if (props.activeStyle) props.style = _extends({}, props.style, props.activeStyle);
	    }

	    return _react2['default'].createElement('a', props);
	  }

	});

	exports.Link = Link;
	exports['default'] = Link;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(9);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(11);

	var _URLUtils = __webpack_require__(13);

	var _PropTypes = __webpack_require__(19);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;
	var Redirect = _react2['default'].createClass({
	  displayName: 'Redirect',

	  statics: {

	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.from) route.path = route.from;

	      route.onEnter = function (nextState, transition) {
	        var location = nextState.location;
	        var params = nextState.params;

	        var pathname = route.to ? (0, _URLUtils.formatPattern)(route.to, params) : location.pathname;

	        transition.to(pathname, route.query || location.query, route.state || location.state);
	      };

	      return route;
	    }

	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _PropTypes.falsy,
	    children: _PropTypes.falsy
	  },

	  render: function render() {
	    (0, _invariant2['default'])(false, '<Redirect> elements are for router configuration only and should not be rendered');
	  }

	});

	exports.Redirect = Redirect;
	exports['default'] = Redirect;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(9);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(11);

	var _PropTypes = __webpack_require__(19);

	var _warning = __webpack_require__(7);

	var _warning2 = _interopRequireDefault(_warning);

	var _React$PropTypes = _react2['default'].PropTypes;
	var string = _React$PropTypes.string;
	var bool = _React$PropTypes.bool;
	var func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the page when
	 * the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is requested,
	 * the tree is searched depth-first to find a route whose path matches the URL.
	 * When one is found, all routes in the tree that lead to it are considered
	 * "active" and their components are rendered into the DOM, nested in the same
	 * order as they are in the tree.
	 */
	var Route = _react2['default'].createClass({
	  displayName: 'Route',

	  statics: {

	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.handler) {
	        (0, _warning2['default'])(false, '<Route handler> is deprecated, use <Route component> instead');
	        route.component = route.handler;
	        delete route.handler;
	      }

	      return route;
	    }

	  },

	  propTypes: {
	    path: string,
	    ignoreScrollBehavior: bool,
	    handler: _PropTypes.component,
	    component: _PropTypes.component,
	    components: _PropTypes.components,
	    getComponents: func
	  },

	  render: function render() {
	    (0, _invariant2['default'])(false, '<Route> elements are for router configuration only and should not be rendered');
	  }

	});

	exports.Route = Route;
	exports['default'] = Route;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var object = _react2['default'].PropTypes.object;

	/**
	 * A mixin for components that modify the URL.
	 *
	 * Example:
	 *
	 *   import { Navigation } from 'react-router';
	 *
	 *   var MyLink = React.createClass({
	 *     mixins: [ Navigation ],
	 *     handleClick(event) {
	 *       event.preventDefault();
	 *       this.transitionTo('aRoute', { the: 'params' }, { the: 'query' });
	 *     },
	 *     render() {
	 *       return (
	 *         <a onClick={this.handleClick}>Click me!</a>
	 *       );
	 *     }
	 *   });
	 */
	var Navigation = {

	  contextTypes: {
	    router: object.isRequired
	  }

	};

	var RouterNavigationMethods = ['makePath', 'makeHref', 'transitionTo', 'replaceWith', 'go', 'goBack', 'goForward'];

	RouterNavigationMethods.forEach(function (method) {
	  Navigation[method] = function () {
	    var router = this.context.router;
	    return router[method].apply(router, arguments);
	  };
	});

	exports['default'] = Navigation;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(7);

	var _warning2 = _interopRequireDefault(_warning);

	var object = _react2['default'].PropTypes.object;

	var TransitionHook = {

	  contextTypes: {
	    router: object.isRequired
	  },

	  componentDidMount: function componentDidMount() {
	    (0, _warning2['default'])(typeof this.routerWillLeave === 'function', 'Components that mixin TransitionHook should have a routerWillLeave method, check %s', this.constructor.displayName || this.constructor.name);

	    if (this.routerWillLeave) this.context.router.addTransitionHook(this.routerWillLeave);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this.routerWillLeave) this.context.router.removeTransitionHook(this.routerWillLeave);
	  }

	};

	exports['default'] = TransitionHook;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var object = _react2['default'].PropTypes.object;

	/**
	 * A mixin for components that need to know the path, routes, URL
	 * params and query that are currently active.
	 *
	 * Example:
	 *
	 *   import { State } from 'react-router';
	 *
	 *   var AboutLink = React.createClass({
	 *     mixins: [ State ],
	 *     render() {
	 *       var className = this.props.className;
	 *
	 *       if (this.isActive('about'))
	 *         className += ' is-active';
	 *
	 *       return React.createElement('a', { className: className }, this.props.children);
	 *     }
	 *   });
	 */
	var State = {

	  contextTypes: {
	    router: object.isRequired
	  }

	};

	var RouterStateMethods = ['isActive'];

	RouterStateMethods.forEach(function (method) {
	  State[method] = function () {
	    var router = this.context.router;
	    return router[method].apply(router, arguments);
	  };
	});

	exports['default'] = State;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule LinkedStateMixin
	 * @typechecks static-only
	 */

	"use strict";

	var ReactLink = __webpack_require__(35);
	var ReactStateSetters = __webpack_require__(36);

	/**
	 * A simple mixin around ReactLink.forState().
	 */
	var LinkedStateMixin = {
	  /**
	   * Create a ReactLink that's linked to part of this component's state. The
	   * ReactLink will have the current value of this.state[key] and will call
	   * setState() when a change is requested.
	   *
	   * @param {string} key state key to update. Note: you may want to use keyOf()
	   * if you're using Google Closure Compiler advanced mode.
	   * @return {ReactLink} ReactLink instance linking to the state.
	   */
	  linkState: function(key) {
	    return new ReactLink(
	      this.state[key],
	      ReactStateSetters.createStateKeySetter(this, key)
	    );
	  }
	};

	module.exports = LinkedStateMixin;


/***/ },
/* 35 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule ReactLink
	 * @typechecks static-only
	 */

	"use strict";

	/**
	 * ReactLink encapsulates a common pattern in which a component wants to modify
	 * a prop received from its parent. ReactLink allows the parent to pass down a
	 * value coupled with a callback that, when invoked, expresses an intent to
	 * modify that value. For example:
	 *
	 * React.createClass({
	 *   getInitialState: function() {
	 *     return {value: ''};
	 *   },
	 *   render: function() {
	 *     var valueLink = new ReactLink(this.state.value, this._handleValueChange);
	 *     return <input valueLink={valueLink} />;
	 *   },
	 *   this._handleValueChange: function(newValue) {
	 *     this.setState({value: newValue});
	 *   }
	 * });
	 *
	 * We have provided some sugary mixins to make the creation and
	 * consumption of ReactLink easier; see LinkedValueUtils and LinkedStateMixin.
	 */

	/**
	 * @param {*} value current value of the link
	 * @param {function} requestChange callback to request a change
	 */
	function ReactLink(value, requestChange) {
	  this.value = value;
	  this.requestChange = requestChange;
	}

	module.exports = ReactLink;


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule ReactStateSetters
	 */

	"use strict";

	var ReactStateSetters = {
	  /**
	   * Returns a function that calls the provided function, and uses the result
	   * of that to set the component's state.
	   *
	   * @param {ReactCompositeComponent} component
	   * @param {function} funcReturningState Returned callback uses this to
	   *                                      determine how to update state.
	   * @return {function} callback that when invoked uses funcReturningState to
	   *                    determined the object literal to setState.
	   */
	  createStateSetter: function(component, funcReturningState) {
	    return function(a, b, c, d, e, f) {
	      var partialState = funcReturningState.call(component, a, b, c, d, e, f);
	      if (partialState) {
	        component.setState(partialState);
	      }
	    };
	  },

	  /**
	   * Returns a single-argument callback that can be used to update a single
	   * key in the component's state.
	   *
	   * Note: this is memoized function, which makes it inexpensive to call.
	   *
	   * @param {ReactCompositeComponent} component
	   * @param {string} key The key in the state that you should update.
	   * @return {function} callback of 1 argument which calls setState() with
	   *                    the provided keyName and callback argument.
	   */
	  createStateKeySetter: function(component, key) {
	    // Memoize the setters.
	    var cache = component.__keySetters || (component.__keySetters = {});
	    return cache[key] || (cache[key] = createStateKeySetter(component, key));
	  }
	};

	function createStateKeySetter(component, key) {
	  // Partial state is allocated outside of the function closure so it can be
	  // reused with every call, avoiding memory allocation when this function
	  // is called.
	  var partialState = {};
	  return function stateKeySetter(value) {
	    partialState[key] = value;
	    component.setState(partialState);
	  };
	}

	ReactStateSetters.Mixin = {
	  /**
	   * Returns a function that calls the provided function, and uses the result
	   * of that to set the component's state.
	   *
	   * For example, these statements are equivalent:
	   *
	   *   this.setState({x: 1});
	   *   this.createStateSetter(function(xValue) {
	   *     return {x: xValue};
	   *   })(1);
	   *
	   * @param {function} funcReturningState Returned callback uses this to
	   *                                      determine how to update state.
	   * @return {function} callback that when invoked uses funcReturningState to
	   *                    determined the object literal to setState.
	   */
	  createStateSetter: function(funcReturningState) {
	    return ReactStateSetters.createStateSetter(this, funcReturningState);
	  },

	  /**
	   * Returns a single-argument callback that can be used to update a single
	   * key in the component's state.
	   *
	   * For example, these statements are equivalent:
	   *
	   *   this.setState({x: 1});
	   *   this.createStateKeySetter('x')(1);
	   *
	   * Note: this is memoized function, which makes it inexpensive to call.
	   *
	   * @param {string} key The key in the state that you should update.
	   * @return {function} callback of 1 argument which calls setState() with
	   *                    the provided keyName and callback argument.
	   */
	  createStateKeySetter: function(key) {
	    return ReactStateSetters.createStateKeySetter(this, key);
	  }
	};

	module.exports = ReactStateSetters;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _DOMHistory2 = __webpack_require__(38);

	var _DOMHistory3 = _interopRequireDefault(_DOMHistory2);

	var _DOMUtils = __webpack_require__(26);

	var _NavigationTypes = __webpack_require__(21);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	function updateCurrentState(extraState) {
	  var state = window.history.state;

	  if (state) window.history.replaceState(_extends(state, extraState), '');
	}

	/**
	 * A history implementation for DOM environments that support the
	 * HTML5 history API (pushState, replaceState, and the popstate event).
	 * Provides the cleanest URLs and should always be used in browser
	 * environments if possible.
	 *
	 * Note: BrowserHistory automatically falls back to using full page
	 * refreshes if HTML5 history is not available, so URLs are always
	 * the same across browsers.
	 */

	var BrowserHistory = (function (_DOMHistory) {
	  function BrowserHistory(options) {
	    _classCallCheck(this, BrowserHistory);

	    _DOMHistory.call(this, options);
	    this.handlePopState = this.handlePopState.bind(this);
	    this.isSupported = (0, _DOMUtils.supportsHistory)();
	  }

	  _inherits(BrowserHistory, _DOMHistory);

	  BrowserHistory.prototype._updateLocation = function _updateLocation(navigationType) {
	    var state = null;

	    if (this.isSupported) {
	      var historyState = window.history.state;
	      state = this._createState(historyState);

	      if (!historyState || !historyState.key) window.history.replaceState(state, '');
	    }

	    this.location = this.createLocation((0, _DOMUtils.getWindowPath)(), state, navigationType);
	  };

	  BrowserHistory.prototype.setup = function setup() {
	    if (this.location == null) this._updateLocation();
	  };

	  BrowserHistory.prototype.handlePopState = function handlePopState(event) {
	    if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	    this._updateLocation(_NavigationTypes2['default'].POP);
	    this._notifyChange();
	  };

	  BrowserHistory.prototype.addChangeListener = function addChangeListener(listener) {
	    _DOMHistory.prototype.addChangeListener.call(this, listener);

	    if (this.changeListeners.length === 1) {
	      if (window.addEventListener) {
	        window.addEventListener('popstate', this.handlePopState, false);
	      } else {
	        window.attachEvent('onpopstate', this.handlePopState);
	      }
	    }
	  };

	  BrowserHistory.prototype.removeChangeListener = function removeChangeListener(listener) {
	    _DOMHistory.prototype.removeChangeListener.call(this, listener);

	    if (this.changeListeners.length === 0) {
	      if (window.removeEventListener) {
	        window.removeEventListener('popstate', this.handlePopState, false);
	      } else {
	        window.detachEvent('onpopstate', this.handlePopState);
	      }
	    }
	  };

	  // http://www.w3.org/TR/2011/WD-html5-20110113/history.html#dom-history-pushstate

	  BrowserHistory.prototype.pushState = function pushState(state, path) {
	    if (this.isSupported) {
	      updateCurrentState(this.getScrollPosition());

	      state = this._createState(state);

	      window.history.pushState(state, '', path);
	      this.location = this.createLocation(path, state, _NavigationTypes2['default'].PUSH);
	      this._notifyChange();
	    } else {
	      window.location = path;
	    }
	  };

	  // http://www.w3.org/TR/2011/WD-html5-20110113/history.html#dom-history-replacestate

	  BrowserHistory.prototype.replaceState = function replaceState(state, path) {
	    if (this.isSupported) {
	      state = this._createState(state);

	      window.history.replaceState(state, '', path);
	      this.location = this.createLocation(path, state, _NavigationTypes2['default'].REPLACE);
	      this._notifyChange();
	    } else {
	      window.location.replace(path);
	    }
	  };

	  return BrowserHistory;
	})(_DOMHistory3['default']);

	var history = new BrowserHistory();
	exports.history = history;
	exports['default'] = BrowserHistory;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _History2 = __webpack_require__(23);

	var _History3 = _interopRequireDefault(_History2);

	var _DOMUtils = __webpack_require__(26);

	/**
	 * A history interface that assumes a DOM environment.
	 */

	var DOMHistory = (function (_History) {
	  function DOMHistory() {
	    var options = arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, DOMHistory);

	    _History.call(this, options);
	    this.getScrollPosition = options.getScrollPosition || _DOMUtils.getWindowScrollPosition;
	  }

	  _inherits(DOMHistory, _History);

	  DOMHistory.prototype.go = function go(n) {
	    if (n === 0) return;

	    window.history.go(n);
	  };

	  return DOMHistory;
	})(_History3['default']);

	exports['default'] = DOMHistory;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _warning = __webpack_require__(7);

	var _warning2 = _interopRequireDefault(_warning);

	var _DOMHistory2 = __webpack_require__(38);

	var _DOMHistory3 = _interopRequireDefault(_DOMHistory2);

	var _NavigationTypes = __webpack_require__(21);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	var _DOMUtils = __webpack_require__(26);

	var _URLUtils = __webpack_require__(13);

	var DefaultQueryKey = '_qk';

	function ensureSlash() {
	  var path = (0, _DOMUtils.getHashPath)();

	  if ((0, _URLUtils.isAbsolutePath)(path)) return true;

	  (0, _DOMUtils.replaceHashPath)('/' + path);

	  return false;
	}

	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + ('' + key + '=' + value);
	}

	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}

	function saveState(path, queryKey, state) {
	  window.sessionStorage.setItem(state.key, JSON.stringify(state));
	  return addQueryStringValueToPath(path, queryKey, state.key);
	}

	function readState(path, queryKey) {
	  var sessionKey = getQueryStringValueFromPath(path, queryKey);
	  var json = sessionKey && window.sessionStorage.getItem(sessionKey);

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {}
	  }

	  return null;
	}

	function updateCurrentState(queryKey, extraState) {
	  var path = (0, _DOMUtils.getHashPath)();
	  var state = readState(path, queryKey);

	  if (state) saveState(path, queryKey, _extends(state, extraState));
	}

	/**
	 * A history implementation for DOM environments that uses window.location.hash
	 * to store the current path. This is essentially a hack for older browsers that
	 * do not support the HTML5 history API (IE <= 9).
	 *
	 * Support for persistence of state across page refreshes is provided using a
	 * combination of a URL query string parameter and DOM storage. However, this
	 * support is not enabled by default. In order to use it, create your own
	 * HashHistory.
	 *
	 *   import HashHistory from 'react-router/lib/HashHistory';
	 *   var StatefulHashHistory = new HashHistory({ queryKey: '_key' });
	 *   React.render(<Router history={StatefulHashHistory} .../>, ...);
	 */

	var HashHistory = (function (_DOMHistory) {
	  function HashHistory() {
	    var options = arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, HashHistory);

	    _DOMHistory.call(this, options);
	    this.handleHashChange = this.handleHashChange.bind(this);
	    this.queryKey = options.queryKey;

	    if (typeof this.queryKey !== 'string') this.queryKey = this.queryKey ? DefaultQueryKey : null;
	  }

	  _inherits(HashHistory, _DOMHistory);

	  HashHistory.prototype._updateLocation = function _updateLocation(navigationType) {
	    var path = (0, _DOMUtils.getHashPath)();
	    var state = this.queryKey ? readState(path, this.queryKey) : null;
	    this.location = this.createLocation(path, state, navigationType);
	  };

	  HashHistory.prototype.setup = function setup() {
	    if (this.location == null) {
	      ensureSlash();
	      this._updateLocation();
	    }
	  };

	  HashHistory.prototype.handleHashChange = function handleHashChange() {
	    if (!ensureSlash()) return;

	    if (this._ignoreNextHashChange) {
	      this._ignoreNextHashChange = false;
	    } else {
	      this._updateLocation(_NavigationTypes2['default'].POP);
	      this._notifyChange();
	    }
	  };

	  HashHistory.prototype.addChangeListener = function addChangeListener(listener) {
	    _DOMHistory.prototype.addChangeListener.call(this, listener);

	    if (this.changeListeners.length === 1) {
	      if (window.addEventListener) {
	        window.addEventListener('hashchange', this.handleHashChange, false);
	      } else {
	        window.attachEvent('onhashchange', this.handleHashChange);
	      }
	    }
	  };

	  HashHistory.prototype.removeChangeListener = function removeChangeListener(listener) {
	    _DOMHistory.prototype.removeChangeListener.call(this, listener);

	    if (this.changeListeners.length === 0) {
	      if (window.removeEventListener) {
	        window.removeEventListener('hashchange', this.handleHashChange, false);
	      } else {
	        window.detachEvent('onhashchange', this.handleHashChange);
	      }
	    }
	  };

	  HashHistory.prototype.pushState = function pushState(state, path) {
	    (0, _warning2['default'])(this.queryKey || state == null, 'HashHistory needs a queryKey in order to persist state');

	    if (this.queryKey) updateCurrentState(this.queryKey, this.getScrollPosition());

	    state = this._createState(state);

	    if (this.queryKey) path = saveState(path, this.queryKey, state);

	    this._ignoreNextHashChange = true;
	    window.location.hash = path;

	    this.location = this.createLocation(path, state, _NavigationTypes2['default'].PUSH);

	    this._notifyChange();
	  };

	  HashHistory.prototype.replaceState = function replaceState(state, path) {
	    state = this._createState(state);

	    if (this.queryKey) path = saveState(path, this.queryKey, state);

	    this._ignoreNextHashChange = true;
	    (0, _DOMUtils.replaceHashPath)(path);

	    this.location = this.createLocation(path, state, _NavigationTypes2['default'].REPLACE);

	    this._notifyChange();
	  };

	  HashHistory.prototype.makeHref = function makeHref(path) {
	    return '#' + path;
	  };

	  return HashHistory;
	})(_DOMHistory3['default']);

	var history = new HashHistory();
	exports.history = history;
	exports['default'] = HashHistory;

	// Ignore invalid JSON in session storage.

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(41);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(42);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(43);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(45);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(47);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var Body = (function (_React$Component) {
	  _inherits(Body, _React$Component);

	  function Body() {
	    _classCallCheck(this, Body);

	    _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Body, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Container,
	        { id: 'body' },
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 12 },
	              React.createElement(
	                PanelContainer,
	                null,
	                React.createElement(
	                  Panel,
	                  null,
	                  React.createElement(
	                    PanelBody,
	                    { className: 'text-center' },
	                    React.createElement(
	                      'p',
	                      null,
	                      'DASHBOARD'
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Body;
	})(React.Component);

	var _default = (function (_React$Component2) {
	  _inherits(_default, _React$Component2);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = SidebarMixin;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRouter = __webpack_require__(4);

	var _classnames = __webpack_require__(41);

	var _classnames2 = _interopRequireDefault(_classnames);

	var openState = !Modernizr.touch ? localStorage.getItem('sidebar-open-state') === 'true' ? true : false : false;

	function SidebarMixin(ComposedComponent) {
	  return React.createClass({
	    displayName: 'SidebarMixin',
	    getInitialState: function getInitialState() {
	      return {
	        open: openState
	      };
	    },
	    isOpen: function isOpen() {
	      return this.state.open === open;
	    },
	    sidebarStateChangeCallback: function sidebarStateChangeCallback(open) {
	      if (this.isOpen()) return;
	      if (open !== undefined) {
	        openState = open;
	      } else {
	        openState = !this.state.open;
	      }
	      this.setState({
	        open: openState // toggle sidebar
	      });
	      localStorage.setItem('sidebar-open-state', openState);
	    },
	    componentWillMount: function componentWillMount() {
	      ReactBootstrap.Dispatcher.on('sidebar', this.sidebarStateChangeCallback);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	      ReactBootstrap.Dispatcher.off('sidebar', this.sidebarStateChangeCallback);
	    },
	    render: function render() {
	      return React.createElement(ComposedComponent, _extends({}, this.props, { open: this.state.open }));
	    }
	  });
	}

	var SidebarControlBtn = React.createClass({
	  displayName: 'SidebarControlBtn',

	  getInitialState: function getInitialState() {
	    return {
	      active: this.props.active || false
	    };
	  },
	  handleClick: function handleClick(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    ReactBootstrap.Dispatcher.emit('sidebar:controlbtn', this.props);
	    ReactBootstrap.Dispatcher.emit('sidebar:keychange', this.props.sidebar);
	  },
	  handleState: function handleState(props) {
	    if (props.hasOwnProperty('sidebar')) {
	      if (props.sidebar === this.props.sidebar) {
	        this.setState({ active: true });
	      } else {
	        this.setState({ active: false });
	      }
	    }
	  },
	  componentDidMount: function componentDidMount() {
	    ReactBootstrap.Dispatcher.on('sidebar:controlbtn', this.handleState);
	    var scrollToTop = function scrollToTop() {
	      if ($(window).scrollTop() === 0) return;
	      setTimeout(function () {
	        $('html, body, #body').scrollTop(0);
	        $(window).scrollTop(0);
	        scrollToTop();
	      }, 15);
	    };

	    scrollToTop();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    ReactBootstrap.Dispatcher.off('sidebar:controlbtn', this.handleState);
	  },
	  render: function render() {
	    var classes = (0, _classnames2['default'])('sidebar-control-btn', {
	      'active': this.state.active
	    }, this.props.className);

	    var props = _extends({
	      tabIndex: '-1',
	      onClick: this.handleClick
	    }, this.props, {
	      className: classes.trim()
	    });
	    return React.createElement(
	      'li',
	      props,
	      React.createElement(
	        'a',
	        { href: '#', tabIndex: '-1' },
	        React.createElement(Icon, { bundle: this.props.bundle, glyph: this.props.glyph })
	      )
	    );
	  }
	});

	exports.SidebarControlBtn = SidebarControlBtn;
	var SidebarControls = React.createClass({
	  displayName: 'SidebarControls',

	  render: function render() {
	    var classes = (0, _classnames2['default'])('sidebar-controls-container', this.props.className);
	    var props = _extends({
	      dir: 'ltr'
	    }, this.props, {
	      className: classes
	    });

	    return React.createElement(
	      'div',
	      _extends({}, props, { children: null }),
	      React.createElement(
	        'div',
	        { className: 'sidebar-controls', tabIndex: '-1' },
	        this.props.children
	      )
	    );
	  }
	});

	exports.SidebarControls = SidebarControls;
	var timer = null;
	var Sidebar = React.createClass({
	  displayName: 'Sidebar',

	  getInitialState: function getInitialState() {
	    return {
	      left: this.props.sidebar * 100 + '%',
	      visibility: this.props.sidebar === 0 ? 'visible' : 'hidden'
	    };
	  },
	  handleKeyChange: function handleKeyChange(sidebar) {
	    var _this = this;

	    var newLeft = this.props.sidebar * 100 - sidebar * 100 + '%';
	    this.setState({
	      left: newLeft,
	      visibility: 'visible'
	    }, function () {
	      if (newLeft !== '0%') {
	        setTimeout(function () {
	          _this.setState({ visibility: 'hidden' });
	        }, 300);
	      } else if (newLeft === '0%') {
	        var height = $(React.findDOMNode(_this.refs.innersidebar)).height();
	        if ($('html').hasClass('static')) {
	          $('#body').css('min-height', height + 400);
	        } else {
	          $('#body').css('min-height', '');
	        }
	      }
	    });
	  },
	  updateScrollbar: function updateScrollbar() {
	    if (!Modernizr.touch) {
	      $(React.findDOMNode(this.refs.sidebar)).perfectScrollbar('update');
	    }
	  },
	  repositionScrollbar: function repositionScrollbar(child_node, top, height) {
	    clearTimeout(timer);
	    var node = $(React.findDOMNode(this.refs.sidebar));
	    var scrollTo = top - node.offset().top + node.scrollTop();
	    if (node.find(child_node).length) {
	      if (scrollTo > $(window).height() / 2) {
	        this.timer = setTimeout(function () {
	          node.scrollTop(scrollTo - $(window).height() / 2 + 100);
	        }, 15);
	      }
	    }
	    if (!Modernizr.touch) {
	      this.updateScrollbar();
	    }
	  },
	  destroyScrollbar: function destroyScrollbar() {
	    $(React.findDOMNode(this.refs.sidebar)).perfectScrollbar('destroy');
	  },
	  initializeScrollbar: function initializeScrollbar() {
	    $(React.findDOMNode(this.refs.sidebar)).perfectScrollbar({
	      suppressScrollX: true
	    });
	  },
	  componentWillMount: function componentWillMount() {
	    ReactBootstrap.Dispatcher.on('sidebar:reinitialize', this.initializeScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:destroy', this.destroyScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:update', this.updateScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:reposition', this.repositionScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:keychange', this.handleKeyChange);
	  },
	  componentDidMount: function componentDidMount() {
	    var _this2 = this;

	    if (!Modernizr.touch) {
	      this.initializeScrollbar();
	    }

	    if (this.props.active) {
	      setTimeout(function () {
	        ReactBootstrap.Dispatcher.emit('sidebar:controlbtn', { sidebar: _this2.props.sidebar });
	        ReactBootstrap.Dispatcher.emit('sidebar:keychange', _this2.props.sidebar);
	      }, 15);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    ReactBootstrap.Dispatcher.off('sidebar:reinitialize', this.initializeScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:destroy', this.destroyScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:update', this.updateScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:reposition', this.repositionScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:keychange', this.handleKeyChange);
	  },
	  render: function render() {
	    var props = _extends({
	      style: {
	        left: this.state.left,
	        visibility: this.state.visibility,
	        transition: 'all 0.3s ease',
	        OTransition: 'all 0.3s ease',
	        MsTransition: 'all 0.3s ease',
	        MozTransition: 'all 0.3s ease',
	        WebkitTransition: 'all 0.3s ease'
	      }
	    }, this.props, {
	      className: (0, _classnames2['default'])('sidebar', this.props.className)
	    });

	    return React.createElement(
	      'div',
	      _extends({ ref: 'sidebar' }, props, { children: null }),
	      React.createElement(
	        'div',
	        { ref: 'innersidebar' },
	        this.props.children
	      )
	    );
	  }
	});

	exports.Sidebar = Sidebar;
	var SidebarNavItem = React.createClass({
	  displayName: 'SidebarNavItem',

	  timer: null,
	  mixins: [_reactRouter.Navigation, _reactRouter.State],
	  propTypes: {
	    open: React.PropTypes.bool,
	    active: React.PropTypes.bool,
	    href: React.PropTypes.string,
	    autoHeight: React.PropTypes.bool
	  },
	  getInitialState: function getInitialState() {
	    return {
	      open: this.props.open || false,
	      active: this.props.active || false,
	      toggleOpen: this.props.open || false,
	      dir: 'left',
	      opposite: false
	    };
	  },
	  emitOpen: function emitOpen(open) {
	    var node = React.findDOMNode(this.refs.node);
	    if (open) {
	      ReactBootstrap.Dispatcher.emit('sidebar:openstate', node, open);
	    } else {
	      ReactBootstrap.Dispatcher.emit('sidebar:openstate', node);
	    }
	  },
	  handleClick: function handleClick(e) {
	    if (!this.props.href) {
	      e.preventDefault();
	      e.stopPropagation();
	    }
	    if (this.props.hasOwnProperty('onClick')) {
	      this.props.onClick();
	    }
	    this.emitOpen();
	  },
	  collapse: function collapse(node, cb) {
	    var _this3 = this;

	    this.setState({
	      toggleOpen: false
	    }, function () {
	      var height = $(node).height();
	      $(node).css('height', height).animate({
	        height: '45px'
	      }, 125, 'easeInOutSine', function () {
	        $(node).css('height', '');
	        try {
	          _this3.setState({
	            open: false,
	            toggleOpen: false
	          }, function () {
	            if (cb) cb();
	          });
	        } catch (e) {}
	      });
	    });
	  },
	  expand: function expand(node, cb, disableAnimation) {
	    var _this4 = this;

	    if (disableAnimation) {
	      $(node).css('height', '').addClass('open');
	    } else {
	      this.setState({
	        toggleOpen: true
	      }, function () {
	        var height = $(node).addClass('open').height();
	        $(node).removeClass('open');
	        $(node).css('height', '45px').animate({
	          height: height
	        }, 125, 'easeInOutSine', function () {
	          $(node).css('height', '');
	          try {
	            _this4.setState({
	              open: true
	            }, function () {
	              if (cb) cb();
	            });
	          } catch (e) {}
	        });
	      });
	    }
	  },
	  handleOpenState: function handleOpenState(child_node, open) {
	    var _this5 = this;

	    clearTimeout(this.timer);
	    this.timer = setTimeout(function () {
	      if (_this5.props.children && _this5.isMounted()) {
	        var node = React.findDOMNode(_this5.refs.node);
	        if (open) {
	          if ($(node).find(child_node).length) {
	            _this5.setState({
	              open: true,
	              toggleOpen: true
	            });
	            _this5.expand(node, function () {
	              ReactBootstrap.Dispatcher.emit('sidebar:update');
	            }, true);
	          }
	          return;
	        }
	        if ($(node).is(child_node)) {
	          if (_this5.state.open) {
	            _this5.collapse(node, function () {
	              ReactBootstrap.Dispatcher.emit('sidebar:update');
	            });
	          } else {
	            _this5.expand(node, function () {
	              ReactBootstrap.Dispatcher.emit('sidebar:update');
	            });
	          }
	          return;
	        }
	        if (!$(node).find(child_node).length) {
	          if (_this5.state.open) _this5.collapse(node);
	        }
	      }
	    }, 15);
	  },
	  handleLayoutDirChange: function handleLayoutDirChange(dir) {
	    this.setState({
	      dir: dir === 'ltr' ? 'left' : 'right',
	      opposite: dir === 'ltr' ? false : true
	    });
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    ReactBootstrap.Dispatcher.off('layout:dir', this.handleLayoutDirChange);
	    ReactBootstrap.Dispatcher.off('sidebar:openstate', this.handleOpenState);
	  },
	  componentWillMount: function componentWillMount() {
	    ReactBootstrap.Dispatcher.on('layout:dir', this.handleLayoutDirChange);
	    ReactBootstrap.Dispatcher.on('sidebar:openstate', this.handleOpenState);
	  },
	  activateNavItem: function activateNavItem(props) {
	    var _this6 = this;

	    var active = props.active || false;
	    var currentLocation = this.context.router.state.location.pathname;

	    if (!active && props.href) {
	      active = this.isActive(props.href) && currentLocation == props.href;
	    }

	    if (active) {
	      this.emitOpen(true);
	      setTimeout(function () {
	        _this6.setState({ active: true });
	        var node = React.findDOMNode(_this6.refs.node);
	        var height = $(node).height();
	        var top = $(node).offset().top;
	        ReactBootstrap.Dispatcher.emit('sidebar:reposition', node, top, height);
	      }, 15);
	    } else {
	      this.setState({ active: false });
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.activateNavItem(nextProps);
	  },
	  componentDidMount: function componentDidMount() {
	    this.activateNavItem(this.props);
	  },
	  render: function render() {
	    var classes = (0, _classnames2['default'])({
	      'open': this.state.open,
	      'active': this.state.active
	    });
	    var toggleClasses = (0, _classnames2['default'])({
	      'toggle-button': true,
	      'open': this.state.toggleOpen,
	      'opposite': this.state.opposite
	    });
	    var icon = null,
	        toggleButton = null;
	    if (this.props.children) {
	      toggleButton = React.createElement(Icon, { className: toggleClasses.trim(), bundle: 'fontello', glyph: this.state.dir + '-open-3' });
	    }
	    if (this.props.glyph || this.props.bundle) {
	      icon = React.createElement(Icon, { bundle: this.props.bundle, glyph: this.props.glyph });
	    }
	    var style = { height: this.props.autoHeight ? 'auto' : '' };

	    var props = _extends({
	      name: null,
	      style: style,
	      tabIndex: '-1'
	    }, this.props, {
	      className: classes.trim()
	    });

	    var RouteLink = 'a';
	    var componentProps = {
	      name: null,
	      tabIndex: -1,
	      href: this.props.href || '',
	      onClick: this.handleClick,
	      style: style
	    };

	    if (this.props.hasOwnProperty('href') && this.props.href.length && this.props.href !== '#') {
	      RouteLink = _reactRouter.Link;
	      componentProps.to = this.props.href;
	      delete componentProps.href;
	    }

	    return React.createElement(
	      'li',
	      _extends({ ref: 'node' }, props),
	      React.createElement(
	        RouteLink,
	        componentProps,
	        icon,
	        React.createElement(
	          'span',
	          { className: 'name' },
	          this.props.name
	        ),
	        toggleButton
	      ),
	      this.props.children
	    );
	  }
	});

	exports.SidebarNavItem = SidebarNavItem;
	var SidebarNav = React.createClass({
	  displayName: 'SidebarNav',

	  render: function render() {
	    var classes = (0, _classnames2['default'])('sidebar-nav', this.props.className);

	    var props = _extends({}, this.props, {
	      className: classes
	    });

	    return React.createElement(
	      'ul',
	      _extends({}, props, { children: null }),
	      this.props.children
	    );
	  }
	});

	exports.SidebarNav = SidebarNav;
	var SidebarBtn = React.createClass({
	  displayName: 'SidebarBtn',

	  handleSidebarStateChange: function handleSidebarStateChange(props) {
	    if (props['data-id'] === 'sidebar-btn') {
	      ReactBootstrap.Dispatcher.emit('sidebar');
	    }
	  },
	  render: function render() {
	    var classes = (0, _classnames2['default'])('pull-left visible-xs-inline-block', this.props.className);
	    var props = _extends({}, this.props, {
	      classes: classes
	    });

	    return React.createElement(
	      NavContent,
	      props,
	      React.createElement(
	        Nav,
	        { onItemSelect: this.handleSidebarStateChange },
	        React.createElement(
	          NavItem,
	          { 'data-id': 'sidebar-btn', className: 'sidebar-btn', href: '/' },
	          React.createElement(Icon, { bundle: 'fontello', glyph: 'th-list-5' })
	        )
	      )
	    );
	  }
	});
	exports.SidebarBtn = SidebarBtn;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _reactRouter = __webpack_require__(4);

	var _cookies = __webpack_require__(44);

	var _cookies2 = _interopRequireDefault(_cookies);

	var _classnames = __webpack_require__(41);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(42);

	var _servicesAuth = __webpack_require__(2);

	var _servicesAuth2 = _interopRequireDefault(_servicesAuth);

	var Brand = (function (_React$Component) {
	  _inherits(Brand, _React$Component);

	  function Brand() {
	    _classCallCheck(this, Brand);

	    _get(Object.getPrototypeOf(Brand.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Brand, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        NavHeader,
	        this.props,
	        React.createElement(
	          NavBrand,
	          { tabIndex: '-1' },
	          React.createElement('img', { src: '/imgs/logo.png', alt: 'XtremePay', width: '111', height: '28' })
	        )
	      );
	    }
	  }]);

	  return Brand;
	})(React.Component);

	var LocaleMenuItem = (function (_React$Component2) {
	  _inherits(LocaleMenuItem, _React$Component2);

	  function LocaleMenuItem() {
	    _classCallCheck(this, LocaleMenuItem);

	    _get(Object.getPrototypeOf(LocaleMenuItem.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(LocaleMenuItem, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        MenuItem,
	        _extends({}, this.props, { lang: null, href: '#' }),
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { xs: 2 },
	              React.createElement('img', { src: '/imgs/flags/flags/flat/32/' + this.props.flag + '.png', width: '32', height: '32' })
	            ),
	            React.createElement(
	              Col,
	              { xs: 10 },
	              React.createElement(Entity, { className: 'lang-menu-text', entity: 'languageMenu', data: { lang: this.props.lang } })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return LocaleMenuItem;
	})(React.Component);

	var DirectNavItem = React.createClass({
	  displayName: 'DirectNavItem',

	  mixins: [_reactRouter.State, _reactRouter.Navigation],
	  render: function render() {
	    var active = false;
	    var currentLocation = this.context.router.state.location.pathname;

	    if (!active && this.props.path) {
	      active = this.isActive(this.props.path) && currentLocation == this.props.path;
	    }

	    var classes = (0, _classnames2['default'])({
	      'pressed': active
	    });
	    return React.createElement(
	      NavItem,
	      _extends({ className: classes }, this.props),
	      React.createElement(
	        _reactRouter.Link,
	        { to: this.props.path },
	        React.createElement(Icon, { bundle: this.props.bundle || 'fontello', glyph: this.props.glyph })
	      )
	    );
	  }
	});

	var Skins = (function (_React$Component3) {
	  _inherits(Skins, _React$Component3);

	  function Skins() {
	    _classCallCheck(this, Skins);

	    _get(Object.getPrototypeOf(Skins.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Skins, [{
	    key: 'switchSkin',
	    value: function switchSkin(skin, e) {
	      e.preventDefault();
	      e.stopPropagation();
	      for (var i = 0; i < Skins.skins.length; i++) {
	        $('html').removeClass(Skins.skins[i]);
	      }
	      $('html').addClass(skin);
	      vex.close(this.props.id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Grid,
	        { style: { margin: '-2em' } },
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 12, className: 'text-center bg-darkgrayishblue75', style: { marginBottom: 25 } },
	            React.createElement(
	              'div',
	              { className: 'fg-white', style: { fontSize: 24, lineHeight: 1, padding: '25px 10px' } },
	              'Choose a theme:'
	            )
	          )
	        ),
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 4, className: 'text-center' },
	            React.createElement(
	              'a',
	              { href: '#', style: { border: 'none' }, onClick: this.switchSkin.bind(this, 'default') },
	              React.createElement(Icon, { glyph: 'icon-fontello-stop icon-4x', style: { color: '#E76049' } })
	            )
	          ),
	          React.createElement(
	            Col,
	            { xs: 4, className: 'text-center' },
	            React.createElement(
	              'a',
	              { href: '#', style: { border: 'none' }, onClick: this.switchSkin.bind(this, 'green') },
	              React.createElement(Icon, { glyph: 'icon-fontello-stop icon-4x', className: 'fg-darkgreen45' })
	            )
	          ),
	          React.createElement(
	            Col,
	            { xs: 4, className: 'text-center' },
	            React.createElement(
	              'a',
	              { href: '#', style: { border: 'none' }, onClick: this.switchSkin.bind(this, 'blue') },
	              React.createElement(Icon, { glyph: 'icon-fontello-stop icon-4x', className: 'fg-blue' })
	            )
	          )
	        ),
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 4, className: 'text-center' },
	            React.createElement(
	              'a',
	              { href: '#', style: { border: 'none' }, onClick: this.switchSkin.bind(this, 'purple') },
	              React.createElement(Icon, { glyph: 'icon-fontello-stop icon-4x', className: 'fg-purple' })
	            )
	          ),
	          React.createElement(
	            Col,
	            { xs: 4, className: 'text-center' },
	            React.createElement(
	              'a',
	              { href: '#', style: { border: 'none' }, onClick: this.switchSkin.bind(this, 'brown') },
	              React.createElement(Icon, { glyph: 'icon-fontello-stop icon-4x', className: 'fg-brown' })
	            )
	          ),
	          React.createElement(
	            Col,
	            { xs: 4, className: 'text-center' },
	            React.createElement(
	              'a',
	              { href: '#', style: { border: 'none' }, onClick: this.switchSkin.bind(this, 'cyan') },
	              React.createElement(Icon, { glyph: 'icon-fontello-stop icon-4x', className: 'fg-darkcyan' })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Skins;
	})(React.Component);

	Skins.skins = ['default', 'green', 'blue', 'purple', 'brown', 'cyan'];

	var CommitChart = (function (_React$Component4) {
	  _inherits(CommitChart, _React$Component4);

	  function CommitChart() {
	    _classCallCheck(this, CommitChart);

	    _get(Object.getPrototypeOf(CommitChart.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(CommitChart, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var chart = new Rubix('#commit-column-chart', {
	        width: '100%',
	        height: 100,
	        hideAxisAndGrid: true,
	        hideLegend: true,
	        tooltip: {
	          color: '#2EB398'
	        },
	        margin: {
	          top: 25,
	          bottom: 25
	        }
	      });

	      var alerts = chart.column_series({
	        name: 'Commits',
	        color: '#2EB398'
	      });

	      alerts.addData([{ x: 10, y: 20 }, { x: 11, y: 50 }, { x: 12, y: 35 }, { x: 13, y: 30 }, { x: 14, y: 20 }, { x: 15, y: 25 }, { x: 16, y: 30 }, { x: 17, y: 50 }, { x: 18, y: 20 }, { x: 19, y: 30 }, { x: 20, y: 50 }, { x: 21, y: 20 }, { x: 22, y: 50 }, { x: 23, y: 35 }, { x: 24, y: 30 }, { x: 25, y: 20 }, { x: 26, y: 30 }]);

	      $(window).trigger('resize');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Grid,
	        { style: { marginBottom: -10 } },
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 12 },
	            React.createElement('div', { id: 'commit-column-chart' })
	          )
	        )
	      );
	    }
	  }]);

	  return CommitChart;
	})(React.Component);

	var LtrRtlLayout = (function (_React$Component5) {
	  _inherits(LtrRtlLayout, _React$Component5);

	  function LtrRtlLayout() {
	    _classCallCheck(this, LtrRtlLayout);

	    _get(Object.getPrototypeOf(LtrRtlLayout.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(LtrRtlLayout, [{
	    key: 'handleLayoutRadioChange',
	    value: function handleLayoutRadioChange(e) {
	      var dir = e.target.value;
	      _cookies2['default'].setItem('rubix_dir', dir);
	      window.location.reload();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if ($('html').attr('dir') === 'ltr') {
	        this.refs.ltr.checked = true;
	      } else {
	        this.refs.rtl.checked = true;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Grid,
	        null,
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 6 },
	            React.createElement(
	              Radio,
	              { browser: true, ref: 'ltr', value: 'ltr', name: 'switch-layout', defaultChecked: true, onChange: this.handleLayoutRadioChange.bind(this) },
	              'LTR'
	            )
	          ),
	          React.createElement(
	            Col,
	            { xs: 6, className: 'text-right' },
	            React.createElement(
	              Radio,
	              { browser: true, ref: 'rtl', value: 'rtl', name: 'switch-layout', onChange: this.handleLayoutRadioChange.bind(this) },
	              'RTL'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return LtrRtlLayout;
	})(React.Component);

	var BodyLayout = (function (_React$Component6) {
	  _inherits(BodyLayout, _React$Component6);

	  function BodyLayout() {
	    _classCallCheck(this, BodyLayout);

	    _get(Object.getPrototypeOf(BodyLayout.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(BodyLayout, [{
	    key: 'bodyLayoutRadioChange',
	    value: function bodyLayoutRadioChange(value) {
	      if (!value) return;
	      if (value === 'fixed-body') {
	        $('html').removeClass('static');
	        localStorage.setItem('bodyLayout', 'fixed-body');
	        ReactBootstrap.Dispatcher.emit('sidebar:reinitialize');
	      } else if (value === 'static-body') {
	        $('html').addClass('static');
	        localStorage.setItem('bodyLayout', 'static-body');
	        ReactBootstrap.Dispatcher.emit('sidebar:destroy');
	      }
	      this.refs[value].checked = true;
	    }
	  }, {
	    key: 'handleBodyLayoutRadioChange',
	    value: function handleBodyLayoutRadioChange(e) {
	      this.bodyLayoutRadioChange(e.target.value);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.bodyLayoutRadioChange(localStorage.getItem('bodyLayout'));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Grid,
	        null,
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 8 },
	            React.createElement(
	              Radio,
	              { browser: true, ref: 'fixed-body', value: 'fixed-body', name: 'switch-body-layout', defaultChecked: true, onChange: this.handleBodyLayoutRadioChange.bind(this) },
	              'Fixed (Header + Sidebar)'
	            )
	          ),
	          React.createElement(
	            Col,
	            { xs: 4, className: 'text-right' },
	            React.createElement(
	              Radio,
	              { browser: true, ref: 'static-body', value: 'static-body', name: 'switch-body-layout', onChange: this.handleBodyLayoutRadioChange.bind(this) },
	              'Static'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return BodyLayout;
	})(React.Component);

	var HeaderNavigation = React.createClass({
	  displayName: 'HeaderNavigation',

	  mixins: [_reactRouter.State, _reactRouter.Navigation],
	  getInitialState: function getInitialState() {
	    return { selectedFlag: 'United-States' };
	  },
	  handleSkinSwitch: function handleSkinSwitch(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var vexContent;
	    vex.dialog.open({
	      afterOpen: function afterOpen($vexContent) {
	        vexContent = $vexContent;
	        return React.render(React.createElement(Skins, { id: $vexContent.data().vex.id }), $vexContent.get(0));
	      },
	      afterClose: function afterClose() {
	        React.unmountComponentAtNode(vexContent.get(0));
	      }
	    });
	  },
	  changeFlag: function changeFlag(props) {
	    this.setState({
	      selectedFlag: props.flag
	    }, function () {
	      if (props.locale === 'ar') $('html').addClass('arabic');else $('html').removeClass('arabic');
	      Preloader.show();
	      l20n.changeLocale(props.locale);
	    });
	  },
	  l20nContextReady: function l20nContextReady(e) {
	    var selectedFlag = l20n.ctx.getSync('selectedFlag');
	    this.refs['flag-menu'].selectItem('flag', selectedFlag);
	    this.setState({
	      selectedFlag: selectedFlag
	    }, function () {
	      Preloader.hide();
	    });
	  },
	  changeSettingsMenuItemState: function changeSettingsMenuItemState(item) {
	    if (item === 'fluid' || item === null || item === undefined) {
	      this.refs['settings-menu'].selectItem('data-val', 'fluid');
	      $('html').removeClass('boxed');
	    } else if (item === 'boxed') {
	      this.refs['settings-menu'].selectItem('data-val', 'boxed');
	      $('html').addClass('boxed');
	    }
	    setTimeout(function () {
	      $(window).trigger('resize');
	    }, 300);
	  },
	  changeViewport: function changeViewport(props) {
	    switch (props['data-type']) {
	      case 'dimension':
	        if (props['data-val'] === 'boxed') {
	          localStorage.setItem('settingsMenu', 'boxed');
	          this.changeSettingsMenuItemState('boxed');
	        } else {
	          localStorage.setItem('settingsMenu', 'fluid');
	          this.changeSettingsMenuItemState('fluid');
	        }
	        break;
	      default:
	        break;
	    }
	  },
	  handleLogout: function handleLogout(e) {
	    var _this = this;

	    $('body').addClass('fade-out');
	    setTimeout(function () {
	      _servicesAuth2['default'].logout();
	      _this.transitionTo('/');
	    }, 250);
	  },
	  componentDidMount: function componentDidMount() {
	    ReactBootstrap.Dispatcher.on('ctx:ready', this.l20nContextReady);
	    (function () {
	      var item = localStorage.getItem('settingsMenu');
	      this.changeSettingsMenuItemState(item);
	      localStorage.setItem('settingsMenu', item || 'fluid');
	    }).bind(this)();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    ReactBootstrap.Dispatcher.off('ctx:ready', this.l20nContextReady);
	  },
	  render: function render() {
	    return React.createElement(
	      NavContent,
	      _extends({ className: 'pull-right' }, this.props),
	      React.createElement(
	        Nav,
	        { className: 'hidden-xs' },
	        React.createElement(NavItem, { divider: true }),
	        React.createElement(
	          NavItem,
	          { className: 'hidden-sm' },
	          React.createElement(
	            'a',
	            { href: '#', onClick: this.handleSkinSwitch },
	            React.createElement(Icon, { glyph: 'icon-fontello-circle', className: 'fg-theme', style: { lineHeight: 1, fontSize: 24 } })
	          )
	        ),
	        React.createElement(NavItem, { divider: true }),
	        React.createElement(
	          NavItem,
	          { dropdown: true, toggleOnHover: true },
	          React.createElement(
	            DropdownButton,
	            { nav: true, id: 'flag-menu-btn' },
	            React.createElement('img', { src: '/imgs/flags/flags/flat/32/' + this.state.selectedFlag + '.png', width: '32', height: '32' })
	          ),
	          React.createElement(
	            Menu,
	            { alignRight: true, ref: 'flag-menu', id: 'flag-menu', className: 'double-width', bsStyle: 'theme', style: { paddingBottom: 0 }, onItemSelect: this.changeFlag },
	            React.createElement(
	              MenuItem,
	              { header: true },
	              React.createElement(Entity, { entity: 'languageMenuHeading' })
	            ),
	            React.createElement(LocaleMenuItem, { lang: 'enUS', locale: 'en-US', flag: 'United-States', active: true }),
	            React.createElement(LocaleMenuItem, { lang: 'fr', locale: 'fr', flag: 'France' })
	          )
	        ),
	        React.createElement(NavItem, { divider: true }),
	        React.createElement(DirectNavItem, { glyph: 'user-female', path: '/app/social', className: 'small-font' }),
	        React.createElement(
	          NavItem,
	          { dropdown: true, toggleOnHover: true, className: 'small-font collapse-left' },
	          React.createElement(
	            DropdownButton,
	            { nav: true },
	            React.createElement(Icon, { bundle: 'fontello', glyph: 'cog-7' })
	          ),
	          React.createElement(
	            Menu,
	            { alignRight: true, ref: 'settings-menu', id: 'settings-menu', bsStyle: 'theme', style: { width: 375 }, onItemSelect: this.changeViewport },
	            React.createElement(
	              MenuItem,
	              { header: true },
	              React.createElement(Entity, { entity: 'settingsMenuHeading' })
	            ),
	            React.createElement(
	              MenuItem,
	              { 'data-type': 'dimension', 'data-val': 'fluid', href: '#', active: true },
	              React.createElement(Entity, { entity: 'settingsMenuFluid' })
	            ),
	            React.createElement(
	              MenuItem,
	              { 'data-type': 'dimension', 'data-val': 'boxed', href: '#' },
	              React.createElement(Entity, { entity: 'settingsMenuBoxed' })
	            ),
	            React.createElement(
	              MenuItem,
	              { header: true },
	              'Layout'
	            ),
	            React.createElement(
	              MenuItem,
	              { noHover: true },
	              React.createElement(LtrRtlLayout, null)
	            ),
	            React.createElement(
	              MenuItem,
	              { header: true },
	              'Body Layout'
	            ),
	            React.createElement(
	              MenuItem,
	              { noHover: true },
	              React.createElement(BodyLayout, null)
	            )
	          )
	        ),
	        React.createElement(NavItem, { divider: true }),
	        React.createElement(DirectNavItem, { glyph: 'mail-3', path: '/app/mailbox/inbox' }),
	        React.createElement(
	          NavItem,
	          { dropdown: true, toggleOnHover: true, className: 'collapse-left' },
	          React.createElement(
	            DropdownButton,
	            { nav: true },
	            React.createElement(Icon, { bundle: 'fontello', glyph: 'bullhorn' }),
	            React.createElement(
	              Badge,
	              { className: 'fg-darkbrown bg-orange notification-badge' },
	              '3'
	            )
	          ),
	          React.createElement(
	            Menu,
	            { alignRight: true, ref: 'bullhorn-menu', id: 'notifications-menu', className: 'double-width', alwaysInactive: true },
	            React.createElement(
	              MenuItem,
	              { header: true },
	              React.createElement(Entity, { entity: 'notificationsMenuHeading' })
	            ),
	            React.createElement(
	              MenuItem,
	              { href: '#' },
	              React.createElement(
	                Grid,
	                null,
	                React.createElement(
	                  Row,
	                  null,
	                  React.createElement(
	                    Col,
	                    { xs: 2, className: 'avatar-container', collapseRight: true },
	                    React.createElement(
	                      'div',
	                      null,
	                      React.createElement('img', { src: '/imgs/avatars/avatar22.png', width: '40', height: '40', alt: 'sarah_patchett' })
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'text-center' },
	                      React.createElement(
	                        BLabel,
	                        { bsStyle: 'info' },
	                        'NEW'
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    Col,
	                    { xs: 10, className: 'notification-container', collapseLeft: true, collapseRight: true },
	                    React.createElement(
	                      'div',
	                      { className: 'time' },
	                      React.createElement(
	                        'strong',
	                        { className: 'fg-darkgray50' },
	                        React.createElement(Icon, { bundle: 'fontello', glyph: 'chat-5' }),
	                        React.createElement(
	                          'em',
	                          null,
	                          React.createElement(Entity, { entity: 'notificationsTimeFirst' })
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'message-header' },
	                      React.createElement(
	                        'strong',
	                        { className: 'fg-darkgreen45' },
	                        'Sarah Patchett sent you a private message'
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'message-details fg-text' },
	                      React.createElement(
	                        'span',
	                        null,
	                        "Hey Anna! Sorry for delayed response. I've just finished reading the mail you sent couple of days ago..."
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            React.createElement(
	              MenuItem,
	              { href: '#' },
	              React.createElement(
	                Grid,
	                null,
	                React.createElement(
	                  Row,
	                  null,
	                  React.createElement(
	                    Col,
	                    { xs: 2, className: 'avatar-container', collapseRight: true },
	                    React.createElement('img', { src: '/imgs/avatars/avatar21.png', width: '40', height: '40', alt: 'john_young' })
	                  ),
	                  React.createElement(
	                    Col,
	                    { xs: 10, className: 'notification-container', collapseLeft: true, collapseRight: true },
	                    React.createElement(
	                      'div',
	                      { className: 'time' },
	                      React.createElement(
	                        'strong',
	                        { className: 'fg-darkgray50' },
	                        React.createElement(Icon, { bundle: 'fontello', glyph: 'user-add' }),
	                        React.createElement(
	                          'em',
	                          null,
	                          '2 hours ago'
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'message-header' },
	                      React.createElement(
	                        'strong',
	                        { className: 'fg-darkgreen45' },
	                        'John Young added you as a collaborator'
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'message-details fg-text' },
	                      React.createElement(
	                        'span',
	                        null,
	                        'to the repository '
	                      ),
	                      React.createElement(
	                        'em',
	                        { className: 'fg-darkblue' },
	                        'sketchpixy/rubix'
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            React.createElement(
	              MenuItem,
	              { href: '#' },
	              React.createElement(
	                Grid,
	                null,
	                React.createElement(
	                  Row,
	                  null,
	                  React.createElement(
	                    Col,
	                    { xs: 2, className: 'avatar-container', collapseRight: true },
	                    React.createElement(
	                      'div',
	                      null,
	                      React.createElement('img', { src: '/imgs/github.png', width: '40', height: '40', alt: 'github' })
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'text-center' },
	                      React.createElement(
	                        BLabel,
	                        { bsStyle: 'danger' },
	                        'ALERT'
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    Col,
	                    { xs: 10, className: 'notification-container', collapseLeft: true, collapseRight: true },
	                    React.createElement(
	                      'div',
	                      { className: 'time' },
	                      React.createElement(
	                        'strong',
	                        { className: 'fg-darkgray50' },
	                        React.createElement(Icon, { bundle: 'fontello', glyph: 'attention-alt-1' }),
	                        React.createElement(
	                          'em',
	                          null,
	                          '5 days ago'
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'message-header' },
	                      React.createElement(
	                        'strong',
	                        { className: 'fg-darkgreen45' },
	                        'Github sent you a notification'
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'message-details fg-text' },
	                      React.createElement(
	                        'span',
	                        null,
	                        'Your '
	                      ),
	                      React.createElement(
	                        'span',
	                        { className: 'fg-darkblue' },
	                        'Large Plan'
	                      ),
	                      React.createElement(
	                        'span',
	                        null,
	                        ' will expire in one week. Please update your billing details at our Billing center. Thank you!'
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            React.createElement(
	              MenuItem,
	              { noHover: true },
	              React.createElement(
	                Grid,
	                { collapse: true, style: { marginBottom: -10 } },
	                React.createElement(
	                  Row,
	                  null,
	                  React.createElement(
	                    Col,
	                    { xs: 6, collapseLeft: true, collapseRight: true },
	                    React.createElement(
	                      Button,
	                      { block: true, className: 'notification-footer-btn left-btn' },
	                      'MARK ALL READ'
	                    )
	                  ),
	                  React.createElement(
	                    Col,
	                    { xs: 6, collapseLeft: true, collapseRight: true },
	                    React.createElement(
	                      Button,
	                      { block: true, className: 'notification-footer-btn right-btn' },
	                      'VIEW ALL'
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ),
	        React.createElement(
	          NavItem,
	          { dropdown: true, toggleOnHover: true, className: 'collapse-left' },
	          React.createElement(
	            DropdownButton,
	            { nav: true },
	            React.createElement(Icon, { bundle: 'fontello', glyph: 'rss-1' }),
	            React.createElement(
	              Badge,
	              { className: 'fg-darkgreen bg-darkgreen40 notification-badge' },
	              '4'
	            )
	          ),
	          React.createElement(
	            Menu,
	            { alignRight: true, id: 'rss-menu', className: 'double-width', alwaysInactive: true },
	            React.createElement(
	              MenuItem,
	              { header: true },
	              'Your news feed'
	            ),
	            React.createElement(
	              MenuItem,
	              { href: '#' },
	              React.createElement(
	                Grid,
	                null,
	                React.createElement(
	                  Row,
	                  null,
	                  React.createElement(
	                    Col,
	                    { xs: 2 },
	                    React.createElement(Icon, { className: 'fg-text', bundle: 'fontello', glyph: 'star' })
	                  ),
	                  React.createElement(
	                    Col,
	                    { xs: 10, collapseLeft: true, className: 'notification-container', style: { width: 265 } },
	                    React.createElement(
	                      'div',
	                      { className: 'time' },
	                      React.createElement(
	                        'strong',
	                        { className: 'fg-darkgray50' },
	                        React.createElement(
	                          'em',
	                          null,
	                          'an hour ago'
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'message-header fg-darkgray50' },
	                      React.createElement(
	                        'strong',
	                        { className: 'fg-darkgreen45' },
	                        '@johndoe'
	                      ),
	                      React.createElement(
	                        'strong',
	                        null,
	                        ' starred '
	                      ),
	                      React.createElement(
	                        'strong',
	                        { className: 'fg-darkblue' },
	                        'joyent/node'
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'message-details fg-text' },
	                      'evented I/O for v8 javascript'
	                    )
	                  )
	                )
	              )
	            ),
	            React.createElement(
	              MenuItem,
	              { href: '#' },
	              React.createElement(
	                Grid,
	                null,
	                React.createElement(
	                  Row,
	                  null,
	                  React.createElement(
	                    Col,
	                    { xs: 2 },
	                    React.createElement(Icon, { className: 'fg-text', bundle: 'fontello', glyph: 'chat-1' })
	                  ),
	                  React.createElement(
	                    Col,
	                    { xs: 10, collapseLeft: true, className: 'notification-container', style: { width: 265 } },
	                    React.createElement(
	                      'div',
	                      { className: 'time' },
	                      React.createElement(
	                        'strong',
	                        { className: 'fg-darkgray50' },
	                        React.createElement(
	                          'em',
	                          null,
	                          '2 hours ago'
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'message-header fg-darkgray50' },
	                      React.createElement(
	                        'strong',
	                        { className: 'fg-darkgreen45' },
	                        '@jackie'
	                      ),
	                      React.createElement(
	                        'strong',
	                        null,
	                        ' commented on issue '
	                      ),
	                      React.createElement(
	                        'strong',
	                        { className: 'fg-darkblue' },
	                        '#150'
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'message-details fg-text' },
	                      "Nice catch! I'll get this fixed soon. Meanwhile..."
	                    )
	                  )
	                )
	              )
	            ),
	            React.createElement(
	              MenuItem,
	              { href: '#' },
	              React.createElement(
	                Grid,
	                null,
	                React.createElement(
	                  Row,
	                  null,
	                  React.createElement(
	                    Col,
	                    { xs: 2 },
	                    React.createElement(Icon, { className: 'fg-text', bundle: 'fontello', glyph: 'fork' })
	                  ),
	                  React.createElement(
	                    Col,
	                    { xs: 10, collapseLeft: true, className: 'notification-container', style: { width: 265 } },
	                    React.createElement(
	                      'div',
	                      { className: 'time' },
	                      React.createElement(
	                        'strong',
	                        { className: 'fg-darkgray50' },
	                        React.createElement(
	                          'em',
	                          null,
	                          '5 hours ago'
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'message-header fg-darkgray50' },
	                      React.createElement(
	                        'strong',
	                        { className: 'fg-darkgreen45' },
	                        '@sketchpixy'
	                      ),
	                      React.createElement(
	                        'strong',
	                        null,
	                        ' forked '
	                      ),
	                      React.createElement(
	                        'strong',
	                        { className: 'fg-darkblue' },
	                        'facebook/react'
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'message-details fg-text' },
	                      'to sketchpixy/react'
	                    )
	                  )
	                )
	              )
	            ),
	            React.createElement(
	              MenuItem,
	              { href: '#' },
	              React.createElement(
	                Grid,
	                null,
	                React.createElement(
	                  Row,
	                  null,
	                  React.createElement(
	                    Col,
	                    { xs: 2 },
	                    React.createElement(Icon, { className: 'fg-text', bundle: 'fontello', glyph: 'attention-alt-1' })
	                  ),
	                  React.createElement(
	                    Col,
	                    { xs: 10, collapseLeft: true, className: 'notification-container', style: { width: 265 } },
	                    React.createElement(
	                      'div',
	                      { className: 'time' },
	                      React.createElement(
	                        'strong',
	                        { className: 'fg-darkgray50' },
	                        React.createElement(
	                          'em',
	                          null,
	                          '2 days ago'
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'message-header fg-darkgray50' },
	                      React.createElement(
	                        'strong',
	                        { className: 'fg-darkgreen45' },
	                        '@mario'
	                      ),
	                      React.createElement(
	                        'strong',
	                        null,
	                        ' opened issue '
	                      ),
	                      React.createElement(
	                        'strong',
	                        { className: 'fg-darkblue' },
	                        'twbs/bootstrap#44'
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'message-details fg-text' },
	                      'Request: Support RTL version'
	                    )
	                  )
	                )
	              )
	            ),
	            React.createElement(
	              MenuItem,
	              { header: true },
	              'Your commit activity'
	            ),
	            React.createElement(
	              MenuItem,
	              { noHover: true },
	              React.createElement(CommitChart, null)
	            )
	          )
	        )
	      ),
	      React.createElement(
	        Nav,
	        null,
	        React.createElement(
	          NavItem,
	          { className: 'logout', href: '#', onClick: this.handleLogout },
	          React.createElement(Icon, { bundle: 'fontello', glyph: 'off-1' })
	        )
	      )
	    );
	  }
	});

	var Header = (function (_React$Component7) {
	  _inherits(Header, _React$Component7);

	  function Header() {
	    _classCallCheck(this, Header);

	    _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Grid,
	        _extends({ id: 'navbar' }, this.props),
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 12 },
	            React.createElement(
	              NavBar,
	              { fixedTop: true, id: 'rubix-nav-header' },
	              React.createElement(
	                Container,
	                { fluid: true },
	                React.createElement(
	                  Row,
	                  null,
	                  React.createElement(
	                    Col,
	                    { xs: 3, visible: 'xs' },
	                    React.createElement(_globalJsxSidebar_component.SidebarBtn, null)
	                  ),
	                  React.createElement(
	                    Col,
	                    { xs: 6, sm: 4 },
	                    React.createElement(Brand, null)
	                  ),
	                  React.createElement(
	                    Col,
	                    { xs: 3, sm: 8 },
	                    React.createElement(HeaderNavigation, { pressed: this.props.pressed })
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Header;
	})(React.Component);

	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports) {

	/*\
	|*|
	|*|  :: cookies.js ::
	|*|
	|*|  A complete cookies reader/writer framework with full unicode support.
	|*|
	|*|  Revision #1 - September 4, 2014
	|*|
	|*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
	|*|  https://developer.mozilla.org/User:fusionchess
	|*|
	|*|  This framework is released under the GNU Public License, version 3 or later.
	|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
	|*|
	|*|  Syntaxes:
	|*|
	|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
	|*|  * docCookies.getItem(name)
	|*|  * docCookies.removeItem(name[, path[, domain]])
	|*|  * docCookies.hasItem(name)
	|*|  * docCookies.keys()
	|*|
	\*/

	"use strict";

	module.exports = {
	  getItem: function getItem(sKey) {
	    if (!sKey) {
	      return null;
	    }
	    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
	  },
	  setItem: function setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
	    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
	      return false;
	    }
	    var sExpires = "";
	    if (vEnd) {
	      switch (vEnd.constructor) {
	        case Number:
	          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
	          break;
	        case String:
	          sExpires = "; expires=" + vEnd;
	          break;
	        case Date:
	          sExpires = "; expires=" + vEnd.toUTCString();
	          break;
	      }
	    }
	    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
	    return true;
	  },
	  removeItem: function removeItem(sKey, sPath, sDomain) {
	    if (!this.hasItem(sKey)) {
	      return false;
	    }
	    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
	    return true;
	  },
	  hasItem: function hasItem(sKey) {
	    if (!sKey) {
	      return false;
	    }
	    return new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
	  },
	  keys: function keys() {
	    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
	    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
	      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
	    }
	    return aKeys;
	  }
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _globalJsxSidebar_component = __webpack_require__(42);

	var _reactRouter = __webpack_require__(4);

	var _globalJsxLoremipsum = __webpack_require__(46);

	var _globalJsxLoremipsum2 = _interopRequireDefault(_globalJsxLoremipsum);

	var ApplicationSidebar = (function (_React$Component) {
	  _inherits(ApplicationSidebar, _React$Component);

	  function ApplicationSidebar() {
	    _classCallCheck(this, ApplicationSidebar);

	    _get(Object.getPrototypeOf(ApplicationSidebar.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ApplicationSidebar, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { xs: 12 },
	              React.createElement(
	                'div',
	                { className: 'sidebar-header' },
	                'PAGES'
	              ),
	              React.createElement(
	                'div',
	                { className: 'sidebar-nav-container' },
	                React.createElement(
	                  _globalJsxSidebar_component.SidebarNav,
	                  { style: { marginBottom: 0 } },
	                  React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-fontello-gauge', name: 'Dashboard', href: '/app/dashboard' }),
	                  React.createElement(
	                    _globalJsxSidebar_component.SidebarNavItem,
	                    { glyph: 'icon-dripicons-document', name: React.createElement(
	                        'span',
	                        null,
	                        'Merchants ',
	                        React.createElement(
	                          BLabel,
	                          { className: 'bg-darkgreen45 fg-white' },
	                          '3'
	                        )
	                      ) },
	                    React.createElement(
	                      _globalJsxSidebar_component.SidebarNav,
	                      null,
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-feather-inbox', name: 'List', href: '/app/merchants/list' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-outlined-mail-open', name: 'Goods', href: '/app/mailbox/mail' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-dripicons-message', name: 'Agents', href: '/app/mailbox/compose' })
	                    )
	                  ),
	                  React.createElement(
	                    _globalJsxSidebar_component.SidebarNavItem,
	                    { glyph: 'icon-simple-line-icons-users', name: React.createElement(
	                        'span',
	                        null,
	                        'Wallets ',
	                        React.createElement(
	                          BLabel,
	                          { className: 'bg-darkblue fg-white' },
	                          '3'
	                        )
	                      ) },
	                    React.createElement(
	                      _globalJsxSidebar_component.SidebarNav,
	                      null,
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-feather-inbox', name: 'Details', href: '/app/mailbox/inbox' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-outlined-mail-open', name: 'Transactions', href: '/app/mailbox/mail' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-dripicons-message', name: 'Accounts', href: '/app/mailbox/compose' })
	                    )
	                  ),
	                  React.createElement(
	                    _globalJsxSidebar_component.SidebarNavItem,
	                    { glyph: 'icon-fontello-install', name: React.createElement(
	                        'span',
	                        null,
	                        'Setup ',
	                        React.createElement(
	                          BLabel,
	                          { className: 'bg-deepred fg-white' },
	                          '4'
	                        )
	                      ) },
	                    React.createElement(
	                      _globalJsxSidebar_component.SidebarNav,
	                      null,
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-feather-inbox', name: 'Banks', href: '/app/mailbox/inbox' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-outlined-mail-open', name: 'Mobile Networks', href: '/app/mailbox/mail' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-dripicons-message', name: 'Countries', href: '/app/mailbox/compose' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-dripicons-message', name: 'Currencies', href: '/app/mailbox/compose' })
	                    )
	                  ),
	                  React.createElement(
	                    _globalJsxSidebar_component.SidebarNavItem,
	                    { glyph: 'icon-ikons-bar-chart-2', name: React.createElement(
	                        'span',
	                        null,
	                        'Statistics ',
	                        React.createElement(
	                          BLabel,
	                          { className: 'bg-brown50 fg-white' },
	                          '4'
	                        )
	                      ) },
	                    React.createElement(
	                      _globalJsxSidebar_component.SidebarNav,
	                      null,
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-feather-inbox', name: 'Merchants', href: '/app/mailbox/inbox' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-outlined-mail-open', name: 'Wallets', href: '/app/mailbox/mail' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-dripicons-message', name: 'Traffic', href: '/app/mailbox/compose' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-dripicons-message', name: 'Transactions', href: '/app/mailbox/compose' })
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ApplicationSidebar;
	})(React.Component);

	var DummySidebar = (function (_React$Component2) {
	  _inherits(DummySidebar, _React$Component2);

	  function DummySidebar() {
	    _classCallCheck(this, DummySidebar);

	    _get(Object.getPrototypeOf(DummySidebar.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(DummySidebar, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Grid,
	        null,
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 12 },
	            React.createElement(
	              'div',
	              { className: 'sidebar-header' },
	              'DUMMY SIDEBAR'
	            ),
	            React.createElement(_globalJsxLoremipsum2['default'], { query: '1p' })
	          )
	        )
	      );
	    }
	  }]);

	  return DummySidebar;
	})(React.Component);

	var _default = (function (_React$Component3) {
	  _inherits(_default, _React$Component3);

	  function _default() {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        _extends({ id: 'sidebar' }, this.props),
	        React.createElement(
	          'div',
	          { id: 'avatar' },
	          React.createElement(
	            Grid,
	            null,
	            React.createElement(
	              Row,
	              { className: 'fg-white' },
	              React.createElement(
	                Col,
	                { xs: 4, collapseRight: true },
	                React.createElement('img', { src: '/imgs/avatars/avatar0.png', width: '40', height: '40' })
	              ),
	              React.createElement(
	                Col,
	                { xs: 8, collapseLeft: true, id: 'avatar-col' },
	                React.createElement(
	                  'div',
	                  { style: { top: 23, fontSize: 16, lineHeight: 1, position: 'relative' } },
	                  'Anna Sanchez'
	                ),
	                React.createElement(
	                  'div',
	                  null,
	                  React.createElement(Progress, { id: 'demo-progress', value: 30, min: 0, max: 100, color: '#ffffff' }),
	                  React.createElement(
	                    _reactRouter.Link,
	                    { to: '/app/lock' },
	                    React.createElement(Icon, { id: 'demo-icon', bundle: 'fontello', glyph: 'lock-5' })
	                  )
	                )
	              )
	            )
	          )
	        ),
	        React.createElement(
	          _globalJsxSidebar_component.SidebarControls,
	          null,
	          React.createElement(_globalJsxSidebar_component.SidebarControlBtn, { bundle: 'fontello', glyph: 'docs', sidebar: 0 }),
	          React.createElement(_globalJsxSidebar_component.SidebarControlBtn, { bundle: 'fontello', glyph: 'chat-1', sidebar: 1 }),
	          React.createElement(_globalJsxSidebar_component.SidebarControlBtn, { bundle: 'fontello', glyph: 'chart-pie-2', sidebar: 2 }),
	          React.createElement(_globalJsxSidebar_component.SidebarControlBtn, { bundle: 'fontello', glyph: 'th-list-2', sidebar: 3 }),
	          React.createElement(_globalJsxSidebar_component.SidebarControlBtn, { bundle: 'fontello', glyph: 'bell-5', sidebar: 4 })
	        ),
	        React.createElement(
	          'div',
	          { id: 'sidebar-container' },
	          React.createElement(
	            _globalJsxSidebar_component.Sidebar,
	            { sidebar: 0, active: true },
	            React.createElement(ApplicationSidebar, null)
	          ),
	          React.createElement(
	            _globalJsxSidebar_component.Sidebar,
	            { sidebar: 1 },
	            React.createElement(DummySidebar, null)
	          ),
	          React.createElement(
	            _globalJsxSidebar_component.Sidebar,
	            { sidebar: 2 },
	            React.createElement(DummySidebar, null)
	          ),
	          React.createElement(
	            _globalJsxSidebar_component.Sidebar,
	            { sidebar: 3 },
	            React.createElement(DummySidebar, null)
	          ),
	          React.createElement(
	            _globalJsxSidebar_component.Sidebar,
	            { sidebar: 4 },
	            React.createElement(DummySidebar, null)
	          )
	        )
	      );
	    }
	  }]);

	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 * @copyright https://github.com/f/loremjs
	 * @licence https://github.com/f/loremjs/blob/master/LICENSE
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var Lorem;
	(function () {

	    //Create a class named Lorem and constructor
	    Lorem = function () {
	        //Default values.
	        this.type = null;
	        this.query = null;
	        this.data = null;
	    };
	    //Static variables
	    Lorem.IMAGE = 1;
	    Lorem.TEXT = 2;
	    Lorem.TYPE = {
	        PARAGRAPH: 1,
	        SENTENCE: 2,
	        WORD: 3
	    };
	    //Words to create lorem ipsum text.
	    Lorem.WORDS = ["lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "ut", "aliquam,", "purus", "sit", "amet", "luctus", "venenatis,", "lectus", "magna", "fringilla", "urna,", "porttitor", "rhoncus", "dolor", "purus", "non", "enim", "praesent", "elementum", "facilisis", "leo,", "vel", "fringilla", "est", "ullamcorper", "eget", "nulla", "facilisi", "etiam", "dignissim", "diam", "quis", "enim", "lobortis", "scelerisque", "fermentum", "dui", "faucibus", "in", "ornare", "quam", "viverra", "orci", "sagittis", "eu", "volutpat", "odio", "facilisis", "mauris", "sit", "amet", "massa", "vitae", "tortor", "condimentum", "lacinia", "quis", "vel", "eros", "donec", "ac", "odio", "tempor", "orci", "dapibus", "ultrices", "in", "iaculis", "nunc", "sed", "augue", "lacus,", "viverra", "vitae", "congue", "eu,", "consequat", "ac", "felis", "donec", "et", "odio", "pellentesque", "diam", "volutpat", "commodo", "sed", "egestas", "egestas", "fringilla", "phasellus", "faucibus", "scelerisque", "eleifend", "donec", "pretium", "vulputate", "sapien", "nec", "sagittis", "aliquam", "malesuada", "bibendum", "arcu", "vitae", "elementum", "curabitur", "vitae", "nunc", "sed", "velit", "dignissim", "sodales", "ut", "eu", "sem", "integer", "vitae", "justo", "eget", "magna", "fermentum", "iaculis", "eu", "non", "diam", "phasellus", "vestibulum", "lorem", "sed", "risus", "ultricies", "tristique", "nulla", "aliquet", "enim", "tortor,", "at", "auctor", "urna", "nunc", "id", "cursus", "metus", "aliquam", "eleifend", "mi", "in", "nulla", "posuere", "sollicitudin", "aliquam", "ultrices", "sagittis", "orci,", "a", "scelerisque", "purus", "semper", "eget", "duis", "at", "tellus", "at", "urna", "condimentum", "mattis", "pellentesque", "id", "nibh", "tortor,", "id", "aliquet", "lectus", "proin", "nibh", "nisl,", "condimentum", "id", "venenatis", "a,", "condimentum", "vitae", "sapien", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "sed", "tempus,", "urna", "et", "pharetra", "pharetra,", "massa", "massa", "ultricies", "mi,", "quis", "hendrerit", "dolor", "magna", "eget", "est", "lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "integer", "eget", "aliquet", "nibh", "praesent", "tristique", "magna", "sit", "amet", "purus", "gravida", "quis", "blandit", "turpis", "cursus", "in", "hac", "habitasse", "platea", "dictumst", "quisque", "sagittis,", "purus", "sit", "amet", "volutpat", "consequat,", "mauris", "nunc", "congue", "nisi,", "vitae", "suscipit", "tellus", "mauris", "a", "diam", "maecenas", "sed", "enim", "ut", "sem", "viverra", "aliquet", "eget", "sit", "amet", "tellus", "cras", "adipiscing", "enim", "eu", "turpis", "egestas", "pretium", "aenean", "pharetra,", "magna", "ac", "placerat", "vestibulum,", "lectus", "mauris", "ultrices", "eros,", "in", "cursus", "turpis", "massa", "tincidunt", "dui", "ut", "ornare", "lectus", "sit", "amet", "est", "placerat", "in", "egestas", "erat", "imperdiet", "sed", "euismod", "nisi", "porta", "lorem", "mollis", "aliquam", "ut", "porttitor", "leo", "a", "diam", "sollicitudin", "tempor", "id", "eu", "nisl", "nunc", "mi", "ipsum,", "faucibus", "vitae", "aliquet", "nec,", "ullamcorper", "sit", "amet", "risus", "nullam", "eget", "felis", "eget", "nunc", "lobortis", "mattis", "aliquam", "faucibus", "purus", "in", "massa", "tempor", "nec", "feugiat", "nisl", "pretium", "fusce", "id", "velit", "ut", "tortor", "pretium", "viverra", "suspendisse", "potenti", "nullam", "ac", "tortor", "vitae", "purus", "faucibus", "ornare", "suspendisse", "sed", "nisi", "lacus,", "sed", "viverra", "tellus", "in", "hac", "habitasse", "platea", "dictumst", "vestibulum", "rhoncus", "est", "pellentesque", "elit", "ullamcorper", "dignissim", "cras", "tincidunt", "lobortis", "feugiat", "vivamus", "at", "augue", "eget", "arcu", "dictum", "varius", "duis", "at", "consectetur", "lorem", "donec", "massa", "sapien,", "faucibus", "et", "molestie", "ac,", "feugiat", "sed", "lectus", "vestibulum", "mattis", "ullamcorper", "velit", "sed", "ullamcorper", "morbi", "tincidunt", "ornare", "massa,", "eget", "egestas", "purus", "viverra", "accumsan", "in", "nisl", "nisi,", "scelerisque", "eu", "ultrices", "vitae,", "auctor", "eu", "augue", "ut", "lectus", "arcu,", "bibendum", "at", "varius", "vel,", "pharetra", "vel", "turpis", "nunc", "eget", "lorem", "dolor,", "sed", "viverra", "ipsum", "nunc", "aliquet", "bibendum", "enim,", "facilisis", "gravida", "neque", "convallis", "a", "cras", "semper", "auctor", "neque,", "vitae", "tempus", "quam", "pellentesque", "nec", "nam", "aliquam", "sem", "et", "tortor", "consequat", "id", "porta", "nibh", "venenatis", "cras", "sed", "felis", "eget", "velit", "aliquet", "sagittis", "id", "consectetur", "purus", "ut", "faucibus", "pulvinar", "elementum", "integer", "enim", "neque,", "volutpat", "ac", "tincidunt", "vitae,", "semper", "quis", "lectus", "nulla", "at", "volutpat", "diam", "ut", "venenatis", "tellus", "in", "metus", "vulputate", "eu", "scelerisque", "felis", "imperdiet", "proin", "fermentum", "leo", "vel", "orci", "porta", "non", "pulvinar", "neque", "laoreet", "suspendisse", "interdum", "consectetur", "libero,", "id", "faucibus", "nisl", "tincidunt", "eget", "nullam", "non", "nisi", "est,", "sit", "amet", "facilisis", "magna", "etiam", "tempor,", "orci", "eu", "lobortis", "elementum,", "nibh", "tellus", "molestie", "nunc,", "non", "blandit", "massa", "enim", "nec", "dui", "nunc", "mattis", "enim", "ut", "tellus", "elementum", "sagittis", "vitae", "et", "leo", "duis", "ut", "diam", "quam", "nulla", "porttitor", "massa", "id", "neque", "aliquam", "vestibulum", "morbi", "blandit", "cursus", "risus,", "at", "ultrices", "mi", "tempus", "imperdiet", "nulla", "malesuada", "pellentesque", "elit", "eget", "gravida", "cum", "sociis", "natoque", "penatibus", "et", "magnis", "dis", "parturient", "montes,", "nascetur", "ridiculus", "mus", "mauris", "vitae", "ultricies", "leo", "integer", "malesuada", "nunc", "vel", "risus", "commodo", "viverra", "maecenas", "accumsan,", "lacus", "vel", "facilisis", "volutpat,", "est", "velit", "egestas", "dui,", "id", "ornare", "arcu", "odio", "ut", "sem", "nulla", "pharetra", "diam", "sit", "amet", "nisl", "suscipit", "adipiscing", "bibendum", "est", "ultricies", "integer", "quis", "auctor", "elit", "sed", "vulputate", "mi", "sit", "amet", "mauris", "commodo", "quis", "imperdiet", "massa", "tincidunt", "nunc", "pulvinar", "sapien", "et", "ligula", "ullamcorper", "malesuada", "proin", "libero", "nunc,", "consequat", "interdum", "varius", "sit", "amet,", "mattis", "vulputate", "enim", "nulla", "aliquet", "porttitor", "lacus,", "luctus", "accumsan", "tortor", "posuere", "ac", "ut", "consequat", "semper", "viverra", "nam", "libero", "justo,", "laoreet", "sit", "amet", "cursus", "sit", "amet,", "dictum", "sit", "amet", "justo", "donec", "enim", "diam,", "vulputate", "ut", "pharetra", "sit", "amet,", "aliquam", "id", "diam", "maecenas", "ultricies", "mi", "eget", "mauris", "pharetra", "et", "ultrices", "neque", "ornare", "aenean", "euismod", "elementum", "nisi,", "quis", "eleifend", "quam", "adipiscing", "vitae", "proin", "sagittis,", "nisl", "rhoncus", "mattis", "rhoncus,", "urna", "neque", "viverra", "justo,", "nec", "ultrices", "dui", "sapien", "eget", "mi", "proin", "sed", "libero", "enim,", "sed", "faucibus", "turpis", "in", "eu", "mi", "bibendum", "neque", "egestas", "congue", "quisque", "egestas", "diam", "in", "arcu", "cursus", "euismod", "quis", "viverra", "nibh", "cras", "pulvinar", "mattis", "nunc,", "sed", "blandit", "libero", "volutpat", "sed", "cras", "ornare", "arcu", "dui", "vivamus", "arcu", "felis,", "bibendum", "ut", "tristique", "et,", "egestas", "quis", "ipsum", "suspendisse", "ultrices", "gravida", "dictum", "fusce", "ut", "placerat", "orci", "nulla", "pellentesque", "dignissim", "enim,", "sit", "amet", "venenatis", "urna", "cursus", "eget", "nunc", "scelerisque", "viverra", "mauris,", "in", "aliquam", "sem", "fringilla", "ut", "morbi", "tincidunt", "augue", "interdum", "velit", "euismod", "in", "pellentesque", "massa", "placerat", "duis", "ultricies", "lacus", "sed", "turpis", "tincidunt", "id", "aliquet", "risus", "feugiat", "in", "ante", "metus,", "dictum", "at", "tempor", "commodo,", "ullamcorper", "a", "lacus", "vestibulum", "sed", "arcu", "non", "odio", "euismod", "lacinia", "at", "quis", "risus", "sed", "vulputate", "odio", "ut", "enim", "blandit", "volutpat", "maecenas", "volutpat", "blandit", "aliquam", "etiam", "erat", "velit,", "scelerisque", "in", "dictum", "non,", "consectetur", "a", "erat", "nam", "at", "lectus", "urna", "duis", "convallis", "convallis", "tellus,", "id", "interdum", "velit", "laoreet", "id", "donec", "ultrices", "tincidunt", "arcu,", "non", "sodales", "neque", "sodales", "ut", "etiam", "sit", "amet", "nisl", "purus,", "in", "mollis", "nunc", "sed", "id", "semper", "risus", "in", "hendrerit", "gravida", "rutrum", "quisque", "non", "tellus", "orci,", "ac", "auctor", "augue", "mauris", "augue", "neque,", "gravida", "in", "fermentum", "et,", "sollicitudin", "ac", "orci", "phasellus", "egestas", "tellus", "rutrum", "tellus", "pellentesque", "eu", "tincidunt", "tortor", "aliquam", "nulla", "facilisi", "cras", "fermentum,", "odio", "eu", "feugiat", "pretium,", "nibh", "ipsum", "consequat", "nisl,", "vel", "pretium", "lectus", "quam", "id", "leo", "in", "vitae", "turpis", "massa", "sed", "elementum", "tempus", "egestas", "sed", "sed", "risus", "pretium", "quam", "vulputate", "dignissim", "suspendisse", "in", "est", "ante", "in", "nibh", "mauris,", "cursus", "mattis", "molestie", "a,", "iaculis", "at", "erat", "pellentesque", "adipiscing", "commodo", "elit,", "at", "imperdiet", "dui", "accumsan", "sit", "amet", "nulla", "facilisi", "morbi", "tempus", "iaculis", "urna,", "id", "volutpat", "lacus", "laoreet", "non", "curabitur", "gravida", "arcu", "ac", "tortor", "dignissim", "convallis", "aenean", "et", "tortor", "at", "risus", "viverra", "adipiscing", "at", "in", "tellus", "integer", "feugiat", "scelerisque", "varius", "morbi", "enim", "nunc,", "faucibus", "a", "pellentesque", "sit", "amet,", "porttitor", "eget", "dolor", "morbi", "non", "arcu", "risus,", "quis", "varius", "quam", "quisque", "id", "diam", "vel", "quam", "elementum", "pulvinar", "etiam", "non", "quam", "lacus", "suspendisse", "faucibus", "interdum", "posuere", "lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "duis", "tristique", "sollicitudin", "nibh", "sit", "amet", "commodo", "nulla", "facilisi", "nullam", "vehicula", "ipsum", "a", "arcu", "cursus", "vitae", "congue", "mauris", "rhoncus", "aenean", "vel", "elit", "scelerisque", "mauris", "pellentesque", "pulvinar", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "maecenas", "pharetra", "convallis", "posuere", "morbi", "leo", "urna,", "molestie", "at", "elementum", "eu,", "facilisis", "sed", "odio", "morbi", "quis", "commodo", "odio", "aenean", "sed", "adipiscing", "diam", "donec", "adipiscing", "tristique", "risus", "nec", "feugiat", "in", "fermentum", "posuere", "urna", "nec", "tincidunt", "praesent", "semper", "feugiat", "nibh", "sed", "pulvinar", "proin", "gravida", "hendrerit", "lectus", "a", "molestie"];
	    //random integer method.
	    Lorem.prototype.randomInt = function (min, max) {
	        return Math.floor(Math.random() * (max - min + 1)) + min;
	    };
	    //text creator method with parameters: how many, what
	    Lorem.prototype.createText = function (count, type) {
	        switch (type) {
	            //paragraphs are loads of sentences.
	            case Lorem.TYPE.PARAGRAPH:
	                var paragraphs = new Array();
	                for (var i = 0; i < count; i++) {
	                    var paragraphLength = this.randomInt(10, 20);
	                    var paragraph = this.createText(paragraphLength, Lorem.TYPE.SENTENCE);
	                    paragraphs.push('<p>' + paragraph + '</p>');
	                }
	                return paragraphs.join('\n');
	                break;
	            //sentences are loads of words.
	            case Lorem.TYPE.SENTENCE:
	                var sentences = new Array();
	                for (var i = 0; i < count; i++) {
	                    var sentenceLength = this.randomInt(5, 10);
	                    var words = this.createText(sentenceLength, Lorem.TYPE.WORD).split(' ');
	                    words[0] = words[0].substr(0, 1).toUpperCase() + words[0].substr(1);
	                    var sentence = words.join(' ');

	                    sentences.push(sentence);
	                }
	                return (sentences.join('. ') + '.').replace(/(\.\,|\,\.)/g, '.');
	                break;
	            //words are words
	            case Lorem.TYPE.WORD:
	                var wordIndex = this.randomInt(0, Lorem.WORDS.length - count - 1);

	                return Lorem.WORDS.slice(wordIndex, wordIndex + count).join(' ').replace(/\.|\,/g, '');
	                break;
	        }
	    };
	    Lorem.prototype.createLorem = function (element) {

	        var lorem = new Array();
	        var count;

	        if (/\d+-\d+[psw]/.test(this.query)) {
	            var range = this.query.replace(/[a-z]/, '').split("-");
	            count = Math.floor(Math.random() * parseInt(range[1])) + parseInt(range[0]);
	        } else {
	            count = parseInt(this.query);
	        }

	        if (/\d+p/.test(this.query)) {
	            var type = Lorem.TYPE.PARAGRAPH;
	        } else if (/\d+s/.test(this.query)) {
	            var type = Lorem.TYPE.SENTENCE;
	        } else if (/\d+w/.test(this.query)) {
	            var type = Lorem.TYPE.WORD;
	        }

	        lorem.push(this.createText(count, type));
	        lorem = lorem.join(' ');

	        if (element) {
	            if (this.type == Lorem.TEXT) element.innerHTML += lorem;else if (this.type == Lorem.IMAGE) {
	                //TODO: for now, using lorempixel.
	                var path = '';
	                var options = this.query.split(' ');
	                if (options[0] == 'gray') {
	                    path += '/g';
	                    options[0] = '';
	                }
	                if (element.getAttribute('width')) path += '/' + element.getAttribute('width');

	                if (element.getAttribute('height')) path += '/' + element.getAttribute('height');

	                path += '/' + options.join(' ').replace(/(^\s+|\s+$)/, '');
	                element.src = 'http://lorempixel.com' + path.replace(/\/\//, '/');
	            }
	        }

	        if (element == null) return lorem;
	    };
	})();

	exports["default"] = React.createClass({
	    displayName: "loremipsum",

	    propTypes: {
	        type: React.PropTypes.string,
	        query: React.PropTypes.string.isRequired
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            type: 'text'
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        var lorem = new Lorem();

	        switch (this.props.type) {
	            case 'img':
	                lorem.type = Lorem.IMAGE;
	                break;
	            case 'text':
	            default:
	                lorem.type = Lorem.TEXT;
	                break;
	        }

	        lorem.query = this.props.query;
	        var l = lorem.createLorem(this.refs.node.getDOMNode());
	    },
	    render: function render() {
	        var props = _extends({
	            type: null,
	            query: null,
	            ref: 'node'
	        }, this.props);

	        var ComponentClass;
	        if (this.props.type === 'text') return React.createElement("span", props);else return React.createElement("img", props);
	    }
	});
	module.exports = exports["default"];

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default(props) {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);

	    this.state = {
	      version: 0
	    };
	  }

	  _createClass(_default, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setState({
	        version: document.getElementsByTagName('body')[0].getAttribute('data-version')
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { id: 'footer-container' },
	        React.createElement(
	          Grid,
	          { id: 'footer', className: 'text-center' },
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { xs: 12 },
	              React.createElement(
	                'div',
	                null,
	                '© 2015 XtremePay  - v',
	                this.state.version
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _reactRouter = __webpack_require__(4);

	//import LinkedStateMixin from 'react-addons';
	//import Auth from '../services/AuthService'

	var _reactAddonsLibLinkedStateMixin = __webpack_require__(34);

	var _reactAddonsLibLinkedStateMixin2 = _interopRequireDefault(_reactAddonsLibLinkedStateMixin);

	var _classnames = __webpack_require__(41);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(42);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(43);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(45);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(47);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var _servicesAuth = __webpack_require__(2);

	var _servicesAuth2 = _interopRequireDefault(_servicesAuth);

	var Body = React.createClass({
	  displayName: 'Body',

	  mixins: [_reactRouter.State, _reactRouter.Navigation, _reactAddonsLibLinkedStateMixin2['default']],
	  contextTypes: {
	    router: React.PropTypes.object.isRequired
	  },
	  back: function back(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    this.transitionTo('/app/dashboard');
	  },
	  getInitialState: function getInitialState() {
	    //this.onChange = this.onChange.bind(this)
	    //return {user: '', password: ''};
	    return {
	      error: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    $('html').addClass('authentication');
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    $('html').removeClass('authentication');
	  },
	  login: function login(e) {
	    e.preventDefault();
	    console.log(this.state);
	  },

	  handleSubmit: function handleSubmit(event) {
	    var _this = this;

	    event.preventDefault();

	    var email = this.refs.email.value;
	    var pass = this.refs.pass.value;

	    _servicesAuth2['default'].login(email, pass, function (loggedIn) {
	      if (!loggedIn) return _this.setState({ error: true });else {
	        _this.transitionTo('/app/dashboard');
	      }
	      /*const { location } = this.props;
	       if (location.state && location.state.nextPathname) {
	        this.history.replaceState(null, location.state.nextPathname)
	      } else {
	        this.history.replaceState(null, '/')
	      }*/
	    });
	  },

	  render: function render() {

	    // a partial valueLink binding which can be sent (as props) to child components that understand only a sub portion of the data structure
	    //var partial = link('list');

	    return React.createElement(
	      Container,
	      { id: 'auth-container', className: 'login' },
	      React.createElement(
	        Container,
	        { id: 'auth-row' },
	        React.createElement(
	          Container,
	          { id: 'auth-cell' },
	          React.createElement(
	            Grid,
	            null,
	            React.createElement(
	              Row,
	              null,
	              React.createElement(
	                Col,
	                { sm: 12 },
	                React.createElement(
	                  PanelContainer,
	                  { noControls: true },
	                  React.createElement(
	                    Panel,
	                    null,
	                    React.createElement(
	                      PanelBody,
	                      { style: {
	                          padding: 0
	                        } },
	                      React.createElement(
	                        'div',
	                        { className: 'text-center bg-darkblue fg-white' },
	                        React.createElement(
	                          'h3',
	                          { style: {
	                              margin: 0, padding: 25
	                            } },
	                          'Sign in to XtremePay'
	                        )
	                      ),
	                      React.createElement(
	                        'div',
	                        { className: 'bg-hoverblue fg-black50 text-center', style: {
	                            padding: 12.5
	                          } },
	                        React.createElement(
	                          'div',
	                          null,
	                          'You need to sign in for those awesome features'
	                        ),
	                        React.createElement(
	                          'div',
	                          { style: {
	                              marginTop: 12.5, marginBottom: 12.5
	                            } },
	                          React.createElement(
	                            Button,
	                            { id: 'facebook-btn', lg: true, bsStyle: 'darkblue', type: 'submit', onClick: this.back },
	                            React.createElement(Icon, { glyph: 'icon-fontello-facebook' }),
	                            React.createElement(
	                              'span',
	                              null,
	                              'Sign in',
	                              React.createElement(
	                                'span',
	                                { className: 'hidden-xs' },
	                                'with facebook'
	                              )
	                            )
	                          )
	                        ),
	                        React.createElement(
	                          'div',
	                          null,
	                          React.createElement(
	                            'a',
	                            { id: 'twitter-link', href: '#', onClick: this.back },
	                            React.createElement(Icon, { glyph: 'icon-fontello-twitter' }),
	                            React.createElement(
	                              'span',
	                              null,
	                              'or with twitter'
	                            )
	                          )
	                        )
	                      ),
	                      React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                          'div',
	                          { className: 'text-center', style: {
	                              padding: 12.5
	                            } },
	                          'or use your XtremePay account'
	                        ),
	                        React.createElement(
	                          'div',
	                          { style: {
	                              padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25
	                            } },
	                          React.createElement(
	                            Form,
	                            { onSubmit: this.handleSubmit },
	                            React.createElement(
	                              FormGroup,
	                              null,
	                              React.createElement(
	                                InputGroup,
	                                { lg: true },
	                                React.createElement(
	                                  InputGroupAddon,
	                                  null,
	                                  React.createElement(Icon, { glyph: 'icon-fontello-mail' })
	                                ),
	                                React.createElement(Input, { autoFocus: true, type: 'email', ref: 'email', valueLink: this.linkState('user'), id: 'emailaddress', className: 'border-focus-blue', placeholder: 'sunday.amosun@xtremepayafr.com' })
	                              )
	                            ),
	                            React.createElement(
	                              FormGroup,
	                              null,
	                              React.createElement(
	                                InputGroup,
	                                { lg: true },
	                                React.createElement(
	                                  InputGroupAddon,
	                                  null,
	                                  React.createElement(Icon, { glyph: 'icon-fontello-key' })
	                                ),
	                                React.createElement(Input, { type: 'password', ref: 'pass', id: 'password', valueLink: this.linkState('password'), className: 'border-focus-blue', placeholder: 'password' })
	                              )
	                            ),
	                            React.createElement(
	                              FormGroup,
	                              null,
	                              React.createElement(
	                                Grid,
	                                null,
	                                React.createElement(
	                                  Row,
	                                  null,
	                                  React.createElement(
	                                    Col,
	                                    { xs: 6, collapseLeft: true, collapseRight: true, style: {
	                                        paddingTop: 10
	                                      } },
	                                    React.createElement(
	                                      _reactRouter.Link,
	                                      { to: '/app/signup' },
	                                      'Create an XtremePay account'
	                                    )
	                                  ),
	                                  React.createElement(
	                                    Col,
	                                    { xs: 6, collapseLeft: true, collapseRight: true, className: 'text-right' },
	                                    React.createElement(
	                                      Button,
	                                      { outlined: true, lg: true, type: 'submit', bsStyle: 'blue' },
	                                      'Login'
	                                    )
	                                  )
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var _default = (function (_React$Component) {
	  _inherits(_default, _React$Component);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({ 'container-open': this.props.open });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(41);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactRouter = __webpack_require__(4);

	var _globalJsxSidebar_component = __webpack_require__(42);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(43);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(45);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(47);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var _globalJsxLoremipsum = __webpack_require__(46);

	var _globalJsxLoremipsum2 = _interopRequireDefault(_globalJsxLoremipsum);

	var Contact = (function (_React$Component) {
	  _inherits(Contact, _React$Component);

	  function Contact(props) {
	    _classCallCheck(this, Contact);

	    _get(Object.getPrototypeOf(Contact.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      invited: this.props.invited ? true : false,
	      invitedText: this.props.invited ? 'invited' : 'invite'
	    };
	  }

	  _createClass(Contact, [{
	    key: 'handleClick',
	    value: function handleClick(e) {
	      e.preventDefault();
	      e.stopPropagation();
	      this.setState({
	        invited: !this.state.invited,
	        invitedText: !this.state.invited ? 'invited' : 'invite'
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'tr',
	        null,
	        React.createElement(
	          'td',
	          { style: { verticalAlign: 'middle', borderTop: this.props.noBorder ? 'none' : null } },
	          React.createElement('img', { src: '/imgs/avatars/' + this.props.avatar + '.png' })
	        ),
	        React.createElement(
	          'td',
	          { style: { verticalAlign: 'middle', borderTop: this.props.noBorder ? 'none' : null } },
	          this.props.name
	        ),
	        React.createElement(
	          'td',
	          { style: { verticalAlign: 'middle', borderTop: this.props.noBorder ? 'none' : null }, className: 'text-right' },
	          React.createElement(
	            Button,
	            { onlyOnHover: true, bsStyle: 'orange', active: this.state.invited, onClick: this.handleClick.bind(this) },
	            this.state.invitedText
	          )
	        )
	      );
	    }
	  }]);

	  return Contact;
	})(React.Component);

	var MainChart = (function (_React$Component2) {
	  _inherits(MainChart, _React$Component2);

	  function MainChart() {
	    _classCallCheck(this, MainChart);

	    _get(Object.getPrototypeOf(MainChart.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(MainChart, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var chart = new Rubix('#main-chart', {
	        width: '100%',
	        height: 300,
	        title: 'Chart of Total Users',
	        titleColor: '#2EB398',
	        subtitle: 'Period: 2004 and 2008',
	        subtitleColor: '#2EB398',
	        axis: {
	          x: {
	            type: 'datetime',
	            tickCount: 3,
	            label: 'Time',
	            labelColor: '#2EB398'
	          },
	          y: {
	            type: 'linear',
	            tickFormat: 'd',
	            tickCount: 2,
	            labelColor: '#2EB398'
	          }
	        },
	        tooltip: {
	          color: '#55C9A6',
	          format: {
	            y: '.0f',
	            x: '%x'
	          }
	        },
	        margin: {
	          top: 25,
	          left: 50,
	          right: 25
	        },
	        interpolate: 'linear',
	        master_detail: true
	      });

	      var total_users = chart.area_series({
	        name: 'Total Users',
	        color: '#2EB398',
	        marker: 'circle',
	        fillopacity: 0.7,
	        noshadow: true
	      });

	      chart.extent = [1297110663 * 850 + 86400000 * 20 * (.35 * 40), 1297110663 * 850 + 86400000 * 20 * (.66 * 40)];

	      var t = 1297110663 * 850;
	      var v = [5, 10, 2, 20, 40, 35, 30, 20, 25, 10, 20, 10, 20, 15, 25, 20, 30, 25, 30, 25, 30, 35, 40, 20, 15, 20, 10, 25, 15, 20, 10, 25, 30, 30, 25, 20, 10, 50, 60, 30];

	      var getValue = function getValue() {
	        var val = v.shift();
	        v.push(val);
	        return val;
	      };

	      var data = d3.range(40).map(function () {
	        return {
	          x: t += 86400000 * 20,
	          y: getValue()
	        };
	      });

	      total_users.addData(data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        PanelBody,
	        { style: { paddingTop: 5 } },
	        React.createElement('div', { id: 'main-chart' })
	      );
	    }
	  }]);

	  return MainChart;
	})(React.Component);

	var MaleFemaleChart = (function (_React$Component3) {
	  _inherits(MaleFemaleChart, _React$Component3);

	  function MaleFemaleChart() {
	    _classCallCheck(this, MaleFemaleChart);

	    _get(Object.getPrototypeOf(MaleFemaleChart.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(MaleFemaleChart, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var chart = new Rubix('#male-female-chart', {
	        height: 200,
	        title: 'Demographics',
	        subtitle: 'Visitors',
	        axis: {
	          x: {
	            type: 'ordinal',
	            tickFormat: 'd',
	            tickCount: 2,
	            label: 'Time'
	          },
	          y: {
	            type: 'linear',
	            tickFormat: 'd'
	          }
	        },
	        tooltip: {
	          theme_style: 'dark',
	          format: {
	            y: '.0f'
	          },
	          abs: {
	            y: true
	          }
	        },
	        stacked: true,
	        interpolate: 'linear',
	        show_markers: true
	      });

	      var column = chart.column_series({
	        name: 'Male Visitors',
	        color: '#2D89EF',
	        marker: 'cross'
	      });

	      var data = [{ x: 2005, y: 21 }, { x: 2006, y: 44 }, { x: 2007, y: 14 }, { x: 2008, y: 18 }, { x: 2009, y: 23 }, { x: 2010, y: 21 }];
	      column.addData(data);

	      var column1 = chart.column_series({
	        name: 'Female Visitors',
	        color: '#FF0097',
	        marker: 'diamond'
	      });

	      var data1 = [{ x: 2005, y: -79 }, { x: 2006, y: -56 }, { x: 2007, y: -86 }, { x: 2008, y: -82 }, { x: 2009, y: -77 }, { x: 2010, y: -79 }];
	      column1.addData(data1);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement('div', { id: 'male-female-chart' });
	    }
	  }]);

	  return MaleFemaleChart;
	})(React.Component);

	var SocialSwitches = (function (_React$Component4) {
	  _inherits(SocialSwitches, _React$Component4);

	  function SocialSwitches() {
	    _classCallCheck(this, SocialSwitches);

	    _get(Object.getPrototypeOf(SocialSwitches.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(SocialSwitches, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

	      elems.forEach(function (html) {
	        var switchery = new Switchery(html);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Table,
	        { className: 'panel-switches', collapsed: true },
	        React.createElement(
	          'tbody',
	          null,
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'td',
	              null,
	              React.createElement(Icon, { glyph: 'icon-fontello-twitter', className: 'fg-blue' }),
	              React.createElement(
	                'span',
	                { className: 'text-uppercase panel-switches-text' },
	                'twitter'
	              )
	            ),
	            React.createElement(
	              'td',
	              { className: 'panel-switches-holder' },
	              React.createElement('input', { type: 'checkbox', className: 'js-switch', defaultChecked: true })
	            )
	          ),
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'td',
	              null,
	              React.createElement(Icon, { glyph: 'icon-fontello-facebook', className: 'fg-darkblue' }),
	              React.createElement(
	                'span',
	                { className: 'text-uppercase panel-switches-text' },
	                'facebook'
	              )
	            ),
	            React.createElement(
	              'td',
	              { className: 'panel-switches-holder' },
	              React.createElement('input', { type: 'checkbox', className: 'js-switch' })
	            )
	          ),
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'td',
	              null,
	              React.createElement(Icon, { glyph: 'icon-fontello-gplus', className: 'fg-deepred' }),
	              React.createElement(
	                'span',
	                { className: 'text-uppercase panel-switches-text' },
	                'google+'
	              )
	            ),
	            React.createElement(
	              'td',
	              { className: 'panel-switches-holder' },
	              React.createElement('input', { type: 'checkbox', className: 'js-switch' })
	            )
	          ),
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'td',
	              null,
	              React.createElement(Icon, { glyph: 'icon-fontello-linkedin', className: 'fg-deepred' }),
	              React.createElement(
	                'span',
	                { className: 'text-uppercase panel-switches-text' },
	                'linkedin'
	              )
	            ),
	            React.createElement(
	              'td',
	              { className: 'panel-switches-holder' },
	              React.createElement('input', { type: 'checkbox', className: 'js-switch', defaultChecked: true })
	            )
	          ),
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'td',
	              null,
	              React.createElement(Icon, { glyph: 'icon-fontello-instagram', className: 'fg-deepred' }),
	              React.createElement(
	                'span',
	                { className: 'text-uppercase panel-switches-text' },
	                'instagram'
	              )
	            ),
	            React.createElement(
	              'td',
	              { className: 'panel-switches-holder' },
	              React.createElement(
	                Button,
	                { bsStyle: 'primary' },
	                'connect'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return SocialSwitches;
	})(React.Component);

	var NotePanel = (function (_React$Component5) {
	  _inherits(NotePanel, _React$Component5);

	  function NotePanel() {
	    _classCallCheck(this, NotePanel);

	    _get(Object.getPrototypeOf(NotePanel.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(NotePanel, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Grid,
	        null,
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 12, style: { padding: 50, paddingTop: 12.5, paddingBottom: 25 }, className: 'text-center' },
	            React.createElement(
	              'h3',
	              { className: 'fg-black50' },
	              'NOTE'
	            ),
	            React.createElement('hr', null),
	            React.createElement(
	              'p',
	              null,
	              React.createElement(_globalJsxLoremipsum2['default'], { query: '3s' })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return NotePanel;
	})(React.Component);

	var RevenuePanel = (function (_React$Component6) {
	  _inherits(RevenuePanel, _React$Component6);

	  function RevenuePanel() {
	    _classCallCheck(this, RevenuePanel);

	    _get(Object.getPrototypeOf(RevenuePanel.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(RevenuePanel, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Grid,
	        null,
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 12, className: 'text-center' },
	            React.createElement('br', null),
	            React.createElement(
	              'div',
	              null,
	              React.createElement(
	                'h4',
	                null,
	                'Gross Revenue'
	              ),
	              React.createElement(
	                'h2',
	                { className: 'fg-green visible-xs visible-md visible-lg' },
	                '9,362.74'
	              ),
	              React.createElement(
	                'h4',
	                { className: 'fg-green visible-sm' },
	                '9,362.74'
	              )
	            ),
	            React.createElement('hr', { className: 'border-green' }),
	            React.createElement(
	              'div',
	              null,
	              React.createElement(
	                'h4',
	                null,
	                'Net Revenue'
	              ),
	              React.createElement(
	                'h2',
	                { className: 'fg-green visible-xs visible-md visible-lg' },
	                '6,734.89'
	              ),
	              React.createElement(
	                'h4',
	                { className: 'fg-green visible-sm' },
	                '6,734.89'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return RevenuePanel;
	})(React.Component);

	var LoadPanel = (function (_React$Component7) {
	  _inherits(LoadPanel, _React$Component7);

	  function LoadPanel() {
	    _classCallCheck(this, LoadPanel);

	    _get(Object.getPrototypeOf(LoadPanel.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(LoadPanel, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Row,
	        { className: 'bg-green fg-lightgreen' },
	        React.createElement(
	          Col,
	          { xs: 6 },
	          React.createElement(
	            'h3',
	            null,
	            'Daily Load'
	          )
	        ),
	        React.createElement(
	          Col,
	          { xs: 6, className: 'text-right' },
	          React.createElement(
	            'h2',
	            { className: 'fg-lightgreen' },
	            '67%'
	          )
	        )
	      );
	    }
	  }]);

	  return LoadPanel;
	})(React.Component);

	var AlertChart = (function (_React$Component8) {
	  _inherits(AlertChart, _React$Component8);

	  function AlertChart() {
	    _classCallCheck(this, AlertChart);

	    _get(Object.getPrototypeOf(AlertChart.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(AlertChart, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var chart = new Rubix('#alert-chart', {
	        width: '100%',
	        height: 200,
	        hideLegend: true,
	        hideAxisAndGrid: true,
	        focusLineColor: '#fff',
	        theme_style: 'dark',
	        axis: {
	          x: {
	            type: 'linear'
	          },
	          y: {
	            type: 'linear',
	            tickFormat: 'd'
	          }
	        },
	        tooltip: {
	          color: '#fff',
	          format: {
	            x: 'd',
	            y: 'd'
	          }
	        },
	        margin: {
	          left: 25,
	          top: 50,
	          right: 25,
	          bottom: 25
	        }
	      });

	      var alerts = chart.column_series({
	        name: 'Load',
	        color: '#7CD5BA',
	        nostroke: true
	      });

	      alerts.addData([{ x: 0, y: 30 }, { x: 1, y: 40 }, { x: 2, y: 15 }, { x: 3, y: 30 }, { x: 4, y: 35 }, { x: 5, y: 70 }, { x: 6, y: 50 }, { x: 7, y: 60 }, { x: 8, y: 35 }, { x: 9, y: 30 }, { x: 10, y: 40 }, { x: 11, y: 30 }, { x: 12, y: 50 }, { x: 13, y: 35 }]);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Row,
	        null,
	        React.createElement(
	          Col,
	          { xs: 12 },
	          React.createElement('div', { id: 'alert-chart', className: 'rubix-chart' })
	        )
	      );
	    }
	  }]);

	  return AlertChart;
	})(React.Component);

	var RadarChartPanel = (function (_React$Component9) {
	  _inherits(RadarChartPanel, _React$Component9);

	  function RadarChartPanel() {
	    _classCallCheck(this, RadarChartPanel);

	    _get(Object.getPrototypeOf(RadarChartPanel.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(RadarChartPanel, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var data = {
	        labels: ['Japan', 'France', 'USA', 'Russia', 'China', 'Dubai', 'India'],
	        datasets: [{
	          label: 'My First dataset',
	          fillColor: 'rgba(220,220,220,0.2)',
	          strokeColor: 'rgba(220,220,220,1)',
	          pointColor: 'rgba(220,220,220,1)',
	          pointStrokeColor: '#fff',
	          pointHighlightFill: '#fff',
	          pointHighlightStroke: 'rgba(220,220,220,1)',
	          data: [65, 59, 90, 81, 56, 55, 40]
	        }, {
	          label: 'My Second dataset',
	          fillColor: 'rgba(234, 120, 130, 0.5)',
	          strokeColor: 'rgba(234, 120, 130, 1)',
	          pointColor: 'rgba(234, 120, 130, 1)',
	          pointStrokeColor: '#fff',
	          pointHighlightFill: '#fff',
	          pointHighlightStroke: 'rgba(151,187,205,1)',
	          data: [28, 48, 40, 19, 96, 27, 100]
	        }]
	      };

	      var ctx = document.getElementById('chartjs-1').getContext('2d');
	      new Chart(ctx).Radar(data, {
	        responsive: false,
	        maintainAspectRatio: true
	      });

	      $('.line-EA7882').sparkline('html', { type: 'line', height: 25, lineColor: '#EA7882', fillColor: 'rgba(234, 120, 130, 0.5)' });
	      $('.line-2EB398').sparkline('html', { type: 'line', height: 25, lineColor: '#2EB398', fillColor: 'rgba(46, 179, 152, 0.5)' });
	      $('.line-79B0EC').sparkline('html', { type: 'line', height: 25, lineColor: '#79B0EC', fillColor: 'rgba(121, 176, 236, 0.5)' });
	      $('.line-FFC497').sparkline('html', { type: 'line', height: 25, lineColor: '#FFC497', fillColor: 'rgba(255, 196, 151, 0.5)' });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement('canvas', { id: 'chartjs-1', height: '250', width: '250' }),
	        React.createElement(
	          Table,
	          { striped: true, collapsed: true },
	          React.createElement(
	            'tbody',
	            null,
	            React.createElement(
	              'tr',
	              null,
	              React.createElement(
	                'td',
	                { className: 'text-left' },
	                'Bounce Rate:'
	              ),
	              React.createElement(
	                'td',
	                { className: 'text-center' },
	                React.createElement(
	                  BLabel,
	                  { className: 'bg-red fg-white' },
	                  '+46%'
	                )
	              ),
	              React.createElement(
	                'td',
	                { className: 'text-right' },
	                React.createElement(
	                  'div',
	                  { className: 'line-EA7882', sparkBarColor: '#EA7882' },
	                  '2,3,7,5,4,4,3,2,3,4,3,2,4,3,4,3,2,5'
	                )
	              )
	            ),
	            React.createElement(
	              'tr',
	              null,
	              React.createElement(
	                'td',
	                { className: 'text-left' },
	                'New visits:'
	              ),
	              React.createElement(
	                'td',
	                { className: 'text-center' },
	                React.createElement(
	                  BLabel,
	                  { className: 'bg-darkgreen45 fg-white' },
	                  '+23%'
	                )
	              ),
	              React.createElement(
	                'td',
	                { className: 'text-right' },
	                React.createElement(
	                  'div',
	                  { className: 'line-2EB398', sparkBarColor: '#2EB398' },
	                  '7,7,7,7,7,7,6,7,4,7,7,7,7,5,7,7,7,9'
	                )
	              )
	            ),
	            React.createElement(
	              'tr',
	              null,
	              React.createElement(
	                'td',
	                { className: 'text-left' },
	                'Transactions:'
	              ),
	              React.createElement(
	                'td',
	                { className: 'text-center' },
	                React.createElement(
	                  BLabel,
	                  { className: 'bg-blue fg-white' },
	                  '43,000 (+50%)'
	                )
	              ),
	              React.createElement(
	                'td',
	                { className: 'text-right' },
	                React.createElement(
	                  'div',
	                  { className: 'line-79B0EC', sparkBarColor: '#79B0EC' },
	                  '4,6,7,7,4,3,2,1,4,9,3,2,3,5,2,4,3,1'
	                )
	              )
	            ),
	            React.createElement(
	              'tr',
	              null,
	              React.createElement(
	                'td',
	                { className: 'text-left' },
	                'Conversions:'
	              ),
	              React.createElement(
	                'td',
	                { className: 'text-center' },
	                React.createElement(
	                  BLabel,
	                  { className: 'bg-orange fg-white' },
	                  '2000 (+75%)'
	                )
	              ),
	              React.createElement(
	                'td',
	                { className: 'text-right' },
	                React.createElement(
	                  'div',
	                  { className: 'line-FFC497', sparkBarColor: '#FFC497' },
	                  '3,2,4,6,7,4,5,7,4,3,2,1,4,6,7,8,2,8'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return RadarChartPanel;
	})(React.Component);

	var OrdersComparisonPanel = (function (_React$Component10) {
	  _inherits(OrdersComparisonPanel, _React$Component10);

	  function OrdersComparisonPanel() {
	    _classCallCheck(this, OrdersComparisonPanel);

	    _get(Object.getPrototypeOf(OrdersComparisonPanel.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(OrdersComparisonPanel, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var chart = new Rubix('#orderscomparision', {
	        height: 225,
	        noSort: true,
	        hideYAxis: true,
	        title: 'Mac Pro vs iPhone',
	        subtitle: 'weekly sales data',
	        hideXAxisTickLines: true,
	        hideYAxisTickLines: true,
	        hideLegend: true,
	        gridColor: '#EBEBEB',
	        tickColor: '#EBA068',
	        titleColor: '#EBA068',
	        subtitleColor: '#EBA068',
	        axis: {
	          x: {
	            type: 'ordinal'
	          },
	          y: {
	            type: 'linear',
	            tickFormat: 'd'
	          }
	        },
	        margin: {
	          top: 50
	        },
	        tooltip: {
	          color: '#EBA068',
	          format: {
	            y: '.0f'
	          }
	        },
	        show_markers: false
	      });

	      var series1 = chart.column_series({
	        name: 'Mac Pro Sales',
	        color: '#EBA068',
	        marker: 'square',
	        fillopacity: 1
	      });

	      series1.addData([{ x: 'Sun', y: 1 }, { x: 'Mon', y: 2 }, { x: 'Tue', y: 3 }, { x: 'Wed', y: 2 }, { x: 'Thu', y: 2 }, { x: 'Fri', y: 3 }, { x: 'Sat', y: 1 }]);

	      var series2 = chart.column_series({
	        name: 'iPhone Sales',
	        color: '#FFD3B1',
	        fillopacity: 1
	      });

	      series2.addData([{ x: 'Sun', y: 3 }, { x: 'Mon', y: 4 }, { x: 'Tue', y: 6 }, { x: 'Wed', y: 5 }, { x: 'Thu', y: 5.5 }, { x: 'Fri', y: 3 }, { x: 'Sat', y: 2 }]);

	      $('.compositebar1').sparkline('html', { type: 'bar', barColor: '#ffffff', height: 25 });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement('div', { id: 'orderscomparision' }),
	        React.createElement(
	          Grid,
	          { style: { margin: -25, marginTop: 0 } },
	          React.createElement(
	            Row,
	            { className: 'bg-lightorange fg-darkorange text-center' },
	            React.createElement(
	              Col,
	              { xs: 12, collapseLeft: true, collapseRight: true, style: { padding: 25, paddingTop: 0 } },
	              React.createElement(
	                Table,
	                { alignMiddle: true, collapsed: true },
	                React.createElement(
	                  'tbody',
	                  null,
	                  React.createElement(
	                    'tr',
	                    null,
	                    React.createElement(
	                      'td',
	                      { style: { width: '33%' } },
	                      React.createElement(
	                        'h6',
	                        null,
	                        'Total Orders'
	                      ),
	                      React.createElement(
	                        'h4',
	                        null,
	                        '8,584'
	                      )
	                    ),
	                    React.createElement(
	                      'td',
	                      { style: { width: '33%' } },
	                      React.createElement(
	                        'div',
	                        { style: { position: 'relative' } },
	                        React.createElement(
	                          'div',
	                          { className: 'compositebar1' },
	                          '4,6,7,7,4,3,2,1,4,9,3,2,3,5,2,4,3,1'
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      'td',
	                      { style: { width: '33%' } },
	                      React.createElement(
	                        'h4',
	                        null,
	                        '+ 12%'
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    'tr',
	                    null,
	                    React.createElement(
	                      'td',
	                      { style: { width: '33%' } },
	                      React.createElement(
	                        'h6',
	                        null,
	                        'Total Orders'
	                      ),
	                      React.createElement(
	                        'h4',
	                        null,
	                        '2,312'
	                      )
	                    ),
	                    React.createElement(
	                      'td',
	                      { style: { width: '33%' } },
	                      React.createElement(
	                        'div',
	                        { style: { position: 'relative' } },
	                        React.createElement(
	                          'div',
	                          { className: 'compositebar1' },
	                          '3,2,4,6,3,6,7,3,2,1,5,7,8,9,3,2,6,7'
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      'td',
	                      { style: { width: '33%' } },
	                      React.createElement(
	                        'h4',
	                        null,
	                        '0%'
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    'tr',
	                    null,
	                    React.createElement(
	                      'td',
	                      { style: { width: '33%' } },
	                      React.createElement(
	                        'h6',
	                        null,
	                        'Total Orders'
	                      ),
	                      React.createElement(
	                        'h4',
	                        null,
	                        '4,932'
	                      )
	                    ),
	                    React.createElement(
	                      'td',
	                      { style: { width: '33%' } },
	                      React.createElement(
	                        'div',
	                        { style: { position: 'relative' } },
	                        React.createElement(
	                          'div',
	                          { className: 'compositebar1' },
	                          '2,3,2,4,2,6,4,2,3,5,2,5,2,1,5,2,5,2'
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      'td',
	                      { style: { width: '33%' } },
	                      React.createElement(
	                        'h4',
	                        null,
	                        '- 81%'
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return OrdersComparisonPanel;
	})(React.Component);

	var ContactListPanel = (function (_React$Component11) {
	  _inherits(ContactListPanel, _React$Component11);

	  function ContactListPanel() {
	    _classCallCheck(this, ContactListPanel);

	    _get(Object.getPrototypeOf(ContactListPanel.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ContactListPanel, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Grid,
	        null,
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 12, style: { padding: 25 } },
	            React.createElement(
	              Form,
	              null,
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  InputGroup,
	                  null,
	                  React.createElement(Input, { type: 'text', placeholder: 'Type a name here...', className: 'border-orange border-focus-darkorange' }),
	                  React.createElement(
	                    InputGroupButton,
	                    null,
	                    React.createElement(
	                      Button,
	                      { bsStyle: 'orange' },
	                      React.createElement(Icon, { glyph: 'icon-fontello-search' })
	                    )
	                  )
	                )
	              )
	            ),
	            React.createElement(
	              'div',
	              { className: 'text-center' },
	              React.createElement(
	                Checkbox,
	                null,
	                'Invite all friends'
	              )
	            ),
	            React.createElement(
	              'div',
	              null,
	              React.createElement(
	                Table,
	                { collapsed: true },
	                React.createElement(
	                  'tbody',
	                  null,
	                  React.createElement(Contact, { name: 'Jordyn Ouellet', avatar: 'avatar5', noBorder: true }),
	                  React.createElement(Contact, { name: 'Ava Perry', avatar: 'avatar9' }),
	                  React.createElement(Contact, { name: 'Angelina Mills', avatar: 'avatar10', invited: true }),
	                  React.createElement(Contact, { name: 'Crystal Ford', avatar: 'avatar11' }),
	                  React.createElement(Contact, { name: 'Toby King', avatar: 'avatar7' }),
	                  React.createElement(Contact, { name: 'Ju Lan', avatar: 'avatar13', invited: true }),
	                  React.createElement(Contact, { name: 'Alexandra Mordin', avatar: 'avatar20' })
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ContactListPanel;
	})(React.Component);

	var TicketsPanel = (function (_React$Component12) {
	  _inherits(TicketsPanel, _React$Component12);

	  function TicketsPanel() {
	    _classCallCheck(this, TicketsPanel);

	    _get(Object.getPrototypeOf(TicketsPanel.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(TicketsPanel, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var ticketsCleared = Rubix.Donut('#tickets-cleared', {
	        title: 'Tickets Cleared',
	        subtitle: 'by agents',
	        titleColor: '#EBA068',
	        subtitleColor: '#EBA068',
	        hideLegend: false,
	        height: 300,
	        tooltip: {
	          color: '#EBA068'
	        }
	      });

	      ticketsCleared.addData([{
	        name: 'Karl Pohl',
	        value: 57,
	        color: '#FA824F'
	      }, {
	        name: 'Gamze Erdoğan',
	        value: 32,
	        color: '#EBA068'
	      }, {
	        name: 'Leyla Cəlilli',
	        value: 23,
	        color: '#FFC497'
	      }, {
	        name: 'Nadir Üzeyirzadə',
	        value: 11,
	        color: '#FFC9A0'
	      }, {
	        name: 'Anna Sanchez',
	        value: 7,
	        color: '#FFD3B1'
	      }]);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement('div', { id: 'tickets-cleared' }),
	        React.createElement(
	          Table,
	          { collapsed: true },
	          React.createElement(
	            'tbody',
	            null,
	            React.createElement(
	              'tr',
	              null,
	              React.createElement(
	                'td',
	                { style: { padding: '12.5px 25px' } },
	                React.createElement(Progress, { collapseBottom: true, withLabel: 'Karl Pohl', value: 57, color: '#FA824F', min: 0, max: 100 })
	              ),
	              React.createElement(
	                'td',
	                { style: { padding: '12.5px 25px' }, className: 'text-right' },
	                React.createElement(
	                  BLabel,
	                  null,
	                  '57'
	                )
	              )
	            ),
	            React.createElement(
	              'tr',
	              null,
	              React.createElement(
	                'td',
	                { style: { padding: '12.5px 25px' } },
	                React.createElement(Progress, { collapseBottom: true, withLabel: 'Gamze Erdoğan', value: 35, color: '#EBA068', min: 0, max: 100 })
	              ),
	              React.createElement(
	                'td',
	                { style: { padding: '12.5px 25px' }, className: 'text-right' },
	                React.createElement(
	                  BLabel,
	                  null,
	                  '33'
	                )
	              )
	            ),
	            React.createElement(
	              'tr',
	              null,
	              React.createElement(
	                'td',
	                { style: { padding: '12.5px 25px' } },
	                React.createElement(Progress, { collapseBottom: true, withLabel: 'Leyla Cəlilli', value: 30, color: '#FFC497', fgColor: '#B86A2D', min: 0, max: 100 })
	              ),
	              React.createElement(
	                'td',
	                { style: { padding: '12.5px 25px' }, className: 'text-right' },
	                React.createElement(
	                  BLabel,
	                  null,
	                  '23'
	                )
	              )
	            ),
	            React.createElement(
	              'tr',
	              null,
	              React.createElement(
	                'td',
	                { style: { padding: '12.5px 25px' } },
	                React.createElement(Progress, { collapseBottom: true, withLabel: 'Nadir Üzeyirzadə', value: 41, color: '#FFC9A0', fgColor: '#B86A2D', min: 0, max: 100 })
	              ),
	              React.createElement(
	                'td',
	                { style: { padding: '12.5px 25px' }, className: 'text-right' },
	                React.createElement(
	                  BLabel,
	                  null,
	                  '11'
	                )
	              )
	            ),
	            React.createElement(
	              'tr',
	              null,
	              React.createElement(
	                'td',
	                { style: { padding: '12.5px 25px' } },
	                React.createElement(Progress, { collapseBottom: true, withLabel: 'Anna Sanchez', value: 66, color: '#FFD3B1', fgColor: '#B86A2D', min: 0, max: 100 })
	              ),
	              React.createElement(
	                'td',
	                { style: { padding: '12.5px 25px' }, className: 'text-right' },
	                React.createElement(
	                  BLabel,
	                  null,
	                  '7'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return TicketsPanel;
	})(React.Component);

	var WeatherPanel = (function (_React$Component13) {
	  _inherits(WeatherPanel, _React$Component13);

	  function WeatherPanel() {
	    _classCallCheck(this, WeatherPanel);

	    _get(Object.getPrototypeOf(WeatherPanel.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(WeatherPanel, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $(this.refs.datetimepicker1.getDOMNode()).datetimepicker({
	        widgetParent: '#datetimepicker1-parent'
	      }).hide();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        PanelContainer,
	        { controlStyles: 'bg-brown50 fg-white' },
	        React.createElement(
	          Panel,
	          { horizontal: true, className: 'force-collapse' },
	          React.createElement(
	            PanelBody,
	            { className: 'panel-sm-7', style: { padding: 0 } },
	            React.createElement(
	              InputGroup,
	              { className: 'date', ref: 'datetimepicker1' },
	              React.createElement(Input, { type: 'text', className: 'form-control' }),
	              React.createElement(
	                InputGroupAddon,
	                null,
	                React.createElement(Icon, { glyph: 'icon-fontello-calendar' })
	              )
	            ),
	            React.createElement(
	              'div',
	              null,
	              React.createElement('div', { id: 'datetimepicker1-parent', className: 'datetimepicker-inline' })
	            )
	          ),
	          React.createElement(
	            PanelRight,
	            { className: 'panel-sm-5 bg-brown50 fg-white', style: { verticalAlign: 'middle' } },
	            React.createElement(
	              Grid,
	              null,
	              React.createElement(
	                Row,
	                null,
	                React.createElement(
	                  Col,
	                  { xs: 12 },
	                  React.createElement(
	                    'div',
	                    { className: 'text-center' },
	                    React.createElement(Icon, { glyph: 'climacon rain cloud', style: { fontSize: '800%', lineHeight: 0 } })
	                  )
	                )
	              ),
	              React.createElement(
	                Row,
	                null,
	                React.createElement(
	                  Col,
	                  { xs: 6, collapseRight: true },
	                  React.createElement(
	                    'h4',
	                    null,
	                    'Max: 25°'
	                  )
	                ),
	                React.createElement(
	                  Col,
	                  { xs: 6, collapseLeft: true, className: 'text-right' },
	                  React.createElement(
	                    'h4',
	                    null,
	                    'Min: 22°'
	                  )
	                )
	              ),
	              React.createElement(
	                Row,
	                null,
	                React.createElement(
	                  Col,
	                  { xs: 12, className: 'text-center' },
	                  React.createElement(
	                    'h5',
	                    null,
	                    'Thundershower'
	                  ),
	                  React.createElement(
	                    'h6',
	                    null,
	                    'Wind: 9 km/h | Humidity: 91%'
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return WeatherPanel;
	})(React.Component);

	var MapPanel = (function (_React$Component14) {
	  _inherits(MapPanel, _React$Component14);

	  function MapPanel() {
	    _classCallCheck(this, MapPanel);

	    _get(Object.getPrototypeOf(MapPanel.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(MapPanel, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var map = new GMaps({
	        div: '#routingmap',
	        lat: 38.890792,
	        lng: -77.048518,
	        scrollwheel: false,
	        zoom: 16
	      });
	      var list = [];
	      map.travelRoute({
	        origin: [38.892428, -77.048454],
	        destination: [38.889497, -77.050181],
	        travelMode: 'walking',
	        step: (function (e) {
	          list.push({
	            instructions: e.instructions,
	            lat: e.end_location.lat(),
	            lng: e.end_location.lng(),
	            path: e.path
	          });
	        }).bind(this),
	        end: (function (e) {
	          var lat, lng, path;
	          var processList = (function (i) {
	            if (list.length === i) return;
	            lat = list[i].lat;
	            lng = list[i].lng;
	            path = list[i].path;
	            map.drawPolyline({
	              path: path,
	              strokeColor: '#FF6FCF',
	              strokeWeight: 8
	            });
	            processList(i + 1);
	          }).bind(this);
	          processList(0);
	        }).bind(this)
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        PanelContainer,
	        { collapseBottom: true },
	        React.createElement(
	          Panel,
	          null,
	          React.createElement(
	            PanelHeader,
	            null,
	            React.createElement(
	              'div',
	              { style: { padding: 25 } },
	              React.createElement('div', { id: 'routingmap', style: { height: 300 } }),
	              React.createElement(
	                'div',
	                { className: 'fg-black50 text-center', style: { borderBottom: '1px solid #ccc' } },
	                React.createElement(
	                  'h5',
	                  { style: { padding: 12.5, margin: 0 } },
	                  'WALK 0.3 MILES - FOR 6 MINUTES'
	                )
	              ),
	              React.createElement(
	                'div',
	                null,
	                React.createElement(
	                  'div',
	                  { className: 'map-dest', style: { marginBottom: 12.5 } },
	                  React.createElement(
	                    'h3',
	                    { className: 'fg-black50' },
	                    React.createElement(Icon, { glyph: 'icon-fontello-dot-circled', className: 'fg-darkgray' }),
	                    ' ',
	                    React.createElement(
	                      'span',
	                      null,
	                      'Albert Einstein Memorial'
	                    )
	                  ),
	                  React.createElement(
	                    'h5',
	                    null,
	                    '2101 Constitution Ave NW, Washington, DC 20418, United States'
	                  )
	                ),
	                React.createElement(
	                  'div',
	                  { className: 'map-tcontainer' },
	                  React.createElement(
	                    Table,
	                    { className: 'mapt', hover: true, collapsed: true },
	                    React.createElement(
	                      'tbody',
	                      null,
	                      React.createElement(
	                        'tr',
	                        null,
	                        React.createElement(
	                          'td',
	                          null,
	                          React.createElement(Icon, { className: 'fg-blue', glyph: 'icon-fontello-up-circle icon-2x' })
	                        ),
	                        React.createElement(
	                          'td',
	                          null,
	                          'Walk ',
	                          React.createElement(
	                            'strong',
	                            null,
	                            'east'
	                          ),
	                          ' on ',
	                          React.createElement(
	                            'strong',
	                            null,
	                            'Constitution Ave NW'
	                          ),
	                          ' towards ',
	                          React.createElement(
	                            'strong',
	                            null,
	                            'Henry Bacon Dr NW'
	                          )
	                        ),
	                        React.createElement(
	                          'td',
	                          { width: '75' },
	                          React.createElement(
	                            'small',
	                            null,
	                            '171 ft'
	                          )
	                        )
	                      ),
	                      React.createElement(
	                        'tr',
	                        null,
	                        React.createElement(
	                          'td',
	                          null,
	                          React.createElement(Icon, { className: 'fg-green', glyph: 'icon-fontello-right-circle icon-2x' })
	                        ),
	                        React.createElement(
	                          'td',
	                          null,
	                          'Turn ',
	                          React.createElement(
	                            'strong',
	                            null,
	                            'right'
	                          )
	                        ),
	                        React.createElement(
	                          'td',
	                          null,
	                          React.createElement(
	                            'small',
	                            null,
	                            '433 ft'
	                          )
	                        )
	                      ),
	                      React.createElement(
	                        'tr',
	                        null,
	                        React.createElement(
	                          'td',
	                          null,
	                          React.createElement(Icon, { className: 'fg-darkorange', glyph: 'icon-fontello-left-circle icon-2x' })
	                        ),
	                        React.createElement(
	                          'td',
	                          null,
	                          React.createElement(
	                            'div',
	                            null,
	                            'Follow the road ',
	                            React.createElement(
	                              'strong',
	                              null,
	                              'southeast'
	                            )
	                          ),
	                          React.createElement(
	                            'div',
	                            null,
	                            'Turn ',
	                            React.createElement(
	                              'strong',
	                              null,
	                              'left'
	                            ),
	                            ' ',
	                            React.createElement(
	                              'em',
	                              null,
	                              '(Slight turn)'
	                            )
	                          )
	                        ),
	                        React.createElement(
	                          'td',
	                          null,
	                          React.createElement(
	                            'small',
	                            null,
	                            '0.1 mi'
	                          )
	                        )
	                      ),
	                      React.createElement(
	                        'tr',
	                        null,
	                        React.createElement(
	                          'td',
	                          null,
	                          React.createElement(Icon, { className: 'fg-green', glyph: 'icon-fontello-right-circle icon-2x' })
	                        ),
	                        React.createElement(
	                          'td',
	                          null,
	                          'Turn right'
	                        ),
	                        React.createElement(
	                          'td',
	                          null,
	                          React.createElement(
	                            'small',
	                            null,
	                            '262 ft'
	                          )
	                        )
	                      )
	                    )
	                  )
	                ),
	                React.createElement(
	                  'div',
	                  { className: 'map-dest' },
	                  React.createElement(
	                    'h3',
	                    { className: 'fg-black50' },
	                    React.createElement(Icon, { glyph: 'icon-fontello-dot-circled' }),
	                    ' ',
	                    React.createElement(
	                      'span',
	                      null,
	                      'Lincoln Memorial'
	                    )
	                  ),
	                  React.createElement(
	                    'h5',
	                    { style: { marginBottom: 0 } },
	                    '2 Lincoln Memorial Cir NW, Washington, DC 20037, United States'
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return MapPanel;
	})(React.Component);

	var Body = (function (_React$Component15) {
	  _inherits(Body, _React$Component15);

	  function Body() {
	    _classCallCheck(this, Body);

	    _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Body, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Container,
	        { id: 'body' },
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 12 },
	              React.createElement(
	                PanelContainer,
	                null,
	                React.createElement(
	                  Panel,
	                  null,
	                  React.createElement(MainChart, null)
	                ),
	                React.createElement(
	                  Panel,
	                  { horizontal: true, className: 'force-collapse' },
	                  React.createElement(
	                    PanelLeft,
	                    { noRadius: true, className: 'bg-red fg-white tabs panel-sm-1' },
	                    React.createElement(
	                      TabContainer,
	                      { id: 'tab-1', className: 'plain' },
	                      React.createElement(
	                        TabList,
	                        null,
	                        React.createElement(
	                          Tab,
	                          { active: true },
	                          React.createElement(Icon, { bundle: 'fontello', glyph: 'chart-bar-5' })
	                        ),
	                        React.createElement(
	                          Tab,
	                          null,
	                          React.createElement(Icon, { glyph: 'icon-feather-toggle' })
	                        ),
	                        React.createElement(
	                          Tab,
	                          null,
	                          React.createElement(Icon, { glyph: 'icon-fontello-note-1' })
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    PanelBody,
	                    { className: 'panel-sm-4', style: { padding: 0 } },
	                    React.createElement(
	                      Grid,
	                      null,
	                      React.createElement(
	                        Row,
	                        null,
	                        React.createElement(
	                          Col,
	                          { xs: 12, collapseLeft: true, collapseRight: true },
	                          React.createElement(
	                            TabContent,
	                            { tabContainerID: 'tab-1' },
	                            React.createElement(
	                              TabPane,
	                              null,
	                              React.createElement(MaleFemaleChart, null)
	                            ),
	                            React.createElement(
	                              TabPane,
	                              null,
	                              React.createElement(SocialSwitches, null)
	                            ),
	                            React.createElement(
	                              TabPane,
	                              null,
	                              React.createElement(NotePanel, null)
	                            )
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    PanelRight,
	                    { noRadius: true, className: 'bg-lightgreen fg-white panel-sm-2' },
	                    React.createElement(RevenuePanel, null)
	                  ),
	                  React.createElement(
	                    PanelRight,
	                    { className: 'bg-green fg-green panel-sm-4' },
	                    React.createElement(
	                      Grid,
	                      null,
	                      React.createElement(LoadPanel, null),
	                      React.createElement(AlertChart, null)
	                    )
	                  )
	                )
	              )
	            )
	          ),
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 5, collapseRight: true },
	              React.createElement(
	                PanelContainer,
	                null,
	                React.createElement(
	                  Panel,
	                  null,
	                  React.createElement(
	                    PanelBody,
	                    { style: { padding: 0 } },
	                    React.createElement(
	                      Grid,
	                      null,
	                      React.createElement(
	                        Row,
	                        null,
	                        React.createElement(
	                          Col,
	                          { xs: 12, className: 'text-center', style: { padding: 25 } },
	                          React.createElement(RadarChartPanel, null)
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              React.createElement(
	                PanelContainer,
	                { controlStyles: 'bg-lightorange fg-davygray', collapseBottom: true },
	                React.createElement(
	                  Panel,
	                  null,
	                  React.createElement(
	                    PanelHeader,
	                    { className: 'bg-lightorange fg-darkorange fg-tab-active tabs' },
	                    React.createElement(
	                      TabContainer,
	                      { id: 'tab-2' },
	                      React.createElement(
	                        TabList,
	                        null,
	                        React.createElement(
	                          Tab,
	                          { active: true },
	                          React.createElement(Icon, { className: 'icon-1-and-quarter-x', bundle: 'feather', glyph: 'bar-graph-2' })
	                        ),
	                        React.createElement(
	                          Tab,
	                          null,
	                          React.createElement(Icon, { className: 'icon-1-and-quarter-x', glyph: 'icon-simple-line-icons-users' })
	                        ),
	                        React.createElement(
	                          Tab,
	                          null,
	                          React.createElement(Icon, { className: 'icon-1-and-quarter-x', bundle: 'feather', glyph: 'pie-graph' })
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    PanelBody,
	                    { style: { paddingTop: 0 } },
	                    React.createElement(
	                      TabContent,
	                      { tabContainerID: 'tab-2' },
	                      React.createElement(
	                        TabPane,
	                        null,
	                        React.createElement(OrdersComparisonPanel, null)
	                      ),
	                      React.createElement(
	                        TabPane,
	                        null,
	                        React.createElement(ContactListPanel, null)
	                      ),
	                      React.createElement(
	                        TabPane,
	                        null,
	                        React.createElement(TicketsPanel, null)
	                      )
	                    )
	                  )
	                )
	              )
	            ),
	            React.createElement(
	              Col,
	              { sm: 7 },
	              React.createElement(WeatherPanel, null),
	              React.createElement(MapPanel, null)
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Body;
	})(React.Component);

	var _default = (function (_React$Component16) {
	  _inherits(_default, _React$Component16);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])('dashboard', {
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(41);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(42);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(43);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(45);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(47);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var MerchantDetail = (function (_React$Component) {
	  _inherits(MerchantDetail, _React$Component);

	  function MerchantDetail(props) {
	    _classCallCheck(this, MerchantDetail);

	    _get(Object.getPrototypeOf(MerchantDetail.prototype), 'constructor', this).call(this, props);
	    this.state = {
	      follow: 'follow me',
	      followActive: false,
	      likeCount: 999,
	      likeActive: false,
	      likeTextStyle: 'fg-white'
	    };
	    this.merchant = {
	      name: 'FreshnClean Pastries',
	      dateRegistered: 'Nov 8th, 2015',
	      address: 'Labadi Accra, Greater Accra. Ghana',
	      slogan: '...fresh n clean always'
	    };
	    console.log(this.props.accountNo);
	    this.merchant.name = this.props.accountNo.accountNo;
	  }

	  _createClass(MerchantDetail, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      //Load merchant details using the accountno

	    }
	  }, {
	    key: 'handleFollow',
	    value: function handleFollow() {
	      this.setState({
	        follow: 'followed',
	        followActive: true
	      });
	    }
	  }, {
	    key: 'handleLike',
	    value: function handleLike() {
	      this.setState({
	        likeCount: 1000,
	        likeActive: true,
	        likeTextStyle: 'fg-orange75'
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { style: { height: 350, marginTop: -25, backgroundImage: 'url(/imgs/shots/Blick_auf_Manhattan.JPG)', backgroundSize: 'cover', position: 'relative', marginBottom: 25, backgroundPosition: 'center' } },
	        React.createElement('div', { className: 'social-cover', style: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)' } }),
	        React.createElement(
	          'div',
	          { className: 'social-desc' },
	          React.createElement(
	            'div',
	            null,
	            React.createElement(
	              'h1',
	              { className: 'fg-white' },
	              this.merchant.address
	            ),
	            React.createElement(
	              'h5',
	              { className: 'fg-white', style: { opacity: 0.8 } },
	              '- ',
	              this.merchant.dateRegistered
	            ),
	            React.createElement(
	              'div',
	              { style: { marginTop: 50 } },
	              React.createElement(
	                'div',
	                { style: { display: 'inline-block' } },
	                React.createElement(
	                  Button,
	                  { id: 'likeCount', retainBackground: true, rounded: true, bsStyle: 'orange75', active: this.state.likeActive, onClick: this.handleLike.bind(this) },
	                  React.createElement(Icon, { glyph: 'icon-fontello-heart-1' })
	                ),
	                React.createElement(
	                  Label,
	                  { className: 'social-like-count', htmlFor: 'likeCount' },
	                  React.createElement(
	                    'span',
	                    { className: this.state.likeTextStyle },
	                    this.state.likeCount,
	                    ' likes'
	                  )
	                )
	              )
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'social-avatar' },
	          React.createElement(Img, { src: '/imgs/avatars/avatar.jpg', height: '100', width: '100', style: { display: 'block', borderRadius: 100, border: '2px solid #fff', margin: 'auto', marginTop: 50 } }),
	          React.createElement(
	            'h4',
	            { className: 'fg-white text-center' },
	            this.merchant.name
	          ),
	          React.createElement(
	            'h5',
	            { className: 'fg-white text-center', style: { opacity: 0.8 } },
	            this.merchant.slogan
	          ),
	          React.createElement('hr', { className: 'border-black75', style: { borderWidth: 2 } }),
	          React.createElement(
	            'div',
	            { className: 'text-center' },
	            React.createElement(
	              Button,
	              { outlined: true, inverse: true, retainBackground: true, active: this.state.followActive, bsStyle: 'brightblue', onClick: this.handleFollow.bind(this) },
	              React.createElement(
	                'span',
	                null,
	                this.state.follow
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return MerchantDetail;
	})(React.Component);

	var Body = (function (_React$Component2) {
	  _inherits(Body, _React$Component2);

	  function Body() {
	    _classCallCheck(this, Body);

	    _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Body, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      console.log(this.props.accountNo);
	      $('html').addClass('social');
	      (function () {
	        // create a map in the "map" div, set the view to a given place and zoom
	        var map = L.map('map', {
	          scrollWheelZoom: false
	        }).setView([40.7127, -74.0059], 16);

	        // add an OpenStreetMap tile layer
	        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	        }).addTo(map);

	        // add a marker in the given location, attach some popup content to it and open the popup
	        L.marker([40.7127, -74.0059]).addTo(map).openPopup();
	      })();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      $('html').removeClass('social');
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return React.createElement(
	        Container,
	        { id: 'body', className: 'social' },
	        React.createElement(MerchantDetail, { accountNo: this.props.accountNo }),
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 6, collapseRight: true },
	              React.createElement(
	                PanelContainer,
	                null,
	                React.createElement(
	                  PanelBody,
	                  { style: { padding: 12.5 } },
	                  React.createElement(Textarea, { rows: '3', placeholder: 'What\'s on your mind?', style: { border: 'none' } })
	                ),
	                React.createElement(
	                  PanelFooter,
	                  { className: 'fg-black75 bg-gray', style: { padding: '12.5px 25px' } },
	                  React.createElement(
	                    Grid,
	                    null,
	                    React.createElement(
	                      Row,
	                      null,
	                      React.createElement(
	                        Col,
	                        { xs: 6, collapseLeft: true, collapseRight: true },
	                        React.createElement(
	                          'a',
	                          { href: '#', style: { border: 'none' } },
	                          React.createElement(Icon, { glyph: 'icon-dripicons-location icon-1-and-quarter-x fg-text', style: { marginRight: 25 } })
	                        ),
	                        React.createElement(
	                          'a',
	                          { href: '#', style: { border: 'none' } },
	                          React.createElement(Icon, { glyph: 'icon-dripicons-camera icon-1-and-quarter-x fg-text', style: { marginRight: 25 } })
	                        ),
	                        React.createElement(
	                          'a',
	                          { href: '#', style: { border: 'none' } },
	                          React.createElement(Icon, { glyph: 'icon-dripicons-calendar icon-1-and-quarter-x fg-text', style: { marginRight: 25 } })
	                        )
	                      ),
	                      React.createElement(
	                        Col,
	                        { xs: 6, className: 'text-right', collapseLeft: true, collapseRight: true },
	                        React.createElement(
	                          Button,
	                          { bsStyle: 'darkgreen45' },
	                          'send'
	                        )
	                      )
	                    )
	                  )
	                )
	              ),
	              React.createElement(
	                PanelContainer,
	                null,
	                React.createElement(
	                  PanelBody,
	                  { style: { padding: 25, paddingTop: 12.5 } },
	                  React.createElement(
	                    'div',
	                    { className: 'inbox-avatar' },
	                    React.createElement('img', { src: '/imgs/avatars/avatar7.png', width: '40', height: '40' }),
	                    React.createElement(
	                      'div',
	                      { className: 'inbox-avatar-name' },
	                      React.createElement(
	                        'div',
	                        { className: 'fg-darkgrayishblue75' },
	                        'Toby King'
	                      ),
	                      React.createElement(
	                        'div',
	                        { className: 'fg-text' },
	                        React.createElement(
	                          'small',
	                          null,
	                          'Wisconsin, USA'
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'inbox-date hidden-sm hidden-xs fg-text text-right' },
	                      React.createElement(
	                        'div',
	                        { style: { position: 'relative', top: 0 } },
	                        React.createElement(Icon, { glyph: 'icon-fontello-anchor icon-1-and-quarter-x' })
	                      ),
	                      React.createElement(
	                        'div',
	                        { style: { position: 'relative', top: -10 } },
	                        React.createElement(
	                          'small',
	                          null,
	                          React.createElement(
	                            'strong',
	                            null,
	                            '2 hours ago'
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                      'div',
	                      { className: 'fg-text' },
	                      "I'll be out of my mind and you'll be out of ideas pretty soon. So let's spend the afternoon in a cold hot air balloon. Leave your jacket behind. Lean out and touch the tree tops over town. I can't wait to kiss the ground wherever we touch back down."
	                    )
	                  ),
	                  React.createElement(
	                    'div',
	                    { style: { margin: -25, marginTop: 25 } },
	                    React.createElement(Img, { responsive: true, src: '/imgs/gallery/tumblr_n8zm8ndGiY1st5lhmo1_1280.jpg' })
	                  )
	                ),
	                React.createElement(
	                  PanelFooter,
	                  { noRadius: true, className: 'fg-black75 bg-gray', style: { padding: '12.5px 25px', margin: 0 } },
	                  React.createElement(
	                    Grid,
	                    { className: 'fg-text' },
	                    React.createElement(
	                      Row,
	                      null,
	                      React.createElement(
	                        Col,
	                        { xs: 6, collapseLeft: true, collapseRight: true },
	                        React.createElement(
	                          'a',
	                          { href: '#', className: 'fg-text', style: { border: 'none', marginRight: 25 } },
	                          React.createElement(Icon, { glyph: 'icon-dripicons-thumbs-up icon-1-and-quarter-x' }),
	                          React.createElement(
	                            'span',
	                            { style: { position: 'relative', top: -2, left: 3 } },
	                            'Like'
	                          )
	                        )
	                      ),
	                      React.createElement(
	                        Col,
	                        { xs: 6, className: 'text-right', collapseLeft: true, collapseRight: true },
	                        React.createElement(
	                          'span',
	                          { style: { top: 5, position: 'relative' } },
	                          React.createElement(
	                            'strong',
	                            null,
	                            '523'
	                          ),
	                          ' people like this'
	                        )
	                      )
	                    )
	                  )
	                ),
	                React.createElement(
	                  PanelFooter,
	                  { style: { padding: 25, paddingTop: 0, paddingBottom: 0 } },
	                  React.createElement(
	                    'div',
	                    { className: 'inbox-avatar', style: { borderBottom: '1px solid #EAEDF1' } },
	                    React.createElement('img', { src: '/imgs/avatars/avatar0.png', width: '30', height: '30', style: { verticalAlign: 'top', top: 10, position: 'relative' } }),
	                    React.createElement(
	                      'div',
	                      { className: 'inbox-avatar-name' },
	                      React.createElement(
	                        'div',
	                        { className: 'fg-darkgrayishblue75' },
	                        'Anna Sanchez'
	                      ),
	                      React.createElement(
	                        'div',
	                        { className: 'fg-text' },
	                        React.createElement(
	                          'small',
	                          null,
	                          'Nice!'
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'inbox-date hidden-sm hidden-xs fg-text text-right' },
	                      React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                          'small',
	                          null,
	                          React.createElement(
	                            'strong',
	                            null,
	                            '22 minutes ago'
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    'div',
	                    { className: 'inbox-avatar', style: { borderBottom: '1px solid #EAEDF1' } },
	                    React.createElement('img', { src: '/imgs/avatars/avatar9.png', width: '30', height: '30', style: { verticalAlign: 'top', top: 10, position: 'relative' } }),
	                    React.createElement(
	                      'div',
	                      { className: 'inbox-avatar-name' },
	                      React.createElement(
	                        'div',
	                        { className: 'fg-darkgrayishblue75' },
	                        'Ava Parry'
	                      ),
	                      React.createElement(
	                        'div',
	                        { className: 'fg-text' },
	                        React.createElement(
	                          'small',
	                          null,
	                          'Woah! Beautiful pic and beautiful quote! Whats the source?'
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'inbox-date hidden-sm hidden-xs fg-text text-right' },
	                      React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                          'small',
	                          null,
	                          React.createElement(
	                            'strong',
	                            null,
	                            '2 minutes ago'
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    'div',
	                    { className: 'inbox-avatar', style: { borderBottom: '1px solid #EAEDF1' } },
	                    React.createElement('img', { src: '/imgs/avatars/avatar7.png', width: '30', height: '30', style: { verticalAlign: 'top', top: 10, position: 'relative' } }),
	                    React.createElement(
	                      'div',
	                      { className: 'inbox-avatar-name' },
	                      React.createElement(
	                        'div',
	                        { className: 'fg-darkgrayishblue75' },
	                        'Ava Parry'
	                      ),
	                      React.createElement(
	                        'div',
	                        { className: 'fg-text' },
	                        React.createElement(
	                          'small',
	                          null,
	                          'Thanks guys! Appreciate! :)'
	                        )
	                      ),
	                      React.createElement(
	                        'div',
	                        { className: 'fg-text' },
	                        React.createElement(
	                          'small',
	                          null,
	                          'Source: ',
	                          React.createElement(
	                            'em',
	                            null,
	                            'Owl City, Ocean Eyes'
	                          )
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'inbox-date hidden-sm hidden-xs fg-text text-right' },
	                      React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                          'small',
	                          null,
	                          React.createElement(
	                            'strong',
	                            null,
	                            'few seconds ago'
	                          )
	                        )
	                      )
	                    )
	                  )
	                ),
	                React.createElement(
	                  PanelFooter,
	                  { style: { padding: 12.5 } },
	                  React.createElement(Textarea, { rows: '1', placeholder: 'Write a comment...', style: { border: 'none' } })
	                )
	              )
	            ),
	            React.createElement(
	              Col,
	              { sm: 6 },
	              React.createElement(
	                PanelContainer,
	                null,
	                React.createElement(
	                  PanelBody,
	                  { style: { padding: 25, paddingTop: 12.5 } },
	                  React.createElement(
	                    'div',
	                    { className: 'inbox-avatar' },
	                    React.createElement('img', { src: '/imgs/avatars/avatar5.png', width: '40', height: '40' }),
	                    React.createElement(
	                      'div',
	                      { className: 'inbox-avatar-name' },
	                      React.createElement(
	                        'div',
	                        { className: 'fg-darkgrayishblue75' },
	                        'Jordyn Ouellet created an event'
	                      ),
	                      React.createElement(
	                        'div',
	                        { className: 'fg-text' },
	                        React.createElement(
	                          'small',
	                          null,
	                          'Austin, USA'
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'inbox-date hidden-sm hidden-xs fg-text text-right' },
	                      React.createElement(
	                        'div',
	                        { style: { position: 'relative', top: 0 } },
	                        React.createElement(Icon, { glyph: 'icon-ikons-calendar icon-1-and-quarter-x' })
	                      ),
	                      React.createElement(
	                        'div',
	                        { style: { position: 'relative', top: -10 } },
	                        React.createElement(
	                          'small',
	                          null,
	                          React.createElement(
	                            'strong',
	                            null,
	                            '3 hours ago'
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                      'div',
	                      { className: 'fg-darkgreen45' },
	                      React.createElement(
	                        'strong',
	                        null,
	                        'Birthday party on my Yacht in New York.'
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'fg-text' },
	                      'July 10 at 10:00pm'
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'fg-text' },
	                      'New York, USA'
	                    )
	                  ),
	                  React.createElement(
	                    'div',
	                    { style: { margin: -25, marginTop: 25 } },
	                    React.createElement(
	                      'div',
	                      null,
	                      React.createElement('div', { id: 'map', className: 'map leaflet-container leaflet-fade-anim', style: { height: 300 } })
	                    )
	                  )
	                ),
	                React.createElement(
	                  PanelFooter,
	                  { noRadius: true, className: 'fg-black75 bg-gray', style: { padding: '12.5px 25px', margin: 0 } },
	                  React.createElement(
	                    Grid,
	                    { className: 'fg-text' },
	                    React.createElement(
	                      Row,
	                      null,
	                      React.createElement(
	                        Col,
	                        { xs: 6, collapseLeft: true, collapseRight: true },
	                        React.createElement(
	                          'a',
	                          { href: '#', className: 'fg-text', style: { border: 'none', marginRight: 25 } },
	                          React.createElement(Icon, { glyph: 'icon-dripicons-thumbs-up icon-1-and-quarter-x' }),
	                          React.createElement(
	                            'span',
	                            { style: { position: 'relative', top: -2, left: 3 } },
	                            'Like'
	                          )
	                        )
	                      ),
	                      React.createElement(
	                        Col,
	                        { xs: 6, className: 'text-right', collapseLeft: true, collapseRight: true },
	                        React.createElement(
	                          'span',
	                          { style: { top: 5, position: 'relative' } },
	                          React.createElement(
	                            'strong',
	                            null,
	                            '600'
	                          ),
	                          ' people like this'
	                        )
	                      )
	                    )
	                  )
	                ),
	                React.createElement(
	                  PanelFooter,
	                  { style: { padding: 12.5 } },
	                  React.createElement(Textarea, { rows: '1', placeholder: 'Write a comment...', style: { border: 'none' } })
	                )
	              ),
	              React.createElement(
	                PanelContainer,
	                null,
	                React.createElement(
	                  PanelBody,
	                  { style: { padding: 25, paddingTop: 12.5 } },
	                  React.createElement(
	                    'div',
	                    { className: 'inbox-avatar' },
	                    React.createElement('img', { src: '/imgs/avatars/avatar9.png', width: '40', height: '40' }),
	                    React.createElement(
	                      'div',
	                      { className: 'inbox-avatar-name' },
	                      React.createElement(
	                        'div',
	                        { className: 'fg-darkgrayishblue75' },
	                        'Ava Parry'
	                      ),
	                      React.createElement(
	                        'div',
	                        { className: 'fg-text' },
	                        React.createElement(
	                          'small',
	                          null,
	                          'Massachusetts, USA'
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'inbox-date hidden-sm hidden-xs fg-text text-right' },
	                      React.createElement(
	                        'div',
	                        { style: { position: 'relative', top: 0 } },
	                        React.createElement(Icon, { glyph: 'icon-feather-video icon-1-and-quarter-x' })
	                      ),
	                      React.createElement(
	                        'div',
	                        { style: { position: 'relative', top: -10 } },
	                        React.createElement(
	                          'small',
	                          null,
	                          React.createElement(
	                            'strong',
	                            null,
	                            '4 hours ago'
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                      'div',
	                      { className: 'fg-darkgreen45' },
	                      React.createElement(
	                        'strong',
	                        null,
	                        '1983 Historic Apple Keynote by Steve Jobs'
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    'div',
	                    { style: { margin: -25, marginTop: 25 } },
	                    React.createElement(
	                      'div',
	                      { className: 'embed-responsive embed-responsive-16by9' },
	                      React.createElement('iframe', { className: 'embed-responsive-item', src: '//www.youtube.com/embed/lSiQA6KKyJo?rel=0', allowFullScreen: true })
	                    )
	                  )
	                ),
	                React.createElement(
	                  PanelFooter,
	                  { noRadius: true, className: 'fg-black75 bg-gray', style: { padding: '12.5px 25px', margin: 0 } },
	                  React.createElement(
	                    Grid,
	                    { className: 'fg-text' },
	                    React.createElement(
	                      Row,
	                      null,
	                      React.createElement(
	                        Col,
	                        { xs: 6, collapseLeft: true, collapseRight: true },
	                        React.createElement(
	                          'a',
	                          { href: '#', className: 'fg-text', style: { border: 'none', marginRight: 25 } },
	                          React.createElement(Icon, { glyph: 'icon-dripicons-thumbs-up icon-1-and-quarter-x' }),
	                          React.createElement(
	                            'span',
	                            { style: { position: 'relative', top: -2, left: 3 } },
	                            'Like'
	                          )
	                        )
	                      ),
	                      React.createElement(
	                        Col,
	                        { xs: 6, className: 'text-right', collapseLeft: true, collapseRight: true },
	                        React.createElement(
	                          'span',
	                          { style: { top: 5, position: 'relative' } },
	                          React.createElement(
	                            'strong',
	                            null,
	                            '4,350'
	                          ),
	                          ' people like this'
	                        )
	                      )
	                    )
	                  )
	                ),
	                React.createElement(
	                  PanelFooter,
	                  { style: { padding: 25, paddingTop: 0, paddingBottom: 0 } },
	                  React.createElement(
	                    'div',
	                    { className: 'inbox-avatar', style: { borderBottom: '1px solid #EAEDF1' } },
	                    React.createElement('img', { src: '/imgs/avatars/avatar0.png', width: '30', height: '30', style: { verticalAlign: 'top', top: 10, position: 'relative' } }),
	                    React.createElement(
	                      'div',
	                      { className: 'inbox-avatar-name' },
	                      React.createElement(
	                        'div',
	                        { className: 'fg-darkgrayishblue75' },
	                        'Anna Sanchez'
	                      ),
	                      React.createElement(
	                        'div',
	                        { className: 'fg-text' },
	                        React.createElement(
	                          'small',
	                          null,
	                          'Love this! It also features the Superbowl ad'
	                        )
	                      ),
	                      React.createElement(
	                        'div',
	                        { className: 'fg-text', style: { marginTop: -5 } },
	                        React.createElement(
	                          'small',
	                          null,
	                          'which is considered the greatest ad of all time!'
	                        )
	                      ),
	                      React.createElement(
	                        'div',
	                        { className: 'fg-text' },
	                        React.createElement(
	                          'small',
	                          null,
	                          'Thanks for sharing!'
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'inbox-date hidden-sm hidden-xs fg-text text-right' },
	                      React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                          'small',
	                          null,
	                          React.createElement(
	                            'strong',
	                            null,
	                            '4 hours ago'
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    'div',
	                    { className: 'inbox-avatar', style: { borderBottom: '1px solid #EAEDF1' } },
	                    React.createElement('img', { src: '/imgs/avatars/avatar9.png', width: '30', height: '30', style: { verticalAlign: 'top', top: 10, position: 'relative' } }),
	                    React.createElement(
	                      'div',
	                      { className: 'inbox-avatar-name' },
	                      React.createElement(
	                        'div',
	                        { className: 'fg-darkgrayishblue75' },
	                        'Ava Parry'
	                      ),
	                      React.createElement(
	                        'div',
	                        { className: 'fg-text' },
	                        React.createElement(
	                          'small',
	                          null,
	                          React.createElement(
	                            'strong',
	                            null,
	                            'Welcome! :)'
	                          )
	                        )
	                      )
	                    ),
	                    React.createElement(
	                      'div',
	                      { className: 'inbox-date hidden-sm hidden-xs fg-text text-right' },
	                      React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                          'small',
	                          null,
	                          React.createElement(
	                            'strong',
	                            null,
	                            '4 hours ago'
	                          )
	                        )
	                      )
	                    )
	                  )
	                ),
	                React.createElement(
	                  PanelFooter,
	                  { style: { padding: 12.5 } },
	                  React.createElement(Textarea, { rows: '1', placeholder: 'Write a comment...', style: { border: 'none' } })
	                )
	              )
	            )
	          )
	        ),
	        this.props.children
	      );
	    }
	  }]);

	  return Body;
	})(React.Component);

	var _default = (function (_React$Component3) {
	  _inherits(_default, _React$Component3);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({
	        'container-open': this.props.open
	      });
	      //console.log(this.props.params);

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, { accountNo: this.props.params }),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _classnames = __webpack_require__(41);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(42);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(43);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(45);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(47);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var _reactRouter = __webpack_require__(4);

	var Body = (function (_React$Component) {
	  _inherits(Body, _React$Component);

	  function Body() {
	    _classCallCheck(this, Body);

	    _get(Object.getPrototypeOf(Body.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Body, [{
	    key: 'loadData',
	    value: function loadData() {}
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.loadData();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var table = $('#merchantdt').DataTable();
	      var lastIdx = null;
	      $('#merchantdt').addClass('nowrap').dataTable({
	        responsive: true,
	        fnDrawCallback: function fnDrawCallback() {
	          self.forceUpdate();
	        },
	        bAutoWidth: false,
	        bDestroy: true,
	        processing: true,
	        serverSide: true,
	        ajax: 'merchants/list',
	        columnDefs: [{ targets: [-4, -5, -6], className: 'dt-body-right' }]
	      });

	      $('#merchantdt tbody tr').dblclick(function () {
	        var row = $(this).find('td');
	        //console.log("Specific cell content: " + $(row[0]).text());

	        //document.location.href = '/app/merchants/details/'+$(row[0]).text();
	      });
	      $('#merchantdt tbody tr').hover(function () {
	        $(this).css('cursor', 'pointer');
	      }, function () {
	        $(this).css('cursor', 'auto');
	      });
	      $('#merchantdt tbody').on('click', 'tr', function () {
	        if ($(this).hasClass('selected')) {
	          $(this).removeClass('selected');
	        } else {
	          table.$('tr.selected').removeClass('selected');
	          $(this).addClass('selected');
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Container,
	        { id: 'body' },
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 12 },
	              React.createElement(
	                PanelContainer,
	                { controlStyles: 'bg-blue fg-white' },
	                React.createElement(
	                  Panel,
	                  null,
	                  React.createElement(
	                    PanelHeader,
	                    { className: 'bg-blue' },
	                    React.createElement(
	                      Grid,
	                      null,
	                      React.createElement(
	                        Row,
	                        null,
	                        React.createElement(
	                          Col,
	                          { xs: 12, className: 'fg-white' },
	                          React.createElement(
	                            'h3',
	                            null,
	                            'Merchant Listing'
	                          ),
	                          React.createElement(
	                            'h6',
	                            null,
	                            'Type in the name or wallet number of any Merchant to search ...'
	                          )
	                        )
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    PanelBody,
	                    null,
	                    React.createElement(
	                      Grid,
	                      null,
	                      React.createElement(
	                        Row,
	                        null,
	                        React.createElement(
	                          Col,
	                          { xs: 12 },
	                          React.createElement(
	                            PanelContainer,
	                            null,
	                            React.createElement(
	                              Panel,
	                              null,
	                              React.createElement(
	                                PanelBody,
	                                null,
	                                React.createElement(
	                                  Grid,
	                                  null,
	                                  React.createElement(
	                                    Row,
	                                    null,
	                                    React.createElement(
	                                      Col,
	                                      { xs: 12 },
	                                      React.createElement(
	                                        Table,
	                                        { id: 'merchantdt', className: 'display', cellSpacing: '0', width: '100%' },
	                                        React.createElement(
	                                          'thead',
	                                          null,
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'th',
	                                              null,
	                                              'Account'
	                                            ),
	                                            React.createElement(
	                                              'th',
	                                              null,
	                                              'Name'
	                                            ),
	                                            React.createElement(
	                                              'th',
	                                              null,
	                                              'Address'
	                                            ),
	                                            React.createElement(
	                                              'th',
	                                              null,
	                                              'Phone'
	                                            ),
	                                            React.createElement(
	                                              'th',
	                                              null,
	                                              'Date Registered'
	                                            ),
	                                            React.createElement(
	                                              'th',
	                                              null,
	                                              'Trans. Count'
	                                            )
	                                          )
	                                        ),
	                                        React.createElement(
	                                          'tfoot',
	                                          null,
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'th',
	                                              null,
	                                              'Account'
	                                            ),
	                                            React.createElement(
	                                              'th',
	                                              null,
	                                              'Name'
	                                            ),
	                                            React.createElement(
	                                              'th',
	                                              null,
	                                              'Address'
	                                            ),
	                                            React.createElement(
	                                              'th',
	                                              null,
	                                              'Phone'
	                                            ),
	                                            React.createElement(
	                                              'th',
	                                              null,
	                                              'Date Registered'
	                                            ),
	                                            React.createElement(
	                                              'th',
	                                              null,
	                                              'Trans. Count'
	                                            )
	                                          )
	                                        ),
	                                        React.createElement(
	                                          'tbody',
	                                          null,
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              React.createElement(
	                                                _reactRouter.Link,
	                                                { to: '/app/merchants/details/Tiger Nixon' },
	                                                'Tiger Nixon'
	                                              )
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'System Architect'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Edinburgh'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '61'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2011/04/25'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$320,800'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              React.createElement(
	                                                _reactRouter.Link,
	                                                { to: '/app/merchants/details/Garrett Winters' },
	                                                'Garrett Winters'
	                                              )
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Accountant'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Tokyo'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '63'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2011/07/25'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$170,750'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              React.createElement(
	                                                _reactRouter.Link,
	                                                { to: '/app/merchants/details/Ashton Cox' },
	                                                'Ashton Cox'
	                                              )
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Junior Technical Author'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'San Francisco'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '66'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2009/01/12'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$86,000'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Cedric Kelly'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Senior Javascript Developer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Edinburgh'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '22'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2012/03/29'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$433,060'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Airi Satou'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Accountant'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Tokyo'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '33'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2008/11/28'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$162,700'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Brielle Williamson'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Integration Specialist'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'New York'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '61'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2012/12/02'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$372,000'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Herrod Chandler'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Sales Assistant'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'San Francisco'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '59'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2012/08/06'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$137,500'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Rhona Davidson'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Integration Specialist'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Tokyo'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '55'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2010/10/14'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$327,900'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Colleen Hurst'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Javascript Developer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'San Francisco'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '39'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2009/09/15'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$205,500'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Sonya Frost'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Software Engineer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Edinburgh'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '23'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2008/12/13'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$103,600'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Jena Gaines'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Office Manager'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'London'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '30'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2008/12/19'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$90,560'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Quinn Flynn'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Support Lead'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Edinburgh'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '22'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2013/03/03'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$342,000'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Charde Marshall'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Regional Director'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'San Francisco'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '36'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2008/10/16'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$470,600'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Haley Kennedy'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Senior Marketing Designer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'London'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '43'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2012/12/18'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$313,500'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Tatyana Fitzpatrick'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Regional Director'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'London'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '19'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2010/03/17'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$385,750'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Michael Silva'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Marketing Designer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'London'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '66'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2012/11/27'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$198,500'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Paul Byrd'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Chief Financial Officer (CFO)'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'New York'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '64'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2010/06/09'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$725,000'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Gloria Little'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Systems Administrator'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'New York'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '59'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2009/04/10'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$237,500'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Bradley Greer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Software Engineer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'London'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '41'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2012/10/13'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$132,000'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Dai Rios'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Personnel Lead'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Edinburgh'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '35'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2012/09/26'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$217,500'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Jenette Caldwell'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Development Lead'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'New York'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '30'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2011/09/03'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$345,000'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Yuri Berry'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Chief Marketing Officer (CMO)'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'New York'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '40'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2009/06/25'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$675,000'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Caesar Vance'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Pre-Sales Support'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'New York'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '21'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2011/12/12'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$106,450'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Doris Wilder'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Sales Assistant'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Sidney'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '23'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2010/09/20'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$85,600'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Angelica Ramos'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Chief Executive Officer (CEO)'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'London'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '47'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2009/10/09'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$1,200,000'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Gavin Joyce'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Developer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Edinburgh'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '42'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2010/12/22'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$92,575'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Jennifer Chang'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Regional Director'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Singapore'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '28'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2010/11/14'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$357,650'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Brenden Wagner'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Software Engineer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'San Francisco'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '28'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2011/06/07'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$206,850'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Fiona Green'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Chief Operating Officer (COO)'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'San Francisco'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '48'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2010/03/11'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$850,000'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Shou Itou'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Regional Marketing'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Tokyo'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '20'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2011/08/14'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$163,000'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Michelle House'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Integration Specialist'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Sidney'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '37'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2011/06/02'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$95,400'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Suki Burks'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Developer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'London'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '53'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2009/10/22'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$114,500'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Prescott Bartlett'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Technical Author'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'London'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '27'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2011/05/07'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$145,000'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Gavin Cortez'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Team Leader'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'San Francisco'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '22'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2008/10/26'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$235,500'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Martena Mccray'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Post-Sales support'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Edinburgh'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '46'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2011/03/09'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$324,050'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Unity Butler'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Marketing Designer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'San Francisco'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '47'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2009/12/09'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$85,675'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Howard Hatfield'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Office Manager'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'San Francisco'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '51'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2008/12/16'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$164,500'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Hope Fuentes'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Secretary'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'San Francisco'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '41'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2010/02/12'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$109,850'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Vivian Harrell'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Financial Controller'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'San Francisco'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '62'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2009/02/14'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$452,500'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Timothy Mooney'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Office Manager'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'London'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '37'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2008/12/11'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$136,200'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Jackson Bradshaw'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Director'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'New York'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '65'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2008/09/26'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$645,750'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Olivia Liang'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Support Engineer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Singapore'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '64'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2011/02/03'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$234,500'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Bruno Nash'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Software Engineer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'London'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '38'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2011/05/03'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$163,500'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Sakura Yamamoto'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Support Engineer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Tokyo'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '37'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2009/08/19'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$139,575'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Thor Walton'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Developer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'New York'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '61'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2013/08/11'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$98,540'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Finn Camacho'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Support Engineer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'San Francisco'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '47'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2009/07/07'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$87,500'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Serge Baldwin'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Data Coordinator'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Singapore'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '64'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2012/04/09'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$138,575'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Zenaida Frank'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Software Engineer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'New York'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '63'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2010/01/04'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$125,250'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Zorita Serrano'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Software Engineer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'San Francisco'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '56'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2012/06/01'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$115,000'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Jennifer Acosta'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Junior Javascript Developer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Edinburgh'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '43'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2013/02/01'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$75,650'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Cara Stevens'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Sales Assistant'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'New York'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '46'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2011/12/06'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$145,600'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Hermione Butler'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Regional Director'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'London'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '47'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2011/03/21'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$356,250'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Lael Greer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Systems Administrator'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'London'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '21'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2009/02/27'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$103,500'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Jonas Alexander'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Developer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'San Francisco'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '30'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2010/07/14'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$86,500'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Shad Decker'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Regional Director'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Edinburgh'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '51'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2008/11/13'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$183,000'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Michael Bruce'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Javascript Developer'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Singapore'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '29'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2011/06/27'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$183,000'
	                                            )
	                                          ),
	                                          React.createElement(
	                                            'tr',
	                                            null,
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Donna Snider'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'Customer Support'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              'New York'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '27'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '2011/01/25'
	                                            ),
	                                            React.createElement(
	                                              'td',
	                                              null,
	                                              '$112,000'
	                                            )
	                                          )
	                                        )
	                                      ),
	                                      React.createElement('br', null)
	                                    )
	                                  )
	                                )
	                              )
	                            )
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Body;
	})(React.Component);

	var _default = (function (_React$Component2) {
	  _inherits(_default, _React$Component2);

	  function _default() {
	    _classCallCheck(this, _default2);

	    _get(Object.getPrototypeOf(_default2.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(_default, [{
	    key: 'render',
	    value: function render() {
	      var classes = (0, _classnames2['default'])({
	        'container-open': this.props.open
	      });

	      return React.createElement(
	        Container,
	        { id: 'container', className: classes },
	        React.createElement(_commonSidebar2['default'], null),
	        React.createElement(_commonHeader2['default'], null),
	        React.createElement(Body, null),
	        React.createElement(_commonFooter2['default'], null)
	      );
	    }
	  }]);

	  var _default2 = _default;
	  _default = (0, _globalJsxSidebar_component2['default'])(_default) || _default;
	  return _default;
	})(React.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactRouter = __webpack_require__(4);

	//import Location from 'react-router/lib/Location';

	var _history = __webpack_require__(53);

	var location = (0, _history.createLocation)();

	if (window.hasOwnProperty('vex')) {
	  vex.defaultOptions.className = 'vex-theme-flat-attack';
	}

	var onUpdate = function onUpdate(notReady) {
	  // cleanup (do not modify)
	  rubix_bootstrap.core.reset_globals_BANG_();
	  if (window.Rubix) window.Rubix.Cleanup();

	  Pace.restart();
	  if (window.hasOwnProperty('ga') && typeof window.ga === 'function') {
	    window.ga('send', 'pageview', {
	      'page': window.location.pathname + window.location.search + window.location.hash
	    });
	  }

	  if (!notReady) {
	    // l20n initialized only after everything is rendered/updated
	    l20n.ready();
	    setTimeout(function () {
	      $('body').removeClass('fade-out');
	    }, 500);
	  }
	};

	var InitializeRouter = function InitializeRouter(routes) {
	  onUpdate(true);
	  var rootInstance = React.render(routes, document.getElementById('app-container'), function () {
	    // l20n initialized only after everything is rendered/updated
	    l20n.ready();
	    setTimeout(function () {
	      $('body').removeClass('fade-out');
	    }, 500);
	  });

	  // initialize react-hot-loader
	  if (false) {
	    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
	      getRootInstances: function getRootInstances() {
	        // Help React Hot Loader figure out the root component instances on the page:
	        return [rootInstance];
	      }
	    });
	  }
	};

	module.exports = function (routes) {
	  if ('document' in window) {
	    InitializeRouter(routes(true, onUpdate));
	  } else {
	    // called only server side!
	    if (false) {
	      global.StaticComponent = React.createClass({
	        displayName: 'StaticComponent',

	        render: function render() {
	          var Handler = null;
	          var location = (0, _history.createLocation)(this.props.path, this.props.query);
	          ReactBootstrap.Dispatcher.removeAllListeners();
	          rubix_bootstrap.core.reset_globals_BANG_();
	          _reactRouter.Router.run(routes(false), location, function (e, i, t) {
	            Handler = React.createElement(_reactRouter.Router, i);
	          });
	          return Handler;
	        }
	      });
	    } else {
	      return function () {
	        ReactBootstrap.Dispatcher.removeAllListeners();
	        rubix_bootstrap.core.reset_globals_BANG_();
	        return routes(false);
	      };
	    }
	  }
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deprecate = __webpack_require__(54);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _createLocation2 = __webpack_require__(55);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	var _createBrowserHistory = __webpack_require__(60);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	exports.createHistory = _createBrowserHistory2['default'];

	var _createHashHistory2 = __webpack_require__(72);

	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

	exports.createHashHistory = _createHashHistory3['default'];

	var _createMemoryHistory2 = __webpack_require__(73);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	exports.createMemoryHistory = _createMemoryHistory3['default'];

	var _useBasename2 = __webpack_require__(74);

	var _useBasename3 = _interopRequireDefault(_useBasename2);

	exports.useBasename = _useBasename3['default'];

	var _useBeforeUnload2 = __webpack_require__(75);

	var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);

	exports.useBeforeUnload = _useBeforeUnload3['default'];

	var _useQueries2 = __webpack_require__(76);

	var _useQueries3 = _interopRequireDefault(_useQueries2);

	exports.useQueries = _useQueries3['default'];

	var _Actions2 = __webpack_require__(56);

	var _Actions3 = _interopRequireDefault(_Actions2);

	exports.Actions = _Actions3['default'];

	// deprecated

	var _enableBeforeUnload2 = __webpack_require__(79);

	var _enableBeforeUnload3 = _interopRequireDefault(_enableBeforeUnload2);

	exports.enableBeforeUnload = _enableBeforeUnload3['default'];

	var _enableQueries2 = __webpack_require__(80);

	var _enableQueries3 = _interopRequireDefault(_enableQueries2);

	exports.enableQueries = _enableQueries3['default'];
	var createLocation = _deprecate2['default'](_createLocation3['default'], 'Using createLocation without a history instance is deprecated; please use history.createLocation instead');
	exports.createLocation = createLocation;

/***/ },
/* 54 */
/***/ function(module, exports) {

	//import warning from 'warning'

	"use strict";

	exports.__esModule = true;
	function deprecate(fn) {
	  return fn;
	  //return function () {
	  //  warning(false, '[history] ' + message)
	  //  return fn.apply(this, arguments)
	  //}
	}

	exports["default"] = deprecate;
	module.exports = exports["default"];

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	//import warning from 'warning'
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Actions = __webpack_require__(56);

	var _parsePath = __webpack_require__(57);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	function createLocation() {
	  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	  if (typeof location === 'string') location = _parsePath2['default'](location);

	  if (typeof action === 'object') {
	    //warning(
	    //  false,
	    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
	    //  'location descriptor instead'
	    //)

	    location = _extends({}, location, { state: action });

	    action = key || _Actions.POP;
	    key = _fourthArg;
	  }

	  var pathname = location.pathname || '/';
	  var search = location.search || '';
	  var hash = location.hash || '';
	  var state = location.state || null;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}

	exports['default'] = createLocation;
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';

	exports.__esModule = true;
	var PUSH = 'PUSH';

	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';

	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';

	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(58);

	var _warning2 = _interopRequireDefault(_warning);

	var _extractPath = __webpack_require__(59);

	var _extractPath2 = _interopRequireDefault(_extractPath);

	function parsePath(path) {
	  var pathname = _extractPath2['default'](path);
	  var search = '';
	  var hash = '';

	  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	}

	exports['default'] = parsePath;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 59 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);

	  if (match == null) return string;

	  return string.substring(match[0].length);
	}

	exports["default"] = extractPath;
	module.exports = exports["default"];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(61);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(56);

	var _ExecutionEnvironment = __webpack_require__(62);

	var _DOMUtils = __webpack_require__(63);

	var _DOMStateStorage = __webpack_require__(64);

	var _createDOMHistory = __webpack_require__(65);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	var _parsePath = __webpack_require__(57);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

	  var forceRefresh = options.forceRefresh;

	  var isSupported = _DOMUtils.supportsHistory();
	  var useRefresh = !isSupported || forceRefresh;

	  function getCurrentLocation(historyState) {
	    historyState = historyState || window.history.state || {};

	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;

	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();

	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
	    }

	    var location = _parsePath2['default'](path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	      transitionTo(getCurrentLocation(event.state));
	    }

	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    _DOMStateStorage.saveState(key, state);

	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };

	    if (action === _Actions.PUSH) {
	      if (useRefresh) {
	        window.location.href = path;
	        return false; // Prevent location update.
	      } else {
	          window.history.pushState(historyState, null, path);
	        }
	    } else {
	      // REPLACE
	      if (useRefresh) {
	        window.location.replace(path);
	        return false; // Prevent location update.
	      } else {
	          window.history.replaceState(historyState, null, path);
	        }
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopPopStateListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopPopStateListener();
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}

	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}

	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search + window.location.hash;
	}

	function go(n) {
	  if (n) window.history.go(n);
	}

	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  // FIXME: Work around our browser history not working correctly on Chrome
	  // iOS: https://github.com/rackt/react-router/issues/2565
	  if (ua.indexOf('CriOS') !== -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */

	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*eslint-disable no-empty */
	'use strict';

	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(58);

	var _warning2 = _interopRequireDefault(_warning);

	var KeyPrefix = '@@History/';
	var QuotaExceededError = 'QuotaExceededError';
	var SecurityError = 'SecurityError';

	function createKey(key) {
	  return KeyPrefix + key;
	}

	function saveState(key, state) {
	  try {
	    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

	      return;
	    }

	    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

	      return;
	    }

	    throw error;
	  }
	}

	function readState(key) {
	  var json = undefined;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

	      return null;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(61);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(62);

	var _DOMUtils = __webpack_require__(63);

	var _createHistory = __webpack_require__(66);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createDOMHistory(options) {
	  var history = _createHistory2['default'](_extends({
	    getUserConfirmation: _DOMUtils.getUserConfirmation
	  }, options, {
	    go: _DOMUtils.go
	  }));

	  function listen(listener) {
	    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

	    return history.listen(listener);
	  }

	  return _extends({}, history, {
	    listen: listen
	  });
	}

	exports['default'] = createDOMHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	//import warning from 'warning'
	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deepEqual = __webpack_require__(67);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _AsyncUtils = __webpack_require__(70);

	var _Actions = __webpack_require__(56);

	var _createLocation2 = __webpack_require__(55);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	var _runTransitionHook = __webpack_require__(71);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _parsePath = __webpack_require__(57);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	var _deprecate = __webpack_require__(54);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}

	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}

	var DefaultKeyLength = 6;

	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var keyLength = options.keyLength;
	  var getUserConfirmation = options.getUserConfirmation;

	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

	  var transitionHooks = [];

	  function listenBefore(hook) {
	    transitionHooks.push(hook);

	    return function () {
	      transitionHooks = transitionHooks.filter(function (item) {
	        return item !== hook;
	      });
	    };
	  }

	  var allKeys = [];
	  var changeListeners = [];
	  var location = undefined;

	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }

	  function updateLocation(newLocation) {
	    var current = getCurrent();

	    location = newLocation;

	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }

	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }

	  function listen(listener) {
	    changeListeners.push(listener);

	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }

	    return function () {
	      changeListeners = changeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }

	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }

	  var pendingLocation = undefined;

	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

	      if (ok) {
	        // treat PUSH to current path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = createPath(location);
	          var nextPath = createPath(nextLocation);

	          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
	        }

	        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }

	  function push(location) {
	    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
	  }

	  function replace(location) {
	    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  function createKey() {
	    return createRandomKey(keyLength);
	  }

	  function createPath(location) {
	    if (location == null || typeof location === 'string') return location;

	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;

	    var result = pathname;

	    if (search) result += search;

	    if (hash) result += hash;

	    return result;
	  }

	  function createHref(location) {
	    return createPath(location);
	  }

	  function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

	    if (typeof action === 'object') {
	      //warning(
	      //  false,
	      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
	      //  'location descriptor instead'
	      //)

	      if (typeof location === 'string') location = _parsePath2['default'](location);

	      location = _extends({}, location, { state: action });

	      action = key;
	      key = arguments[3] || createKey();
	    }

	    return _createLocation3['default'](location, action, key);
	  }

	  // deprecated
	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }

	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }

	  // deprecated
	  function pushState(state, path) {
	    if (typeof path === 'string') path = _parsePath2['default'](path);

	    push(_extends({ state: state }, path));
	  }

	  // deprecated
	  function replaceState(state, path) {
	    if (typeof path === 'string') path = _parsePath2['default'](path);

	    replace(_extends({ state: state }, path));
	  }

	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref,
	    createLocation: createLocation,

	    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
	    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
	    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	  };
	}

	exports['default'] = createHistory;
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(68);
	var isArguments = __webpack_require__(69);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 68 */
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 69 */
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0;
	  var isDone = false;

	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) return;

	    if (currentTurn < turns) {
	      work.call(this, currentTurn++, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }

	  next();
	}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(58);

	var _warning2 = _interopRequireDefault(_warning);

	function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
	  }
	}

	exports['default'] = runTransitionHook;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(58);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(61);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(56);

	var _ExecutionEnvironment = __webpack_require__(62);

	var _DOMUtils = __webpack_require__(63);

	var _DOMStateStorage = __webpack_require__(64);

	var _createDOMHistory = __webpack_require__(65);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	var _parsePath = __webpack_require__(57);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}

	function ensureSlash() {
	  var path = _DOMUtils.getHashPath();

	  if (isAbsolutePath(path)) return true;

	  _DOMUtils.replaceHashPath('/' + path);

	  return false;
	}

	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
	}

	function stripQueryStringValueFromPath(path, key) {
	  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
	}

	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}

	var DefaultQueryKey = '_k';

	function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;

	  var queryKey = options.queryKey;

	  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

	  function getCurrentLocation() {
	    var path = _DOMUtils.getHashPath();

	    var key = undefined,
	        state = undefined;
	    if (queryKey) {
	      key = getQueryStringValueFromPath(path, queryKey);
	      path = stripQueryStringValueFromPath(path, queryKey);

	      if (key) {
	        state = _DOMStateStorage.readState(key);
	      } else {
	        state = null;
	        key = history.createKey();
	        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
	      }
	    } else {
	      key = state = null;
	    }

	    var location = _parsePath2['default'](path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startHashChangeListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function hashChangeListener() {
	      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

	      transitionTo(getCurrentLocation());
	    }

	    ensureSlash();
	    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    var path = (basename || '') + pathname + search;

	    if (queryKey) {
	      path = addQueryStringValueToPath(path, queryKey, key);
	      _DOMStateStorage.saveState(key, state);
	    } else {
	      // Drop key and state.
	      location.key = location.state = null;
	    }

	    var currentHash = _DOMUtils.getHashPath();

	    if (action === _Actions.PUSH) {
	      if (currentHash !== path) {
	        window.location.hash = path;
	      } else {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
	      }
	    } else if (currentHash !== path) {
	      // REPLACE
	      _DOMUtils.replaceHashPath(path);
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopHashChangeListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function push(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.push(location);
	  }

	  function replace(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replace(location);
	  }

	  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

	  function go(n) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;

	    history.go(n);
	  }

	  function createHref(path) {
	    return '#' + history.createHref(path);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopHashChangeListener();
	  }

	  // deprecated
	  function pushState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.pushState(state, path);
	  }

	  // deprecated
	  function replaceState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replaceState(state, path);
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    push: push,
	    replace: replace,
	    go: go,
	    createHref: createHref,

	    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
	    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
	    pushState: pushState, // deprecated - warning is in createHistory
	    replaceState: replaceState // deprecated - warning is in createHistory
	  });
	}

	exports['default'] = createHashHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(58);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(61);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(56);

	var _createHistory = __webpack_require__(66);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	var _parsePath = __webpack_require__(57);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}

	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;

	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    var key = history.createKey();

	    if (typeof entry === 'string') return { pathname: entry, key: key };

	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
	  }

	  var storage = createStateStorage(entries);

	  function saveState(key, state) {
	    storage[key] = state;
	  }

	  function readState(key) {
	    return storage[key];
	  }

	  function getCurrentLocation() {
	    var entry = entries[current];
	    var key = entry.key;
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;

	    var path = (basename || '') + pathname + (search || '');

	    var state = undefined;
	    if (key) {
	      state = readState(key);
	    } else {
	      state = null;
	      key = history.createKey();
	      entry.key = key;
	    }

	    var location = _parsePath2['default'](path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }

	  function go(n) {
	    if (n) {
	      if (!canGo(n)) {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
	        return;
	      }

	      current += n;

	      var currentLocation = getCurrentLocation();

	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }

	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;

	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);

	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }

	  return history;
	}

	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _ExecutionEnvironment = __webpack_require__(62);

	var _runTransitionHook = __webpack_require__(71);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _extractPath = __webpack_require__(59);

	var _extractPath2 = _interopRequireDefault(_extractPath);

	var _parsePath = __webpack_require__(57);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	var _deprecate = __webpack_require__(54);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var basename = options.basename;

	    var historyOptions = _objectWithoutProperties(options, ['basename']);

	    var history = createHistory(historyOptions);

	    // Automatically use the value of <base href> in HTML
	    // documents as basename if it's not explicitly given.
	    if (basename == null && _ExecutionEnvironment.canUseDOM) {
	      var base = document.getElementsByTagName('base')[0];

	      if (base) basename = _extractPath2['default'](base.href);
	    }

	    function addBasename(location) {
	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    }

	    function prependBasename(location) {
	      if (!basename) return location;

	      if (typeof location === 'string') location = _parsePath2['default'](location);

	      var pname = location.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, location, {
	        pathname: pathname
	      });
	    }

	    // Override all read methods with basename-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addBasename(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addBasename(location));
	      });
	    }

	    // Override all write methods with basename-aware versions.
	    function push(location) {
	      history.push(prependBasename(location));
	    }

	    function replace(location) {
	      history.replace(prependBasename(location));
	    }

	    function createPath(location) {
	      return history.createPath(prependBasename(location));
	    }

	    function createHref(location) {
	      return history.createHref(prependBasename(location));
	    }

	    function createLocation() {
	      return addBasename(history.createLocation.apply(history, arguments));
	    }

	    // deprecated
	    function pushState(state, path) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      push(_extends({ state: state }, path));
	    }

	    // deprecated
	    function replaceState(state, path) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      replace(_extends({ state: state }, path));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useBasename;
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(58);

	var _warning2 = _interopRequireDefault(_warning);

	var _ExecutionEnvironment = __webpack_require__(62);

	var _DOMUtils = __webpack_require__(63);

	var _deprecate = __webpack_require__(54);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function startBeforeUnloadListener(getBeforeUnloadPromptMessage) {
	  function listener(event) {
	    var message = getBeforeUnloadPromptMessage();

	    if (typeof message === 'string') {
	      (event || window.event).returnValue = message;
	      return message;
	    }
	  }

	  _DOMUtils.addEventListener(window, 'beforeunload', listener);

	  return function () {
	    _DOMUtils.removeEventListener(window, 'beforeunload', listener);
	  };
	}

	/**
	 * Returns a new createHistory function that can be used to create
	 * history objects that know how to use the beforeunload event in web
	 * browsers to cancel navigation.
	 */
	function useBeforeUnload(createHistory) {
	  return function (options) {
	    var history = createHistory(options);

	    var stopBeforeUnloadListener = undefined;
	    var beforeUnloadHooks = [];

	    function getBeforeUnloadPromptMessage() {
	      var message = undefined;

	      for (var i = 0, len = beforeUnloadHooks.length; message == null && i < len; ++i) {
	        message = beforeUnloadHooks[i].call();
	      }return message;
	    }

	    function listenBeforeUnload(hook) {
	      beforeUnloadHooks.push(hook);

	      if (beforeUnloadHooks.length === 1) {
	        if (_ExecutionEnvironment.canUseDOM) {
	          stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	        } else {
	          process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'listenBeforeUnload only works in DOM environments') : undefined;
	        }
	      }

	      return function () {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (beforeUnloadHooks.length === 0 && stopBeforeUnloadListener) {
	          stopBeforeUnloadListener();
	          stopBeforeUnloadListener = null;
	        }
	      };
	    }

	    // deprecated
	    function registerBeforeUnloadHook(hook) {
	      if (_ExecutionEnvironment.canUseDOM && beforeUnloadHooks.indexOf(hook) === -1) {
	        beforeUnloadHooks.push(hook);

	        if (beforeUnloadHooks.length === 1) stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	      }
	    }

	    // deprecated
	    function unregisterBeforeUnloadHook(hook) {
	      if (beforeUnloadHooks.length > 0) {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (beforeUnloadHooks.length === 0) stopBeforeUnloadListener();
	      }
	    }

	    return _extends({}, history, {
	      listenBeforeUnload: listenBeforeUnload,

	      registerBeforeUnloadHook: _deprecate2['default'](registerBeforeUnloadHook, 'registerBeforeUnloadHook is deprecated; use listenBeforeUnload instead'),
	      unregisterBeforeUnloadHook: _deprecate2['default'](unregisterBeforeUnloadHook, 'unregisterBeforeUnloadHook is deprecated; use the callback returned from listenBeforeUnload instead')
	    });
	  };
	}

	exports['default'] = useBeforeUnload;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _warning = __webpack_require__(58);

	var _warning2 = _interopRequireDefault(_warning);

	var _queryString = __webpack_require__(77);

	var _runTransitionHook = __webpack_require__(71);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _parsePath = __webpack_require__(57);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	var _deprecate = __webpack_require__(54);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var SEARCH_BASE_KEY = '$searchBase';

	function defaultStringifyQuery(query) {
	  return _queryString.stringify(query).replace(/%20/g, '+');
	}

	var defaultParseQueryString = _queryString.parse;

	function isNestedObject(object) {
	  for (var p in object) {
	    if (object.hasOwnProperty(p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
	  }return false;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;

	    var historyOptions = _objectWithoutProperties(options, ['stringifyQuery', 'parseQueryString']);

	    var history = createHistory(historyOptions);

	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    function addQuery(location) {
	      if (location.query == null) {
	        var search = location.search;

	        location.query = parseQueryString(search.substring(1));
	        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
	      }

	      // TODO: Instead of all the book-keeping here, this should just strip the
	      // stringified query from the search.

	      return location;
	    }

	    function appendQuery(location, query) {
	      var _extends2;

	      var queryString = undefined;
	      if (!query || (queryString = stringifyQuery(query)) === '') return location;

	      process.env.NODE_ENV !== 'production' ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

	      if (typeof location === 'string') location = _parsePath2['default'](location);

	      var searchBaseSpec = location[SEARCH_BASE_KEY];
	      var searchBase = undefined;
	      if (searchBaseSpec && location.search === searchBaseSpec.search) {
	        searchBase = searchBaseSpec.searchBase;
	      } else {
	        searchBase = location.search || '';
	      }

	      var search = searchBase + (searchBase ? '&' : '?') + queryString;

	      return _extends({}, location, (_extends2 = {
	        search: search
	      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
	    }

	    // Override all read methods with query-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addQuery(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addQuery(location));
	      });
	    }

	    // Override all write methods with query-aware versions.
	    function push(location) {
	      history.push(appendQuery(location, location.query));
	    }

	    function replace(location) {
	      history.replace(appendQuery(location, location.query));
	    }

	    function createPath(location, query) {
	      //warning(
	      //  !query,
	      //  'the query argument to createPath is deprecated; use a location descriptor instead'
	      //)
	      return history.createPath(appendQuery(location, query || location.query));
	    }

	    function createHref(location, query) {
	      //warning(
	      //  !query,
	      //  'the query argument to createHref is deprecated; use a location descriptor instead'
	      //)
	      return history.createHref(appendQuery(location, query || location.query));
	    }

	    function createLocation() {
	      return addQuery(history.createLocation.apply(history, arguments));
	    }

	    // deprecated
	    function pushState(state, path, query) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      push(_extends({ state: state }, path, { query: query }));
	    }

	    // deprecated
	    function replaceState(state, path, query) {
	      if (typeof path === 'string') path = _parsePath2['default'](path);

	      replace(_extends({ state: state }, path, { query: query }));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useQueries;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(78);

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return {};
		}

		return str.split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}

			return ret;
		}, {});
	};

	exports.stringify = function (obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return key;
			}

			if (Array.isArray(val)) {
				return val.sort().map(function (val2) {
					return strictUriEncode(key) + '=' + strictUriEncode(val2);
				}).join('&');
			}

			return strictUriEncode(key) + '=' + strictUriEncode(val);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 78 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16);
		});
	};


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deprecate = __webpack_require__(54);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _useBeforeUnload = __webpack_require__(75);

	var _useBeforeUnload2 = _interopRequireDefault(_useBeforeUnload);

	exports['default'] = _deprecate2['default'](_useBeforeUnload2['default'], 'enableBeforeUnload is deprecated, use useBeforeUnload instead');
	module.exports = exports['default'];

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deprecate = __webpack_require__(54);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _useQueries = __webpack_require__(76);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	exports['default'] = _deprecate2['default'](_useQueries2['default'], 'enableQueries is deprecated, use useQueries instead');
	module.exports = exports['default'];

/***/ }
/******/ ]);