!function(){var t=document.createElement("style");t.innerHTML=".table[data-v-4563e7f0]{font-size:.28rem;color:#1e2329;letter-spacing:.0058rem;position:relative;background:#fff;line-height:1.2}.table .table-list[data-v-4563e7f0]{width:100%;font-size:.28rem}.table .table-list .table-item[data-v-4563e7f0]{padding:0 .2rem}.table .table-list .table-item:not(.table-header) .table-item_d[data-v-4563e7f0]{border-bottom:.02rem solid #f5f5f5}.table .table-list .table-item.table-header[data-v-4563e7f0]{font-size:.24rem;color:#999}.table .table-list .table-item.table-header th[data-v-4563e7f0]{font-weight:400}.table .table-list .table-item .table-item_d[data-v-4563e7f0]{padding:.2rem 0}.table .table-list .table-item .table-item_d .icon-symbol[data-v-4563e7f0]{font-size:.32rem}.table .table-list .table-item .table-item_d[data-v-4563e7f0]:nth-child(1){max-width:30vw;display:flex;align-items:center;text-align:left}.table .table-list .table-item .table-item_d[data-v-4563e7f0]:nth-child(2){text-align:left;max-width:30vw}.table .table-list .table-item .table-item_d[data-v-4563e7f0]:nth-child(3){text-align:right}.table .table-list .table-item .table-item_d:nth-child(3).th[data-v-4563e7f0]{text-align:center}.table .table-list .table-item .table-item_d[data-v-4563e7f0]:nth-child(4){word-break:break-all;text-align:right}.table .button-priceChange[data-v-4563e7f0]{min-width:1.4rem;font-size:.28rem}.main[data-v-4563e7f0]{font-size:.28rem;color:#1e2329;letter-spacing:0;word-break:break-all}.minor[data-v-4563e7f0]{font-size:.24rem;color:#999;letter-spacing:0;font-weight:400}.filter-menu[data-v-81366382]{margin-bottom:.04rem}main[data-v-81366382]{padding:0 .1rem .6rem}[data-v-81366382] .van-button__text{display:flex;align-items:center}.btn-content[data-v-81366382]{margin:0 .1rem}.popup-title[data-v-81366382]{font-size:.32rem;text-align:center;margin-top:.1rem}.popup-content[data-v-81366382]{font-size:.28rem;line-height:1.5}.filter-container[data-v-81366382]{text-align:right;padding:.2rem .3rem 0;color:#6a719c;font-size:.28rem}.filter-container .filter-button[data-v-81366382]{display:inline-flex;align-items:center}.filter-container .filter-button[data-v-81366382]:active{color:#fff}.filter-container .icon-shaixuan[data-v-81366382]{margin-right:.1rem;font-size:.24rem}.sumbit-btn[data-v-81366382]{margin-top:.6rem}.inline[data-v-81366382]{display:inline-flex;width:auto}.inline[data-v-81366382]:after{display:none}\n",document.head.appendChild(t),System.register(["./index-legacy.f86bbfcb.js","./vendor-legacy.832baddb.js"],(function(t){"use strict";var e,i,n,a,o,l,s,r,c,d,m,h,u,p,b,f,v,g,w,k;return{setters:[function(t){e=t._,i=t.N,n=t.w},function(t){a=t.r,o=t.o,l=t.v,s=t.A,r=t.D,c=t.F,d=t.y,m=t.O,h=t.I,u=t.R,p=t.x,b=t.P,f=t.Q,v=t.w,g=t.c,w=t.G,k=t.J}],execute:function(){const y={name:"NewPair",props:{tableList:Array,loading:{type:Boolean,default:!1}},data:()=>({}),computed:{isLoading(){return this.loading}},methods:{tableRowClick(t){var e,i,n,a,o;null!==(e=window)&&void 0!==e&&null!==(i=e.main)&&void 0!==i&&i.openMarket?null===(n=window)||void 0===n||null===(a=n.main)||void 0===a||null===(o=a.openMarket)||void 0===o||o.call(a,t.target_token,t.chain):window.open("https://ave.ai/token/"+t.target_token+"-"+t.chain)}}},_=t=>(b("data-v-4563e7f0"),t=t(),f(),t),x={class:"table"},$={class:"table-list"},N={class:"table-item table-header"},C={class:"table-item_d"},L={class:"table-item_d"},S=_((()=>s("th",{class:"table-item_d th"},"AMM",-1))),z={class:"table-item_d"},D=["onClick"],P={class:"table-item_d symbol"},U={key:0},V={class:"main"},B=_((()=>s("br",null,null,-1))),M={class:"minor"},O={key:1},E={class:"main"},j=_((()=>s("br",null,null,-1))),q={class:"minor"},I={class:"table-item_d"},A={class:"main"},R=_((()=>s("br",null,null,-1))),T={class:"minor"},F={class:"main"},G=_((()=>s("br",null,null,-1))),H={class:"minor"},J={class:"table-item_d"},Q={class:"main"},K=_((()=>s("br",null,null,-1))),W={class:"icon-svg icon-symbol",style:{cursor:"default"},"aria-hidden":"true"},X=["xlink:href"],Y={class:"table-item_d"},Z={class:"main"},tt=_((()=>s("br",null,null,-1))),et={class:"minor"};const it={style:{display:"flex","align-items":"center"}},nt={class:"icon-svg icon-net-connect","aria-hidden":"true"},at=["xlink:href"],ot={class:"btn-content"},lt={class:"icon-svg icon-net-connect","aria-hidden":"true"},st=["xlink:href"],rt={style:{height:"50vh","overflow-y":"auto"}},ct={class:"icon-svg icon-net-connect","aria-hidden":"true"},dt=["xlink:href"],mt={class:"popup-title"},ht={key:0,class:"icon-svg icon-net-connect","aria-hidden":"true"},ut=["xlink:href"],pt={class:"btn-content"};t("default",e({name:"Pool",components:{NewPairs:e(y,[["render",function(t,e,i,n,b,f){const v=a("van-empty");return o(),l("div",x,[s("table",$,[s("tr",N,[s("th",C,r(t.$t("poolPair")),1),s("th",L,r(t.$t("pairAmount")),1),S,s("th",z,r(t.$t("poolSize")),1)]),(o(!0),l(c,null,d(i.tableList,((e,i)=>(o(),l("tr",{class:"table-item",key:i,onClick:m((t=>f.tableRowClick(e)),["stop"])},[s("td",P,[e.target_token===e.token0_address?(o(),l("div",U,[s("span",V,r(e.token0_symbol),1),B,s("span",M,"/"+r(e.token1_symbol),1)])):(o(),l("div",O,[s("span",E,r(e.token1_symbol),1),j,s("span",q,"/"+r(e.token0_symbol),1)]))]),s("td",I,[e.target_token===e.token0_address?(o(),l(c,{key:0},[s("span",A,r(t.$f.formatNumUnit(e.reserve0,2)),1),R,s("span",T,"/"+r(t.$f.formatNumUnit(e.reserve1,2)),1)],64)):(o(),l(c,{key:1},[s("span",F,r(t.$f.formatNumUnit(e.reserve1,2)),1),G,s("span",H,"/"+r(t.$f.formatNumUnit(e.reserve0,2)),1)],64))]),s("td",J,[s("span",Q,r(e.amm),1),K,(o(),l("svg",W,[s("use",{"xlink:href":`#icon-${e.chain}`},null,8,X)]))]),s("td",Y,[s("span",Z,"$"+r(e.target_token!==e.token0_address?t.$f.formatNumUnit(Math.round(e.reserve0*e.token0_price_usd*2)):t.$f.formatNumUnit(Math.round(e.reserve1*e.token1_price_usd*2))),1),tt,s("span",et,r(t.$dayjs(1e3*e.created_at).fromNow()),1)])],8,D)))),128))]),h(p(v,{class:"empty",image:t.emptyNoDataLight,description:t.$t("empty")},null,8,["image","description"]),[[u,i.tableList&&0===i.tableList.length&&!f.isLoading]])])}],["__scopeId","data-v-4563e7f0"]])},data(){let t=Object.values(i);t=t.map((t=>({...t,amm:Object.keys(t.swapUrl)})));const e=t.reduce(((t,e)=>t.concat(e.amm)),[]);return{conditions:{pageNO:1,pageSize:15,sort:"created_at",direction:"desc",chain:"",amm:"",minPoolSize:1e5},initNetworkList:t,amms:e,tableData:[],loading:!1,total:1e3,show:!1,filterPopupVisible:!1,listLoading:!1,finished:!1,show1:!1,show2:!1,error:!1,poolSizeOption:[{text:"$10000",value:1e4},{text:"$100000",value:1e5},{text:"$500000",value:5e5},{text:"$1000000",value:1e6},{text:"$2000000",value:2e6}]}},computed:{networkList(){return[{netName:"",name:this.$t("allChain")},...this.initNetworkList]},ammList(){let t=[];var e;this.conditions.chain?t=(null===(e=this.initNetworkList.find((t=>t.netName===this.conditions.chain)))||void 0===e?void 0:e.amm)||[]:t=this.amms;return[{text:this.$t("allPool"),value:""}].concat(t.map((t=>({text:t,value:t}))))},chainName(){var t,e,n,a;return this.conditions.chain&&null!==(t=i)&&void 0!==t&&null!==(e=t[this.conditions.chain])&&void 0!==e&&e.name?null===(n=i)||void 0===n||null===(a=n[this.conditions.chain])||void 0===a?void 0:a.name:this.$t("allChain")},sortByList(){return[{name:this.$t("createdTime"),value:"created_at",color:"created_at"===this.conditions.sort?"#558BED":""},{name:this.$t("poolCirculatingSupply"),value:"poolSize",color:"poolSize"===this.conditions.sort?"#558BED":""}]},sortDirectionList(){return[{name:this.$t("ascending"),value:"asc",color:"asc"===this.conditions.direction?"#558BED":""},{name:this.$t("descending"),value:"desc",color:"desc"===this.conditions.direction?"#558BED":""}]},activeSort(){var t;return null===(t=this.sortByList.find((t=>t.value===this.conditions.sort)))||void 0===t?void 0:t.name},activeDirection(){var t;return null===(t=this.sortDirectionList.find((t=>t.value===this.conditions.direction)))||void 0===t?void 0:t.name}},activated(){this.getNewPairs()},methods:{query(){this.filterPopupVisible=!1,this.conditions.pageNO=1,this.tableData=[],this.finished=!1,this.error=!1,this.getNewPairs()},getNewPairs(){this.loading=!0,n({...this.conditions,minPoolSize:Math.round(this.conditions.minPoolSize/2)}).then((t=>{this.total=t.total,this.tableData=this.tableData.concat(t.data),(this.tableData.length>=this.total||t.data.length<this.conditions.pageSize)&&(this.finished=!0)})).catch((()=>{this.error=!0})).finally((()=>{this.loading=!1}))},selectChain(t){this.show=!1,this.$refs.dropDownChain.toggle(!1),this.conditions.chain=t.netName,this.conditions.amm="",this.query()},onLoad(){this.conditions.pageNO++,this.getNewPairs()},onSelect1(t){this.conditions.sort=t.value,this.show1=!1},onSelect2(t){this.conditions.direction=t.value,this.show2=!1}}},[["render",function(t,e,i,n,h,u){const b=a("van-icon"),f=a("van-cell"),y=a("van-dropdown-item"),_=a("van-dropdown-menu"),x=a("new-pairs"),$=a("van-list"),N=a("van-action-sheet"),C=a("van-button"),L=a("van-field"),S=a("van-stepper"),z=a("van-form"),D=a("van-popup");return o(),l(c,null,[p(_,{"active-color":"#558BED",class:"filter-menu"},{default:v((()=>[p(y,{modelValue:h.conditions.chain,"onUpdate:modelValue":e[0]||(e[0]=t=>h.conditions.chain=t),teleport:"#app",ref:"dropDownChain"},{title:v((()=>[s("div",it,[(o(),l("svg",nt,[s("use",{"xlink:href":`#icon-${h.conditions.chain}`},null,8,at)])),s("span",ot,r(u.chainName),1)])])),default:v((()=>[(o(!0),l(c,null,d(u.networkList,(e=>(o(),g(f,{key:e.netName,class:"list-item",onClick:m((t=>u.selectChain(e)),["stop"]),title:e.name,icon:t.$f.formatIcon(e),size:"large",clickable:"",center:""},{icon:v((()=>[(o(),l("svg",lt,[s("use",{"xlink:href":`#icon-${e.netName}`},null,8,st)]))])),"right-icon":v((()=>[h.conditions.chain===e.netName?(o(),g(b,{key:0,color:"#558BED",name:"success"})):w("",!0)])),_:2},1032,["onClick","title","icon"])))),128))])),_:1},8,["modelValue"]),p(y,{modelValue:h.conditions.amm,"onUpdate:modelValue":e[1]||(e[1]=t=>h.conditions.amm=t),options:u.ammList,onChange:u.query},null,8,["modelValue","options","onChange"]),p(y,{modelValue:h.conditions.minPoolSize,"onUpdate:modelValue":e[2]||(e[2]=t=>h.conditions.minPoolSize=t),options:h.poolSizeOption,onChange:u.query},null,8,["modelValue","options","onChange"])])),_:1}),s("main",null,[p($,{loading:h.loading,"onUpdate:loading":e[3]||(e[3]=t=>h.loading=t),finished:h.finished,error:h.error,"onUpdate:error":e[4]||(e[4]=t=>h.error=t),"error-text":t.$t("errorText"),onLoad:u.onLoad,"loading-text":t.$t("loading"),"finished-text":t.$t("noMore")},{default:v((()=>[p(x,{tableList:h.tableData,loading:h.loading},null,8,["tableList","loading"])])),_:1},8,["loading","finished","error","error-text","onLoad","loading-text","finished-text"]),p(N,{show:h.show,"onUpdate:show":e[5]||(e[5]=t=>h.show=t),"cancel-text":t.$t("cancel"),description:t.$t("selectChain"),teleport:"#app","close-on-click-action":""},{default:v((()=>[s("div",rt,[(o(!0),l(c,null,d(u.networkList,(e=>(o(),g(f,{key:e.netName,class:"list-item",onClick:m((t=>u.selectChain(e)),["stop"]),title:e.name,icon:t.$f.formatIcon(e),value:e.netName,size:"large",clickable:""},{icon:v((()=>[(o(),l("svg",ct,[s("use",{"xlink:href":`#icon-${e.netName}`},null,8,dt)]))])),_:2},1032,["onClick","title","icon","value"])))),128))])])),_:1},8,["show","cancel-text","description"]),p(D,{show:h.filterPopupVisible,"onUpdate:show":e[10]||(e[10]=t=>h.filterPopupVisible=t),class:"popup-container filter",closeable:!0,"close-on-click-overlay":!1,"close-on-popstate":!1,round:"",position:"center",teleport:"#app",style:{width:"90%"}},{default:v((()=>[s("h3",mt,r(t.$t("filterCriteria")),1),p(z,{class:"popup-content",ref:"form","validate-first":"",onSubmit:u.query,"input-align":"right"},{default:v((()=>[p(L,{label:"Chain",placeholder:"",readonly:""},{input:v((()=>[p(C,{plain:"",hairline:"",type:"primary",size:"small",onClick:e[6]||(e[6]=t=>h.show=!0)},{default:v((()=>[h.conditions.chain?(o(),l("svg",ht,[s("use",{"xlink:href":`#icon-${h.conditions.chain}`},null,8,ut)])):w("",!0),s("span",pt,r(u.chainName),1),p(b,{name:"arrow-down"})])),_:1})])),_:1}),p(L,{label:t.$t("minCirculatingSupply"),placeholder:"",readonly:""},{input:v((()=>[p(S,{modelValue:h.conditions.minPoolSize,"onUpdate:modelValue":e[7]||(e[7]=t=>h.conditions.minPoolSize=t),"input-width":"80px",min:1e5,step:1e4},null,8,["modelValue"])])),_:1},8,["label"]),p(L,{label:t.$t("sortBy"),placeholder:"",readonly:"",clickable:"","right-icon":"arrow-down","model-value":u.activeSort,onClick:e[8]||(e[8]=m((t=>h.show1=!0),["stop"]))},null,8,["label","model-value"]),p(L,{label:t.$t("sortDirection"),placeholder:"",readonly:"",clickable:"","right-icon":"arrow-down","model-value":u.activeDirection,onClick:e[9]||(e[9]=m((t=>h.show2=!0),["stop"]))},null,8,["label","model-value"]),p(C,{class:"sumbit-btn",round:"",block:"",type:"primary","native-type":"submit"},{default:v((()=>[k(r(t.$t("search")),1)])),_:1})])),_:1},8,["onSubmit"])])),_:1},8,["show"]),p(N,{show:h.show1,"onUpdate:show":e[11]||(e[11]=t=>h.show1=t),"cancel-text":t.$t("cancel"),description:t.$t("sortBy"),teleport:"#app","close-on-click-action":"",actions:u.sortByList,onSelect:u.onSelect1},null,8,["show","cancel-text","description","actions","onSelect"]),p(N,{show:h.show2,"onUpdate:show":e[12]||(e[12]=t=>h.show2=t),"cancel-text":t.$t("cancel"),description:t.$t("sortDirection"),teleport:"#app","close-on-click-action":"",actions:u.sortDirectionList,onSelect:u.onSelect2},null,8,["show","cancel-text","description","actions","onSelect"])])],64)}],["__scopeId","data-v-81366382"]]))}}}))}();
