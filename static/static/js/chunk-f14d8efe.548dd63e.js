(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f14d8efe"],{"190e":function(t,e,o){"use strict";var a=o("50e8"),r=o.n(a);r.a},"50e8":function(t,e,o){},9815:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"body"},[t.isChrome?t._e():o("el-alert",{attrs:{title:"本产品标准运行环境为Chrome 48.0.2564 及以上版本，请使用Chrome浏览器进行访问，以便获得最佳体验。",type:"warning"}}),o("el-form",{attrs:{model:t.formData}})],1)])},r=[],n=(o("c975"),o("b0c0"),o("96cf"),o("1da1")),i=o("5530"),s=o("2f62"),u={data:function(){var t=this.$route.query;return{isChrome:!1,path:"",mode:"normal",back_url:t.url,oauth2_url:"",oauth2_logo:"",oauth2_name:"",oauth2_display_name:"",activeName:"focus",setting:{},oatuh2:{},url:"",formData:{focus_pwd:"",focus_code:"",name:"",pwd:"",captcha:"",captcha_id:"",code:""}}},computed:Object(i["a"])({},Object(s["c"])(["user"])),methods:{enterSubmit:function(){"focus"==this.activeName?this.onFocusSubmit():this.onSubmit()},getCaptcha:function(){var t=this;this.$api.get("/api/captcha").then((function(e){var o=e.id,a=e.img;t.formData.captcha=a,t.formData.captcha_id=o}))},checkBrowser:function(){var t=navigator.userAgent,e=t.indexOf("Opera")>-1;return e?"Opera":t.indexOf("Firefox")>-1?"FF":t.indexOf("Chrome")>-1?"Chrome":t.indexOf("Safari")>-1?"Safari":t.indexOf("compatible")>-1&&t.indexOf("MSIE")>-1&&!e?"IE":void 0},goCasLogin:function(){this.url&&(window.location.href=this.url)},onFocusSubmit:function(){var t=this;this.formData.name?this.formData.focus_pwd?this.formData.focus_code?this.$api.post("/api/focus/login",{name:this.formData.name,pwd:this.formData.focus_pwd,code:this.formData.focus_code}).then((function(e){var o=e.token,a=e.user;t.$store.commit("user",a),window.localStorage.setItem("name",t.formData.name),window.localStorage.setItem("token",o),window.localStorage.setItem("user",JSON.stringify(a)),t.$router.push("/")}),(function(t){})):this.onError("动态码不能为空！"):this.onError("密码不能为空！"):this.onError("账号不能为空！")},onSubmit:function(){var t=this;this.formData.name?this.formData.pwd?this.formData.code?this.$api.post("/api/login",this.formData).then((function(e){var o=e.token,a=e.user;t.$store.commit("user",a),window.localStorage.setItem("name",t.formData.name),window.localStorage.setItem("token",o),window.localStorage.setItem("user",JSON.stringify(a)),a.pw_score<2?(t.onError("你的密码过于简单，登录后请修改密码！"),setTimeout((function(){t.$router.push("/my/pwd"),window.localStorage.setItem("forcePwd",1)}),2e3)):t.$router.push("/")}),(function(){t.getCaptcha()})):this.onError("验证码不能为空！"):this.onError("密码不能为空！"):this.onError("账号不能为空！")},onInit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var o,a,r,n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.post("/api/setting",{});case 2:o=e.sent,window.localStorage.setItem("setting",t.mode),o.login_mode,o.url,a=o.oauth2_url,r=o.oauth2_logo,n=o.oauth2_name,i=o.oauth2_display_name,t.$store.commit("sysSetting",o),t.mode="focus",window.localStorage.setItem("oauth_mode",t.mode),s=window.localStorage.getItem("name"),s&&(t.formData.name=s),a&&(t.oauth2_url=a,window.localStorage.setItem("oauth2_url",a),window.location.href=t.oauth2_url),r&&(t.oauth2_logo=r),n&&(t.oauth2_name=n),t.oauth2_display_name=i;case 14:case"end":return e.stop()}}),e)})))()},handleLoginOAuth2:function(){window.location.href=this.oauth2_url}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return"Chrome"==t.checkBrowser()&&(t.isChrome=!0),e.next=3,t.onInit();case 3:t.getCaptcha();case 4:case"end":return e.stop()}}),e)})))()}},c=u,m=(o("190e"),o("0c7c")),h=Object(m["a"])(c,a,r,!1,null,null,null);e["default"]=h.exports}}]);