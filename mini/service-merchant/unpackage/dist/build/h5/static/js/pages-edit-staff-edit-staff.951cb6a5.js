(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-edit-staff-edit-staff"],{"0515":function(t,e,n){"use strict";n.r(e);var i=n("ef75"),a=n("f0a6");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("f332");var s=n("2877"),l=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"b30988fe",null);e["default"]=l.exports},"69f4":function(t,e,n){var i=n("79da");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("b4fae78a",i,!0,{sourceMap:!1,shadowMode:!1})},"79da":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".page[data-v-b30988fe]{min-height:100vh}",""])},d8ea:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("e814"));n("7f7f");var o={data:function(){return{levelName:"",id:null,label:null,name:null,modalName:null,imgList:["../../static/girls/1.jpg","../../static/girls/1.jpg"],tags:["红牌技师","特级技师","高级技师"],levels:null,resultLevel:null,isFree:null}},onLoad:function(t){this.id=t.id,this.name=t.name,this.label=t.label,this.isFree=t.isFree,this.GetLevel()},methods:{fireStaff:function(){var t=this;"false"==this.isFree?(console.log(123),uni.showToast({icon:"none",title:"技师忙碌，不可辞退",duration:1500})):uni.showModal({content:"确定辞退技师吗？",success:function(e){e.confirm&&uni.request({header:{token:t.MerchantToken.token},url:t.Server+"staff/del",data:{staffId:(0,a.default)(t.id)},success:function(t){uni.hideLoading(),0==t.data.code?(uni.showToast({icon:"none",title:"辞退完成",duration:1500}),setTimeout(function(){uni.navigateBack({delta:2})},1500)):101==t.data.code?(uni.showToast({icon:"none",title:"登录超时，将重新授权登录",duration:1e3}),setTimeout(function(){uni.reLaunch({url:"../login/login"})},2e3)):uni.showToast({icon:"none",title:t.data.msg,duration:1e3})}})}})},confirmEdit:function(){var t=this;console.log(this.name),console.log(this.resultLevel),uni.showModal({content:"确定修改资料吗？",success:function(e){e.confirm&&uni.request({method:"POST",header:{token:t.MerchantToken.token},url:t.Server+"staff/edit",data:{staffId:(0,a.default)(t.id),name:t.name,level:t.levels[t.resultLevel].title},success:function(t){uni.hideLoading(),0==t.data.code?(uni.showToast({icon:"none",title:"修改成功",duration:1500}),setTimeout(function(){uni.navigateBack({})},1500)):101==t.data.code?(uni.showToast({icon:"none",title:"登录超时，将重新授权登录",duration:1e3}),setTimeout(function(){uni.reLaunch({url:"../login/login"})},2e3)):uni.showToast({icon:"none",title:t.data.msg,duration:1e3})}})}})},ChangeLevel:function(t){var e=this;this.label=this.levels[t].title,e.resultLevel=t},AddLevel:function(){uni.showLoading({});var t=this;if(""!=this.levelName){var e=!0;for(var n in t.levels)if(t.levels[n].title==t.levelName){t.modalName=null,uni.showToast({icon:"none",title:"等级重复",duration:1e3}),setTimeout(function(){t.modalName="editLevel"},1e3),e=!1;break}console.log(e),this.levelName.length>6?uni.showToast({icon:"名称最多6个字"}):0==e||uni.request({method:"POST",header:{token:t.MerchantToken.token},url:t.Server+"staffLevel/add",data:{title:t.levelName},success:function(e){uni.hideLoading(),0==e.data.code?(t.modalName=null,t.GetLevel()):101==e.data.code?(uni.showToast({icon:"none",title:"登录超时，将重新授权登录",duration:1e3}),setTimeout(function(){uni.reLaunch({url:"../login/login"})},2e3)):uni.showToast({icon:"none",title:e.data.msg,duration:1e3})}})}else uni.showToast({icon:"none",title:"请输入等级名称"})},DeleteLevel:function(t){var e=this;uni.showModal({content:"确定删除吗？",success:function(n){n.confirm&&uni.request({header:{token:e.MerchantToken.token},url:e.Server+"staffLevel/del",data:{levelId:e.levels[t].id},success:function(n){uni.hideLoading(),0==n.data.code?e.levels.splice(t,1):101==n.data.code?(uni.showToast({icon:"none",title:"登录超时，将重新授权登录",duration:1e3}),setTimeout(function(){uni.reLaunch({url:"../login/login"})},2e3)):uni.showToast({icon:"none",title:n.data.msg,duration:1e3})}})}})},GetLevel:function(){var t=this;uni.request({header:{token:t.MerchantToken.token},url:t.Server+"staffLevel/list",success:function(e){if(uni.hideLoading(),0==e.data.code){for(var n in t.levels=e.data.data,t.levels)if(t.levels[n].title==t.label){t.resultLevel=n;break}}else 101==e.data.code?(uni.showToast({icon:"none",title:"登录超时，将重新授权登录",duration:1e3}),setTimeout(function(){uni.reLaunch({url:"../login/login"})},2e3)):uni.showToast({icon:"none",title:e.data.msg,duration:1e3})}})},hideModal:function(){this.modalName=null},showModal:function(t){this.modalName=t.currentTarget.dataset.name},ChooseImage:function(){var t=this;uni.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(e){0!=t.imgList.length?t.imgList=t.imgList.concat(e.tempFilePaths):t.imgList=e.tempFilePaths}})},ViewImage:function(){},DelImg:function(t){var e=this;uni.showModal({content:"确定要删除吗？",cancelText:"取消",confirmText:"确定",success:function(n){n.confirm&&e.imgList.splice(t.currentTarget.dataset.index,1)}})}}};e.default=o},ef75:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"page bg-white"},[n("cu-custom",{attrs:{bgColor:"bg-black",isBack:!0}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[t._v("编辑技师")])],2),n("v-uni-view",{staticClass:"cu-form-group",staticStyle:{border:"0"}},[n("v-uni-view",{staticClass:"title"},[t._v("技师编号")]),n("v-uni-input",{attrs:{name:"input"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-uni-text",{staticClass:"cuIcon-peoplefill text-main"})],1),n("v-uni-view",{staticClass:"cu-form-group",staticStyle:{"border-top":"1px solid #f5f5f5"}},[n("v-uni-view",{staticClass:"title"},[t._v("技师等级")]),n("v-uni-button",{staticClass:"cu-btn round bg-main3",attrs:{"data-name":"editLevel"},on:{click:function(e){e=t.$handleEvent(e),t.showModal(e)}}},[t._v("新增等级")])],1),n("v-uni-view",{staticClass:"cu-modal",class:"editLevel"==t.modalName?"show":""},[n("v-uni-view",{staticClass:"cu-dialog"},[n("v-uni-view",{staticClass:"cu-bar  justify-end"},[n("v-uni-view",{staticClass:"action",on:{click:function(e){e=t.$handleEvent(e),t.hideModal(e)}}},[n("v-uni-view",{staticClass:"content text-green"},[t._v("新增等级")]),n("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),n("v-uni-view",{staticClass:"padding-xl"},[n("v-uni-input",{attrs:{type:"text",placeholder:"请输入等级名称"},model:{value:t.levelName,callback:function(e){t.levelName=e},expression:"levelName"}}),n("v-uni-button",{staticClass:"margin-top cu-btn round bg-main3",staticStyle:{width:"50%"},on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.AddLevel(e)}}},[t._v("确定")])],1)],1)],1),n("v-uni-view",{staticClass:" margin-left-sm flex-wrap",staticStyle:{width:"700upx"}},t._l(t.levels,function(e,i){return n("v-uni-view",{key:i,staticClass:"flex align-center justify-between margin-top-sm"},[n("v-uni-view",{staticClass:"flex align-center",on:{click:function(e){e=t.$handleEvent(e),t.ChangeLevel(i)}}},[n("v-uni-text",{class:t.label==e.title?"cuIcon-roundcheck text-red margin-right-sm":"text-gray cuIcon-round margin-right-sm",staticStyle:{"font-size":"40upx"}}),t._v(t._s(e.title))],1),n("v-uni-button",{staticClass:"cu-btn bg-main2 radius",on:{click:function(e){e=t.$handleEvent(e),t.DeleteLevel(i)}}},[t._v("删除")])],1)}),1),n("v-uni-view",{staticClass:"cu-bar tabbar bg-white  foot",staticStyle:{"justify-content":"center"}},[n("v-uni-button",{staticClass:"cu-btn lg bg-main2 round margin-right-sm",staticStyle:{width:"40%"},attrs:{"data-name":"book"},on:{click:function(e){e=t.$handleEvent(e),t.fireStaff(e)}}},[n("v-uni-text",{staticClass:" margin-right-sm"}),t._v("辞退技师")],1),n("v-uni-button",{staticClass:"cu-btn lg bg-main3 round",staticStyle:{width:"40%"},attrs:{"data-name":"book"},on:{click:function(e){e=t.$handleEvent(e),t.confirmEdit(e)}}},[n("v-uni-text",{staticClass:"cuIcon-edit margin-right-sm"}),t._v("确定修改")],1)],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},f0a6:function(t,e,n){"use strict";n.r(e);var i=n("d8ea"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},f332:function(t,e,n){"use strict";var i=n("69f4"),a=n.n(i);a.a}}]);