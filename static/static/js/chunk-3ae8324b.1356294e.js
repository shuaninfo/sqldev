(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ae8324b"],{3431:function(e,t,a){},"36bf":function(e,t,a){"use strict";var r=a("3431"),s=a.n(r);s.a},"93d2":function(e,t,a){"use strict";a.r(t);var r,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-funs-log padding-x-24"},[a("k-search-table",{ref:"st",attrs:{url:"/api/project/log/page","search-data":e.searchAdvance},on:{reset:e.resetSearch}},[a("template",{slot:"searchs"},[a("el-form-item",{attrs:{label:"时间范围:"}},[a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["00:00:00","23:59:59"],"picker-options":e.$constant.pickOptions},model:{value:e.search.dateRange,callback:function(t){e.$set(e.search,"dateRange",t)},expression:"search.dateRange"}})],1),a("el-form-item",{attrs:{prop:"owner",label:"数据库"}},[a("el-input",{attrs:{placeholder:"数据库名称",clearable:""},model:{value:e.search.owner,callback:function(t){e.$set(e.search,"owner",t)},expression:"search.owner"}})],1),a("el-form-item",{attrs:{label:"类型:"}},[a("el-select",{attrs:{clearable:!0},model:{value:e.search.type,callback:function(t){e.$set(e.search,"type",t)},expression:"search.type"}},e._l(e.types,(function(e){return a("el-option",{key:e.k,attrs:{label:e.v,value:e.k}})})),1)],1),a("el-form-item",{attrs:{label:"执行状态:"}},[a("el-select",{attrs:{clearable:!0},model:{value:e.search.state,callback:function(t){e.$set(e.search,"state",t)},expression:"search.state"}},e._l(e.states,(function(e){return a("el-option",{key:e.k,attrs:{label:e.v,value:e.k}})})),1)],1),e.project_home.is_manager?a("el-form-item",{attrs:{prop:"opt_user",label:"操作人"}},[a("el-input",{attrs:{placeholder:"请选择操作人",clearable:""},model:{value:e.search.user_name,callback:function(t){e.$set(e.search,"user_name",t)},expression:"search.user_name"}})],1):e._e(),a("el-form-item",{attrs:{prop:"script",label:"脚本"}},[a("el-input",{attrs:{placeholder:"请输入脚本",clearable:""},model:{value:e.search.script,callback:function(t){e.$set(e.search,"script",t)},expression:"search.script"}})],1),a("el-form-item",{attrs:{label:"排序规则:"}},[a("el-select",{attrs:{clearable:!0},model:{value:e.search.order_by,callback:function(t){e.$set(e.search,"order_by",t)},expression:"search.order_by"}},e._l(e.orderbys,(function(e){return a("el-option",{key:e.k,attrs:{label:e.v,value:e.k}})})),1)],1)],1),a("template",{slot:"columns"},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"开始时间"}},[a("span",[e._v(e._s(e._f("dateTime")(t.row.start_time)))])]),a("el-form-item",{attrs:{label:"结束时间"}},[a("span",[e._v(e._s(e._f("dateTime")(t.row.end_time)))])]),a("el-form-item",{staticClass:"row",attrs:{label:"数据库"}},[a("span",[e._v(e._s(t.row.db_name)+"【"+e._s(t.row.owner)+"】")])]),a("el-form-item",{attrs:{label:"IP"}},[a("span",[e._v(e._s(t.row.ip))])]),a("el-form-item",{attrs:{label:"行数"}},[a("span",[e._v(e._s(t.row.data_count))])])],1),a("el-form",{staticClass:"demo-sql-expand",attrs:{"label-position":"left"}},[a("el-form-item",{attrs:{label:"SQL"}},[a("pre",[e._v(e._s(t.row.script))])])],1)]}}])}),a("el-table-column",{attrs:{prop:"user_name",label:"操作人",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{attrs:{placement:"top",content:t.row.user_name}},[a("el-button",{attrs:{type:"text"}},[e._v(" "+e._s(t.row.user_name)+"("+e._s(t.row.real_name)+") ")])],1)]}}])}),a("el-table-column",{attrs:{prop:"db_type",label:"库类型",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.quickSearch("type",t.row.db_type)}}},[e._v(e._s(t.row.db_type)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"db_name",label:"数据库",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"nowrap-sricpt",attrs:{title:t.row.db_name+"【"+t.row.owner+"】"}},[e._v(" "+e._s(t.row.db_name)+"【"+e._s(t.row.owner)+"】 ")])]}}])}),a("el-table-column",{attrs:{prop:"start_time",label:"开始时间",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("dateTime")(t.row.start_time))+" ")]}}])}),a("el-table-column",{attrs:{label:"耗时(ms)",prop:"exec_time",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("showTime")(t.row.exec_time))+" ")]}}])}),a("el-table-column",{attrs:{label:"状态",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.state?a("span",{staticClass:"text-info"},[e._v("成功")]):0==t.row.state?a("span",{staticClass:"text-info"},[e._v("查询中")]):a("el-tooltip",{attrs:{content:t.row.result,placement:"bottom",effect:"light"}},[a("span",{staticClass:"text-warn"},[e._v("失败")])])]}}])}),a("el-table-column",{attrs:{label:"类型",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.toType(t.row.type))+" ")]}}])}),a("el-table-column",{attrs:{label:"脚本","min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"nowrap-sricpt"},[e._v(e._s(t.row.script))])]}}])})],1)],2),a("dialog-detail",{ref:"detailDialog",on:{refresh:e.refresh}}),a("dialog-backup",{ref:"backupDialog"}),a("div",{staticStyle:{height:"140px"}})],1)},l=[],n=(a("ac1f"),a("841c"),a("ade3")),o=a("5530"),c=a("2f62"),i=a("c58e"),p=a("d170"),u=a("c1df"),d=a.n(u),f={data:function(){return{formData:{name:""},id:this.$route.params.id,search:{project:this.$route.params.id,ip:"",script:"",user_name:"",user:0,owner:"",type:0,order_by:0,db_id:null,dateRange:[d()().startOf("d").toDate(),d()().endOf("d").toDate()]},instances:[],states:[{k:0,v:"全部"},{k:1,v:"成功"},{k:2,v:"失败"}],orderbys:[{k:0,v:"按执行时间倒序(默认)"},{k:1,v:"按执行时间顺序"},{k:2,v:"按耗时由高到低"},{k:3,v:"按行数由多到少"}],types:[{k:0,v:"全部"},{k:1,v:"异步"},{k:2,v:"导出文件"},{k:3,v:"导出SQL"},{k:11,v:"查询"},{k:12,v:"更新"},{k:13,v:"插入"},{k:14,v:"删除"},{k:15,v:"管理"},{k:99,v:"其他"}]}},computed:Object(o["a"])(Object(o["a"])({},Object(c["c"])(["user","project_home"])),{},{searchAdvance:function(){var e=Object(o["a"])({},this.search);return e.dateRange&&(e.start=d()(e.dateRange[0]).format("YYYY-MM-DD HH:mm:ss"),e.end=d()(e.dateRange[1]).format("YYYY-MM-DD HH:mm:ss"),delete e.dateRange),e}}),props:{},watch:{},methods:(r={resetSearch:function(){this.search={project:this.id,ip:"",script:"",user_name:"",owner:"",type:0,order_by:0,db_id:null,dateRange:[d()().startOf("d").toDate(),d()().endOf("d").toDate()]}},quickSearch:function(e,t){this.search[e]=t,this.$refs.st.search()}},Object(n["a"])(r,"resetSearch",(function(){console.log("========resetSearch========="),this.search={projects:[],ip:"",script:"",user_name:"",user:0,owner:"",type:0,order_by:0,db_id:null,dateRange:[d()().startOf("d").toDate(),d()().endOf("d").toDate()]}})),Object(n["a"])(r,"refresh",(function(){this.$refs.st.search()})),Object(n["a"])(r,"toType",(function(e,t){return 1==e?"异步":2==e?"导出":11==e?"查询":12==e?"更新":13==e?"插入":14==e?"删除":15==e?"管理":"其他"})),Object(n["a"])(r,"toState",(function(e){return 1==e?"成功":2==e?"失败":0==e?"执行中":"不明"})),Object(n["a"])(r,"onDel",(function(e){var t=this;this.$api.db.delete(e.id).then((function(){t.onSuccess("删除成功"),t.reload()}))})),r),components:{DialogDetail:i["a"],DialogBackup:p["a"]},mounted:function(){}},m=f,b=(a("36bf"),a("2877")),_=Object(b["a"])(m,s,l,!1,null,null,null);t["default"]=_.exports}}]);