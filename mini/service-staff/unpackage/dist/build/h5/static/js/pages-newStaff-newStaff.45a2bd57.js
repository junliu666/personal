(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-newStaff-newStaff"],{"2cb3":function(t,a,e){"use strict";var i=e("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("f499"));e("7f7f");var s={data:function(){return{imgList:["../../static/girls/1.jpg","../../static/girls/1.jpg"],tags:null,staffInfo:null,modalName:null,totalTag:0}},onLoad:function(){this.GetStaffInfo()},methods:{editConfirm:function(){var t=this;if(""!=this.staffInfo.name&&""!=this.staffInfo.head_img&&""!=this.staffInfo.name&&""!=this.staffInfo.age&&""!=this.staffInfo.name&&""!=this.staffInfo.weight&&""!=this.staffInfo.age&&""!=this.staffInfo.height&&""!=this.staffInfo.synopsis&&""!=this.staffInfo.introduce){var a=!1;for(var e in t.tags)if(1==t.tags[e].is_exist){a=!0;break}if(1==a){uni.showLoading({});var i=[];for(var e in t.tags)1==t.tags[e].is_exist&&i.push(t.tags[e].id);var s={age:t.staffInfo.age,headImg:t.staffInfo.head_img,height:t.staffInfo.height,imgs:(0,n.default)(t.staffInfo.imgs),introduce:t.staffInfo.introduce,name:t.staffInfo.name,sex:t.staffInfo.sex,synopsis:t.staffInfo.synopsis,tag:(0,n.default)(i),weight:t.staffInfo.weight};uni.request({method:"POST",header:{token:t.Token},url:t.Server+"staff/update",data:s,success:function(t){uni.hideLoading(),0==t.data.code?(uni.showToast({title:"填写完成，即将返回",duration:1500}),setTimeout(function(){uni.reLaunch({url:"../blank/blank"})},1500)):101==t.data.code?(uni.clearStorageSync(),uni.showToast({icon:"none",title:"登录超时，将重新授权登录",duration:1e3}),setTimeout(function(){uni.reLaunch({url:"../blank/blank"})},2e3)):uni.showToast({icon:"none",title:t.data.msg,duration:1e3})}})}else uni.showToast({icon:"none",title:"请选择至少一个标签！"})}else uni.showToast({icon:"none",title:"请填写全部资料！"})},SelectTag:function(t){(this.totalTag<5||5==this.totalTag)&&(this.tags[t].is_exist=0==this.tags[t].is_exist,this.totalTag=1==this.tags[t].is_exist?this.totalTag+1:this.totalTag-1,this.$forceUpdate(this.tags))},ViewImage:function(){uni.previewImage({urls:[this.staffInfo.head_img],current:0})},ViewImageB:function(t){uni.previewImage({urls:this.staffInfo.imgs,current:t})},GetTags:function(){var t=this;uni.request({header:{token:t.Token},url:t.Server+"staffTag/list",success:function(a){if(uni.hideLoading(),0==a.data.code){for(var e in t.tags=a.data.data,t.tags)for(var i in t.staffInfo.tag){if(t.staffInfo.tag[i].tag==t.tags[e].tag){t.tags[e].is_exist=!0,t.totalTag+=1;break}t.tags[e].is_exist=!1}console.log(t.tags)}else 101==a.data.code?(uni.clearStorageSync(),uni.showToast({icon:"none",title:"登录超时，将重新授权登录",duration:1e3}),setTimeout(function(){uni.reLaunch({url:"../blank/blank"})},2e3)):uni.showToast({icon:"none",title:a.data.msg,duration:1e3})}})},GetStaffInfo:function(){uni.showLoading({});var t=this;uni.request({header:{token:t.Token},url:t.Server+"staff/info",success:function(a){uni.hideLoading(),0==a.data.code?(t.userInfo=a.data.data,a.data.data.imgs=void 0==a.data.data.imgs?[]:JSON.parse(a.data.data.imgs),a.data.data.name=void 0==a.data.data.name?"":a.data.data.name,a.data.data.age=void 0==a.data.data.age?"":a.data.data.age,a.data.data.height=void 0==a.data.data.height?"":a.data.data.height,a.data.data.weight=void 0==a.data.data.weight?"":a.data.data.weight,a.data.data.tag=void 0==a.data.data.tag?[]:a.data.data.tag,t.staffInfo=a.data.data,t.GetTags()):101==a.data.code?(uni.clearStorageSync(),uni.showToast({icon:"none",title:"登录超时，将重新授权登录",duration:1e3}),setTimeout(function(){uni.reLaunch({url:"../blank/blank"})},2e3)):uni.showToast({icon:"none",title:a.data.msg,duration:1e3})}})},ChooseImage:function(t){var a=this;console.log(t);var e=t.currentTarget.dataset.target;console.log(e),uni.chooseImage({count:1,sizeType:["compressed"],success:function(t){uni.showLoading({});t.tempFilePaths,t.tempFiles;uni.getImageInfo({src:t.tempFilePaths[0],success:function(t){var i=t.width,n=t.height,s=new Image;s.src=t.path;var o=document.createElement("canvas"),f=o.getContext("2d");o.width=i,o.height=n,f.drawImage(s,0,0,i,n),o.toBlob(function(t){t.name="name.jpg",console.log(t);URL.createObjectURL(t);var i=new window.File([t],"name.jpg",{type:"image/jpeg"}),n=new XMLHttpRequest;n.open("POST","https://www.qiafantech.com/club/file/img/upload",!0);var s=new FormData;s.append("file",i),n.send(s),n.addEventListener("load",function(t){var i=JSON.parse(t.currentTarget.response);0==i.code?("head_img"==e?a.staffInfo.head_img=i.data:a.staffInfo.imgs.push(i.data),uni.hideLoading()):500==i.code&&(uni.hideLoading(),uni.showToast({icon:"none",title:"上传失败"})),uni.hideLoading()})},"image/jpeg",.2)}})}})},DelImg:function(t){var a=this,e=t.currentTarget.dataset.target;console.log(e),uni.showModal({content:"确定要删除吗？",cancelText:"取消",confirmText:"确定",success:function(i){i.confirm&&("head_img"==e?a.staffInfo.head_img=null:a.staffInfo.imgs.splice(t.currentTarget.dataset.index,1))}})}}};a.default=s},"3e56":function(t,a,e){"use strict";e.r(a);var i=e("2cb3"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,function(){return i[t]})}(s);a["default"]=n.a},a267:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"page bg-white",staticStyle:{"margin-bottom":"120upx"}},[e("cu-custom",{attrs:{bgColor:"bg-black",isBack:!1,mainPage:!0}},[e("template",{staticStyle:{"font-size":"40upx"},attrs:{slot:"backText"},slot:"backText"},[e("v-uni-text",{staticClass:" text-main",staticStyle:{"font-size":"50upx","margin-right":"12upx"}}),e("v-uni-text",{on:{click:function(a){a=t.$handleEvent(a),t.showLocation(a)}}},[t._v("填写资料")])],1),e("template",{attrs:{slot:"content"},slot:"content"})],2),e("v-uni-view",{staticClass:"cu-bar"},[e("v-uni-view",{staticClass:"action"},[t._v("我的头像")]),e("v-uni-view",{staticClass:"action"})],1),e("v-uni-view",{staticClass:"cu-form-group",staticStyle:{"background-color":"transparent"}},[e("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[null!=t.staffInfo.head_img&&void 0!=t.staffInfo.head_img?e("v-uni-view",{staticClass:"bg-img",attrs:{"data-url":t.imgList[t.index]},on:{click:function(a){a=t.$handleEvent(a),t.ViewImage(a)}}},[e("v-uni-image",{attrs:{src:t.staffInfo.head_img,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"cu-tag bg-red",attrs:{"data-target":"head_img","data-index":t.index},on:{click:function(a){a.stopPropagation(),a=t.$handleEvent(a),t.DelImg(a)}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1):t._e(),null==t.staffInfo.head_img||void 0==t.staffInfo.head_img?e("v-uni-view",{staticClass:"solids",attrs:{"data-target":"head_img"},on:{click:function(a){a=t.$handleEvent(a),t.ChooseImage(a)}}},[e("v-uni-text",{staticClass:"cuIcon-cameraadd"})],1):t._e()],1)],1),e("v-uni-view",{staticClass:"cu-form-group",staticStyle:{border:"0"}},[e("v-uni-view",{staticClass:"title"},[t._v("我的编号")]),e("v-uni-input",{attrs:{placeholder:"技师编号",name:"input"},model:{value:t.staffInfo.name,callback:function(a){t.$set(t.staffInfo,"name",a)},expression:"staffInfo.name"}}),e("v-uni-text",{staticClass:"cuIcon-peoplefill text-main"})],1),e("v-uni-view",{staticClass:"cu-form-group",staticStyle:{border:"0"}},[e("v-uni-view",{staticClass:"title"},[t._v("我的年龄")]),e("v-uni-input",{attrs:{placeholder:"年龄",type:"number",name:"input"},model:{value:t.staffInfo.age,callback:function(a){t.$set(t.staffInfo,"age",a)},expression:"staffInfo.age"}})],1),e("v-uni-view",{staticClass:"cu-form-group",staticStyle:{border:"0"}},[e("v-uni-view",{staticClass:"title"},[t._v("我的身高(厘米)")]),e("v-uni-input",{attrs:{placeholder:"身高",type:"number",name:"input"},model:{value:t.staffInfo.height,callback:function(a){t.$set(t.staffInfo,"height",a)},expression:"staffInfo.height"}})],1),e("v-uni-view",{staticClass:"cu-form-group",staticStyle:{border:"0"}},[e("v-uni-view",{staticClass:"title"},[t._v("我的体重(公斤)")]),e("v-uni-input",{attrs:{placeholder:"体重",type:"number",name:"input"},model:{value:t.staffInfo.weight,callback:function(a){t.$set(t.staffInfo,"weight",a)},expression:"staffInfo.weight"}})],1),e("v-uni-view",{staticClass:"cu-bar"},[e("v-uni-view",{staticClass:"action"},[t._v("我的照片")]),e("v-uni-view",{staticClass:"action"},[t._v(t._s(t.staffInfo.imgs.length)+"/5")])],1),e("v-uni-view",{staticClass:"cu-form-group",staticStyle:{"background-color":"transparent"}},[e("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[t._l(t.staffInfo.imgs,function(a,i){return e("v-uni-view",{key:i,staticClass:"bg-img",attrs:{"data-url":t.imgList[i]},on:{click:function(a){a=t.$handleEvent(a),t.ViewImageB(i)}}},[e("v-uni-image",{attrs:{src:a,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"cu-tag bg-red",attrs:{"data-target":"imgs","data-index":i},on:{click:function(a){a.stopPropagation(),a=t.$handleEvent(a),t.DelImg(a)}}},[e("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)}),t.staffInfo.imgs.length<5?e("v-uni-view",{staticClass:"solids",attrs:{"data-target":"imgs"},on:{click:function(a){a=t.$handleEvent(a),t.ChooseImage(a)}}},[e("v-uni-text",{staticClass:"cuIcon-cameraadd"})],1):t._e()],2)],1),e("v-uni-view",{staticClass:"cu-form-group",staticStyle:{"border-top":"1px solid #f5f5f5"}},[e("v-uni-view",{staticClass:"title"},[t._v("我的标签")]),e("v-uni-text",{staticClass:"cuIcon-tagfill text-main"})],1),e("v-uni-view",{staticClass:"flex align-center margin-left-sm flex-wrap",staticStyle:{width:"700upx"}},t._l(t.tags,function(a,i){return e("v-uni-view",{key:i,class:1==a.is_exist?"cu-tag radius bg-main2 margin-right-xs":"cu-tag radius bg-gray margin-right-xs",staticStyle:{margin:"0","margin-right":"5upx","margin-top":"5upx"},on:{click:function(a){a=t.$handleEvent(a),t.SelectTag(i)}}},[t._v(t._s(a.tag))])}),1),e("v-uni-view",{staticClass:"cu-form-group margin-top",staticStyle:{"border-top":"1px solid #f5f5f5"}},[e("v-uni-textarea",{attrs:{placeholder:"个人的一句话",maxlength:"50",disabled:null!=t.modalName},on:{input:function(a){a=t.$handleEvent(a),t.textareaAInput(a)}},model:{value:t.staffInfo.synopsis,callback:function(a){t.$set(t.staffInfo,"synopsis",a)},expression:"staffInfo.synopsis"}})],1),e("v-uni-view",{staticClass:"cu-form-group margin-top",staticStyle:{"border-top":"1px solid #f5f5f5"}},[e("v-uni-textarea",{attrs:{placeholder:"个人介绍",maxlength:"255",disabled:null!=t.modalName},on:{input:function(a){a=t.$handleEvent(a),t.textareaAInput(a)}},model:{value:t.staffInfo.introduce,callback:function(a){t.$set(t.staffInfo,"introduce",a)},expression:"staffInfo.introduce"}})],1),e("v-uni-view",{staticClass:"cu-bar tabbar bg-white  foot",staticStyle:{"justify-content":"center"}},[e("v-uni-button",{staticClass:"cu-btn lg bg-main3 round",staticStyle:{width:"40%"},attrs:{"data-name":"book"},on:{click:function(a){a=t.$handleEvent(a),t.editConfirm(a)}}},[e("v-uni-text",{staticClass:"cuIcon-edit margin-right-sm"}),t._v("完成")],1)],1)],1)},n=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return n})},dcd5:function(t,a,e){"use strict";e.r(a);var i=e("a267"),n=e("3e56");for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);e("e93b");var o=e("2877"),f=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"38847a6e",null);a["default"]=f.exports},e3ee:function(t,a,e){var i=e("f930");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("36e5af89",i,!0,{sourceMap:!1,shadowMode:!1})},e93b:function(t,a,e){"use strict";var i=e("e3ee"),n=e.n(i);n.a},f930:function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,".page[data-v-38847a6e]{min-height:100vh}",""])}}]);