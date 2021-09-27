(this.webpackJsonph3=this.webpackJsonph3||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),o=n(3),s=n.n(o),u=(n(12),n(13),n(4)),i=n(5),a=n(7),l=n(6),d=(n(14),n(0)),m=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(t){var c;return Object(u.a)(this,n),(c=e.call(this,t)).playPause=function(){0!==c.state.counter&&c.setState((function(t){return{running:!t.running}}))},c.stop=function(){c.setState({running:!1,counter:0})},c.save=function(){0!==c.state.counter&&c.setState((function(t){var e={};return e.time=t.counter,e.id=c.getNewID(),{times:t.times.concat(e)}}))},c.delete=function(t){c.setState((function(e){return{times:e.times.filter((function(e){return e.id!==t}))}}))},c.load=function(t){c.state.running||c.setState((function(e){return{counter:e.times.filter((function(e){return e.id===t}))[0].time}}))},c.adjust=function(t){"incrementSeconds"===t&&c.state.counter+1e3<36e7?c.setState((function(t){return{counter:t.counter+1e3}})):"incrementSecondsDec"===t&&c.state.counter+1e4<36e7?c.setState((function(t){return{counter:t.counter+1e4}})):"incrementMinutes"===t&&c.state.counter+6e4<36e7?c.setState((function(t){return{counter:t.counter+6e4}})):"incrementMinutesDec"===t&&c.state.counter+6e5<36e7?c.setState((function(t){return{counter:t.counter+6e5}})):"incrementHours"===t&&c.state.counter+36e5<36e7?c.setState((function(t){return{counter:t.counter+36e5}})):"incrementHoursDec"===t&&c.state.counter+36e6<36e7?c.setState((function(t){return{counter:t.counter+36e6}})):"decrementSeconds"===t&&c.state.counter-1e3>=0?c.setState((function(t){return{counter:t.counter-1e3}})):"decrementSecondsDec"===t&&c.state.counter-1e4>=0?c.setState((function(t){return{counter:t.counter-1e4}})):"decrementMinutes"===t&&c.state.counter-6e4>=0?c.setState((function(t){return{counter:t.counter-6e4}})):"decrementMinutesDec"===t&&c.state.counter-6e5>=0?c.setState((function(t){return{counter:t.counter-6e5}})):"decrementHours"===t&&c.state.counter-36e5>=0?c.setState((function(t){return{counter:t.counter-36e5}})):"decrementHoursDec"===t&&c.state.counter-36e6>=0&&c.setState((function(t){return{counter:t.counter-36e6}}))},c.formatTime=function(t){var e=t,n=Math.floor(e/36e5);e-=36e5*n;var r=Math.floor(e/6e4);e-=6e4*r;var o=Math.floor(e/1e3),s="".concat(n<10?"0":"").concat(n),u="".concat(r<10?"0":"").concat(r),i="".concat(o<10?"0":"").concat(o),a=Math.floor(t/36e5),l=Math.floor(t/6e4),d=Math.floor(t/1e3),m=c.props.format;return m=(m=(m=(m=(m=(m=m.replace("%H",s)).replace("%h",a.toString())).replace("%M",u)).replace("%m",l.toString())).replace("%S",i)).replace("%s",d.toString())},c.state={counter:0,running:!1,times:[]},c.idCounter=0,c}return Object(i.a)(n,[{key:"getNewID",value:function(){return this.idCounter++}},{key:"componentDidMount",value:function(){var t=this;this.timer=setInterval((function(){t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"tick",value:function(){this.state.running&&(0!==this.state.counter?this.setState((function(t){return{counter:t.counter-1e3}})):this.setState((function(t){return{running:!t.running}})))}},{key:"render",value:function(){var t=this,e=this.formatTime(this.state.counter);return Object(d.jsxs)("div",{className:"countdown",children:[Object(d.jsxs)("div",{className:"buttonIncrementSeconds",children:[Object(d.jsx)("button",{className:"toggleButton",onClick:function(){return t.adjust("incrementSecondsDec")},children:"\u25b2"}),Object(d.jsx)("button",{className:"toggleButton",onClick:function(){return t.adjust("incrementSeconds")},children:"\u25b2"})]}),Object(d.jsxs)("div",{className:"buttonIncrementMinutes",children:[Object(d.jsx)("button",{className:"toggleButton",onClick:function(){return t.adjust("incrementMinutesDec")},children:"\u25b2"}),Object(d.jsx)("button",{className:"toggleButton",onClick:function(){return t.adjust("incrementMinutes")},children:"\u25b2"})]}),Object(d.jsxs)("div",{className:"buttonIncrementHours",children:[Object(d.jsx)("button",{className:"toggleButton",onClick:function(){return t.adjust("incrementHoursDec")},children:"\u25b2"}),Object(d.jsx)("button",{className:"toggleButton",onClick:function(){return t.adjust("incrementHours")},children:"\u25b2"})]}),Object(d.jsxs)("div",{className:"buttonDecrementSeconds",children:[Object(d.jsx)("button",{className:"toggleButton",onClick:function(){return t.adjust("decrementSecondsDec")},children:"\u25bc"}),Object(d.jsx)("button",{className:"toggleButton",onClick:function(){return t.adjust("decrementSeconds")},children:"\u25bc"})]}),Object(d.jsxs)("div",{className:"buttonDecrementMinutes",children:[Object(d.jsx)("button",{className:"toggleButton",onClick:function(){return t.adjust("decrementMinutesDec")},children:"\u25bc"}),Object(d.jsx)("button",{className:"toggleButton",onClick:function(){return t.adjust("decrementMinutes")},children:"\u25bc"})]}),Object(d.jsxs)("div",{className:"buttonDecrementHours",children:[Object(d.jsx)("button",{className:"toggleButton",onClick:function(){return t.adjust("decrementHoursDec")},children:"\u25bc"}),Object(d.jsx)("button",{className:"toggleButton",onClick:function(){return t.adjust("decrementHours")},children:"\u25bc"})]}),Object(d.jsx)("div",{className:"numberDisplay",children:Object(d.jsx)("span",{className:"displayDigits",children:e})}),Object(d.jsx)("div",{className:"buttonLeft",children:Object(d.jsxs)("button",{className:"controlButton tooltip",onClick:this.playPause,children:[Object(d.jsx)("span",{className:"tooltiptext",children:"Start / Pause timer"}),this.state.running?"\u23f8\ufe0f":"\u25b6\ufe0f"]})}),Object(d.jsx)("div",{className:"buttonCenter",children:Object(d.jsxs)("button",{className:"controlButton tooltip",onClick:this.save,children:[Object(d.jsx)("span",{className:"tooltiptext",children:"Save current time"}),"\u270f\ufe0f"]})}),Object(d.jsx)("div",{className:"buttonRight",children:Object(d.jsxs)("button",{className:"controlButton tooltip",onClick:this.stop,children:[Object(d.jsx)("span",{className:"tooltiptext",children:"Stop timer"}),"\u23f9\ufe0f"]})}),Object(d.jsx)("div",{className:0===this.state.times.length?"":"displayTimes",children:Object(d.jsx)("table",{children:this.state.times.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"timeData",children:t.formatTime(e.time)}),Object(d.jsxs)("td",{className:"timeDataControls",children:[Object(d.jsx)("button",{onClick:function(){return t.load(e.id)},children:"\ud83d\udd04"}),Object(d.jsx)("button",{onClick:function(){return t.delete(e.id)},children:"\u2702\ufe0f"})]})]},e.id)}))})})]})}}]),n}(r.a.Component);m.defaultProps={resolution:10,timeout:0,format:"%H:%M:%S"};var j=m;var b=function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(j,{})})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),o(t),s(t)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.2cc33f21.chunk.js.map