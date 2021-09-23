(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var i=c(1),r=c.n(i),n=c(7),a=c.n(n),s=c(3),l=(c(12),c(2)),o=c(0),d=Object(i.memo)((function(e){var t=e.isPlaying,c=e.onPlayClick;return Object(o.jsx)(o.Fragment,{children:t?Object(o.jsx)("i",{id:"play",className:"material-icons",onClick:function(){return c(!1)},children:"play_circle_outline"}):Object(o.jsx)("i",{id:"stop",className:"material-icons",onClick:function(){return c(!0)},children:"pause_circle_outline"})})})),j=Object(i.memo)((function(e){var t=e.tracks,c=e.setTracks,r=e.trackIndex,n=e.setTrackIndex;console.log(t);var a=Object(i.useState)(0),j=Object(s.a)(a,2),u=j[0],p=j[1],b=Object(i.useState)(!1),m=Object(s.a)(b,2),h=m[0],O=m[1],g=t[0],x=g.title,k=g.date,_=g.audioSrc,f=g.image,v=g.audioTime;console.log(_),console.log(r);var S=Object(i.useRef)(new Audio(_)),T=Object(i.useRef)(),y=Object(i.useRef)(!1);console.log(S);var w=S.current.duration,F=w?"".concat(Math.floor(u/w*100),"%"):"0%",I=function(){clearInterval(T.current),T.current=setInterval((function(){if(S.current.ended){P();var e=Object(l.a)(t);e.shift(),c(e)}else p(S.current.currentTime)}),[1e3])},P=function(){r<t.length-1?n(r+1):n(0)},E={width:F};console.log(S.current.currentTime);return Object(i.useEffect)((function(){h?(S.current.play(),I()):S.current.pause()}),[h]),Object(i.useEffect)((function(){S.current.pause(),S.current=new Audio(_),p(S.current.currentTime),y.current?(S.current.play(),O(!0),I()):y.current=!0}),[_]),Object(i.useEffect)((function(){return function(){S.current.pause(),clearInterval(T.current)}}),[]),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{id:"player",className:"app",children:[Object(o.jsxs)("div",{id:"audio_thumb",children:[Object(o.jsx)("img",{className:"ep_img",src:f,width:"160",height:"160"}),Object(o.jsx)(d,{isPlaying:h,onPlayClick:O})]}),Object(o.jsxs)("div",{id:"audio_desc",children:[Object(o.jsx)("div",{className:"ep-date",children:k}),Object(o.jsxs)("div",{className:"ep-title",children:[x,Object(o.jsx)("span",{className:"sp-nodisp"})]}),Object(o.jsx)("div",{id:"timebar",children:Object(o.jsx)("div",{id:"timebar-bg",children:Object(o.jsx)("div",{id:"timebar-past",style:E,children:Object(o.jsx)("div",{id:"timebar-num",children:F})})})}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("span",{id:"time_disp",children:[function(e){var t=("0"+Math.floor(e%60)).slice(-2),c=("0"+Math.floor(e/60%60)).slice(-2);return("0"+Math.floor(e/60/60)).slice(-2)+":"+c+":"+t}(S.current.currentTime)," / ",v]}),Object(o.jsxs)("p",{className:"time_control_area",children:[Object(o.jsx)("span",{children:Object(o.jsx)("img",{id:"playback",onClick:function(){clearInterval(T.current),S.current.currentTime=S.current.currentTime-15,p(S.current.currentTime),I()},src:"https://propo.fm/image/rewind.png",width:"23",alt:"rewind"})}),Object(o.jsx)("span",{children:Object(o.jsx)("img",{id:"skip",onClick:function(){clearInterval(T.current),S.current.currentTime=S.current.currentTime+30,p(S.current.currentTime),I()},src:"https://propo.fm/image/skip.png",width:"23",alt:"skip"})}),Object(o.jsxs)("span",{id:"speed_ctrl",onClick:function(){for(var e=[1,1.3,1.5,2,.5,.7],t=S.current.playbackRate,c=e[0],i=!1,r=0;r<e.length;r++)if(e[r]!==t){if(i){c=e[r];break}}else i=!0;S.current.playbackRate=c},children:[S.current.playbackRate.toFixed(2),"x"]})]})]})]})]})})})),u=void 0,p=Object(i.memo)((function(e){var t=e.playList,c=e.trackList,i=e.addTrackList,r=function(e){var r=t.find((function(t){return t.id===e})),n=[].concat(Object(l.a)(c),[r]);i(n)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:["\u30a8\u30d4\u30bd\u30fc\u30c9",Object(o.jsx)("span",{children:"0518"}),Object(o.jsx)("button",{onClick:r.bind(u,"518"),children:"\u8ffd\u52a0"})]}),Object(o.jsxs)("li",{children:["\u30a8\u30d4\u30bd\u30fc\u30c9",Object(o.jsx)("span",{children:"0517"}),Object(o.jsx)("button",{onClick:r.bind(u,"517"),children:"\u8ffd\u52a0"})]}),Object(o.jsxs)("li",{children:["\u30a8\u30d4\u30bd\u30fc\u30c9",Object(o.jsx)("span",{children:"0516"}),Object(o.jsx)("button",{onClick:r.bind(u,"516"),children:"\u8ffd\u52a0"})]}),Object(o.jsxs)("li",{children:["\u30a8\u30d4\u30bd\u30fc\u30c9",Object(o.jsx)("span",{children:"0515"}),Object(o.jsx)("button",{onClick:r.bind(u,"515"),children:"\u8ffd\u52a0"})]}),Object(o.jsxs)("li",{children:["\u30a8\u30d4\u30bd\u30fc\u30c9",Object(o.jsx)("span",{children:"0514"}),Object(o.jsx)("button",{onClick:r.bind(u,"514"),children:"\u8ffd\u52a0"})]})]})})})})),b=[{id:"518",title:"0518_\u4e2d\u56fd\u306e\u7b2c2\u4e09\u56fd\u5fd7\u3002\u667a\u52c7\u517c\u5099\u30fb\u97f3\u5bb9\u517c\u7f8e\u306e\u30a4\u30b1\u30e1\u30f3\u7687\u65cf\u862d\u9675\u738b\u306f\u4e0d\u6557\u306e\u540d\u5c06",date:"2021.05.11",audioSrc:c.p+"static/media/20210430_113621_533_radiohistory_ep0518.ca72e8b5.mp3",image:"https://storage.googleapis.com/propo-apollo.appspot.com/users/X4wgS1qpQSSvTW5FSTPgO9HyS8B2/channels/FEPdlmxIDrgN6wYk0EK0/images/radireki_thumbnail_280x280.jpg",audioTime:"00:15:01"},{id:"517",title:"0517_\u300c\u591a\u6570\u6c7a\u304c\u6c11\u4e3b\u4e3b\u7fa9\u3067\u306f\u306a\u3044\u300d\u3068\u8aac\u3044\u305f\u30eb\u30bd\u30fc\u306e\u793e\u4f1a\u5951\u7d04\u8ad6",date:"2021.05.07",audioSrc:c.p+"static/media/20210424_105237_279_radiohistory_ep0517.b513b552.mp3",image:"https://storage.googleapis.com/propo-apollo.appspot.com/users/X4wgS1qpQSSvTW5FSTPgO9HyS8B2/channels/FEPdlmxIDrgN6wYk0EK0/images/radireki_thumbnail_280x280.jpg",audioTime:"00:15:52"},{id:"516",title:"0516_\u300c\u898b\u3048\u3056\u308b\u624b\u300d\u306b\u96a0\u3055\u308c\u305f\u30a2\u30c0\u30e0\u30fb\u30b9\u30df\u30b9\u306e\u7d4c\u6e08\u3078\u306e\u30a2\u30c4\u3044\u601d\u3044",date:"2021.05.04",audioSrc:c.p+"static/media/20210424_105226_180_radiohistory_ep0516_\u300c\u898b\u3048\u3056\u308b\u624b\u300d\u306b\u96a0\u3055\u308c\u305f\u30a2\u30c0\u30e0\u30fb\u30b9\u30df\u30b9\u306e\u7d4c\u6e08\u3078\u306e\u30a2\u30c4\u3044\u601d\u3044.8d1306e4.mp3",image:"https://storage.googleapis.com/propo-apollo.appspot.com/users/X4wgS1qpQSSvTW5FSTPgO9HyS8B2/channels/FEPdlmxIDrgN6wYk0EK0/images/radireki_thumbnail_280x280.jpg",audioTime:"00:18:35"},{id:"515",title:"0515_\u65b0\u4e95\u767d\u77f3\u3068\u30b7\u30c9\u30c3\u30c1\u3001\u9396\u56fd\u65e5\u672c\u3067\u767e\u5e74\u306e\u6642\u3092\u7d4c\u3066\u8f1d\u3044\u305f\u897f\u6d0b\u7d00\u805e",date:"2021.04.30",audioSrc:c.p+"static/media/20210416_111301_234_radiohistory_ep0515_\u65b0\u4e95\u767d\u77f3\u3068\u30b7\u30c9\u30c3\u30c1\u3001\u9396\u56fd\u65e5\u672c\u3067\u767e\u5e74\u306e\u6642\u3092\u7d4c\u3066\u8f1d\u3044\u305f\u897f\u6d0b\u7d00\u805e.99ab45b3.mp3",image:"https://storage.googleapis.com/propo-apollo.appspot.com/users/X4wgS1qpQSSvTW5FSTPgO9HyS8B2/channels/FEPdlmxIDrgN6wYk0EK0/images/radireki_thumbnail_280x280.jpg",audioTime:"00:14:17"},{id:"514",title:"0514_\u300c\u751f\u985e\u6190\u307f\u306e\u4ee4\u300d\u3068\u300c\u4eab\u4fdd\u306e\u6539\u9769\u300d\u306e\u9593\u3067\u653f\u6cbb\u3092\u4e3b\u5c0e\u3057\u305f\u65b0\u4e95\u767d\u77f3",date:"2021.04.27",audioSrc:c.p+"static/media/20210416_111247_937_radiohistory_ep0514_\u300c\u751f\u985e\u6190\u307f\u306e\u4ee4\u300d\u3068\u300c\u4eab\u4fdd\u306e\u6539\u9769\u300d\u306e\u9593\u3067\u653f\u6cbb\u3092\u4e3b\u5c0e\u3057\u305f\u65b0\u4e95\u767d\u77f3.a19c8222.mp3",image:"https://storage.googleapis.com/propo-apollo.appspot.com/users/X4wgS1qpQSSvTW5FSTPgO9HyS8B2/channels/FEPdlmxIDrgN6wYk0EK0/images/radireki_thumbnail_280x280.jpg",audioTime:"00:14:28"}],m=Object(i.memo)((function(e){var t=e.trackLists,c=e.deleteTrackList,i=function(e){var i=Object(l.a)(t);i.splice(e,1),c(i)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"AudioPlayerList"}),Object(o.jsx)("ul",{children:t.map((function(e,t){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("li",{children:e.title},e.id),Object(o.jsx)("button",{onClick:i.bind(undefined,t),children:"\u524a\u9664"})]})}))})]})})}));var h=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),c=t[0],r=t[1],n=Object(i.useState)(0),a=Object(s.a)(n,2),l=a[0],d=a[1];return console.log(c),Object(o.jsxs)(o.Fragment,{children:[c.length>0&&Object(o.jsx)(j,{tracks:c,setTracks:r,trackIndex:l,setTrackIndex:d}),Object(o.jsx)(p,{playList:b,addTrackList:r,trackList:c}),Object(o.jsx)(m,{trackLists:c,deleteTrackList:r})]})};c(14);a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.acba36de.chunk.js.map