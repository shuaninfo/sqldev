(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29b43a3d"],{"7f66":function(t,e,i){"use strict";var o=i("bc59"),n=i.n(o);n.a},bc59:function(t,e,i){},dd03:function(t,e,i){},e5b2:function(t,e,i){"use strict";var o=i("dd03"),n=i.n(o);n.a},fbca:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"project_app"}},[i("div",{staticClass:"app-content"},[i("div",{staticClass:"app-nav"},[i("app-nav",{attrs:{id:t.id,project:t.formData}})],1),i("div",{staticClass:"app-wrap"},[i("div",{staticClass:"template-tabs"},[t.options.length?i("el-tabs",{attrs:{type:"border-card",closable:""},on:{"tab-click":t.tabClick,"tab-remove":t.tabRemove},model:{value:t.activeIndex,callback:function(e){t.activeIndex=e},expression:"activeIndex"}},t._l(t.options,(function(e){return i("el-tab-pane",{key:e.path,staticStyle:{height:"90%","overflow-y":"auto","overflow-x":"hidden"},attrs:{label:t.getTabName(e.name),name:e.path}})})),1):t._e()],1),i("div",{staticClass:"content-wrap"},[i("router-view")],1)])])])},n=[],a=(i("b0c0"),i("ac1f"),i("5319"),i("b85c")),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-nav-wrap"},[i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"/project_home/"+t.id+"/index",router:"","background-color":"#EFF2F7"}},[i("el-submenu",{attrs:{index:"1"}},[i("template",{slot:"title"},[i("i",{staticClass:"el-icon-menu"}),i("span",[t._v("项目")])]),t._l(t.menus,(function(e){return i("el-menu-item",{key:e.name,attrs:{index:e.path}},[i("i",{class:e.icon}),t._v(t._s(t.getTabName(e.name))+" ")])}))],2)],1)],1)},c=[],r=i("5530"),h=i("2f62"),p={data:function(){return{menus:[],my_menus:[{path:/project_home/+this.id+"/my-work",name:"我的工单",icon:"el-icon-tickets"},{path:/project_home/+this.id+"/my-log",name:"我的日志",icon:"el-icon-s-grid"}]}},props:{id:{}},watch:{project_home:"initMenus"},mounted:function(){this.initMenus(),this.$store.commit("add_tabs",this.menus[0]),this.$store.commit("set_active_index",this.menus[0].path),this.$router.push(this.menus[0])},methods:{initMenus:function(){console.log("======initMenus=====");var t=[{path:/project_home/+this.id+"/index",name:"项目首页",icon:"el-icon-s-home"}];t.push({path:/project_home/+this.id+"/db",name:"项目数据源",icon:"el-icon-coin"}),t.push({path:/project_home/+this.id+"/user",name:"项目成员",icon:"el-icon-s-custom"}),t.push({path:/project_home/+this.id+"/work",name:"项目工单",icon:"el-icon-s-order"}),t.push({path:/project_home/+this.id+"/log",name:"项目日志",icon:"el-icon-s-grid"}),this.project_home&&this.project_home.is_manager&&(t.push({path:/project_home/+this.id+"/apply",name:"项目申请",icon:"el-icon-s-check"}),t.push({path:/project_home/+this.id+"/post",name:"项目公告",icon:"el-icon-document"})),this.menus=t},getTabName:function(t){return t?t.replace("项目",""):t}},computed:Object(r["a"])(Object(r["a"])({},Object(h["c"])(["project_home","project"])),{},{options:function(){return this.$store.state.options}})},m=p,u=(i("e5b2"),i("2877")),l=Object(u["a"])(m,s,c,!1,null,"506f05ca",null),d=l.exports,f={data:function(){return{isShow:!1,expire_flag:!0,expire_time:null,projects:[],id:this.$route.params.id,formData:{name:""}}},components:{AppNav:d},methods:{getTabName:function(t){return t?t.replace("项目",""):t},init:function(){var t=this;this.$api.project.info(this.id,1).then((function(e){t.formData=e,e.post="",t.$store.commit("project_home",e)}))},tabClick:function(t){var e=this.activeIndex;this.$router.push({path:e})},tabRemove:function(t){console.log("targetName:",t);var e="/project_home/"+this.id+"/index";t!=e&&(this.$store.commit("delete_tabs",t),this.activeIndex===t&&(this.options&&this.options.length>=1?(this.$store.commit("set_active_index",this.options[this.options.length-1].route),this.$router.push({path:this.activeIndex})):this.$router.push({path:e})))}},mounted:function(){this.init()},computed:{options:function(){return this.$store.state.options},activeIndex:{get:function(){return this.$store.state.activeIndex},set:function(t){this.$store.commit("set_active_index",t)}}},watch:{$route:function(t){var e,i=!1,o=Object(a["a"])(this.options);try{for(o.s();!(e=o.n()).done;){var n=e.value;if(console.log("option.name:",n.name," to :",t.name,"path:",t.path),n.name===t.name){i=!0,this.$store.commit("set_active_index",t.path);break}}}catch(s){o.e(s)}finally{o.f()}i||(this.$store.commit("add_tabs",t),this.$store.commit("set_active_index",t.path))}}},v=f,_=(i("7f66"),Object(u["a"])(v,o,n,!1,null,"2473d65b",null));e["default"]=_.exports}}]);