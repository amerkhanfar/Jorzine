(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[986],{2585:function(e,i,n){"use strict";n.r(i);var t=n(29),r=n(7794),a=n.n(r),o=n(7294),s=n(7333);n(7757);var d=n(1893),c=n(6154),l=n(1163),p=n(4880),h=n(5893);i.default=function(){var e,i=(0,l.useRouter)(),n=(0,o.useState)([]),r=n[0],d=n[1];(0,o.useEffect)(function(){g()},[]);var g=(e=(0,t.Z)(a().mark(function e(){var i;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://jorzine-backend.oplus.dev/api/interviews");case 3:console.log(i=e.sent.data.interviews),d(i.slice(0,120)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error fetching data:",e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])})),function(){return e.apply(this,arguments)});return(0,h.jsxs)(w,{children:[(0,h.jsx)(s.Z,{}),r.length?(0,h.jsx)(m,{children:r.map(function(e){return(0,h.jsxs)(u,{children:[(0,h.jsx)(x,{style:{backgroundImage:"url(".concat(e.thumb,")")}}),(0,h.jsxs)("div",{style:{width:"50%"},children:[(0,h.jsx)("h1",{children:e.title}),(0,h.jsxs)("h2",{children:["Interviewer: \xa0",e.interviewer]}),(0,h.jsxs)("h2",{children:["Date: \xa0",e.interview_date]}),(0,h.jsx)(f,{onClick:function(){i.push("/interviews/".concat(e.id))},children:"VIEW INTERVIEW"})]})]},e.id)})}):(0,h.jsx)(p.Bb,{height:"200",width:"200",color:"#be7214",ariaLabel:"audio-loading",wrapperStyle:{},wrapperClass:"wrapper-class",visible:!0})]})};var w=d.ZP.div.withConfig({displayName:"interviews__Container",componentId:"sc-39pmxa-0"})(["display:flex;flex-direction:column;width:100vw;align-items:center;overflow-x:hidden;gap:50px;"]),f=d.ZP.button.withConfig({displayName:"interviews__ViewAll",componentId:"sc-39pmxa-1"})(["background-color:#be7214;border:none;color:white;font-size:1.2rem;padding:1.2rem 1.2rem;outline:none;border-radius:0.5rem;cursor:pointer;"]);d.ZP.div.withConfig({displayName:"interviews__TwoContainer",componentId:"sc-39pmxa-2"})(["width:80%;display:flex;justify-content:space-between;"]);var m=d.ZP.div.withConfig({displayName:"interviews__ArticlesContainer",componentId:"sc-39pmxa-3"})(["width:80%;display:flex;flex-wrap:wrap;gap:5rem;@media (max-width:821px){flex-direction:column;width:90%;}"]),u=d.ZP.div.withConfig({displayName:"interviews__ArticleContainer",componentId:"sc-39pmxa-4"})(["width:45%;display:flex;align-items:center;justify-content:space-between;@media (max-width:821px){width:100%;}"]),x=d.ZP.div.withConfig({displayName:"interviews__ImageContainer",componentId:"sc-39pmxa-5"})(['position:relative;width:40%;height:25rem;border-radius:1rem;background-image:url("/assets/600x600.png");background-size:cover;background-position:center;transition:all 0.6s ease-in-out;'])},7333:function(e,i,n){"use strict";n(7294);var t=n(1893),r=n(1664),a=n.n(r),o=n(8193),s=n(1163),d=n(5893);i.Z=function(){var e=(0,s.useRouter)();return(0,d.jsx)(c,{children:(0,d.jsxs)(p,{children:[(0,d.jsx)(l,{src:"/assets/logo.png",alt:"Jorzine Logo",onClick:function(){e.push("/")}}),(0,d.jsxs)(w,{children:[(0,d.jsx)(a(),{href:"/",children:"Home"}),(0,d.jsx)(a(),{href:"/news",children:" News"}),(0,d.jsx)(a(),{href:"/Reviews",children:"Reviews"}),(0,d.jsx)(a(),{href:"/interviews",children:"Interviews"}),(0,d.jsx)(a(),{href:"/articles",children:"Articles"})]}),(0,d.jsx)(h,{children:(0,d.jsx)(o.qTj,{})})]})})};var c=t.ZP.div.withConfig({displayName:"AltNav__Container",componentId:"sc-1f1kxn0-0"})(["overflow:hidden;background:rgb(83,83,83);background:linear-gradient( 39deg,rgba(83,83,83,1) 0%,rgba(0,0,0,1) 58%,rgba(83,83,83,1) 100% );width:100vw;display:flex;justify-content:center;height:150px;@media screen and (max-width:821px){top:0;}"]),l=t.ZP.img.withConfig({displayName:"AltNav__Logo",componentId:"sc-1f1kxn0-1"})(["cursor:pointer;@media screen and (max-width:821px){width:40%;}"]),p=t.ZP.div.withConfig({displayName:"AltNav__Nav",componentId:"sc-1f1kxn0-2"})(["width:80%;display:flex;justify-content:space-between;align-items:center;padding:1rem 0px;@media screen and (max-width:821px){width:90%;padding:2rem 0px;}"]),h=t.ZP.div.withConfig({displayName:"AltNav__MenuIcon",componentId:"sc-1f1kxn0-3"})(["display:none;color:white;font-size:3rem;@media screen and (max-width:821px){display:block;}"]),w=t.ZP.div.withConfig({displayName:"AltNav__LinksContainer",componentId:"sc-1f1kxn0-4"})(["display:flex;justify-content:space-around;width:50%;color:white;font-size:1.8rem;font-weight:200;@media screen and (max-width:821px){display:none;}"])},7757:function(e,i,n){"use strict";n(7294);var t=n(1893),r=n(5893);i.Z=function(){return(0,r.jsx)(a,{children:(0,r.jsx)(o,{})})};var a=t.ZP.div.withConfig({displayName:"Footer__Container",componentId:"sc-wffdb5-0"})(['width:100%;height:50vh;background-image:url("/assets/footer-bg.jpg");background-size:cover;margin-top:10rem;display:flex;justify-content:center;align-items:center;']),o=t.ZP.div.withConfig({displayName:"Footer__SubContainer",componentId:"sc-wffdb5-1"})(["width:70%;display:flex;justify-content:space-between;color:white;"]);t.ZP.div.withConfig({displayName:"Footer__LeftFooter",componentId:"sc-wffdb5-2"})(["width:50%;"]),t.ZP.img.withConfig({displayName:"Footer__Logo",componentId:"sc-wffdb5-3"})(["@media screen and (max-width:821px){width:40%;}"])},9773:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interviews",function(){return n(2585)}])}},function(e){e.O(0,[617,484,774,888,179],function(){return e(e.s=9773)}),_N_E=e.O()}]);