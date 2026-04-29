import{a as u,S as f,i as d}from"./assets/vendor-D1AWmRWP.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="55642619-f9a4b7e30ea3503be8702d4a5";function p(o){return u.get("https://pixabay.com/api/",{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const n=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){return o.map(({webformatURL:r,largeImageURL:i,tags:s,likes:e,views:t,comments:a,downloads:c})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${r}" alt="${s}" loading="lazy"/>
        </a>
        <div class="info">
          <p><b>Likes</b> ${e}</p>
          <p><b>Views</b> ${t}</p>
          <p><b>Comments</b> ${a}</p>
          <p><b>Downloads</b> ${c}</p>
        </div>
      </li>`).join("")}function g(o){const r=h(o);n.innerHTML=r,y.refresh()}function b(){n.innerHTML=""}function L(){l.classList.add("visible")}function v(){l.classList.remove("visible")}const q={searchForm:document.querySelector(".form")};q.searchForm.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r)return alert("Fill the search field");b(),L(),p(r).then(i=>{if(i.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(i.hits)}).catch(i=>console.log(i)).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
