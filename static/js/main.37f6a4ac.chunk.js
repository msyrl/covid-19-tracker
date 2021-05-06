(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{114:function(e,t,c){},115:function(e,t,c){},116:function(e,t,c){},121:function(e,t,c){},122:function(e,t,c){},229:function(e,t,c){},231:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(7),n=c.n(s),r=(c(114),c(12)),o=c(267),i=c(268),l=c(269),d=c(259),j=c(263),u=(c(115),c(24)),h=c(264),b=(c(116),c(3));var f=function(e){var t=e.title,c=e.cases,a=e.total,s=e.active,n=e.isRed,r=Object(u.a)(e,["title","cases","total","active","isRed"]);return Object(b.jsx)(d.a,{onClick:r.onClick,className:"infoBox ".concat(s&&"infoBox--selected"," ").concat(n&&"infoBox--red"),children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(h.a,{color:"textSecondary",gutterBottom:!0,children:t}),Object(b.jsx)("h2",{className:"infoBox__cases ".concat(!n&&"infoBox__cases--green"),children:c}),Object(b.jsxs)(h.a,{className:"infoBox__total",color:"textSecondary",children:[a," Total"]})]})})},v=(c(121),c(265)),O=c(270),x=c(271),p=c(266),m=c(14),g=c.n(m),y={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:200},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:400},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:600}};var C=function(e){var t=e.countries,c=e.casesType,a=e.center,s=e.zoom;return Object(b.jsx)("div",{className:"map",children:Object(b.jsxs)(v.a,{center:a,zoom:s,children:[Object(b.jsx)(O.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),(null===t||void 0===t?void 0:t.length)>0&&t.map((function(e,t){return Object(b.jsx)(x.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:y[c].hex,fillColor:y[c].hex,radius:Math.sqrt(e[c])*y[c].multiplier,children:Object(b.jsx)(p.a,{children:Object(b.jsxs)("div",{className:"info-container",children:[Object(b.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(b.jsx)("div",{className:"info-name",children:e.country}),Object(b.jsxs)("div",{className:"info-confirmed",children:["Cases: ",g()(e.cases).format("0,0")]}),Object(b.jsxs)("div",{className:"info-recovered",children:["Recovered: ",g()(e.recovered).format("0,0")]}),Object(b.jsxs)("div",{className:"info-deaths",children:["Deaths: ",g()(e.deaths).format("0,0")]})]})})})}))]})})};c(122);var _=function(e){var t=e.countries;return Object(b.jsx)("div",{className:"table",children:Object(b.jsx)("table",{children:Object(b.jsx)("tbody",{children:t.map((function(e,t){var c=e.country,a=e.cases;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:c}),Object(b.jsx)("td",{children:Object(b.jsx)("strong",{children:g()(a).format("0,0")})})]},t)}))})})})},N=c(104);c(229);var w=function(e){var t=e.casesType,c=Object(a.useState)({}),s=Object(r.a)(c,2),n=s[0],o=s[1];return Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var c=function(e,t){var c,a=[];for(var s in e[t]){if(c){var n={x:s,y:e[t][s]-c};a.push(n)}c=e[t][s]}return a}(e,t);o(c)}))}),[t]),Object(b.jsx)("div",{className:"line-graph",children:(null===n||void 0===n?void 0:n.length)>0&&Object(b.jsx)(N.a,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",fill:!0,data:n}]},options:{plugins:{legend:{display:!1}}}})})};c(230);var S=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)("worldwide"),u=Object(r.a)(n,2),h=u[0],v=u[1],O=Object(a.useState)({}),x=Object(r.a)(O,2),p=x[0],m=x[1],y=Object(a.useState)([]),N=Object(r.a)(y,2),S=N[0],k=N[1],I=Object(a.useState)([34.80746,-40.4796]),R=Object(r.a)(I,2),B=R[0],T=R[1],E=Object(a.useState)(3),z=Object(r.a)(E,2),D=z[0],J=z[1],M=Object(a.useState)([]),W=Object(r.a)(M,2),q=W[0],A=W[1],K=Object(a.useState)("cases"),L=Object(r.a)(K,2),V=L[0],F=L[1],G=function(e){return e?"+".concat(g()(e).format("0.0a")):"+0"};return Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){return m(e)}))}),[]),Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=e.sort((function(e,t){return e.cases>t.cases?-1:1}));k(c),A(e),s(t)}))}),[]),Object(b.jsxs)("div",{className:"app",children:[Object(b.jsxs)("div",{className:"app__left",children:[Object(b.jsxs)("div",{className:"app__header",children:[Object(b.jsx)("h1",{children:"COVID 19 TRACKER"}),Object(b.jsx)(o.a,{className:"app__dropdown",children:Object(b.jsxs)(i.a,{variant:"outlined",value:h,onChange:function(e){var t=e.target.value,c="worldwide"===t?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(t);fetch(c).then((function(e){return e.json()})).then((function(e){v(t),m(e),T([e.countryInfo.lat,e.countryInfo.long]),J(4)}))},children:[Object(b.jsx)(l.a,{value:"worldwide",children:"Worldwide"}),c.map((function(e,t){return Object(b.jsx)(l.a,{value:e.value,children:e.name},t)}))]})})]}),Object(b.jsxs)("div",{className:"app__stats",children:[Object(b.jsx)(f,{onClick:function(e){return F("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===V,cases:G(p.todayCases),total:g()(p.cases).format("0.0a")}),Object(b.jsx)(f,{onClick:function(e){return F("recovered")},title:"Recovered",active:"recovered"===V,cases:G(p.todayRecovered),total:g()(p.recovered).format("0.0a")}),Object(b.jsx)(f,{onClick:function(e){return F("deaths")},title:"Deaths",isRed:!0,active:"deaths"===V,cases:G(p.todayDeaths),total:g()(p.deaths).format("0.0a")})]}),Object(b.jsx)(C,{countries:q,casesType:V,center:B,zoom:D})]}),Object(b.jsx)(d.a,{className:"app__right",children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)("h3",{children:"Live Cases by Country"}),Object(b.jsx)(_,{countries:S}),Object(b.jsx)("h3",{children:"Worldwide new cases"}),Object(b.jsx)(w,{casesType:V})]})})]})};n.a.render(Object(b.jsx)(S,{}),document.getElementById("root"))}},[[231,1,2]]]);
//# sourceMappingURL=main.37f6a4ac.chunk.js.map