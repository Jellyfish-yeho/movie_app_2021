(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{155:function(e,t,n){},156:function(e,t,n){},176:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){},484:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(21),r=n.n(c),i=n(39),o=n(40),l=n(42),j=n(41),u=(n(155),n(32)),m=n(5),d=(n(156),n(2));var b=function(e){return console.log(e),Object(d.jsxs)("div",{className:"about__container",children:[Object(d.jsx)("span",{children:'"Freedom is the freedom to say that two plus make four. If that is granted, all else follows."'}),Object(d.jsx)("span",{children:"- George Orwell, 1984"})]})},h=n(90),p=n.n(h),v=n(146),O=n(147),x=n.n(O);n(176);var f=function(e){var t=e.title,n=e.year,a=e.summary,s=e.poster,c=e.genres;return Object(d.jsx)("div",{className:"movie",children:Object(d.jsxs)(u.b,{to:{pathname:"/movie-detail",state:{year:n,title:t,summary:a,poster:s,genres:c}},children:[Object(d.jsx)("img",{src:s,alt:t,title:t}),Object(d.jsxs)("div",{className:"movie_data",children:[Object(d.jsx)("h3",{className:"movie__title",children:t}),Object(d.jsx)("h5",{className:"movie__year",children:n}),Object(d.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(d.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(d.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})})},y=(n(181),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(v.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_bu=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(d.jsx)("section",{className:"container",children:t?Object(d.jsx)("div",{className:"loader",children:Object(d.jsx)("span",{className:"loader__text",children:"'Loading...' "})}):Object(d.jsx)("div",{className:"movies",children:n.map((function(e){return Object(d.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(s.a.Component));n(182);var _=function(){return Object(d.jsxs)("div",{className:"nav",children:[Object(d.jsx)(u.b,{to:"/",children:"Home"}),Object(d.jsx)(u.b,{to:"/about",children:"About"})]})},g=(n(183),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(d.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component)),N=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(u.a,{children:[Object(d.jsx)(_,{}),Object(d.jsx)(m.a,{path:"/",exact:!0,component:y}),Object(d.jsx)(m.a,{path:"/about",component:b}),Object(d.jsx)(m.a,{path:"/movie-detail",component:g})]})}}]),n}(s.a.Component);r.a.render(Object(d.jsx)(N,{}),document.getElementById("root"))}},[[484,1,2]]]);
//# sourceMappingURL=main.3e03dade.chunk.js.map