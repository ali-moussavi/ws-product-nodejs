(this["webpackJsonpws-eqworks-frontend"]=this["webpackJsonpws-eqworks-frontend"]||[]).push([[0],{142:function(e,t,a){},143:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},249:function(e,t,a){},250:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),s=(a(142),a(143),a(294)),o=a(296),l=a(298),j=a(299),u=a(319),d=a.p+"static/media/logo-eq-works-white.9dfae69e.webp",b=a(15),m=a(59),h=a(2),f=Object(s.a)((function(e){return{root:{flexGrow:1},button:{margin:"1rem",color:"white"},buttonActive:{margin:"1rem",color:"white",borderBottom:"1px solid white"}}}));var x=function(){var e=f(),t=Object(b.f)();return Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)(o.a,{position:"static",children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(u.a,{display:"flex",style:{height:"100%",flexGrow:"1"},alignItems:"center",children:Object(h.jsx)("img",{src:d,alt:"mockup",style:{height:"40px"}})}),Object(h.jsx)(j.a,{component:m.b,to:"/stats",className:"/stats"===t.pathname?e.buttonActive:e.button,children:"STATS"}),Object(h.jsx)(j.a,{component:m.b,to:"/events",className:"/events"===t.pathname?e.buttonActive:e.button,children:"EVENTS"}),Object(h.jsx)(j.a,{component:m.b,to:"/poi",className:"/poi"===t.pathname?e.buttonActive:e.button,children:"POI"})]})})})},O=a(36),p=a.n(O),v=a(53),g=a(7),y=a(301),w=a(302),S=a(304),C=a(35),D=a(82),M=a(17),k=a.n(M),I=a(300),A=a(253),N=a(260),E=a(257),P=a(321),B=a(124),T=Object(s.a)((function(e){return{root:Object(C.a)({padding:"1.5rem 1rem 1.5rem 1rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"1.5rem",boxShadow:"0 0 25px rgb(0 0 0 / 18%)",borderRadius:"10px",width:"500px"},e.breakpoints.down("l"),{width:"100%"}),chartContainer:{height:"18rem",width:"100%"},title:{fontSize:14}}}));var F=function(e){var t=e.rawData,a=e.xAxis,r=e.yAxis,c=e.title,i=e.stepSize,s=Object(n.useState)([]),o=Object(g.a)(s,2),l=o[0],j=o[1],u=Object(n.useState)("All"),d=Object(g.a)(u,2),b=d[0],m=d[1],f=Object(n.useState)([]),x=Object(g.a)(f,2),O=x[0],p=x[1],v=T(),S={legend:{display:!1},responsive:!0,maintainAspectRatio:!1,elements:{point:{radius:2}},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return"clicksPerImpressions"===r?k()(e.value).format("0.000%"):"revenuePerClick"===r?k()(e.value).format("0.0a"):k()(e.value).format("0,0")}}},scales:{xAxes:[{type:"time",time:{stepSize:i,displayFormats:{millisecond:"MMM DD",second:"MMM DD",minute:"MMM DD",hour:"MMM DD ",day:"MMM DD",week:"MMM DD",month:"MMM DD",quarter:"MMM DD",year:"MMM DD"},tooltipFormat:"ll"}}],yAxes:[{scaleLabel:{display:!0,labelString:c},ticks:{callback:function(e,t,a){return"clicksPerImpressions"===r?k()(e).format("0.000%"):"revenue"===r||"revenuePerClick"===r?k()(e).format("$0.0a"):k()(e).format("0.0a")}}}]}};return Object(n.useEffect)((function(){j(function(e,a,n,i){var s=[],o=1;if(e.forEach((function(c,l){var j={};if("All"===i||c.name===i){if("clicksPerImpressions"===r){var u=c.clicks/c.impressions;u=u.toFixed(5),j.y=parseFloat(u)}else if("revenuePerClick"===r){var d=c.revenue/c.clicks;j.y=parseFloat(d)}else j.y=parseFloat(c[n]);"All"===i?0===l||c[a].substring(0,10)!==t[l-1][a].substring(0,10)?(0===l||"clicksPerImpressions"!==r&&"revenuePerClick"!==r||(s[s.length-1].y/=o,o=1),j.x=c[a].substring(0,10),s.push(j)):(o++,s[s.length-1].y+=parseFloat(j.y),l!==e.length-1||"clicksPerImpressions"!==r&&"revenuePerClick"!==r||(s[s.length-1].y/=o)):(j.x=c[a].substring(0,10),s.push(j))}})),"Number Of Events"===c&&"All"!==b){var l=[];s.forEach((function(e,t){if(l.push(e),t!==s.length-1&&Object(B.a)(new Date(e.x),1).toString()!==new Date(s[t+1].x).toString()){var a={x:Object(B.a)(new Date(e.x),1),y:0};l.push(a)}})),s=l}return s}(t,a,r,b))}),[t,a,r,b,c]),Object(n.useEffect)((function(){p(function(e){var t=[];return e.forEach((function(e){t.includes(e.name)||t.push(e.name)})),t}(t))}),[t]),Object(h.jsxs)(I.a,{className:v.root,style:c.includes("Events")?{width:"70vw"}:{},children:[Object(h.jsxs)(y.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(h.jsx)(w.a,{variant:"h5",style:{paddingBottom:"1rem",fontWeight:"300"},children:c}),Object(h.jsxs)(A.a,{style:{margin:"0 1rem 1rem 1rem"},variant:"outlined",children:[Object(h.jsx)(N.a,{children:"POI"}),Object(h.jsxs)(E.a,{value:b,onChange:function(e){m(e.target.value)},label:"POI",children:[Object(h.jsx)(P.a,{value:"All",children:"All"},1),O&&O.map((function(e,t){return Object(h.jsx)(P.a,{value:e,children:e},t+2)}))]})]})]}),Object(h.jsx)("div",{className:v.chartContainer,children:Object(h.jsx)(D.Line,{options:S,data:function(e){var t=e.getContext("2d").createLinearGradient(0,0,0,360);return t.addColorStop(1,"rgba(34,193,195,0)"),t.addColorStop(0,"rgba(63,81,181,0.9308765742625175)"),{datasets:[{backgroundColor:t,borderColor:"#3F51B5",data:l}]}}})})]})},z=a(318),W=a(303),L=Object(s.a)((function(e){var t;return{root:(t={padding:"1rem 1.5rem 1rem 1.5rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"1rem",borderRadius:"10px",boxShadow:"0 0 25px rgb(0 0 0 / 18%)"},Object(C.a)(t,e.breakpoints.down("l"),{width:"100%"}),Object(C.a)(t,"width","80%"),t),chartContainer:{width:"100%",height:"50vh"},title:{fontSize:14},formControl:{margin:"1rem"}}}));var R=function(e){var t=e.rawData,a=e.title,r=e.initialChartType,c=e.showChartType,i=e.showOneDate,s=(e.showTwoDates,Object(n.useState)("")),o=Object(g.a)(s,2),l=o[0],j=o[1],u=Object(n.useState)([]),d=Object(g.a)(u,2),b=d[0],m=d[1],f=Object(n.useState)([]),x=Object(g.a)(f,2),O=x[0],p=x[1],v=Object(n.useState)("revenue"),S=Object(g.a)(v,2),C=S[0],M=S[1],B=Object(n.useState)([]),T=Object(g.a)(B,2),F=T[0],R=T[1],H=Object(n.useState)("All"),G=Object(g.a)(H,2),J=G[0],Z=G[1],U=Object(n.useState)([]),$=Object(g.a)(U,2),q=$[0],V=$[1],_=L();Object(n.useEffect)((function(){V(function(e){var t=[];return e.forEach((function(e){t.includes(e.name)||t.push(e.name)})),t}(t));for(var e=[],a=0;a<24;a++)e[a]=a;p(e),t[0]&&(j(t[0].date),R(K(t))),r&&M(r)}),[t,r]),Object(n.useEffect)((function(){m(function(e,t,n){for(var r=[],c=0;c<24;c++)r[c]=0;return e.forEach((function(e){(e.date===l||a.includes("Overall"))&&("All"!==n&&e.name!==n||(r[e.hour]+=parseFloat(e[t])))})),r}(t,C,J))}),[C,l,t,a,J]);var K=function(e){var t=[];return t[0]=e[0].date,e.forEach((function(e){t[t.length-1]!==e.date&&t.push(e.date)})),t},Q={responsive:!0,maintainAspectRatio:!1,legend:{display:!1},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return"revenue"===C?k()(e.value).format("$0,0"):k()(e.value).format("0a")},title:function(e,t){return"Hour: "+t.labels[e[0].index]}}},scales:{xAxes:[{gridLines:{display:!1},scaleLabel:{display:!0,labelString:"Hour"}}],yAxes:[{scaleLabel:{display:!0,labelString:C.toUpperCase()},gridLines:{display:!0},ticks:{callback:function(e,t,a){return"revenue"===C?k()(e).format("$0,0"):k()(e).format("0a")}}}]}};return Object(h.jsxs)(I.a,{className:_.root,children:[Object(h.jsxs)(y.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",children:[Object(h.jsx)(w.a,{variant:"h5",style:{margin:"1rem 0 1rem 1rem",paddingBottom:"1rem",fontWeight:"300",flexGrow:"1",textAlign:"left"},children:a}),Object(h.jsxs)(A.a,{className:_.formControl,variant:"outlined",children:[Object(h.jsx)(N.a,{id:"demo-simple-select-filled-label",children:"POI"}),Object(h.jsxs)(E.a,{value:J,onChange:function(e){Z(e.target.value)},label:"POI",children:[Object(h.jsx)(P.a,{value:"All",children:"All"},1),q&&q.map((function(e,t){return Object(h.jsx)(P.a,{value:e,children:e},t+2)}))]})]}),c&&Object(h.jsxs)(A.a,{className:_.formControl,variant:"outlined",children:[Object(h.jsx)(N.a,{children:"Chart Type"}),Object(h.jsxs)(E.a,{value:C,onChange:function(e){M(e.target.value)},label:"Chart Type",children:[Object(h.jsx)(P.a,{value:"revenue",children:"Revenue"}),Object(h.jsx)(P.a,{value:"clicks",children:"Clicks"}),Object(h.jsx)(P.a,{value:"impressions",children:"Impressions"})]})]}),i&&Object(h.jsxs)(A.a,{className:_.formControl,variant:"outlined",children:[Object(h.jsx)(N.a,{children:"Date"}),Object(h.jsx)(E.a,{value:l,onChange:function(e){j(e.target.value)},label:"Date",children:F?F.map((function(e,t){return Object(h.jsxs)(P.a,{value:e,children:[" ",Object(z.a)(Object(W.a)(new Date(e),1),"dd MMM yyyy")," "]},t+1)})):Object(h.jsx)(P.a,{value:l,children:Object(z.a)(Object(W.a)(new Date(l),1),"dd MMM yyyy")},1)})]})]}),Object(h.jsxs)("div",{className:_.chartContainer,children:[" ",Object(h.jsx)(D.Bar,{options:Q,data:function(e){var t=e.getContext("2d").createLinearGradient(0,80,0,600);return t.addColorStop(1,"rgba(34,193,195,0)"),t.addColorStop(0,"rgba(63,81,181,0.9308765742625175)"),{labels:O,datasets:[{label:"Hour",backgroundColor:t,borderColor:"#3F51B5",data:b}]}}})]})]})};a(245);var H=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(g.a)(c,2),s=i[0],o=i[1],l=Object(n.useState)(!0),j=Object(g.a)(l,2),u=j[0],d=j[1];return Object(n.useEffect)((function(){(function(){var e=Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/stats/hourly").then((function(e){return e.json()})).then((function(e){r(e)}));case 2:return e.next=4,fetch("/stats/daily").then((function(e){return e.json()})).then((function(e){o(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(){d(!1)})).catch((function(e){console.log(e)}))}),[]),Object(h.jsxs)(y.a,{container:!0,justify:"center",alignItems:"center",direction:"column",className:"statsPage",children:[Object(h.jsx)(y.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",children:Object(h.jsx)(w.a,{variant:"h3",style:{fontWeight:"200",borderBottom:"2px solid rgb(80 138 221)",marginLeft:"3rem",paddingBottom:".5rem",marginBottom:"1rem",marginTop:"1rem"},children:"Daily Stats"})}),u?Object(h.jsx)(y.a,{container:!0,alignItems:"center",justify:"center",style:{height:"90vh"},children:Object(h.jsx)(S.a,{style:{marginBottom:"10rem"}})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"graphContainer",children:[Object(h.jsx)(F,{rawData:s,xAxis:"date",yAxis:"revenue",title:"Revenue",stepSize:5}),Object(h.jsx)(F,{rawData:s,xAxis:"date",yAxis:"impressions",title:"Impressions",stepSize:5}),Object(h.jsx)(F,{rawData:s,xAxis:"date",yAxis:"clicks",title:"Clicks",stepSize:5}),Object(h.jsx)(F,{rawData:s,xAxis:"date",yAxis:"clicksPerImpressions",title:"Click Per Impression Percentage",stepSize:5}),Object(h.jsx)(F,{rawData:s,xAxis:"date",yAxis:"revenuePerClick",title:"Revenue Per Click",stepSize:5})]}),Object(h.jsx)(y.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",children:Object(h.jsx)(w.a,{variant:"h3",style:{fontWeight:"200",borderBottom:"2px solid rgb(80 138 221)",marginLeft:"3rem",paddingBottom:".5rem",marginBottom:"1rem",marginTop:"2.5rem"},children:"Hourly Stats"})}),Object(h.jsx)("div",{className:"graphContainer",children:Object(h.jsx)(R,{rawData:a,title:"Hourly Stats In Each Day",showChartType:!0,showOneDate:!0})}),Object(h.jsx)("div",{className:"graphContainer",children:Object(h.jsx)(R,{rawData:a,title:"Overall Hourly Stats",showChartType:!0})})]})]})};a(246);var G=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(g.a)(c,2),s=i[0],o=i[1],l=Object(n.useState)(!0),j=Object(g.a)(l,2),u=j[0],d=j[1];return Object(n.useEffect)((function(){(function(){var e=Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/events/hourly").then((function(e){return e.json()})).then((function(e){r(e)}));case 2:return e.next=4,fetch("/events/daily").then((function(e){return e.json()})).then((function(e){o(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(){d(!1)})).catch((function(e){console.log(e)}))}),[]),Object(h.jsxs)(y.a,{container:!0,justify:"center",alignItems:"center",direction:"column",className:"EventsPage",children:[Object(h.jsx)(y.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",children:Object(h.jsx)(w.a,{variant:"h3",style:{fontWeight:"200",borderBottom:"2px solid rgb(80 138 221)",marginLeft:"3rem",paddingBottom:".5rem",marginBottom:"1rem",marginTop:"1rem"},children:"Daily Events"})}),u?Object(h.jsx)(y.a,{container:!0,alignItems:"center",justify:"center",style:{height:"90vh"},children:Object(h.jsx)(S.a,{style:{marginBottom:"10rem"}})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"graphContainer",children:Object(h.jsx)(F,{rawData:s,xAxis:"date",yAxis:"events",title:"Number Of Events",stepSize:5})}),Object(h.jsx)(y.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",children:Object(h.jsx)(w.a,{variant:"h3",style:{fontWeight:"200",borderBottom:"2px solid rgb(80 138 221)",marginLeft:"3rem",paddingBottom:".5rem",marginBottom:"1rem",marginTop:"2.5rem"},children:"Hourly Events"})}),Object(h.jsx)("div",{className:"graphContainer",children:Object(h.jsx)(R,{rawData:a,title:"Hourly Events In Each Day",initialChartType:"events",showOneDate:!0})}),Object(h.jsx)("div",{className:"graphContainer",children:Object(h.jsx)(R,{rawData:a,title:"Overall Hourly Events",initialChartType:"events"})})]})]})},J=a(308),Z=a(311),U=a(305),$=a(307),q=a(309),V=a(306),_=a(256),K=a(310);var Q=function(e){var t=e.lat,a=e.lon,n=e.setMapCenter,r=e.setMapZoom;return Object(h.jsx)(j.a,{style:{width:"130px",height:"36px"},variant:"contained",color:"primary",onClick:function(){n({lat:t,lng:a}),r(13)},children:"Show On Map"})},Y=Object(s.a)((function(e){return{card:{display:"flex",flexGrow:"1",padding:"1.5rem",borderRadius:"10px 10px 0px 0px",boxShadow:"none",flexWrap:"wrap"},tableContainer:{width:"100%",maxWidth:"800px"},formControl:{margin:"1rem",minWidth:"132px"},form:{display:"flex",flexGrow:"1",margin:"1rem",minWidth:"150px"},pageGrid:Object(C.a)({margin:"1rem 0rem",maxWidth:"800px",boxShadow:"0 0 25px rgb(0 0 0 / 18%)",borderRadius:"10px"},e.breakpoints.down("sm"),{maxWidth:"90vw"})}}));var X=function(e){var t=e.rawData,a=e.tableData,r=e.regenerateTableData,c=e.setTableData,i=e.poiNames,s=e.setMapCenter,o=e.setMapZoom,l=Object(n.useState)(""),j=Object(g.a)(l,2),u=j[0],d=j[1],b=Object(n.useState)(""),m=Object(g.a)(b,2),f=m[0],x=m[1],O=Object(n.useState)(""),p=Object(g.a)(O,2),v=p[0],w=p[1],S=Object(n.useState)([]),C=Object(g.a)(S,2),D=C[0],M=C[1],B=Object(n.useState)(!1),T=Object(g.a)(B,2),F=T[0],L=T[1],R=Object(n.useState)(!1),H=Object(g.a)(R,2),G=H[0],X=H[1],ee=Y(),te=function(e){var t=[];for(var a in e)if("lat"!==a&&"lon"!==a){var n=Object(h.jsx)(U.a,{children:"revenue"===a?k()(e[a]).format("$0.0a"):"name"===a?e[a]:k()(e[a]).format("0,0")},a);t.push(n)}return t};return Object(n.useEffect)((function(){t[0]&&(x(t[0].date),w(t[t.length-1].date),M(function(e){var t=[];return t[0]=e[0].date,e.forEach((function(e){t[t.length-1]!==e.date&&t.push(e.date)})),t}(t)))}),[t]),Object(h.jsxs)(y.a,{container:!0,justify:"center",className:ee.pageGrid,children:[Object(h.jsxs)(I.a,{className:ee.card,children:[Object(h.jsx)("form",{noValidate:!0,autoComplete:"off",className:ee.form,children:Object(h.jsx)(V.a,{label:"Search POI Name",variant:"outlined",value:u,onChange:function(e){d(e.target.value.toLowerCase())}})}),Object(h.jsxs)(A.a,{className:ee.formControl,variant:"outlined",error:F,children:[Object(h.jsx)(N.a,{id:"demo-simple-select-filled-label",children:"From"}),Object(h.jsx)(E.a,{value:f,onChange:function(e){e.target.value<v?(L(!1),x(e.target.value),c(r(t,e.target.value,v,i))):L(!0)},label:"From",children:D?D.map((function(e,t){return Object(h.jsxs)(P.a,{value:e,children:[" ",Object(z.a)(Object(W.a)(new Date(e),1),"dd MMM yyyy")," "]},t+1)})):Object(h.jsx)(P.a,{value:f,children:Object(z.a)(Object(W.a)(new Date(f),1),"dd MMM yyyy")},1)}),F&&Object(h.jsx)(_.a,{children:"First date should be before second date"})]}),Object(h.jsxs)(A.a,{className:ee.formControl,variant:"outlined",error:G,children:[Object(h.jsx)(N.a,{id:"demo-simple-select-filled-label",children:"To"}),Object(h.jsx)(E.a,{value:v,onChange:function(e){e.target.value>f?(X(!1),w(e.target.value),c(r(t,f,e.target.value,i))):X(!0)},label:"To",children:D?D.map((function(e,t){return Object(h.jsxs)(P.a,{value:e,children:[" ",Object(z.a)(Object(W.a)(new Date(e),1),"dd MMM yyyy")," "]},t+1)})):Object(h.jsx)(P.a,{value:v,children:Object(z.a)(Object(W.a)(new Date(v),1),"dd MMM yyyy")},1)}),G&&Object(h.jsx)(_.a,{children:"Second date should be after first date"})]})]}),Object(h.jsx)($.a,{className:ee.tableContainer,children:Object(h.jsxs)(J.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(h.jsx)(q.a,{children:Object(h.jsxs)(K.a,{children:[Object(h.jsxs)(U.a,{align:"left",style:{minWidth:"5rem"},children:[" ","POI Name"]},1),Object(h.jsxs)(U.a,{align:"left",style:{minWidth:"5rem"},children:[" ","Revenue"]},2),Object(h.jsxs)(U.a,{align:"left",style:{minWidth:"5rem"},children:[" ","Impressions"]},3),Object(h.jsxs)(U.a,{align:"left",style:{minWidth:"5rem"},children:[" ","Clicks"]},4),Object(h.jsxs)(U.a,{align:"left",style:{minWidth:"5rem"},children:[" ","Events"]},5),Object(h.jsxs)(U.a,{align:"left",style:{minWidth:"5rem"},children:[" ","Location"]},6)]})}),Object(h.jsx)(Z.a,{children:a&&a.map((function(e){if(!u||e.name.toLowerCase().includes(u))return Object(h.jsxs)(K.a,{children:[te(e).map((function(e){return e})),Object(h.jsx)(U.a,{children:Object(h.jsx)(Q,{lat:e.lat,lon:e.lon,setMapZoom:o,setMapCenter:s})},"location")]},e.name)}))})]})})]})},ee=a(312),te=a(313),ae=a(314),ne=a(315),re=a(316),ce=a(125),ie=a.n(ce),se=(a(248),a(249),a(20)),oe=new(a.n(se).a.Icon)({iconUrl:"https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",iconSize:[25,41],iconAnchor:[10,41],popupAnchor:[2,-40]});function le(e){var t=e.center,a=e.zoom;return Object(ee.a)().setView(t,a),null}var je=function(e){var t=e.center,a=e.zoom,n=e.locations;return Object(h.jsx)("div",{className:"map",children:Object(h.jsxs)(te.a,{center:t,zoom:a,minZoom:2,children:[Object(h.jsx)(le,{center:t,zoom:a}),Object(h.jsx)(ae.a,{url:"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1Ijoic21hcG8iLCJhIjoiY2trd3NraGJ5MGp1eDJ4bzRob2F4c3AyNiJ9._QbSCAyV2ilH2KPoBJ7uzA"}),Object(h.jsx)(ie.a,{children:n.map((function(e,t){return Object(h.jsx)(ne.a,{icon:oe,position:[e.lat,e.lon],children:Object(h.jsx)(re.a,{children:Object(h.jsxs)(y.a,{container:!0,direction:"column",children:[Object(h.jsx)(y.a,{children:Object(h.jsx)("strong",{children:e.name})}),Object(h.jsx)(y.a,{children:"Revenue: ".concat(k()(e.revenue).format("$0.0a"))}),Object(h.jsx)(y.a,{children:"Impressions: ".concat(k()(e.impressions).format("0.0a"))}),Object(h.jsx)(y.a,{children:"Clicks: ".concat(k()(e.clicks).format("0.0a"))}),Object(h.jsx)(y.a,{children:"Events: ".concat(k()(e.events).format("0a"))})]})})},t+1)}))})]})})},ue=(a(250),Object(s.a)({card:{maxWidth:"30rem",padding:"1.5rem",margin:"1rem",boxShadow:"0 0 25px rgb(0 0 0 / 18%)",borderRadius:"10px"}}));var de=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({lat:47.279229,lng:-99.492188}),i=Object(g.a)(c,2),s=i[0],o=i[1],l=Object(n.useState)(3),j=Object(g.a)(l,2),u=j[0],d=j[1],b=Object(n.useState)([]),m=Object(g.a)(b,2),f=m[0],x=m[1],O=Object(n.useState)([]),C=Object(g.a)(O,2),D=C[0],M=C[1],k=Object(n.useState)(!0),A=Object(g.a)(k,2),N=A[0],E=A[1],P=ue(),B=function(e){var t=[];return e.forEach((function(e){t.includes(e.name)||t.push(e.name)})),t},T=function(e,t,a,n){var r=[];return n.forEach((function(e){var t={name:e,revenue:0,impressions:0,clicks:0,events:0};r.push(t)})),e.forEach((function(e){e.date>=t&&e.date<=a&&r.forEach((function(t){t.name===e.name&&(null!==e.events&&(t.events+=parseFloat(e.events)),t.revenue+=parseFloat(e.revenue),t.impressions+=parseFloat(e.impressions),t.clicks+=parseFloat(e.clicks),t.lat=e.lat,t.lon=e.lon)}))})),r};return Object(n.useEffect)((function(){(function(){var e=Object(v.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/poi").then((function(e){return e.json()})).then((function(e){r(e),x(B(e))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(){E(!1)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){if(a[0]){var e=T(a,a[0].date,a[a.length-1].date,f);M(e)}}),[a,f]),Object(h.jsxs)(y.a,{container:!0,justify:"center",alignItems:"center",direction:"column",className:"PoiPage",children:[Object(h.jsx)(y.a,{container:!0,item:!0,direction:"row",justify:"flex-start",alignItems:"center",style:{alignSelf:"flex-start"},children:Object(h.jsx)(w.a,{variant:"h3",style:{fontWeight:"200",borderBottom:"2px solid rgb(80 138 221)",marginLeft:"3rem",paddingBottom:".5rem",marginBottom:"1rem",marginTop:"1rem"},children:"POI Data"})}),Object(h.jsx)(y.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:N?Object(h.jsx)(y.a,{container:!0,alignItems:"center",justify:"center",style:{height:"90vh"},children:Object(h.jsx)(S.a,{style:{marginBottom:"10rem"}})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(y.a,{item:!0,xs:12,children:Object(h.jsx)(X,{rawData:a,tableData:D,className:P.card,regenerateTableData:T,setTableData:M,poiNames:f,setMapCenter:o,setMapZoom:d})}),Object(h.jsx)(y.a,{item:!0,xs:12,children:Object(h.jsx)(I.a,{className:"mapCard",children:Object(h.jsx)(je,{center:s,zoom:u,locations:D})})})]})})]})},be=a(126),me=a(320),he=a(317),fe=Object(be.a)({typography:{fontFamily:['"Poppins"',"-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),button:{textTransform:"none"}}});fe=Object(me.a)(fe);var xe=function(){return Object(h.jsx)(he.a,{theme:fe,children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(m.a,{children:[Object(h.jsx)(x,{className:"App__Header"}),Object(h.jsx)(b.b,{path:"/",exact:!0,children:Object(h.jsx)(b.a,{to:"/stats"})}),Object(h.jsx)(b.b,{path:"/poi",exact:!0,component:de}),Object(h.jsx)(b.b,{path:"/stats",exact:!0,component:H}),Object(h.jsx)(b.b,{path:"/events",exact:!0,component:G})]})})})};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(xe,{})}),document.getElementById("root"))}},[[251,1,2]]]);
//# sourceMappingURL=main.35636061.chunk.js.map