(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f7cdbc4"],{1930:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:"加入项目",visible:t.isShow,width:"600px"},on:{"update:visible":function(e){t.isShow=e}}},[a("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"120px","label-suffix":":",rules:t.formRule}},[a("el-form-item",{attrs:{label:"项目"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formData.source_id,callback:function(e){t.$set(t.formData,"source_id",e)},expression:"formData.source_id"}},t._l(t.projectList,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id,disabled:t.in_flag>0}})})),1)],1),a("el-form-item",{attrs:{label:"申请理由",prop:"opt_mark"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入申请理由"},model:{value:t.formData.opt_mark,callback:function(e){t.$set(t.formData,"opt_mark",e)},expression:"formData.opt_mark"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.hide}},[t._v("取消")]),a("el-button",{attrs:{type:"success"},on:{click:t.onSubmit}},[t._v("保存")])],1)],1)],1)},s=[],o={data:function(){return{project_id:0,isShow:!1,projectList:[],managerList:[],formData:{source_id:"",auditor:"",opt_mark:"",source_type:"project"},formRule:{project_id:[{required:!0,message:"请选择项目"}]}}},props:{},watch:{"formData.source_id":function(t){this.formData.auditor=t}},computed:{},methods:{show:function(t){var e=this;this.formData={source_id:"",auditor:"",opt_mark:"",source_type:"project"},t&&(this.formData.source_id=t,this.formData.auditor=t),this.$api.my.myApplyProjectList().then((function(t){e.projectList=t})),this.isShow=!0},hide:function(){this.formData={source_id:"",auditor:"",opt_mark:"",source_type:"project"},this.projectList=[],this.isShow=!1},loadManagerList:function(t){var e=this;t?this.$api.project.managerList(t).then((function(t){e.managerList=t})):this.managerList=[]},onSubmit:function(){var t=this;this.$refs.form.validate((function(e){if(e){var a=t.formData;t.$api.apply.applyAdd(a).then((function(){t.onSuccess("提交成功"),t.hide(),t.$emit("refresh")}),(function(e){var a="参数错误！";"301"!=e.result&&(a=e.data),t.onError(a)}))}}))}},mounted:function(){},components:{}},r=o,n=a("0c7c"),l=Object(n["a"])(r,i,s,!1,null,null,null);e["a"]=l.exports},2211:function(t,e,a){},a94a:function(t,e,a){"use strict";var i=a("2211"),s=a.n(i);s.a},ed52:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"apps"},[a("div",{staticClass:"el-col el-col-8 el-col-xs-12",staticStyle:{"padding-left":"6px","padding-right":"6px"}},[a("div",{staticClass:"demo-color-box bg-info"},[a("img",{staticStyle:{width:"50px",height:"50px",float:"left",display:"block","margin-right":"10px"},attrs:{src:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",fit:"fill"}}),a("div",[t._v(" 欢迎您，"+t._s(t.user.name)+" "),a("div",{staticClass:"value"},[t._v("上次登录时间:"+t._s(t._f("dateTime")(t.user.last_time)))])])])]),a("div",{staticClass:"el-col el-col-8 el-col-xs-12",staticStyle:{"padding-left":"6px","padding-right":"6px"}},[a("div",{staticClass:"demo-color-box bg-danger"},[t._v(" 今日访问数 "),a("div",{staticClass:"value"},[t._v(t._s(t.stat.today_count))])])]),a("div",{staticClass:"el-col el-col-8 el-col-xs-12",staticStyle:{"padding-left":"6px","padding-right":"6px"}},[a("div",{staticClass:"demo-color-box bg-warning"},[t._v(" 执行失败数 "),a("div",{staticClass:"value"},[t._v(t._s(t.stat.fail_count))])])]),a("el-row",{attrs:{gutter:0}},[a("el-col",{directives:[{name:"show",rawName:"v-show",value:!t.isCommunity,expression:"!isCommunity"}],staticClass:"chart",attrs:{span:12}},[a("el-card",{staticClass:"box-card pro_man"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("项目广场")])]),a("div",{staticStyle:{"min-height":"350px","max-height":"350px","overflow-y":"scroll"}},[a("div",{staticClass:"pro_man_list no-user-select"},[t._l(t.projectList,(function(e,i){return[""!=e.in_flag&&t.project&&e.id==t.project.id?a("div",{key:i,staticClass:"pointer proj-item in-proj current-proj",attrs:{title:e.name},on:{click:function(a){return t.goProjectHome(e)}}},[a("span",[t._v(t._s(e.name))]),a("i",{staticClass:"sn-font"},[t._v("")])]):""!=e.in_flag?a("div",{key:i,staticClass:"pointer proj-item in-proj",attrs:{title:e.name},on:{click:function(a){return t.goProjectHome(e)}}},[a("span",[t._v(t._s(e.name))])]):a("div",{key:i,staticClass:"pointer proj-item",attrs:{title:"申请加入"},on:{click:function(a){return t.onAddProject(e.id)}}},[a("span",[t._v(t._s(e.name))])])]}))],2)])])],1),a("el-col",{staticClass:"chart",attrs:{span:t.isCommunity?24:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("一周访问量")])]),a("div",[a("ve-line",t._b({attrs:{data:t.logTimeStat,title:t.logTimeTitle}},"ve-line",t.pubSetting1,!1))],1)])],1)],1),a("dialog-project-apply",{ref:"dialogProjectApply",on:{refresh:t.init}})],1)},s=[],o=(a("b0c0"),a("b85c")),r=a("5530"),n=a("5743"),l=a("2f62"),c=a("1930"),u=a("2819"),d={computed:Object(r["a"])({},Object(l["c"])(["user","project"])),data:function(){return{isCommunity:!1,projectList:[],query:{start:"",end:"",start2:"",end2:""},stat:{db_count:0,app_count:0,user_count:0,today_count:0,fail_count:0},dbTypeStat:{columns:["类型","数量"],rows:[]},dbTypeTitle:{text:"数据源类型"},typeTitle:{text:"当日执行类型统计",default:10},logTimeTitle:{text:""},logStat:{columns:["类型","数量"],rows:[]},logTitle:{text:"当日失败率统计"},logTimeStat:{columns:["时间","访问量"],rows:[]},dbStat:{columns:["数据源","访问量"],rows:[]},dbTitle:{text:"当日数据库使用量"},dbStatSettings:{dataOrder:{label:"访问量",order:"desc"}},exportStat:{columns:["应用","访问量"],rows:[]},appTitle:{text:"当日数据导出量"},userStat:{columns:["用户名","访问量"],rows:[]},typeStat:{columns:["操作","数量"],rows:[]},userTitle:{text:"当日用户访问量"},appStatSettings:{dataOrder:{label:"访问量",order:"desc"}},pubSetting1:{height:"350px",width:"100%"},pubSetting:{height:"400px",width:"100%"},chartData1:{columns:["数据源","次数"],rows:[{"次数":1393,"数据源":"查询库"},{"次数":3530,"数据源":"用户中心"},{"次数":2923,"数据源":"订单库"},{"次数":1723,"数据源":"淘宝api"},{"次数":3792,"数据源":"日志"},{"次数":4593,"数据源":"eslog"}]},chartData:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]}}},methods:{getTagType:function(t){return t?"success":"info"},goProjectHome:function(t){this.$router.push({path:"/project_home?id="+t.id})},onAddProject:function(t){this.$refs.dialogProjectApply.show(t)},init:function(){var t=this;this.$api.project.publicList().then((function(e){t.projectList=e})),this.$api.post("/api/user/stat",{type:"total_stat",start:this.query.start,end:this.query.end}).then((function(e){t.stat.today_count=e.hits})),this.$api.post("/api/user/stat",{type:"total_fail_stat",start:this.query.start,end:this.query.end}).then((function(e){t.stat.fail_count=e.hits})),this.$api.post("/api/user/stat",{type:"log_time_stat",start:this.query.start2,end:this.query.end2}).then((function(e){var a=[];if(e&&0==e.length)a.push({"时间":"今天","访问量":0});else{var i,s=Object(o["a"])(e);try{for(s.s();!(i=s.n()).done;){var r=i.value;a.push({"时间":r.name,"访问量":r.hits})}}catch(n){s.e(n)}finally{s.f()}}t.logTimeStat.rows=a}))}},components:{VeLine:u["VeLine"],VeRadar:u["VeRadar"],VeHistogram:u["VeHistogram"],VeScatter:u["VeScatter"],VeMap:u["VeMap"],VeBar:u["VeBar"],VePie:u["VePie"],VeRing:u["VeRing"],VeWaterfall:u["VeWaterfall"],VeFunnel:u["VeFunnel"],DialogProjectApply:c["a"]},mounted:function(){var t=this,e=n["a"].timeRange("now/d to now/d");e&&e.length>1&&(this.query.start=n["a"].utc2date(e[0]),this.query.end=n["a"].utc2date(e[1]));var a=n["a"].timeRange("now-7d to now");a&&a.length>1&&(this.query.start2=n["a"].utc2date(a[0]),this.query.end2=n["a"].utc2date(a[1])),this.$nextTick((function(){t.init()}))}},p=d,m=(a("a94a"),a("0c7c")),f=Object(m["a"])(p,i,s,!1,null,"ff26b7a0",null);e["default"]=f.exports}}]);