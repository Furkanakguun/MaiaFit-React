(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3467],{7942:function(e,a,r){"use strict";var i=r(63038);a.default=void 0;var s,l=(s=r(67294))&&s.__esModule?s:{default:s},n=r(64957),t=r(69898),o=r(90639);var c={};function d(e,a,r,i){if(e&&n.isLocalURL(a)){e.prefetch(a,r,i).catch((function(e){0}));var s=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;c[a+"%"+r+(s?"%"+s:"")]=!0}}var m=function(e){var a,r=!1!==e.prefetch,s=t.useRouter(),m=l.default.useMemo((function(){var a=n.resolveHref(s,e.href,!0),r=i(a,2),l=r[0],t=r[1];return{href:l,as:e.as?n.resolveHref(s,e.as):t||l}}),[s,e.href,e.as]),h=m.href,u=m.as,p=e.children,f=e.replace,j=e.shallow,x=e.scroll,g=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var v=(a=l.default.Children.only(p))&&"object"===typeof a&&a.ref,N=o.useIntersection({rootMargin:"200px"}),k=i(N,2),b=k[0],y=k[1],w=l.default.useCallback((function(e){b(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,b]);l.default.useEffect((function(){var e=y&&r&&n.isLocalURL(h),a="undefined"!==typeof g?g:s&&s.locale,i=c[h+"%"+u+(a?"%"+a:"")];e&&!i&&d(s,h,u,{locale:a})}),[u,h,y,g,r,s]);var C={ref:w,onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||function(e,a,r,i,s,l,t,o){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&n.isLocalURL(r))&&(e.preventDefault(),null==t&&i.indexOf("#")>=0&&(t=!1),a[s?"replace":"push"](r,i,{shallow:l,locale:o,scroll:t}))}(e,s,h,u,f,j,x,g)},onMouseEnter:function(e){n.isLocalURL(h)&&(a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),d(s,h,u,{priority:!0}))}};if(e.passHref||"a"===a.type&&!("href"in a.props)){var L="undefined"!==typeof g?g:s&&s.locale,z=s&&s.isLocaleDomain&&n.getDomainLocale(u,L,s&&s.locales,s&&s.domainLocales);C.href=z||n.addBasePath(n.addLocale(u,L,s&&s.defaultLocale))}return l.default.cloneElement(a,C)};a.default=m},90639:function(e,a,r){"use strict";var i=r(63038);Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(e){var a=e.rootMargin,r=e.disabled||!n,o=s.useRef(),c=s.useState(!1),d=i(c,2),m=d[0],h=d[1],u=s.useCallback((function(e){o.current&&(o.current(),o.current=void 0),r||m||e&&e.tagName&&(o.current=function(e,a,r){var i=function(e){var a=e.rootMargin||"",r=t.get(a);if(r)return r;var i=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var a=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;a&&r&&a(r)}))}),e);return t.set(a,r={id:a,observer:s,elements:i}),r}(r),s=i.id,l=i.observer,n=i.elements;return n.set(e,a),l.observe(e),function(){n.delete(e),l.unobserve(e),0===n.size&&(l.disconnect(),t.delete(s))}}(e,(function(e){return e&&h(e)}),{rootMargin:a}))}),[r,a,m]);return s.useEffect((function(){if(!n&&!m){var e=l.requestIdleCallback((function(){return h(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[m]),[u,m]};var s=r(67294),l=r(26286),n="undefined"!==typeof IntersectionObserver;var t=new Map},57420:function(e,a){"use strict";a.Z=function(e){var a=[];if(!e.parentNode)return a;for(var r=e.parentNode.firstChild;r;)1===r.nodeType&&r!==e&&a.push(r),r=r.nextSibling;return a}},81108:function(e,a,r){"use strict";r.d(a,{z:function(){return s},_:function(){return l}});var i=r(57420),s=function(e){(0,i.Z)(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).map((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},l=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}},25914:function(e,a,r){"use strict";r(67294);var i=r(41664),s=r(82806),l=r(85893);a.Z=function(e){var a=e.hideBGCOLOR;return(0,l.jsx)("footer",{className:"".concat(a?"":"sub-bg"),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"item md-mb50",children:[(0,l.jsx)("div",{className:"title",children:(0,l.jsx)("h5",{children:"\u0130leti\u015fim"})}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"icon pe-7s-map-marker"}),(0,l.jsxs)("div",{className:"cont",children:[(0,l.jsx)("h6",{children:"Adresimiz"}),(0,l.jsx)("p",{children:"\xdcmit Mah. Milenyum Sitesi 2483. Cad. No: 39 \xdcmitk\xf6y / ANKARA"})]})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"icon pe-7s-mail"}),(0,l.jsxs)("div",{className:"cont",children:[(0,l.jsx)("h6",{children:"Email"}),(0,l.jsx)("p",{children:"info@fiziform.com.tr"})]})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{className:"icon pe-7s-call"}),(0,l.jsxs)("div",{className:"cont",children:[(0,l.jsx)("h6",{children:"Bizi Aray\u0131n"}),(0,l.jsx)("p",{children:"+90 (312) 236 08 36"})]})]})]})]})}),(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"item md-mb50",children:[(0,l.jsx)("div",{className:"title",children:(0,l.jsx)("h5",{children:"En Son Haberler"})}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("div",{className:"img",children:(0,l.jsx)(i.default,{href:"/blog-details/blog-details-dark",children:(0,l.jsx)("a",{children:(0,l.jsx)("img",{src:"/img/blog/1.jpg",alt:""})})})}),(0,l.jsxs)("div",{className:"sm-post",children:[(0,l.jsx)(i.default,{href:"/blog-details/blog-details-dark",children:(0,l.jsx)("a",{children:(0,l.jsx)("p",{children:"The Start-Up Ultimate Guide to Make Your WordPress Journal."})})}),(0,l.jsx)(i.default,{href:"/blog/blog-dark",children:(0,l.jsx)("a",{children:(0,l.jsx)("span",{className:"date",children:"14 sep 2022"})})})]})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("div",{className:"img",children:(0,l.jsx)(i.default,{href:"/blog-details/blog-details-dark",children:(0,l.jsx)("a",{children:(0,l.jsx)("img",{src:"/img/blog/2.jpg",alt:""})})})}),(0,l.jsxs)("div",{className:"sm-post",children:[(0,l.jsx)(i.default,{href:"/blog-details/blog-details-dark",children:(0,l.jsx)("a",{children:(0,l.jsx)("p",{children:"The Start-Up Ultimate Guide to Make Your WordPress Journal."})})}),(0,l.jsx)(i.default,{href:"/blog/blog-dark",children:(0,l.jsx)("a",{children:(0,l.jsx)("span",{className:"date",children:"14 sep 2022"})})})]})]}),(0,l.jsx)("li",{children:(0,l.jsxs)("div",{className:"subscribe",children:[(0,l.jsx)("input",{type:"text",placeholder:"Type Your Email"}),(0,l.jsx)("span",{className:"subs pe-7s-paper-plane"})]})})]})]})}),(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"item",children:[(0,l.jsx)("div",{className:"logo",children:(0,l.jsx)("img",{src:s.E8,alt:""})}),(0,l.jsxs)("div",{className:"social",children:[(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-facebook-f"})}),(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-twitter"})}),(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-instagram"})}),(0,l.jsx)("a",{href:"#0",children:(0,l.jsx)("i",{className:"fab fa-youtube"})})]}),(0,l.jsx)("div",{className:"copy-right",children:(0,l.jsxs)("p",{children:["\xa9 2022, by",(0,l.jsx)(i.default,{href:"https://themeforest.net/user/themescamp/portfolio",children:(0,l.jsx)("a",{target:"_blank",children:" MaiaFit"})}),"."]})})]})})]})})})}},30015:function(e,a,r){"use strict";r(67294);var i=r(41664),s=r(82806),l=r(81108),n=r(85893);a.Z=function(e){var a=e.lr,r=e.nr,t=e.theme;return(0,n.jsx)("nav",{ref:r,className:"navbar navbar-expand-lg change ".concat("themeL"===t?"light":""),children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(i.default,{href:"/",children:(0,n.jsx)("a",{className:"logo",children:t&&"themeL"===t?(0,n.jsx)("img",{ref:a,src:s.Q1,alt:"logo"}):(0,n.jsx)("img",{ref:a,src:s.E8,alt:"logo"})})}),(0,n.jsx)("button",{className:"navbar-toggler",type:"button",onClick:l._,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,n.jsx)("span",{className:"icon-bar",children:(0,n.jsx)("i",{className:"fas fa-bars"})})}),(0,n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,n.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,n.jsxs)("li",{className:"nav-item dropdown",onClick:l.z,children:[(0,n.jsx)("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"Home"}),(0,n.jsxs)("div",{className:"dropdown-menu",children:[(0,n.jsx)(i.default,{href:"/homepage/home1-dark",children:(0,n.jsx)("a",{className:"dropdown-item",children:"Main Home"})}),(0,n.jsx)(i.default,{href:"/homepage/home2-dark",children:(0,n.jsx)("a",{className:"dropdown-item",children:"Creative Agency"})}),(0,n.jsx)(i.default,{href:"/homepage/home5-dark",children:(0,n.jsx)("a",{className:"dropdown-item",children:"Digital Agency"})}),(0,n.jsx)(i.default,{href:"/homepage/home4-dark",children:(0,n.jsx)("a",{className:"dropdown-item",children:"Business One Page"})}),(0,n.jsx)(i.default,{href:"/homepage/home3-dark",children:(0,n.jsx)("a",{className:"dropdown-item",children:"Corporate Business"})}),(0,n.jsx)(i.default,{href:"/homepage/home6-dark",children:(0,n.jsx)("a",{className:"dropdown-item",children:"Modern Agency"})}),(0,n.jsx)(i.default,{href:"/homepage/home7-dark",children:(0,n.jsx)("a",{className:"dropdown-item",children:"Freelancer"})}),(0,n.jsx)(i.default,{href:"/homepage/home8-dark",children:(0,n.jsx)("a",{className:"dropdown-item",children:"Architecture"})})]})]}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(i.default,{href:"/about/about-dark",children:(0,n.jsx)("a",{className:"nav-link",children:"About"})})}),(0,n.jsxs)("li",{className:"nav-item dropdown",onClick:l.z,children:[(0,n.jsx)("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"Works"}),(0,n.jsxs)("div",{className:"dropdown-menu",children:[(0,n.jsx)(i.default,{href:"/showcase/showcase-dark",children:(0,n.jsx)("a",{className:"dropdown-item",children:"Showcase Parallax"})}),(0,n.jsx)(i.default,{href:"/showcase4/showcase4-dark",children:(0,n.jsx)("a",{className:"dropdown-item",children:"Showcase Carousel"})}),(0,n.jsx)(i.default,{href:"/showcase3/showcase3-dark",children:(0,n.jsx)("a",{className:"dropdown-item",children:"Showcase Circle"})}),(0,n.jsx)(i.default,{href:"/works/works-dark",children:(0,n.jsx)("a",{className:"dropdown-item",children:"Portfolio Masonry"})}),(0,n.jsx)(i.default,{href:"/works2/works2-dark",children:(0,n.jsx)("a",{className:"dropdown-item",children:"Portfolio Filtering"})}),(0,n.jsx)(i.default,{href:"/works3/works3-dark",children:(0,n.jsx)("a",{className:"dropdown-item",children:"Portfolio Gallery"})})]})]}),(0,n.jsxs)("li",{className:"nav-item dropdown",onClick:l.z,children:[(0,n.jsx)("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"Blog"}),(0,n.jsxs)("div",{className:"dropdown-menu",children:[(0,n.jsx)(i.default,{href:"/blog/blog-dark",children:(0,n.jsx)("a",{className:"dropdown-item",children:"Blog Standerd"})}),(0,n.jsx)(i.default,{href:"/blog-list/blog-list-dark",children:(0,n.jsx)("a",{className:"dropdown-item",children:"Blog List"})}),(0,n.jsx)(i.default,{href:"/blog-grid/blog-grid-dark",children:(0,n.jsx)("a",{className:"dropdown-item",children:"Blog Grid"})}),(0,n.jsx)(i.default,{href:"/blog-details/blog-details-dark",children:(0,n.jsx)("a",{className:"dropdown-item",children:"Blog Details"})})]})]}),(0,n.jsx)("li",{className:"nav-item",children:(0,n.jsx)(i.default,{href:"/contact/contact-dark",children:(0,n.jsx)("a",{className:"nav-link",children:"Contact"})})})]})})]})})}},55113:function(e,a,r){"use strict";r(67294);var i=r(85893);a.Z=function(){return(0,i.jsx)("section",{className:"next-prog section-padding",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-12",children:(0,i.jsx)("div",{className:"box",children:(0,i.jsxs)("div",{className:"bg-img valign",style:{backgroundImage:"url(/img/portfolio/project2/6.jpg)"},"data-overlay-dark":"4",children:[(0,i.jsx)("div",{className:"caption ontop valign",children:(0,i.jsx)("div",{className:"o-hidden full-width",children:(0,i.jsx)("h1",{children:(0,i.jsx)("a",{href:"",children:(0,i.jsx)("div",{className:"stroke",children:"Natural plus modern."})})})})}),(0,i.jsx)("div",{className:"copy-cap valign",children:(0,i.jsx)("div",{className:"cap full-width",children:(0,i.jsx)("h1",{children:(0,i.jsx)("a",{href:"",children:(0,i.jsx)("span",{children:"Natural plus modern."})})})})})]})})})})})})}},78494:function(e,a,r){"use strict";r(67294);var i=r(85893);a.Z=function(e){var a=e.projectDescriptionData;return(0,i.jsx)("section",{className:"intro-section section-padding",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-3 col-md-4",children:(0,i.jsx)("div",{className:"htit",children:(0,i.jsx)("h1",{children:a.title})})}),(0,i.jsx)("div",{className:"col-lg-8 offset-lg-1 col-md-8",children:(0,i.jsx)("div",{className:"text js-scroll__content",children:(0,i.jsx)("p",{className:"extra-text",children:a.content})})})]})})})}},79870:function(e,a,r){"use strict";r(67294),r(41664);var i=r(85893);a.Z=function(e){var a=e.projectHeaderData;return(0,i.jsx)("section",{className:"page-header proj-det bg-img parallaxie valign",style:{backgroundImage:"url(".concat(a.projectHeaderImage,")")},"data-overlay-dark":"4",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-lg-7 col-md-9",children:(0,i.jsxs)("div",{className:"cont",children:[(0,i.jsx)("h6",{children:a.title.small}),(0,i.jsx)("h1",{children:a.title.big})]})})})})})}},46696:function(e,a,r){"use strict";r(67294);var i=r(85893);a.Z=function(){return(0,i.jsx)("section",{className:"projdtal",children:(0,i.jsx)("div",{className:"popup-img",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("a",{href:"#",className:"col-md-3 popimg",children:(0,i.jsx)("img",{alt:"",src:"/img/portfolio/project2/1.jpg"})}),(0,i.jsx)("a",{href:"#",className:"col-md-3 popimg",children:(0,i.jsx)("img",{alt:"",src:"/img/portfolio/project2/2.jpg"})}),(0,i.jsx)("a",{href:"#",className:"col-md-3 popimg",children:(0,i.jsx)("img",{alt:"",src:"/img/portfolio/project2/3.jpg"})}),(0,i.jsx)("a",{href:"#",className:"col-md-3 popimg",children:(0,i.jsx)("img",{alt:"",src:"/img/portfolio/project2/5.jpg"})}),(0,i.jsx)("a",{href:"#",className:"col-md-12 popimg",children:(0,i.jsx)("img",{alt:"",src:"/img/portfolio/project2/7.jpg"})})]})})})}},79404:function(e,a,r){"use strict";r(67294);var i=r(85893);a.Z=function(e){var a=e.projectIntroductionData;return(0,i.jsx)("section",{className:"intro-section section-padding",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-5 col-md-4",children:(0,i.jsx)("div",{className:"htit",children:(0,i.jsx)("h5",{children:a.leftContent})})}),(0,i.jsx)("div",{className:"col-lg-6 offset-lg-1 col-md-8",children:(0,i.jsxs)("div",{className:"text js-scroll__content",children:[(0,i.jsx)("p",{className:"extra-text",children:a.content}),(0,i.jsx)("ul",{className:"smp-list mt-30",children:a.spmList.map((function(e){return(0,i.jsx)("li",{children:e.name},e.id)}))})]})})]})})})}},63476:function(e,a,r){"use strict";var i=r(77625),s=r(67294),l=r(61239),n=(r(45607),r(85893));a.Z=function(e){var a=e.projectVideoDate;console.clear();var r=s.useState(!1),t=(0,i.Z)(r,2),o=t[0],c=t[1];return(0,n.jsx)("section",{children:(0,n.jsx)("div",{className:"container-fluid",children:(0,n.jsx)("div",{className:"video-wrapper section-padding bg-img parallaxie valign",style:{backgroundImage:"url(".concat(a.projectHeaderImage,")")},"data-overlay-dark":"4",children:(0,n.jsxs)("div",{className:"full-width text-center",children:[(0,n.jsx)(l.Z,{channel:"vimeo",autoplay:!0,isOpen:o,videoId:"127203262",onClose:function(){return c(!1)}}),(0,n.jsx)("a",{className:"vid",onClick:function(e){e.preventDefault(),c(!0)},children:(0,n.jsx)("div",{className:"vid-butn",children:(0,n.jsx)("span",{className:"icon",children:(0,n.jsx)("i",{className:"fas fa-play"})})})})]})})})})}},41664:function(e,a,r){e.exports=r(7942)},77625:function(e,a,r){"use strict";function i(e,a){(null==a||a>e.length)&&(a=e.length);for(var r=0,i=new Array(a);r<a;r++)i[r]=e[r];return i}function s(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i,s,l=[],n=!0,t=!1;try{for(r=r.call(e);!(n=(i=r.next()).done)&&(l.push(i.value),!a||l.length!==a);n=!0);}catch(o){t=!0,s=o}finally{try{n||null==r.return||r.return()}finally{if(t)throw s}}return l}}(e,a)||function(e,a){if(e){if("string"===typeof e)return i(e,a);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,a):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(a,{Z:function(){return s}})},34268:function(e){"use strict";e.exports=JSON.parse('{"id":1,"title":{"small":"Hizmetler","big":"Manuel Terapi"},"clientURLLink":"#","projectHeaderImage":"/img/portfolio/project2/bg.jpg","videoLink":"https://vimeo.com/127203262","clientURLName":"Envato.com","date":"6 August 2022","categories":[{"id":1,"name":"Web Design","link":"#"},{"id":2,"name":"WordPress","link":"#"}],"tags":[{"id":1,"name":"Minimal","link":"#"},{"id":2,"name":"Modern","link":"#"},{"id":3,"name":"Design","link":"#"}],"intro":{"leftContent":"Manuel Terapi \u201cel ile terapi-tedavi\u201d anlam\u0131na gelmektedir. \u2026","content":"Manuel terapinin tarih\xe7esine bak\u0131ld\u0131\u011f\u0131nda bilinen ilk tan\u0131m\u0131 modern t\u0131bb\u0131n temelini olu\u015fturan Hipokrat taraf\u0131ndan verilmi\u015ftir.D\xfcnyada y\xfczy\u0131llard\u0131r bir\xe7ok \xfclkede uygulanan manuel terapi y\xf6ntemlerinin 120 y\u0131l \xf6nce t\u0131p camias\u0131na girerek bilimsel olarak ara\u015ft\u0131r\u0131ld\u0131\u011f\u0131, \xe7al\u0131\u015fmalar yap\u0131ld\u0131\u011f\u0131 ve manuel terapinin bir bilim dal\u0131 haline getirildi\u011fi g\xf6r\xfcl\xfcr.","spmList":[{"id":1,"name":"Aenean sollicitudin"},{"id":2,"name":"lorem quis bibendum auctor"},{"id":31,"name":"nisi elit conseq uat ipsum"},{"id":4,"name":"nec sagittis sem nibh id elit"}]},"gallery":["/img/portfolio/project2/1.jpg","/img/portfolio/project2/2.jpg","/img/portfolio/project2/3.jpg","/img/portfolio/project2/5.jpg","/img/portfolio/project2/7.jpg"],"description":{"title":"Manuel Terapi","content":"Bel f\u0131t\u0131\u011f\u0131, boyun f\u0131t\u0131\u011f\u0131 gibi kas iskelet sistemini ilgilendiren t\xfcm hastal\u0131klarda uygulanan tamamen kan\u0131ta dayal\u0131 t\u0131p bilgileri ile yap\u0131lan uygulamalard\u0131r. Omurga ve ekstremite eklemlerindeki a\u011fr\u0131 ve fonksiyon bozukluklar\u0131n\u0131n tedavisinde uygulanan manuel terapi, maniplasyon, mobilizasyon, \xf6zel germe teknikleri, postizometrik relaksasyon teknikleri ve klinik bantlama teknikleri gibi y\xf6ntemler i\xe7erir. Geli\u015fen teknoloji ve hareketsiz ya\u015famla birlikte ya da bilin\xe7siz yap\u0131lan hareketler sonucunda toplumun %80 inde bel ve boyun rahats\u0131zl\u0131klar\u0131 g\xf6r\xfclmektedir. Ameliyat gerektirmeyen d\xfczeydeki omurga problemlerinin/f\u0131t\u0131klar\u0131n tedavisinde klasik fizik tedavi y\xf6ntemlerinin yetersiz kald\u0131\u011f\u0131n\u0131, insanlar\u0131n\u201d fizik tedavi de g\xf6rd\xfcm ancak faydas\u0131n\u0131 g\xf6remedim, hala a\u011fr\u0131m var\u201d dedi\u011fini defalarca duymu\u015fsunuzdur. \xc7\xfcnk\xfc klasik fizik tedavide semptomlara odaklan\u0131l\u0131r. \xd6rne\u011fin, boyun a\u011fr\u0131s\u0131 \u015fik\xe2yetiniz varsa fizik tedavi modaliteleriyle a\u011fr\u0131n\u0131z giderilmeye \xe7al\u0131\u015f\u0131l\u0131r. Peki a\u011fr\u0131n\u0131z\u0131n ge\xe7mi\u015f olmas\u0131 sorunun ortadan kalkm\u0131\u015f oldu\u011funu g\xf6sterir mi?"}}')}}]);