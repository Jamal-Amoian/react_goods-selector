(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(4),o=c.n(s),n=c(5),a=c(6),l=c(8),d=c(7),r=c(1),i=c.n(r),h=c(2),u=c.n(h),b=(c(13),c(14),c(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(n.a)(this,c);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:"Jam"},e.clearSelectedGood=function(){e.setState({selectedGood:""})},e}return Object(a.a)(c,[{key:"selectGood",value:function(e){var t=this.state.selectedGood;t.length?t!==e?this.setState({selectedGood:e}):this.setState({selectedGood:""}):this.setState({selectedGood:e})}},{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(b.jsxs)("main",{className:"section container",children:[Object(b.jsxs)("h1",{className:u()("title",{"is-flex is-align-items-center":t.length>0}),children:[t.length>0?"".concat(t," is selected"):"No goods selected",t.length>0&&Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.clearSelectedGood})]}),Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:j.map((function(c){return Object(b.jsxs)("tr",{"data-cy":"Good",className:u()("",{"has-background-success-light":t===c}),children:[Object(b.jsx)("td",{children:Object(b.jsx)("button",{"data-cy":t===c?"RemoveButton":"AddButton",type:"button",className:u()("button",{"is-info":t===c}),onClick:function(){e.selectGood(c)},children:t===c?"-":"+"})}),Object(b.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(i.a.Component);o.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c0368ad3.chunk.js.map