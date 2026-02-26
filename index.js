import{a as d,S as f,i as a}from"./assets/vendor-DQiTczw4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",m="54799522-83001b78b1b469e44ac3f4ab2";function y(s){const o={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(p,{params:o}).then(t=>t.data).catch(t=>{throw console.log("Error fetching data:",t),t})}const u=document.querySelector(".loader");function h(){u.classList.remove("is-hidden")}function g(){u.classList.add("is-hidden")}function b(s){s.innerHTML=""}function L(s,o){const t=s.map(e=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="info">
          <p class="info-text"><b>Likes</b> ${e.likes}</p>
          <p class="info-text"><b>Views</b> ${e.views}</p>
          <p class="info-text"><b>Comments</b> ${e.comments}</p>
          <p class="info-text"><b>Downloads</b> ${e.downloads}</p>
        </div>
      </li>
    `).join("");o.innerHTML=t,new f(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()}const c=document.querySelector(".form"),S=document.querySelector("input");document.querySelector(".btn");document.querySelector(".loader");const l=document.querySelector(".gallery");c.addEventListener("submit",s=>{s.preventDefault();const o=S.value.trim();if(o==="")return a.error({message:"Sorry..."});b(l),h(),y(o).then(t=>{if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(t.hits,l)}).catch(t=>{console.log(t)}).finally(()=>{g(),c.reset()})});
//# sourceMappingURL=index.js.map
