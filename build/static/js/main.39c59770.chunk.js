(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),r=c(18),a=c.n(r),n=(c(25),c(26),c(5)),o=c(7),l=c(9),d=c(0),j=Object(i.memo)((function(e){var t=e.isPlaying,c=e.onPlayClick;return Object(d.jsx)(d.Fragment,{children:t?Object(d.jsx)("i",{id:"stop",className:"material-icons",onClick:function(){return c(!1)},children:"pause_circle_outline"}):Object(d.jsx)("i",{id:"play",className:"material-icons",onClick:function(){return c(!0)},children:"play_circle_outline"})})})),b=Object(i.createContext)({}),p=function(e){var t=e.children,c=Object(i.useState)([]),s=Object(l.a)(c,2),r=s[0],a=s[1],n=Object(i.useState)(0),o=Object(l.a)(n,2),j=o[0],p=o[1];return Object(d.jsx)(b.Provider,{value:{trackList:r,setTrackList:a,trackIndex:j,setTrackIndex:p},children:t})},m=Object(i.memo)((function(){var e=Object(i.useContext)(b),t=e.trackList,c=e.setTrackList,s=e.trackIndex,r=e.setTrackIndex;console.log(t);var a=Object(i.useState)(0),n=Object(l.a)(a,2),p=n[0],m=n[1],h=Object(i.useState)(!1),u=Object(l.a)(h,2),x=u[0],O=u[1],_=t[0],g=_.title,v=_.date,f=_.audioSrc,k=_.image,S=_.audioTime;console.log(f),console.log(s);var y=Object(i.useRef)(new Audio(f)),T=Object(i.useRef)(),N=Object(i.useRef)(!1);console.log(y);var w=y.current.duration,C=w?"".concat(Math.floor(p/w*100),"%"):"0%",P=function(){clearInterval(T.current),T.current=setInterval((function(){if(y.current.ended){E();var e=Object(o.a)(t);e.shift(),c(e)}else m(y.current.currentTime)}),[1e3])},E=function(){s<t.length-1?r(s+1):r(0)},F={width:C};console.log(y.current.currentTime);return Object(i.useEffect)((function(){x?(y.current.play(),P()):y.current.pause()}),[x]),Object(i.useEffect)((function(){y.current.pause(),y.current=new Audio(f),m(y.current.currentTime),N.current?(y.current.play(),O(!0),P()):N.current=!0}),[f]),Object(i.useEffect)((function(){return function(){y.current.pause(),clearInterval(T.current)}}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{id:"player",className:"app",children:[Object(d.jsxs)("div",{id:"audio_thumb",children:[Object(d.jsx)("img",{className:"ep_img",src:k,width:"160",height:"160"}),Object(d.jsx)(j,{isPlaying:x,onPlayClick:O})]}),Object(d.jsxs)("div",{id:"audio_desc",children:[Object(d.jsx)("div",{className:"ep-date",children:v}),Object(d.jsxs)("div",{className:"ep-title",children:[g,Object(d.jsx)("span",{className:"sp-nodisp"})]}),Object(d.jsx)("div",{id:"timebar",children:Object(d.jsx)("div",{id:"timebar-bg",children:Object(d.jsx)("div",{id:"timebar-past",style:F,children:Object(d.jsx)("div",{id:"timebar-num",children:C})})})}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{id:"time_disp",children:[function(e){var t=("0"+Math.floor(e%60)).slice(-2),c=("0"+Math.floor(e/60%60)).slice(-2);return("0"+Math.floor(e/60/60)).slice(-2)+":"+c+":"+t}(y.current.currentTime)," / ",S]}),Object(d.jsxs)("p",{className:"time_control_area",children:[Object(d.jsx)("span",{children:Object(d.jsx)("img",{id:"playback",onClick:function(){clearInterval(T.current),y.current.currentTime=y.current.currentTime-15,m(y.current.currentTime),P()},src:"https://propo.fm/image/rewind.png",width:"23",alt:"rewind"})}),Object(d.jsx)("span",{children:Object(d.jsx)("img",{id:"skip",onClick:function(){clearInterval(T.current),y.current.currentTime=y.current.currentTime+30,m(y.current.currentTime),P()},src:"https://propo.fm/image/skip.png",width:"23",alt:"skip"})}),Object(d.jsxs)("span",{id:"speed_ctrl",onClick:function(){for(var e=[1,1.3,1.5,2,.5,.7],t=y.current.playbackRate,c=e[0],i=!1,s=0;s<e.length;s++)if(e[s]!==t){if(i){c=e[s];break}}else i=!0;y.current.playbackRate=c},children:[y.current.playbackRate.toFixed(2),"x"]})]})]})]})]})})})),h=[{id:"518",title:"0518_\u4e2d\u56fd\u306e\u7b2c2\u4e09\u56fd\u5fd7\u3002\u667a\u52c7\u517c\u5099\u30fb\u97f3\u5bb9\u517c\u7f8e\u306e\u30a4\u30b1\u30e1\u30f3\u7687\u65cf\u862d\u9675\u738b\u306f\u4e0d\u6557\u306e\u540d\u5c06",date:"2021.05.11",audioSrc:c.p+"static/media/20210430_113621_533_radiohistory_ep0518.ca72e8b5.mp3",image:"https://storage.googleapis.com/propo-apollo.appspot.com/users/X4wgS1qpQSSvTW5FSTPgO9HyS8B2/channels/FEPdlmxIDrgN6wYk0EK0/images/radireki_thumbnail_280x280.jpg",audioTime:"00:15:01"},{id:"517",title:"0517_\u300c\u591a\u6570\u6c7a\u304c\u6c11\u4e3b\u4e3b\u7fa9\u3067\u306f\u306a\u3044\u300d\u3068\u8aac\u3044\u305f\u30eb\u30bd\u30fc\u306e\u793e\u4f1a\u5951\u7d04\u8ad6",date:"2021.05.07",audioSrc:c.p+"static/media/20210424_105237_279_radiohistory_ep0517.b513b552.mp3",image:"https://storage.googleapis.com/propo-apollo.appspot.com/users/X4wgS1qpQSSvTW5FSTPgO9HyS8B2/channels/FEPdlmxIDrgN6wYk0EK0/images/radireki_thumbnail_280x280.jpg",audioTime:"00:15:52"},{id:"516",title:"0516_\u300c\u898b\u3048\u3056\u308b\u624b\u300d\u306b\u96a0\u3055\u308c\u305f\u30a2\u30c0\u30e0\u30fb\u30b9\u30df\u30b9\u306e\u7d4c\u6e08\u3078\u306e\u30a2\u30c4\u3044\u601d\u3044",date:"2021.05.04",audioSrc:c.p+"static/media/20210424_105226_180_radiohistory_ep0516_\u300c\u898b\u3048\u3056\u308b\u624b\u300d\u306b\u96a0\u3055\u308c\u305f\u30a2\u30c0\u30e0\u30fb\u30b9\u30df\u30b9\u306e\u7d4c\u6e08\u3078\u306e\u30a2\u30c4\u3044\u601d\u3044.8d1306e4.mp3",image:"https://storage.googleapis.com/propo-apollo.appspot.com/users/X4wgS1qpQSSvTW5FSTPgO9HyS8B2/channels/FEPdlmxIDrgN6wYk0EK0/images/radireki_thumbnail_280x280.jpg",audioTime:"00:18:35"},{id:"515",title:"0515_\u65b0\u4e95\u767d\u77f3\u3068\u30b7\u30c9\u30c3\u30c1\u3001\u9396\u56fd\u65e5\u672c\u3067\u767e\u5e74\u306e\u6642\u3092\u7d4c\u3066\u8f1d\u3044\u305f\u897f\u6d0b\u7d00\u805e",date:"2021.04.30",audioSrc:c.p+"static/media/20210416_111301_234_radiohistory_ep0515_\u65b0\u4e95\u767d\u77f3\u3068\u30b7\u30c9\u30c3\u30c1\u3001\u9396\u56fd\u65e5\u672c\u3067\u767e\u5e74\u306e\u6642\u3092\u7d4c\u3066\u8f1d\u3044\u305f\u897f\u6d0b\u7d00\u805e.99ab45b3.mp3",image:"https://storage.googleapis.com/propo-apollo.appspot.com/users/X4wgS1qpQSSvTW5FSTPgO9HyS8B2/channels/FEPdlmxIDrgN6wYk0EK0/images/radireki_thumbnail_280x280.jpg",audioTime:"00:14:17"},{id:"514",title:"0514_\u300c\u751f\u985e\u6190\u307f\u306e\u4ee4\u300d\u3068\u300c\u4eab\u4fdd\u306e\u6539\u9769\u300d\u306e\u9593\u3067\u653f\u6cbb\u3092\u4e3b\u5c0e\u3057\u305f\u65b0\u4e95\u767d\u77f3",date:"2021.04.27",audioSrc:c.p+"static/media/20210416_111247_937_radiohistory_ep0514_\u300c\u751f\u985e\u6190\u307f\u306e\u4ee4\u300d\u3068\u300c\u4eab\u4fdd\u306e\u6539\u9769\u300d\u306e\u9593\u3067\u653f\u6cbb\u3092\u4e3b\u5c0e\u3057\u305f\u65b0\u4e95\u767d\u77f3.a19c8222.mp3",image:"https://storage.googleapis.com/propo-apollo.appspot.com/users/X4wgS1qpQSSvTW5FSTPgO9HyS8B2/channels/FEPdlmxIDrgN6wYk0EK0/images/radireki_thumbnail_280x280.jpg",audioTime:"00:14:28"}],u=Object(i.memo)((function(){var e=Object(i.useContext)(b),t=e.trackList,c=e.setTrackList,s=function(e){var i=Object(o.a)(t);i.splice(e,1),c(i)};return Object(d.jsx)("section",{className:"page playList",children:Object(d.jsxs)("div",{className:"mvContainer__box2",children:[Object(d.jsx)("h3",{children:"AudioPlayerList"}),Object(d.jsx)("ul",{children:t.map((function(e,t){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("li",{children:[e.title,Object(d.jsx)("button",{onClick:s.bind(undefined,t),className:"mvDelBtn",children:"\u524a\u9664"})]},e.id)})}))})]})})})),x=Object(i.memo)((function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"\u30dd\u30c3\u30c9\u30ad\u30e3\u30b9\u30c8\uff08Podcast\uff09"}),Object(d.jsx)(n.b,{to:"/radiohistory",children:"\u30e9\u30b8\u30ec\u30ad \u301c\u30e9\u30b8\u30aa\u6b74\u53f2\u5c0f\u8a71\u301c"})]})})),O=c(3),_=Object(i.memo)((function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"404\u30da\u30fc\u30b8\u3067\u3059"}),Object(d.jsx)(n.b,{to:"/radiohistory",children:"\u30e9\u30b8\u30ec\u30ad \u301c\u30e9\u30b8\u30aa\u6b74\u53f2\u5c0f\u8a71\u301c"})]})})),g=Object(i.memo)((function(){var e=Object(O.f)().id,t=Object(i.useContext)(b),c=t.trackList,s=t.setTrackList;console.log(h);var r=h.find((function(t){return t.id===e}));console.log(r);return Object(d.jsxs)("section",{className:"page",children:[Object(d.jsxs)("div",{class:"mvContainer__box clearfix is_black",children:[Object(d.jsx)("div",{class:"mvContainer__box__img",children:Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("img",{src:"https://storage.googleapis.com/propo-apollo.appspot.com/users/X4wgS1qpQSSvTW5FSTPgO9HyS8B2/channels/FEPdlmxIDrgN6wYk0EK0/images/radireki_thumbnail_540x540.jpg",width:"170",height:"170",alt:"\u30e9\u30b8\u30ec\u30ad \u301c\u30e9\u30b8\u30aa\u6b74\u53f2\u5c0f\u8a71\u301c "})})}),Object(d.jsxs)("div",{class:"mvContainerSmall__box__desc",children:[Object(d.jsxs)("h1",{class:"mvContainer__box__desc__title",children:["Episode",e]}),Object(d.jsx)("p",{class:"mvContainer__box__desc__detail",children:r.title}),Object(d.jsx)("button",{onClick:function(){var e=[].concat(Object(o.a)(c),[r]);s(e)},className:"mvAddBtn",children:"\u8ffd\u52a0"})]})]}),Object(d.jsx)("div",{className:"mvContainer__box2",children:Object(d.jsx)(n.b,{to:"/radiohistory",className:"arrow_article_btn",children:"\u5168\u3066\u306e\u30a8\u30d4\u30bd\u30fc\u30c9"})})]})})),v=Object(i.memo)((function(){return Object(d.jsxs)("section",{className:"page",children:[Object(d.jsxs)("div",{class:"mvContainer__box clearfix is_black",children:[Object(d.jsx)("div",{class:"mvContainer__box__img",children:Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("img",{src:"https://storage.googleapis.com/propo-apollo.appspot.com/users/X4wgS1qpQSSvTW5FSTPgO9HyS8B2/channels/FEPdlmxIDrgN6wYk0EK0/images/radireki_thumbnail_540x540.jpg",width:"233",height:"233",alt:"\u30e9\u30b8\u30ec\u30ad \u301c\u30e9\u30b8\u30aa\u6b74\u53f2\u5c0f\u8a71\u301c "})})}),Object(d.jsxs)("div",{class:"mvContainerSmall__box__desc",children:[Object(d.jsx)("h1",{class:"mvContainer__box__desc__title",children:"\u30e9\u30b8\u30ec\u30ad \u301c\u30e9\u30b8\u30aa\u6b74\u53f2\u5c0f\u8a71\u301c "}),Object(d.jsx)("p",{class:"mvContainer__box__desc__detail",children:'\u300e\u30e9\u30b8\u30ec\u30ad \u301c\u308a\u30fc\u3068\u3093\u30fb\u305d\u3063\u3057\u30fc\u306e\u30e9\u30b8\u30aa\u6b74\u53f2\u5c0f\u8a71\u301c\u300f \u301c\u6b74\u53f2 \xd7 \u30d3\u30b8\u30cd\u30b9 \xd7 \u96d1\u8ac7\u30cd\u30bf \xd7 \u3086\u308b\u3055\u301c \u610f\u5916\u306a\u7d44\u307f\u5408\u308f\u305b\u3092\u3001"\u6b74\u53f2\u30d5\u30ea\u30fc\u30af" \u308a\u30fc\u3068\u3093\u3068\u3001"\u9811\u5f35\u308b\u30de\u30f3" \u305d\u3063\u3057\u30fc\u306e\u4e8c\u4eba\u304c\u7e54\u308a\u306a\u3059\u3001\u3086\u308b\u304f\u805e\u304d\u3084\u3059\u304f\u3001\u6642\u306b\u75db\u5feb\u306b\u5c55\u958b\u3059\u308b\u30dd\u30c3\u30c9\u30ad\u30e3\u30b9\u30c8\uff08Podcast\uff09\u756a\u7d44\u3002 \u96e3\u3057\u3044\uff01\u3068\u611f\u3058\u308b\u6b74\u53f2\u306e\u30cf\u30ca\u30b7\u3082\u3001\u8eab\u8fd1\u306a\u3082\u306e\u3068\u7d44\u307f\u5408\u308f\u305b\u3066\u304f\u308c\u308b\u3068\u601d\u308f\u305a\u8ab0\u304b\u3068\u30b7\u30a7\u30a2\u3057\u305f\u304f\u306a\u308b\u304b\u3089\u4e0d\u601d\u8b70\u3067\u3059\u3002 \u3086\u308b\uff5e\u304f\u3001\u304b\u308b\u304f\u3001\u3084\u308f\u3089\u304b\u304f\u3001\u7686\u3055\u3093\u306e\u8033\u306b\u266a'})]})]}),Object(d.jsxs)("div",{className:"mvContainer__box2",children:[Object(d.jsx)("h3",{children:"Episodes"}),Object(d.jsxs)("div",{className:"allEpisodes__content",children:[Object(d.jsxs)(n.b,{to:"/radiohistory/518",className:"episode-item",children:["\u30a8\u30d4\u30bd\u30fc\u30c9",Object(d.jsx)("span",{children:"0518"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(n.b,{to:"/radiohistory/517",className:"episode-item",children:["\u30a8\u30d4\u30bd\u30fc\u30c9",Object(d.jsx)("span",{children:"0517"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(n.b,{to:"/radiohistory/516",className:"episode-item",children:["\u30a8\u30d4\u30bd\u30fc\u30c9",Object(d.jsx)("span",{children:"0516"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(n.b,{to:"/radiohistory/515",className:"episode-item",children:["\u30a8\u30d4\u30bd\u30fc\u30c9",Object(d.jsx)("span",{children:"0515"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(n.b,{to:"/radiohistory/514",className:"episode-item",children:["\u30a8\u30d4\u30bd\u30fc\u30c9",Object(d.jsx)("span",{children:"0514"})]})]})]})]})})),f=[{path:"/",exact:!0,children:Object(d.jsx)(v,{})},{path:"/:id",exact:!1,children:Object(d.jsx)(g,{})}],k=Object(i.memo)((function(){return Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{exact:!0,path:"/",children:Object(d.jsx)(x,{})}),Object(d.jsx)(O.a,{path:"/radiohistory",render:function(e){var t=e.match.url;return Object(d.jsx)(O.c,{children:f.map((function(e){return Object(d.jsx)(O.a,{exact:e.exact,path:"".concat(t).concat(e.path),children:e.children},e.path)}))})}}),Object(d.jsx)(O.a,{path:"*",children:Object(d.jsx)(_,{})})]})}));var S=function(){var e=Object(i.useContext)(b).trackList;return console.log(e),Object(d.jsxs)(n.a,{basename:"./build",children:[Object(d.jsx)(k,{}),e.length>0&&Object(d.jsx)(u,{}),e.length>0&&Object(d.jsx)(m,{})]})};c(36);a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{children:Object(d.jsx)(S,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.39c59770.chunk.js.map