(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["params_cate"],{1276:function(t,e,a){"use strict";var n=a("d784"),r=a("44e7"),i=a("825a"),s=a("1d80"),o=a("4840"),l=a("8aa5"),c=a("50c4"),u=a("14c3"),d=a("9263"),p=a("d039"),m=[].push,f=Math.min,g=4294967295,h=!p((function(){return!RegExp(g,"y")}));n("split",2,(function(t,e,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var n=String(s(this)),i=void 0===a?g:a>>>0;if(0===i)return[];if(void 0===t)return[n];if(!r(t))return e.call(n,t,i);var o,l,c,u=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=new RegExp(t.source,p+"g");while(o=d.call(h,n)){if(l=h.lastIndex,l>f&&(u.push(n.slice(f,o.index)),o.length>1&&o.index<n.length&&m.apply(u,o.slice(1)),c=o[0].length,f=l,u.length>=i))break;h.lastIndex===o.index&&h.lastIndex++}return f===n.length?!c&&h.test("")||u.push(""):u.push(n.slice(f)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var r=s(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,r,a):n.call(String(r),e,a)},function(t,r){var s=a(n,t,this,r,n!==e);if(s.done)return s.value;var d=i(t),p=String(this),m=o(d,RegExp),b=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(h?"y":"g"),x=new m(h?d:"^(?:"+d.source+")",v),_=void 0===r?g:r>>>0;if(0===_)return[];if(0===p.length)return null===u(x,p)?[p]:[];var y=0,C=0,w=[];while(C<p.length){x.lastIndex=h?C:0;var k,E=u(x,h?p:p.slice(C));if(null===E||(k=f(c(x.lastIndex+(h?0:C)),p.length))===y)C=l(p,C,b);else{if(w.push(p.slice(y,C)),w.length===_)return w;for(var R=1;R<=E.length-1;R++)if(w.push(E[R]),w.length===_)return w;C=y=k}}return w.push(p.slice(y)),w}]}),!h)},"14c3":function(t,e,a){var n=a("c6b6"),r=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var i=a.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"14e2":function(t,e,a){"use strict";var n=a("353e"),r=a.n(n);r.a},"353e":function(t,e,a){},"44e7":function(t,e,a){var n=a("861d"),r=a("c6b6"),i=a("b622"),s=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==r(t))}},"498a":function(t,e,a){"use strict";var n=a("23e7"),r=a("58a8").trim,i=a("c8d2");n({target:"String",proto:!0,forced:i("trim")},{trim:function(){return r(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),r=a("5899"),i="["+r+"]",s=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),l=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:l(1),end:l(2),trim:l(3)}},"64e6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("商品管理")]),a("el-breadcrumb-item",[t._v("分类参数")])],1),a("el-card",{staticClass:"box-card"},[a("el-alert",{attrs:{title:"注意:只允许为三级分类设置参数",type:"warning",closable:!1,"show-icon":""}}),a("div",{staticClass:"select"},[a("span",[t._v("选择商品分类 : ")]),a("el-cascader",{ref:"selectRef",attrs:{options:t.options,props:t.selectProps,clearable:""},on:{change:t.selectChange},model:{value:t.selectModel,callback:function(e){t.selectModel=e},expression:"selectModel"}})],1),a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"动态参数",name:"many"}},[a("el-button",{attrs:{type:"primary",disabled:t.buttonP},on:{click:function(e){t.dialogVisible=!0}}},[t._v("添加参数")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.manyData,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",[t._l(e.row.attr_vals,(function(n,r){return a("el-tag",{key:n,attrs:{closable:"","disable-transitions":!1},on:{close:function(a){return t.handleTagClose(e.row,r)}}},[t._v(" "+t._s(n)+" ")])})),e.row.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(a){return t.handleInputConfirm(e.row)}},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.handleInputConfirm(e.row)}},model:{value:e.row.inputValue,callback:function(a){t.$set(e.row,"inputValue",a)},expression:"scope.row.inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(a){return t.showInput(e.row)}}},[t._v("+ New Tag")])],2)],1)]}}])}),a("el-table-column",{attrs:{type:"index",label:"#",align:"center"}}),a("el-table-column",{attrs:{label:"参数名称",prop:"attr_name",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(a){return t.editDialog(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(a){return t.paramsDelete(e.row)}}},[t._v("删除")])]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"静态属性",name:"only"}},[a("el-button",{attrs:{type:"primary",disabled:t.buttonP},on:{click:function(e){t.dialogVisible=!0}}},[t._v("添加属性")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.onlyData,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",[t._l(e.row.attr_vals,(function(n,r){return a("el-tag",{key:n,attrs:{closable:"","disable-transitions":!1},on:{close:function(a){return t.handleTagClose(e.row,r)}}},[t._v(" "+t._s(n)+" ")])})),e.row.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(a){return t.handleInputConfirm(e.row)}},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.handleInputConfirm(e.row)}},model:{value:e.row.inputValue,callback:function(a){t.$set(e.row,"inputValue",a)},expression:"scope.row.inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(a){return t.showInput(e.row)}}},[t._v("+ New Tag")])],2)],1)]}}])}),a("el-table-column",{attrs:{type:"index",label:"#",align:"center"}}),a("el-table-column",{attrs:{label:"属性名称",prop:"attr_name",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(a){return t.editDialog(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(a){return t.paramsDelete(e.row)}}},[t._v("删除")])]}}])})],1)],1)],1)],1),a("el-dialog",{attrs:{title:"添加"+t.titleChange,visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e},close:t.dialogClose}},[a("el-form",{ref:"addFormRef",attrs:{model:t.addForm,rules:t.addFormRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:t.titleChange+" :",prop:"attr_name"}},[a("el-input",{model:{value:t.addForm.attr_name,callback:function(e){t.$set(t.addForm,"attr_name",e)},expression:"addForm.attr_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addParams}},[t._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"编辑"+t.titleChange,visible:t.dialogVisibleEdit,width:"30%"},on:{"update:visible":function(e){t.dialogVisibleEdit=e},close:t.editDialogClose}},[a("el-form",{ref:"editFormRef",attrs:{model:t.editForm,rules:t.addFormRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"当前名称 :",prop:"thisname"}},[a("el-input",{attrs:{disabled:""},model:{value:t.editForm.thisname,callback:function(e){t.$set(t.editForm,"thisname",e)},expression:"editForm.thisname"}})],1),a("el-form-item",{attrs:{label:"更新名称 :",prop:"attr_name"}},[a("el-input",{model:{value:t.editForm.attr_name,callback:function(e){t.$set(t.editForm,"attr_name",e)},expression:"editForm.attr_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisibleEdit=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.editParams}},[t._v("确 定")])],1)],1)],1)},r=[],i=(a("99af"),a("4160"),a("a15b"),a("a434"),a("ac1f"),a("1276"),a("498a"),a("159b"),a("96cf"),a("1da1")),s={data:function(){return{options:[],selectProps:{label:"cat_name",value:"cat_id"},activeName:"many",selectModel:[],manyData:[],onlyData:[],buttonP:"",dialogVisible:!1,dialogVisibleEdit:!1,Ptitle:"",addForm:{attr_name:""},editForm:{thisname:"",attr_name:""},addFormRules:{attr_name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}]},attrid:""}},created:function(){this.getSelectList()},computed:{cateId:function(){return 3==this.selectModel.length?this.selectModel[2]:null},titleChange:function(){return"many"==this.activeName?"动态参数":"静态属性"}},methods:{getSelectList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("categories");case 2:e=t.sent,a=e.data,this.options=a.data;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleClick:function(t,e){this.getCateGories()},selectChange:function(){if(3!=this.selectModel.length)return this.selectModel=[],this.manyData=[],this.onlyData=[],void(this.buttonP=!0);this.buttonP=!1,this.getCateGories()},dialogClose:function(){this.$refs.addFormRef.resetFields()},editDialogClose:function(){this.$refs.editFormRef.resetFields()},getCateGories:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("categories/".concat(this.cateId,"/attributes"),{params:{sel:this.activeName}});case 2:e=t.sent,a=e.data,a.data.forEach((function(t){t.attr_vals=t.attr_vals?t.attr_vals.split(" "):[],n.dynamicTags=t.attr_vals,t.inputValue="",t.inputVisible=!1})),"many"==this.activeName?this.manyData=a.data:this.onlyData=a.data;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addParams:function(){var t=this;this.$refs.addFormRef.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(a){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=10;break}return t.dialogVisible=!1,e.next=4,t.$http.post("categories/".concat(t.cateId,"/attributes"),{attr_name:t.addForm.attr_name,attr_sel:t.activeName});case 4:if(n=e.sent,r=n.data,201===r.meta.status){e.next=8;break}return e.abrupt("return",t.$message.error(r.meta.msg));case 8:t.$message.success(r.meta.msg),t.getCateGories();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},paramsDelete:function(t){var e=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$http.delete("categories/".concat(e.cateId,"/attributes/").concat(t.attr_id));case 2:if(n=a.sent,r=n.data,200===r.meta.status){a.next=6;break}return a.abrupt("return",e.$message.error(r.meta.msg));case 6:e.$message.success(r.meta.msg),e.getCateGories();case 8:case"end":return a.stop()}}),a)})))).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},editDialog:function(t){this.dialogVisibleEdit=!0,this.editForm.thisname=t.attr_name,this.attrid=t.attr_id},editParams:function(){var t=this;this.$refs.editFormRef.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(a){var n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=11;break}return t.dialogVisibleEdit=!1,n={attr_name:t.editForm.attr_name,attr_sel:t.activeName},e.next=5,t.$http.put("categories/".concat(t.cateId,"/attributes/").concat(t.attrid),n);case 5:if(r=e.sent,i=r.data,200===i.meta.status){e.next=9;break}return e.abrupt("return",t.$message.error(i.meta.msg));case 9:t.$message.success(i.meta.msg),t.getCateGories();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},handleInputConfirm:function(t){if(0==t.inputValue.trim().length)return t.inputVisible=!1,void(t.inputValue="");t.attr_vals.push(t.inputValue),t.inputValue="",t.inputVisible=!1,this.tagChange(t)},tagChange:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.put("categories/".concat(this.cateId,"/attributes/").concat(e.attr_id),{attr_name:e.attr_name,attr_sel:e.attr_sel,attr_vals:e.attr_vals.join(" ")});case 2:if(a=t.sent,n=a.data,200===n.meta.status){t.next=6;break}return t.abrupt("return",this.$message.error(n.meta.msg));case 6:this.$message.success(n.meta.msg);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),showInput:function(t){var e=this;t.inputVisible=!0,this.$nextTick((function(t){e.$refs.saveTagInput.$refs.input.focus()}))},handleTagClose:function(t,e){t.attr_vals.splice(e,1),this.tagChange(t)}}},o=s,l=(a("14e2"),a("2877")),c=Object(l["a"])(o,n,r,!1,null,"0eaf3e1c",null);e["default"]=c.exports},"8aa5":function(t,e,a){"use strict";var n=a("6547").charAt;t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},9263:function(t,e,a){"use strict";var n=a("ad6d"),r=a("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,o=i,l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=l||u||c;d&&(o=function(t){var e,a,r,o,d=this,p=c&&d.sticky,m=n.call(d),f=d.source,g=0,h=t;return p&&(m=m.replace("y",""),-1===m.indexOf("g")&&(m+="g"),h=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(f="(?: "+f+")",h=" "+h,g++),a=new RegExp("^(?:"+f+")",m)),u&&(a=new RegExp("^"+f+"$(?!\\s)",m)),l&&(e=d.lastIndex),r=i.call(p?a:d,h),p?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=d.lastIndex,d.lastIndex+=r[0].length):d.lastIndex=0:l&&r&&(d.lastIndex=d.global?r.index+r[0].length:e),u&&r&&r.length>1&&s.call(r[0],a,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=o},"9f7f":function(t,e,a){"use strict";var n=a("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a434:function(t,e,a){"use strict";var n=a("23e7"),r=a("23cb"),i=a("a691"),s=a("50c4"),o=a("7b0b"),l=a("65f0"),c=a("8418"),u=a("1dde"),d=a("ae40"),p=u("splice"),m=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,g=Math.min,h=9007199254740991,b="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!p||!m},{splice:function(t,e){var a,n,u,d,p,m,v=o(this),x=s(v.length),_=r(t,x),y=arguments.length;if(0===y?a=n=0:1===y?(a=0,n=x-_):(a=y-2,n=g(f(i(e),0),x-_)),x+a-n>h)throw TypeError(b);for(u=l(v,n),d=0;d<n;d++)p=_+d,p in v&&c(u,d,v[p]);if(u.length=n,a<n){for(d=_;d<x-n;d++)p=d+n,m=d+a,p in v?v[m]=v[p]:delete v[m];for(d=x;d>x-n+a;d--)delete v[d-1]}else if(a>n)for(d=x-n;d>_;d--)p=d+n-1,m=d+a-1,p in v?v[m]=v[p]:delete v[m];for(d=0;d<a;d++)v[d+_]=arguments[d+2];return v.length=x-n+a,u}})},ac1f:function(t,e,a){"use strict";var n=a("23e7"),r=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},c8d2:function(t,e,a){var n=a("d039"),r=a("5899"),i="​᠎";t.exports=function(t){return n((function(){return!!r[t]()||i[t]()!=i||r[t].name!==t}))}},d784:function(t,e,a){"use strict";a("ac1f");var n=a("6eeb"),r=a("d039"),i=a("b622"),s=a("9263"),o=a("9112"),l=i("species"),c=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),m=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,d){var f=i(t),g=!r((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),h=g&&!r((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[l]=function(){return a},a.flags="",a[f]=/./[f]),a.exec=function(){return e=!0,null},a[f](""),!e}));if(!g||!h||"replace"===t&&(!c||!u||p)||"split"===t&&!m){var b=/./[f],v=a(f,""[t],(function(t,e,a,n,r){return e.exec===s?g&&!r?{done:!0,value:b.call(e,a,n)}:{done:!0,value:t.call(a,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=v[0],_=v[1];n(String.prototype,t,x),n(RegExp.prototype,f,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}d&&o(RegExp.prototype[f],"sham",!0)}},f8e7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("商品管理")]),a("el-breadcrumb-item",[t._v("商品分类")])],1),a("el-card",{staticClass:"box-card"},[a("el-button",{staticStyle:{"margin-bottom":"15px"},attrs:{type:"primary"},on:{click:t.addCateDialog}},[t._v("添加分类")]),a("tree-table",{ref:"cateData",staticStyle:{width:"100%"},attrs:{data:t.cateData,columns:t.columns,"index-text":"#",border:!0,"show-header":!0,"show-index":!0,"tree-type":!0,expandType:!1,selectionType:!1},scopedSlots:t._u([{key:"isOk",fn:function(t){return[1==t.row.cat_deleted?a("i",{staticClass:"el-icon-success",staticStyle:{color:"green","font-size":"20px"}}):a("i",{staticClass:"el-icon-error",staticStyle:{color:"red","font-size":"20px"}})]}},{key:"caozuo",fn:function(e){return[a("div",[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){return t.editCateDialog(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(a){return t.deleteCate(e.row)}}},[t._v("删除")])],1)]}}])}),a("el-pagination",{attrs:{"current-page":t.queryInfo.pagenum,"page-sizes":[6,10,15,20],"page-size":t.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),a("el-dialog",{attrs:{title:"添加分类",visible:t.dialogVisibleAdd,width:"30%"},on:{"update:visible":function(e){t.dialogVisibleAdd=e},close:t.closeAddCateForm}},[a("el-form",{ref:"addCateformRef",attrs:{rules:t.addRules,model:t.addCateform,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"分类名称",prop:"cat_name"}},[a("el-input",{model:{value:t.addCateform.cat_name,callback:function(e){t.$set(t.addCateform,"cat_name",e)},expression:"addCateform.cat_name"}})],1),a("el-form-item",{attrs:{label:"分类层级"}},[a("el-cascader",{ref:"addSelect",attrs:{options:t.options,"change-on-select":"true",clearable:"",props:t.cascProps},on:{change:t.addSelectChange},model:{value:t.addSelect,callback:function(e){t.addSelect=e},expression:"addSelect"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisibleAdd=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addCate}},[t._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"编辑分类",visible:t.dialogVisibleEdit,width:"30%"},on:{"update:visible":function(e){t.dialogVisibleEdit=e}}},[a("el-form",{ref:"EditCateform",attrs:{model:t.EditCateform,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"分类Id",prop:"cat_id"}},[a("el-input",{attrs:{disabled:""},model:{value:t.EditCateform.cat_id,callback:function(e){t.$set(t.EditCateform,"cat_id",e)},expression:"EditCateform.cat_id"}})],1),a("el-form-item",{attrs:{label:"分类名称",prop:"cat_name"}},[a("el-input",{model:{value:t.EditCateform.cat_name,callback:function(e){t.$set(t.EditCateform,"cat_name",e)},expression:"EditCateform.cat_name"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisibleEdit=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.editCate}},[t._v("确 定")])],1)],1)],1)],1)},r=[],i=(a("96cf"),a("1da1")),s={data:function(){return{queryInfo:{pagenum:1,pagesize:6},cateData:[{cat_name:"",cat_deleted:"",cat_level:""}],EditCateform:{cat_id:"",cat_name:""},addCateform:{cat_pid:"",cat_name:"",cat_level:""},addRules:{cat_name:[{required:!0,message:"请输入分类名称",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}]},columns:[{label:"分类名称",prop:"cat_name"},{label:"是否有效",prop:"cat_deleted",type:"template",template:"isOk"},{label:"等级",prop:"cat_level"},{label:"操作",type:"template",template:"caozuo"}],cascProps:{label:"cat_name",value:"cat_id",leaf:"cat_level"},options:[],addSelect:[],dialogVisibleEdit:!1,dialogVisibleAdd:!1,total:0}},created:function(){this.getCateList()},methods:{handleSizeChange:function(t){this.queryInfo.pagesize=t,this.getCateList()},handleCurrentChange:function(t){this.queryInfo.pagenum=t,this.getCateList()},closeAddCateForm:function(){this.addCateform.cat_pid="",this.addCateform.cat_name="",this.addCateform.cat_level="",this.addSelect=[]},getCateList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("categories",{params:this.queryInfo});case 2:if(e=t.sent,a=e.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",this.$message.error(a.meta.msg));case 6:this.cateData=a.data.result,this.total=a.data.total;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getSelectionList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("categories",{params:{type:2}});case 2:e=t.sent,a=e.data,this.options=a.data;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),editCateDialog:function(t){this.dialogVisibleEdit=!0,this.EditCateform.cat_id=t.cat_id,this.EditCateform.cat_name=t.cat_name},editCate:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={cat_name:this.EditCateform.cat_name},t.next=3,this.$http.put("categories/".concat(this.EditCateform.cat_id),e);case 3:if(a=t.sent,n=a.data,200===n.meta.status){t.next=7;break}return t.abrupt("return",this.$message.error(n.meta.msg));case 7:this.$message.success(n.meta.msg),this.dialogVisibleEdit=!1,this.getCateList();case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),deleteCate:function(t){var e=this;this.$confirm("此操作将永久删除该分类, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$http.delete("categories/".concat(t.cat_id));case 2:if(n=a.sent,r=n.data,200===r.meta.status){a.next=6;break}return a.abrupt("return",e.$message.error(r.meta.msg));case 6:e.$message.success(r.meta.msg),e.getCateList();case 8:case"end":return a.stop()}}),a)})))).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},addSelectChange:function(){this.$refs.addSelect.dropDownVisible=!1,this.addSelect.length>0?(this.addCateform.cat_pid=this.addSelect[0],this.addCateform.cat_level=this.addSelect.length):(this.addCateform.cat_pid=0,this.addCateform.cat_level=0)},addCate:function(){var t=this;this.$refs.addCateformRef.validate(function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(a){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=10;break}return e.next=3,t.$http.post("categories",t.addCateform);case 3:if(n=e.sent,r=n.data,201===r.meta.status){e.next=7;break}return e.abrupt("return",t.$message.error(r.meta.msg));case 7:t.$message.success(r.meta.msg),t.getCateList(),t.dialogVisibleAdd=!1;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},addCateDialog:function(){this.dialogVisibleAdd=!0,this.getSelectionList()}}},o=s,l=a("2877"),c=Object(l["a"])(o,n,r,!1,null,"c35be8f2",null);e["default"]=c.exports}}]);
//# sourceMappingURL=params_cate.187120f0.js.map