(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[232],{3123:function(e,n,i){"use strict";i.r(n);var t=i(29),r=i(7794),o=i.n(r),s=i(7294),a=i(1893),d=i(1163),c=i(6154),l=i(7333),p=i(7757),h=i(8635),w=i(5893);n.default=function(){var e,n,i=(0,d.useRouter)(),r=i.query.id,a=(0,s.useState)([]),x=a[0],g=a[1],v=(0,s.useState)([]),y=v[0],_=v[1],j=(e=(0,t.Z)(o().mark(function e(){var n;return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://jorzine-backend.oplus.dev/api/news/".concat(r));case 3:console.log(n=e.sent.data.new),g(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error fetching data:",e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])})),function(){return e.apply(this,arguments)}),C=(n=(0,t.Z)(o().mark(function e(){var n;return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://jorzine-backend.oplus.dev/api/news");case 3:console.log(n=e.sent.data.news),_(n.slice(0,4)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error fetching data:",e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])})),function(){return n.apply(this,arguments)});return(0,s.useEffect)(function(){j(),C()},[r]),(0,w.jsxs)(f,{children:[(0,w.jsx)(l.Z,{}),(0,w.jsx)(u,{children:x.title}),(0,w.jsx)(m,{children:x.body}),(0,w.jsx)(u,{children:"Related News"}),(0,w.jsx)(h.CardsContainer,{style:{marginBottom:"50px",zIndex:2},children:y.map(function(e){return(0,w.jsxs)(h.Card,{children:[(0,w.jsx)(h.LatestNewsHeading,{children:e.title}),(0,w.jsx)(h.LatestNewsPar,{children:e.body}),(0,w.jsx)(h.InfoContainer,{children:(0,w.jsxs)(h.Info,{children:[(0,w.jsxs)(h.Author,{children:["By: ",e.posted_by_user]}),(0,w.jsx)(h.Date,{children:e.news_date})]})}),(0,w.jsx)(h.ReadMore,{onClick:function(){i.push("/news/".concat(e.id))},children:"Read More →"})]},e.id)})}),(0,w.jsx)(p.Z,{})]})};var f=a.ZP.div.withConfig({displayName:"id__Container",componentId:"sc-133ym5h-0"})(["display:flex;flex-direction:column;width:100vw;align-items:center;overflow-x:hidden;gap:50px;"]);a.ZP.div.withConfig({displayName:"id__NewsContainer",componentId:"sc-133ym5h-1"})(["width:80%;display:flex;flex-direction:column;"]);var u=a.ZP.h1.withConfig({displayName:"id__NewsHeading",componentId:"sc-133ym5h-2"})(["color:#be7214;font-size:3rem;@media (max-width:821px){width:90%;text-align:center;}"]),m=a.ZP.h1.withConfig({displayName:"id__NewsBody",componentId:"sc-133ym5h-3"})(["position:relative;font-size:2rem;font-weight:300;width:70%;@media (max-width:821px){width:90%;text-align:center;}"])},8635:function(e,n,i){"use strict";i.r(n),i.d(n,{Author:function(){return g},Card:function(){return _},CardsContainer:function(){return y},Date:function(){return v},Info:function(){return x},InfoContainer:function(){return m},LatestNewsHeading:function(){return f},LatestNewsPar:function(){return u},ReadMore:function(){return j}});var t=i(29),r=i(7794),o=i.n(r),s=i(7294),a=i(7333),d=i(1893),c=i(6154),l=i(4880),p=i(1163),h=i(5893);n.default=function(){var e,n=(0,p.useRouter)(),i=(0,s.useState)([]),r=i[0],d=i[1];(0,s.useEffect)(function(){C()},[]);var C=(e=(0,t.Z)(o().mark(function e(){var n;return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://jorzine-backend.oplus.dev/api/news");case 3:console.log(n=e.sent.data.news),d(n.slice(0,120)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error fetching data:",e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])})),function(){return e.apply(this,arguments)});return(0,h.jsxs)(w,{children:[(0,h.jsx)(a.Z,{}),(0,h.jsx)("h1",{style:{fontSize:"3.5rem"},children:"Latest News"}),r.length?(0,h.jsx)(y,{children:r.map(function(e){return(0,h.jsxs)(_,{children:[(0,h.jsx)(f,{children:e.title}),(0,h.jsx)(u,{children:e.body}),(0,h.jsx)(m,{children:(0,h.jsxs)(x,{children:[(0,h.jsxs)(g,{children:["By: ",e.posted_by_user]}),(0,h.jsx)(v,{children:e.news_date})]})}),(0,h.jsx)(j,{onClick:function(){n.push("/news/".concat(e.id))},children:"Read More →"})]},e.id)})}):(0,h.jsx)(l.Bb,{height:"200",width:"200",color:"#be7214",ariaLabel:"audio-loading",wrapperStyle:{},wrapperClass:"wrapper-class",visible:!0})]})};var w=d.ZP.div.withConfig({displayName:"news__Container",componentId:"sc-xrziu1-0"})(["display:flex;flex-direction:column;width:100vw;align-items:center;overflow-x:hidden;gap:50px;"]);d.ZP.div.withConfig({displayName:"news__FirstNews",componentId:"sc-xrziu1-1"})(["display:flex;justify-content:space-around;width:80%;align-items:center;@media (max-width:821px){flex-direction:column;align-items:center;}"]),d.ZP.div.withConfig({displayName:"news__ImageContainer",componentId:"sc-xrziu1-2"})(['position:relative;width:35%;height:35rem;border-radius:1rem;background-image:url("/assets/600x600.png");background-size:cover;background-position:center;transition:all 0.6s ease-in-out;@media (max-width:821px){width:80%;}']),d.ZP.div.withConfig({displayName:"news__NewsBody",componentId:"sc-xrziu1-3"})(["width:50%;display:flex;flex-direction:column;justify-content:space-around;@media (max-width:821px){width:100%;align-items:center;}"]),d.ZP.h2.withConfig({displayName:"news__NewsHeading",componentId:"sc-xrziu1-4"})(["font-size:3rem;color:#be7214;@media (max-width:821px){text-align:center;}"]),d.ZP.div.withConfig({displayName:"news__NewsPar",componentId:"sc-xrziu1-5"})(["font-size:1.3rem;@media (max-width:821px){width:90%;margin:5rem 0rem;}"]);var f=d.ZP.h2.withConfig({displayName:"news__LatestNewsHeading",componentId:"sc-xrziu1-6"})(["font-size:2rem;text-align:center;"]),u=d.ZP.div.withConfig({displayName:"news__LatestNewsPar",componentId:"sc-xrziu1-7"})(["overflow:hidden;text-overflow:ellipsis;text-overflow:clip;max-height:250px;width:100%;font-size:1.5rem;@media (max-width:821px){width:90%;margin:5rem 0rem;}"]),m=d.ZP.div.withConfig({displayName:"news__InfoContainer",componentId:"sc-xrziu1-8"})(["display:flex;flex-direction:column;margin-top:1rem;align-items:center;width:100%;"]),x=d.ZP.div.withConfig({displayName:"news__Info",componentId:"sc-xrziu1-9"})(["display:flex;justify-content:space-between;align-items:center;width:70%;align-self:center;"]),g=d.ZP.div.withConfig({displayName:"news__Author",componentId:"sc-xrziu1-10"})(["font-weight:bold;font-size:1.3rem;color:#d5ad18;width:50%;"]),v=d.ZP.div.withConfig({displayName:"news__Date",componentId:"sc-xrziu1-11"})(["font-weight:bold;font-size:1.1rem;color:black;width:50%;"]),y=d.ZP.div.withConfig({displayName:"news__CardsContainer",componentId:"sc-xrziu1-12"})(["width:80%;display:flex;gap:20px;flex-wrap:wrap;justify-content:space-between;@media (max-width:821px){flex-direction:column;}"]),_=d.ZP.div.withConfig({displayName:"news__Card",componentId:"sc-xrziu1-13"})(["width:22%;display:flex;max-height:600px;border-radius:1rem;border:1px solid gray;text-align:center;gap:1rem;padding:0px 1rem;flex-direction:column;justify-content:space-between;align-items:center;@media (max-width:821px){width:100%;}"]);d.ZP.div.withConfig({displayName:"news__CardImage",componentId:"sc-xrziu1-14"})(['width:100%;height:50%;background-image:url("/assets/600x600.png");background-size:cover;background-position:center;']);var j=d.ZP.a.withConfig({displayName:"news__ReadMore",componentId:"sc-xrziu1-15"})(["color:#d5ad18;font-size:15px;cursor:pointer;"])},7333:function(e,n,i){"use strict";i(7294);var t=i(1893),r=i(1664),o=i.n(r),s=i(8193),a=i(1163),d=i(5893);n.Z=function(){var e=(0,a.useRouter)();return(0,d.jsx)(c,{children:(0,d.jsxs)(p,{children:[(0,d.jsx)(l,{src:"/assets/logo.png",alt:"Jorzine Logo",onClick:function(){e.push("/")}}),(0,d.jsxs)(w,{children:[(0,d.jsx)(o(),{href:"/",children:"Home"}),(0,d.jsx)(o(),{href:"/news",children:" News"}),(0,d.jsx)(o(),{href:"/Reviews",children:"Reviews"}),(0,d.jsx)(o(),{href:"/interviews",children:"Interviews"}),(0,d.jsx)(o(),{href:"/articles",children:"Articles"})]}),(0,d.jsx)(h,{children:(0,d.jsx)(s.qTj,{})})]})})};var c=t.ZP.div.withConfig({displayName:"AltNav__Container",componentId:"sc-1f1kxn0-0"})(["overflow:hidden;background:rgb(83,83,83);background:linear-gradient( 39deg,rgba(83,83,83,1) 0%,rgba(0,0,0,1) 58%,rgba(83,83,83,1) 100% );width:100vw;display:flex;justify-content:center;height:150px;@media screen and (max-width:821px){top:0;}"]),l=t.ZP.img.withConfig({displayName:"AltNav__Logo",componentId:"sc-1f1kxn0-1"})(["cursor:pointer;@media screen and (max-width:821px){width:40%;}"]),p=t.ZP.div.withConfig({displayName:"AltNav__Nav",componentId:"sc-1f1kxn0-2"})(["width:80%;display:flex;justify-content:space-between;align-items:center;padding:1rem 0px;@media screen and (max-width:821px){width:90%;padding:2rem 0px;}"]),h=t.ZP.div.withConfig({displayName:"AltNav__MenuIcon",componentId:"sc-1f1kxn0-3"})(["display:none;color:white;font-size:3rem;@media screen and (max-width:821px){display:block;}"]),w=t.ZP.div.withConfig({displayName:"AltNav__LinksContainer",componentId:"sc-1f1kxn0-4"})(["display:flex;justify-content:space-around;width:50%;color:white;font-size:1.8rem;font-weight:200;@media screen and (max-width:821px){display:none;}"])},7757:function(e,n,i){"use strict";i(7294);var t=i(1893),r=i(5893);n.Z=function(){return(0,r.jsx)(o,{children:(0,r.jsx)(s,{})})};var o=t.ZP.div.withConfig({displayName:"Footer__Container",componentId:"sc-wffdb5-0"})(['width:100%;height:50vh;background-image:url("/assets/footer-bg.jpg");background-size:cover;margin-top:10rem;display:flex;justify-content:center;align-items:center;']),s=t.ZP.div.withConfig({displayName:"Footer__SubContainer",componentId:"sc-wffdb5-1"})(["width:70%;display:flex;justify-content:space-between;color:white;"]);t.ZP.div.withConfig({displayName:"Footer__LeftFooter",componentId:"sc-wffdb5-2"})(["width:50%;"]),t.ZP.img.withConfig({displayName:"Footer__Logo",componentId:"sc-wffdb5-3"})(["@media screen and (max-width:821px){width:40%;}"])},441:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news/[id]",function(){return i(3123)}])}},function(e){e.O(0,[617,799,880,774,888,179],function(){return e(e.s=441)}),_N_E=e.O()}]);