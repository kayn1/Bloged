!function(){var e={},t=function(t){for(var n=e[t],i=n.deps,o=n.defn,a=i.length,s=new Array(a),l=0;l<a;++l)s[l]=r(i[l]);var c=o.apply(null,s);if(void 0===c)throw"module ["+t+"] returned undefined";n.instance=c},n=function(t,n,r){if("string"!=typeof t)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+t;if(void 0===r)throw"no definition function for "+t;e[t]={deps:n,defn:r,instance:void 0}},r=function(n){var r=e[n];if(void 0===r)throw"module ["+n+"] was undefined";return void 0===r.instance&&t(n),r.instance},i=function(e,t){for(var n=e.length,i=new Array(n),o=0;o<n;++o)i.push(r(e[o]));t.apply(null,t)},o={};o.bolt={module:{api:{define:n,require:i,demand:r}}};var a=n,s=function(e,t){a(e,[],function(){return t})};s("1",tinymce.Env),s("2",tinymce.EditorManager),s("3",tinymce.ThemeManager),s("8",tinymce.util.Tools),s("9",tinymce.ui.Factory),s("a",tinymce.DOM),a("b",["8","9"],function(e,t){var n="undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",r=function(n,r,i){var o,a=[];if(r)return e.each(r.split(/[ ,]/),function(e){var r,s=function(){var t=n.selection;e.settings.stateSelector&&t.selectorChanged(e.settings.stateSelector,function(t){e.active(t)},!0),e.settings.disabledStateSelector&&t.selectorChanged(e.settings.disabledStateSelector,function(t){e.disabled(t)})};"|"==e?o=null:t.has(e)?(e={type:e,size:i},a.push(e),o=null):(o||(o={type:"buttongroup",items:[]},a.push(o)),n.buttons[e]&&(r=e,e=n.buttons[r],"function"==typeof e&&(e=e()),e.type=e.type||"button",e.size=i,e=t.create(e),o.items.push(e),n.initialized?s():n.on("init",s)))}),{type:"toolbar",layout:"flow",items:a}},i=function(t,i){var o=[],a=t.settings,s=function(e){if(e)return o.push(r(t,e,i)),!0};if(e.isArray(a.toolbar)){if(0===a.toolbar.length)return;e.each(a.toolbar,function(e,t){a["toolbar"+(t+1)]=e}),delete a.toolbar}for(var l=1;l<10&&s(a["toolbar"+l]);l++);if(o.length||a.toolbar===!1||s(a.toolbar||n),o.length)return{type:"panel",layout:"stack",classes:"toolbar-grp",ariaRoot:!0,ariaRemember:!0,items:o}};return{createToolbar:r,createToolbars:i}}),a("c",["8"],function(e){var t={file:{title:"File",items:"newdocument"},edit:{title:"Edit",items:"undo redo | cut copy paste pastetext | selectall"},insert:{title:"Insert",items:"|"},view:{title:"View",items:"visualaid |"},format:{title:"Format",items:"bold italic underline strikethrough superscript subscript | formats | removeformat"},table:{title:"Table"},tools:{title:"Tools"}},n=function(e,t){var n;return"|"==t?{text:"|"}:n=e[t]},r=function(r,i,o){var a,s,l,c,u;if(u=e.makeMap((i.removed_menuitems||"").split(/[ ,]/)),i.menu?(s=i.menu[o],c=!0):s=t[o],s){a={text:s.title},l=[],e.each((s.items||"").split(/[ ,]/),function(e){var t=n(r,e);t&&!u[e]&&l.push(n(r,e))}),c||e.each(r,function(e){e.context==o&&("before"==e.separator&&l.push({text:"|"}),e.prependToContext?l.unshift(e):l.push(e),"after"==e.separator&&l.push({text:"|"}))});for(var d=0;d<l.length;d++)"|"==l[d].text&&(0!==d&&d!=l.length-1||l.splice(d,1));if(a.menu=l,!a.menu.length)return null}return a},i=function(e){var n,i=[],o=e.settings,a=[];if(o.menu)for(n in o.menu)a.push(n);else for(n in t)a.push(n);for(var s="string"==typeof o.menubar?o.menubar.split(/[ ,]/):a,l=0;l<s.length;l++){var c=s[l];c=r(e.menuItems,e.settings,c),c&&i.push(c)}return i};return{createMenuButtons:i}}),s("j",tinymce.util.Delay),s("k",tinymce.geom.Rect),a("d",["a","8","j","b","9","k"],function(e,t,n,r,i,o){var a=function(e){return{left:e.x,top:e.y,width:e.w,height:e.h,right:e.x+e.w,bottom:e.y+e.h}},s=function(e){t.each(e.contextToolbars,function(e){e.panel&&e.panel.hide()})},l=function(e,t){e.moveTo(t.left,t.top)},c=function(e,n,r){n=n?n.substr(0,2):"",t.each({t:"down",b:"up"},function(t,i){e.classes.toggle("arrow-"+t,r(i,n.substr(0,1)))}),t.each({l:"left",r:"right"},function(t,i){e.classes.toggle("arrow-"+t,r(i,n.substr(1,1)))})},u=function(e,t,n,r,i,o){return o=a({x:t,y:n,w:o.w,h:o.h}),e&&(o=e({elementRect:a(r),contentAreaRect:a(i),panelRect:o})),o},d=function(a){var d,f=a.settings,p=function(){return a.contextToolbars||[]},m=function(t){var n,r,i;return n=e.getPos(a.getContentAreaContainer()),r=a.dom.getRect(t),i=a.dom.getRoot(),"BODY"===i.nodeName&&(r.x-=i.ownerDocument.documentElement.scrollLeft||i.scrollLeft,r.y-=i.ownerDocument.documentElement.scrollTop||i.scrollTop),r.x+=n.x,r.y+=n.y,r},g=function(t,n){var r,i,d,p,g,h,v,b,y=f.inline_toolbar_position_handler;if(!a.removed){if(!t||!t.toolbar.panel)return void s(a);v=["bc-tc","tc-bc","tl-bl","bl-tl","tr-br","br-tr"],g=t.toolbar.panel,n&&g.show(),d=m(t.element),i=e.getRect(g.getEl()),p=e.getRect(a.getContentAreaContainer()||a.getBody()),b=25,"inline"!==e.getStyle(t.element,"display",!0)&&(d.w=t.element.clientWidth,d.h=t.element.clientHeight),a.inline||(p.w=a.getDoc().documentElement.offsetWidth),a.selection.controlSelection.isResizable(t.element)&&d.w<b&&(d=o.inflate(d,0,8)),r=o.findBestRelativePosition(i,d,p,v),d=o.clamp(d,p),r?(h=o.relativePosition(i,d,r),l(g,u(y,h.x,h.y,d,p,i))):(p.h+=i.h,d=o.intersect(p,d),d?(r=o.findBestRelativePosition(i,d,p,["bc-tc","bl-tl","br-tr"]),r?(h=o.relativePosition(i,d,r),l(g,u(y,h.x,h.y,d,p,i))):l(g,u(y,d.x,d.y,d,p,i))):g.hide()),c(g,r,function(e,t){return e===t})}},h=function(e){return function(){var t=function(){a.selection&&g(x(a.selection.getNode()),e)};n.requestAnimationFrame(t)}},v=function(){d||(d=a.selection.getScrollContainer()||a.getWin(),e.bind(d,"scroll",h(!0)),a.on("remove",function(){e.unbind(d,"scroll")}))},b=function(e){var t;return e.toolbar.panel?(e.toolbar.panel.show(),void g(e)):(v(),t=i.create({type:"floatpanel",role:"dialog",classes:"tinymce tinymce-inline arrow",ariaLabel:"Inline toolbar",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!0,border:1,items:r.createToolbar(a,e.toolbar.items),oncancel:function(){a.focus()}}),e.toolbar.panel=t,t.renderTo(document.body).reflow(),void g(e))},y=function(){t.each(p(),function(e){e.panel&&e.panel.hide()})},x=function(e){var t,n,r,i=p();for(r=a.$(e).parents().add(e),t=r.length-1;t>=0;t--)for(n=i.length-1;n>=0;n--)if(i[n].predicate(r[t]))return{toolbar:i[n],element:r[t]};return null};a.on("click keyup setContent ObjectResized",function(e){("setcontent"!==e.type||e.selection)&&n.setEditorTimeout(a,function(){var e;e=x(a.selection.getNode()),e?(y(),b(e)):y()})}),a.on("blur hide contextmenu",y),a.on("ObjectResizeStart",function(){var e=x(a.selection.getNode());e&&e.toolbar.panel&&e.toolbar.panel.hide()}),a.on("ResizeEditor ResizeWindow",h(!0)),a.on("nodeChange",h(!1)),a.on("remove",function(){t.each(p(),function(e){e.panel&&e.panel.remove()}),a.contextToolbars={}}),a.shortcuts.add("ctrl+shift+e > ctrl+shift+p","",function(){var e=x(a.selection.getNode());e&&e.toolbar.panel&&e.toolbar.panel.items()[0].focus()})};return{addContextualToolbars:d}}),a("e",[],function(){var e=function(e,t){return function(){var n=e.find(t)[0];n&&n.focus(!0)}},t=function(t,n){t.shortcuts.add("Alt+F9","",e(n,"menubar")),t.shortcuts.add("Alt+F10,F10","",e(n,"toolbar")),t.shortcuts.add("Alt+F11","",e(n,"elementpath")),n.on("cancel",function(){t.focus()})};return{addKeys:t}}),a("f",["8","9","1"],function(e,t,n){var r=function(e){return{element:function(){return e}}},i=function(e,t,n){var i=e.settings[n];i&&i(r(t.getEl("body")))},o=function(t,n,r){e.each(r,function(e){var r=n.items().filter("#"+e.name)[0];r&&r.visible()&&e.name!==t&&(i(e,r,"onhide"),r.visible(!1))})},a=function(e){e.items().each(function(e){e.active(!1)})},s=function(t,n){return e.grep(t,function(e){return e.name===n})[0]},l=function(e,n,r){return function(l){var c=l.control,u=c.parents().filter("panel")[0],d=u.find("#"+n)[0],f=s(r,n);o(n,u,r),a(c.parent()),d&&d.visible()?(i(f,d,"onhide"),d.hide(),c.active(!1)):(d?(d.show(),i(f,d,"onshow")):(d=t.create({type:"container",name:n,layout:"stack",classes:"sidebar-panel",html:""}),u.prepend(d),i(f,d,"onrender"),i(f,d,"onshow")),c.active(!0)),e.fire("ResizeEditor")}},c=function(){return!n.ie||n.ie>=11},u=function(e){return!(!c()||!e.sidebars)&&e.sidebars.length>0},d=function(t){var n=e.map(t.sidebars,function(e){var n=e.settings;return{type:"button",icon:n.icon,image:n.image,tooltip:n.tooltip,onclick:l(t,e.name,t.sidebars)}});return{type:"panel",name:"sidebar",layout:"stack",classes:"sidebar",items:[{type:"toolbar",layout:"stack",classes:"sidebar-toolbar",items:n}]}};return{hasSidebar:u,createSidebar:d}}),a("g",[],function(){var e=function(e){var t=function(){e._skinLoaded=!0,e.fire("SkinLoaded")};return function(){e.initialized?t():e.on("init",t)}};return{fireSkinLoaded:e}}),a("6",["a"],function(e){var t=function(e){return{width:e.clientWidth,height:e.clientHeight}},n=function(n,r,i){var o,a,s,l,c=n.settings;o=n.getContainer(),a=n.getContentAreaContainer().firstChild,s=t(o),l=t(a),null!==r&&(r=Math.max(c.min_width||100,r),r=Math.min(c.max_width||65535,r),e.setStyle(o,"width",r+(s.width-l.width)),e.setStyle(a,"width",r)),i=Math.max(c.min_height||100,i),i=Math.min(c.max_height||65535,i),e.setStyle(a,"height",i),n.fire("ResizeEditor")},r=function(e,t,r){var i=e.getContentAreaContainer();n(e,i.clientWidth+t,i.clientHeight+r)};return{resizeTo:n,resizeBy:r}}),a("4",["8","9","a","b","c","d","e","f","g","6"],function(e,t,n,r,i,o,a,s,l,c){var u=function(e){return function(t){e.find("*").disabled("readonly"===t.mode)}},d=function(e){return{type:"panel",name:"iframe",layout:"stack",classes:"edit-area",border:e,html:""}},f=function(e){return{type:"panel",layout:"stack",classes:"edit-aria-container",border:"1 0 0 0",items:[d("0"),s.createSidebar(e)]}},p=function(e,p,m){var g,h,v,b=e.settings;return m.skinUiCss&&n.styleSheetLoader.load(m.skinUiCss,l.fireSkinLoaded(e)),g=p.panel=t.create({type:"panel",role:"application",classes:"tinymce",style:"visibility: hidden",layout:"stack",border:1,items:[b.menubar===!1?null:{type:"menubar",border:"0 0 1 0",items:i.createMenuButtons(e)},r.createToolbars(e,b.toolbar_items_size),s.hasSidebar(e)?f(e):d("1 0 0 0")]}),b.resize!==!1&&(h={type:"resizehandle",direction:b.resize,onResizeStart:function(){var t=e.getContentAreaContainer().firstChild;v={width:t.clientWidth,height:t.clientHeight}},onResize:function(t){"both"===b.resize?c.resizeTo(e,v.width+t.deltaX,v.height+t.deltaY):c.resizeTo(e,null,v.height+t.deltaY)}}),b.statusbar!==!1&&g.add({type:"panel",name:"statusbar",classes:"statusbar",layout:"flow",border:"1 0 0 0",ariaRoot:!0,items:[{type:"elementpath",editor:e},h]}),e.fire("BeforeRenderUI"),e.on("SwitchMode",u(g)),g.renderBefore(m.targetNode).reflow(),b.readonly&&e.setMode("readonly"),b.width&&n.setStyle(g.getEl(),"width",b.width),e.on("remove",function(){g.remove(),g=null}),a.addKeys(e,g),o.addContextualToolbars(e),{iframeContainer:g.find("#iframe")[0].getEl(),editorContainer:g.getEl()}};return{render:p}}),s("h",tinymce.ui.FloatPanel),a("5",["8","9","a","h","b","c","d","e","g"],function(e,t,n,r,i,o,a,s,l){var c=function(e,c,u){var d,f,p=e.settings;p.fixed_toolbar_container&&(f=n.select(p.fixed_toolbar_container)[0]);var m=function(){if(d&&d.moveRel&&d.visible()&&!d._fixed){var t=e.selection.getScrollContainer(),r=e.getBody(),i=0,o=0;if(t){var a=n.getPos(r),s=n.getPos(t);i=Math.max(0,s.x-a.x),o=Math.max(0,s.y-a.y)}d.fixed(!1).moveRel(r,e.rtl?["tr-br","br-tr"]:["tl-bl","bl-tl","tr-br"]).moveBy(i,o)}},g=function(){d&&(d.show(),m(),n.addClass(e.getBody(),"mce-edit-focus"))},h=function(){d&&(d.hide(),r.hideAll(),n.removeClass(e.getBody(),"mce-edit-focus"))},v=function(){return d?void(d.visible()||g()):(d=c.panel=t.create({type:f?"panel":"floatpanel",role:"application",classes:"tinymce tinymce-inline",layout:"flex",direction:"column",align:"stretch",autohide:!1,autofix:!0,fixed:!!f,border:1,items:[p.menubar===!1?null:{type:"menubar",border:"0 0 1 0",items:o.createMenuButtons(e)},i.createToolbars(e,p.toolbar_items_size)]}),e.fire("BeforeRenderUI"),d.renderTo(f||document.body).reflow(),s.addKeys(e,d),g(),a.addContextualToolbars(e),e.on("nodeChange",m),e.on("activate",g),e.on("deactivate",h),void e.nodeChanged())};return p.content_editable=!0,e.on("focus",function(){u.skinUiCss?n.styleSheetLoader.load(u.skinUiCss,v,v):v()}),e.on("blur hide",h),e.on("remove",function(){d&&(d.remove(),d=null)}),u.skinUiCss&&n.styleSheetLoader.load(u.skinUiCss,l.fireSkinLoaded(e)),{}};return{render:c}}),s("i",tinymce.ui.Throbber),a("7",["i"],function(e){var t=function(t,n){var r;t.on("ProgressState",function(t){r=r||new e(n.panel.getEl("body")),t.state?r.show(t.time):r.hide()})};return{setup:t}}),a("0",["1","2","3","4","5","6","7"],function(e,t,n,r,i,o,a){var s=function(n,o,s){var l=n.settings,c=l.skin!==!1&&(l.skin||"lightgray");if(c){var u=l.skin_url;u=u?n.documentBaseURI.toAbsolute(u):t.baseURL+"/skins/"+c,e.documentMode<=7?s.skinUiCss=u+"/skin.ie7.min.css":s.skinUiCss=u+"/skin.min.css",n.contentCSS.push(u+"/content"+(n.inline?".inline":"")+".min.css")}return a.setup(n,o),l.inline?i.render(n,o,s):r.render(n,o,s)};return n.add("modern",function(e){return{renderUI:function(t){return s(e,this,t)},resizeTo:function(t,n){return o.resizeTo(e,t,n)},resizeBy:function(t,n){return o.resizeBy(e,t,n)}}}),function(){}}),r("0")()}();
