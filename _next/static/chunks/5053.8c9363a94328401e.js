"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5053],{55053:function(e,t,r){r.r(t),r.d(t,{diagram:function(){return m}});var a=r(29698),n=r(90041),o=r(83644),l=r(22597),i=r(26746);r(27693),r(7608),r(54569);const s=new i;let d={};const c={};let p={};const h=(e,t,r)=>{const a={TB:{in:{north:"north"},out:{south:"west",west:"east",east:"south"}},LR:{in:{west:"west"},out:{east:"south",south:"north",north:"east"}},RL:{in:{east:"east"},out:{west:"north",north:"south",south:"west"}},BT:{in:{south:"south"},out:{north:"east",east:"west",west:"north"}}};return a.TD=a.TB,l.l.info("abc88",r,t,e),a[r][t][e]},u=(e,t,r)=>{if(l.l.info("getNextPort abc88",{node:e,edgeDirection:t,graphDirection:r}),!d[e])switch(r){case"TB":case"TD":d[e]={inPosition:"north",outPosition:"south"};break;case"BT":d[e]={inPosition:"south",outPosition:"north"};break;case"RL":d[e]={inPosition:"east",outPosition:"west"};break;case"LR":d[e]={inPosition:"west",outPosition:"east"}}const a="in"===t?d[e].inPosition:d[e].outPosition;return"in"===t?d[e].inPosition=h(d[e].inPosition,t,r):d[e].outPosition=h(d[e].outPosition,t,r),a},b=function(e,t,r,a){l.l.info("abc78 edges = ",e);const i=a.insert("g").attr("class","edgeLabels");let s,d,h={},b=t.db.getDirection();if(void 0!==e.defaultStyle){const t=(0,l.k)(e.defaultStyle);s=t.style,d=t.labelStyle}return e.forEach((function(t){const a="L-"+t.start+"-"+t.end;void 0===h[a]?(h[a]=0,l.l.info("abc78 new entry",a,h[a])):(h[a]++,l.l.info("abc78 new entry",a,h[a]));let g=a+"-"+h[a];l.l.info("abc78 new link id to be used is",a,g,h[a]);const y="LS-"+t.start,w="LE-"+t.end,k={style:"",labelStyle:""};switch(k.minlen=t.length||1,"arrow_open"===t.type?k.arrowhead="none":k.arrowhead="normal",k.arrowTypeStart="arrow_open",k.arrowTypeEnd="arrow_open",t.type){case"double_arrow_cross":k.arrowTypeStart="arrow_cross";case"arrow_cross":k.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":k.arrowTypeStart="arrow_point";case"arrow_point":k.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":k.arrowTypeStart="arrow_circle";case"arrow_circle":k.arrowTypeEnd="arrow_circle"}let f="",x="";switch(t.stroke){case"normal":f="fill:none;",void 0!==s&&(f=s),void 0!==d&&(x=d),k.thickness="normal",k.pattern="solid";break;case"dotted":k.thickness="normal",k.pattern="dotted",k.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":k.thickness="thick",k.pattern="solid",k.style="stroke-width: 3.5px;fill:none;"}if(void 0!==t.style){const e=(0,l.k)(t.style);f=e.style,x=e.labelStyle}k.style=k.style+=f,k.labelStyle=k.labelStyle+=x,void 0!==t.interpolate?k.curve=(0,l.o)(t.interpolate,n.c_6):void 0!==e.defaultInterpolate?k.curve=(0,l.o)(e.defaultInterpolate,n.c_6):k.curve=(0,l.o)(c.curve,n.c_6),void 0===t.text?void 0!==t.style&&(k.arrowheadStyle="fill: #333"):(k.arrowheadStyle="fill: #333",k.labelpos="c"),k.labelType=t.labelType,k.label=t.text.replace(l.e.lineBreakRegex,"\n"),void 0===t.style&&(k.style=k.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),k.labelStyle=k.labelStyle.replace("color:","fill:"),k.id=g,k.classes="flowchart-link "+y+" "+w;const m=(0,o.f)(i,k),{source:_,target:v,sourceId:T,targetId:E}=((e,t)=>{let r=e.start,a=e.end;const n=r,o=a,l=p[r],i=p[a];return l&&i?("diamond"===l.type&&(r=`${r}-${u(r,"out",t)}`),"diamond"===i.type&&(a=`${a}-${u(a,"in",t)}`),{source:r,target:a,sourceId:n,targetId:o}):{source:r,target:a}})(t,b);l.l.debug("abc78 source and target",_,v),r.edges.push({id:"e"+t.start+t.end,sources:[_],targets:[v],sourceId:T,targetId:E,labelEl:m,labels:[{width:k.width,height:k.height,orgWidth:k.width,orgHeight:k.height,text:k.label,layoutOptions:{"edgeLabels.inline":"true","edgeLabels.placement":"CENTER"}}],edgeData:k})})),r},g=function(e,t,r){const a=((e,t,r)=>{const{parentById:a}=r,n=new Set;let o=e;for(;o;){if(n.add(o),o===t)return o;o=a[o]}for(o=t;o;){if(n.has(o))return o;o=a[o]}return"root"})(e,t,r);if(void 0===a||"root"===a)return{x:0,y:0};const n=p[a].offset;return{x:n.posX,y:n.posY}},y=function(e,t,r,a,o){const l=g(t.sourceId,t.targetId,o),i=t.sections[0].startPoint,s=t.sections[0].endPoint,d=(t.sections[0].bendPoints?t.sections[0].bendPoints:[]).map((e=>[e.x+l.x,e.y+l.y])),c=[[i.x+l.x,i.y+l.y],...d,[s.x+l.x,s.y+l.y]],p=(0,n.jvg)().curve(n.c_6),h=e.insert("path").attr("d",p(c)).attr("class","path "+r.classes).attr("fill","none"),u=e.insert("g").attr("class","edgeLabel"),b=(0,n.Ys)(u.node().appendChild(t.labelEl)),y=b.node().firstChild.getBoundingClientRect();b.attr("width",y.width),b.attr("height",y.height),u.attr("transform",`translate(${t.labels[0].x+l.x}, ${t.labels[0].y+l.y})`),function(e,t,r,a){let n="";switch(a&&(n=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,n=n.replace(/\(/g,"\\("),n=n.replace(/\)/g,"\\)")),t.arrowTypeStart){case"arrow_cross":e.attr("marker-start","url("+n+"#"+r+"-crossStart)");break;case"arrow_point":e.attr("marker-start","url("+n+"#"+r+"-pointStart)");break;case"arrow_barb":e.attr("marker-start","url("+n+"#"+r+"-barbStart)");break;case"arrow_circle":e.attr("marker-start","url("+n+"#"+r+"-circleStart)");break;case"aggregation":e.attr("marker-start","url("+n+"#"+r+"-aggregationStart)");break;case"extension":e.attr("marker-start","url("+n+"#"+r+"-extensionStart)");break;case"composition":e.attr("marker-start","url("+n+"#"+r+"-compositionStart)");break;case"dependency":e.attr("marker-start","url("+n+"#"+r+"-dependencyStart)");break;case"lollipop":e.attr("marker-start","url("+n+"#"+r+"-lollipopStart)")}switch(t.arrowTypeEnd){case"arrow_cross":e.attr("marker-end","url("+n+"#"+r+"-crossEnd)");break;case"arrow_point":e.attr("marker-end","url("+n+"#"+r+"-pointEnd)");break;case"arrow_barb":e.attr("marker-end","url("+n+"#"+r+"-barbEnd)");break;case"arrow_circle":e.attr("marker-end","url("+n+"#"+r+"-circleEnd)");break;case"aggregation":e.attr("marker-end","url("+n+"#"+r+"-aggregationEnd)");break;case"extension":e.attr("marker-end","url("+n+"#"+r+"-extensionEnd)");break;case"composition":e.attr("marker-end","url("+n+"#"+r+"-compositionEnd)");break;case"dependency":e.attr("marker-end","url("+n+"#"+r+"-dependencyEnd)");break;case"lollipop":e.attr("marker-end","url("+n+"#"+r+"-lollipopEnd)")}}(h,r,a.type,a.arrowMarkerAbsolute)},w=(e,t)=>{e.forEach((e=>{e.children||(e.children=[]);const r=t.childrenById[e.id];r&&r.forEach((t=>{e.children.push(p[t])})),w(e.children,t)}))},k=(e,t,r,a,n,o,i)=>{r.forEach((function(r){if(r)if(p[r.id].offset={posX:r.x+e,posY:r.y+t,x:e,y:t,depth:i,width:r.width,height:r.height},"group"===r.type){const a=n.insert("g").attr("class","subgraph");a.insert("rect").attr("class","subgraph subgraph-lvl-"+i%5+" node").attr("x",r.x+e).attr("y",r.y+t).attr("width",r.width).attr("height",r.height);const o=a.insert("g").attr("class","label"),s=(0,l.c)().flowchart.htmlLabels?r.labelData.width/2:0;o.attr("transform",`translate(${r.labels[0].x+e+r.x+s}, ${r.labels[0].y+t+r.y+3})`),o.node().appendChild(r.labelData.labelNode),l.l.info("Id (UGH)= ",r.type,r.labels)}else l.l.info("Id (UGH)= ",r.id),r.el.attr("transform",`translate(${r.x+e+r.width/2}, ${r.y+t+r.height/2})`)})),r.forEach((function(r){r&&"group"===r.type&&k(e+r.x,t+r.y,r.children,a,n,o,i+1)}))},f={getClasses:function(e,t){l.l.info("Extracting classes"),t.db.clear("ver-2");try{return t.parse(e),t.db.getClasses()}catch(r){return{}}},draw:async function(e,t,r,a){var i;a.db.clear(),p={},d={},a.db.setGen("gen-2"),a.parser.parse(e);const c=(0,n.Ys)("body").append("div").attr("style","height:400px").attr("id","cy");let h={id:"root",layoutOptions:{"elk.hierarchyHandling":"INCLUDE_CHILDREN","org.eclipse.elk.padding":"[top=100, left=100, bottom=110, right=110]","elk.layered.spacing.edgeNodeBetweenLayers":"30","elk.direction":"DOWN"},children:[],edges:[]};switch(l.l.info("Drawing flowchart using v3 renderer",s),a.db.getDirection()){case"BT":h.layoutOptions["elk.direction"]="UP";break;case"TB":h.layoutOptions["elk.direction"]="DOWN";break;case"LR":h.layoutOptions["elk.direction"]="RIGHT";break;case"RL":h.layoutOptions["elk.direction"]="LEFT"}const{securityLevel:u,flowchart:g}=(0,l.c)();let f;"sandbox"===u&&(f=(0,n.Ys)("#i"+t));const x="sandbox"===u?(0,n.Ys)(f.nodes()[0].contentDocument.body):(0,n.Ys)("body"),m="sandbox"===u?f.nodes()[0].contentDocument:document,_=x.select(`[id="${t}"]`);(0,o.a)(_,["point","circle","cross"],a.type,a.arrowMarkerAbsolute);const v=a.db.getVertices();let T;const E=a.db.getSubGraphs();l.l.info("Subgraphs - ",E);for(let n=E.length-1;n>=0;n--)T=E[n],a.db.addVertex(T.id,{text:T.title,type:T.labelType},"group",void 0,T.classes,T.dir);const S=_.insert("g").attr("class","subgraphs"),$=function(e){const t={parentById:{},childrenById:{}},r=e.getSubGraphs();return l.l.info("Subgraphs - ",r),r.forEach((function(e){e.nodes.forEach((function(r){t.parentById[r]=e.id,void 0===t.childrenById[e.id]&&(t.childrenById[e.id]=[]),t.childrenById[e.id].push(r)}))})),r.forEach((function(e){e.id,void 0!==t.parentById[e.id]&&t.parentById[e.id]})),t}(a.db);h=await async function(e,t,r,a,n,i,s){const d=r.select(`[id="${t}"]`).insert("g").attr("class","nodes"),c=Object.keys(e);return await Promise.all(c.map((async function(t){const r=e[t];let s="default";r.classes.length>0&&(s=r.classes.join(" ")),s+=" flowchart-label";const c=(0,l.k)(r.styles);let h=void 0!==r.text?r.text:r.id;const u={width:0,height:0},b=[{id:r.id+"-west",layoutOptions:{"port.side":"WEST"}},{id:r.id+"-east",layoutOptions:{"port.side":"EAST"}},{id:r.id+"-south",layoutOptions:{"port.side":"SOUTH"}},{id:r.id+"-north",layoutOptions:{"port.side":"NORTH"}}];let g=0,y="",w={};switch(r.type){case"round":g=5,y="rect";break;case"square":case"group":default:y="rect";break;case"diamond":y="question",w={portConstraints:"FIXED_SIDE"};break;case"hexagon":y="hexagon";break;case"odd":case"odd_right":y="rect_left_inv_arrow";break;case"lean_right":y="lean_right";break;case"lean_left":y="lean_left";break;case"trapezoid":y="trapezoid";break;case"inv_trapezoid":y="inv_trapezoid";break;case"circle":y="circle";break;case"ellipse":y="ellipse";break;case"stadium":y="stadium";break;case"subroutine":y="subroutine";break;case"cylinder":y="cylinder";break;case"doublecircle":y="doublecircle"}const k={labelStyle:c.labelStyle,shape:y,labelText:h,labelType:r.labelType,rx:g,ry:g,class:s,style:c.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:n.db.getTooltip(r.id)||"",domId:n.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:"group"===r.type?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:(0,l.c)().flowchart.padding};let f,x;if("group"!==k.type)x=await(0,o.e)(d,k,r.dir),f=x.node().getBBox();else{a.createElementNS("http://www.w3.org/2000/svg","text");const{shapeSvg:e,bbox:t}=await(0,o.l)(d,k,void 0,!0);u.width=t.width,u.wrappingWidth=(0,l.c)().flowchart.wrappingWidth,u.height=t.height,u.labelNode=e.node(),k.labelData=u}const m={id:r.id,ports:"diamond"===r.type?b:[],layoutOptions:w,labelText:h,labelData:u,domId:n.db.lookUpDomId(r.id),width:null==f?void 0:f.width,height:null==f?void 0:f.height,type:r.type,el:x,parent:i.parentById[r.id]};p[k.id]=m}))),s}(v,t,x,m,a,$,h);const I=_.insert("g").attr("class","edges edgePath"),B=a.db.getEdges();h=b(B,a,h,_);Object.keys(p).forEach((e=>{const t=p[e];t.parent||h.children.push(t),void 0!==$.childrenById[e]&&(t.labels=[{text:t.labelText,layoutOptions:{"nodeLabels.placement":"[H_CENTER, V_TOP, INSIDE]"},width:t.labelData.width,height:t.labelData.height}],delete t.x,delete t.y,delete t.width,delete t.height)})),w(h.children,$),l.l.info("after layout",JSON.stringify(h,null,2));const C=await s.layout(h);k(0,0,C.children,_,S,a,0),l.l.info("after layout",C),null==(i=C.edges)||i.map((e=>{y(I,e,e.edgeData,a,$)})),(0,l.p)({},_,g.diagramPadding,g.useMaxWidth),c.remove()}},x=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span {\n    color: ${e.titleColor};\n  }\n\n  .label text,span {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.85;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n  .subgraph {\n    stroke-width:2;\n    rx:3;\n  }\n  // .subgraph-lvl-1 {\n  //   fill:#ccc;\n  //   // stroke:black;\n  // }\n\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n\n  ${(e=>{let t="";for(let r=0;r<5;r++)t+=`\n      .subgraph-lvl-${r} {\n        fill: ${e[`surface${r}`]};\n        stroke: ${e[`surfacePeer${r}`]};\n      }\n    `;return t})(e)}\n`,m={db:a.d,renderer:f,parser:a.p,styles:x}}}]);