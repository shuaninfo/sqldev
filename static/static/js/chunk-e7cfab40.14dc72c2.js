(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7cfab40"],{"33c5":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"monitor-mysql-key-cache"},[l("k-search-table",{ref:"st",attrs:{url:"/api/monitor/mysql/status","search-data":e.search,page:!1},on:{data:e.onData}},[l("template",{slot:"searchs"}),l("template",{slot:"buttons"},[l("k-time-refresh",{attrs:{time:60},on:{refresh:e.refresh}}),l("span",{staticStyle:{float:"right","font-size":"14px"}},[e._v("最后更新时间: "+e._s(e._f("dateTime")(e.lastTime)))])],1),l("template",{slot:"columns"},[l("el-table-column",{attrs:{label:"数据源"}},[l("el-table-column",{attrs:{label:"名称",prop:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),l("el-table-column",{attrs:{label:"主机",prop:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.host)+":"+e._s(t.row.port))]}}])})],1),l("el-table-column",{attrs:{label:"innodb_buffer_pool"}},[l("el-table-column",{attrs:{label:"instances",prop:"innodb_buffer_pool_instances"}}),l("el-table-column",{attrs:{label:"size",prop:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("kb")(t.row.innodb_buffer_pool_size,"m")))]}}])})],1),l("el-table-column",{attrs:{label:"pages"}},[l("el-table-column",{attrs:{label:"total",prop:"innodb_buffer_pool_pages_total"}}),l("el-table-column",{attrs:{label:"data",prop:"innodb_buffer_pool_pages_data"}}),l("el-table-column",{attrs:{label:"dirty",prop:"innodb_buffer_pool_pages_dirty"}}),l("el-table-column",{attrs:{label:"flushed",prop:"innodb_buffer_pool_pages_flushed"}}),l("el-table-column",{attrs:{label:"free",prop:"innodb_buffer_pool_pages_free"}})],1),l("el-table-column",{attrs:{label:"io"}},[l("el-table-column",{attrs:{label:"capacity",prop:"innodb_io_capacity"}}),l("el-table-column",{attrs:{label:"read_thread",prop:"innodb_read_io_threads"}}),l("el-table-column",{attrs:{label:"write_thread",prop:"innodb_write_io_threads"}})],1),l("el-table-column",{attrs:{label:"innodb_rows"}},[l("el-table-column",{attrs:{label:"read",prop:"innodb_rows_read_persecond"}}),l("el-table-column",{attrs:{label:"insert",prop:"innodb_rows_inserted_persecond"}}),l("el-table-column",{attrs:{label:"update",prop:"innodb_rows_updated_persecond"}}),l("el-table-column",{attrs:{label:"delete",prop:"innodb_rows_deleted_persecond"}})],1)],1)],2)],1)},o=[],n=(l("ac1f"),l("841c"),{data:function(){return{lastTime:null,search:{}}},computed:{},props:{},watch:{},methods:{onData:function(e){e&&e[0]?this.lastTime=e[0].update_at:this.lastTime=null},refresh:function(){this.$refs.st.search()}},components:{}}),r=n,s=(l("5ed9"),l("0c7c")),p=Object(s["a"])(r,a,o,!1,null,null,null);t["default"]=p.exports},"5ed9":function(e,t,l){"use strict";var a=l("7a6b"),o=l.n(a);o.a},"7a6b":function(e,t,l){}}]);