(this["webpackJsonpwhack-a-mole"]=this["webpackJsonpwhack-a-mole"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(4),r=n.n(i),s=(n(13),n(14),n(15),n(3)),o=(n(20),n(1)),u=function(){var t=Object(s.c)((function(t){return t.statistics})).score;return Object(o.jsxs)("div",{className:"game__component score",children:["Score: ",t]})},l=(n(22),n(2)),d={timer:4,timerInterval:1e3,score:0,attempts:0},j="TIMER",f="TIMER_INTERVAL",m="SCORE",b="ATTEMPTS",O=function(t){return{type:j,payload:t}},v=function(t){return{type:m,payload:t}},p=function(t){return{type:b,payload:t}},h=function(){var t=Object(s.b)(),e=Object(s.c)((function(t){return t.statistics})),n=e.timer,a=e.timerInterval,i=function(e){t(O(e))};return Object(c.useEffect)((function(){var t=n>0&&setInterval((function(){return i(n-1)}),a);return function(){return clearInterval(t)}}),[n,i,a]),Object(o.jsx)("div",{className:"game__component timer",children:n<1?"Time over":"Time: ".concat(n)})},y=(n(23),{randomCell:null}),x="RANDOM_CELL",_=function(t){return{type:x,payload:t}},I={isGameStarted:!1,isGameOver:!1,isWin:!1},g="GAME_IS_STARTED",N="IS_GAME_OVER",E="IS_WIN",T=function(t){return{type:g,payload:t}},S=function(t){return{type:N,payload:t}},G=function(t){return{type:E,payload:t}},w={activeIndex:null},M="ACTIVE_INDEX",A=(n(24),function(t){var e=t.id,n=t.handleClick,c=t.activeMole,a=t.activeIndex;return Object(o.jsx)("div",{className:c===e&&"hit"===a?"cell cell--active cell--hit":c===e&&"miss"===a?"cell cell--active cell--miss":c===e?"cell cell--active":"cell",onClick:function(){return n(e)}})}),C=function(){var t=Array(9).fill(null),e=Object(s.b)(),n=Object(s.c)((function(t){return t.logic})).randomCell,a=Object(s.c)((function(t){return t.statistics})),i=a.score,r=a.timer,u=a.attempts,l=function(t){e(O(t))},d=function(t){e(p(t))},j=Object(s.c)((function(t){return t.field})).activeIndex,m=function(t){e(function(t){return{type:M,payload:t}}(t))},b=function(){var t;e((t=function(t){return t<=10?1e3:t<=20?900:t<=30?800:t<=40?700:t<=50?600:t<=60?500:t<=70?400:t<=80?300:t<=90?200:t<=100?150:void 0}(i),{type:f,payload:t}))},h=function(t){n===t&&r>0?(m("hit"),setTimeout((function(){e(v(i+1)),e(_(null)),l(4)}),40)):n!==t&&r>0&&(m("miss"),setTimeout((function(){l(4),d(u+1)}),40))},y=function(){(3===u||i>=100)&&(l(0),e(S(!0)),l(0)),100===i&&function(t){e(G(t))}(!0)};return Object(c.useEffect)((function(){var t=setTimeout((function(){var t=Math.floor(9*Math.random());e(_(t))}),20);return function(){clearTimeout(t)}}),[i,u]),Object(c.useEffect)((function(){100===i&&l(0),0===r&&u<3&&i<100&&(m("miss"),setTimeout((function(){l(4),d(u+1)}),40))}),[r,u]),Object(c.useEffect)((function(){y(),b()}),[i,u]),Object(c.useEffect)((function(){if(j){var t=setInterval((function(){m(null)}),40);return function(){return clearInterval(t)}}}),[j]),Object(o.jsx)("div",{className:"field",children:t.map((function(t,e){return Object(o.jsx)(A,{id:e,handleClick:h,activeMole:n,activeIndex:j},e)}))})},k=(n(25),function(){var t=Object(s.c)((function(t){return t.statistics})).attempts;return Object(o.jsxs)("div",{className:"game__component attemps",children:["Attempts: ",t,"/3"]})}),R=(n(26),function(t){var e=t.startGame,n=Object(s.b)(),c=Object(s.c)((function(t){return t.statistics})),a=c.score,i=c.attempts,r=Object(s.c)((function(t){return t.game})).isWin,u=function(){n(S(!1)),e()};return Object(o.jsx)("div",{className:"modal",children:Object(o.jsxs)("div",{className:"modal__content",children:[Object(o.jsx)("div",{className:"modal__title",children:r?"You Win!":"Try Again!"}),Object(o.jsxs)("div",{className:"win__status",children:[Object(o.jsxs)("div",{className:"win__status-item",children:["Game difficult: ",Math.round(a/10)]}),Object(o.jsxs)("div",{className:"win__status-item",children:["Score: ",a,"/100 point(s)"]}),Object(o.jsxs)("div",{className:"win__status-item",children:["You failed: ",i," time(s)"]})]}),Object(o.jsx)("button",{onClick:function(){return u()},children:"Start New Game"})]})})}),W=function(){var t=Object(s.b)(),e=Object(s.c)((function(t){return t.game})),n=e.isGameStarted,c=e.isGameOver,a=function(){t(v(0)),t(O(4)),t(p(0)),t(T(!0)),t(G(!1))};return Object(o.jsxs)("div",{className:"game",children:[Object(o.jsxs)("div",{className:"game__title",children:[!n&&Object(o.jsx)("h1",{children:"Whack a Mole"}),Object(o.jsx)("button",{onClick:n?function(){t(T(!1))}:a,children:n?"Stop Game":"Start Game"})]}),n&&Object(o.jsx)(u,{}),n&&Object(o.jsx)(k,{}),n&&Object(o.jsx)(h,{}),n&&Object(o.jsx)(C,{}),c&&Object(o.jsx)(R,{startGame:a})]})};var D=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(W,{})})},L=n(5),V=Object(L.a)({game:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return Object(l.a)(Object(l.a)({},t),{},{isGameStarted:e.payload});case N:return Object(l.a)(Object(l.a)({},t),{},{isGameOver:e.payload});case E:return Object(l.a)(Object(l.a)({},t),{},{isWin:e.payload});default:return t}},statistics:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(l.a)(Object(l.a)({},t),{},{timer:e.payload});case f:return Object(l.a)(Object(l.a)({},t),{},{timerInterval:e.payload});case m:return Object(l.a)(Object(l.a)({},t),{},{score:e.payload});case b:return Object(l.a)(Object(l.a)({},t),{},{attempts:e.payload});default:return t}},logic:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:return Object(l.a)(Object(l.a)({},t),{},{randomCell:e.payload});default:return t}},field:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case M:return Object(l.a)(Object(l.a)({},t),{},{activeIndex:e.payload});default:return t}}}),J=Object(L.b)(V);r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(s.a,{store:J,children:Object(o.jsx)(D,{})})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.072e02f9.chunk.js.map