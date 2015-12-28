module.exports =
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

	var _routes = __webpack_require__(2);

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
/***/ function(module, exports) {

	'use strict';

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRouter = __webpack_require__(3);

	var _reactRouterLibBrowserHistory = __webpack_require__(32);

	var _reactRouterLibBrowserHistory2 = _interopRequireDefault(_reactRouterLibBrowserHistory);

	var _reactRouterLibHashHistory = __webpack_require__(34);

	var _reactRouterLibHashHistory2 = _interopRequireDefault(_reactRouterLibHashHistory);

	var _routesBlank = __webpack_require__(35);

	var _routesBlank2 = _interopRequireDefault(_routesBlank);

	var _routesLogin = __webpack_require__(44);

	var _routesLogin2 = _interopRequireDefault(_routesLogin);

	var _routesDashboard = __webpack_require__(45);

	var _routesDashboard2 = _interopRequireDefault(_routesDashboard);

	var _routesLock = __webpack_require__(46);

	var _routesLock2 = _interopRequireDefault(_routesLock);

	var _routesMerchantsAccounts = __webpack_require__(47);

	var _routesMerchantsAccounts2 = _interopRequireDefault(_routesMerchantsAccounts);

	var _routesMerchantsOverview = __webpack_require__(50);

	var _routesMerchantsOverview2 = _interopRequireDefault(_routesMerchantsOverview);

	var _routesMerchantsProfileedit = __webpack_require__(51);

	var _routesMerchantsProfileedit2 = _interopRequireDefault(_routesMerchantsProfileedit);

	exports['default'] = function (withHistory, onUpdate) {
	  var history = withHistory ? Modernizr.history ? new _reactRouterLibBrowserHistory2['default']() : new _reactRouterLibHashHistory2['default']() : null;
	  return React.createElement(
	    _reactRouter.Router,
	    { history: history, onUpdate: onUpdate },
	    React.createElement(_reactRouter.Route, { path: '/', component: _routesDashboard2['default'] }),
	    React.createElement(_reactRouter.Route, { path: '/app/login', component: _routesLogin2['default'] }),
	    React.createElement(_reactRouter.Route, { path: '/app/dashboard', component: _routesDashboard2['default'] }),
	    React.createElement(_reactRouter.Route, { path: '/app/merchants/account', component: _routesMerchantsAccounts2['default'] }),
	    React.createElement(_reactRouter.Route, { path: '/app/lock', component: _routesLock2['default'] }),
	    React.createElement(_reactRouter.Route, { path: '/app/merchants/overview', component: _routesMerchantsOverview2['default'] }),
	    React.createElement(_reactRouter.Route, { path: '/app/merchants/profileedit', component: _routesMerchantsProfileedit2['default'] })
	  );
	};

	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* components */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Router2 = __webpack_require__(4);

	var _Router3 = _interopRequireDefault(_Router2);

	exports.Router = _Router3['default'];

	var _Link2 = __webpack_require__(26);

	var _Link3 = _interopRequireDefault(_Link2);

	exports.Link = _Link3['default'];

	/* components (configuration) */

	var _Redirect2 = __webpack_require__(27);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	exports.Redirect = _Redirect3['default'];

	var _Route2 = __webpack_require__(28);

	var _Route3 = _interopRequireDefault(_Route2);

	exports.Route = _Route3['default'];

	/* mixins */

	var _Navigation2 = __webpack_require__(29);

	var _Navigation3 = _interopRequireDefault(_Navigation2);

	exports.Navigation = _Navigation3['default'];

	var _TransitionHook2 = __webpack_require__(30);

	var _TransitionHook3 = _interopRequireDefault(_TransitionHook2);

	exports.TransitionHook = _TransitionHook3['default'];

	var _State2 = __webpack_require__(31);

	var _State3 = _interopRequireDefault(_State2);

	exports.State = _State3['default'];

	/* utils */

	var _RouteUtils = __webpack_require__(9);

	exports.createRoutesFromReactChildren = _RouteUtils.createRoutesFromReactChildren;

	var _PropTypes2 = __webpack_require__(17);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	exports.PropTypes = _PropTypes3['default'];

	var _Router4 = _interopRequireDefault(_Router2);

	exports['default'] = _Router4['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(6);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _AsyncUtils = __webpack_require__(8);

	var _RouteUtils = __webpack_require__(9);

	var _RoutingUtils = __webpack_require__(10);

	var _PropTypes = __webpack_require__(17);

	var _RouterContextMixin = __webpack_require__(22);

	var _RouterContextMixin2 = _interopRequireDefault(_RouterContextMixin);

	var _ScrollManagementMixin = __webpack_require__(23);

	var _ScrollManagementMixin2 = _interopRequireDefault(_ScrollManagementMixin);

	var _Location = __webpack_require__(18);

	var _Transition = __webpack_require__(25);

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
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
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


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
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

	var __DEV__ = process.env.NODE_ENV !== 'production';

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (__DEV__) {
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
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ },
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(6);

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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getState = getState;
	exports.createTransitionHook = createTransitionHook;
	exports.getTransitionHooks = getTransitionHooks;
	exports.getComponents = getComponents;
	exports.getRouteParams = getRouteParams;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(9);

	var _URLUtils = __webpack_require__(11);

	var _AsyncUtils = __webpack_require__(8);

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
/* 11 */
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

	var _qs = __webpack_require__(12);

	var _qs2 = _interopRequireDefault(_qs);

	var _invariant = __webpack_require__(7);

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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Stringify = __webpack_require__(14);
	var Parse = __webpack_require__(16);


	// Declare internals

	var internals = {};


	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(15);


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
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(15);


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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _Location = __webpack_require__(18);

	var _Location2 = _interopRequireDefault(_Location);

	var _History = __webpack_require__(21);

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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _NavigationTypes = __webpack_require__(19);

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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _keymirror = __webpack_require__(20);

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
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _URLUtils = __webpack_require__(11);

	var _Location = __webpack_require__(18);

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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _URLUtils = __webpack_require__(11);

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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _DOMUtils = __webpack_require__(24);

	var _NavigationTypes = __webpack_require__(19);

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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(9);

	var _URLUtils = __webpack_require__(11);

	var _PropTypes = __webpack_require__(17);

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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(7);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(9);

	var _PropTypes = __webpack_require__(17);

	var _warning = __webpack_require__(6);

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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _warning = __webpack_require__(6);

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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(5);

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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _DOMHistory2 = __webpack_require__(33);

	var _DOMHistory3 = _interopRequireDefault(_DOMHistory2);

	var _DOMUtils = __webpack_require__(24);

	var _NavigationTypes = __webpack_require__(19);

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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _History2 = __webpack_require__(21);

	var _History3 = _interopRequireDefault(_History2);

	var _DOMUtils = __webpack_require__(24);

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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _warning = __webpack_require__(6);

	var _warning2 = _interopRequireDefault(_warning);

	var _DOMHistory2 = __webpack_require__(33);

	var _DOMHistory3 = _interopRequireDefault(_DOMHistory2);

	var _NavigationTypes = __webpack_require__(19);

	var _NavigationTypes2 = _interopRequireDefault(_NavigationTypes);

	var _DOMUtils = __webpack_require__(24);

	var _URLUtils = __webpack_require__(11);

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
/* 35 */
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

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(37);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(38);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(41);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(43);

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
	                      'BLANK PAGE'
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
/* 36 */
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = SidebarMixin;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRouter = __webpack_require__(3);

	var _classnames = __webpack_require__(36);

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
/* 38 */
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

	var _reactRouter = __webpack_require__(3);

	var _cookies = __webpack_require__(39);

	var _cookies2 = _interopRequireDefault(_cookies);

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(37);

	var _servicesAuth = __webpack_require__(40);

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
	          React.createElement('img', { src: '/imgs/XtremePayLogo.png', alt: 'XtremePay', width: '111', height: '28' })
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
	      _this.transitionTo('/app/login');
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
/* 39 */
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
/* 40 */
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
	        localStorage.userdetail = res.user_detail;
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

	  getFirstName: function getFirstName() {
	    var user = JSON.parse(localStorage.userdetail);
	    if (user) {
	      return user.FirstName;
	    } else {
	      return '';
	    }
	  },

	  getLastName: function getLastName() {
	    var user = JSON.parse(localStorage.userdetail);
	    if (user) {
	      return user.LastName;
	    } else {
	      return '';
	    }
	  },

	  getUserDetail: function getUserDetail() {
	    return localStorage.userdetail;
	  },

	  logout: function logout(cb) {
	    delete localStorage.token;
	    delete localStorage.userdetail;
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
	    $.ajax({
	      type: "POST",
	      url: 'http://localhost:3004/xtremepay/v1.0/security/token-auth',
	      headers: {
	        //'Authorization':'Basic xxxxxxxxxxxxx',
	        //'X_CSRF_TOKEN':'xxxxxxxxxxxxxxxxxxxx',
	        'Content-Type': 'application/json'
	      },
	      dataType: 'json',
	      data: JSON.stringify({ "Username": email, "Password": pass, "PersonID": 1, "Email": email }),
	      success: function success(data) {
	        cb({
	          authenticated: true,
	          token: data['token'],
	          user_detail: data['user_detail']
	        });
	      },
	      error: function error(_error) {
	        cb({ authenticated: false });
	      }
	    });
	    /*if (email === 'joe@example.com' && pass === 'password1') {
	      cb({
	        authenticated: true,
	        token: Math.random().toString(36).substring(7)
	      })
	    } else {
	      cb({ authenticated: false })
	    }*/
	  }, 0);
	}

/***/ },
/* 41 */
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

	var _globalJsxSidebar_component = __webpack_require__(37);

	var _reactRouter = __webpack_require__(3);

	var _globalJsxLoremipsum = __webpack_require__(42);

	var _globalJsxLoremipsum2 = _interopRequireDefault(_globalJsxLoremipsum);

	var _servicesAuth = __webpack_require__(40);

	var _servicesAuth2 = _interopRequireDefault(_servicesAuth);

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
	                  { style: {
	                      marginBottom: 0
	                    } },
	                  React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-fontello-gauge', name: 'Dashboard', href: '/app/dashboard' }),
	                  React.createElement(
	                    _globalJsxSidebar_component.SidebarNavItem,
	                    { glyph: 'icon-dripicons-document', name: React.createElement(
	                        'span',
	                        null,
	                        'General',
	                        React.createElement(
	                          BLabel,
	                          { className: 'bg-darkgreen45 fg-white' },
	                          '6'
	                        )
	                      ) },
	                    React.createElement(
	                      _globalJsxSidebar_component.SidebarNav,
	                      null,
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-feather-inbox', name: 'Overview', href: '/app/merchants/overview' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-outlined-mail-open', name: 'Information', href: '/app/merchants/profileedit' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-dripicons-message', name: 'Upload Documents', href: '/app/mailbox/compose' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-dripicons-message', name: 'Messages', href: '/app/mailbox/compose' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-dripicons-message', name: 'Manage Users', href: '/app/mailbox/compose' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-dripicons-message', name: 'Pricing', href: '/app/mailbox/compose' })
	                    )
	                  ),
	                  React.createElement('hr', { style: {
	                      borderColor: '#3B4648',
	                      borderWidth: 2,
	                      marginTop: 15,
	                      marginBottom: 0,
	                      width: 200
	                    } }),
	                  React.createElement(
	                    _globalJsxSidebar_component.SidebarNavItem,
	                    { glyph: 'icon-simple-line-icons-users', name: React.createElement(
	                        'span',
	                        null,
	                        'Products',
	                        React.createElement(
	                          BLabel,
	                          { className: 'bg-darkblue fg-white' },
	                          '2'
	                        )
	                      ) },
	                    React.createElement(
	                      _globalJsxSidebar_component.SidebarNav,
	                      null,
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-feather-inbox', name: 'Sites & Products', href: '/app/mailbox/inbox' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-outlined-mail-open', name: 'New Site', href: '/app/mailbox/mail' })
	                    )
	                  ),
	                  React.createElement(
	                    _globalJsxSidebar_component.SidebarNavItem,
	                    { glyph: 'icon-fontello-install', name: React.createElement(
	                        'span',
	                        null,
	                        'Transactions',
	                        React.createElement(
	                          BLabel,
	                          { className: 'bg-deepred fg-white' },
	                          '3'
	                        )
	                      ) },
	                    React.createElement(
	                      _globalJsxSidebar_component.SidebarNav,
	                      null,
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-dripicons-message', name: 'Search Transactions', href: '/app/merchants/account' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-dripicons-message', name: 'Activity Log', href: '/app/mailbox/compose' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-dripicons-message', name: 'Notifications', href: '/app/mailbox/compose' })
	                    )
	                  ),
	                  React.createElement(
	                    _globalJsxSidebar_component.SidebarNavItem,
	                    { glyph: 'icon-ikons-bar-chart-2', name: React.createElement(
	                        'span',
	                        null,
	                        'Finance',
	                        React.createElement(
	                          BLabel,
	                          { className: 'bg-brown50 fg-white' },
	                          '5'
	                        )
	                      ) },
	                    React.createElement(
	                      _globalJsxSidebar_component.SidebarNav,
	                      null,
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-feather-inbox', name: 'Account Statement', href: '/app/mailbox/inbox' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-outlined-mail-open', name: 'Payout', href: '/app/mailbox/mail' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-dripicons-message', name: 'Account Balance', href: '/app/mailbox/compose' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-dripicons-message', name: 'Charge Back', href: '/app/mailbox/compose' }),
	                      React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-dripicons-message', name: 'Request Payout', href: '/app/mailbox/compose' })
	                    )
	                  ),
	                  React.createElement('hr', { style: {
	                      borderColor: '#3B4648',
	                      borderWidth: 2,
	                      marginTop: 15,
	                      marginBottom: 0,
	                      width: 200
	                    } }),
	                  React.createElement(_globalJsxSidebar_component.SidebarNavItem, { glyph: 'icon-fontello-gauge', name: 'Toolbox', href: '/app/dashboard' })
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

	var SideBarProfile = React.createClass({
	  displayName: 'SideBarProfile',

	  mixins: [_reactRouter.State, _reactRouter.Navigation],
	  allTitleCase: function allTitleCase(inStr) {
	    return inStr.replace(/\w\S*/g, function (tStr) {
	      return tStr.charAt(0).toUpperCase() + tStr.substr(1).toLowerCase();
	    });
	  },

	  componentDidMount: function componentDidMount() {},

	  render: function render() {

	    if (_servicesAuth2['default'].loggedIn()) {
	      var user_detail = JSON.parse(_servicesAuth2['default'].getUserDetail());
	      return React.createElement(
	        'div',
	        { style: {
	            top: 23,
	            fontSize: 16,
	            lineHeight: 1,
	            position: 'relative'
	          } },
	        this.allTitleCase(user_detail.FirstName),
	        ' ',
	        this.allTitleCase(user_detail.LastName)
	      );
	    } else {
	      return React.createElement('div', { style: {
	          top: 23,
	          fontSize: 16,
	          lineHeight: 1,
	          position: 'relative'
	        } });
	    }
	  }
	});

	var _default = (function (_React$Component3) {
	  _inherits(_default, _React$Component3);

	  function _default(props) {
	    _classCallCheck(this, _default);

	    _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).call(this, props);
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
	                React.createElement(SideBarProfile, null),
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
/* 42 */
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
/* 43 */
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
/* 44 */
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

	var _reactRouter = __webpack_require__(3);

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(37);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(38);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(41);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(43);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var _servicesAuth = __webpack_require__(40);

	var _servicesAuth2 = _interopRequireDefault(_servicesAuth);

	var Body = React.createClass({
	  displayName: 'Body',

	  mixins: [_reactRouter.State, _reactRouter.Navigation],
	  back: function back(e) {
	    var _this = this;

	    e.preventDefault();
	    e.stopPropagation();

	    var email = this.refs.email.value;
	    var pass = this.refs.pass.value;
	    console.log(email);
	    _servicesAuth2['default'].login(email, pass, function (loggedIn) {
	      if (!loggedIn) return _this.setState({ error: true });else {
	        _this.transitionTo('/app/dashboard');
	      }
	    });

	    //this.transitionTo('/app/invoice');
	  },
	  componentDidMount: function componentDidMount() {

	    $('html').addClass('authentication');
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    $('html').removeClass('authentication');
	  },
	  render: function render() {
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
	                      { style: { padding: 0 } },
	                      React.createElement(
	                        'div',
	                        { className: 'text-center bg-darkblue fg-white' },
	                        React.createElement(
	                          'h3',
	                          { style: { margin: 0, padding: 25 } },
	                          'Sign in to XtremePay'
	                        )
	                      ),
	                      React.createElement(
	                        'div',
	                        { className: 'bg-hoverblue fg-black50 text-center', style: { padding: 12.5 } },
	                        React.createElement(
	                          'div',
	                          null,
	                          'You need to sign in for those awesome features'
	                        ),
	                        React.createElement(
	                          'div',
	                          { style: { marginTop: 12.5, marginBottom: 12.5 } },
	                          React.createElement(
	                            Button,
	                            { id: 'facebook-btn', lg: true, bsStyle: 'darkblue', type: 'submit', onClick: this.back },
	                            React.createElement(
	                              'span',
	                              null,
	                              'Sign in ',
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
	                            React.createElement(Icon, { glyph: 'icon-fontello-google' }),
	                            React.createElement(
	                              'span',
	                              null,
	                              ' or with google'
	                            )
	                          )
	                        )
	                      ),
	                      React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                          'div',
	                          { className: 'text-center', style: { padding: 12.5 } },
	                          'or use your XtremePay account'
	                        ),
	                        React.createElement(
	                          'div',
	                          { style: { padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25 } },
	                          React.createElement(
	                            Form,
	                            { onSubmit: this.back },
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
	                                React.createElement(Input, { autoFocus: true, type: 'email', ref: 'email', id: 'emailaddress', className: 'border-focus-blue', placeholder: 'support@sketchpixy.com' })
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
	                                React.createElement(Input, { type: 'password', id: 'password', ref: 'pass', className: 'border-focus-blue', placeholder: 'password' })
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
	                                    { xs: 6, collapseLeft: true, collapseRight: true, style: { paddingTop: 10 } },
	                                    React.createElement(
	                                      _reactRouter.Link,
	                                      { to: '/app/signup' },
	                                      'Create a XtremePay account'
	                                    )
	                                  ),
	                                  React.createElement(
	                                    Col,
	                                    { xs: 6, collapseLeft: true, collapseRight: true, className: 'text-right' },
	                                    React.createElement(
	                                      Button,
	                                      { outlined: true, lg: true, type: 'submit', bsStyle: 'blue', onClick: this.back },
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
/* 45 */
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

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactRouter = __webpack_require__(3);

	var _globalJsxSidebar_component = __webpack_require__(37);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(38);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(41);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(43);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var _globalJsxLoremipsum = __webpack_require__(42);

	var _globalJsxLoremipsum2 = _interopRequireDefault(_globalJsxLoremipsum);

	var _servicesAuth = __webpack_require__(40);

	var _servicesAuth2 = _interopRequireDefault(_servicesAuth);

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

	var Body = React.createClass({
	  displayName: 'Body',

	  mixins: [_reactRouter.State, _reactRouter.Navigation],
	  componentDidMount: function componentDidMount() {
	    if (!_servicesAuth2['default'].loggedIn()) {
	      this.transitionTo('/app/login');
	    }
	  },
	  render: function render() {
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
	            React.createElement(WeatherPanel, null)
	          )
	        )
	      )
	    );
	  }
	});
	/*
	  <MapPanel />
	class Body extends React.Component {
	  componentDidMount() {
	    if (!auth.loggedIn()){

	    }
	  }
	  render() {
	    return (

	    );
	  }
	}*/

	var _default = (function (_React$Component15) {
	  _inherits(_default, _React$Component15);

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
/* 46 */
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

	var _reactRouter = __webpack_require__(3);

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(37);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(38);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(41);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(43);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var _servicesAuth = __webpack_require__(40);

	var _servicesAuth2 = _interopRequireDefault(_servicesAuth);

	var SideBarProfile = React.createClass({
	  displayName: 'SideBarProfile',

	  allTitleCase: function allTitleCase(inStr) {
	    return inStr.replace(/\w\S*/g, function (tStr) {
	      return tStr.charAt(0).toUpperCase() + tStr.substr(1).toLowerCase();
	    });
	  },

	  render: function render() {

	    if (_servicesAuth2['default'].loggedIn()) {
	      var user_detail = JSON.parse(_servicesAuth2['default'].getUserDetail());
	      return React.createElement(
	        Label,
	        { htmlFor: 'annasanchez' },
	        this.allTitleCase(user_detail.FirstName),
	        ' ',
	        this.allTitleCase(user_detail.LastName)
	      );
	    } else {
	      return React.createElement(Label, { htmlFor: 'annasanchez' });
	    }
	  }
	});

	var Body = React.createClass({
	  displayName: 'Body',

	  interval: null,
	  getTimeState: function getTimeState() {
	    return {
	      time: moment().format('hh:mm:ss'),
	      date: moment().format('dddd, MMMM YYYY')
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      time: null,
	      date: null
	    };
	  },
	  back: function back(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    window.history.back();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    clearInterval(this.interval);
	    $('html').removeClass('authentication');
	  },
	  componentDidMount: function componentDidMount() {
	    $('html').addClass('authentication');

	    this.interval = setInterval((function () {
	      this.setState(this.getTimeState());
	    }).bind(this), 500);
	  },
	  render: function render() {
	    return React.createElement(
	      Container,
	      { id: 'auth-container', className: 'lockpage' },
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
	                { sm: 12, className: 'text-center' },
	                React.createElement(
	                  'h1',
	                  { className: 'fg-white', style: { fontSize: 81, fontWeight: 300 } },
	                  this.state.time
	                ),
	                React.createElement(
	                  'h6',
	                  { className: 'fg-white' },
	                  this.state.date
	                )
	              )
	            ),
	            React.createElement(
	              Row,
	              { style: { marginTop: 50 } },
	              React.createElement(
	                Col,
	                { sm: 12, className: 'text-center' },
	                React.createElement(
	                  Form,
	                  { onSubmit: this.back },
	                  React.createElement(SideBarProfile, null),
	                  React.createElement('img', { src: '/imgs/avatars/avatar.jpg', width: '128', height: '128', alt: 'avatar' }),
	                  React.createElement(Input, { type: 'password', placeholder: 'Password', autoFocus: true }),
	                  React.createElement(
	                    Button,
	                    { type: 'submit', className: 'hidden' },
	                    'Unlock'
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
/* 47 */
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

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _globalJsxSidebar_component = __webpack_require__(37);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(38);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(41);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(43);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var _globalJsxIon = __webpack_require__(48);

	var _globalJsxLoremipsum = __webpack_require__(42);

	var _globalJsxLoremipsum2 = _interopRequireDefault(_globalJsxLoremipsum);

	var _routesColors = __webpack_require__(49);

	var _routesColors2 = _interopRequireDefault(_routesColors);

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
	              { sm: 12, collapseRight: true },
	              React.createElement(
	                PanelContainer,
	                { controlStyles: 'bg-lightred fg-white' },
	                React.createElement(
	                  PanelHeader,
	                  { className: 'bg-lightred fg-white' },
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
	                          'h3',
	                          null,
	                          'Account Details'
	                        ),
	                        React.createElement(
	                          TabContainer,
	                          { id: 'tab-3' },
	                          React.createElement(
	                            TabList,
	                            { justified: true, bsStyle: 'red' },
	                            React.createElement(
	                              Tab,
	                              { active: true },
	                              'Overview'
	                            ),
	                            React.createElement(
	                              Tab,
	                              null,
	                              'My Profile'
	                            ),
	                            React.createElement(
	                              TabDropdown,
	                              { title: 'Dropdown', 'menu-props': { bsStyle: 'red' } },
	                              React.createElement(
	                                Tab,
	                                null,
	                                '@fat'
	                              ),
	                              React.createElement(
	                                Tab,
	                                null,
	                                '@mdo'
	                              )
	                            )
	                          )
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
	                        { xs: 12, style: { paddingTop: 12.5 } },
	                        React.createElement(
	                          TabContent,
	                          { tabContainerID: 'tab-3' },
	                          React.createElement(
	                            TabPane,
	                            { active: true },
	                            React.createElement(
	                              'p',
	                              null,
	                              React.createElement(_globalJsxLoremipsum2['default'], { query: '2s' })
	                            ),
	                            React.createElement(
	                              'p',
	                              null,
	                              React.createElement(_globalJsxLoremipsum2['default'], { query: '2s' })
	                            )
	                          ),
	                          React.createElement(
	                            TabPane,
	                            null,
	                            React.createElement(
	                              'p',
	                              null,
	                              React.createElement(_globalJsxLoremipsum2['default'], { query: '2s' })
	                            ),
	                            React.createElement(
	                              'p',
	                              null,
	                              React.createElement(_globalJsxLoremipsum2['default'], { query: '2s' })
	                            )
	                          ),
	                          React.createElement(
	                            TabPane,
	                            null,
	                            React.createElement(
	                              'p',
	                              null,
	                              React.createElement(_globalJsxLoremipsum2['default'], { query: '2s' })
	                            ),
	                            React.createElement(
	                              'p',
	                              null,
	                              React.createElement(_globalJsxLoremipsum2['default'], { query: '2s' })
	                            )
	                          ),
	                          React.createElement(
	                            TabPane,
	                            null,
	                            React.createElement(
	                              'p',
	                              null,
	                              React.createElement(_globalJsxLoremipsum2['default'], { query: '2s' })
	                            ),
	                            React.createElement(
	                              'p',
	                              null,
	                              React.createElement(_globalJsxLoremipsum2['default'], { query: '2s' })
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var IonTabItem = React.createClass({
	  displayName: 'IonTabItem',

	  statics: {
	    ID: 0,
	    getID: function getID() {
	      return IonTabItem.ID++;
	    },
	    resetID: function resetID() {
	      IonTabItem.ID = 0;
	    }
	  },
	  getInitialState: function getInitialState() {
	    return {
	      id: 'tab-' + IonTabItem.getID() + '-name'
	    };
	  },
	  render: function render() {
	    var classes = (0, _classnames2['default'])('ionTabs__item', this.props.className);

	    var props = _extends({}, this.props, {
	      className: classes,
	      'data-name': this.state.id
	    });

	    return React.createElement(
	      'div',
	      props,
	      this.props.children
	    );
	  }
	});

	var IonTabBody = React.createClass({
	  displayName: 'IonTabBody',

	  render: function render() {
	    var classes = (0, _classnames2['default'])('ionTabs__body', this.props.className);
	    var props = _extends({}, this.props, {
	      className: classes
	    });

	    return React.createElement(
	      'div',
	      props,
	      this.props.children,
	      React.createElement('div', { className: 'ionTabs__preloader' })
	    );
	  }
	});

	var IonTab = React.createClass({
	  displayName: 'IonTab',

	  statics: {
	    ID: 0,
	    getID: function getID() {
	      return IonTab.ID++;
	    },
	    resetID: function resetID() {
	      IonTab.ID = 0;
	    }
	  },
	  getInitialState: function getInitialState() {
	    return {
	      id: 'tab-' + IonTab.getID() + '-name'
	    };
	  },
	  handleChange: function handleChange(key, value) {
	    if (this.props.hasOwnProperty(key) && this.props[key] === value) {
	      $.ionTabs.setTab(this.props.containerID, this.state.id);
	    }
	  },
	  componentWillMount: function componentWillMount() {
	    ReactBootstrap.Dispatcher.on('ionTabs:' + this.props.containerID, this.handleChange);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    ReactBootstrap.Dispatcher.off('ionTabs:' + this.props.containerID, this.handleChange);
	  },
	  render: function render() {
	    var classes = (0, _classnames2['default'])('ionTabs__tab', this.props.className);

	    var props = _extends({}, this.props, {
	      className: classes,
	      'data-target': this.state.id
	    });

	    return React.createElement(
	      'li',
	      props,
	      this.props.children
	    );
	  }
	});

	var IonTabHead = React.createClass({
	  displayName: 'IonTabHead',

	  render: function render() {
	    var children = React.Children.map(this.props.children, function (child, i) {
	      return React.cloneElement(child, {
	        containerID: this.props.containerID
	      });
	    }, this);

	    var classes = (0, _classnames2['default'])('ionTabs__head', this.props.className);

	    var props = _extends({}, this.props, {
	      className: classes
	    });

	    return React.createElement(
	      'ul',
	      props,
	      children
	    );
	  }
	});

	var IonTabContainer = React.createClass({
	  displayName: 'IonTabContainer',

	  statics: {
	    ID: 0,
	    getID: function getID() {
	      return IonTabContainer.ID++;
	    }
	  },
	  getInitialState: function getInitialState() {
	    return {
	      id: 'tab-group-' + IonTabContainer.getID()
	    };
	  },
	  setTab: function setTab(key, value) {
	    ReactBootstrap.Dispatcher.emit('ionTabs:' + this.state.id, key, value);
	  },
	  componentDidMount: function componentDidMount() {
	    $.ionTabs(this.refs.tab.getDOMNode(), {
	      type: 'none'
	    });
	  },
	  render: function render() {
	    IonTab.resetID();
	    IonTabItem.resetID();
	    var children = React.Children.map(this.props.children, function (child, i) {
	      return React.cloneElement(child, {
	        containerID: this.state.id
	      });
	    }, this);

	    var classes = (0, _classnames2['default'])('ionTabs', this.props.className);

	    var props = _extends({}, this.props, {
	      className: classes,
	      'data-name': this.state.id
	    });

	    return React.createElement(
	      'div',
	      _extends({ ref: 'tab' }, props),
	      children
	    );
	  }
	});

	module.exports.IonTabContainer = IonTabContainer;
	module.exports.IonTabHead = IonTabHead;
	module.exports.IonTabBody = IonTabBody;
	module.exports.IonTab = IonTab;
	module.exports.IonTabItem = IonTabItem;

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";

	module.exports = ["deepred", "red", "lightred", "brightblue", "darkblue", "blue", "lightblue", "purple", "lightpurple", "darkbrown", "brown", "brown75", "brown60", "brown50", "brownishgreen", "orange", "paleorange", "pinkishred", "orange75", "orange65", "orange45", "darkorange", "lightorange", "darkgreen", "darkgreen85", "darkgreen75", "darkgreen65", "darkgreen55", "darkgreen50", "darkgreen45", "darkgreen40", "green", "lightgreen", "brightyellow", "brightyellow75", "brightyellow65", "yellow", "paleyellow", "lightyellow", "pink", "lightpink", "paleblue", "palegreen", "palepink", "brownishgray", "brownishgray75", "darkgray", "darkgray75", "darkgray50", "darkgray40", "darkgray25", "black", "black75", "davygray", "darkgrayishblue75", "darkgrayishblue", "desaturateddarkblue", "desaturateddarkblue75", "darkcyan", "grayishcyan"];

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

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactRouter = __webpack_require__(3);

	var _globalJsxSidebar_component = __webpack_require__(37);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(38);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(41);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(43);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var _globalJsxLoremipsum = __webpack_require__(42);

	var _globalJsxLoremipsum2 = _interopRequireDefault(_globalJsxLoremipsum);

	var UserPricingMgtPanel = (function (_React$Component) {
	  _inherits(UserPricingMgtPanel, _React$Component);

	  function UserPricingMgtPanel() {
	    _classCallCheck(this, UserPricingMgtPanel);

	    _get(Object.getPrototypeOf(UserPricingMgtPanel.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(UserPricingMgtPanel, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        PanelContainer,
	        null,
	        React.createElement(
	          Panel,
	          { horizontal: true, className: 'force-collapse' },
	          React.createElement(
	            PanelLeft,
	            { noRadius: true, className: 'panel-sm-4' },
	            React.createElement(UserMgtPanel, null)
	          ),
	          React.createElement(
	            PanelRight,
	            { className: 'panel-sm-4' },
	            React.createElement(PricingPanel, null)
	          )
	        )
	      );
	    }
	  }]);

	  return UserPricingMgtPanel;
	})(React.Component);

	var UserMgtPanel = (function (_React$Component2) {
	  _inherits(UserMgtPanel, _React$Component2);

	  function UserMgtPanel() {
	    _classCallCheck(this, UserMgtPanel);

	    _get(Object.getPrototypeOf(UserMgtPanel.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(UserMgtPanel, [{
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
	            { xs: 12, style: { padding: 50, paddingTop: 12.5, paddingBottom: 25 }, className: 'text-left' },
	            React.createElement(
	              'h3',
	              { className: 'fg-black50' },
	              'ADD USERS.'
	            ),
	            React.createElement('hr', null),
	            'Provide credentials for the users to whom you want to grant access to your merchant interface.',
	            React.createElement('br', null),
	            React.createElement(
	              Button,
	              { bsStyle: 'darkgreen45' },
	              'Add New User +'
	            ),
	            React.createElement('br', null)
	          )
	        ),
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Col,
	            { xs: 9, style: { padding: 50, paddingTop: 12.5, paddingBottom: 25 }, className: 'text-left' },
	            React.createElement(
	              Table,
	              null,
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
	                      'strong',
	                      null,
	                      'ANNA SANCHEZ'
	                    ),
	                    React.createElement(
	                      'p',
	                      null,
	                      'anna.sanchez@maxmart.com. ',
	                      React.createElement(
	                        'strong',
	                        null,
	                        'Administrator'
	                      )
	                    )
	                  ),
	                  React.createElement(
	                    'td',
	                    { width: '75' },
	                    React.createElement(
	                      _reactRouter.Link,
	                      { to: '/app/user/settings' },
	                      React.createElement(Icon, { glyph: 'icon-fontello-cog' })
	                    )
	                  ),
	                  React.createElement(
	                    'td',
	                    { width: '75' },
	                    React.createElement(
	                      _reactRouter.Link,
	                      { to: '/app/user/add' },
	                      React.createElement(Icon, { glyph: 'icon-fontello-trash' })
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

	  return UserMgtPanel;
	})(React.Component);

	var PricingPanel = (function (_React$Component3) {
	  _inherits(PricingPanel, _React$Component3);

	  function PricingPanel() {
	    _classCallCheck(this, PricingPanel);

	    _get(Object.getPrototypeOf(PricingPanel.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(PricingPanel, [{
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
	            { xs: 12, style: { padding: 50, paddingTop: 12.5, paddingBottom: 25 }, className: 'text-left' },
	            React.createElement(
	              'h3',
	              { className: 'fg-black50' },
	              'PRICING AND FEES.'
	            ),
	            React.createElement('hr', null),
	            'Choose a payment type and see how much you can earn for each price point. Also you can filter by country, payment solution and export results to CSV/XML',
	            React.createElement('br', null),
	            React.createElement(
	              Button,
	              { bsStyle: 'darkgreen45' },
	              'See Princing and Fees'
	            ),
	            React.createElement('br', null)
	          )
	        )
	      );
	    }
	  }]);

	  return PricingPanel;
	})(React.Component);

	var InfoKnob = (function (_React$Component4) {
	  _inherits(InfoKnob, _React$Component4);

	  function InfoKnob() {
	    _classCallCheck(this, InfoKnob);

	    _get(Object.getPrototypeOf(InfoKnob.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(InfoKnob, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $('.dial').knob();
	      $('.knob').knob({
	        draw: function draw() {
	          // 'tron' case
	          if (this.$.data('skin') == 'tron') {
	            var a = this.angle(this.cv),
	                // Angle
	            sa = this.startAngle,
	                // Previous start angle
	            sat = this.startAngle,
	                // Start angle
	            ea,
	                // Previous end angle
	            eat = sat + a,
	                // End angle
	            r = true;

	            this.g.lineWidth = this.lineWidth;

	            this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);

	            if (this.o.displayPrevious) {
	              ea = this.startAngle + this.angle(this.value);
	              this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
	              this.g.beginPath();
	              this.g.strokeStyle = this.previousColor;
	              this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
	              this.g.stroke();
	            }

	            this.g.beginPath();
	            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
	            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
	            this.g.stroke();

	            this.g.lineWidth = 2;
	            this.g.beginPath();
	            this.g.strokeStyle = this.o.fgColor;
	            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
	            this.g.stroke();

	            return false;
	          }
	        }
	      });

	      function clock() {
	        var $s = $('.second'),
	            $m = $('.minute'),
	            $h = $('.hour'),
	            d = new Date(),
	            s = d.getSeconds(),
	            m = d.getMinutes(),
	            h = d.getHours();
	        $s.val(s).trigger('change');
	        $m.val(m).trigger('change');
	        $h.val(h).trigger('change');
	        setTimeout(clock, 1000);
	      }
	      clock();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Row,
	        null,
	        React.createElement(
	          Col,
	          { xs: 2, className: 'text-center' },
	          React.createElement('input', { type: 'text', defaultValue: '75', className: 'dial autosize', 'data-width': '30%', 'data-fgcolor': '#F09FA6' }),
	          React.createElement(
	            'p',
	            null,
	            'INFORMATION COMPLETED'
	          )
	        ),
	        React.createElement(
	          Col,
	          { xs: 2, className: 'text-left' },
	          React.createElement(
	            'p',
	            null,
	            'In order to complete your profile, please provide us with the information required.'
	          ),
	          React.createElement(
	            'p',
	            null,
	            React.createElement(
	              Button,
	              { bsStyle: 'darkgreen45' },
	              'Complete Your Details'
	            )
	          )
	        ),
	        React.createElement(Col, { xs: 1, className: 'text-center' }),
	        React.createElement(
	          Col,
	          { xs: 2, className: 'text-center' },
	          React.createElement('input', { type: 'text', defaultValue: '50', className: 'dial autosize', 'data-width': '30%', 'data-displayprevious': 'true', 'data-fgcolor': '#B4A1DD' }),
	          React.createElement(
	            'p',
	            null,
	            'DOCUMENT UPLOADED'
	          )
	        ),
	        React.createElement(
	          Col,
	          { xs: 2, className: 'text-center' },
	          React.createElement(
	            'p',
	            null,
	            'Please upload supporting documentations.'
	          ),
	          React.createElement('br', null),
	          React.createElement(
	            'p',
	            null,
	            React.createElement(
	              Button,
	              { bsStyle: 'darkgreen45' },
	              'Upload Your Documents'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return InfoKnob;
	})(React.Component);

	var ContactPanel = (function (_React$Component5) {
	  _inherits(ContactPanel, _React$Component5);

	  function ContactPanel() {
	    _classCallCheck(this, ContactPanel);

	    _get(Object.getPrototypeOf(ContactPanel.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ContactPanel, [{
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
	              'Contact Info.'
	            ),
	            React.createElement('hr', null),
	            'ANNA SANCHEZ',
	            React.createElement('br', null),
	            'MAXMART MALL, 37, Indepence Road Accra',
	            React.createElement('br', null),
	            '024567120, anna.sanchez@maxmart.com'
	          )
	        )
	      );
	    }
	  }]);

	  return ContactPanel;
	})(React.Component);

	var LegalPanel = (function (_React$Component6) {
	  _inherits(LegalPanel, _React$Component6);

	  function LegalPanel() {
	    _classCallCheck(this, LegalPanel);

	    _get(Object.getPrototypeOf(LegalPanel.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(LegalPanel, [{
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
	            { xs: 12, style: {
	                padding: 50, paddingTop: 12.5, paddingBottom: 25
	              }, className: 'text-center' },
	            React.createElement(
	              'h3',
	              { className: 'fg-black50' },
	              'Legal'
	            ),
	            React.createElement('hr', null),
	            'Test',
	            React.createElement('br', null),
	            'Test',
	            React.createElement('br', null),
	            'Test'
	          )
	        )
	      );
	    }
	  }]);

	  return LegalPanel;
	})(React.Component);

	var AccountDetailPanel = (function (_React$Component7) {
	  _inherits(AccountDetailPanel, _React$Component7);

	  function AccountDetailPanel() {
	    _classCallCheck(this, AccountDetailPanel);

	    _get(Object.getPrototypeOf(AccountDetailPanel.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(AccountDetailPanel, [{
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
	            { xs: 12, style: {
	                padding: 50, paddingTop: 12.5, paddingBottom: 25
	              }, className: 'text-center' },
	            React.createElement(
	              'h3',
	              { className: 'fg-black50' },
	              'Account Details'
	            ),
	            React.createElement('hr', null),
	            'Test',
	            React.createElement('br', null),
	            'Test',
	            React.createElement('br', null),
	            'Test'
	          )
	        )
	      );
	    }
	  }]);

	  return AccountDetailPanel;
	})(React.Component);

	var CompanyPanel = (function (_React$Component8) {
	  _inherits(CompanyPanel, _React$Component8);

	  function CompanyPanel() {
	    _classCallCheck(this, CompanyPanel);

	    _get(Object.getPrototypeOf(CompanyPanel.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(CompanyPanel, [{
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
	              'Company Info.'
	            ),
	            React.createElement('hr', null),
	            'Test',
	            React.createElement('br', null),
	            'Test',
	            React.createElement('br', null),
	            'Test'
	          )
	        )
	      );
	    }
	  }]);

	  return CompanyPanel;
	})(React.Component);

	var BeneficiaryPanel = (function (_React$Component9) {
	  _inherits(BeneficiaryPanel, _React$Component9);

	  function BeneficiaryPanel() {
	    _classCallCheck(this, BeneficiaryPanel);

	    _get(Object.getPrototypeOf(BeneficiaryPanel.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(BeneficiaryPanel, [{
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
	            { xs: 12, style: {
	                padding: 50, paddingTop: 12.5, paddingBottom: 25
	              }, className: 'text-center' },
	            React.createElement(
	              'h3',
	              { className: 'fg-black50' },
	              'Beneficiary'
	            ),
	            React.createElement('hr', null),
	            'Test',
	            React.createElement('br', null),
	            'Test',
	            React.createElement('br', null),
	            'Test'
	          )
	        )
	      );
	    }
	  }]);

	  return BeneficiaryPanel;
	})(React.Component);

	var Body = (function (_React$Component10) {
	  _inherits(Body, _React$Component10);

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
	              'h3',
	              null,
	              'ACCOUNT'
	            )
	          )
	        ),
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 20, smCollapseRight: true },
	              React.createElement(
	                PanelContainer,
	                null,
	                React.createElement(
	                  Panel,
	                  { horizontal: true, className: 'force-collapse' },
	                  React.createElement(
	                    PanelLeft,
	                    { noRadius: true, className: 'panel-sm-4' },
	                    React.createElement(ContactPanel, null)
	                  ),
	                  React.createElement(
	                    PanelBody,
	                    { className: 'panel-sm-4', style: { padding: 0 } },
	                    React.createElement(BeneficiaryPanel, null)
	                  ),
	                  React.createElement(
	                    PanelRight,
	                    { noRadius: true, className: 'panel-sm-4' },
	                    React.createElement(LegalPanel, null)
	                  ),
	                  React.createElement(
	                    PanelRight,
	                    { className: 'panel-sm-4' },
	                    React.createElement(AccountDetailPanel, null)
	                  ),
	                  React.createElement(
	                    PanelRight,
	                    { className: 'panel-sm-4' },
	                    React.createElement(CompanyPanel, null)
	                  )
	                )
	              )
	            )
	          )
	        ),
	        React.createElement(InfoKnob, null),
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 20, smCollapseRight: true },
	              React.createElement(UserPricingMgtPanel, null)
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Body;
	})(React.Component);

	var _default = (function (_React$Component11) {
	  _inherits(_default, _React$Component11);

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

	var _classnames = __webpack_require__(36);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactRouter = __webpack_require__(3);

	var _globalJsxSidebar_component = __webpack_require__(37);

	var _globalJsxSidebar_component2 = _interopRequireDefault(_globalJsxSidebar_component);

	var _commonHeader = __webpack_require__(38);

	var _commonHeader2 = _interopRequireDefault(_commonHeader);

	var _commonSidebar = __webpack_require__(41);

	var _commonSidebar2 = _interopRequireDefault(_commonSidebar);

	var _commonFooter = __webpack_require__(43);

	var _commonFooter2 = _interopRequireDefault(_commonFooter);

	var _globalJsxLoremipsum = __webpack_require__(42);

	var _globalJsxLoremipsum2 = _interopRequireDefault(_globalJsxLoremipsum);

	var BeneficiaryForm = (function (_React$Component) {
	  _inherits(BeneficiaryForm, _React$Component);

	  function BeneficiaryForm() {
	    _classCallCheck(this, BeneficiaryForm);

	    _get(Object.getPrototypeOf(BeneficiaryForm.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(BeneficiaryForm, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $('#bendateofbirth').datetimepicker({ format: 'DD/MM/YYYY' });
	      $('#bencntryres').select2({ placeholder: "Select a Country", allowClear: true });
	      $('#bennationality').select2({ placeholder: "Select a Country", allowClear: true });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      //const {date, format, mode, inputFormat} = this.state;
	      return React.createElement(
	        Form,
	        { id: 'beneficiary-form' },
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 4, xs: 12, collapseLeft: true, xsOnlyCollapseRight: true },
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  null,
	                  'Title'
	                ),
	                React.createElement(
	                  'div',
	                  null,
	                  React.createElement(
	                    Radio,
	                    { inline: true, value: 'MR', defaultChecked: true, name: 'inline-radio-options' },
	                    'Mr.'
	                  ),
	                  React.createElement(
	                    Radio,
	                    { inline: true, value: 'MRS', name: 'inline-radio-options' },
	                    'Mrs.'
	                  ),
	                  React.createElement(
	                    Radio,
	                    { inline: true, value: 'MS', name: 'inline-radio-options' },
	                    'Ms.'
	                  ),
	                  React.createElement(
	                    Radio,
	                    { inline: true, value: 'OTHERS', name: 'inline-radio-options' },
	                    'Others'
	                  )
	                )
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'firstname' },
	                  'First Name *'
	                ),
	                React.createElement(Input, { type: 'text', id: 'firstname', placeholder: 'First Name', className: 'required' })
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'middlename' },
	                  'Middle Name'
	                ),
	                React.createElement(Input, { type: 'text', id: 'middlename', placeholder: 'Middle Name' })
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'lastname' },
	                  'Last Name *'
	                ),
	                React.createElement(Input, { type: 'text', id: 'lastname', placeholder: 'Last Name', className: 'required' })
	              )
	            ),
	            React.createElement(
	              Col,
	              { sm: 4, xs: 6, collapseLeft: true, className: 'form-border' },
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  null,
	                  'Gender'
	                ),
	                React.createElement(
	                  'div',
	                  null,
	                  React.createElement(
	                    Radio,
	                    { inline: true, value: 'MALE', defaultChecked: true, name: 'inline-radio-options' },
	                    'Male'
	                  ),
	                  React.createElement(
	                    Radio,
	                    { inline: true, value: 'FEMALE', name: 'inline-radio-options' },
	                    'Female'
	                  )
	                )
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'bendateofbirth' },
	                  'Date Of Birth *'
	                ),
	                React.createElement(Input, { type: 'text', id: 'bendateofbirth', placeholder: 'Date Of Birth', className: 'datepicker required' })
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'bencntryres' },
	                  'Country Of Residence *'
	                ),
	                React.createElement(
	                  Select,
	                  { id: 'bencntryres', placeholder: 'Select a Country', className: 'required' },
	                  React.createElement(
	                    'option',
	                    { value: '1' },
	                    'NIGERIA'
	                  ),
	                  React.createElement(
	                    'option',
	                    { value: '2' },
	                    'GHANA'
	                  ),
	                  React.createElement(
	                    'option',
	                    { value: '3' },
	                    'UNITED KINGDOM'
	                  )
	                )
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'bennationality' },
	                  'Nationality *'
	                ),
	                React.createElement(
	                  Select,
	                  { id: 'bennationality', placeholder: 'Select a Country', className: 'required' },
	                  React.createElement(
	                    'option',
	                    { value: '1' },
	                    'NIGERIA'
	                  ),
	                  React.createElement(
	                    'option',
	                    { value: '2' },
	                    'GHANA'
	                  ),
	                  React.createElement(
	                    'option',
	                    { value: '3' },
	                    'UNITED KINGDOM'
	                  )
	                )
	              )
	            )
	          ),
	          React.createElement('hr', { style: {
	              borderColor: '#D3D3D3', borderWidth: 2, marginTop: 15, marginBottom: 0, width: 100000
	            }, className: 'pull-right' }),
	          React.createElement('br', null),
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 4, xs: 12, collapseLeft: true, xsOnlyCollapseRight: true },
	              React.createElement(
	                Button,
	                null,
	                'Cancel'
	              )
	            ),
	            React.createElement(Col, { sm: 4, xs: 12, collapseLeft: true, xsOnlyCollapseRight: true }),
	            React.createElement(
	              Col,
	              { sm: 4, xs: 6, collapseLeft: true, className: 'form-border' },
	              React.createElement(
	                Button,
	                { bsStyle: 'darkgreen45' },
	                'Add New Beneficiary'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return BeneficiaryForm;
	})(React.Component);

	var BeneficiaryDetail = (function (_React$Component2) {
	  _inherits(BeneficiaryDetail, _React$Component2);

	  function BeneficiaryDetail() {
	    _classCallCheck(this, BeneficiaryDetail);

	    _get(Object.getPrototypeOf(BeneficiaryDetail.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(BeneficiaryDetail, [{
	    key: 'showBeneficiaryForm',
	    value: function showBeneficiaryForm() {
	      $("#form_id").show("slow");
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        Grid,
	        null,
	        React.createElement(
	          'h4',
	          null,
	          'LIST OF BENEFICIARIES'
	        ),
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            Table,
	            null,
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
	                    'strong',
	                    null,
	                    'ANNA SANCHEZ'
	                  ),
	                  React.createElement(
	                    'p',
	                    null,
	                    'anna.sanchez@maxmart.com. ',
	                    React.createElement(
	                      'strong',
	                      null,
	                      'Administrator'
	                    )
	                  )
	                ),
	                React.createElement(
	                  'td',
	                  { width: '75' },
	                  React.createElement(
	                    _reactRouter.Link,
	                    { to: '/app/user/settings' },
	                    React.createElement(Icon, { glyph: 'icon-fontello-cog' })
	                  )
	                ),
	                React.createElement(
	                  'td',
	                  { width: '75' },
	                  React.createElement(
	                    _reactRouter.Link,
	                    { to: '/app/user/add' },
	                    React.createElement(Icon, { glyph: 'icon-fontello-trash' })
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
	            Button,
	            { bsStyle: 'darkgreen45', onClick: this.showBeneficiaryForm },
	            'Add New Beneficiary'
	          )
	        ),
	        React.createElement('br', null),
	        React.createElement(
	          Row,
	          null,
	          React.createElement(
	            'div',
	            { id: 'form_id', style: { display: "none" } },
	            React.createElement(BeneficiaryForm, null)
	          )
	        )
	      );
	    }
	  }]);

	  return BeneficiaryDetail;
	})(React.Component);

	var LegalDetail = (function (_React$Component3) {
	  _inherits(LegalDetail, _React$Component3);

	  function LegalDetail() {
	    _classCallCheck(this, LegalDetail);

	    _get(Object.getPrototypeOf(LegalDetail.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(LegalDetail, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $('#idexpirydate').datetimepicker({ format: 'DD/MM/YYYY' });
	      $('#idtype').select2({ placeholder: "Select a Country", allowClear: true });
	      $('#cntryaddress').select2({ placeholder: "Select a Country", allowClear: true });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      //const {date, format, mode, inputFormat} = this.state;
	      return React.createElement(
	        Form,
	        { id: 'legal-form' },
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 4, xs: 12, collapseLeft: true, xsOnlyCollapseRight: true },
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  null,
	                  'Title'
	                ),
	                React.createElement(
	                  'div',
	                  null,
	                  React.createElement(
	                    Radio,
	                    { inline: true, value: 'MR', defaultChecked: true, name: 'inline-radio-options' },
	                    'Mr.'
	                  ),
	                  React.createElement(
	                    Radio,
	                    { inline: true, value: 'MRS', name: 'inline-radio-options' },
	                    'Mrs.'
	                  ),
	                  React.createElement(
	                    Radio,
	                    { inline: true, value: 'MS', name: 'inline-radio-options' },
	                    'Ms.'
	                  ),
	                  React.createElement(
	                    Radio,
	                    { inline: true, value: 'OTHERS', name: 'inline-radio-options' },
	                    'Others'
	                  )
	                )
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'firstname' },
	                  'Name'
	                ),
	                React.createElement(Input, { disabled: true, type: 'text', id: 'name', placeholder: 'Name', className: 'required' })
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'email' },
	                  'Email'
	                ),
	                React.createElement(Input, { disabled: true, type: 'email', id: 'email', placeholder: 'Email' })
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'houseno' },
	                  'House No*'
	                ),
	                React.createElement(Input, { id: 'text', id: 'houseno', placeholder: 'House No', className: 'required' })
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'street' },
	                  'Street*'
	                ),
	                React.createElement(Input, { id: 'text', id: 'street', placeholder: 'Street', className: 'required' })
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'town' },
	                  'Town/City*'
	                ),
	                React.createElement(Input, { id: 'text', id: 'town', placeholder: 'Town', className: 'required' })
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'stateregion' },
	                  'State/Region*'
	                ),
	                React.createElement(Input, { id: 'text', id: 'stateregion', placeholder: 'State or Region', className: 'required' })
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'cntryaddress' },
	                  'Country *'
	                ),
	                React.createElement(
	                  Select,
	                  { id: 'cntryaddress', placeholder: 'Select a Country' },
	                  React.createElement(
	                    'option',
	                    { value: '1' },
	                    'NIGERIA'
	                  ),
	                  React.createElement(
	                    'option',
	                    { value: '2' },
	                    'GHANA'
	                  ),
	                  React.createElement(
	                    'option',
	                    { value: '3' },
	                    'UNITED KINGDOM'
	                  )
	                )
	              )
	            ),
	            React.createElement(
	              Col,
	              { sm: 4, xs: 6, collapseLeft: true, className: 'form-border' },
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  null,
	                  'Address Verification'
	                ),
	                React.createElement(
	                  'div',
	                  null,
	                  React.createElement(
	                    Radio,
	                    { inline: true, value: 'YES', name: 'inline-radio-options' },
	                    'Yes'
	                  ),
	                  React.createElement(
	                    Radio,
	                    { inline: true, value: 'NO', name: 'inline-radio-options' },
	                    'No'
	                  )
	                )
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'phoneno' },
	                  'Phone Number *'
	                ),
	                React.createElement(Input, { type: 'text', id: 'phoneno', placeholder: 'Phone Number', className: 'required' })
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'cntryres' },
	                  'Type Of ID Document *'
	                ),
	                React.createElement(
	                  Select,
	                  { id: 'idtype', placeholder: 'Select a ID Type' },
	                  React.createElement(
	                    'option',
	                    { value: '1' },
	                    'INTERNATIONAL PASSPORT'
	                  ),
	                  React.createElement(
	                    'option',
	                    { value: '2' },
	                    'VOTER\'S CARD'
	                  ),
	                  React.createElement(
	                    'option',
	                    { value: '3' },
	                    'NATIONAL ID'
	                  )
	                )
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'documentno' },
	                  'Document Number *'
	                ),
	                React.createElement(Input, { type: 'text', id: 'documentno', placeholder: 'Document Number', className: 'required' })
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'idexpirydate' },
	                  'Expiry Date *'
	                ),
	                React.createElement(Input, { type: 'text', id: 'idexpirydate', placeholder: 'ID Document Expiry Date', className: 'datepicker required' })
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Button,
	                  { bsStyle: 'darkgreen45' },
	                  'Add Other Documents'
	                )
	              )
	            )
	          ),
	          React.createElement('hr', { style: { borderColor: '#D3D3D3', borderWidth: 2, marginTop: 15, marginBottom: 0, width: 100000 }, className: 'pull-right' }),
	          React.createElement('br', null),
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 4, xs: 12, collapseLeft: true, xsOnlyCollapseRight: true },
	              React.createElement(
	                Button,
	                null,
	                'Cancel'
	              )
	            ),
	            React.createElement(Col, { sm: 4, xs: 12, collapseLeft: true, xsOnlyCollapseRight: true }),
	            React.createElement(
	              Col,
	              { sm: 4, xs: 6, collapseLeft: true, className: 'form-border' },
	              React.createElement(
	                Button,
	                { bsStyle: 'darkgreen45' },
	                'Update Contact and IDs'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return LegalDetail;
	})(React.Component);

	var PersonDetail = (function (_React$Component4) {
	  _inherits(PersonDetail, _React$Component4);

	  function PersonDetail() {
	    _classCallCheck(this, PersonDetail);

	    _get(Object.getPrototypeOf(PersonDetail.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(PersonDetail, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      $('#dateofbirth').datetimepicker({ format: 'DD/MM/YYYY' });
	      $('#cntryres').select2({ placeholder: "Select a Country", allowClear: true });
	      $('#nationality').select2({ placeholder: "Select a Country", allowClear: true });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      //const {date, format, mode, inputFormat} = this.state;
	      return React.createElement(
	        Form,
	        { id: 'person-form' },
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 4, xs: 12, collapseLeft: true, xsOnlyCollapseRight: true },
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  null,
	                  'Title'
	                ),
	                React.createElement(
	                  'div',
	                  null,
	                  React.createElement(
	                    Radio,
	                    { inline: true, value: 'MR', defaultChecked: true, name: 'inline-radio-options' },
	                    'Mr.'
	                  ),
	                  React.createElement(
	                    Radio,
	                    { inline: true, value: 'MRS', name: 'inline-radio-options' },
	                    'Mrs.'
	                  ),
	                  React.createElement(
	                    Radio,
	                    { inline: true, value: 'MS', name: 'inline-radio-options' },
	                    'Ms.'
	                  ),
	                  React.createElement(
	                    Radio,
	                    { inline: true, value: 'OTHERS', name: 'inline-radio-options' },
	                    'Others'
	                  )
	                )
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'firstname' },
	                  'First Name *'
	                ),
	                React.createElement(Input, { disabled: true, type: 'text', id: 'firstname', placeholder: 'First Name', className: 'required' })
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'middlename' },
	                  'Middle Name'
	                ),
	                React.createElement(Input, { disabled: true, type: 'text', id: 'middlename', placeholder: 'Middle Name' })
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'lastname' },
	                  'Last Name *'
	                ),
	                React.createElement(Input, { disabled: true, type: 'text', id: 'lastname', placeholder: 'Last Name', className: 'required' })
	              )
	            ),
	            React.createElement(
	              Col,
	              { sm: 4, xs: 6, collapseLeft: true, className: 'form-border' },
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  null,
	                  'Gender'
	                ),
	                React.createElement(
	                  'div',
	                  null,
	                  React.createElement(
	                    Radio,
	                    { inline: true, value: 'MALE', defaultChecked: true, name: 'inline-radio-options' },
	                    'Male'
	                  ),
	                  React.createElement(
	                    Radio,
	                    { inline: true, value: 'FEMALE', name: 'inline-radio-options' },
	                    'Female'
	                  )
	                )
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  null,
	                  'Date Of Birth *'
	                ),
	                React.createElement(Input, { type: 'text', id: 'dateofbirth', placeholder: 'Date Of Birth', className: 'datepicker required' })
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'cntryres' },
	                  'Country Of Residence *'
	                ),
	                React.createElement(
	                  Select,
	                  { id: 'cntryres', placeholder: 'Select a Country', className: 'required' },
	                  React.createElement(
	                    'option',
	                    { value: '1' },
	                    'NIGERIA'
	                  ),
	                  React.createElement(
	                    'option',
	                    { value: '2' },
	                    'GHANA'
	                  ),
	                  React.createElement(
	                    'option',
	                    { value: '3' },
	                    'UNITED KINGDOM'
	                  )
	                )
	              ),
	              React.createElement(
	                FormGroup,
	                null,
	                React.createElement(
	                  Label,
	                  { htmlFor: 'nationality' },
	                  'Nationality *'
	                ),
	                React.createElement(
	                  Select,
	                  { id: 'nationality', placeholder: 'Select a Country', className: 'required' },
	                  React.createElement(
	                    'option',
	                    { value: '1' },
	                    'NIGERIA'
	                  ),
	                  React.createElement(
	                    'option',
	                    { value: '2' },
	                    'GHANA'
	                  ),
	                  React.createElement(
	                    'option',
	                    { value: '3' },
	                    'UNITED KINGDOM'
	                  )
	                )
	              )
	            )
	          ),
	          React.createElement('hr', { style: {
	              borderColor: '#D3D3D3', borderWidth: 2, marginTop: 15, marginBottom: 0, width: 100000
	            }, className: 'pull-right' }),
	          React.createElement('br', null),
	          React.createElement(
	            Row,
	            null,
	            React.createElement(
	              Col,
	              { sm: 4, xs: 12, collapseLeft: true, xsOnlyCollapseRight: true },
	              React.createElement(
	                Button,
	                null,
	                'Cancel'
	              )
	            ),
	            React.createElement(Col, { sm: 4, xs: 12, collapseLeft: true, xsOnlyCollapseRight: true }),
	            React.createElement(
	              Col,
	              { sm: 4, xs: 6, collapseLeft: true, className: 'form-border' },
	              React.createElement(
	                Button,
	                { bsStyle: 'darkgreen45' },
	                'Update Personal Detail'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return PersonDetail;
	})(React.Component);

	var Body = (function (_React$Component5) {
	  _inherits(Body, _React$Component5);

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
	              'h3',
	              null,
	              'INFORMATION'
	            ),
	            React.createElement(
	              'h4',
	              null,
	              'Account/Information'
	            )
	          ),
	          React.createElement('hr', { style: {
	              borderColor: '#D3D3D3', borderWidth: 2, marginTop: 15, marginBottom: 0, width: 10000
	            } })
	        ),
	        React.createElement(
	          Grid,
	          null,
	          React.createElement(
	            Col,
	            { xs: 4 },
	            'PLEASE COMPLETE YOUR PERSONAL AND BANK DETAILS',
	            React.createElement(
	              'p',
	              null,
	              'To complete your profile, please provide us with the information requested. This information is mandatory in order to process your file.'
	            ),
	            React.createElement('br', null),
	            React.createElement(
	              'p',
	              null,
	              'Important: Regarding any correspondence with our services, please be sure to mention your merchant account reference no. 26102790. HiPay Mobile contact: support@xtremepay.com'
	            ),
	            React.createElement(
	              'br',
	              null,
	              React.createElement(
	                Button,
	                { bsStyle: 'darkgreen45' },
	                'Upload Your Documents'
	              )
	            )
	          ),
	          React.createElement(
	            Col,
	            { xs: 8 },
	            React.createElement(
	              Accordian,
	              null,
	              React.createElement(
	                AccordianPane,
	                { active: true },
	                React.createElement(
	                  AccordianTitle,
	                  null,
	                  'PERSONAL DETAILS'
	                ),
	                React.createElement(
	                  AccordianContent,
	                  null,
	                  React.createElement(PersonDetail, null)
	                )
	              ),
	              React.createElement(
	                AccordianPane,
	                null,
	                React.createElement(
	                  AccordianTitle,
	                  null,
	                  'LEGAL DETAILS'
	                ),
	                React.createElement(
	                  AccordianContent,
	                  null,
	                  React.createElement(LegalDetail, null)
	                )
	              ),
	              React.createElement(
	                AccordianPane,
	                null,
	                React.createElement(
	                  AccordianTitle,
	                  null,
	                  'BENEFICIAL OWNER'
	                ),
	                React.createElement(
	                  AccordianContent,
	                  null,
	                  React.createElement(BeneficiaryDetail, null)
	                )
	              ),
	              React.createElement(
	                AccordianPane,
	                null,
	                React.createElement(
	                  AccordianTitle,
	                  null,
	                  'COMPANY'
	                ),
	                React.createElement(
	                  AccordianContent,
	                  null,
	                  React.createElement(_globalJsxLoremipsum2['default'], { query: '5s' })
	                )
	              ),
	              React.createElement(
	                AccordianPane,
	                null,
	                React.createElement(
	                  AccordianTitle,
	                  null,
	                  'BUSINESS ACTIVITY'
	                ),
	                React.createElement(
	                  AccordianContent,
	                  null,
	                  React.createElement(_globalJsxLoremipsum2['default'], { query: '5s' })
	                )
	              ),
	              React.createElement(
	                AccordianPane,
	                null,
	                React.createElement(
	                  AccordianTitle,
	                  null,
	                  'BANK DETAILS'
	                ),
	                React.createElement(
	                  AccordianContent,
	                  null,
	                  React.createElement(_globalJsxLoremipsum2['default'], { query: '5s' })
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

	var _default = (function (_React$Component6) {
	  _inherits(_default, _React$Component6);

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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRouter = __webpack_require__(3);

	var _reactRouterLibLocation = __webpack_require__(18);

	var _reactRouterLibLocation2 = _interopRequireDefault(_reactRouterLibLocation);

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
	          var location = new _reactRouterLibLocation2['default'](this.props.path, this.props.query);
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

/***/ }
/******/ ]);