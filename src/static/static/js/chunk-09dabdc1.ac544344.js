(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09dabdc1"],{5328:function(t,e,a){"use strict";var o=a("bcdb"),s=a.n(o);s.a},"7e76":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"apply padding-x-24"},[a("k-search-table",{ref:"st",attrs:{url:"/api/apply/list","search-data":t.search},on:{reset:t.resetSearch}},[a("template",{slot:"searchs"},[a("el-form-item",{attrs:{label:"审核人",prop:"user_name",size:"mini"}},[a("el-input",{staticStyle:{width:"120px"},attrs:{size:"mini"},model:{value:t.search.user_name,callback:function(e){t.$set(t.search,"user_name",e)},expression:"search.user_name"}})],1),a("el-form-item",{attrs:{label:"审核状态"}},[a("el-select",{staticStyle:{width:"120px"},attrs:{clearable:!0,size:"mini"},model:{value:t.search.status,callback:function(e){t.$set(t.search,"status",e)},expression:"search.status"}},t._l(t.status_types,(function(t){return a("el-option",{key:t.k,attrs:{label:t.v,value:t.k}})})),1)],1)],1),a("template",{slot:"columns"},[a("el-table-column",{attrs:{label:"编号",prop:"id",width:"100"}}),a("el-table-column",{attrs:{label:"申请时间",prop:"created_at"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("dateTime")(e.row.created_at)))]}}])}),a("el-table-column",{attrs:{label:"申请类型",prop:"source_type"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s("role"==e.row.source_type?"权限组":"其他"))]}}])}),a("el-table-column",{attrs:{label:"申请说明",prop:"opt_mark"}}),a("el-table-column",{attrs:{label:"审核人",prop:"auditor_name"}}),a("el-table-column",{attrs:{label:"审核状态",prop:"status"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?a("span",[t._v(" 审核中 ")]):2==e.row.status?a("span",{staticClass:"text-success"},[t._v("审核通过")]):3==e.row.status?a("span",{staticClass:"text-warning"},[t._v(" 不通过 ")]):4==e.row.status?a("span",{staticClass:"text-info"},[t._v("撤销申请")]):a("span",{staticClass:"text-info"},[t._v("未知")])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(a){return t.openApplyInfo(e.row,!0)}}},[t._v("查看详情 ")])]}}])})],1)],2),a("dialog-apply",{ref:"applyDialog",on:{refresh:t.refresh}}),a("dialog-apply-info",{ref:"applyInfoDialog",on:{refresh:t.refresh}})],1)},s=[],r=(a("ac1f"),a("841c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:"权限申请",visible:t.isShow,width:"600px"},on:{"update:visible":function(e){t.isShow=e}}},[a("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"120px","label-suffix":":",rules:t.formRule}},[a("el-form-item",{attrs:{label:"申请目标"}},[a("el-select",{attrs:{placeholder:"请选择类型"},model:{value:t.formData.source_type,callback:function(e){t.$set(t.formData,"source_type",e)},expression:"formData.source_type"}},[a("el-option",{attrs:{label:"权限组",value:"role"}}),a("el-option",{attrs:{label:"其他",value:"none"}})],1)],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"role"==t.formData.source_type,expression:"formData.source_type=='role'"}],attrs:{label:"权限组"}},[a("el-select",{attrs:{placeholder:"请选择权限组"},model:{value:t.formData.role_id,callback:function(e){t.$set(t.formData,"role_id",e)},expression:"formData.role_id"}},t._l(t.roleList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}},[a("span",{staticStyle:{float:"left"}},[t._v(t._s(e.name))]),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[t._v(t._s(e.info))])])})),1)],1),a("el-form-item",{attrs:{label:"申请说明",prop:"opt_mark"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入申请理由"},model:{value:t.formData.opt_mark,callback:function(e){t.$set(t.formData,"opt_mark",e)},expression:"formData.opt_mark"}})],1),a("el-form-item",{attrs:{label:"审批人",prop:"auditor"}},[a("k-select",{attrs:{url:"/api/apply/manager/list"},model:{value:t.formData.auditor,callback:function(e){t.$set(t.formData,"auditor",e)},expression:"formData.auditor"}})],1),a("el-form-item",{attrs:{label:"抄送",prop:"copy_to"}},[a("k-select",{attrs:{url:"/api/apply/manager/list",multiple:!0},model:{value:t.formData.copy_to,callback:function(e){t.$set(t.formData,"copy_to",e)},expression:"formData.copy_to"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.hide}},[t._v("取消")]),a("el-button",{attrs:{type:"success",disabled:t.disabled},on:{click:t.onSubmit}},[t._v("保存")])],1)],1)],1)}),l=[],i={data:function(){return{disabled:!1,role:{},isShow:!1,formData:{source_type:"none",source_id:"none"},formRule:{opt_mark:[{required:!0,message:"请输入申请理由"}],auditor:[{required:!0,message:"请选择审批人"}]},roleList:[]}},props:{},watch:{},computed:{},methods:{show:function(){this.isShow=!0},hide:function(t){this.isShow=!1},loadApplyRoleList:function(){var t=this;this.$api.my.myApplyRoleList().then((function(e){t.roleList=e}))},onSubmit:function(){var t=this;this.$refs.form.validate((function(e){if(e){t.disabled=!0;var a=t.formData;"role"==a.source_type&&(a.source_id=a.role_id),t.$api.apply.applyAdd(a).then((function(){t.onSuccess("提交成功"),t.hide(),t.$emit("refresh"),t.disabled=!1}),(function(e){var a="参数错误！";"301"!=e.result&&(a=e.data),t.onError(a),t.disabled=!1}))}}))}},mounted:function(){this.loadApplyRoleList()},components:{}},n=i,c=a("2877"),u=Object(c["a"])(n,r,l,!1,null,null,null),p=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:"申请信息",visible:t.isShow,width:"600px"},on:{"update:visible":function(e){t.isShow=e}}},[a("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"120px","label-suffix":":"}},[a("el-form-item",{attrs:{label:"申请人",prop:"opt_user"}},[t._v(" "+t._s(t.formData.opt_user_name)+" ")]),"role"==t.formData.source_type?a("el-form-item",{attrs:{label:"申请资源"}},[t._v(" "+t._s(t.formData.source_name)+"(权限组) ")]):t._e(),a("el-form-item",{attrs:{label:"申请说明",prop:"opt_mark"}},[t._v(" "+t._s(t.formData.opt_mark)+" ")]),a("el-form-item",{attrs:{label:"审核人",prop:"auditor"}},[t._v(" "+t._s(t.formData.auditor_name)+" ")]),a("el-form-item",{attrs:{label:"审核抄送",prop:"copy_to"}},[t._v(" "+t._s(""==t.copyTo?"无":t.copyTo)+" ")]),a("el-form-item",{attrs:{label:"审核状态",prop:"status"}},[t._v(" "+t._s(t.showStatus())+" ")]),1!=t.formData.status?a("el-form-item",{attrs:{label:"审核说明",prop:"auditor_mark"}},[t._v(" "+t._s(t.formData.auditor_mark)+" ")]):t._e(),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1!=t.formData.status,expression:"formData.status != 1"}],attrs:{label:"审核时间",prop:"auditor_mark"}},[a("span",[t._v(" "+t._s(t._f("dateTime")(t.formData.auditor_time))+" ")])])],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.hide}},[t._v("关闭")])],1)],1)],1)},m=[],d=(a("a15b"),{data:function(){return{status:2,role:{},readonly:!1,copyTo:"",isShow:!1,formData:{},formRule:{opt_mark:[{required:!0,message:"请输入申请理由"}]}}},props:{},watch:{},computed:{},methods:{show:function(t,e){if(this.apply=t,this.formData=t,this.readonly=e||!1,t.copy_to&&t.copy_to.length>0){for(var a=[],o=0;o<t.copy_to.length;o++)a.push(t.copy_to[o].copy_to_name);this.copyTo=a.join(" ")}this.isShow=!0},hide:function(t){this.isShow=!1,this.readonly=!1,this.formData={}},showStatus:function(){var t="未知状态";return this.formData&&(2==this.formData.status?t="已通过":3==this.formData.status?t="未通过":1==this.formData.status?t="审核中":4==this.formData.status&&(t="已撤销")),t},onSubmit:function(){var t=this.formData;t.status=this.status}},mounted:function(){},components:{}}),h=d,_=Object(c["a"])(h,f,m,!1,null,null,null),b=_.exports,v={data:function(){return{search2:{db_type:null},search:{db_type:null},con_states:[{k:"0",v:"全部"},{k:"1",v:"连接中"},{k:"2",v:"连接成功"},{k:"3",v:"连接失败"}],status_types:[{k:"0",v:"全部"},{k:"1",v:"待审核"},{k:"2",v:"已通过"},{k:"3",v:"未通过"}]}},computed:{},props:{},watch:{},methods:{refresh:function(){this.$refs.st.search()},resetSearch:function(){console.log("========resetSearch========="),this.search={}},reload:function(){this.$refs.st.reload()},openApplyInfo:function(t){this.$refs.applyInfoDialog.show(t)},openApply:function(t){this.$refs.applyDialog.show(t)},onSync:function(t){var e=this;2==t.con_state?this.$api.db.refresh(t.id).then((function(t){e.onSuccess(t),e.reload()})):this.onSuccess("请修复连接后再进行操作！")},onReset:function(t){var e=this;this.$api.db.reset(t.id).then((function(){e.onSuccess("重置成功"),e.reload()}),(function(t){}))},onDel:function(t){var e=this;this.$api.db.delete(t.id).then((function(){e.onSuccess("删除成功"),e.reload()}))}},components:{DialogApply:p,DialogApplyInfo:b},mounted:function(){}},y=v,D=(a("5328"),Object(c["a"])(y,o,s,!1,null,null,null));e["default"]=D.exports},a15b:function(t,e,a){"use strict";var o=a("23e7"),s=a("44ad"),r=a("fc6a"),l=a("a640"),i=[].join,n=s!=Object,c=l("join",",");o({target:"Array",proto:!0,forced:n||!c},{join:function(t){return i.call(r(this),void 0===t?",":t)}})},bcdb:function(t,e,a){}}]);