
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/reg/reg"],"window":{"backgroundTextStyle":"light","navigationBarTextStyle":"white","navigationBarTitleText":"SYL","navigationBarBackgroundColor":"#30117B","backgroundColor":"#1bc0f0","animationType":"zoom-fade-out","navigationStyle":"custom","scrollIndicator":"none"},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"纯前端高性能多端兼容拼图验证，滑动验证，示例","compilerVersion":"2.6.11","entryPagePath":"pages/reg/reg","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/reg/reg","meta":{"isQuit":true},"window":{"navigationStyle":"custom"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
