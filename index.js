import{a as f,S as p,i as n}from"./assets/vendor-D1AWmRWP.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="55642619-f9a4b7e30ea3503be8702d4a5";function m(o){return f.get("https://pixabay.com/api/",{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){return o.map(({webformatURL:r,largeImageURL:i,tags:a,likes:e,views:t,comments:s,downloads:u})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${r}" alt="${a}" loading="lazy"/>
        </a>
        <div class="info">
          <p><b>Likes</b> ${e}</p>
          <p><b>Views</b> ${t}</p>
          <p><b>Comments</b> ${s}</p>
          <p><b>Downloads</b> ${u}</p>
        </div>
      </li>`).join("")}function g(o){const r=y(o);l.innerHTML=r,h.refresh()}function b(){l.innerHTML=""}function L(){c.classList.add("visible")}function v(){c.classList.remove("visible")}const q={searchForm:document.querySelector(".form")};q.searchForm.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Fill the search field",position:"topRight"});return}b(),L(),m(r).then(i=>{if(i.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(i.hits)}).catch(i=>console.log(i)).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
