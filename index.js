import{a as u,S as d,i as a}from"./assets/vendor-DQiTczw4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const f="https://pixabay.com/api/",p="54799522-83001b78b1b469e44ac3f4ab2";function m(t){const s={key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(f,{params:s}).then(r=>r.data).catch(r=>{throw console.log("Error fetching data:",r),r})}document.querySelector(".loader");function y(){const t=document.querySelector(".loader");t&&t.classList.remove("is-hidden")}function h(){const t=document.querySelector(".loader");t&&t.classList.add("is-hidden")}function g(t){t.innerHTML=""}let b=new d(".gallery-link",{captionsData:"alt",captionDelay:250});function L(t,s){const r=t.map(n=>`
       <li class="gallery-item">
        <a class="gallery-link" href="${n.largeImageURL}">
          <img class="gallery-image" src="${n.webformatURL}" alt="${n.tags}" />
        </a>
        <div class="info">
          <p class="info-text"><b>Likes</b> ${n.likes}</p>
          <p class="info-text"><b>Views</b> ${n.views}</p>
          <p class="info-text"><b>Comments</b> ${n.comments}</p>
          <p class="info-text"><b>Downloads</b> ${n.downloads}</p>
        </div>
      </li>`).join("");s.insertAdjacentHTML("beforeend",r),b.refresh()}const l=document.querySelector(".form"),S=document.querySelector("input"),c=document.querySelector(".gallery");l.addEventListener("submit",t=>{t.preventDefault();const s=S.value.trim();if(s==="")return a.error({message:"Sorry..."});g(c),y(),m(s).then(r=>{if(r.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(r.hits,c)}).catch(r=>{a.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(()=>{h(),l.reset()})});
//# sourceMappingURL=index.js.map
