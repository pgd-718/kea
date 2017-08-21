webpackJsonp([2],{553:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return E});var c,l,s=t(603),u=(t.n(s),t(6)),i=t.n(u),m=t(149),d=(t.n(m),t(150)),p=t(225),f=t(579),h=t(569),b=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),y={full:t(605),import:t(606),actions:t(607),actions2:t(608),actions3:t(609),actionsInject:t(610),reducers:t(611),selectors:t(583),selectors2:t(612),noDecorators:t(613),todoReducer:t(614),component:t(615)},E=(c=Object(m.connect)({actions:[h.a,["toggleFeature"]],props:[h.a,["features"]]}))(l=function(e){function n(){return a(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,e),b(n,[{key:"render",value:function(){var e=this.props.features,n=this.actions.toggleFeature;return i.a.createElement("div",{className:"counter-singleton-scene"},i.a.createElement("div",{className:"description"},i.a.createElement("h2",null,"Example #1 - Counter"),i.a.createElement("p",null,"Let's start with the most basic of all examples: creating a counter that we can increment and decrement with the push of a button!"),i.a.createElement("p",null,"The final result should look something like this:"),i.a.createElement("div",{className:"demo"},i.a.createElement(f.a,null)),i.a.createElement("p",null,"Click the buttons to make sure it works! And then let's begin!")),i.a.createElement("div",{className:"description"},i.a.createElement("h2",null,"1. Connecting @kea"),i.a.createElement("p",null,"Everything starts with importing ",i.a.createElement("code",null,"{ kea }")," into your application:"),i.a.createElement(p.default,{className:"javascript"},y.import),i.a.createElement("p",null,"... and connecting it to your React component:"),i.a.createElement(p.default,{className:"javascript"},y.component),i.a.createElement("button",{onClick:function(){return n("decorators")}},"What is this @kea({})?"),e.decorators?i.a.createElement("div",{className:"extra-help"},i.a.createElement("p",null,"The ",i.a.createElement("code",null,"@kea({})")," syntax is made possible by an experimental ESnext feature called ",i.a.createElement("strong",null,"decorators"),". You need to add the babel plugin ",i.a.createElement("a",{href:"https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy"},"babel-plugin-transform-decorators-legacy")," for them to work."),i.a.createElement("p",null,"In case decorators are not your cup of tea, you may just write your code like so:"),i.a.createElement(p.default,{className:"javascript"},y.noDecorators),i.a.createElement("p",null,"... and it will work just fine. For the rest of this guide we will assume you have decorators enabled.")):null),i.a.createElement("div",{className:"description"},i.a.createElement("h2",null,"2. Actions, reducers, selectors, oh my!"),i.a.createElement("p",null,"Kea is built as a wrapper ",i.a.createElement("strong",null,"on top of")," ",i.a.createElement("a",{href:"http://redux.js.org/"},"redux"),", ",i.a.createElement("a",{href:"https://github.com/reactjs/reselect"},"reselect")," and ",i.a.createElement("a",{href:"https://redux-saga.js.org/"},"redux-saga"),"."),i.a.createElement("p",null,"We strongly recommend you understand the ",i.a.createElement("a",{href:"http://redux.js.org/"},"basics of Redux")," before continuing, as kea liberally borrows concepts from it."),i.a.createElement("h3",null,"2.1. Actions"),i.a.createElement("p",null,"The first thing we do is define our actions:"),i.a.createElement(p.default,{className:"javascript"},y.actions),i.a.createElement("p",null,"An action in kea is simply a function that takes some arguments and returns a payload. In this case the functions take one argument (amount - the amount to increment with) and return an object with it as the only key/value."),i.a.createElement("p",null,i.a.createElement("button",{onClick:function(){return n("actionDetails")}},"What is happening in the background?")),e.actionDetails?i.a.createElement("div",{className:"extra-help"},i.a.createElement("p",null,"We're using the ES6 double arrow shorthand for creating functions. What we're actually doing is this:"),i.a.createElement(p.default,{className:"javascript"},y.actions2),i.a.createElement("p",null,"Also note the line:"),i.a.createElement(p.default,{className:"javascript"},y.actionsInject),i.a.createElement("p",null,"... inside the ",i.a.createElement("code",null,"render()")," function."),i.a.createElement("p",null,"When wrapping kea onto your React component, we also inject a new object, ",i.a.createElement("code",null,"this.actions"),", which automatically binds these action creators to redux's ",i.a.createElement("code",null,"dispatch()")," and generates a unique ",i.a.createElement("code",null,"type")," for them."),i.a.createElement("p",null,"Calling ",i.a.createElement("code",null,"this.actions.increment(1)")," in your React component is the same as doing:"),i.a.createElement(p.default,{className:"javascript"},y.actions3)):null,i.a.createElement("h3",null,"2.2. Reducers"),i.a.createElement("p",null,"Now that we can dispatch actions, we need to define reducers. This is where your data lives."),i.a.createElement("p",null,"Reducers have an initial ",i.a.createElement("code",null,"state")," and define actions which change this state. They may also include an optional ",i.a.createElement("code",null,"propType"),"."),i.a.createElement("p",null,"The latest state of all of the reducers will be passed to your component as props."),i.a.createElement("p",null,"Here's an example:"),i.a.createElement(p.default,{className:"javascript"},y.reducers),i.a.createElement("p",null,"The most important thing to remember about reducers is that they must consist of ",i.a.createElement("a",{href:"http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/"},"pure functions"),"."),i.a.createElement("p",null,"This means that your reducer must:"),i.a.createElement("ol",null,i.a.createElement("li",null,"always return the same output for the same input"),i.a.createElement("li",null,"never change the input! (e.g. when adding something to an array, create and return a new array)"),i.a.createElement("li",null,"never have any other side effects, such as network requests (we'll get to them later in this guide)")),i.a.createElement("p",null,"If you understand how reducers work ",i.a.createElement("a",{href:"http://redux.js.org/docs/basics/Reducers.html"},"in redux"),", you should feel right at home here."),i.a.createElement("p",null,i.a.createElement("button",{onClick:function(){return n("reducerDetails")}},"Tell me more!")),e.reducerDetails?i.a.createElement("div",{className:"extra-help"},i.a.createElement("p",null,"To see more complex reducers in action, look at ",i.a.createElement("a",{href:"https://github.com/keajs/kea-example/blob/master/app/scenes/examples/todos/logic.js"},"the code for the todos example")," (copied below)."),i.a.createElement("p",null,"We store all the todos in one object, and whenever we need to update anything for any todo, we return a completely new object."),i.a.createElement("p",null,"We use ES6 ",i.a.createElement("a",{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"},"destructuring")," and ",i.a.createElement("a",{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator"},"object spread")," features extensively."),i.a.createElement(p.default,{className:"javascript"},y.todoReducer)):null,i.a.createElement("h3",null,"2.3. Selectors"),i.a.createElement("p",null,"The final piece of the puzzle is ",i.a.createElement("code",null,"selectors"),"."),i.a.createElement("p",null,"Selectors (via ",i.a.createElement("a",{href:"https://github.com/reactjs/reselect"},"reselect"),") take as input other selectors and return some output. Selectors are cached and are only updated if their input changes. You should use them to run complex logic that is too costly to run in ",i.a.createElement("code",null,"render()")," every time."),i.a.createElement("p",null,"Adding selectors gives us this final piece of code:"),i.a.createElement(p.default,{className:"javascript"},y.selectors),i.a.createElement("p",null,"The selectors are defined like this:"),i.a.createElement(p.default,{className:"javascript"},y.selectors2),i.a.createElement("p",null,"Note that kea automatically creates selectors for all the reducers that you have defined, so you can use ",i.a.createElement("code",null,"selectors.reducerName")," immediately as input.")),i.a.createElement("div",{className:"description"},i.a.createElement("h2",null,"Final Example"),i.a.createElement("p",null,"Adding all of this together and rendering two  ",i.a.createElement("code",null,"<Counter />"),"s gives us the following result:"),i.a.createElement("div",{className:"demo"},i.a.createElement(f.a,null),i.a.createElement("br",null),i.a.createElement(f.a,null)),i.a.createElement("p",null,"You might notice that something odd is happening: Incrementing one counter automatically increments the other. Is there something we can do about this?"),i.a.createElement("p",null,"Yes. That's what the next example is all about: ",i.a.createElement(d.a,{to:"/guide/counter-dynamic"},"Dynamic counters")),i.a.createElement("h2",null,"Full source"),i.a.createElement(p.default,{className:"javascript"},y.full),i.a.createElement("p",null,"Next page: ",i.a.createElement(d.a,{to:"/guide/counter-dynamic"},"Dynamic counters"))))}}]),n}(u.Component))||l},569:function(e,n,t){"use strict";function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=t(10),r=t.n(o),c=t(149),l=(t.n(c),Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e});n.a=Object(c.kea)({actions:function(){return{toggleFeature:function(e){return{feature:e}}}},reducers:function(e){var n=e.actions;return{features:[{},r.a.object,a({},n.toggleFeature,function(e,n){var t=n.feature;return l({},e,a({},t,!e[t]))})]}}})},579:function(e,n,t){"use strict";function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",function(){return b});var l,s,u=t(580),i=(t.n(u),t(6)),m=t.n(i),d=t(10),p=t.n(d),f=t(149),h=(t.n(f),function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}()),b=(l=Object(f.kea)({actions:function(){return{increment:function(){return{amount:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},decrement:function(){return{amount:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}}}},reducers:function(e){var n,t=e.actions;e.key,e.props;return{counter:[0,p.a.number,(n={},c(n,t.increment,function(e,n){return e+n.amount}),c(n,t.decrement,function(e,n){return e-n.amount}),n)]}},selectors:function(e){var n=e.selectors;return{doubleCounter:[function(){return[n.counter]},function(e){return 2*e},p.a.number]}}}))(s=function(e){function n(){return a(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,e),h(n,[{key:"render",value:function(){var e=this.props,n=e.counter,t=e.doubleCounter,a=this.actions,o=a.increment,r=a.decrement;return m.a.createElement("div",{className:"kea-counter"},"Count: ",n,m.a.createElement("br",null),"Doublecount: ",t,m.a.createElement("br",null),m.a.createElement("button",{onClick:function(){return o(1)}},"Increment"),m.a.createElement("button",{onClick:function(){return r(1)}},"Decrement"))}}]),n}(i.Component))||s},580:function(e,n,t){var a=t(581);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;t(99)(a,o);a.locals&&(e.exports=a.locals)},581:function(e,n,t){n=e.exports=t(98)(void 0),n.push([e.i,".kea-counter {\n  margin: 0;\n}\n",""])},583:function(e,n){e.exports="import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\n@kea({\n  actions: () => ({\n    increment: (amount) => ({ amount }),\n    decrement: (amount) => ({ amount })\n  }),\n\n  reducers: ({ actions }) => ({\n    counter: [0, PropTypes.number, {\n      [actions.increment]: (state, payload) => state + payload.amount,\n      [actions.decrement]: (state, payload) => state - payload.amount\n    }]\n  }),\n\n  selectors: ({ selectors }) => ({\n    doubleCounter: [\n      () => [selectors.counter],\n      (counter) => counter * 2,\n      PropTypes.number\n    ]\n  })\n})\nexport default class Counter extends Component {\n  render () {\n    const { counter, doubleCounter } = this.props\n    const { increment, decrement } = this.actions\n\n    return (\n      <div className='kea-counter'>\n        Count: {counter}<br />\n        Doublecount: {doubleCounter}<br />\n        <button onClick={() => increment(1)}>Increment</button>\n        <button onClick={() => decrement(1)}>Decrement</button>\n      </div>\n    )\n  }\n}\n"},603:function(e,n,t){var a=t(604);"string"==typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;t(99)(a,o);a.locals&&(e.exports=a.locals)},604:function(e,n,t){n=e.exports=t(98)(void 0),n.push([e.i,".counter-singleton-scene {\n  // text-align: center;\n}\n",""])},605:function(e,n){e.exports="// counter/index.js\nimport React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\n@kea({\n  actions: () => ({\n    increment: (amount) => ({ amount }),\n    decrement: (amount) => ({ amount })\n  }),\n\n  reducers: ({ actions }) => ({\n    counter: [0, PropTypes.number, {\n      [actions.increment]: (state, payload) => state + payload.amount,\n      [actions.decrement]: (state, payload) => state - payload.amount\n    }]\n  }),\n\n  selectors: ({ selectors }) => ({\n    doubleCounter: [\n      () => [selectors.counter],\n      (counter) => counter * 2,\n      PropTypes.number\n    ]\n  })\n})\nexport default class Counter extends Component {\n  render () {\n    const { counter, doubleCounter } = this.props\n    const { increment, decrement } = this.actions\n\n    return (\n      <div className='kea-counter'>\n        Count: {counter}\n        <br />\n        Doublecount: {doubleCounter}\n        <br />\n        <button onClick={() => increment(1)}>Increment</button>\n        <button onClick={() => decrement(1)}>Decrement</button>\n      </div>\n    )\n  }\n}\n\n// index.js\nexport default class CounterSingletonScene extends Component {\n  render () {\n    return (\n      <div>\n        <Counter />\n        <Counter />\n      </div>\n    )\n  }\n}\n"},606:function(e,n){e.exports="import { kea } from 'kea'\n"},607:function(e,n){e.exports="// counter/index.js\nimport React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\n@kea({\n  actions: () => ({\n    increment: (amount) => ({ amount }),\n    decrement: (amount) => ({ amount })\n  }),\n  // TODO: add things here\n})\nexport default class Counter extends Component {\n  render () {\n    const { increment, decrement } = this.actions\n\n    // TODO: make these work\n    const counter = 0\n    const counter = 0\n\n    return (\n      <div className='kea-counter'>\n        Count: {counter}\n        <br />\n        Doublecount: {doubleCounter}\n        <br />\n        <button onClick={() => increment(1)}>Increment</button>\n        <button onClick={() => decrement(1)}>Decrement</button>\n      </div>\n    )\n  }\n}\n"},608:function(e,n){e.exports="function increment (amount) {\n  return { amount: amount }\n}\n"},609:function(e,n){e.exports="store.dispatch({\n  type: 'increment counter', // autogenerated unique type\n  payload: {\n    amount: 1\n  }\n})\n"},610:function(e,n){e.exports="const { increment, decrement } = this.actions\n"},611:function(e,n){e.exports="import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\n@kea({\n  actions: () => ({\n    increment: (amount) => ({ amount }),\n    decrement: (amount) => ({ amount })\n  }),\n\n  reducers: ({ actions }) => ({\n    counter: [0, PropTypes.number, {\n      [actions.increment]: (state, payload) => state + payload.amount,\n      [actions.decrement]: (state, payload) => state - payload.amount\n    }]\n  }),\n\n  // TODO: more code here?\n})\nexport default class Counter extends Component {\n  render () {\n    const { counter } = this.props\n    const { increment, decrement } = this.actions\n\n    // TODO: is there a better way? we need to recompute this every time we render!\n    const doubleCounter = counter * 2\n\n    return (\n      <div className='kea-counter'>\n        Count: {counter}\n        <br />\n        Doublecount: {doubleCounter}\n        <br />\n        <button onClick={() => increment(1)}>Increment</button>\n        <button onClick={() => decrement(1)}>Decrement</button>\n      </div>\n    )\n  }\n}\n"},612:function(e,n){e.exports="selectors: ({ selectors }) => ({\n  // add as many as you want\n  nameOfSelector: [\n    // input selectors\n    () => [selectors.firstOtherSelector, selectors.secondOtherSelector],\n    // calculate the result\n    (firstOther, secondOther) => firstOther + secondOther,\n    // type of the result\n    PropTypes.number\n  ]\n})\n"},613:function(e,n){e.exports="import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\nconst keaOptions = {\n  // ... code here\n}\n\nclass Counter extends Component {\n  render () {\n    // TODO: make these work\n    const counter = 0\n    const doubleCounter = 0\n    const increment = () => {}\n    const decrement = () => {}\n\n    return (\n      <div className='kea-counter'>\n        Count: {counter}\n        <br />\n        Doublecount: {doubleCounter}\n        <br />\n        <button onClick={() => increment(1)}>Increment</button>\n        <button onClick={() => decrement(1)}>Decrement</button>\n      </div>\n    )\n  }\n}\n\nexport default kea(keaOptions)(Component)\n"},614:function(e,n){e.exports="\nactions: ({ constants }) => ({\n  // tab\n  showAll: true,\n  showActive: true,\n  showCompleted: true,\n\n  // todos\n  addTodo: value => ({ value }),\n  removeTodo: id => ({ id }),\n  completeTodo: id => ({ id }),\n  unCompleteTodo: id => ({ id }),\n  renameTodo: (id, value) => ({ id, value }),\n  setEditing: id => ({ id }),\n  updateEditValue: (id, value) => ({ id, value }),\n  clearEditing: id => ({ id }),\n  toggleAll: completed => ({ completed }),\n  clearCompleted: true\n}),\n\nreducers: ({ actions, constants }) => ({\n  visibilityFilter: [constants.SHOW_ALL, PropTypes.string, {\n    [actions.showAll]: () => constants.SHOW_ALL,\n    [actions.showActive]: () => constants.SHOW_ACTIVE,\n    [actions.showCompleted]: () => constants.SHOW_COMPLETED\n  }],\n\n  todos: [{}, PropTypes.object, { persist: true }, {\n    [actions.addTodo]: (state, payload) => {\n      const { value } = payload\n      const id = createUuid()\n\n      return {\n        ...state,\n        [id]: {\n          id,\n          createdAt: new Date().getTime(),\n          value,\n          completed: false,\n          editing: false\n        }\n      }\n    },\n    [actions.removeTodo]: (state, payload) => {\n      const { id } = payload\n      const { [id]: _dispose_, ...rest } = state\n      return rest\n    },\n    [actions.completeTodo]: (state, payload) => {\n      const { id } = payload\n\n      return {\n        ...state,\n        [id]: {\n          ...state[id],\n          completed: true\n        }\n      }\n    },\n    [actions.unCompleteTodo]: (state, payload) => {\n      const { id } = payload\n\n      return {\n        ...state,\n        [id]: {\n          ...state[id],\n          completed: false\n        }\n      }\n    },\n    [actions.renameTodo]: (state, payload) => {\n      const { id, value } = payload\n\n      return {\n        ...state,\n        [id]: {\n          ...state[id],\n          value\n        }\n      }\n    },\n    [actions.toggleAll]: (state, payload) => {\n      const { completed } = payload\n      let newState = {}\n      Object.values(state).forEach(todo => {\n        newState[todo.id] = {...todo, completed}\n      })\n\n      return newState\n    },\n    [actions.clearCompleted]: (state, payload) => {\n      let newState = {}\n      Object.values(state).forEach(todo => {\n        if (!todo.completed) {\n          newState[todo.id] = todo\n        }\n      })\n      return newState\n    },\n    [actions.setEditing]: (state, payload) => {\n      const { id } = payload\n\n      return {\n        ...state,\n        [id]: {\n          ...state[id],\n          editing: true,\n          editValue: state[id].value\n        }\n      }\n    },\n    [actions.updateEditValue]: (state, payload) => {\n      const { id, value } = payload\n\n      return {\n        ...state,\n        [id]: {\n          ...state[id],\n          editValue: value\n        }\n      }\n    },\n    [actions.clearEditing]: (state, payload) => {\n      const { id } = payload\n\n      return {\n        ...state,\n        [id]: {\n          ...state[id],\n          editing: false,\n          editValue: null\n        }\n      }\n    }\n  }]\n}),\n\n"},615:function(e,n){e.exports="import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\n@kea({\n  // TODO: code goes here\n})\nexport default class Counter extends Component {\n  render () {\n    // TODO: make these work\n    const counter = 0\n    const doubleCounter = 0\n    const increment = () => {}\n    const decrement = () => {}\n\n    return (\n      <div className='kea-counter'>\n        Count: {counter}\n        <br />\n        Doublecount: {doubleCounter}\n        <br />\n        <button onClick={() => increment(1)}>Increment</button>\n        <button onClick={() => decrement(1)}>Decrement</button>\n      </div>\n    )\n  }\n}\n"}});