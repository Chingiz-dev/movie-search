(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),l=a.n(r),o=a(1),s=a.n(o),u=a(5),i=a(2);function m(e){console.log(e);var t=e.movie;return c.a.createElement("div",{className:"movie-div"},c.a.createElement("h2",null,t.title),c.a.createElement("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+" poster"}),c.a.createElement("p",null,t.overview))}function p(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),o=Object(i.a)(l,2),p=o[0],v=o[1],h=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(a),n="https://api.themoviedb.org/3/search/movie?api_key=4acee91410bac52b44a70ea92870fd94&language=en-US&query=".concat(a,"&page=1&include_adult=false"),e.prev=3,e.next=6,fetch(n);case 6:return c=e.sent,e.next=9,c.json();case 9:r=e.sent,v(r.results),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"form",onSubmit:h},c.a.createElement("label",{htmlFor:"query",className:"label"},"Movie name"),c.a.createElement("input",{name:"query",className:"input",type:"text",placeholder:"should be some text",value:a,onChange:function(e){r(e.target.value)}}),c.a.createElement("button",{className:"button",type:"submit"},"Search")),p.map((function(e){return c.a.createElement(m,{movie:e,key:e.id})})))}function v(){return Object(n.useEffect)((function(){document.title="movie-serch"}),[]),c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title"},"React Movie Search"),c.a.createElement(p,null))}a(11);l.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.aaa02c99.chunk.js.map