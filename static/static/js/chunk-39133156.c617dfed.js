(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39133156"],{"369b":function(t,n,i){"use strict";i.r(n);var e,o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("setting-inception")],1)},c=[],s=(i("b0c0"),i("ade3")),a=(i("5743"),i("f381")),r=i("c1df"),u=i.n(r),f={data:function(){return{id:0,setting:{},inter:null,run_str:"",size:"small",activeName:"inception",form:{sql_mode:!0,license:""}}},methods:(e={checkLicense:function(){},showTime:function(t){return console.log("expire:",t),u()(new Date(t)).format("YYYY-MM-DD HH:mm:ss")},diffTime:function(){var t="NaN";if(this.form.start_time){var n=u()().diff(u()(1e3*this.form.start_time));console.log("ms:",n);var i=u.a.duration(n),e=Math.floor(i.asHours()),o=u.a.utc(n).format("mm"),c=u.a.utc(n).format("ss");t="",i>0&&(t=i+"天"),e>0&&(t+=e+"小时"),t+=o+"分钟",t+=c+"秒",console.log("d:",i,"  h:",e," m:",o," s:",c)}this.run_str=t}},Object(s["a"])(e,"checkLicense",(function(){var t=this;this.$api.setting.updateLicense(this.form).then((function(){t.onSuccess("更新成功"),t.getSetting()}),(function(n){var i="参数错误！";"301"!=n.result&&(i=n.data),t.onError(i)}))})),Object(s["a"])(e,"handleClick",(function(t,n){console.log("handleClick:",t,n),this.getSetting(t.name)})),Object(s["a"])(e,"onReboot",(function(){var t=this;this.$api.setting.reboot().then((function(){t.onSuccess("请求成功，正在重启中")}),(function(n){t.onError("操作势必啊")}))})),Object(s["a"])(e,"onSubmit",(function(){var t=this;this.$api.setting.updateSetting(this.form).then((function(){t.onSuccess("提交成功")}),(function(n){var i="参数错误！";"301"!=n.result&&(i=n.data),t.onError(i)}))})),Object(s["a"])(e,"getSetting",(function(t){var n=this;"inception"==t?this.$api.setting.getInception().then((function(t){console.log("data:",JSON.stringify(t)),n.form2=t})):this.$api.setting.get().then((function(t){console.log("data:",JSON.stringify(t)),n.setting=t,n.form=t}))})),Object(s["a"])(e,"round",(function(t){return Math.round(100*t)/100})),Object(s["a"])(e,"init",(function(){})),e),components:{SettingInception:a["a"]},mounted:function(){var t=this;this.$nextTick((function(){t.getSetting(),t.init()}))},destroyed:function(){clearTimeout(this.inter)}},h=f,l=(i("f5b9"),i("2877")),m=Object(l["a"])(h,o,c,!1,null,null,null);n["default"]=m.exports},8200:function(t,n,i){},f5b9:function(t,n,i){"use strict";var e=i("8200"),o=i.n(e);o.a}}]);