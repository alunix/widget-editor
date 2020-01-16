(this["webpackJsonp@applications/widget-editor"]=this["webpackJsonp@applications/widget-editor"]||[]).push([[0],{106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"asc",i=n.map((function(e){if(null===e.value||void 0===e.value)return null;if("string"===e.type){var n;switch(e.operation){case"contains":n="".concat(e.name," LIKE '%").concat(e.value,"%'");break;case"not-contain":n="".concat(e.name," NOT LIKE '%").concat(e.value,"%'");break;case"starts-with":n="".concat(e.name," LIKE '").concat(e.value,"%'");break;case"ends-with":n="".concat(e.name," LIKE '%").concat(e.value,"'");break;case"=":n="".concat(e.name," LIKE '").concat(e.value,"'");break;case"!=":n="".concat(e.name," NOT LIKE '").concat(e.value,"'");break;case"by-values":default:n="".concat(e.name," IN ('").concat(e.value.join("', '"),"')")}return e.notNull?"".concat(n," AND ").concat(e.name," IS NOT NULL"):n}if("number"===e.type){var a;switch(e.operation){case"not-between":a="".concat(e.name," < ").concat(e.value[0]," OR ").concat(e.name," > ").concat(e.value[1]);break;case">":a="".concat(e.name," > ").concat(e.value);break;case">=":a="".concat(e.name," >= ").concat(e.value);break;case"<":a="".concat(e.name," < ").concat(e.value);break;case"<=":a="".concat(e.name," <= ").concat(e.value);break;case"=":a="".concat(e.name," = ").concat(e.value);break;case"!=":a="".concat(e.name," <> ").concat(e.value);break;case"between":default:a="".concat(e.name," >= ").concat(e.value[0]," AND ").concat(e.name," <= ").concat(e.value[1])}return e.notNull?"".concat(a," AND ").concat(e.name," IS NOT NULL"):a}if("date"===e.type){var r,c=function(e){return"featureservice"===t?"date '".concat(e.split("T")[0],"'"):"'".concat(e,"'")};switch(e.operation){case"not-between":r="".concat(e.name," < ").concat(c(e.value[0])," OR ").concat(e.name," > ").concat(c(e.value[1]));break;case">":r="".concat(e.name," > ").concat(c(e.value));break;case">=":r="".concat(e.name," >= ").concat(c(e.value));break;case"<":r="".concat(e.name," < ").concat(c(e.value));break;case"<=":r="".concat(e.name," <= ").concat(c(e.value));break;case"=":r="".concat(e.name," = ").concat(c(e.value));break;case"!=":r="".concat(e.name," <> ").concat(c(e.value));break;case"between":default:r="".concat(e.name," >= ").concat(c(e.value[0])," AND ").concat(e.name," <= ").concat(c(e.value[1]))}return e.notNull?"".concat(r," AND ").concat(e.name," IS NOT NULL"):r}return null})).filter((function(e){return!!e})).join(" AND "),o="*";a.length&&(o=a.map((function(e){var t="".concat(e.value);return e.aggregateFunction&&(t="".concat(e.aggregateFunction.toUpperCase(),"(").concat(t,")")),e.as&&(t="".concat(t," as ").concat(e.key)),t})).join(", "));var s="";if(r.length){var u=r.map((function(e){return e.name})).join(" ");s="ORDER BY ".concat(u," ").concat(c)}var l=i.length?"WHERE ".concat(i):"",d=a.filter((function(e){return e.group})),f="GROUP BY ";return d.forEach((function(e){f="".concat(f," ").concat(e.key,",")})),f=0===d.length?"":f.slice(0,-1),encodeURIComponent("SELECT ".concat(o," FROM ").concat(e," ").concat(l," ").concat(f," ").concat(s))}},116:function(e,t,n){"use strict";var a=n(4),r=n(25),c=n(35),i=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,c){function i(e){try{s(a.next(e))}catch(t){c(t)}}function o(e){try{s(a.throw(e))}catch(t){c(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}s((a=a.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(56),u=o(n(246)),l=function(){function e(t,n){r(this,e),this.endpoint="https://api.resourcewatch.org/v1",this.config=null,this.datasetService=null,this.widgetService=null,this.datasetId=null,this.config=u.default(t),this.datasetId=n,this.datasetService=new s.DatasetService(this.config),this.widgetService=new s.WidgetService(this.config)}return c(e,[{key:"getDataset",value:function(){return i(this,void 0,void 0,a.mark((function e(){var t,n,r,c,i,o,s;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.config.getConfig(),n=t.applications,r=t.env,c=t.locale,"metadata,vocabulary,widget,layer",i="".concat(this.endpoint,"/dataset/").concat(this.datasetId,"?").concat(n.join(","),"&env=").concat(r,"&language=").concat(c,"&includes=").concat("metadata,vocabulary,widget,layer","&page[size]=999"),e.next=5,this.datasetService.fetchData(i);case 5:return o=e.sent,s=o.data,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e,this)})))}},{key:"getFields",value:function(){return i(this,void 0,void 0,a.mark((function e(){var t,n,r;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(this.endpoint,"/fields/").concat(this.datasetId),e.next=3,this.datasetService.fetchData(t);case 3:return n=e.sent,r=n.fields,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"getWidget",value:function(e){return i(this,void 0,void 0,a.mark((function t(){var n,r,c,i,o,s,u,l;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.config.getConfig(),r=n.applications,c=n.env,i=n.locale,"metadata",o=this.widgetService.fromDataset(e).id,s="".concat(this.endpoint,"/widget/").concat(o,"?").concat(r.join(","),"&env=").concat(c,"&language=").concat(i,"&includes=").concat("metadata","&page[size]=999"),t.next=6,this.widgetService.fetchWidget(s);case 6:return u=t.sent,l=u.data,t.abrupt("return",l);case 9:case"end":return t.stop()}}),t,this)})))}},{key:"getWidgetData",value:function(e,t){return i(this,void 0,void 0,a.mark((function n(){var r,c,i,o;return a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=this.widgetService.getDataSqlQuery(e,t),c="".concat(this.endpoint,"/query/").concat(this.datasetId,"?sql=").concat(r),n.next=4,this.widgetService.fetchWidgetData(c);case 4:return i=n.sent,o=i.data,n.abrupt("return",o);case 7:case"end":return n.stop()}}),n,this)})))}},{key:"getLayers",value:function(){return i(this,void 0,void 0,a.mark((function e(){var t,n,r,c,i,o;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.config.getConfig(),n=t.applications,r=t.env,t.locale,c="".concat(this.endpoint,"/dataset/").concat(this.datasetId,"/layer?app=").concat(n.join(","),"&env=").concat(r,"&page[size]=9999"),e.next=4,this.datasetService.fetchData(c);case 4:return i=e.sent,o=i.data,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e,this)})))}}]),e}();t.default=l},123:function(e,t,n){e.exports=n(247)},128:function(e,t,n){},235:function(e,t,n){"use strict";var a=n(4),r=n(25),c=n(35),i=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,c){function i(e){try{s(a.next(e))}catch(t){c(t)}}function o(e){try{s(a.throw(e))}catch(t){c(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(t){r(this,e),this.config=t}return c(e,[{key:"fetchData",value:function(e){return i(this,void 0,void 0,a.mark((function t(){var n;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:if(!((n=t.sent).status>=400)){t.next=6;break}throw new Error(n.statusText);case 6:return t.next=8,n.json();case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(0),new Error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))}}]),e}();t.default=o},236:function(e,t,n){"use strict";var a=n(4),r=n(25),c=n(35),i=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,c){function i(e){try{s(a.next(e))}catch(t){c(t)}}function o(e){try{s(a.throw(e))}catch(t){c(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,o)}s((a=a.apply(e,t||[])).next())}))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(105),u=o(n(106)),l=function(){function e(t){r(this,e),this.config=t}return c(e,[{key:"fromDataset",value:function(e){return s.find(e.attributes.widget,(function(e){return!!e.attributes.defaultEditableWidget}))}},{key:"getDataSqlQuery",value:function(e,t){var n=e.attributes,a=n.provider,r=n.tableName,c=u.default(r,a);return"".concat(c," LIMIT 10")}},{key:"fetchWidgetData",value:function(e){return i(this,void 0,void 0,a.mark((function t(){var n;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:if(!((n=t.sent).status>=400)){t.next=6;break}throw new Error(n.statusText);case 6:return t.next=8,n.json();case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(0),new Error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))}},{key:"fetchWidget",value:function(e){return i(this,void 0,void 0,a.mark((function t(){var n;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:if(!((n=t.sent).status>=400)){t.next=6;break}throw new Error(n.statusText);case 6:return t.next=8,n.json();case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(0),new Error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))}}]),e}();t.default=l},237:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(238));t.default=r.default},238:function(e,t,n){"use strict";var a=n(239),r=n(25),c=n(35),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(243)),s=n(244),u=function(){function e(t,n,a){r(this,e),this.widgetConfig=t,this.configuration=a,this.data=n,this.schema=this.defaultTemplate();new o.default(this.schema)}return c(e,[{key:"defaultTemplate",value:function(){return s.defaultVegaSchema()}},{key:"setScale",value:function(){var e=this.configuration,t=e.value,n=e.chartType,r=t.name,c=this.widgetConfig.scales[0];"pie"===n&&(this.schema=Object.assign(Object.assign({},this.schema),{scales:[].concat(a(this.schema.scales),[{name:c.name,type:"ordinal",domain:Object.assign(Object.assign({},c.domain),{field:r}),range:{scheme:c.range}}])})),"bars"===n&&(this.schema=Object.assign(Object.assign({},this.schema),{scales:[{name:"xscale",type:"band",domain:{data:"table",field:"name"},range:"width",padding:.05,round:!0},{name:"yscale",domain:{data:"table",field:"estimated_generation_gwh"},nice:!0,range:"height"}]}))}},{key:"setMarks",value:function(){var e=this,t=this.configuration,n=t.value,a=t.chartType;this.schema="bars"===a?Object.assign(Object.assign({},this.schema),{marks:[{type:"rect",from:{data:"table"},encode:{enter:{x:{scale:"xscale",field:"name"},width:{scale:"xscale",band:1},y:{scale:"yscale",field:"estimated_generation_gwh"},y2:{scale:"yscale",value:0}},update:{fill:{value:"steelblue"}},hover:{fill:{value:"red"}}}}]}):Object.assign(Object.assign({},this.schema),{marks:this.widgetConfig.marks.map((function(t){return Object.assign(Object.assign({},t),{encode:Object.assign(Object.assign({},t.encode),{enter:Object.assign(Object.assign({},t.encode.enter),{fill:Object.assign(Object.assign({},t.encode.fill),{scale:e.schema.scales[0].name,field:n.name})})})})}))})}},{key:"setLegend",value:function(){this.schema=Object.assign(Object.assign({},this.schema),{legend:this.widgetConfig.legend})}},{key:"setConfig",value:function(){this.schema=Object.assign(Object.assign({},this.schema),{config:this.widgetConfig.config})}},{key:"setData",value:function(){var e=this.configuration,t=e.chartType,n=e.value,a=this.widgetConfig.data[0].transform.find((function(e){return e.type===t}));a||(a={type:"pie",field:n.name}),this.schema=Object.assign(Object.assign({},this.schema),{data:[{values:this.data,name:this.widgetConfig.data[0].name,transform:[Object.assign(Object.assign({},a),{field:n.name})]}]})}},{key:"setAxes",value:function(){var e=this.configuration;e.value;"bars"===e.chartType&&(this.schema=Object.assign(Object.assign({},this.schema),{axes:[{orient:"bottom",scale:"xscale"},{orient:"left",scale:"yscale"}]}))}},{key:"getVegaConfig",value:function(){return this.setAxes(),this.setScale(),this.setMarks(),this.setLegend(),this.setConfig(),this.setData(),this.schema}}]),e}();t.default=u},243:function(e,t,n){"use strict";var a=n(25);Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(t){a(this,e),console.log("parse me!",t)}},244:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultVegaSchema=function(){return{$schema:"https://vega.github.io/schema/vega/v5.json",width:400,height:279,data:[],legend:[],config:[],signals:[],scales:[],axes:[],marks:[]}},t.default={defaultVegaSchema:t.defaultVegaSchema}},245:function(e,t,n){},246:function(e,t,n){"use strict";var a=n(25),r=n(35);Object.defineProperty(t,"__esModule",{value:!0});var c=n(105),i=function(){function e(t){a(this,e),this.setConfig(t)}return r(e,[{key:"setConfig",value:function(e){var t=c.pick(e,["url","env","applications","authUrl","assetsPath","userToken","userEmail","locale"]);this.config=Object.assign(Object.assign({},this.config),t)}},{key:"getConfig",value:function(){return this.config}}]),e}();t.default=function(e){return new i(e)}},247:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"setEditor",(function(){return W})),n.d(a,"default",(function(){return L}));var r={};n.r(r),n.d(r,"setTheme",(function(){return M})),n.d(r,"default",(function(){return R}));var c={};n.r(c),n.d(c,"setConfiguration",(function(){return X})),n.d(c,"patchConfiguration",(function(){return Z})),n.d(c,"default",(function(){return ee}));var i={};n.r(i),n.d(i,"default",(function(){return _e}));var o={};n.r(o),n.d(o,"actions",(function(){return a})),n.d(o,"initialState",(function(){return De})),n.d(o,"reducers",(function(){return i}));var s={};n.r(s),n.d(s,"default",(function(){return Ae}));var u={};n.r(u),n.d(u,"actions",(function(){return r})),n.d(u,"initialState",(function(){return Se})),n.d(u,"reducers",(function(){return s}));var l={};n.r(l),n.d(l,"setWidget",(function(){return Te})),n.d(l,"default",(function(){return Pe}));var d={};n.r(d),n.d(d,"default",(function(){return Ne}));var f={};n.r(f),n.d(f,"actions",(function(){return l})),n.d(f,"initialState",(function(){return We})),n.d(f,"reducers",(function(){return d}));var p={};n.r(p),n.d(p,"default",(function(){return Re}));var h={};n.r(h),n.d(h,"actions",(function(){return c})),n.d(h,"initialState",(function(){return Fe})),n.d(h,"reducers",(function(){return p}));var g={};n.r(g),n.d(g,"sampleAction",(function(){return it})),n.d(g,"default",(function(){return ot}));var v={};n.r(v),n.d(v,"default",(function(){return ut}));var b={};n.r(b),n.d(b,"actions",(function(){return g})),n.d(b,"initialState",(function(){return lt})),n.d(b,"reducers",(function(){return v}));var m=n(1),O=n.n(m),y=n(18),w=n.n(y),j=(n(128),n(57)),x=n(3),E=n(14),_=n(108),D=n(12),k=n(10),A=n(58),S=n(51),T=n(59),P=n(15),C=function(e,t){return Object(j.b)((function(t){return"function"===typeof e?e(t.widgetEditor):{}}),t)},I=function(e){return Object(P.createAction)("".concat("widgetEditor","/").concat(e))},N=function(e){return"".concat("widgetEditor","/").concat(e)},W=I("EDITOR/setEditor"),L={setEditor:W},M=I("THEME/setTheme"),R={setTheme:M},F=n(4),G=n.n(F),U=n(8),V=n(9),z=n(52),B=n.n(z),Y={DATA_FLOW_DATASET_WIDGET_READY:"".concat("widgetEditor","/SAGAS/DATA_FLOW/dataset_widget_ready"),DATA_FLOW_DATA_READY:"".concat("widgetEditor","/SAGAS/DATA_FLOW/data_ready"),DATA_FLOW_VISUALISATION_READY:"".concat("widgetEditor","/SAGAS/DATA_FLOW/visualisation_ready"),DATA_FLOW_WIDGET_DATA_READY:"".concat("widgetEditor","/SAGAS/DATA_FLOW/visualisation_ready")},H=n(79),K=n(109),q=n.n(K),Q=(n(110),V.b.div.withConfig({displayName:"component__StyledContainer",componentId:"p6fymh-0"})(["flex 1;display:flex;width:100%;.c-chart{flex:1;text-align:center;}"])),J=function(e){var t=e.editor,n=e.widget,a=Object(m.useRef)(),r=Object(m.useRef)(),c=Object(m.useRef)();return Object(m.useEffect)((function(){if(a.current&&!q()(n)&&!B()(n,c)){var e=a.current.parentNode.offsetWidth,t=H.b(n);r.current=new H.a(t).width(e/2).initialize(a.current).renderer("canvas").hover().run(),c.current=n}}),[a,t,n]),Object(m.useEffect)((function(){var e=function(){var e=a.current.parentNode.getBoundingClientRect().width;r.current.signal("width",e/2).run("enter")};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),O.a.createElement(Q,null,O.a.createElement("div",{className:"c-chart",ref:a}))},$=C((function(e){return{editor:e.editor,widget:e.widget}}))(J),X=I("CONFIGURATION/setConfiguration"),Z=I("CONFIGURATION/patchConfiguration"),ee={setConfiguration:X,patchConfiguration:Z},te=n(113),ne=n.n(te),ae=n(117),re=V.b.div.withConfig({displayName:"component__StyledContainer",componentId:"sc-5wfvth-0"})(["margin:10px;"]),ce={control:function(){return{display:"flex",border:"1px solid rgba(202,204,208,0.85)",borderRadius:"4px",padding:"3px 0"}}},ie=function(e){var t=e.patchConfiguration,n=e.options,a=e.value;return O.a.createElement(re,null,O.a.createElement(ae.a,{onChange:function(e){console.log("handle change",t),t({chartType:e.value})},defaultValue:ne()(n,{value:a}),options:n,styles:ce}))},oe=C((function(e){return{options:e.configuration.availableCharts,value:e.configuration.chartType}}),{patchConfiguration:Z})(ie),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return"\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.09);\n\n  border-color: rgba(26, 28, 34, 0.1);\n  border-style: solid;\n\n  border-width: ".concat(e,"px ").concat(t,"px ").concat(n,"px ").concat(a,"px;\n")},ue=V.b.div.withConfig({displayName:"component__StyledContainer",componentId:"sc-1jp54tw-0"})(["display:flex;flex-flow:column;height:calc(100% - ",");background:#fff;flex:1;width:100%;",""],"100px",se()),le=function(){return O.a.createElement(ue,null,O.a.createElement(oe,null),O.a.createElement($,null))},de=V.b.button.withConfig({displayName:"component__StyledButton",componentId:"l5yyzu-0"})(["cursor:pointer;font-size:16px;color:#393f44;border:1px solid rgba(202,204,208,0.85);background:transparent;padding:10px 20px;border-radius:5px;"," "," ",""],(function(e){return e.type&&"cta"===e.type&&Object(V.a)(["background:",";color:#fff;border:1px solid transparent;"],e.color)}),(function(e){return e.type&&"highlight"===e.type&&Object(V.a)(["color:",";border:1px solid ",";"],e.color,e.color)}),(function(e){return e.type&&"default"===e.type&&Object(V.a)(["&:hover,&.active{","}"],(function(e){return e.color&&Object(V.a)(["border:1px solid ",";color:",";"],e.color,e.color)}))})),fe=function(e){var t=e.type,n=void 0===t?"default":t,a=e.theme,r=e.children;return O.a.createElement(de,{color:a.color,type:n},r)},pe=C((function(e){return{theme:e.theme}}))(fe),he=V.b.div.withConfig({displayName:"component__StyledContainer",componentId:"sc-1tx06u6-0"})(["flex:1;background:#fff;height:calc(100% - "," - 20px);padding:0 30px;margin:10px 0;",""],"100px",se(1,1,1,0)),ge=V.b.ul.withConfig({displayName:"component__StyledList",componentId:"sc-1tx06u6-1"})(["display:flex;justify-content:space-between;padding:20px 0;list-style:none;"]),ve=V.b.li.withConfig({displayName:"component__StyledListItem",componentId:"sc-1tx06u6-2"})(["color:red;"]),be=function(){return O.a.createElement(he,null,O.a.createElement(ge,null,O.a.createElement(ve,null,O.a.createElement(pe,null,"General")),O.a.createElement(ve,null,O.a.createElement(pe,null,"Visual style")),O.a.createElement(ve,null,O.a.createElement(pe,null,"Advanced")),O.a.createElement(ve,null,O.a.createElement(pe,null,"Table view"))))},me=V.b.footer.withConfig({displayName:"component__StyledFooter",componentId:"t079zl-0"})(["width:100%;height:",";align-self:flex-end;display:flex;align-items:center;justify-content:space-between;padding:0 30px;"],"100px"),Oe=function(){return O.a.createElement(me,null,O.a.createElement(pe,{type:"highlight"},"Need help?"),O.a.createElement(pe,{type:"cta"},"Save widget"))},ye=V.b.div.withConfig({displayName:"component__StyledContainer",componentId:"sc-1mx32o6-0"})(["width:100%;height:100%;display:flex;flex-flow:wrap;justify-content:space-between;flex-flow:column;@media only screen and (min-width:768px){flex-flow:wrap;}"]),we=function(e){function t(e){var n;return Object(D.a)(this,t),(n=Object(A.a)(this,Object(S.a)(t).call(this,e))).getDatasetAndWidgets(),n.getFieldsAndLayers(),n.resolveTheme(),n}return Object(T.a)(t,e),Object(k.a)(t,[{key:"componentDidUpdate",value:function(e){var t=e.theme,n=this.props.theme;B()(n,t)||this.resolveTheme()}},{key:"resolveTheme",value:function(){var e=this.props,t=e.theme;(0,e.dispatch)({type:"THEME/setTheme",payload:t})}},{key:"getDatasetAndWidgets",value:function(){var e=Object(U.a)(G.a.mark((function e(){var t,n,a,r,c,i,o;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.adapter,a=t.setEditor,r=t.dispatch,e.next=3,n.getDataset();case 3:return c=e.sent,e.next=6,n.getWidget(c);case 6:return i=e.sent,a({dataset:c,widget:i}),r({type:Y.DATA_FLOW_DATASET_WIDGET_READY}),e.next=11,n.getWidgetData(c,i);case 11:o=e.sent,a({widgetData:o}),r({type:Y.DATA_FLOW_WIDGET_DATA_READY});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFieldsAndLayers",value:function(){var e=Object(U.a)(G.a.mark((function e(){var t,n,a,r,c,i;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.adapter,a=t.setEditor,r=t.dispatch,e.next=3,n.getFields();case 3:return c=e.sent,e.next=6,n.getLayers();case 6:i=e.sent,a({layers:i,fields:c}),r({type:Y.DATA_FLOW_DATA_READY});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return O.a.createElement(ye,null,O.a.createElement(le,null),O.a.createElement(be,null),O.a.createElement(Oe,null))}}]),t}(O.a.Component),je=C((function(e){return{editor:e.editor}}),(function(e){return{dispatch:e,setEditor:function(t){return e(W(t))},setTheme:function(t){return e(M(t))}}}))(we),xe=function(e){function t(){return Object(D.a)(this,t),Object(A.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props,t=e.adapter,n=e.theme;return O.a.createElement(je,{adapter:t,theme:n})}}]),t}(O.a.Component);function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var _e=Object(x.a)({},W,(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t.payload)})),De={dataset:null,widget:null,widgetData:null};function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Ae=Object(x.a)({},M,(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(n),!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t.payload)})),Se={color:"#C32D7B"},Te=I("WIDGET/setWidget"),Pe={setWidget:Te};function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Ie,Ne=Object(x.a)({},Te,(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(n),!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t.payload)})),We={};function Le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Le(Object(n),!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Re=(Ie={},Object(x.a)(Ie,X,(function(e,t){return Me({},e,{},t.payload)})),Object(x.a)(Ie,Z,(function(e,t){return Me({},e,{},t.payload)})),Ie),Fe={visualizationType:"chart",chartType:"pie",availableCharts:[{value:"pie",label:"pie"},{value:"bars",label:"Bars"}]},Ge={configuration:Object(P.handleModule)(h),editor:Object(P.handleModule)(o),theme:Object(P.handleModule)(u),widget:Object(P.handleModule)(f)},Ue=Object(x.a)({},"widgetEditor",Object(E.combineReducers)(Ge)),Ve=n(118),ze=Object(Ve.a)(),Be=n(11),Ye=G.a.mark(Ke),He=G.a.mark(qe);function Ke(){var e,t;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Be.d)();case 2:return e=n.sent,t=e.widgetEditor.editor.widget.attributes.widgetConfig,n.next=6,Object(Be.c)(X(t.paramsConfig));case 6:case"end":return n.stop()}}),Ye)}function qe(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Be.e)("widgetEditor/EDITOR/setEditor",Ke);case 2:case"end":return e.stop()}}),He)}var Qe=n(56),Je=G.a.mark(Ze),$e=G.a.mark(et),Xe=G.a.mark(tt);function Ze(){var e,t,n,a,r,c,i,o;return G.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(Be.d)();case 2:return e=s.sent,t=e.widgetEditor,n=t.editor,a=t.configuration,r=n.widgetData,c=n.widget.attributes.widgetConfig,i=new Qe.WidgetHelper(c,r,a),o=i.getVegaConfig(),s.next=12,Object(Be.c)(Te(o));case 12:case"end":return s.stop()}}),Je)}function et(){var e,t,n,a,r,c,i,o;return G.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(Be.d)();case 2:return e=s.sent,t=e.widgetEditor,n=t.editor,a=t.configuration,r=n.widgetData,c=n.widget.attributes.widgetConfig,i=new Qe.WidgetHelper(c,r,a),o=i.getVegaConfig(),s.next=12,Object(Be.c)(Te(o));case 12:case"end":return s.stop()}}),$e)}function tt(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Be.e)(Y.DATA_FLOW_VISUALISATION_READY,Ze);case 2:return e.next=4,Object(Be.e)(N("CONFIGURATION/patchConfiguration"),et);case 4:case"end":return e.stop()}}),Xe)}var nt=G.a.mark(at);function at(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Be.a)([Object(Be.b)(qe),Object(Be.b)(tt)]);case 2:case"end":return e.stop()}}),nt)}var rt=xe,ct=n(115),it=Object(P.createAction)("SAMPLE-MODULE/sampleAction"),ot={sampleAction:it};function st(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var ut=Object(x.a)({},it,(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?st(Object(n),!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):st(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t.payload)})),lt={};function dt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ft(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?dt(Object(n),!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(E.combineReducers)(ft({sampleModule:Object(P.handleModule)(b)},Ue)),n=Object(E.applyMiddleware)(ct.a,ze),a=Object(_.composeWithDevTools)(n),r=Object(E.createStore)(t,e,a);return ze.run(at),{store:r}},ht=(n(245),n(116)),gt=n.n(ht);var vt=function(){var e=pt().store,t=new gt.a({applications:["rw"],env:"production",locale:"en",includes:["metadata","vocabulary","widget","layer"]},"a86d906d-9862-4783-9e30-cdb68cd808b8");return O.a.createElement(j.a,{store:e},O.a.createElement("div",{className:"App"},O.a.createElement("header",{className:"App-header"},"Widget editor V2"),O.a.createElement("div",{className:"widget-editor-wrapper"},O.a.createElement(rt,{adapter:t,theme:{color:"#C32D7B"},store:e}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));w.a.render(O.a.createElement(vt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},56:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(235));t.DatasetService=r.default;var c=a(n(236));t.WidgetService=c.default;var i=a(n(237));t.WidgetHelper=i.default;var o=a(n(106));t.getQueryByFilters=o.default}},[[123,1,2]]]);
//# sourceMappingURL=main.36778169.chunk.js.map