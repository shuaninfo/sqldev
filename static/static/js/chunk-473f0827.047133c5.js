(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-473f0827"],{db88:function(e,t,n){},e651:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("k-search-table",{ref:"st",attrs:{url:"/api/ssh/log/page","search-data":e.searchAdvance},on:{reset:e.resetSearch}},[n("template",{slot:"searchs"},[n("el-form-item",{attrs:{label:"时间范围:"}},[n("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["00:00:00","23:59:59"],"picker-options":e.$constant.pickOptions},model:{value:e.search.dateRange,callback:function(t){e.$set(e.search,"dateRange",t)},expression:"search.dateRange"}})],1),n("el-form-item",{attrs:{label:"来访ip",prop:"client_ip"}},[n("el-input",{model:{value:e.search.client_ip,callback:function(t){e.$set(e.search,"client_ip",t)},expression:"search.client_ip"}})],1)],1),n("template",{slot:"columns"},[n("el-table-column",{attrs:{prop:"machine_id",label:"主机id"}}),n("el-table-column",{attrs:{prop:"machine_name",label:"主机名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.machine_name?t.row.machine_name:"主机信息已删除")+" ")]}}])}),n("el-table-column",{attrs:{prop:"user_id",label:"用户id"}}),n("el-table-column",{attrs:{prop:"client_ip",label:"来访ip"}}),n("el-table-column",{attrs:{prop:"started_at",label:"开始时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("dateTime")(t.row.started_at))+" ")]}}])}),n("el-table-column",{attrs:{prop:"end_at",label:"结束时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("dateTime")(t.row.end_at))+" ")]}}])}),n("el-table-column",{attrs:{label:"会话时长"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{domProps:{textContent:e._s(e.sessionDuration(t.row))}})]}}])}),n("el-table-column",{attrs:{label:"审计状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{domProps:{textContent:e._s(e.showStatus(t.row.status))}})]}}])}),n("el-table-column",{attrs:{label:"是否编辑文件"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{domProps:{textContent:e._s(t.row.has_editor?"是":"否")}})]}}])}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{title:"open terminal",type:"primary",size:"mini"},on:{click:function(n){return e.onViewTermLog(t.row)}}},[e._v("日志详情 ")])]}}])})],1)],2),n("dialog-term-log",{ref:"logDialog"})],1)},a=[],i=(n("ac1f"),n("841c"),n("1276"),n("5530")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{visible:e.isShow,title:e.termTitle,center:"",modal:!1,"destroy-on-close":!0,fullscreen:"","custom-class":"felix-dialog"},on:{"update:visible":function(t){e.isShow=t},opened:e.doOpened,open:e.doOpen,close:e.doClose}},[n("div",{ref:"terminal",staticClass:"felix-xterm"})])},r=[],l=(n("99af"),n("fcf3")),c=n("47d02"),u=n("d1f9"),d=n("408b"),h=(n("db88"),new c["FitAddon"]),f=new d["WebLinksAddon"],m=new u["SearchAddon"],p={name:"CompTerm",data:function(){return{log:{},id:"",isFullScreen:!1,searchKey:"",isShow:!1,ws:null,term:null,fitAddon:null,termTitle:"网页终端日志"}},watch:{visible:function(e){this.v=e}},computed:{},methods:{reset:function(){this.ws=null,this.term=null},show:function(e){this.log=e,this.isShow=!0,this.termTitle="网页终端日志:".concat(e.started_at," - ").concat(e.created_at)},onWindowResize:function(){console.log("resize"),h.fit()},doLink:function(e,t){"click"===e.type&&window.open(t)},doClose:function(){window.removeEventListener("resize",this.onWindowResize),this.ws&&this.ws.close(),this.term&&this.term.dispose(),this.id="",this.$emit("afterClose")},doOpen:function(){},doOpened:function(){this.term=new l["Terminal"]({disableStdin:!0,rows:60,fontSize:12,convertEol:!0,cursorBlink:!1,bellStyle:"sound"}),this.term.loadAddon(h),this.term.loadAddon(f),this.term.loadAddon(m),this.term.open(this.$refs.terminal),h.fit(),this.term.clear();var e=this.log.log;this.term.write(e)}}},g=p,_=n("2877"),b=Object(_["a"])(g,o,r,!1,null,null,null),w=b.exports,k=n("c1df"),v=n.n(k),S={components:{DialogTermLog:w},name:"ViewSshLog",data:function(){return{search:{client_ip:"",start:"",end:"",dateRange:[v()().startOf("d").toDate(),v()().endOf("d").toDate()]},form:{log:""},range:[],q:{client_ip:""},termVisible:!1,formTitle:"机器添加",total:0,page:1,size:10,tableData:[]}},computed:{user:function(){return this.$store.state.user},email:function(){return this.$store.getters.userEmail},isAdmin:function(){return this.$store.getters.userIsAdmin},user_id:function(){return parseInt(this.$route.query.user_id)||0},machine_id:function(){return parseInt(this.$route.query.machine_id)||0},searchAdvance:function(){var e=Object(i["a"])({},this.search);return e.dateRange&&(e.start=v()(e.dateRange[0]).format("YYYY-MM-DD HH:mm:ss"),e.end=v()(e.dateRange[1]).format("YYYY-MM-DD HH:mm:ss"),delete e.dateRange),e}},mounted:function(){},created:function(){},methods:{onDel:function(e){var t=this;this.$api.ssh.deleteLog({id:e}).then((function(){t.refresh()}))},onViewTermLog:function(e){this.$refs.logDialog.show(e)},resetSearch:function(){console.log("========resetSearch========="),this.search={}},refresh:function(){this.$refs.st.search()},showStatus:function(e){console.log("status:",e);var t="未标记";switch(e){case 1:t="失败";break;case 2:t="正常";break;case 4:t="警告";break;case 8:t="危险";break;case 16:t="致命";break;case 32:t="Editor";break}return t},sessionDuration:function(e){var t=Date.parse(e.started_at),n=Date.parse(e.end_at),s=n-t;return"".concat(Math.round(s/1e3),"s")},countLogLineCount:function(e){return e.log.split("\n").length},doCreate:function(){this.form={id:0,cate:2,ssh_port:22},this.formTitle=this.$t("machineAddTitle")},pageChange:function(e){this.page=e,this.fetchAllSshLog()},sizeChange:function(e){this.page=1,this.size=e,this.fetchAllSshLog()},fetchAllSshLog:function(){var e=this,t=this.q;2===this.range.length&&(t.from_time=this.range[0],t.to_time=this.range[1]),t.page=this.page,t.size=this.size,t.user_id=this.user_id,t.machine_id=this.machine_id,this.$http.get("/api/ssh-log",{params:t}).then((function(t){t&&(e.total=t.total,e.size=t.size,e.page=t.page,e.tableData=t.data)}))},doDelete:function(e){var t=this;this.$http.delete("/api/ssh-log/".concat(e.id)).then((function(e){e&&(t.fetchAllSshLog(),t.$message.success(e.msg))}))}}},$=S,D=Object(_["a"])($,s,a,!1,null,"4c9b47fd",null);t["default"]=D.exports}}]);