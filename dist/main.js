(()=>{"use strict";(async()=>{const t=[];try{const e=await fetch("https://www.londonprayertimes.com/api/times/?format=json&key=0d11f934-7f5a-4690-8359-f9793887cee6&24hours=true"),o=await e.json();return["fajr","sunrise","dhuhr","asr","magrib","isha"].forEach((e=>{t.push(o[e])})),t}catch(t){console.error(t)}})().then((t=>(async t=>{const e=document.querySelector(".salah-times-list"),o=document.querySelector(".date"),[r,a,s]=(new Date).toLocaleDateString("en-GB").split("/");o.textContent=`${r}/${a}/${s}`,t.forEach((t=>{const o=document.createElement("li");o.textContent=t,e.appendChild(o)})),document.querySelector(".container").style.opacity="1"})(t))),console.log((async()=>{const t=[];try{const e=await fetch("https://www.londonprayertimes.com/api/times/?format=json&key=0d11f934-7f5a-4690-8359-f9793887cee6&24hours=true"),o=await e.json();return["fajr","sunrise","dhuhr","asr","magrib","isha"].forEach((e=>{t.push(o[e])})),t}catch(t){console.error(t)}})())})();