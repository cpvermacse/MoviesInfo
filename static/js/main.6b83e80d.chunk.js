(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{29:function(e,t,a){},34:function(e,t){e.exports={APIKey:"243f70"}},50:function(e,t,a){e.exports=a(81)},55:function(e,t,a){},56:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),o=(a(55),a(56),a(29),a(18)),i=a(22),u=a(27),m=a(82),s=a(83),d=a(84),E=a(85);o.b.add(u.a);var p=function(){return r.a.createElement("div",null,r.a.createElement(m.a,{color:"dark",dark:!0,expand:"md"},r.a.createElement(s.a,{href:"/"},"MoviesSeriesInfo"),r.a.createElement(d.a,{className:"ml-auto"},r.a.createElement(E.a,null,r.a.createElement(i.a,{icon:["fab","imdb"],style:{color:"yellow"},size:"4x"})),r.a.createElement(E.a,null,r.a.createElement(i.a,{icon:["fab","react"],style:{color:"blue"},size:"4x"})))))},v=a(86);o.b.add(u.a);var h=function(){return r.a.createElement("div",null,r.a.createElement(m.a,{color:"dark",left:"0",bottom:"0",dark:!0,expand:"md"},r.a.createElement(d.a,null,r.a.createElement(v.a,null,"Developed by chandra verma"))))},f=a(10),b=a(11),g=a(14),y=a(13),O=a(12);var j=function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"loader"},"Loading..."))},w=a(19),k=a(87),M=a(88),x=a(89),I=a(90),C=a(91),S=a(92),D=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.movie;return r.a.createElement(k.a,{md:"3"},r.a.createElement(M.a,null,r.a.createElement(x.a,{top:!0,width:"100%",height:"300",src:e.Poster,alt:"Card image cap"}),r.a.createElement(I.a,null,r.a.createElement(C.a,null,e.Title,"- ",e.Year),r.a.createElement(w.b,{to:"/movie/"+e.imdbID},r.a.createElement(S.a,null,"More Deatils >")))))}}]),a}(n.Component),T=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e,t=this.props.movies;return e="True"===t.Response?t.Search.map((function(e,t){return r.a.createElement(D,{key:t,movie:e})})):null,r.a.createElement("div",{className:"row"},e)}}]),a}(n.Component),A=Object(O.b)((function(e){return{movies:e.movies.movies}}))(T),R=a(47),N=a(93),V=a(94),L=a(95),_=a(96),H=a(97),P=a(33),B=a.n(P),G=a(34),W=function(){return{type:"LOADING"}},F=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onChanger=function(t){e.props.searchMovie(t.target.value)},e.onSubmit=function(t){t.preventDefault(),e.props.fetchMovies(e.props.text),e.props.setLoading()},e}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N.a,{fluid:!0},r.a.createElement(V.a,{fluid:!0,className:"text-center"},r.a.createElement("h2",{className:""}," ",r.a.createElement(i.a,{icon:R.a}),"Search for a movie, TV Series"),r.a.createElement(L.a,{onSubmit:this.onSubmit},r.a.createElement(_.a,null,r.a.createElement(H.a,{type:"text",name:"searchText",id:"searchText",placeholder:"type movie name to search",onChange:this.onChanger})),r.a.createElement(S.a,null,"Search")))))}}]),a}(n.Component),K=Object(O.b)((function(e){return{text:e.movies.text}}),{searchMovie:function(e){return function(t){t({type:"SEARCH_MOVIE",payload:e})}},fetchMovies:function(e){return function(t){B.a.get("https://www.omdbapi.com/?apikey=".concat(G.APIKey,"&s=").concat(e)).then((function(e){return t({type:"FETCH_MOVIES",payload:e.data})})).catch((function(e){return console.log(e)}))}},setLoading:W})(F),z=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this.props.loading;return r.a.createElement("div",{className:"container"},r.a.createElement(K,null),e?r.a.createElement(j,null):r.a.createElement(A,null))}}]),a}(n.Component),J=Object(O.b)((function(e){return{loading:e.movies.loading}}))(z),Y=a(98),$=a(99),q=a(100),Q=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchMovie(this.props.match.params.id),this.props.setLoading()}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.movie,n=r.a.createElement(V.a,null,r.a.createElement(Y.a,null,r.a.createElement(k.a,{md:"4"},r.a.createElement(x.a,{top:!0,width:"100%",height:"75%",src:a.Poster,alt:"Card image cap"})),r.a.createElement(k.a,{md:"8"},r.a.createElement(Y.a,null,r.a.createElement("h3",null,a.Title)),r.a.createElement($.a,null,r.a.createElement(q.a,null,r.a.createElement("strong",null,"Genre:"),a.Genre),r.a.createElement(q.a,null,r.a.createElement("strong",null,"Released:"),a.Released),r.a.createElement(q.a,null,r.a.createElement("strong",null,"Rated:"),a.Rated),r.a.createElement(q.a,null,r.a.createElement("strong",null,"IMDB Rating:"),a.imdbRating),r.a.createElement(q.a,null,r.a.createElement("strong",null,"Director:"),a.Director),r.a.createElement(q.a,null,r.a.createElement("strong",null,"Writer:"),a.Writer),r.a.createElement(q.a,null,r.a.createElement("strong",null,"Actors:"),a.Actors)))),r.a.createElement(Y.a,null,r.a.createElement("h3",null,"About")),r.a.createElement(Y.a,null,r.a.createElement("h5",null,a.Plot)),r.a.createElement(Y.a,null,r.a.createElement(k.a,{md:"6"},r.a.createElement("a",{href:"https://www.imdb.com/title/"+a.imdbID,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary"},"View on IMDB")),r.a.createElement(k.a,{md:"6",a:!0},r.a.createElement(w.b,{to:"/"},r.a.createElement(S.a,null,"Go Back To Search"))))),l=t?r.a.createElement(j,null):n;return r.a.createElement("div",null,l)}}]),a}(n.Component),U=Object(O.b)((function(e){return{loading:e.movies.loading,movie:e.movies.movie}}),{fetchMovie:function(e){return function(t){B.a.get("https://www.omdbapi.com/?apikey=".concat(G.APIKey,"&i=").concat(e)).then((function(e){return t({type:"FETCH_MOVIE",payload:e.data})})).catch((function(e){return console.log(e)}))}},setLoading:W})(Q),X=a(17),Z=a(15),ee=a(48),te=a(49),ae=a(24),ne={text:" ",movies:[],loading:!1,movie:[]},re=Object(Z.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_MOVIE":return Object(ae.a)({},e,{text:t.payload,loading:!1});case"FETCH_MOVIES":return Object(ae.a)({},e,{movies:t.payload,loading:!1});case"FETCH_MOVIE":return Object(ae.a)({},e,{movie:t.payload,loading:!1});case"LOADING":return Object(ae.a)({},e,{loading:!0});default:return e}}}),le=[ee.a],ce=Object(Z.createStore)(re,{},Object(te.composeWithDevTools)(Z.applyMiddleware.apply(void 0,le)));var oe=function(){return r.a.createElement(O.a,{store:ce},r.a.createElement(w.a,null,r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(X.a,{exact:!0,path:"/",component:J}),r.a.createElement(X.a,{exact:!0,path:"/movie/:id",component:U}),r.a.createElement(h,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(80);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.6b83e80d.chunk.js.map