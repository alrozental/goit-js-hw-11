import{a as d,S as f,i}from"./assets/vendor-DQiTczw4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="https://pixabay.com/api/",m="54799522-83001b78b1b469e44ac3f4ab2";function y(n){const o={key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(p,{params:o}).then(t=>t.data).catch(t=>{throw console.log("Error fetching data:",t),t})}const u=document.querySelector(".loader");function h(){u.classList.remove("is-hidden")}function g(){u.classList.add("is-hidden")}function b(n){n.innerHTML=""}let L=new f(".gallery-link",{captionsData:"alt",captionDelay:250});function S(n,o){const t=n.map(s=>`
       <li class="gallery-item">
        <a class="gallery-link" href="${s.largeImageURL}">
          <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}" />
        </a>
        <div class="info">
          <p class="info-text"><b>Likes</b> ${s.likes}</p>
          <p class="info-text"><b>Views</b> ${s.views}</p>
          <p class="info-text"><b>Comments</b> ${s.comments}</p>
          <p class="info-text"><b>Downloads</b> ${s.downloads}</p>
        </div>
      </li>`).join("");o.insertAdjacentHTML("beforeend",t),L.refresh()}const c=document.querySelector(".form"),q=document.querySelector("input");document.querySelector(".btn");document.querySelector(".loader");const l=document.querySelector(".gallery");c.addEventListener("submit",n=>{n.preventDefault();const o=q.value.trim();if(o==="")return i.error({message:"Sorry..."});b(l),h(),y(o).then(t=>{if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(t.hits,l)}).catch(t=>{console.log(t)}).finally(()=>{g(),c.reset()})});
//# sourceMappingURL=index.js.map
