(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18871fea"],{"0fee":function(t,e,i){"use strict";var o=i("ff23"),a=i.n(o);a.a},"498a":function(t,e,i){"use strict";var o=i("23e7"),a=i("58a8").trim,n=i("c8d2");o({target:"String",proto:!0,forced:n("trim")},{trim:function(){return a(this)}})},c8d2:function(t,e,i){var o=i("d039"),a=i("5899"),n="​᠎";t.exports=function(t){return o((function(){return!!a[t]()||n[t]()!=n||a[t].name!==t}))}},d276:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-security"},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[t._v("安全设定")])]),i("div",{staticClass:"text item"},[i("el-form",{ref:"form",staticClass:"userInfo",attrs:{model:t.form,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"启用两步验证"}},[i("el-switch",{attrs:{size:"mini","active-value":1,"inactive-value":2,disabled:t.isTfaOpen},model:{value:t.form.tfa_state,callback:function(e){t.$set(t.form,"tfa_state",e)},expression:"form.tfa_state"}})],1),t.isShowTfaSwitch?[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.qrcodeLoading,expression:"qrcodeLoading"}]},[i("el-form-item",{attrs:{label:"认证方式",prop:"sex"}},[i("el-radio-group",{attrs:{disabled:t.isTfaOpen},model:{value:t.form.tfa_type,callback:function(e){t.$set(t.form,"tfa_type",e)},expression:"form.tfa_type"}},[i("el-radio",{attrs:{label:"ga"}},[t._v("google-authenticator")])],1)],1),t.isShowGa?i("el-form-item",{attrs:{label:""}},[i("span",[t._v(" 从App store或Google Play商店下载Google Authenticator应用,然后扫描此二维码. ")]),i("div",{staticClass:"qrcode-section"},[i("img",{staticStyle:{width:"200px",height:"200px",border:"1px"},attrs:{src:t.img}}),i("p",{staticClass:"description"},[t._v(" 无法扫描二维码？ "),i("br"),t._v(" 请在收集应用中输入以下信息手动进行绑定。 "),i("br"),t._v(" 账号："+t._s(t.account)+" "),i("br"),t._v(" 秘钥："+t._s(t.tfa_code)+" ")])])]):t._e(),i("el-form-item",{attrs:{prop:"pin_code"}},[i("div",{staticClass:"pin-code-label",attrs:{slot:"label"},slot:"label"},[i("span",[t._v("pin码")]),i("el-tooltip",{attrs:{placement:"right"}},[i("i",{staticClass:"el-icon-question tooltip"}),i("div",{attrs:{slot:"content"},slot:"content"},[i("img",{staticStyle:{height:"305px",width:"174px"},attrs:{src:"/static/image/tfa-preview.png",alt:""}})])])],1),i("el-input",{model:{value:t.pin_code,callback:function(e){t.pin_code=e},expression:"pin_code"}})],1),i("el-form-item",[t.isTfaOpen?i("el-button",{attrs:{type:"danger"},on:{click:t.onUnBind}},[t._v("关闭两步验证")]):i("el-button",{attrs:{type:"success"},on:{click:t.onBind}},[t._v("保存两步验证设置")])],1)],1)]:t._e()],2)],1)])],1)},a=[],n=(i("d3b7"),i("498a"),i("5530")),s=i("2f62"),r=(i("365c"),i("2ef0")),c={components:{},data:function(){return{form:{},img:"",qrcodeLoading:!1,tfa_code:"",account:"",pin_code:""}},computed:Object(n["a"])(Object(n["a"])({},Object(s["c"])(["user"])),{},{isTfaOpen:function(){return 1==this.user.tfa_state},isShowTfaSwitch:function(){return 1==this.form.tfa_state},isShowGa:function(){return"ga"==this.form.tfa_type&&0==this.isTfaOpen&&1==this.form.tfa_state}}),watch:{isShowTfaSwitch:"changeTFAState"},methods:{changeTFAState:function(t){var e=this;t&&!this.isTfaOpen?(this.qrcodeLoading=!0,this.$api.my.addAuthCode().then((function(t){e.img=t.img,e.tfa_code=t.hash_code,e.account=t.account,e.pin_code=""})).finally((function(){e.qrcodeLoading=!1}))):2==t&&console.log("关闭：",t)},resetForm:function(){var t=r["cloneDeep"](this.user);t||(t={}),t&&""==t.tfa_type&&(t.tfa_type="ga"),t.tfa_type="ga",this.form=t},freshAndUser:function(){var t=this;this.$api.my.info().then((function(e){e&&(t.$store.commit("user",e),t.pin_code="",t.tfa_code="",t.account="",t.img="",t.resetForm())}))},onUnBind:function(){var t=this;""!=this.pin_code.trim()?this.$api.my.unBindAuthCode({pin_code:this.pin_code}).then((function(e){"fail"==e?t.onError("验证失败！","提示信息"):"ok"==e?t.freshAndUser():t.onError("未知错误！","提示信息")})):this.$message({message:"pin码错误",type:"error",duration:8e3,showClose:!0})},onBind:function(){var t=this;""!=this.pin_code.trim()?this.$api.my.bindAuthCode({tfa_code:this.tfa_code,pin_code:this.pin_code}).then((function(e){"ok"==e?(t.onSuccess("输入正确,绑定成功!"),t.freshAndUser()):"fail"==e?t.onError("输入错误,绑定失败!"):t.onError("绑定出错了!"),console.log("bindAuthCode v:",e)})):this.$message({message:"pin code错误",type:"error",duration:8e3,showClose:!0})}},mounted:function(){this.freshAndUser()}},l=c,f=(i("0fee"),i("2877")),d=Object(f["a"])(l,o,a,!1,null,null,null);e["default"]=d.exports},ff23:function(t,e,i){}}]);