import{_ as t,x as s,y as a,z as e}from"./index.1c79211d.js";import{r as c,H as i,o as l,v as n,A as d,D as r,F as o,y as v,S as u,P as b,Q as p,I as C,x as m,w as h,O as A,J as V}from"./vendor.b97e4876.js";const _={name:"CVAirdrop",data:()=>({userCVPoints:0,tableList:[]}),computed:{currentAccount(){return this.$store.state.currentAccount||""},currentAccountSplit(){return this.currentAccount.replace(new RegExp("(.{6})(.+)(.{4})"),"$1...$3")}},activated(){this.init()},methods:{init(){this.getAllCVZone(),this.getUserCVPoints()},getAllCVZone(){s().then((t=>{this.tableList=t||[]}))},getUserCVPoints(){this.$store.state.currentAccount&&a().then((t=>{this.userCVPoints=t||0}))},enterCV(t){this.$store.state.currentAccount?e(t.cv_id).finally((()=>{t.render_link&&(this.getUserCVPoints(),window.open(t.render_link))})):t.render_link&&window.open(t.render_link)}}},f=t=>(b("data-v-5cbe177c"),t=t(),p(),t),k=u('<div class="title-1" data-v-5cbe177c> Ave 携手 CC.DAO 社区举办 </div><div class="title-2" data-v-5cbe177c><div data-v-5cbe177c>CV元宇宙撸空投</div><div class="font-14" data-v-5cbe177c>（二期活动）</div></div><div class="time" data-v-5cbe177c>活动时间：2021年11月1日～2022年4月1日</div><div class="card" data-v-5cbe177c><div class="titel-s" data-v-5cbe177c>活动说明</div><div class="content" data-v-5cbe177c> Cryptovoxels是我们看好的一个元宇宙项目，未来大概率会发访问空投，希望借大家一块儿参与撸空投活动 </div><div class="titel-s" data-v-5cbe177c>活动规则</div><ul class="content" data-v-5cbe177c><li data-v-5cbe177c>A) 点击进入场馆，溜达约1分钟以上，一定要左右走动下</li><li data-v-5cbe177c>B) 每次访问，将记录积分1分</li><li data-v-5cbe177c>C) 每天有效记录最多3次，每次间隔再8小时</li><li data-v-5cbe177c> 注意：请一定要真实移动下，CV需要真实访问，请大家避免无效访问 </li></ul><div class="titel-s" data-v-5cbe177c>活动奖励</div><div class="content" data-v-5cbe177c>当CV发放空投时，我们会按照每个人的积分占比，发放对应的空投奖励，预估每个访问价值1-3块。</div></div>',4),g={class:"card table"},w={class:"table-item"},x=f((()=>d("li",{class:"table-item label"},[d("span",null,"钱包地址"),d("span",null,"累计积分")],-1))),y={class:"crv-list"},P={alt:"",srcset:""},z={class:"title"},$={class:"bottom"},L=V("进入"),S=f((()=>d("div",{class:"footer"},"Ave 保留最终活动解释权",-1)));var U=t(_,[["render",function(t,s,a,e,u,b){const p=c("van-button"),V=i("lazy");return l(),n("main",null,[k,d("ul",g,[d("li",w,[d("span",null,r(b.currentAccountSplit),1),d("span",null,r(u.userCVPoints),1)]),x]),d("ul",y,[(l(!0),n(o,null,v(u.tableList,((t,s)=>(l(),n("li",{key:s,class:"card crv-item"},[C(d("img",P,null,512),[[V,t.picture_link.replace("https://ave.s3.ap-east-1.amazonaws.com","https://avesp.xyz/oss")]]),d("div",z,r(t.cv_title||"-"),1),d("div",$,[d("span",null,r(t.points)+" 分",1),m(p,{onClick:A((s=>b.enterCV(t)),["stop"]),class:"button",color:"#FC3065",size:"mini",round:""},{default:h((()=>[L])),_:2},1032,["onClick"])])])))),128))]),S])}],["__scopeId","data-v-5cbe177c"]]);export{U as default};
