// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6993__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6993__auto__)){
return or__6993__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__19108 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19108) : cljs.core.atom.call(null,G__19108));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module()["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_19111 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module()["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_19111){
return (function (){
var _STAR_always_update_STAR_19112 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if(!((callback == null))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_19112;
}});})(_STAR_always_update_STAR_19111))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_19111;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args19113 = [];
var len__8106__auto___19116 = arguments.length;
var i__8107__auto___19117 = (0);
while(true){
if((i__8107__auto___19117 < len__8106__auto___19116)){
args19113.push((arguments[i__8107__auto___19117]));

var G__19118 = (i__8107__auto___19117 + (1));
i__8107__auto___19117 = G__19118;
continue;
} else {
}
break;
}

var G__19115 = args19113.length;
switch (G__19115) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19113.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module()["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__19124_19128 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__19125_19129 = null;
var count__19126_19130 = (0);
var i__19127_19131 = (0);
while(true){
if((i__19127_19131 < count__19126_19130)){
var v_19132 = chunk__19125_19129.cljs$core$IIndexed$_nth$arity$2(null,i__19127_19131);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_19132);

var G__19133 = seq__19124_19128;
var G__19134 = chunk__19125_19129;
var G__19135 = count__19126_19130;
var G__19136 = (i__19127_19131 + (1));
seq__19124_19128 = G__19133;
chunk__19125_19129 = G__19134;
count__19126_19130 = G__19135;
i__19127_19131 = G__19136;
continue;
} else {
var temp__4657__auto___19137 = cljs.core.seq(seq__19124_19128);
if(temp__4657__auto___19137){
var seq__19124_19138__$1 = temp__4657__auto___19137;
if(cljs.core.chunked_seq_QMARK_(seq__19124_19138__$1)){
var c__7812__auto___19139 = cljs.core.chunk_first(seq__19124_19138__$1);
var G__19140 = cljs.core.chunk_rest(seq__19124_19138__$1);
var G__19141 = c__7812__auto___19139;
var G__19142 = cljs.core.count(c__7812__auto___19139);
var G__19143 = (0);
seq__19124_19128 = G__19140;
chunk__19125_19129 = G__19141;
count__19126_19130 = G__19142;
i__19127_19131 = G__19143;
continue;
} else {
var v_19144 = cljs.core.first(seq__19124_19138__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_19144);

var G__19145 = cljs.core.next(seq__19124_19138__$1);
var G__19146 = null;
var G__19147 = (0);
var G__19148 = (0);
seq__19124_19128 = G__19145;
chunk__19125_19129 = G__19146;
count__19126_19130 = G__19147;
i__19127_19131 = G__19148;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
