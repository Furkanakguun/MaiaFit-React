(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5352],{7942:function(e,s,i){"use strict";var a=i(63038);s.default=void 0;var l,n=(l=i(67294))&&l.__esModule?l:{default:l},r=i(64957),c=i(69898),t=i(90639);var d={};function o(e,s,i,a){if(e&&r.isLocalURL(s)){e.prefetch(s,i,a).catch((function(e){0}));var l=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;d[s+"%"+i+(l?"%"+l:"")]=!0}}var h=function(e){var s,i=!1!==e.prefetch,l=c.useRouter(),h=n.default.useMemo((function(){var s=r.resolveHref(l,e.href,!0),i=a(s,2),n=i[0],c=i[1];return{href:n,as:e.as?r.resolveHref(l,e.as):c||n}}),[l,e.href,e.as]),x=h.href,m=h.as,f=e.children,j=e.replace,u=e.shallow,v=e.scroll,g=e.locale;"string"===typeof f&&(f=n.default.createElement("a",null,f));var p=(s=n.default.Children.only(f))&&"object"===typeof s&&s.ref,w=t.useIntersection({rootMargin:"200px"}),N=a(w,2),y=N[0],b=N[1],k=n.default.useCallback((function(e){y(e),p&&("function"===typeof p?p(e):"object"===typeof p&&(p.current=e))}),[p,y]);n.default.useEffect((function(){var e=b&&i&&r.isLocalURL(x),s="undefined"!==typeof g?g:l&&l.locale,a=d[x+"%"+m+(s?"%"+s:"")];e&&!a&&o(l,x,m,{locale:s})}),[m,x,b,g,i,l]);var P={ref:k,onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,s,i,a,l,n,c,t){("A"!==e.currentTarget.nodeName||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&r.isLocalURL(i))&&(e.preventDefault(),null==c&&a.indexOf("#")>=0&&(c=!1),s[l?"replace":"push"](i,a,{shallow:n,locale:t,scroll:c}))}(e,l,x,m,j,u,v,g)},onMouseEnter:function(e){r.isLocalURL(x)&&(s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),o(l,x,m,{priority:!0}))}};if(e.passHref||"a"===s.type&&!("href"in s.props)){var C="undefined"!==typeof g?g:l&&l.locale,M=l&&l.isLocaleDomain&&r.getDomainLocale(m,C,l&&l.locales,l&&l.domainLocales);P.href=M||r.addBasePath(r.addLocale(m,C,l&&l.defaultLocale))}return n.default.cloneElement(s,P)};s.default=h},90639:function(e,s,i){"use strict";var a=i(63038);Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootMargin,i=e.disabled||!r,t=l.useRef(),d=l.useState(!1),o=a(d,2),h=o[0],x=o[1],m=l.useCallback((function(e){t.current&&(t.current(),t.current=void 0),i||h||e&&e.tagName&&(t.current=function(e,s,i){var a=function(e){var s=e.rootMargin||"",i=c.get(s);if(i)return i;var a=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var s=a.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;s&&i&&s(i)}))}),e);return c.set(s,i={id:s,observer:l,elements:a}),i}(i),l=a.id,n=a.observer,r=a.elements;return r.set(e,s),n.observe(e),function(){r.delete(e),n.unobserve(e),0===r.size&&(n.disconnect(),c.delete(l))}}(e,(function(e){return e&&x(e)}),{rootMargin:s}))}),[i,s,h]);return l.useEffect((function(){if(!r&&!h){var e=n.requestIdleCallback((function(){return x(!0)}));return function(){return n.cancelIdleCallback(e)}}}),[h]),[m,h]};var l=i(67294),n=i(26286),r="undefined"!==typeof IntersectionObserver;var c=new Map},1375:function(e,s,i){"use strict";i(67294);var a=i(41664),l=i(85893);s.Z=function(e){var s=e.sliderRef;return(0,l.jsxs)("header",{ref:s,className:"slider-st valign position-re",children:[(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-6 valign",children:(0,l.jsxs)("div",{className:"cont md-mb50",children:[(0,l.jsx)("div",{className:"sub-title mb-5",children:(0,l.jsx)("h6",{children:"Digital Consulting Agency"})}),(0,l.jsx)("h1",{className:"mb-10 fw-600",children:"Unique Business Consulting."}),(0,l.jsx)("p",{children:"We help our clients succeed by creating brand identities, digital experiences, and print materials."}),(0,l.jsx)(a.default,{href:"/about/about-dark",children:(0,l.jsx)("a",{className:"butn bord curve mt-30",children:(0,l.jsx)("span",{children:"About Us"})})})]})}),(0,l.jsx)("div",{className:"col-lg-6",children:(0,l.jsx)("div",{className:"img",children:(0,l.jsx)("img",{src:"/img/slid/001.jpg",alt:""})})})]})}),(0,l.jsx)("div",{className:"line bottom left"})]})}},21480:function(e,s,i){"use strict";var a=i(67294),l=i(41664),n=i(5032),r=i(85893);s.Z=function(e){var s=e.grid,i=e.filterPosition;return a.useEffect((function(){setTimeout((function(){(0,n.Z)()}),1e3)}),[]),(0,r.jsxs)("section",{className:"portfolio section-padding pb-70",children:[(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row justify-content-center",children:(0,r.jsx)("div",{className:"col-lg-8 col-md-10",children:(0,r.jsxs)("div",{className:"sec-head text-center",children:[(0,r.jsx)("h6",{className:"wow fadeIn","data-wow-delay":".5s",children:"Portfolio"}),(0,r.jsxs)("h3",{className:"wow color-font",children:["Our Recent Web Design & ",(0,r.jsx)("br",{})," Some Past Projects."]})]})})})}),(0,r.jsx)("div",{className:"".concat(3===s?"container-fluid":"container"),children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"filtering ".concat("center"===i?"text-center":"left"===i?"text-left":"text-right"," col-12"),children:(0,r.jsxs)("div",{className:"filter",children:[(0,r.jsx)("span",{"data-filter":"*",className:"active",children:"All"}),(0,r.jsx)("span",{"data-filter":".brand",children:"Branding"}),(0,r.jsx)("span",{"data-filter":".web",children:"Mobile App"}),(0,r.jsx)("span",{"data-filter":".graphic",children:"Creative"})]})}),(0,r.jsxs)("div",{className:"gallery full-width",children:[(0,r.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6 lg-mr":"col-12"," items graphic wow fadeInUp"),"data-wow-delay":".4s",children:[(0,r.jsx)("div",{className:"item-img",children:(0,r.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsxs)("a",{className:"imago wow",children:[(0,r.jsx)("img",{src:"/img/portfolio/portfolio/1/1.jpg",alt:"image"}),(0,r.jsx)("div",{className:"item-img-overlay"})]})})}),(0,r.jsxs)("div",{className:"cont",children:[(0,r.jsx)("h6",{children:"Creativity Demand"}),(0,r.jsxs)("span",{children:[(0,r.jsx)(l.default,{href:"/works/works-dark",children:"Design"}),", ",(0,r.jsx)(l.default,{href:"/works/works-dark",children:"WordPress"})]})]})]}),(0,r.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6":"col-12"," items web wow fadeInUp"),"data-wow-delay":".4s",children:[(0,r.jsx)("div",{className:"item-img",children:(0,r.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsxs)("a",{className:"imago wow",children:[(0,r.jsx)("img",{src:"/img/portfolio/portfolio/1/2.jpg",alt:"image"}),(0,r.jsx)("div",{className:"item-img-overlay"})]})})}),(0,r.jsxs)("div",{className:"cont",children:[(0,r.jsx)("h6",{children:"Through The Breaking"}),(0,r.jsxs)("span",{children:[(0,r.jsx)("a",{href:"#0",children:"Design"}),", ",(0,r.jsx)("a",{href:"#0",children:"WordPress"})]})]})]}),(0,r.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6":"col-12"," items brand wow fadeInUp"),"data-wow-delay":".4s",children:[(0,r.jsx)("div",{className:"item-img",children:(0,r.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsxs)("a",{className:"imago wow",children:[(0,r.jsx)("img",{src:"/img/portfolio/portfolio/1/3.jpg",alt:"image"}),(0,r.jsx)("div",{className:"item-img-overlay"})]})})}),(0,r.jsxs)("div",{className:"cont",children:[(0,r.jsx)("h6",{children:"Create With Creatives"}),(0,r.jsxs)("span",{children:[(0,r.jsx)("a",{href:"#0",children:"Design"}),", ",(0,r.jsx)("a",{href:"#0",children:"WordPress"})]})]})]}),(0,r.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6":"col-12"," items graphic wow fadeInUp"),"data-wow-delay":".4s",children:[(0,r.jsx)("div",{className:"item-img",children:(0,r.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsxs)("a",{className:"imago wow",children:[(0,r.jsx)("img",{src:"/img/portfolio/portfolio/1/4.jpg",alt:"image"}),(0,r.jsx)("div",{className:"item-img-overlay"})]})})}),(0,r.jsxs)("div",{className:"cont",children:[(0,r.jsx)("h6",{children:"Energies of Love"}),(0,r.jsxs)("span",{children:[(0,r.jsx)("a",{href:"#0",children:"Design"}),", ",(0,r.jsx)("a",{href:"#0",children:"WordPress"})]})]})]}),(0,r.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6":"col-12"," items web wow fadeInUp"),"data-wow-delay":".4s",children:[(0,r.jsx)("div",{className:"item-img",children:(0,r.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsxs)("a",{className:"imago wow",children:[(0,r.jsx)("img",{src:"/img/portfolio/portfolio/1/5.jpg",alt:"image"}),(0,r.jsx)("div",{className:"item-img-overlay"})]})})}),(0,r.jsxs)("div",{className:"cont",children:[(0,r.jsx)("h6",{children:"See It Yourself"}),(0,r.jsxs)("span",{children:[(0,r.jsx)("a",{href:"#0",children:"Design"}),", ",(0,r.jsx)("a",{href:"#0",children:"WordPress"})]})]})]}),(0,r.jsxs)("div",{className:"".concat(3===s?"col-lg-4 col-md-6":2===s?"col-md-6":"col-12"," items brand wow fadeInUp"),"data-wow-delay":".4s",children:[(0,r.jsx)("div",{className:"item-img",children:(0,r.jsx)(l.default,{href:"/project-details2/project-details2-dark",children:(0,r.jsxs)("a",{className:"imago wow",children:[(0,r.jsx)("img",{src:"/img/portfolio/portfolio/1/6.jpg",alt:"image"}),(0,r.jsx)("div",{className:"item-img-overlay"})]})})}),(0,r.jsxs)("div",{className:"cont",children:[(0,r.jsx)("h6",{children:"Blast From The Past"}),(0,r.jsxs)("span",{children:[(0,r.jsx)("a",{href:"#0",children:"Design"}),", ",(0,r.jsx)("a",{href:"#0",children:"WordPress"})]})]})]})]})]})})]})}},37509:function(e,s,i){"use strict";i(67294);var a=i(13473),l=i(85893);s.Z=function(e){var s=e.style,i=e.lines;return(0,l.jsxs)("section",{className:"services bords section-padding ".concat("4item"===s?"lficon":i?"":"pt-0"),children:[(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"row justify-content-center",children:(0,l.jsx)("div",{className:"col-lg-8 col-md-10",children:(0,l.jsxs)("div",{className:"sec-head  text-center",children:[(0,l.jsx)("h6",{className:"wow fadeIn","data-wow-delay":".5s",children:"Uygulama &"}),(0,l.jsx)("h3",{className:"wow color-font",children:"Hizmetlerimiz"})]})})}),(0,l.jsx)("div",{className:"row",children:"4item"===s?a.map((function(e){return(0,l.jsx)("div",{className:"col-lg-6 wow fadeInLeft","data-wow-delay":"".concat(1==e.id?".5":2===e.id?".7":3===e.id?".9":"1.1","s"),children:(0,l.jsxs)("div",{className:"item-box",children:[(0,l.jsx)("div",{children:(0,l.jsx)("span",{className:"icon ".concat(e.icon)})}),(0,l.jsxs)("div",{className:"cont",children:[(0,l.jsx)("h6",{children:e.title}),(0,l.jsx)("p",{children:e.content})]})]})},e.id)})):a.slice(0,3).map((function(e){return(0,l.jsx)("div",{className:"col-lg-4 wow fadeInLeft","data-wow-delay":".5s",children:(0,l.jsxs)("div",{className:"item-box md-mb50",children:[(0,l.jsx)("span",{className:"icon ".concat(e.icon)}),(0,l.jsx)("h6",{children:e.title}),(0,l.jsx)("p",{children:e.content})]})},e.id)}))})]}),i?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"line top left"}),(0,l.jsx)("div",{className:"line bottom right"})]}):null]})}},94899:function(e,s,i){"use strict";i(67294);var a=i(85893);s.Z=function(){return(0,a.jsxs)("section",{className:"team section-padding",children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row justify-content-center",children:(0,a.jsx)("div",{className:"col-lg-8 col-md-10",children:(0,a.jsxs)("div",{className:"sec-head text-center",children:[(0,a.jsx)("h6",{className:"wow fadeIn","data-wow-delay":".5s",children:"Our Team"}),(0,a.jsx)("h3",{className:"wow color-font",children:"An original team of creators designers & dreamers."})]})})})}),(0,a.jsx)("div",{className:"container-fluid",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-3 col-md-6",children:(0,a.jsx)("div",{className:"item cir md-mb50",children:(0,a.jsxs)("div",{className:"img",children:[(0,a.jsx)("img",{src:"/img/team/1.jpg",alt:""}),(0,a.jsx)("div",{id:"circle1",children:(0,a.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve",children:[(0,a.jsx)("defs",{children:(0,a.jsx)("path",{id:"circlePath1",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})}),(0,a.jsx)("circle",{cx:"150",cy:"100",r:"75",fill:"none"}),(0,a.jsxs)("g",{children:[(0,a.jsx)("use",{xlinkHref:"#circlePath1",fill:"none"}),(0,a.jsx)("text",{fill:"#fff",children:(0,a.jsx)("textPath",{xlinkHref:"#circlePath1",children:"CEO Manager CEO Manager CEO Manager"})})]})]})}),(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)("h6",{children:"Ryan Hicks"}),(0,a.jsx)("span",{children:"Client Manager"})]})]})})}),(0,a.jsx)("div",{className:"col-lg-3 col-md-6",children:(0,a.jsx)("div",{className:"item cir md-mb50",children:(0,a.jsxs)("div",{className:"img",children:[(0,a.jsx)("img",{src:"/img/team/2.jpg",alt:""}),(0,a.jsx)("div",{id:"circle2",children:(0,a.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve",children:[(0,a.jsx)("defs",{children:(0,a.jsx)("path",{id:"circlePath2",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})}),(0,a.jsx)("circle",{cx:"150",cy:"100",r:"75",fill:"none"}),(0,a.jsxs)("g",{children:[(0,a.jsx)("use",{xlinkHref:"#circlePath2",fill:"none"}),(0,a.jsx)("text",{fill:"#fff",children:(0,a.jsx)("textPath",{xlinkHref:"#circlePath2",children:"Interior Designer Interior Designer Interior Designer"})})]})]})}),(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)("h6",{children:"Ryan Hicks"}),(0,a.jsx)("span",{children:"Client Manager"})]})]})})}),(0,a.jsx)("div",{className:"col-lg-3 col-md-6",children:(0,a.jsx)("div",{className:"item cir sm-mb50",children:(0,a.jsxs)("div",{className:"img",children:[(0,a.jsx)("img",{src:"/img/team/3.jpg",alt:""}),(0,a.jsx)("div",{id:"circle3",children:(0,a.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve",children:[(0,a.jsx)("defs",{children:(0,a.jsx)("path",{id:"circlePath3",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})}),(0,a.jsx)("circle",{cx:"150",cy:"100",r:"75",fill:"none"}),(0,a.jsxs)("g",{children:[(0,a.jsx)("use",{xlinkHref:"#circlePath3",fill:"none"}),(0,a.jsx)("text",{fill:"#fff",children:(0,a.jsx)("textPath",{xlinkHref:"#circlePath3",children:"Landscape Designer Landscape Designer Landscape Designer"})})]})]})}),(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)("h6",{children:"Ryan Hicks"}),(0,a.jsx)("span",{children:"Client Manager"})]})]})})}),(0,a.jsx)("div",{className:"col-lg-3 col-md-6",children:(0,a.jsx)("div",{className:"item cir",children:(0,a.jsxs)("div",{className:"img",children:[(0,a.jsx)("img",{src:"/img/team/4.jpg",alt:""}),(0,a.jsx)("div",{id:"circle4",children:(0,a.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve",children:[(0,a.jsx)("defs",{children:(0,a.jsx)("path",{id:"circlePath4",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})}),(0,a.jsx)("circle",{cx:"150",cy:"100",r:"75",fill:"none"}),(0,a.jsxs)("g",{children:[(0,a.jsx)("use",{xlinkHref:"#circlePath4",fill:"none"}),(0,a.jsx)("text",{fill:"#fff",children:(0,a.jsx)("textPath",{xlinkHref:"#circlePath4",children:"Client Manager Client Manager Client Manager"})})]})]})}),(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)("h6",{children:"Ryan Hicks"}),(0,a.jsx)("span",{children:"Client Manager"})]})]})})})]})})]})}},74974:function(e,s,i){"use strict";var a=i(77625),l=i(67294),n=i(61239),r=(i(45607),i(85893));s.Z=function(){var e=l.useState(!1),s=(0,a.Z)(e,2),i=s[0],c=s[1];return l.useEffect((function(){console.clear()}),[]),(0,r.jsxs)("section",{className:"video bg-img parallaxie",style:{backgroundImage:"url(/img/bg-vid.jpg)"},children:[(0,r.jsx)(n.Z,{channel:"vimeo",autoplay:!0,isOpen:i,videoId:"127203262",onClose:function(){return c(!1)}}),(0,r.jsx)("a",{className:"vid valign",onClick:function(e){e.preventDefault(),c(!0)},children:(0,r.jsx)("div",{className:"vid-butn",children:(0,r.jsx)("span",{className:"icon",children:(0,r.jsx)("i",{className:"pe-7s-play"})})})}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"stauts",children:[(0,r.jsxs)("div",{className:"item",children:[(0,r.jsxs)("h4",{children:["3",(0,r.jsx)("span",{children:"K"})," +"]}),(0,r.jsx)("h6",{children:"Happy Clients"})]}),(0,r.jsxs)("div",{className:"item",children:[(0,r.jsxs)("h4",{children:["14",(0,r.jsx)("span",{children:"K"})," +"]}),(0,r.jsx)("h6",{children:"Success Projects"})]})]})})]})}},41664:function(e,s,i){e.exports=i(7942)},77625:function(e,s,i){"use strict";function a(e,s){(null==s||s>e.length)&&(s=e.length);for(var i=0,a=new Array(s);i<s;i++)a[i]=e[i];return a}function l(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,l,n=[],r=!0,c=!1;try{for(i=i.call(e);!(r=(a=i.next()).done)&&(n.push(a.value),!s||n.length!==s);r=!0);}catch(t){c=!0,l=t}finally{try{r||null==i.return||i.return()}finally{if(c)throw l}}return n}}(e,s)||function(e,s){if(e){if("string"===typeof e)return a(e,s);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(e,s):void 0}}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}i.d(s,{Z:function(){return l}})}}]);