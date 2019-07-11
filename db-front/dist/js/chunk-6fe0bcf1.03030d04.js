(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fe0bcf1"],{"6f36":function(t,e,s){"use strict";s.d(e,"e",function(){return l}),s.d(e,"c",function(){return n}),s.d(e,"b",function(){return r}),s.d(e,"a",function(){return o}),s.d(e,"d",function(){return c}),s.d(e,"f",function(){return u});var a=s("b775"),i={workSheet:"/sheets/workSheet",checkSheet:"/sheets/checkSheet",repairSheetDetail:"/sheets/repairSheetDetail",workSheetRow:"/sheets/workSheetRow",checkSheetRow:"/sheets/checkSheetRow",scheduleDetail:"/sheets/scheduleDetail"};function l(){return Object(a["b"])({url:i.workSheet,method:"get"})}function n(){return Object(a["b"])({url:i.checkSheet,method:"get"})}function r(t){return Object(a["b"])({url:i.workSheetRow,method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function o(t){return Object(a["b"])({url:i.checkSheetRow,method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function c(){return Object(a["b"])({url:i.repairSheetDetail,method:"get"})}function u(t){return Object(a["b"])({url:i.scheduleDetail,method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}},"77b8":function(t,e,s){"use strict";var a=s("ece7"),i=s.n(a);i.a},ba66:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("page-view",{attrs:{title:"报修单",logo:"/repairSheet.png"}},[s("detail-list",{staticClass:"detail-layout",attrs:{slot:"headerContent",size:"small",col:1},slot:"headerContent"},[s("detail-list-item",{attrs:{term:"待检修器材"}},[t._v(t._s(this.details.EqId))]),s("detail-list-item",{attrs:{term:"详细描述"}},[t._v(t._s(this.details.details))]),s("detail-list-item",{attrs:{term:"所需配件"}},[t._v(t._s(this.details.stuffNeeded))]),s("detail-list-item",{attrs:{term:"报修用户电话"}},[t._v(t._s(this.details.telNumber))])],1),s("a-row",{staticClass:"status-list",attrs:{slot:"extra"},slot:"extra"},[s("a-col",{attrs:{xs:12,sm:12}},[s("div",{staticClass:"text"},[t._v("报修单单号")]),s("div",{staticClass:"heading",attrs:{span:"4"}},[t._v(t._s(this.details.title))])])],1),s("a-card",{attrs:{bordered:!1,gutter:24}},[s("div",{staticClass:"photo"},[s("a-row",[s("a-col",{staticStyle:{textAlign:"center","margin-bottom":"0px","margin-top":"0px"}},[s("div",{staticClass:"heading",staticStyle:{"margin-bottom":"12px"}},[s("a-avatar",{attrs:{size:"large",shape:"square",src:"/camera.png"}}),t._v("\n          "+t._s("故障器材图片")+"\n          ")],1)])],1),s("a-col",{staticStyle:{textAlign:"center"}},[s("img",{attrs:{src:t.details.cover,alt:t.details.title}})])],1)]),s("a-card",{attrs:{bordered:!1,title:" "}},[s("a-col",{staticStyle:{textAlign:"center","margin-bottom":"18px"}},[s("div",{staticClass:"heading"},[t._v(t._s("报修单进度"))])]),s("a-steps",{attrs:{direction:t.isMobile()?"vertical":"horizontal",current:this.details.state-"0",progressDot:""}},[s("a-step",{attrs:{title:"用户提交"}}),s("a-step",{attrs:{title:"巡检员提交"}}),s("a-step",{attrs:{title:"调度完成"}})],1)],1),s("a-card",{attrs:{bordered:!1,title:" ",visible:!1}},[s("a-col",{staticStyle:{textAlign:"center","margin-bottom":"0px"}},[s("div",{staticClass:"heading"},[t._v(t._s("调度"))])]),s("a-row",{attrs:{grid:"",last:""}},[s("a-row",[s("a-col",{attrs:{span:8}},[s("a-form-item",{staticStyle:{textAlign:"left"},attrs:{"validate-status":t.successRepair,label:"维 修 员 ","label-col":{span:8},"wrapper-col":{span:15}}},[s("a-select",{staticStyle:{"max-width":"200px",width:"120%"},attrs:{disabled:t.qualified,placeholder:"选择维修员"},on:{change:t.handleStaffChange}},t._l(this.stfList,function(e){return s("a-select-option",{key:e.staffId},[t._v("\n                "+t._s(e.staffName)+"\n              ")])}),1)],1)],1)],1),s("a-row",[s("a-col",{attrs:{span:8}},[s("a-form-item",{staticStyle:{textAlign:"left"},attrs:{label:"器材选择","label-col":{span:8},"wrapper-col":{span:15}}},[s("a-select",{staticStyle:{width:"120%"},attrs:{disabled:t.qualifiedForEq,placeholder:"选择器材类型"},on:{change:t.handleEqChange}},t._l(this.eqType,function(e){return s("a-select-option",{key:e.no},[t._v("\n                "+t._s(e.type+" "+e.model)+"\n                ")])}),1)],1)],1),s("a-col",{attrs:{span:9}},[s("a-form-item",{attrs:{"validate-status":"success",label:"数量","label-col":{span:5},"wrapper-col":{span:18}}},[s("a-input",{staticStyle:{width:"100%"},attrs:{disabled:"disabled",placeholder:t.text,maxLength:"15"},model:{value:t.eqNum,callback:function(e){t.eqNum=e},expression:"eqNum"}})],1)],1),s("a-col",{attrs:{span:6}},[s("a-button",{attrs:{disabled:t.qualifiedforButton,type:"primary"},on:{click:t.handleAddEq}},[t._v("添加")])],1)],1)],1),s("a-row",{attrs:{grid:"",last:""}},[s("a-row",[s("a-col",{attrs:{span:8}},[s("a-form-item",{attrs:{label:"配件选择","label-col":{span:8},"wrapper-col":{span:15}}},[s("a-select",{staticStyle:{width:"120%"},attrs:{disabled:t.qualified,placeholder:"选择配件类型"},on:{change:t.handleAcChange}},t._l(this.acType,function(e){return s("a-select-option",{key:e.no},[t._v("\n                "+t._s(e.type+" "+e.model)+"\n              ")])}),1)],1)],1),s("a-col",{attrs:{span:9}},[s("a-form-item",{attrs:{"validate-status":t.compareAc,label:"数量","label-col":{span:5},"wrapper-col":{span:18}}},[s("a-input",{staticStyle:{width:"100%"},attrs:{disabled:t.qualified,placeholder:t.textAc,maxLength:"15"},model:{value:t.acNum,callback:function(e){t.acNum=e},expression:"acNum"}})],1)],1),s("a-col",{attrs:{span:6}},[s("a-button",{attrs:{disabled:t.qualifiedforButtonAc,type:"primary"},on:{click:t.handleAddAc}},[t._v("添加")])],1)],1)],1),s("div",{staticStyle:{"margin-bottom":"24px"},attrs:{span:9}},[s("a-button",{attrs:{disabled:t.qualifiedforSubmit,type:"primary"},on:{click:t.onClickSubmit}},[t._v("提交")]),s("a-modal",{attrs:{title:"确认提交"},on:{ok:t.handleOK},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[s("div",{staticClass:"modal"},[t._v("\n                是否完成本次调度\n            ")])])],1),s("a-table",{attrs:{columns:t.columns,dataSource:this.result.ls,bordered:""},scopedSlots:t._u([t._l(["statue","type","model","number"],function(e){return{key:e,fn:function(a){return[s("div",{key:e},[t._v("\n          "+t._s(a)+"\n        ")])]}}})],null,!0)})],1)],1)},i=[],l=s("e814"),n=s.n(l),r=s("bd86"),o=s("ac0d"),c=s("680a"),u=s("c16f"),d=s("6f36"),h=s("da05"),p=(s("2f62"),u["a"].Item);console.log("DetailListItem",p);var m=[{title:"器材/配件",dataIndex:"statue",width:"25%",filters:[{text:"器材",value:"器材"},{text:"配件",value:"配件"}],onFilter:function(t,e){return 0===e.statue.indexOf(t)},scopedSlots:{customRender:"statue"}},{title:"类型",dataIndex:"type",width:"25%",scopedSlots:{customRender:"type"}},{title:"型号",dataIndex:"model",width:"25%",scopedSlots:{customRender:"model"}},{title:"数量",dataIndex:"number",width:"25%",scopedSlots:{customRender:"number"},sorter:function(t,e){return t.number>e.number}}],f={inject:["reload"],created:function(){var t=this;this.result.DSTid=this.userInfo.id,this.details=this.$route.params.details,this.result.RSTid=this.details.title,this.eqID=this.details.eqID,console.log("this.details.eqID",this.details.EqId),Object(d["d"])().then(function(e){console.log("response",e.data),t.eqType=e.data.equipType,t.acType=e.data.accessory,t.stfList=e.data.staff,console.log("eqType",t.eqType[0]),console.log("acType",t.acType),console.log("acType",t.stfList)})},name:"repairSheetDetail",components:{ACol:h["b"],PageView:c["c"],DetailList:u["a"],DetailListItem:p},mixins:[o["c"]],data:function(){var t;return t={activeTabKey:"1",rpData:[],columns:m,eqType:[],acType:[],stfList:[],eqID:"",visible2:!0,eqSelected:!1,submit:!1,result:{DSTid:"",RSTid:"",stfId:"",ls:[]},eqInfo:"",tempRow:{type:"",model:"",number:"",statue:"",key:1},tempKey:1,details:this.$route.params.details,eqNum:"",tempEq:"",tempAc:"",acNum:""},Object(r["a"])(t,"columns",m),Object(r["a"])(t,"visible",!1),Object(r["a"])(t,"info",""),t},filters:{statusFilter:function(t){var e={agree:"成功",reject:"驳回"};return e[t]},statusTypeFilter:function(t){var e={agree:"success",reject:"error"};return e[t]}},computed:{userInfo:function(){return this.$store.getters.userInfo},qualified:function(){if("0"==this.details.state||"2"==this.details.state)return"disabled"},qualifiedForEq:function(){if(console.log("eqselected",this.eqSelected),"0"==this.details.state||"2"==this.details.state||this.eqSelected)return"disabled"},successRepair:function(){return""===this.result.stfId?"error":"success"},maxEqNum:function(){if(""!==this.tempEq){var t=n()(this.tempEq),e=this.eqType[t].number;return console.log("maxNum",e),e}},maxAcNum:function(){if(""!==this.tempAc){var t=n()(this.tempAc),e=this.acType[t].number;return console.log("maxNum",e),e}},compare:function(){if(""===this.tempEq)return"success";if(!/(^[1-9]\d*$)/.test(this.eqNum))return"error";var t=n()(this.tempEq),e=this.eqType[t].number;if(console.log("maxNum",e),""!==this.eqNum){var s=n()(this.eqNum);return console.log("input",s),s>e?"error":"success"}return"error"},compareAc:function(){if(""===this.tempAc)return"success";if(!/(^[1-9]\d*$)/.test(this.acNum))return"error";var t=n()(this.tempAc),e=this.acType[t].number;if(console.log("maxNum2",e),""!==this.acNum){var s=n()(this.acNum);return console.log("input2",s),s>e?"error":"success"}return"error"},text:function(){return""!==this.tempEq?"最大数量:"+this.maxEqNum:"每次仅允许调度一个器材"},textAc:function(){return""!==this.tempAc?"最大数量:"+this.maxAcNum:"请输入数量"},qualifiedforButton:function(){return"0"==this.details.state||"2"==this.details.state||this.eqSelected?"disabled":""===this.tempEq||""===this.result.stfId?"disabled":void 0},qualifiedforButtonAc:function(){return"0"==this.details.state||"2"==this.details.state?"disabled":""===this.tempAc||""===this.acNum||""===this.result.stfId?"disabled":void 0},qualifiedforSubmit:function(){if(console.log("length",this.result.ls.length),0===this.result.ls.length||this.submit)return"disabled"}},methods:{handleOK:function(){var t=this,e=this.$createElement;this.visible=!1,this.result.stfId="ST"+this.result.stfId,console.log("this.result.stfId",this.result.stfId),Object(d["f"])(this.result).then(function(s){t.info=s.info,"ok"===t.info&&(t.submit=!0,t.details.state="2",t.$notification.open({message:"调度成功",description:"本条报修单调度成功",icon:e("a-icon",{attrs:{type:"check"},style:"color: #108ee9"})}))})},onClickSubmit:function(){this.visible=!0},handleStaffChange:function(t){this.result.stfId=t,console.log("newId",this.result.stfId)},handleEqChange:function(t){this.tempEq=t,console.log("newEq",this.tempEq)},handleAcChange:function(t){this.tempAc=t,console.log("newAc",this.tempAc)},handleAddEq:function(){var t=this.$createElement;this.eqNum="1";var e=n()(this.tempEq),s=this.eqType[e].number;console.log("容量",s);var a=n()(this.eqNum);console.log("需求",a),a>s?this.$notification.open({message:"添加失败",description:"仓储不足，请先补充仓储器材",icon:t("a-icon",{attrs:{type:"exclamation-circle"},style:"color: #108ee9"})}):(this.eqSelected=!0,console.log("rowls",this.result.ls),this.tempKey=this.tempKey+1,console.log("tempKey",this.tempKey),this.result.ls.push({type:this.eqType[e].type,model:this.eqType[e].model,number:a,statue:"器材",key:this.tempKey+1}),this.eqNum="",this.eqType[e].number=String(this.eqType[e].number-n()(a)),console.log("eqNumber",this.eqType.number))},handleAddAc:function(){var t=this.$createElement;if(/(^[1-9]\d*$)/.test(this.acNum)){var e=n()(this.tempAc),s=this.acType[e].number;console.log("容量2",s);var a=n()(this.acNum);console.log("需求2",a),a>s?this.$notification.open({message:"添加失败",description:"仓储不足，请先补充仓储配件",icon:t("a-icon",{attrs:{type:"exclamation-circle"},style:"color: #108ee9"})}):(console.log("rowls",this.result.ls),this.tempRow.key=this.tempKey+1,this.tempKey=this.tempKey+1,console.log("tempKey",this.tempKey),this.result.ls.push({type:this.acType[e].type,model:this.acType[e].model,number:a,statue:"配件",key:this.tempKey+1}),this.acNum="",this.acType[e].number=String(this.acType[e].number-n()(a)))}else this.$notification.open({message:"添加失败",description:"请输入合法的数字字符",icon:t("a-icon",{attrs:{type:"exclamation-circle"},style:"color: #108ee9"})})}}},b=f,y=(s("77b8"),s("2877")),g=Object(y["a"])(b,a,i,!1,null,"d7ac56fa",null);e["default"]=g.exports},c16f:function(t,e,s){"use strict";var a,i,l=s("fa43"),n=l["a"],r=n,o=s("2877"),c=Object(o["a"])(r,a,i,!1,null,null,null);e["a"]=c.exports},ece7:function(t,e,s){}}]);