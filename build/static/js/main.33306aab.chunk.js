(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(e,t,a){e.exports=a(334)},194:function(e,t,a){},196:function(e,t,a){},279:function(e,t,a){e.exports=a.p+"static/media/10412368723880252_1.2e62289b.jpg"},280:function(e,t,a){e.exports=a.p+"static/media/10547961582846888_1.54fbf816.jpg"},281:function(e,t,a){e.exports=a.p+"static/media/10686354557628304_1.0d941b4c.jpg"},282:function(e,t,a){e.exports=a.p+"static/media/11033926921508488_1.84c82a5a.jpg"},283:function(e,t,a){e.exports=a.p+"static/media/11600983276356164_1.06ec2c62.jpg"},284:function(e,t,a){e.exports=a.p+"static/media/11854078013954528_1.7faf6a31.jpg"},285:function(e,t,a){e.exports=a.p+"static/media/12064273040195392_1.2995d79a.jpg"},286:function(e,t,a){e.exports=a.p+"static/media/18532669286405344_1.d78e2790.jpg"},287:function(e,t,a){e.exports=a.p+"static/media/18644119330491310_1.75f51cec.jpg"},288:function(e,t,a){e.exports=a.p+"static/media/27250082398145996_1.4c799bac.jpg"},289:function(e,t,a){e.exports=a.p+"static/media/39876704341265610_1.a313534c.jpg"},290:function(e,t,a){e.exports=a.p+"static/media/51498472915966370_1.df947f14.jpg"},291:function(e,t,a){e.exports=a.p+"static/media/5619496040738316_1.843a4713.jpg"},292:function(e,t,a){e.exports=a.p+"static/media/6090484789343891_1.45a051e0.jpg"},293:function(e,t,a){e.exports=a.p+"static/media/8552515751438644_1.87b5353e.jpg"},294:function(e,t,a){e.exports=a.p+"static/media/876661122392077_1.df97d7c2.jpg"},295:function(e,t,a){e.exports=a.p+"static/media/9197907543445676_1.59b64365.jpg"},301:function(e,t,a){},303:function(e,t,a){},334:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),i=a.n(r),o=(a(194),a(21)),s=a(22),l=a(24),p=a(23),u=a(25),d=(a(196),a(15)),m=a(31),f=a.n(m),h=a(49),g=a.n(h),j=a(50),b=a.n(j),v=a(51),E=a.n(v),_=a(32),O=a.n(_),k=a(17),x=a.n(k),y=a(100),w=a.n(y),C=a(18),N=a(16),S=function(e,t){return{type:"UPDATE_BAG",items:e,show:t}},B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleExpandClick=function(){a.setState(function(e){return{expanded:!e.expanded}})},a.handleClick=function(e){var t=a.props.items,n=a.props.product;t.some(function(e){return e.id===n.id})?n.quantity+=1:(n.quantity=1,t.push(n)),a.props.updateBag(t,!0)},a.state={expanded:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return c.a.createElement(f.a,{className:e.card},c.a.createElement(g.a,{action:c.a.createElement(O.a,{"aria-label":"Add to favorites",color:"secondary"},c.a.createElement(w.a,{onClick:this.handleClick})),subheader:this.props.product.isFreeShipping?"Free shipping":""}),c.a.createElement(b.a,{className:e.media,image:a(93)("./".concat(this.props.product.sku,"_1.jpg")),title:"clothes"}),c.a.createElement(E.a,null,c.a.createElement(x.a,{component:"p"},this.props.product.title),c.a.createElement("div",{className:e.price},c.a.createElement(x.a,{component:"p"},this.props.product.currencyFormat),c.a.createElement(x.a,{variant:"h6",color:"secondary"},this.props.product.price))))}}]),t}(c.a.Component),A=Object(d.withStyles)(function(e){return{card:{maxWidth:250},media:{height:0,paddingTop:"100%",backgroundSize:"contain"},actions:{display:"flex",alignItems:"center",justifyContent:"center"},price:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}})(Object(C.b)(function(e){return{items:e.bagReducer.items}},function(e){return Object(N.a)({updateBag:S},e)})(B)),T=(a(301),a(303),a(27)),z=a(101),D=a.n(z),F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(e){var t=a.props.item,n=a.props.items;n=n.filter(function(e){return e.id!==t.id}),a.props.updateBag(n,!0)},a.state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return c.a.createElement(f.a,{className:e.card},c.a.createElement(T.b,{className:e.cover,image:a(93)("./".concat(this.props.item.sku,"_1.jpg"))}),c.a.createElement("div",{className:e.details},c.a.createElement(T.a,{className:e.content},c.a.createElement(T.d,{className:"title"},this.props.item.title),c.a.createElement(T.d,{variant:"subtitle1",color:"textSecondary"},this.props.item.currencyFormat,this.props.item.price),c.a.createElement(T.d,{variant:"subtitle1",color:"textSecondary"},"quantity:",this.props.item.quantity)),c.a.createElement("div",{className:e.controls},c.a.createElement(T.c,null,c.a.createElement(D.a,{onClick:this.handleClick})))))}}]),t}(c.a.Component),R=Object(d.withStyles)(function(e){return{card:{display:"flex",margin:5},details:{display:"flex",flexDirection:"row"},content:{flex:"1 0 auto"},cover:{width:80,backgroundSize:"contain"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing.unit,paddingBottom:e.spacing.unit}}})(Object(C.b)(function(e){return{items:e.bagReducer.items}},function(e){return Object(N.a)({updateBag:S},e)})(F)),L=a(52),q=a.n(L),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).calculateTotal=function(){var e=0;return 0!==a.props.items.length&&a.props.items.forEach(function(t){e+=t.quantity*t.price}),e},a.state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Popover"},c.a.createElement(x.a,{className:"Popover-header",component:"h5",variant:"h5"},"Review Bag"),c.a.createElement("div",{className:"items"},this.props.items.map(function(e){return c.a.createElement(R,{item:e})})),c.a.createElement("div",{className:"actions"},c.a.createElement(q.a,{variant:"contained",color:"primary"},"Check Out"),c.a.createElement("div",{className:"actions-total"},c.a.createElement(x.a,{variant:"h6"},"Total: $",this.calculateTotal()," "))))}}]),t}(c.a.Component),I=Object(C.b)(function(e){return{items:e.bagReducer.items}},null)(P),M=a(37),U=a.n(M),X=a(102),W=a.n(X),G=a(55),J=a.n(G),$=a(53),H=a.n($),K=a(30),Q=a.n(K),V=a(54),Y=a.n(V),Z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null}),a.props.updateBag(a.props.items,!1)},a.handleFilterClick=function(e,t){return function(n){var c=a.state.color,r=a.state.products;if(a.state.clicked.some(function(t){return t===e})){c[t]="default";var i=a.state.clicked.indexOf(e);a.state.clicked.splice(i,1)}else c[t]="secondary",a.state.clicked.push(e);a.setState({color:c}),r=0!==a.state.clicked.length?a.state.allproducts.filter(function(e){return e.availableSizes.some(function(e){return a.state.clicked.some(function(t){return t===e})})}):a.state.allproducts,a.setState({products:r})}},a.state={products:[],allproducts:[],anchorEl:null,sizes:["XS","S","M","ML","L","XL","XXL"],color:["default","default","default","default","default","default","default"],clicked:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;a.e(1).then(a.t.bind(null,335,3)).then(function(t){e.setState({products:t.products,allproducts:t.products})})}},{key:"render",value:function(){var e=this,t=this.state.anchorEl,a=Boolean(t)||this.props.show;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"App-header"},c.a.createElement(Q.a,{className:"App-paper"},this.state.sizes.map(function(t,a){return c.a.createElement(H.a,{label:t,className:"App-chip",onClick:e.handleFilterClick(t,a),variant:"default",color:e.state.color[a]})})),c.a.createElement("div",{className:"App-icon"},c.a.createElement(O.a,{"aria-owns":a?"simple-popper":void 0,"aria-label":"bag",onClick:this.handleClick,color:"primary"},c.a.createElement(Y.a,{badgeContent:this.props.items.length,color:"secondary"},c.a.createElement(W.a,null))))),c.a.createElement("div",{class:"App-counter"},this.state.products.length," Product(s) found."),c.a.createElement(U.a,{container:!0,spacing:24},this.state.products.map(function(e){return c.a.createElement(U.a,{item:!0,xs:3},c.a.createElement(A,{product:e}))})),c.a.createElement(J.a,{id:"simple-popper",open:a,anchorEl:t,onClose:this.handleClose,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},c.a.createElement(I,null)))}}]),t}(n.Component),ee=Object(C.b)(function(e){return{items:e.bagReducer.items,show:e.bagReducer.show}},function(e){return Object(N.a)({updateBag:S},e)})(Z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te={items:[],show:!1},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_BAG":return{items:t.items,show:t.show};default:return e}},ne=Object(N.b)({bagReducer:ae}),ce=Object(N.c)(ne);i.a.render(c.a.createElement(C.a,{store:ce},c.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,t,a){var n={"./10412368723880252_1.jpg":279,"./10547961582846888_1.jpg":280,"./10686354557628304_1.jpg":281,"./11033926921508488_1.jpg":282,"./11600983276356164_1.jpg":283,"./11854078013954528_1.jpg":284,"./12064273040195392_1.jpg":285,"./18532669286405344_1.jpg":286,"./18644119330491310_1.jpg":287,"./27250082398145996_1.jpg":288,"./39876704341265610_1.jpg":289,"./51498472915966370_1.jpg":290,"./5619496040738316_1.jpg":291,"./6090484789343891_1.jpg":292,"./8552515751438644_1.jpg":293,"./876661122392077_1.jpg":294,"./9197907543445676_1.jpg":295};function c(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id=93}},[[189,3,2]]]);
//# sourceMappingURL=main.33306aab.chunk.js.map