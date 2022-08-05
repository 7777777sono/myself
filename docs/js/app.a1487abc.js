(function(){"use strict";var e={46:function(e,t,n){var o=n(963),i=n(252),a=n(577);const s=(0,i._)("div",null,[(0,i._)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",crossorigin:"anonymous"}),(0,i._)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"})],-1),r={class:"header",ref:"header"},l=(0,i._)("h1",{class:"title"},"my-portfolio",-1),c={key:0},u=(0,i._)("i",{class:"fa fa-bars","aria-hidden":"true"},null,-1),p=[u],d=(0,i.Uk)("Home"),h=(0,i.Uk)("Favorite"),m=(0,i.Uk)("Programming"),g=(0,i.Uk)("Extra"),w={key:1},f=(0,i.Uk)("Home"),v=(0,i.Uk)("Favorite"),b=(0,i.Uk)("Programming"),_=(0,i.Uk)("Extra"),k={class:"opinion-zone"},y=(0,i._)("div",{class:"opinion-title-zone"},[(0,i._)("h2",{class:"opinion-title"},"目安箱"),(0,i._)("h4",{class:"opinion-sub-title"}," ※改良点などがあったら以下の入力フォームから入力して下さい ")],-1),x={class:"opinion-input-zone"},C=["disabled"],j={class:"master-zone"},z={key:0,class:"master-mode-zone"},D=["value"],E={class:"remove-btn-zone"},W=["onClick"],A={key:1,class:"user-mode-zone"},M=(0,i._)("h4",{class:"user-mode-zone-title"}," 意見を閲覧するためのパスワードを入力してください ",-1);function O(e,t,n,u,O,S){const $=(0,i.up)("router-link"),R=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[s,(0,i._)("header",r,[l,O.width<801?((0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("button",{type:"button",class:"menu-btn",onClick:t[0]||(t[0]=e=>O.open=!O.open)},p),(0,i._)("div",{class:(0,a.C_)(["menu",{"is-active":O.open}])},[(0,i._)("nav",null,[(0,i.Wm)($,{to:"/",onClick:t[1]||(t[1]=e=>O.open=!O.open)},{default:(0,i.w5)((()=>[d])),_:1}),(0,i.Wm)($,{to:"/favorite",onClick:t[2]||(t[2]=e=>O.open=!O.open)},{default:(0,i.w5)((()=>[h])),_:1}),(0,i.Wm)($,{to:"/create",onClick:t[3]||(t[3]=e=>O.open=!O.open)},{default:(0,i.w5)((()=>[m])),_:1}),(0,i.Wm)($,{to:"/extra",onClick:t[4]||(t[4]=e=>O.open=!O.open)},{default:(0,i.w5)((()=>[g])),_:1})])],2)])):((0,i.wg)(),(0,i.iD)("nav",w,[(0,i.Wm)($,{to:"/"},{default:(0,i.w5)((()=>[f])),_:1}),(0,i.Wm)($,{to:"/favorite"},{default:(0,i.w5)((()=>[v])),_:1}),(0,i.Wm)($,{to:"/create"},{default:(0,i.w5)((()=>[b])),_:1}),(0,i.Wm)($,{to:"/extra"},{default:(0,i.w5)((()=>[_])),_:1})]))],512),(0,i._)("div",{style:(0,a.j5)(O.space),class:"space"},null,4),(0,i.Wm)(R),(0,i._)("div",k,[y,(0,i._)("div",x,[(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":t[5]||(t[5]=e=>O.opinion=e),class:"input-form"},null,512),[[o.nr,O.opinion]]),(0,i._)("button",{onClick:t[6]||(t[6]=(...e)=>S.opinionSubmit&&S.opinionSubmit(...e)),disabled:0===O.opinion.length,class:"submit-btn"}," 送信 ",8,C),(0,i._)("div",j,[O.masterMode?((0,i.wg)(),(0,i.iD)("div",z,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(O.opinionCollection,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t,value:O.opinionCollection,class:"opinion-collection"},[(0,i.Uk)((0,a.zw)(e.opinion.opinion)+" ",1),(0,i._)("div",E,[(0,i._)("button",{onClick:e=>S.opinionRemove(t),class:"remove-btn"}," 削除 ",8,W)])],8,D)))),128)),(0,i._)("button",{onClick:t[7]||(t[7]=(...e)=>S.masterModeRelease&&S.masterModeRelease(...e)),class:"check-btn"},"解除")])):((0,i.wg)(),(0,i.iD)("div",A,[M,(0,i.wy)((0,i._)("input",{type:"password","onUpdate:modelValue":t[8]||(t[8]=e=>O.masterCode=e),placeholder:"masterCode"},null,512),[[o.nr,O.masterCode]]),(0,i._)("button",{onClick:t[9]||(t[9]=(...e)=>S.getOpinion&&S.getOpinion(...e)),class:"check-btn"},"確認")]))])])])],64)}var S=n(321),$=n(503);const R={apiKey:"AIzaSyDjHs767VdwOFxMNs0srCObjrCqVzKA8zI",authDomain:"portfolio-737bc.firebaseapp.com",projectId:"portfolio-737bc",storageBucket:"portfolio-737bc.appspot.com",messagingSenderId:"366315671943",appId:"1:366315671943:web:4b73e16c041ff36134c322",measurementId:"G-247CH6V51Z"},U=(0,$.ZF)(R),V=(0,S.ad)(U);var F={data(){return{height:0,width:0,open:!1,space:{},opinion:"",opinionCollection:[],masterCode:"",masterMode:!1}},methods:{async opinionSubmit(){await(0,S.ET)((0,S.hJ)(V,"opinion"),{opinion:this.opinion}),this.opinion="",alert("ご協力ありがとうございます")},async getOpinion(){if("sonoda"===this.masterCode){const e=await(0,S.PL)((0,S.hJ)(V,"opinion"));e.forEach((e=>{this.opinionCollection.push({id:e.id,opinion:e.data()})})),this.masterMode=!0,this.masterCode=""}else alert("あなたに閲覧権限はありません")},async opinionRemove(e){await(0,S.oe)((0,S.JU)(V,"opinion",this.opinionCollection[e].id)),this.opinionCollection.splice(e,1)},masterModeRelease(){this.masterMode=!1,this.opinionCollection.splice(0)}},mounted:function(){this.width=window.innerWidth;const e=this.$refs.header;this.height=e.clientHeight,this.space["padding-top"]=this.height+"px"}},I=n(744);const J=(0,I.Z)(F,[["render",O]]);var P=J,T=n(201);const H={class:"home"},Y={class:"my-zone"},Z=(0,i._)("div",{class:"name-zone"},[(0,i._)("h2",null,"園田 海斗"),(0,i._)("h3",null,"Sonoda Kaito")],-1),B={class:"age-zone"},N=(0,i.uE)('<div class="detail-zone"><div class="university-zone"><h3 class="sub-title">大学</h3><a href="https://www.fukuoka-u.ac.jp/" target="_blank" rel="noopener noreferrer" class="factor">福岡大学</a></div><div class="course-zone"><h3 class="sub-title">学部・学科</h3><a href="https://w3.tl.fukuoka-u.ac.jp/" target="_blank" rel="noopener noreferrer" class="factor">工学部 電子情報工学科</a></div><div class="sns-zone"><h3 class="sub-title">インスタグラム</h3><a href="https://z-p15.www.instagram.com/sonoda7777777/" target="_blank" rel="noopener noreferrer" class="factor">@sonoda7777777</a></div></div>',1);function K(e,t,n,o,s,r){return(0,i.wg)(),(0,i.iD)("div",H,[(0,i._)("div",Y,[Z,(0,i._)("div",B,[(0,i._)("h3",null,(0,a.zw)(s.age)+"歳",1)])]),N])}var X={name:"HomeView",components:{},data(){return{birthday:{year:2002,month:2,date:19},age:0}},methods:{getAge(){let e=new Date,t=new Date(e.getFullYear(),this.birthday.month-1,this.birthday.date);this.age=e.getFullYear()-this.birthday.year,e<t&&this.age--}},mounted:function(){this.getAge()}};const q=(0,I.Z)(X,[["render",K]]);var G=q;const Q={class:"manga-zone"};function L(e,t,n,o,a,s){const r=(0,i.up)("Manga");return(0,i.wg)(),(0,i.iD)("div",Q,[(0,i.Wm)(r)])}const ee={class:"manga-main-zone"},te=(0,i._)("h3",{class:"manga-zone-title"},"好きな漫画",-1),ne={class:"favorite-manga-zone"},oe=["value","href"],ie={class:"manga-image-favorite-zone"},ae=(0,i._)("h3",{class:"manga-image-favorite-zone-title"}," 好きな漫画の自分のお気に入りのシーン ",-1),se=["src"],re={class:"slick-reference"};function le(e,t,n,o,s,r){const l=(0,i.up)("slide"),c=(0,i.up)("pagination"),u=(0,i.up)("carousel");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",ee,[te,(0,i._)("div",ne,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.mangas,((e,t)=>((0,i.wg)(),(0,i.iD)("a",{key:t,value:e,href:e.url,target:"_blank",rel:"noopener noreferrer",class:"manga-list"},(0,a.zw)(e.title),9,oe)))),128))])]),(0,i._)("div",ie,[ae,(0,i.Wm)(u,{ref:"carousel","per-page":1,loop:!0,mouseDrag:!0,touchDrag:!0,"pagination-padding":5,speed:1e3,autoplay:5e3},{addons:(0,i.w5)((()=>[(0,i.Wm)(c)])),default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.scenes,((e,t)=>((0,i.wg)(),(0,i.j4)(l,{key:t,value:s.scenes,class:"slide-zone"},{default:(0,i.w5)((()=>[(0,i._)("img",{src:e.img,class:"slick-img"},null,8,se),(0,i._)("div",re,"引用: "+(0,a.zw)(e.reference)+"より",1)])),_:2},1032,["value"])))),128))])),_:1},512)])],64)}var ce=n(410),ue={name:"FavoriteView",components:{Carousel:ce.lr,Slide:ce.Mi,Pagination:ce.tl},data(){return{mangas:[{title:"ハイキュー!!",url:"https://www.shonenjump.com/j/rensai/haikyu.html"},{title:"呪術廻戦",url:"https://www.shonenjump.com/j/rensai/jujutsu.html"},{title:"ブラッククローバー",url:"https://www.shonenjump.com/j/rensai/bclover.html"},{title:"ワールドトリガー",url:"https://www.shonenjump.com/j/rensai/world.html"},{title:"Dr.STONE",url:"https://www.shonenjump.com/j/rensai/drstone.html"},{title:"ONE PIECE",url:"https://www.shonenjump.com/j/rensai/onepiece.html"},{title:"僕のヒーローアカデミア",url:"https://www.shonenjump.com/j/rensai/myhero.html"},{title:"暗殺教室",url:"https://www.shonenjump.com/j/rensai/ansatsu.html"},{title:"NARUTO-ナルト-",url:"https://www.shonenjump.com/j/rensai/naruto.html"},{title:"ダイヤのA",url:"https://diaace.com/"}],scenes:[{img:"https://livedoor.blogimg.jp/anigei-mangabox/imgs/4/d/4dd6bd91-s.jpg",reference:"ワールドトリガー22巻"},{img:"https://manga-comic-netabare.com/wp-content/uploads/2020/08/CnadM5kWAAAPjjy-768x689.jpg",reference:"ワールドトリガー9巻"},{img:"https://newsinfomation.net/wp-content/uploads/2021/07/8-11.jpg",reference:"ワールドトリガー12巻"},{img:n(346),reference:"ワールドトリガー8巻"},{img:"https://blogimg.goo.ne.jp/user_image/6d/da/4375040fc5a40054eb69fea787ed1359.jpg?1597877727",reference:"ハイキュー！！17巻"},{img:"https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/532/880/original.png?1595133850",reference:"ハイキュー！！16巻"},{img:"https://manga-netabare-kanso.com/wp-content/uploads/2018/04/%E3%83%8F%E3%82%A4%E3%82%AD%E3%83%A5%E3%83%BC298%E8%A9%B1%E6%9C%88%E5%B3%B6%EF%BC%88%E3%83%84%E3%83%83%E3%82%AD%E3%83%BC%EF%BC%89.png",reference:"ハイキュー！！34巻"},{img:"https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/631/121/original.?1618474647",reference:"ブラッククローバー1巻"},{img:"https://manga-comic-netabare.com/wp-content/uploads/2020/01/20171006093355.jpg",reference:"ブラッククローバー6巻"},{img:"https://1.bp.blogspot.com/-8XKF_u8Q0mE/Xs5gJlBo_UI/AAAAAAAAFGk/0h5sD9APGXgsTDRZuI7uemQARZqW_Ii6wCPcBGAYYCw/s0/kokusen-min.jpg",reference:"呪術廻戦7巻"},{img:"https://manga-netabare-kanso.com/wp-content/uploads/2021/01/drstone_senku_02-768x876.jpg",reference:"Dr.STONE1巻"},{img:"https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/587/296/original.jpg?1608533541",reference:"Dr.STONE9巻"},{img:"https://cdn-ak.f.st-hatena.com/images/fotolife/d/dokusyo_geek_ki/20181128/20181128022834.png",reference:"ONE PIECE50巻"},{img:"https://cdn-ak.f.st-hatena.com/images/fotolife/d/dokusyo_geek_ki/20181203/20181203154632.png",reference:"ONE PIECE56巻"},{img:"https://manga-netabare-kanso.com/wp-content/uploads/2020/05/ca9bdb64-e1576884259455.jpg",reference:"僕のヒーローアカデミア26巻"},{img:"https://renote.jp/files/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaEgzIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f046414a51a690aa0d184569d9ecc1add7963488/8.jpg",reference:"暗殺教室8巻"},{img:"https://assets.st-note.com/production/uploads/images/9796525/picture_pc_656a28370f766dfb922a236b4129a253.jpg?width=800",reference:"NARUTO-ナルト-27巻"},{img:"https://animemiru.jp/wp-content/uploads/2018/08/naruto-gai06.jpg",reference:"NARUTO-ナルト-67巻"},{img:"https://www.cmoa.jp/cc/template/common/titleinfo/quotation/data/39221/images/39221_04.png",reference:"ダイヤのA2巻"}]}}};const pe=(0,I.Z)(ue,[["render",le]]);var de=pe,he={name:"FavoriteView",components:{Manga:de}};const me=(0,I.Z)(he,[["render",L]]);var ge=me;const we={class:"create-zone"},fe={class:"programming-language"},ve=(0,i._)("h3",{class:"programming-language-zone"},"経験しているプログラミング言語",-1),be={class:"language-list"},_e=["value"],ke=(0,i._)("div",{class:"deliverables-zone"},[(0,i._)("h1",{class:"deliverables-title"},"これまでの成果物")],-1);function ye(e,t,n,o,s,r){return(0,i.wg)(),(0,i.iD)("div",we,[(0,i._)("div",fe,[ve,(0,i._)("div",be,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.languages,((e,t)=>((0,i.wg)(),(0,i.iD)("h4",{key:t,value:e,class:"language-item"},(0,a.zw)(e),9,_e)))),128))])]),ke])}var xe={data(){return{languages:["C","C++","C#","Java","JavaScript","Python"]}}};const Ce=(0,I.Z)(xe,[["render",ye]]);var je=Ce;const ze={class:"extra-zone"},De=(0,i._)("div",{class:"extra-title-zone"},[(0,i._)("h2",{class:"extra-title"},"今までに作った簡単に遊べる機能")],-1);function Ee(e,t,n,o,a,s){const r=(0,i.up)("Fortune"),l=(0,i.up)("Palette");return(0,i.wg)(),(0,i.iD)("div",ze,[De,(0,i.Wm)(r),(0,i.Wm)(l)])}const We={class:"palette-zone"},Ae=(0,i._)("div",{class:"palette-title-zone"},[(0,i._)("h1",{class:"palette-title"},"パレット")],-1),Me={class:"app"},Oe=(0,i._)("div",{class:"red"},"赤",-1),Se=(0,i._)("div",{class:"green"},"緑",-1),$e=(0,i._)("div",{class:"blue"},"青",-1),Re=(0,i._)("div",{class:"opacity"},"透明度",-1),Ue={class:"colors-container"},Ve=["color","onClick"],Fe=(0,i._)("div",{class:"draw-title-zone"},[(0,i._)("h2",{class:"draw-title"}," パレットで作った色を使ってお絵描きしてみよう！ ")],-1),Ie={id:"canvas-area",class:"canvas-area"},Je={class:"tool-area"},Pe={class:"pen-width"},Te=(0,i._)("div",{class:"click-please"}," ※太さを変えたらペンボタンをクリックして下さい。 ",-1),He=(0,i._)("div",{class:"click-please"}," ※太さを変えたら消しゴムボタンをクリックして下さい。 ",-1),Ye={class:"current-draw-mode"};function Ze(e,t,n,s,r,l){return(0,i.wg)(),(0,i.iD)("div",We,[Ae,(0,i._)("div",Me,[(0,i._)("div",{class:"palette",style:(0,a.j5)({backgroundColor:`rgba(${r.red}, ${r.green}, ${r.blue}, ${r.opacity})`}),onClick:t[0]||(t[0]=(...e)=>l.colorDecision&&l.colorDecision(...e)),onMousemove:t[1]||(t[1]=(...e)=>l.colorChange&&l.colorChange(...e))},null,36),(0,i._)("p",null,"rgba( "+(0,a.zw)(r.red)+", "+(0,a.zw)(r.green)+", "+(0,a.zw)(r.blue)+", "+(0,a.zw)(r.opacity)+" )",1),Oe,(0,i.wy)((0,i._)("input",{type:"range",min:"0",max:"255","onUpdate:modelValue":t[2]||(t[2]=e=>r.red=e)},null,512),[[o.nr,r.red]]),Se,(0,i.wy)((0,i._)("input",{type:"range",min:"0",max:"255","onUpdate:modelValue":t[3]||(t[3]=e=>r.green=e)},null,512),[[o.nr,r.green]]),$e,(0,i.wy)((0,i._)("input",{type:"range",min:"0",max:"255","onUpdate:modelValue":t[4]||(t[4]=e=>r.blue=e)},null,512),[[o.nr,r.blue]]),Re,(0,i.wy)((0,i._)("input",{type:"range",min:"0",max:"1",step:"0.01","onUpdate:modelValue":t[5]||(t[5]=e=>r.opacity=e)},null,512),[[o.nr,r.opacity]]),(0,i._)("button",{onClick:t[6]||(t[6]=(...e)=>l.colorDecision&&l.colorDecision(...e)),class:"color-decision"}," この色に決定 "),(0,i._)("div",Ue,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.colors,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e,color:e,style:(0,a.j5)({backgroundColor:`rgba(${e.red}, ${e.green}, ${e.blue}, ${e.opacity})`}),onClick:t=>l.pastColorDecision(e),class:"mini-palette"},null,12,Ve)))),128))])]),(0,i._)("div",null,[Fe,(0,i._)("div",Ie,[(0,i._)("canvas",{id:"myCanvas",width:"255",height:"255",onMousedown:t[7]||(t[7]=(...e)=>l.drawStart&&l.drawStart(...e)),onMouseup:t[8]||(t[8]=(...e)=>l.drawEnd&&l.drawEnd(...e)),onMouseout:t[9]||(t[9]=(...e)=>l.drawEnd&&l.drawEnd(...e)),onMousemove:t[10]||(t[10]=(...e)=>l.draw&&l.draw(...e)),onTouchstart:t[11]||(t[11]=(...e)=>l.drawStart&&l.drawStart(...e)),onTouchmove:t[12]||(t[12]=(...e)=>l.draw&&l.draw(...e)),onTouchend:t[13]||(t[13]=(...e)=>l.drawEnd&&l.drawEnd(...e)),onTouchleave:t[14]||(t[14]=(...e)=>l.drawEnd&&l.drawEnd(...e))},null,32)]),(0,i._)("div",Je,[(0,i._)("button",{class:"pen-button",onClick:t[15]||(t[15]=(...e)=>l.pen&&l.pen(...e))},"ペン"),(0,i._)("button",{class:"clear-button",onClick:t[16]||(t[16]=(...e)=>l.clear&&l.clear(...e))},"クリア"),(0,i._)("button",{class:"eraser-button",onClick:t[17]||(t[17]=(...e)=>l.eraser&&l.eraser(...e))},"消しゴム")]),(0,i._)("div",Pe,[(0,i._)("div",null,"ペンの太さ "+(0,a.zw)(r.penWidth)+"px",1),(0,i.wy)((0,i._)("input",{type:"range",min:"1",max:"32","onUpdate:modelValue":t[18]||(t[18]=e=>r.penWidth=e)},null,512),[[o.nr,r.penWidth]]),Te,(0,i._)("div",null,"消しゴムの大きさ "+(0,a.zw)(r.eraserWidth)+"px",1),(0,i.wy)((0,i._)("input",{type:"range",min:"1",max:"32","onUpdate:modelValue":t[19]||(t[19]=e=>r.eraserWidth=e)},null,512),[[o.nr,r.eraserWidth]]),He]),(0,i._)("div",Ye,(0,a.zw)(r.currentDrawMode),1)])])}var Be={name:"ExtraView",data(){return{red:0,green:0,blue:0,opacity:1,colors:[],canvas:null,context:null,isDraw:!1,drawMode:"pen",currentDrawMode:"ペン",penWidth:1,eraserWidth:32}},mounted(){this.canvas=document.querySelector("#myCanvas"),this.context=this.canvas.getContext("2d"),this.context.lineCap="round",this.context.lineJoin="round",this.context.lineWidth=this.penWidth,this.context.strokeStyle=`rgba(${this.red}, ${this.green}, ${this.blue}, ${this.opacity})`},methods:{colorDecision:function(){"pen"===this.drawMode?this.context.strokeStyle=`rgba(${this.red}, ${this.green}, ${this.blue}, ${this.opacity})`:this.context.strokeStyle="white",this.colors.push({red:this.red,green:this.green,blue:this.blue,opacity:this.opacity})},colorChange:function(e){this.red=e.offsetX,this.green=e.offsetY},pastColorDecision:function(e){this.red=e.red,this.green=e.green,this.blue=e.blue,this.opacity=e.opacity,"pen"===this.drawMode?this.context.strokeStyle=`rgba(${e.red}, ${e.green}, ${e.blue}, ${e.opacity})`:this.context.strokeStyle="white"},draw:function(e){let t=e.layerX,n=e.layerY;this.isDraw&&(this.context.lineTo(t,n),this.context.stroke())},drawStart:function(e){let t=e.layerX,n=e.layerY;this.context.beginPath(),this.context.lineTo(t,n),this.context.stroke(),this.isDraw=!0},drawEnd:function(){this.context.closePath(),this.isDraw=!1},pen:function(){this.drawMode="pen",this.currentDrawMode="ペン",this.context.lineCap="round",this.context.lineJoin="round",this.context.lineWidth=this.penWidth,this.context.strokeStyle=`rgba(${this.red}, ${this.green}, ${this.blue}, ${this.opacity})`},eraser:function(){this.drawMode="eraser",this.currentDrawMode="消しゴム",this.context.lineCap="square",this.context.lineJoin="square",this.context.lineWidth=this.eraserWidth,this.context.strokeStyle="white"},clear:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}}};const Ne=(0,I.Z)(Be,[["render",Ze]]);var Ke=Ne;const Xe={class:"fortune-zone"},qe={id:"divination",class:"divination"},Ge=(0,i._)("h2",{class:"divination-title"}," あなたがどのような感情であるのかを占います ",-1),Qe={class:"fate"},Le={class:"fate-img-zone"},et=["src"],tt={key:0},nt=(0,i._)("h3",{class:"fortune-attention"},"※下のボタンのどれかを押してください",-1),ot=[nt],it={key:1,class:"btn-list"};function at(e,t,n,o,s,r){return(0,i.wg)(),(0,i.iD)("div",Xe,[(0,i._)("div",qe,[Ge,(0,i._)("h1",Qe,(0,a.zw)(s.result),1),(0,i._)("div",Le,[(0,i._)("img",{src:s.url,class:"fate-img"},null,8,et)])]),!1===s.clickJudge?((0,i.wg)(),(0,i.iD)("div",tt,ot)):(0,i.kq)("",!0),!1===s.clickJudge?((0,i.wg)(),(0,i.iD)("div",it,[(0,i._)("button",{onClick:t[0]||(t[0]=e=>r.xorResult(0)),class:"btn"},"🧐"),(0,i._)("button",{onClick:t[1]||(t[1]=e=>r.xorResult(1)),class:"btn"},"🍇"),(0,i._)("button",{onClick:t[2]||(t[2]=e=>r.xorResult(2)),class:"btn"},"🧙"),(0,i._)("button",{onClick:t[3]||(t[3]=e=>r.xorResult(3)),class:"btn"},"🎄"),(0,i._)("button",{onClick:t[4]||(t[4]=e=>r.xorResult(4)),class:"btn"},"🎾"),(0,i._)("button",{onClick:t[5]||(t[5]=e=>r.xorResult(5)),class:"btn"},"🦄"),(0,i._)("button",{onClick:t[6]||(t[6]=e=>r.xorResult(6)),class:"btn"},"🐲"),(0,i._)("button",{onClick:t[7]||(t[7]=e=>r.xorResult(7)),class:"btn"},"🎮")])):(0,i.kq)("",!0)])}var st={name:"ExtraView",data(){return{fortuneResult:[{result:"喜び",url:n(416)},{result:"怒り",url:n(632)},{result:"悲しみ",url:n(602)},{result:"疲れ",url:n(917)},{result:"うんざり",url:n(764)},{result:"驚き",url:n(420)},{result:"幸福",url:n(374)},{result:"信頼",url:n(307)}],result:"",url:"",clickJudge:!1}},methods:{xorResult(e){let t=Math.floor(7*Math.random());this.url=this.fortuneResult[t^e].url,this.result=this.fortuneResult[t^e].result,this.clickJudge=!0}}};const rt=(0,I.Z)(st,[["render",at]]);var lt=rt,ct={name:"ExtraView",components:{Palette:Ke,Fortune:lt}};const ut=(0,I.Z)(ct,[["render",Ee]]);var pt=ut;const dt=[{path:"/",name:"home",component:G},{path:"/favorite",name:"favorite",component:ge},{path:"/create",name:"create",component:je},{path:"/extra",name:"extra",component:pt}],ht=(0,T.p7)({history:(0,T.PO)(""),routes:dt});var mt=ht;(0,o.ri)(P).use(mt).mount("#app")},632:function(e,t,n){e.exports=n.p+"img/angry.8d46c83f.jpg"},764:function(e,t,n){e.exports=n.p+"img/boring.fce87b60.jpg"},374:function(e,t,n){e.exports=n.p+"img/happiness.5ca2ee3e.webp"},416:function(e,t,n){e.exports=n.p+"img/happy.06f5a778.webp"},602:function(e,t,n){e.exports=n.p+"img/sad.449443c8.webp"},420:function(e,t,n){e.exports=n.p+"img/surprise.98df59ec.webp"},917:function(e,t,n){e.exports=n.p+"img/tired.acc70b78.jpg"},307:function(e,t,n){e.exports=n.p+"img/trust.996cfe09.webp"},346:function(e,t,n){e.exports=n.p+"img/スクリーンショット-2021-02-20-21.42.23-1025x720.c7c82bc4.png"}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,a){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],a=e[u][2];for(var r=!0,l=0;l<o.length;l++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(r=!1,a<s&&(s=a));if(r){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,i,a]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p=""}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,a,s=o[0],r=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(l)var u=l(n)}for(t&&t(o);c<s.length;c++)a=s[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(46)}));o=n.O(o)})();
//# sourceMappingURL=app.a1487abc.js.map