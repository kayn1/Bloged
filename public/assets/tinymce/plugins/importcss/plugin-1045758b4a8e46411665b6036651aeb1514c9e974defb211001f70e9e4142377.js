tinymce.PluginManager.add("importcss",function(t){function e(t){var e=tinymce.Env.cacheSuffix;return"string"==typeof t&&(t=t.replace("?"+e,"").replace("&"+e,"")),t}function n(e){var n=t.settings,r=n.skin!==!1&&(n.skin||"lightgray");if(r){var i=n.skin_url;return i=i?t.documentBaseURI.toAbsolute(i):tinymce.baseURL+"/skins/"+r,e===i+"/content"+(t.inline?".inline":"")+".min.css"}return!1}function r(t){return"string"==typeof t?function(e){return e.indexOf(t)!==-1}:t instanceof RegExp?function(e){return t.test(e)}:t}function i(r,i){function s(t,r){var o,u=t.href;if(u=e(u),u&&i(u,r)&&!n(u)){p(t.imports,function(t){s(t,!0)});try{o=t.cssRules||t.rules}catch(t){}p(o,function(t){t.styleSheet?s(t.styleSheet,!0):t.selectorText&&p(t.selectorText.split(","),function(t){c.push(tinymce.trim(t))})})}}var c=[],o={};p(t.contentCSS,function(t){o[t]=!0}),i||(i=function(t,e){return e||o[t]});try{p(r.styleSheets,function(t){s(t)})}catch(t){}return c}function s(e){var n,r=/^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(e);if(r){var i=r[1],s=r[2].substr(1).split(".").join(" "),c=tinymce.makeMap("a,img");return r[1]?(n={title:e},t.schema.getTextBlockElements()[i]?n.block=i:t.schema.getBlockElements()[i]||c[i.toLowerCase()]?n.selector=i:n.inline=i):r[2]&&(n={inline:"span",title:e.substr(1),classes:s}),t.settings.importcss_merge_classes!==!1?n.classes=s:n.attributes={"class":s},n}}function c(t,e){return tinymce.util.Tools.grep(t,function(t){return!t.filter||t.filter(e)})}function o(t){return tinymce.util.Tools.map(t,function(t){return tinymce.util.Tools.extend({},t,{original:t,selectors:{},filter:r(t.filter),item:{text:t.title,menu:[]}})})}function u(t,e){return null===e||t.settings.importcss_exclusive!==!1}function l(e,n,r){return!(u(t,n)?e in r:e in n.selectors)}function a(e,n,r){u(t,n)?r[e]=!0:n.selectors[e]=!0}function f(e,n,r){var i,c=t.settings;return i=r&&r.selector_converter?r.selector_converter:c.importcss_selector_converter?c.importcss_selector_converter:s,i.call(e,n,r)}var m=this,p=tinymce.each;t.on("renderFormatsMenu",function(e){var n=t.settings,s={},u=r(n.importcss_selector_filter),g=e.control,v=o(n.importcss_groups),y=function(e,n){if(l(e,n,s)){a(e,n,s);var r=f(m,e,n);if(r){var i=r.name||tinymce.DOM.uniqueId();return t.formatter.register(i,r),tinymce.extend({},g.settings.itemDefaults,{text:r.title,format:i})}}return null};t.settings.importcss_append||g.items().remove(),p(i(e.doc||t.getDoc(),r(n.importcss_file_filter)),function(t){if(t.indexOf(".mce-")===-1&&(!u||u(t))){var e=c(v,t);if(e.length>0)tinymce.util.Tools.each(e,function(e){var n=y(t,e);n&&e.item.menu.push(n)});else{var n=y(t,null);n&&g.add(n)}}}),p(v,function(t){t.item.menu.length>0&&g.add(t.item)}),e.control.renderNew()}),m.convertSelectorToFormat=s});