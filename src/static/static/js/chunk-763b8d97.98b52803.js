(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-763b8d97"],{"21dc":function(e,t,a){"use strict";var r=a("7f14"),s=a.n(r);s.a},3298:function(e,t,a){"use strict";a.r(t);var r,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"database "},[a("k-search-table",{ref:"st",attrs:{url:"/api/my/log/list","search-data":e.searchAdvance},on:{reset:e.resetSearch}},[a("template",{slot:"searchs"},[a("el-form-item",{attrs:{label:"时间范围:"}},[a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["00:00:00","23:59:59"],"picker-options":e.$constant.pickOptions},model:{value:e.search.dateRange,callback:function(t){e.$set(e.search,"dateRange",t)},expression:"search.dateRange"}})],1),a("el-form-item",{attrs:{prop:"opt_user",label:"数据库"}},[a("el-input",{attrs:{placeholder:"数据库名称",clearable:""},model:{value:e.search.owner,callback:function(t){e.$set(e.search,"owner",t)},expression:"search.owner"}})],1),a("el-form-item",{attrs:{label:"类型:"}},[a("el-select",{attrs:{clearable:!0},model:{value:e.search.type,callback:function(t){e.$set(e.search,"type",t)},expression:"search.type"}},e._l(e.types,(function(e){return a("el-option",{key:e.k,attrs:{label:e.v,value:e.k}})})),1)],1),a("el-form-item",{attrs:{label:"执行状态:"}},[a("el-select",{attrs:{clearable:!0},model:{value:e.search.state,callback:function(t){e.$set(e.search,"state",t)},expression:"search.state"}},e._l(e.states,(function(e){return a("el-option",{key:e.k,attrs:{label:e.v,value:e.k}})})),1)],1),a("el-form-item",{attrs:{prop:"script",label:"脚本"}},[a("el-input",{attrs:{placeholder:"请输入脚本",clearable:""},model:{value:e.search.script,callback:function(t){e.$set(e.search,"script",t)},expression:"search.script"}})],1),a("el-form-item",{attrs:{label:"排序规则:"}},[a("el-select",{attrs:{clearable:!0},model:{value:e.search.order_by,callback:function(t){e.$set(e.search,"order_by",t)},expression:"search.order_by"}},e._l(e.orderbys,(function(e){return a("el-option",{key:e.k,attrs:{label:e.v,value:e.k}})})),1)],1)],1),a("template",{slot:"columns"},[a("el-table-column",{attrs:{prop:"db_type",label:"库类型",width:"80"}}),a("el-table-column",{attrs:{prop:"db_name",label:"数据库",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.db_name)+"【"+e._s(t.row.owner)+"】 ")]}}])}),a("el-table-column",{attrs:{prop:"start_time",label:"开始时间",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("dateTime")(t.row.start_time))+" ")]}}])}),a("el-table-column",{attrs:{prop:"end_time",label:"结束时间",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("dateTime")(t.row.end_time))+" ")]}}])}),a("el-table-column",{attrs:{label:"耗时(ms)",prop:"exec_time",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("showTime")(t.row.exec_time))+" ")]}}])}),a("el-table-column",{attrs:{prop:"ip",label:"ip",width:"80"}}),a("el-table-column",{attrs:{label:"状态",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.state?a("span",{staticClass:"text-info"},[e._v("成功")]):0==t.row.state?a("span",{staticClass:"text-info"},[e._v("查询中")]):a("el-tooltip",{attrs:{content:t.row.result,placement:"bottom",effect:"light"}},[a("span",{staticClass:"text-warn"},[e._v("失败")])])]}}])}),a("el-table-column",{attrs:{label:"行数",width:"80",prop:"data_count"}}),a("el-table-column",{attrs:{label:"类型",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.toType(t.row.type))+" ")]}}])}),a("el-table-column",{attrs:{prop:"script",label:"脚本"}})],1)],2),a("dialog-detail",{ref:"detailDialog",on:{refresh:e.refresh}}),a("dialog-backup",{ref:"backupDialog"})],1)},l=[],o=(a("ac1f"),a("841c"),a("ade3")),n=a("5530"),c=a("c58e"),i=a("d170"),d=a("c1df"),u=a.n(d),p={data:function(){return{dateRange:[u()().startOf("d").toDate(),u()().endOf("d").toDate()],states:[{k:0,v:"全部"},{k:1,v:"成功"},{k:2,v:"失败"}],orderbys:[{k:0,v:"按执行时间倒序(默认)"},{k:1,v:"按执行时间顺序"},{k:2,v:"按耗时由高到低"},{k:3,v:"按行数由多到少"}],types:[{k:0,v:"全部"},{k:1,v:"异步"},{k:2,v:"导出文件"},{k:3,v:"导出SQL"},{k:11,v:"查询"},{k:12,v:"更新"},{k:13,v:"插入"},{k:14,v:"删除"},{k:15,v:"管理"},{k:99,v:"其他"}],formData:{name:""},id:this.$route.params.id,search2:{db_type:null,project:this.$route.params.id},search:{project:this.$route.params.id,ip:"",script:"",user_name:"",user:0,owner:"",type:0,order_by:0,db_id:null,dateRange:[u()().startOf("d").toDate(),u()().endOf("d").toDate()]}}},computed:{searchAdvance:function(){var e=Object(n["a"])({},this.search);return e.dateRange&&(e.start=u()(e.dateRange[0]).format("YYYY-MM-DD HH:mm:ss"),e.end=u()(e.dateRange[1]).format("YYYY-MM-DD HH:mm:ss"),delete e.dateRange),e}},props:{},watch:{},methods:(r={resetSearch:function(){console.log("========resetSearch========="),this.search={project:this.id,ip:"",script:"",user_name:"",owner:"",type:0,order_by:0,db_id:null,dateRange:[u()().startOf("d").toDate(),u()().endOf("d").toDate()]}},toType:function(e,t){return 1==e?"异步":2==e?"导出":11==e?"查询":12==e?"更新":13==e?"插入":14==e?"删除":15==e?"管理":"其他"},toState:function(e){return 1==e?"成功":2==e?"失败":0==e?"执行中":"不明"},refresh:function(){this.$refs.st.search()}},Object(o["a"])(r,"resetSearch",(function(){console.log("========resetSearch========="),this.search={}})),Object(o["a"])(r,"reload",(function(){this.$refs.st.reload()})),Object(o["a"])(r,"init",(function(){var e=this;this.$api.project.info(this.id,1).then((function(t){e.formData=t}))})),r),components:{DialogDetail:c["a"],DialogBackup:i["a"]},mounted:function(){}},f=p,h=(a("21dc"),a("2877")),b=Object(h["a"])(f,s,l,!1,null,null,null);t["default"]=b.exports},"7f14":function(e,t,a){}}]);