import{d,r as k,u as _,o as g,a as l,_ as m,b as h,c as B,w as I,v,e as i,t as S,p as T,f as y,g as u,h as R,i as C,j as w}from"./index.1bcc3797.js";import{H as V}from"./Hero.0028b87a.js";const p=[["Monkey D. Luffy","Roronoa Zoro","Nami","Usopp","Sanji","Tony Tony Chopper","Nico Robin","Franky","Brook","Jinbe","Nefertari Vivi"],["Trafalgar D. Water Law","Bepo","Penguin","Shachi","Jean Bart","Ikkaku","Uni","Clione"],["Eustass Kid","Killer","Heat","Heat"],["Shanks","Benn Beckman","Lucky Roux","Yasopp","Limejuice","Bonk Punch","Monster","Building Snake","Hongo","Gab","Rockstar","Uta "],["Edward Newgate","Marco the Phoenix","Portgas D. Ace","Kozuki Oden","Diamond Jozu","Thatch","Flower Sword Vista","Blamenco","Rakuyo","Namur","Blenheim","Curiel","Kingdew","Haruta","Water Buffalo Atmos","Speed Jiru","Fossa","Izou"],["Charlotte Linlin","Katakuri","Smoothie","Cracker","Perospero","Amande","Oven","Daifuku","Br\xFBl\xE9e","Mont-d'Or"],["Capone Bege","Vito","Gotti","Charlotte Chiffon"],["Vinsmoke Judge","Vinsmoke Reiju","Vinsmoke Ichiji","Vinsmoke Niji","Vinsmoke Yonji"],["Gol D. Roger","Silvers Rayleigh","Scopper Gaban","Crocus","Kozuki Oden","Kozuki Toki","Shanks","Buggy","Inuarashi","Nekomamushi"]],c=()=>l.shuffle(p[l.random(0,p.length-1)]),$=d({name:"TitleInput",setup(){let e=c();const o=()=>`\u{1F3F4}\u200D\u2620\uFE0F ${e.pop()}`,n=k(o()),{title:a}=_(n),s=setInterval(()=>{e.length===0&&(e=c()),n.value=o()},5e3),t=()=>clearInterval(s);return g(t),{model:n,title:a,stopRefresh:t}}});const D=e=>(T("data-v-64dde8cd"),e=e(),y(),e),H={class:"title-input"},N=D(()=>i("small",null," Type a new page title ",-1)),x={title:"Reactive title"};function F(e,o,n,a,r,s){return h(),B("label",H,[N,I(i("input",{onInput:o[0]||(o[0]=(...t)=>e.stopRefresh&&e.stopRefresh(...t)),type:"text","onUpdate:modelValue":o[1]||(o[1]=t=>e.model=t)},null,544),[[v,e.model]]),i("span",x,S(e.title),1)])}const j=m($,[["render",F],["__scopeId","data-v-64dde8cd"]]),K=d({name:"Home",components:{TitleInput:j,Hero:V}});function L(e,o,n,a,r,s){const t=u("TitleInput"),f=u("Hero");return h(),R(f,null,{default:C(()=>[w(t)]),_:1})}const E=m(K,[["render",L]]);export{E as default};