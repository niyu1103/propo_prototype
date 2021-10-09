(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(32),a=c.n(r),i=(c(40),c(41),c(5)),o=c(8),l=c(9),j=c(0),d=Object(n.memo)((function(e){var t=e.isPlaying,c=e.onPlayClick;return Object(j.jsx)(j.Fragment,{children:t?Object(j.jsx)("i",{id:"stop",className:"material-icons",onClick:function(){return c(!1)},children:"pause_circle_outline"}):Object(j.jsx)("i",{id:"play",className:"material-icons",onClick:function(){return c(!0)},children:"play_circle_outline"})})})),u=Object(n.createContext)({}),b=function(e){var t=e.children,c=Object(n.useState)([]),s=Object(l.a)(c,2),r=s[0],a=s[1],i=Object(n.useState)(0),o=Object(l.a)(i,2),d=o[0],b=o[1],m=Object(n.useState)(!1),h=Object(l.a)(m,2),x=h[0],O=h[1],p=Object(n.useState)(!1),g=Object(l.a)(p,2),v=g[0],f=g[1];return Object(j.jsx)(u.Provider,{value:{trackList:r,setTrackList:a,trackIndex:d,setTrackIndex:b,isPlaying:x,setIsPlaying:O,firstTimeReady:v,setFirstTimeReady:f},children:t})},m=Object(n.memo)((function(){var e=Object(n.useContext)(u),t=e.trackList,c=e.setTrackList,s=e.trackIndex,r=e.setTrackIndex,a=e.isPlaying,i=e.setIsPlaying,b=e.firstTimeReady;e.setFirstTimeReady;console.log(t);var m=Object(n.useState)(0),h=Object(l.a)(m,2),x=h[0],O=h[1],p=t[0],g=p.title,v=p.date,f=p.audioSrc,_=p.image,k=p.audioTime;console.log(f),console.log(s);var y=Object(n.useRef)(new Audio(f)),N=Object(n.useRef)(),C=Object(n.useRef)(!1);console.log("audioRef",y);var T=y.current.duration,w=T?"".concat(Math.floor(x/T*100),"%"):"0%",I=T?"".concat(Math.floor(x/T/2*100),"%"):"0%",S="-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(".concat(w,", #c22c46), color-stop(").concat(w,", lightgray))"),P=function(){clearInterval(N.current),N.current=setInterval((function(){if(y.current.ended){F();var e=Object(o.a)(t);e.shift(),c(e)}else O(y.current.currentTime)}),[1e3])},L=function(){a||i(!0),P()},F=function(){s<t.length-1?r(s+1):r(0)};console.log(y.current.currentTime);var R=Object(n.useCallback)((function(){.9<y.current.volume?y.current.volume=1:y.current.volume+=.1})),E=Object(n.useCallback)((function(){y.current.volume<.1?y.current.volume=0:y.current.volume-=.1}));return Object(n.useEffect)((function(){a?(y.current.play(),P()):y.current.pause()}),[a]),Object(n.useEffect)((function(){y.current.pause(),y.current=new Audio(f),O(y.current.currentTime),C.current||b?(y.current.play(),i(!0),P()):C.current=!0}),[f,s]),Object(n.useEffect)((function(){return function(){y.current.pause(),clearInterval(N.current)}}),[]),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{id:"player",className:"app",children:[Object(j.jsxs)("div",{id:"audio_thumb",children:[Object(j.jsx)("img",{className:"ep_img",src:_,width:"160",height:"160"}),Object(j.jsx)(d,{isPlaying:a,onPlayClick:i})]}),Object(j.jsxs)("div",{id:"audio_desc",children:[Object(j.jsx)("div",{className:"ep-date",children:v}),Object(j.jsxs)("div",{className:"ep-title",children:[g,Object(j.jsx)("span",{className:"sp-nodisp"})]}),Object(j.jsxs)("div",{id:"timebar-range",children:[Object(j.jsx)("input",{type:"range",value:x,step:"1",min:"0",max:T||"".concat(T),className:"progress",onChange:function(e){return t=e.target.value,clearInterval(N.current),y.current.currentTime=t,void O(y.current.currentTime);var t},onMouseUp:L,onKeyUp:L,style:{background:S}}),Object(j.jsx)("div",{id:"timebar-range-num",style:{left:I},children:w})]}),Object(j.jsxs)("div",{className:"control_area",children:[Object(j.jsxs)("span",{id:"time_disp",children:[function(e){var t=("0"+Math.floor(e%60)).slice(-2),c=("0"+Math.floor(e/60%60)).slice(-2);return("0"+Math.floor(e/60/60)).slice(-2)+":"+c+":"+t}(y.current.currentTime)," / ",k]}),Object(j.jsxs)("div",{className:"volume_control_area",children:[Object(j.jsx)("button",{className:"volume_btn",onClick:function(){console.log("audioRef.current.muted",y.current.muted),y.current.muted=!y.current.muted},children:y.current.muted?"\u97f3\u91cf\u3042\u308a":"\u97f3\u91cf\u306a\u3057"}),Object(j.jsx)("button",{className:"volume_btn",onClick:E,children:"\u97f3\u91cf\u4e0b\u3052\u308b"}),Object(j.jsx)("button",{className:"volume_btn",onClick:R,children:"\u97f3\u91cf\u4e0a\u3052\u308b"})]}),Object(j.jsxs)("div",{className:"time_control_area",children:[Object(j.jsx)("span",{children:Object(j.jsx)("img",{id:"playback",onClick:function(){clearInterval(N.current),y.current.currentTime=y.current.currentTime-15,O(y.current.currentTime),P()},src:"https://propo.fm/image/rewind.png",width:"23",alt:"rewind"})}),Object(j.jsx)("span",{children:Object(j.jsx)("img",{id:"skip",onClick:function(){clearInterval(N.current),y.current.currentTime=y.current.currentTime+30,O(y.current.currentTime),P()},src:"https://propo.fm/image/skip.png",width:"23",alt:"skip"})}),Object(j.jsxs)("span",{id:"speed_ctrl",onClick:function(){for(var e=[1,1.3,1.5,2,.5,.7],t=y.current.playbackRate,c=e[0],n=!1,s=0;s<e.length;s++)if(e[s]!==t){if(n){c=e[s];break}}else n=!0;y.current.playbackRate=c},children:[y.current.playbackRate.toFixed(2),"x"]})]})]})]})]})})})),h=(c.p,c.p,c.p,c.p,c.p,Object(n.memo)((function(){var e=Object(n.useContext)(u),t=e.trackList,c=e.setTrackList,s=function(e){var n=Object(o.a)(t);n.splice(e,1),c(n)};return Object(j.jsx)("section",{className:"page playList",children:Object(j.jsxs)("div",{className:"mvContainer__box2",children:[Object(j.jsx)("h3",{children:"AudioPlayerList"}),Object(j.jsx)("ul",{children:t.map((function(e,t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("li",{children:[e.title,Object(j.jsx)("button",{onClick:s.bind(undefined,t),className:"mvDelBtn",children:"\u524a\u9664"})]},e.id)})}))})]})})}))),x=Object(n.memo)((function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"\u30dd\u30c3\u30c9\u30ad\u30e3\u30b9\u30c8\uff08Podcast\uff09"}),Object(j.jsx)(i.b,{to:"/radiohistory",children:"\u30e9\u30b8\u30ec\u30ad \u301c\u30e9\u30b8\u30aa\u6b74\u53f2\u5c0f\u8a71\u301c"})]})})),O=c(3),p=Object(n.memo)((function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"404\u30da\u30fc\u30b8\u3067\u3059"}),Object(j.jsx)(i.b,{to:"/radiohistory",children:"\u30e9\u30b8\u30ec\u30ad \u301c\u30e9\u30b8\u30aa\u6b74\u53f2\u5c0f\u8a71\u301c"})]})})),g=c(35),v=c(12),f=c.n(v),_=Object(n.memo)((function(){var e=Object(O.f)().id,t=Object(n.useContext)(u),c=t.trackList,s=t.setTrackList,r=t.trackIndex,a=(t.setTrackIndex,t.isPlaying),d=t.setIsPlaying,b=t.setFirstTimeReady;console.log("page_id",e),console.log("trackList",c);var m=function(e){console.log("ApiFetch_id",e);var t=Object(n.useState)([]),c=Object(l.a)(t,2),s=c[0],r=c[1];return Object(n.useEffect)((function(){"517"===e?(console.log("517axios"),f.a.get("https://api.json-generator.com/templates/WqGcLYvojWBC/data?access_token=4utms16rwydj0x46jxugim3aklmmsiefle5olrmj").then((function(e){r(e.data)}))):"518"===e?(console.log("518axios"),f.a.get("https://api.json-generator.com/templates/O-xcv2SiR9dL/data?access_token=4utms16rwydj0x46jxugim3aklmmsiefle5olrmj").then((function(e){r(e.data)}))):"365"===e?(console.log("365axios"),f.a.get("https://api.json-generator.com/templates/oHnEl6sllb86/data?access_token=4utms16rwydj0x46jxugim3aklmmsiefle5olrmj").then((function(e){r(e.data)}))):"366"===e?(console.log("366axios"),f.a.get("https://api.json-generator.com/templates/r-9gwrJr2q0p/data?access_token=4utms16rwydj0x46jxugim3aklmmsiefle5olrmj").then((function(e){r(e.data)}))):"367"===e&&(console.log("367axios"),f.a.get("https://api.json-generator.com/templates/cRvuCQN-Iwc3/data?access_token=4utms16rwydj0x46jxugim3aklmmsiefle5olrmj").then((function(e){r(e.data)})))}),[]),s}(e);console.log("currentItem",m);var h=function(){var e=[].concat(Object(o.a)(c),[m]);s(e)},x=function(){if(a){console.log("trackIndex",r);var t=Object(g.a)(c),n=(t[0],t.slice(1)),i=[m].concat(Object(o.a)(n));s(i)}else if(c.length>0){if(c[0].num!=e){var l=[m].concat(Object(o.a)(c));console.log("newItems",l),s(l)}d(!0)}else{console.log("currentItem",m);var j=[].concat(Object(o.a)(c),[m]);s(j),console.log("trackList",c),d(!0),b(!0)}},p=!1;return a&&(console.log("trackList[0].num",c[0].num),p=c[0].num==e),Object(j.jsxs)("section",{className:"page",children:[Object(j.jsxs)("div",{class:"mvContainer__box clearfix is_black",children:[Object(j.jsx)("div",{class:"mvContainer__box__img",children:Object(j.jsx)("a",{href:"#",children:Object(j.jsx)("img",{src:"https://storage.googleapis.com/propo-apollo.appspot.com/users/X4wgS1qpQSSvTW5FSTPgO9HyS8B2/channels/FEPdlmxIDrgN6wYk0EK0/images/radireki_thumbnail_540x540.jpg",width:"170",height:"170",alt:"\u30e9\u30b8\u30ec\u30ad \u301c\u30e9\u30b8\u30aa\u6b74\u53f2\u5c0f\u8a71\u301c "})})}),Object(j.jsxs)("div",{class:"mvContainerSmall__box__desc",children:[Object(j.jsxs)("h1",{class:"mvContainer__box__desc__title",children:["Episode",e]}),Object(j.jsx)("p",{class:"mvContainer__box__desc__detail",children:m.title}),Object(j.jsx)("div",{className:"mvContainer_btn",children:p?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{onClick:h,className:"mvAddBtn",disabled:!0,children:"\u8ffd\u52a0"}),Object(j.jsx)("button",{onClick:x,className:"mvPlayBtn",disabled:!0,children:"\u518d\u751f\u4e2d"})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{onClick:h,className:"mvAddBtn",children:"\u8ffd\u52a0"}),Object(j.jsx)("button",{onClick:x,className:"mvPlayBtn",children:"\u518d\u751f"})]})})]})]}),Object(j.jsx)("div",{className:"mvContainer__box2",children:Object(j.jsx)(i.b,{to:"/radiohistory",className:"arrow_article_btn",children:"\u5168\u3066\u306e\u30a8\u30d4\u30bd\u30fc\u30c9"})})]})})),k=Object(n.memo)((function(){return Object(j.jsxs)("section",{className:"page",children:[Object(j.jsxs)("div",{className:"mvContainer__box clearfix is_black",children:[Object(j.jsx)("div",{className:"mvContainer__box__img",children:Object(j.jsx)("a",{href:"#",children:Object(j.jsx)("img",{src:"https://storage.googleapis.com/propo-apollo.appspot.com/users/X4wgS1qpQSSvTW5FSTPgO9HyS8B2/channels/FEPdlmxIDrgN6wYk0EK0/images/radireki_thumbnail_540x540.jpg",width:"233",height:"233",alt:"\u30e9\u30b8\u30ec\u30ad \u301c\u30e9\u30b8\u30aa\u6b74\u53f2\u5c0f\u8a71\u301c "})})}),Object(j.jsxs)("div",{className:"mvContainerSmall__box__desc",children:[Object(j.jsx)("h1",{className:"mvContainer__box__desc__title",children:"\u30e9\u30b8\u30ec\u30ad \u301c\u30e9\u30b8\u30aa\u6b74\u53f2\u5c0f\u8a71\u301c "}),Object(j.jsx)("p",{className:"mvContainer__box__desc__detail",children:'\u300e\u30e9\u30b8\u30ec\u30ad \u301c\u308a\u30fc\u3068\u3093\u30fb\u305d\u3063\u3057\u30fc\u306e\u30e9\u30b8\u30aa\u6b74\u53f2\u5c0f\u8a71\u301c\u300f \u301c\u6b74\u53f2 \xd7 \u30d3\u30b8\u30cd\u30b9 \xd7 \u96d1\u8ac7\u30cd\u30bf \xd7 \u3086\u308b\u3055\u301c \u610f\u5916\u306a\u7d44\u307f\u5408\u308f\u305b\u3092\u3001"\u6b74\u53f2\u30d5\u30ea\u30fc\u30af" \u308a\u30fc\u3068\u3093\u3068\u3001"\u9811\u5f35\u308b\u30de\u30f3" \u305d\u3063\u3057\u30fc\u306e\u4e8c\u4eba\u304c\u7e54\u308a\u306a\u3059\u3001\u3086\u308b\u304f\u805e\u304d\u3084\u3059\u304f\u3001\u6642\u306b\u75db\u5feb\u306b\u5c55\u958b\u3059\u308b\u30dd\u30c3\u30c9\u30ad\u30e3\u30b9\u30c8\uff08Podcast\uff09\u756a\u7d44\u3002 \u96e3\u3057\u3044\uff01\u3068\u611f\u3058\u308b\u6b74\u53f2\u306e\u30cf\u30ca\u30b7\u3082\u3001\u8eab\u8fd1\u306a\u3082\u306e\u3068\u7d44\u307f\u5408\u308f\u305b\u3066\u304f\u308c\u308b\u3068\u601d\u308f\u305a\u8ab0\u304b\u3068\u30b7\u30a7\u30a2\u3057\u305f\u304f\u306a\u308b\u304b\u3089\u4e0d\u601d\u8b70\u3067\u3059\u3002 \u3086\u308b\uff5e\u304f\u3001\u304b\u308b\u304f\u3001\u3084\u308f\u3089\u304b\u304f\u3001\u7686\u3055\u3093\u306e\u8033\u306b\u266a'})]})]}),Object(j.jsxs)("div",{className:"mvContainer__box2",children:[Object(j.jsx)("h3",{children:"Episodes"}),Object(j.jsxs)("div",{className:"allEpisodes__content",children:[Object(j.jsxs)(i.b,{to:"/radiohistory/518",className:"episode-item",children:["\u30a8\u30d4\u30bd\u30fc\u30c9",Object(j.jsx)("span",{children:"0518"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(i.b,{to:"/radiohistory/517",className:"episode-item",children:["\u30a8\u30d4\u30bd\u30fc\u30c9",Object(j.jsx)("span",{children:"0517"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(i.b,{to:"/radiohistory/365",className:"episode-item",children:["\u30a8\u30d4\u30bd\u30fc\u30c9",Object(j.jsx)("span",{children:"0365"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(i.b,{to:"/radiohistory/366",className:"episode-item",children:["\u30a8\u30d4\u30bd\u30fc\u30c9",Object(j.jsx)("span",{children:"0366"})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(i.b,{to:"/radiohistory/367",className:"episode-item",children:["\u30a8\u30d4\u30bd\u30fc\u30c9",Object(j.jsx)("span",{children:"0367"})]})]})]})]})})),y=[{path:"/",exact:!0,children:Object(j.jsx)(k,{})},{path:"/:id",exact:!1,children:Object(j.jsx)(_,{})}],N=Object(n.memo)((function(){return Object(j.jsxs)(O.c,{children:[Object(j.jsx)(O.a,{exact:!0,path:"/",children:Object(j.jsx)(x,{})}),Object(j.jsx)(O.a,{path:"/radiohistory",render:function(e){var t=e.match.url;return Object(j.jsx)(O.c,{children:y.map((function(e){return Object(j.jsx)(O.a,{exact:e.exact,path:"".concat(t).concat(e.path),children:e.children},e.path)}))})}}),Object(j.jsx)(O.a,{path:"*",children:Object(j.jsx)(p,{})})]})}));var C=function(){var e=Object(n.useContext)(u).trackList;return console.log(e),Object(j.jsxs)(i.a,{basename:".",children:[Object(j.jsx)(N,{}),e.length>0&&Object(j.jsx)(h,{}),e.length>0&&Object(j.jsx)(m,{})]})};c(70);a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{children:Object(j.jsx)(C,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.fe788250.chunk.js.map