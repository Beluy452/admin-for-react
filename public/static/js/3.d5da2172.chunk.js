webpackJsonp([3],{238:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(5),l=a.n(i),s=a(59),c=a(242),u=a(248),m=a(249),d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=[{blogImg:"/img/main/blogModule-img.jpg",blogTitleH2:"Article first",blogTitleSpan:"identity, inspiration",blogDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",animateClass:"wow animated fadeIn item",learnMore:"https://reactjs.org/"},{blogImg:"/img/main/blogModule-img.jpg",blogTitleH2:"Article Second",blogTitleSpan:"identity, inspiration",blogDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",animateClass:"wow animated fadeIn item",learnMore:"https://reactjs.org/"},{blogImg:"/img/main/blogModule-img.jpg",blogTitleH2:"Article three",blogTitleSpan:"identity, inspiration",blogDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",animateClass:"wow animated fadeIn item",learnMore:"https://reactjs.org/"},{blogImg:"/img/main/blogModule-img.jpg",blogTitleH2:"Article four",blogTitleSpan:"identity, inspiration",blogDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",animateClass:"wow animated fadeIn item",learnMore:"https://reactjs.org/"},{blogImg:"/img/main/blogModule-img.jpg",blogTitleH2:"Article first",blogTitleSpan:"identity, inspiration",blogDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",animateClass:"wow animated fadeIn item",learnMore:"https://reactjs.org/"},{blogImg:"/img/main/blogModule-img.jpg",blogTitleH2:"Article Second",blogTitleSpan:"identity, inspiration",blogDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",animateClass:"wow animated fadeIn item",learnMore:"https://reactjs.org/"},{blogImg:"/img/main/blogModule-img.jpg",blogTitleH2:"Article three",blogTitleSpan:"identity, inspiration",blogDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",animateClass:"wow animated fadeIn item",learnMore:"https://reactjs.org/"},{blogImg:"/img/main/blogModule-img.jpg",blogTitleH2:"Article four",blogTitleSpan:"identity, inspiration",blogDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",animateClass:"wow animated fadeIn item",learnMore:"https://reactjs.org/"}],h=function(e){function t(){var e,a,o,i;n(this,t);for(var c=arguments.length,u=Array(c),m=0;m<c;m++)u[m]=arguments[m];return a=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={blogItems:f.slice(0,4),haveMore:f.length>4},o.getArticles=function(e,t){return l.a.createElement("div",{className:e.animateClass,key:t},l.a.createElement("div",{className:"blog-img"},l.a.createElement("img",{src:e.blogImg,alt:"text"})),l.a.createElement("div",{className:"blog-title"},l.a.createElement("h2",null,e.blogTitleH2),l.a.createElement("span",{children:e.blogTitleSpan})),l.a.createElement("div",{className:"blog-description"},l.a.createElement("span",{children:e.blogDescription})),l.a.createElement(s.b,{to:e.learnMore,target:"_blank",rel:"noopener noreferrer",className:"learn-more"},"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435"))},o.showMore=function(){var e=o.state.blogItems,t=e.concat(f.slice(e.length,e.length+4));o.setState({blogItems:t,haveMore:t.length!==f.length})},i=a,r(o,i)}return o(t,e),d(t,[{key:"render",value:function(){var e=this.state,t=e.blogItems,a=e.haveMore;return l.a.createElement("div",{className:"ContactUs"},l.a.createElement(c.a,null),l.a.createElement("section",{className:"offset-section contentMobileAnimate"},l.a.createElement("div",{"data-wow-duration":"1.5s",className:"wow animated fadeInDown title-blog-container"},l.a.createElement("h2",{className:"title-page"},l.a.createElement("strong",{className:"crossed-out",children:"\u0431\u043b\u043e\u0433"}),l.a.createElement("span",{children:"\u0412\u0456\u0434 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0456\u0432 \u0434\u043b\u044f \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0456\u0432"}))),l.a.createElement("main",{className:"width-container"},l.a.createElement("section",{"data-wow-offset":"100","data-wow-duration":"1.5s",className:"wow animated fadeInUp blog-container"},t.map(this.getArticles),a&&l.a.createElement("button",{className:"more-project",onClick:this.showMore,children:"\u0411\u0456\u043b\u044c\u0448\u0435 \u0441\u0442\u0430\u0442\u0442\u0435\u0439"}))),l.a.createElement(m.a,null)),l.a.createElement(u.a,null))}}]),t}(l.a.PureComponent);t.default=h},239:function(e,t,a){"use strict";function n(e){t.defaults=i=(0,o.default)(i,e)}Object.defineProperty(t,"__esModule",{value:!0}),t.mergeOptions=t.defaults=void 0;var r=a(3),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i={wrapperId:"notification-wrapper",animationDuration:300,timeout:5e3,zIndex:1e3,top:0,colors:{error:{color:"#FFFFFF",backgroundColor:"#E85742"},success:{color:"#FFFFFF",backgroundColor:"#55CA92"},warning:{color:"#333333",backgroundColor:"#F5E273"},info:{color:"#FFFFFF",backgroundColor:"#4990E2"}}};t.defaults=i,t.mergeOptions=n},240:function(e,t,a){"use strict";function n(e){var t=e.facebook,a=e.linkedin;return o.a.createElement("div",{className:"social"},o.a.createElement(s.b,{to:t,target:"_blank"},o.a.createElement("svg",{className:"faceBook-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 57.17 57.17"},o.a.createElement("g",null,o.a.createElement("rect",{className:"faceBook-icon-1",x:"8",width:"0.17",height:"57.17"}),o.a.createElement("rect",{className:"faceBook-icon-1",x:"49",width:"0.17",height:"57.17"}),o.a.createElement("rect",{className:"faceBook-icon-1",x:"28.5",y:"20.5",width:"0.17",height:"57.17",transform:"translate(-20.5 77.67) rotate(-90)"}),o.a.createElement("rect",{className:"faceBook-icon-1",x:"28.5",y:"-19.5",width:"0.17",height:"57.17",transform:"translate(19.5 37.68) rotate(-90)"}),o.a.createElement("rect",{className:"faceBook-icon-2",x:"8",y:"9",width:"1",height:"16.13"}),o.a.createElement("rect",{className:"faceBook-icon-2",x:"15.57",y:"1.44",width:"1",height:"16.13",transform:"translate(6.56 25.57) rotate(-90)"}),o.a.createElement("rect",{className:"faceBook-icon-2",x:"48.09",y:"33.05",width:"1",height:"16.13",transform:"translate(97.18 82.22) rotate(180)"}),o.a.createElement("rect",{className:"faceBook-icon-2",x:"40.53",y:"40.61",width:"1",height:"16.13",transform:"translate(89.7 7.65) rotate(90)"}),o.a.createElement("path",{className:"faceBook-icon-2",d:"M30.48,41.1H26v-12H23V24.95h3V22.51c0-3.38.92-5.43,4.89-5.43h3.31v4.14H32.11c-1.55,0-1.62.58-1.62,1.66v2.07H34.2l-.44,4.14H30.48Z"})))),o.a.createElement(s.b,{to:a,target:"_blank"},o.a.createElement("svg",{className:"linked-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 57.17 57.17"},o.a.createElement("g",null,o.a.createElement("rect",{className:"linked-icon-1",x:"8",width:"0.17",height:"57.17"}),o.a.createElement("rect",{className:"linked-icon-1",x:"49",width:"0.17",height:"57.17"}),o.a.createElement("rect",{className:"linked-icon-1",x:"28.5",y:"20.5",width:"0.17",height:"57.17",transform:"translate(-20.5 77.67) rotate(-90)"}),o.a.createElement("rect",{className:"linked-icon-1",x:"28.5",y:"-19.5",width:"0.17",height:"57.17",transform:"translate(19.5 37.68) rotate(-90)"}),o.a.createElement("rect",{className:"linked-icon-2",x:"8",y:"9",width:"1",height:"16.13"}),o.a.createElement("rect",{className:"linked-icon-2",x:"15.57",y:"1.44",width:"1",height:"16.13",transform:"translate(6.56 25.57) rotate(-90)"}),o.a.createElement("rect",{className:"linked-icon-2",x:"48.09",y:"33.05",width:"1",height:"16.13",transform:"translate(97.18 82.22) rotate(180)"}),o.a.createElement("rect",{className:"linked-icon-2",x:"40.53",y:"40.61",width:"1",height:"16.13",transform:"translate(89.7 7.65) rotate(90)"}),o.a.createElement("path",{className:"linked-icon-2",d:"M21.46,19.18a2.39,2.39,0,1,0,2.38,2.38A2.39,2.39,0,0,0,21.46,19.18Z"}),o.a.createElement("rect",{className:"linked-icon-2",x:"19.41",y:"25.76",width:"4.11",height:"13.24"}),o.a.createElement("path",{className:"linked-icon-2",d:"M34,25.43a4.32,4.32,0,0,0-3.89,2.14H30V25.76H26.1V39h4.11V32.45c0-1.73.33-3.4,2.47-3.4s2.14,2,2.14,3.51V39h4.11V31.74C38.93,28.17,38.16,25.43,34,25.43Z"})))))}t.a=n;var r=a(5),o=a.n(r),i=a(7),l=a.n(i),s=a(59);n.propTypes={facebook:l.a.string,linkedin:l.a.string},n.defaultProps={facebook:"https://www.facebook.com/sasha.beluy.56",linkedin:"https://www.linkedin.com/in/oleksandr-bilyi-83156b10a/"}},241:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=a(5),s=a.n(l),c=a(244),u=a.n(c),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d={user:"",site:"",email:"",error:{user:null,site:null,email:null}},f={user:function(e){return e.length<2?"your name must be greater than 2 characters":null},email:function(e){var t=null;return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||(t="description must be greater than 10 characters"),t},site:function(e){return e.length<10?"description must be greater than 10 characters":null}},h=function(e){function t(e){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onFieldsChange=function(e){var t,r=f[e.target.name](e.target.value);a.setState((t={},n(t,e.target.name,e.target.value),n(t,"error",Object.assign({},a.state.error,n({},e.target.name,r))),t))},a.handleSubmit=function(e){function t(e){return e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(new Error(e.statusText))}e.preventDefault();var n=new FormData(e.target);fetch("/send.php",{method:"post",body:n}).then(t).then(function(){a.setState(d),c.notify.show("\u0424\u043e\u0440\u043c\u0430 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430!","success")}).catch(function(e){c.notify.show("\u043f\u043e\u0441\u0438\u043b\u043a\u0430, \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043d\u0435 \u0432\u0456\u0434\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e!","error"),console.warn("Request failed",e)})},a.haveError=function(){var e=!1;return Object.keys(a.state.error).forEach(function(t){null===a.state.error[t]&&""!==a.state[t]||(e=!0)}),e},a.state=d,a}return i(t,e),m(t,[{key:"render",value:function(){var e=this.state,t=e.user,a=e.site,n=e.email,r=e.error;return s.a.createElement("form",{className:"form",method:"post",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"input-field max-width-input"},s.a.createElement("label",{htmlFor:"your-name"},"\u041c\u043e\u0454 \u0456\u043c'\u044f"),s.a.createElement("input",{id:"your-name",value:t,onChange:this.onFieldsChange,type:"text",required:!0,name:"user",className:"form-control"}),r.user&&s.a.createElement("p",{className:"error-text"},r.user)),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"your-name"},"\u0417\u0430\u043c\u043e\u0432\u0438\u0442\u0438 \u0441\u0430\u0439\u0442"),s.a.createElement("input",{id:"your-website",value:a,onChange:this.onFieldsChange,type:"text",required:!0,name:"site",className:"form-control"}),r.site&&s.a.createElement("p",{className:"error-text"},r.site)),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"your-name"},"\u043d\u0430\u0448 E-mail"),s.a.createElement("input",{id:"your-email",value:n,onChange:this.onFieldsChange,type:"email",required:!0,name:"email",className:"form-control"}),r.email&&s.a.createElement("p",{className:"error-text"},r.email)),s.a.createElement("div",{className:"big-btn"},s.a.createElement("button",{type:"submit",disabled:this.haveError(),className:"more-projects_link",name:"submit",children:"\u0432\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438"})),s.a.createElement(u.a,null))}}]),t}(s.a.Component);t.a=h},242:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=a(5),l=a.n(i),s=a(105),c=a(243),u=a(240),m=a(59),d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f={"/portfolio":"\u0420\u043e\u0431\u043e\u0442\u0438","/aboutUs":"\u041f\u0440\u043e \u043d\u0430\u0441","/contactUs":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438","/blog":"\u0411\u043b\u043e\u0433"},h=function(e){function t(){var e,a,o,i;n(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return a=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.state={menuShowed:!1,toggleMenu:!1},o.removeClassMenu=function(){o.setState({menuShowed:!1,toggleMenu:!1}),document.querySelector(".contentMobileAnimate").classList.remove("active")},o.switchToggle=function(){o.setState({menuShowed:!o.state.menuShowed,toggleMenu:!o.state.toggleMenu}),document.querySelector(".contentMobileAnimate").classList.toggle("active")},i=a,r(o,i)}return o(t,e),d(t,[{key:"render",value:function(){var e=this.state.menuShowed?"background-menu active":"background-menu",t=this.state.menuShowed?"toggle-menu active":"toggle-menu";return l.a.createElement("header",null,l.a.createElement("div",{className:"header-container-width"},l.a.createElement(m.b,{className:"header-logo",to:"portfolio"},l.a.createElement("svg",{className:"logo-sd header-logo-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 138.37 162.25"},l.a.createElement("g",null,l.a.createElement("path",{className:"logo-sd-1",d:"M34.87,126.63"}),l.a.createElement("rect",{className:"logo-sd-1",x:"60.76",y:"52.33",width:"0.17",height:"109.92"}),l.a.createElement("path",{className:"logo-sd-2",d:"M77.52,24.69l-16.82,11a26.1,26.1,0,0,0-20.12-9.23,12.16,12.16,0,0,0-7.31,2.06q-2.84,2.06-2.84,4.64a7.28,7.28,0,0,0,2,4.88q2.76,3.07,16.64,13.18Q62.1,60.54,64.86,63q6.9,6,9.78,11.47a25.29,25.29,0,0,1,2.88,12q0,12.62-10.14,20.85T40.93,115.5q-12.74,0-22.19-5.37c-6.3-3.58-10.69-8.76-10.69-17.43l13.57-9.35q8.6,13.6,19.8,13.6A16.11,16.11,0,0,0,51.26,94q4-2.93,4-6.76a10.74,10.74,0,0,0-3-7q-3-3.49-13.23-10.67Q19.51,55.94,13.83,48.51T8.15,33.69Q8.15,23,17.6,15.39T40.93,7.75a41.7,41.7,0,0,1,17,3.56A68.92,68.92,0,0,1,77.52,24.69Z"}),l.a.createElement("rect",{className:"logo-sd-1",x:"42.04",y:"-34.49",width:"0.17",height:"84.25",transform:"translate(34.49 49.76) rotate(-90)"}),l.a.createElement("rect",{className:"logo-sd-1",x:"38.27",y:"77.03",width:"0.17",height:"76.71",transform:"translate(-77.03 153.74) rotate(-90)"}),l.a.createElement("rect",{className:"logo-sd-1",x:"95.16",y:"111.54",width:"0.17",height:"86.25",transform:"translate(-59.42 249.91) rotate(-90)"}),l.a.createElement("rect",{className:"logo-sd-1",x:"84.53",y:"6.79",width:"0.17",height:"107.5",transform:"translate(24.08 145.16) rotate(-90)"}),l.a.createElement("rect",{className:"logo-sd-1",x:"130.72",y:"52.33",width:"0.17",height:"109.92"}),l.a.createElement("rect",{className:"logo-sd-1",x:"77.94",y:"34.77",width:"0.17",height:"99.21",transform:"translate(46.34 -26.09) rotate(26.76)"}),l.a.createElement("rect",{className:"logo-sd-1",x:"56.35",y:"36.77",width:"0.17",height:"99.21",transform:"translate(43.85 -16.03) rotate(26.15)"}),l.a.createElement("rect",{className:"logo-sd-1",x:"8.15",y:"0.13",width:"0.18",height:"123.25"}),l.a.createElement("rect",{className:"logo-sd-1",x:"77.45",width:"0.17",height:"162.25"}),l.a.createElement("path",{className:"logo-sd-3",d:"M73.37,57.81"}),l.a.createElement("path",{className:"logo-sd-4",d:"M42.38,115.55l26.89-55.1H61.7c-2.73-2.1-7-5.22-12.59-9.25C39.9,44.46,34.49,40,32.66,38a7,7,0,0,1-2-4.75,5.48,5.48,0,0,1,2.56-4.66,12.06,12.06,0,0,1,7.27-2.06c6.09,0,14.9,3.52,20.78,10.59L77.62,24.67c-6.24-6.28-14.55-10.93-19.91-13.31A41.32,41.32,0,0,0,40.79,7.8Q27,7.8,17.58,15.44c-6.27,5.09-9.43,11.19-9.41,18.31,0,5,1.89,9.9,5.65,14.82s12.12,12,25,21.1Q49,76.85,52,80.33a10.77,10.77,0,0,1,3,7q0,3.84-4,6.76A16,16,0,0,1,41.3,97Q30.15,97,21.59,83.4L8.08,92.75c0,8.67,4.36,13.85,10.63,17.43s13.63,5.37,22.08,5.37Z"}),l.a.createElement("path",{className:"logo-sd-4",d:"M124.84,82.11q-6.05-11.47-15.41-16.57C104.71,63,98.52,61.07,90,60.45l-8.72,17.3h2q15.66,0,22.74,7.44,7.86,8.28,7.86,23.29,0,9.76-3.3,16.43t-8.49,9.5q-5.19,2.82-16.71,2.82h-7.8V85.08L60.76,118.44l.18,36.3h20.2q17.15,0,24.1-2.31a32.7,32.7,0,0,0,12.92-8.33,41.89,41.89,0,0,0,9.35-15.16,57.23,57.23,0,0,0,3.39-20Q130.9,93.58,124.84,82.11Z"}))),l.a.createElement("span",{className:"name-logo"},"Shade Design")),l.a.createElement("nav",null,l.a.createElement("button",{onClick:this.switchToggle,className:t}," ",l.a.createElement("span",null)),l.a.createElement("div",{onClick:this.switchToggle,className:e},l.a.createElement("div",{className:"scroll-menu"},l.a.createElement("div",{className:"max-height"},l.a.createElement(m.b,{className:"menu-logo-icon",to:"portfolio"},l.a.createElement("svg",{className:"logo-sd",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 138.37 162.25"},l.a.createElement("g",null,l.a.createElement("path",{className:"logo-sd-1",d:"M34.87,126.63"}),l.a.createElement("rect",{className:"logo-sd-1",x:"60.76",y:"52.33",width:"0.17",height:"109.92"}),l.a.createElement("path",{className:"logo-sd-2",d:"M77.52,24.69l-16.82,11a26.1,26.1,0,0,0-20.12-9.23,12.16,12.16,0,0,0-7.31,2.06q-2.84,2.06-2.84,4.64a7.28,7.28,0,0,0,2,4.88q2.76,3.07,16.64,13.18Q62.1,60.54,64.86,63q6.9,6,9.78,11.47a25.29,25.29,0,0,1,2.88,12q0,12.62-10.14,20.85T40.93,115.5q-12.74,0-22.19-5.37c-6.3-3.58-10.69-8.76-10.69-17.43l13.57-9.35q8.6,13.6,19.8,13.6A16.11,16.11,0,0,0,51.26,94q4-2.93,4-6.76a10.74,10.74,0,0,0-3-7q-3-3.49-13.23-10.67Q19.51,55.94,13.83,48.51T8.15,33.69Q8.15,23,17.6,15.39T40.93,7.75a41.7,41.7,0,0,1,17,3.56A68.92,68.92,0,0,1,77.52,24.69Z"}),l.a.createElement("rect",{className:"logo-sd-1",x:"42.04",y:"-34.49",width:"0.17",height:"84.25",transform:"translate(34.49 49.76) rotate(-90)"}),l.a.createElement("rect",{className:"logo-sd-1",x:"38.27",y:"77.03",width:"0.17",height:"76.71",transform:"translate(-77.03 153.74) rotate(-90)"}),l.a.createElement("rect",{className:"logo-sd-1",x:"95.16",y:"111.54",width:"0.17",height:"86.25",transform:"translate(-59.42 249.91) rotate(-90)"}),l.a.createElement("rect",{className:"logo-sd-1",x:"84.53",y:"6.79",width:"0.17",height:"107.5",transform:"translate(24.08 145.16) rotate(-90)"}),l.a.createElement("rect",{className:"logo-sd-1",x:"130.72",y:"52.33",width:"0.17",height:"109.92"}),l.a.createElement("rect",{className:"logo-sd-1",x:"77.94",y:"34.77",width:"0.17",height:"99.21",transform:"translate(46.34 -26.09) rotate(26.76)"}),l.a.createElement("rect",{className:"logo-sd-1",x:"56.35",y:"36.77",width:"0.17",height:"99.21",transform:"translate(43.85 -16.03) rotate(26.15)"}),l.a.createElement("rect",{className:"logo-sd-1",x:"8.15",y:"0.13",width:"0.18",height:"123.25"}),l.a.createElement("rect",{className:"logo-sd-1",x:"77.45",width:"0.17",height:"162.25"}),l.a.createElement("path",{className:"logo-sd-3",d:"M73.37,57.81"}),l.a.createElement("path",{className:"logo-sd-4",d:"M42.38,115.55l26.89-55.1H61.7c-2.73-2.1-7-5.22-12.59-9.25C39.9,44.46,34.49,40,32.66,38a7,7,0,0,1-2-4.75,5.48,5.48,0,0,1,2.56-4.66,12.06,12.06,0,0,1,7.27-2.06c6.09,0,14.9,3.52,20.78,10.59L77.62,24.67c-6.24-6.28-14.55-10.93-19.91-13.31A41.32,41.32,0,0,0,40.79,7.8Q27,7.8,17.58,15.44c-6.27,5.09-9.43,11.19-9.41,18.31,0,5,1.89,9.9,5.65,14.82s12.12,12,25,21.1Q49,76.85,52,80.33a10.77,10.77,0,0,1,3,7q0,3.84-4,6.76A16,16,0,0,1,41.3,97Q30.15,97,21.59,83.4L8.08,92.75c0,8.67,4.36,13.85,10.63,17.43s13.63,5.37,22.08,5.37Z"}),l.a.createElement("path",{className:"logo-sd-4",d:"M124.84,82.11q-6.05-11.47-15.41-16.57C104.71,63,98.52,61.07,90,60.45l-8.72,17.3h2q15.66,0,22.74,7.44,7.86,8.28,7.86,23.29,0,9.76-3.3,16.43t-8.49,9.5q-5.19,2.82-16.71,2.82h-7.8V85.08L60.76,118.44l.18,36.3h20.2q17.15,0,24.1-2.31a32.7,32.7,0,0,0,12.92-8.33,41.89,41.89,0,0,0,9.35-15.16,57.23,57.23,0,0,0,3.39-20Q130.9,93.58,124.84,82.11Z"})))),l.a.createElement("ul",{className:"menu"},s.a.map(function(e,t){return e.show&&l.a.createElement("li",{className:"item-menu",key:t},l.a.createElement(m.c,{to:e.path,activeClassName:"active",className:"link"},f[e.path]))})),l.a.createElement("div",{className:"find-us"},l.a.createElement(u.a,null),l.a.createElement("p",{className:"copyright"},"\xa9 2017 Shade.Design ",l.a.createElement("br",null),"UX\\UI DESIGN & DEVELOPMENT ",l.a.createElement("br",null),"All rights reserved")))))),l.a.createElement("div",{className:"email-header"},l.a.createElement(c.a,null))))}}]),t}(l.a.PureComponent);t.a=h},243:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=a(5),l=a.n(i),s=a(241),c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=function(e){function t(){var e,a,o,i;n(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return a=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.state={showModal:!1},o.switchModal=function(){o.setState({showModal:!o.state.showModal})},i=a,r(o,i)}return o(t,e),c(t,[{key:"render",value:function(){var e=this.state.showModal?"feedback-modal active":"feedback-modal";return l.a.createElement("div",null,l.a.createElement("div",{id:"feedback",className:e,role:"dialog"},l.a.createElement("div",{"data-wow-offset":"0","data-wow-duration":".3s",className:"modal-dialog wow animated fadeInUp"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"head-modal"},l.a.createElement("h4",{className:"title-modal"},"Shade Design"),l.a.createElement("button",{onClick:this.switchModal,className:"close-modal"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 371.23 371.23"},l.a.createElement("polygon",{points:"371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23\r 185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615"})))),l.a.createElement("div",{className:"modal-body"},l.a.createElement(s.a,null))))),l.a.createElement("button",{onClick:this.switchModal},l.a.createElement("svg",{className:"letter",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 79.94 56.25"},l.a.createElement("rect",{className:"letter-1",x:"39.72",y:"-36.97",width:"0.43",height:"79.86",transform:"translate(36.97 42.9) rotate(-90)"}),l.a.createElement("rect",{className:"letter-1",x:"39.72",y:"-33.35",width:"0.43",height:"79.86",transform:"translate(33.35 46.52) rotate(-90)"}),l.a.createElement("rect",{className:"letter-1",x:"39.72",y:"10.35",width:"0.43",height:"79.86",transform:"translate(-10.35 90.21) rotate(-90)"}),l.a.createElement("rect",{className:"letter-1",x:"3.04",width:"0.43",height:"56.25",transform:"translate(6.5 56.25) rotate(-180)"}),l.a.createElement("rect",{className:"letter-1",x:"6.74",width:"0.43",height:"56.25",transform:"translate(13.9 56.25) rotate(-180)"}),l.a.createElement("rect",{className:"letter-1",x:"20.15",y:"25.69",width:"0.43",height:"29.57",transform:"translate(3.32 82.45) rotate(-131.21)"}),l.a.createElement("rect",{className:"letter-1",x:"25.29",y:"-0.68",width:"0.43",height:"42.69",transform:"translate(57.85 15.09) rotate(131.21)"}),l.a.createElement("rect",{className:"letter-1",x:"23.96",y:"1.38",width:"0.43",height:"45.88",transform:"translate(58.4 22.15) rotate(131.21)"}),l.a.createElement("rect",{className:"letter-1",x:"17.75",y:"23.46",width:"0.43",height:"29.48",transform:"translate(1.05 76.87) rotate(-131.21)"}),l.a.createElement("path",{className:"letter-1",d:"M41.37,2.87V6.67H73L41.37,34.45h0v5L51.1,31,73,50.21H41.37V54H79.94V2.87Zm34.77,45L54,28.43,76.15,9Z"}),l.a.createElement("rect",{className:"letter-1",x:"39.72",y:"13.99",width:"0.43",height:"79.86",transform:"translate(-13.99 93.85) rotate(-90)"}))))}}]),t}(i.Component);t.a=u},244:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a,n){var r=document.getElementById(g.defaults.wrapperId);m.default.render(c.default.createElement(f.default,{text:e,timeout:a,type:t,color:n}),r)}function o(){var e=document.getElementById(g.defaults.wrapperId);m.default.unmountComponentAtNode(e)}function i(e,t,a,n){if(!document.getElementById(g.defaults.wrapperId).hasChildNodes()){var i=a||g.defaults.timeout;return r(e,t,i,n),-1===i?!1:(setTimeout(function(){o()},i+g.defaults.animationDuration),!0)}return!1}function l(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return this.msgs=[],this.isNotifying=!1,this.currentRecallDelay=t,this.showNotify=function(){if(0===e.msgs.length)return void(e.isNotifying=!1);e.isNotifying=!0;var n=e.msgs.pop();i(n.text,n.type,n.timeout,n.color)?(e.currentRecallDelay=t,n.timeout>0&&setTimeout(function(){return e.showNotify()},n.timeout+g.defaults.animationDuration)):(e.msgs.unshift(n),setTimeout(function(){return e.showNotify()},e.currentRecallDelay),e.currentRecallDelay+=a)},function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g.defaults.timeout,r=arguments[3];e.msgs.push({text:t,type:a,timeout:n,color:r}),e.isNotifying||e.showNotify()}}Object.defineProperty(t,"__esModule",{value:!0}),t.notify=void 0;var s=a(5),c=n(s),u=a(106),m=n(u),d=a(245),f=n(d),h=a(247),p=n(h),g=a(239);t.notify={show:i,hide:o,createShowQueue:l};t.default=p.default},245:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(5),c=n(s),u=a(7),m=n(u),d=a(3),f=n(d),h=a(239),p=a(246),g=n(p),b=function(e){function t(){var e,a,n,i;r(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return a=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.state={containerStyle:g.default.styles.container},i=a,o(n,i)}return i(t,e),l(t,[{key:"getToastStyle",value:function(){var e=this.props,t=e.type,a=e.color,n=g.default.styles,r={};switch(t){case"success":case"error":case"warning":case"info":r=(0,f.default)({},n.content,h.defaults.colors[t]);break;case"custom":var o={backgroundColor:a.background,color:a.text};r=(0,f.default)({},n.content,o);break;default:r=(0,f.default)({},n.content)}return r}},{key:"animateState",value:function(){var e=this,t=g.default.styles;setTimeout(function(){e.updateStyle(t.show)},100),-1!==this.props.timeout&&setTimeout(function(){e.updateStyle(t.hide)},this.props.timeout)}},{key:"updateStyle",value:function(e){var t=g.default.styles;this.setState({containerStyle:(0,f.default)({},t.container,e)})}},{key:"componentDidMount",value:function(){this.animateState()}},{key:"render",value:function(){var e=this.props.text,t=this.state.containerStyle;return c.default.createElement("div",{className:"toast-notification",style:t},c.default.createElement("span",{style:this.getToastStyle()},e))}}]),t}(c.default.Component);b.propTypes={text:m.default.oneOfType([m.default.string,m.default.element]),timeout:m.default.number,type:m.default.string,color:m.default.oneOfType([m.default.object,m.default.string]),style:m.default.oneOfType([m.default.object,m.default.bool])},t.default=b},246:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(239),i=function(){function e(){n(this,e)}return r(e,[{key:"styles",get:function(){return{container:{position:"fixed",width:"50%",margin:"0 auto",right:"0px",top:o.defaults.top,left:"0px",textAlign:"center",zIndex:o.defaults.zIndex,pointerEvents:"none",transition:"all "+o.defaults.animationDuration+"ms ease",transform:"translateY(-100%)",msTransition:"all "+o.defaults.animationDuration+"ms ease",msTransform:"translateY(-100%)",WebkitTransition:"all "+o.defaults.animationDuration+"ms ease",WebkitTransform:"translateY(-100%)",OTransition:"all "+o.defaults.animationDuration+"ms ease",OTransform:"translateY(-100%)",MozTransition:"all "+o.defaults.animationDuration+"ms ease",MozTransform:"translateY(-100%)"},content:{cursor:"pointer",display:"inline-block",width:"auto",borderRadius:"0 0 4px 4px",backgroundColor:"white",padding:"10px 30px",pointerEvents:"all"},show:{transform:"translateY(0)",msTransform:"translateY(0)",WebkitTransform:"translateY(0)",OTransform:"translateY(0)",MozTransform:"translateY(0)"},hide:{transform:"translateY(-100%)",msTransform:"translateY(-100%)",WebkitTransform:"translateY(-100%)",OTransform:"translateY(-100%)",MozTransform:"translateY(-100%)"}}}}]),e}();t.default=new i},247:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(5),c=n(s),u=a(7),m=n(u),d=a(239),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"componentWillMount",value:function(){(0,d.mergeOptions)(this.props.options)}},{key:"render",value:function(){return c.default.createElement("div",{id:d.defaults.wrapperId})}}]),t}(c.default.Component);f.propTypes={options:m.default.object},f.defaultProps={options:{}},t.default=f},248:function(e,t,a){"use strict";function n(){return o.a.createElement("footer",null,o.a.createElement("div",{className:"footer-container"},o.a.createElement("div",{className:"left"},o.a.createElement("p",null,"\xa9 2017 Shade.Design - UX\\UI DESIGN & DEVELOPMENT - CHERNIVTSI - All rights reserved ")),o.a.createElement("div",{className:"right social"},o.a.createElement(i.a,null))))}t.a=n;var r=a(5),o=a.n(r),i=a(240)},249:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=a(241),l=a(5),s=a.n(l),c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),c(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"bottom-main"},s.a.createElement("div",{className:"form-container"},s.a.createElement("h2",{className:"title-form",children:"\u042f\u043a\u0449\u043e \u0432\u0430\u043c \u0441\u043f\u043e\u0434\u043e\u0431\u0430\u043b\u0438\u0441\u044c \u043d\u0430\u0448\u0456 \u0440\u043e\u0431\u043e\u0442\u0438. \u0411\u0443\u0434\u0435\u043c\u043e \u043d\u0430 \u0437\u0432'\u044f\u0437\u043a\u0443"}),s.a.createElement(i.a,null)))}}]),t}(l.Component);t.a=u}});
//# sourceMappingURL=3.d5da2172.chunk.js.map