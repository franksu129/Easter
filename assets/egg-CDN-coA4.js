import{e as g,c as a,w as c,v as n,a as s,F as l,o as i}from"./index-DXrJsPmG.js";const _="/assets/egg01-B7vDn61i.png",u="/assets/egg02-DypI-6y0.png",p="/assets/egg03-DlAECh5o.png",m="/assets/egg04-CIjKqUEJ.png",d="/assets/egg05-DraIua7R.png",h="/assets/egg06-DyTGYg1y.png",v={class:"egg"},k=s("p",null,"選擇你最喜歡的一顆復活節彩蛋？",-1),y={class:"egg result"},B={__name:"egg",setup(C){const o=g(0),e=()=>{const t=r(5);document.querySelector(".result.egg").style.background=`no-repeat center  url("../public/result${t}.jpg")`,document.querySelector(".result.egg").style.backgroundSize="cover",o.value=1},r=t=>Math.floor(Math.random()*t);return(t,f)=>(i(),a(l,null,[c(s("div",v,[k,s("div",{class:"flexWrap"},[s("img",{onClick:e,src:_}),s("img",{onClick:e,src:u}),s("img",{onClick:e,src:p}),s("img",{onClick:e,src:m}),s("img",{onClick:e,src:d}),s("img",{onClick:e,src:h})])],512),[[n,o.value===0]]),c(s("div",y,null,512),[[n,o.value===1]])],64))}};export{B as default};