(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[585],{8286:function(e,i,d){"use strict";d.d(i,{Z:function(){return r}});var s=d(5893),c=d(7912),a=d.n(c),n=d(4227);function r(e){let{type:i,age:d}=e,c=new n.Z,r=c.getArts(i,d);return(0,s.jsx)("div",{id:"drawing-container",className:"pt-5",children:(0,s.jsx)("div",{className:"d-flex flex-wrap align-items-center justify-content-center",children:r.map(e=>{var c="animations"===i?"gif":"png",n="https://raw.githubusercontent.com/weizhou88/kateplace-asset/master/arts/"+"".concat(i,"/a").concat(d,"/").concat(i).concat(e.id,"-512.").concat(c);return console.log(n),(0,s.jsxs)("div",{className:"".concat(a().card," mb-5"),children:[(0,s.jsx)("img",{className:"img-fluid",id:"".concat(e.id),src:n}),(0,s.jsx)("p",{className:"card-footer",children:e.desc})]})})})})}},963:function(e,i,d){"use strict";d.d(i,{Z:function(){return w}});var s=d(5893),c=d(9008),a=d.n(c),n=d(8370),r=d.n(n),t=d(911),o=d(682),l=d(8340),g=d(1664),h=d.n(g),u=d(7294),m=d(1163),p=d(776);function f(){(0,m.useRouter)();let e=(0,u.useContext)(p.Z);(0,u.useEffect)(()=>{let e=document.getElementById("age"),i=sessionStorage.getItem("age");i||(sessionStorage.setItem("age","8"),i="8"),e&&(e.value=i)});let i=i=>{sessionStorage.setItem("age",i.target.value),null==e||e.setAgeSelected(i.target.value)};return(0,s.jsx)(t.Z,{expand:"lg",className:r().navbarCustom,id:"navbar",children:(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(t.Z.Brand,{href:"",children:(0,s.jsx)("img",{src:"https://raw.githubusercontent.com/weizhou88/kateplace-asset/master/logo.png"})}),(0,s.jsx)(t.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,s.jsx)(t.Z.Collapse,{id:"basic-navbar-nav",children:(0,s.jsxs)(l.Z,{className:"container-fluid",children:[(0,s.jsx)(l.Z.Item,{children:(0,s.jsx)(h(),{href:"./",className:r().link,children:"Home"})}),(0,s.jsx)(l.Z.Item,{children:(0,s.jsx)(h(),{href:"drawings",className:r().link,children:"Drawing"})}),(0,s.jsx)(l.Z.Item,{children:(0,s.jsx)(h(),{href:"./paintings",className:r().link,children:"Painting"})}),(0,s.jsx)(l.Z.Item,{children:(0,s.jsx)(h(),{href:"./graphics",className:r().link,children:"Graphics"})}),(0,s.jsx)(l.Z.Item,{children:(0,s.jsx)(h(),{href:"./animations",className:r().link,children:"Animation"})}),(0,s.jsxs)(l.Z.Item,{className:"ms-auto",children:[(0,s.jsx)("label",{className:r().ageLabel,children:"age: "}),(0,s.jsxs)("select",{name:"age",id:"age",className:r().ageSelector,onChange:i,children:[(0,s.jsx)("option",{value:"8",children:"8"}),(0,s.jsx)("option",{value:"9",children:"9"}),(0,s.jsx)("option",{value:"10",children:"10"})]})]})]})})]})})}function w(e){let{children:i}=e;return(0,u.useEffect)(()=>{}),(0,s.jsxs)("div",{children:[(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:"Kateplace"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"icon",type:"image/x-icon",href:"favicon.ico"}),(0,s.jsx)("script",{src:"https://kit.fontawesome.com/a076d05399.js"})]}),(0,s.jsxs)("div",{className:"container-fluid",children:[(0,s.jsx)(f,{}),i]})]})}},4227:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return ArtsService}});class ArtsService{getArts(artType){let age=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"8";return eval("this."+artType+"_"+age)}constructor(){this.drawings_8=[{id:0,desc:"Flowers"},{id:1,desc:"pinapple"},{id:2,desc:"yummy custard pie"},{id:3,desc:"yay! It is fall"},{id:4,desc:"Junk food"},{id:5,desc:"the magic tree"},{id:6,desc:"I love cherrys"},{id:7,desc:"yay! It is summer"},{id:8,desc:"rainbow Starbucks"},{id:9,desc:"mm stawberry"},{id:10,desc:"I love blueberrys and the color blue!"},{id:11,desc:"peaches"},{id:12,desc:"nock nock! A woodpecker"},{id:13,desc:"a happy girl"},{id:14,desc:"anime"},{id:15,desc:"a funny girl"},{id:16,desc:"it is me kate!"},{id:17,desc:"deserts"},{id:18,desc:"lets go to the beech"},{id:19,desc:"chinese food"},{id:20,desc:"a cool girl"},{id:21,desc:"cubes can create anything!"},{id:22,desc:"christmas!"},{id:23,desc:"devel + angel"},{id:24,desc:"cupid"},{id:25,desc:"my zoiac sign in human"},{id:26,desc:"school starts!"},{id:27,desc:"Kate!"},{id:28,desc:"snow"},{id:29,desc:"Raven in teen titens go"},{id:30,desc:"FLOATING flower girl"},{id:31,desc:"VSCO girl (girly girl)"},{id:32,desc:"rock'n mermaid"},{id:33,desc:"Mom is a cook!"},{id:34,desc:"mermaid"},{id:35,desc:"DJ"},{id:36,desc:"dog girl"},{id:37,desc:"splash!"},{id:38,desc:"gamer girl"},{id:39,desc:"california"},{id:40,desc:"Fall witch girl"},{id:41,desc:"cute bunny girl"},{id:42,desc:"thunderdtorm"},{id:43,desc:"phenex"},{id:44,desc:"pengin"},{id:45,desc:"close up girl"},{id:46,desc:"4 years ago me and my woderful dad!"},{id:47,desc:"look at that dress!"},{id:48,desc:"cool girl"},{id:49,desc:"YAY we are at the beach"},{id:50,desc:"teacher"},{id:51,desc:"a girl/ME!"},{id:52,desc:"waves"},{id:53,desc:"ordinary girl"},{id:54,desc:"mulan"},{id:55,desc:"A unicorn and a girl"},{id:56,desc:"CHIPS!"},{id:57,desc:"flower dress"},{id:58,desc:"a dalmatian as a human"},{id:59,desc:"a old car"},{id:60,desc:"Dogs"},{id:61,desc:"Cool Girl"},{id:62,desc:"Queen"},{id:63,desc:"Fire Girl"},{id:64,desc:"Fasion Girl"},{id:65,desc:"Mint Girl"},{id:66,desc:"Circles"}],this.drawings_9=[{id:0,desc:"90% realism"},{id:1,desc:'a random cover I made called "Just the Same"'},{id:2,desc:"stars"},{id:3,desc:"bunny girl"},{id:4,desc:"crying"},{id:5,desc:"plants and butterflys"},{id:6,desc:"prinesess"},{id:7,desc:"lily but drawn with dots"},{id:8,desc:"bumps of color"},{id:9,desc:"Din"},{id:10,desc:"deer girl with plants"},{id:11,desc:"Eri from MHA"},{id:12,desc:"Melody"},{id:13,desc:"A Girl"},{id:14,desc:"an apple tree"},{id:15,desc:"secret garden"},{id:16,desc:"emotions"}],this.drawings_10=[{id:0,desc:"Pretty Flowers"},{id:1,desc:"Up-beat Flowers"},{id:2,desc:"Staring of to the Distance"},{id:3,desc:"One of my Supporters"},{id:4,desc:"A Humingbird"},{id:5,desc:"Beauty is Only Skin Deep"},{id:6,desc:"Relistic Fruits"},{id:7,desc:"Camera Girl"},{id:8,desc:"Rolling Through the Moutains"},{id:9,desc:"Sketch of a Garden"},{id:10,desc:"My Cute Dog"},{id:11,desc:"My Dog Sticking his Tounge Out"},{id:12,desc:"The Flufy coulds in The Midnight"},{id:13,desc:"Fealing the Wind"},{id:14,desc:"Kirby relazing in a pond"},{id:15,desc:"Hermione Granger Making the Polyjuice Potion"},{id:16,desc:"Space Drink"},{id:17,desc:"Lanterens through the wind"}],this.graphics_8=[{id:0,desc:"the world without gravity"},{id:1,desc:"cookie girl"},{id:2,desc:"desiner fasion for mom's purse"},{id:3,desc:"fasion racoon"},{id:4,desc:"be careful"},{id:5,desc:"Chritsmas"},{id:6,desc:"4 flowers"},{id:7,desc:"were on a adventure!"},{id:8,desc:"buns"},{id:9,desc:"food"},{id:10,desc:"1 graphic anime girl"},{id:11,desc:"2 graphic anime girl"},{id:12,desc:"3 graphic anime girl"},{id:13,desc:"4 graphic anime girl"},{id:14,desc:"a house"},{id:15,desc:"midnight"},{id:16,desc:"library compition"},{id:17,desc:"a cunfused maid"},{id:18,desc:"glitchy girl"},{id:19,desc:"Let's party!"},{id:20,desc:"a sunny day"},{id:21,desc:"Let's skate "},{id:22,desc:"rainy to sunny"},{id:23,desc:"noodles"},{id:24,desc:"ice cream"}],this.graphics_9=[{id:0,desc:"a witch"},{id:1,desc:"girl that is an explorer"},{id:2,desc:"minecraft skin idea (doesn not work)"},{id:3,desc:"a girl that LOVES green"},{id:4,desc:"watercan"},{id:5,desc:"greens"},{id:6,desc:"abtract girl"},{id:7,desc:"glowing"},{id:8,desc:"AHH a demon"},{id:9,desc:"pretty sky"},{id:10,desc:"me and my friend"},{id:11,desc:"relistic girl"},{id:12,desc:"wow it is raining (new version)"},{id:13,desc:"wow it is raining"},{id:14,desc:"Denki from MHA"},{id:15,desc:"amazed girl"},{id:16,desc:"my friend as a gamer:"},{id:17,desc:"smurking girl"},{id:18,desc:"self portrait of me"},{id:19,desc:"girls"},{id:20,desc:"Crash!"},{id:21,desc:"lavader "},{id:22,desc:"I tried a totoural"},{id:23,desc:"waves by the shore"},{id:24,desc:"logo idea"},{id:25,desc:"princes"},{id:26,desc:"close-up"},{id:27,desc:"elf girl that says hi"},{id:28,desc:"whle girl"},{id:30,desc:"i tried to do this hack:"},{id:31,desc:"a girl that is cofused"},{id:32,desc:"a bird that loves the petals"},{id:33,desc:"baby bear girl"},{id:34,desc:"spooky libary"},{id:35,desc:"little fairies with a teenage girl"},{id:36,desc:"my dog, Kiwi:"},{id:37,desc:"when i am coufused:"},{id:38,desc:"France!"},{id:39,desc:"my parents"},{id:40,desc:"Eri"}],this.graphics_10=[{id:0,desc:"Green girl"},{id:1,desc:"Secret Siren Serendading You With Singing"},{id:2,desc:"Lunar Girl"},{id:3,desc:"A Smiling Girl"}],this.paintings_8=[{id:0,desc:"Chritsmas trees"},{id:1,desc:"A happy bear"},{id:2,desc:"A water fall"},{id:3,desc:"save the trees"},{id:4,desc:"a lot of flowers"},{id:5,desc:"pink!"},{id:6,desc:"birb tree"},{id:7,desc:"vase"},{id:8,desc:"quilt"},{id:9,desc:"mountain"},{id:10,desc:"cherry girl"},{id:11,desc:"blue girl in a blue world"}],this.paintings_9=[{id:0,desc:"leaf girl"},{id:1,desc:"candy world(pt.1)"},{id:2,desc:"Think"},{id:3,desc:"under the sea"},{id:4,desc:"cheese with naughty rats"},{id:5,desc:"a witch(for holloween)"},{id:6,desc:"jelly fish"},{id:7,desc:"moon wolf"},{id:8,desc:"rabit"},{id:9,desc:"cats in space"},{id:10,desc:"yin yang cats"}],this.paintings_10=[{id:0,desc:"Artistic Flowers"},{id:1,desc:"LoLo"},{id:2,desc:"Pretty Roses"},{id:3,desc:"Ranibow Roses"},{id:4,desc:"A Place in China"},{id:5,desc:"Splat Into a Plant"},{id:6,desc:"Froppy"},{id:7,desc:"A Catus in a Teacup"},{id:8,desc:"Moon Girl"},{id:9,desc:"The Midnight cover with Cats"},{id:10,desc:"Hermione Granger"},{id:11,desc:"The Pretty Swamp"},{id:12,desc:"Snowy Snowman"}],this.animations_8=[{id:0,desc:"flying bird"}],this.animations_9=[{id:0,desc:"I got my eye on you"},{id:1,desc:"eggs on a pan to a plate"},{id:2,desc:"my FAVORITE! Potatos"},{id:3,desc:"Apa from ATLA"},{id:4,desc:"why?"},{id:5,desc:"pencil factory"},{id:6,desc:"flower cycle"},{id:7,desc:"what a butifu- AHHHH"},{id:8,desc:"even dots are filled with love"},{id:9,desc:"AHHH A ATSROID"},{id:10,desc:"explorer"},{id:11,desc:"blink blink its me"}],this.animations_10=[{id:0,desc:"Moon Cat"}]}}},7912:function(e){e.exports={"drawing-container":"arts_drawing-container__tLcXK",card:"arts_card__q_Cnj","drawing-popup-container":"arts_drawing-popup-container___pUmt","drawing-popup":"arts_drawing-popup__jISVi",leftArrowIcon:"arts_leftArrowIcon__Iu74P",rightArrowIcon:"arts_rightArrowIcon__qYIHd",crossIcon:"arts_crossIcon__ELvPr",popupImg:"arts_popupImg__qkv_g",fas:"arts_fas__H79BB","fade-in":"arts_fade-in__krU3C",fadeIn:"arts_fadeIn__MF_Oj"}},8370:function(e){e.exports={navbarCustom:"navbanner_navbarCustom__eVQhr",link:"navbanner_link__zKotY",active:"navbanner_active__qRAH6",ageLabel:"navbanner_ageLabel__UYR7i",ageSelector:"navbanner_ageSelector__gGLYr","container-fluid":"navbanner_container-fluid__seDsS"}}}]);