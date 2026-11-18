document.addEventListener("DOMContentLoaded",()=>{
 const data=window.SPART_DATA||{};
 const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const image=(src,alt,cls="profile-photo")=>src?`<img class="${cls}" src="${esc(src)}" alt="${esc(alt)}" data-lightbox>`:`<div class="${cls} profile-placeholder">＋</div>`;
 const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav-links");
 if(toggle&&nav){toggle.addEventListener("click",()=>{let o=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(o));});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));}

 // Homepage hero: all settings and Google Form URL are controlled by heroEvent in spart-data.js.
 const heroRoot=document.getElementById("featured-event-hero");
 if(heroRoot){
   const cfg=data.heroEvent||{}, event=(data.events||[]).find(e=>e.id===cfg.eventId)||(data.events||[])[0];
   if(event||cfg.title){
     const showcase=cfg.displayMode==="showcase";
     const heroImg=showcase?(cfg.imageOnlyImage||cfg.heroImage):cfg.heroImage;
     const heroTitle=cfg.title||(event?event.title:"");
     const heroDesc=cfg.description||(event?(event.shortDescription||event.description||""):"");
     const poster=document.getElementById("hero-event-image"),title=document.getElementById("hero-event-title"),desc=document.getElementById("hero-event-description"),actions=document.getElementById("hero-event-actions");
     if(poster)poster.innerHTML=heroImg?`<img src="${esc(heroImg)}" alt="${esc(heroTitle)} featured event image" data-lightbox>`:(showcase?`<span>Featured event image will be added here.</span>`:`<span>${esc(heroTitle)} POSTER PLACEHOLDER</span>`);
     if(title){title.textContent=heroTitle;title.hidden=showcase;}
     if(desc){desc.textContent=heroDesc;desc.hidden=showcase||cfg.showDescription===false;}
     const label=heroRoot.querySelector(".event-label");
     if(showcase){if(actions)actions.hidden=true;if(label)label.hidden=true;heroRoot.classList.add("hero-showcase");}
     else{
       const reg=document.getElementById("hero-registration"),more=document.getElementById("hero-view-more");
       if(reg){reg.textContent=cfg.registrationLabel||"Register Now";reg.hidden=cfg.showRegistrationButton===false;reg.href=cfg.registrationUrl||"#";reg.target=cfg.registrationUrl?"_blank":"_self";reg.rel=cfg.registrationUrl?"noopener":"";}
       if(more){more.textContent=cfg.viewMoreLabel||"Explore Event";more.href=cfg.viewMoreUrl||(event?`events.html#event-${encodeURIComponent(event.id)}`:"events.html");more.hidden=cfg.showViewMoreButton===false;}
       if(actions)actions.hidden=cfg.showRegistrationButton===false&&cfg.showViewMoreButton===false;
     }
   }
 }

 const staff=document.getElementById("staff-grid");
 if(staff)staff.innerHTML=(data.staff||[]).map(p=>`<article class="glass-card profile-card">${image(p.photo,p.name||"Leadership photo")}<h3>${esc(p.name||"Name")}</h3><div class="profile-role">${esc(p.designation||"Designation")}</div></article>`).join("")||`<div class="glass-card empty-profile-card"><strong>SPART Leadership</strong>Leadership profile cards will appear here when names, designations and photos are added.</div>`;
 const students=document.getElementById("student-grid");
 if(students){let list=data.students||[];students.innerHTML=list.length?list.map((p,i)=>`<article class="glass-card profile-card${i>=6?" student-hidden":""}">${image(p.photo,p.name||"Student photo")}<h3>${esc(p.name||"Student Name")}</h3><div class="profile-role">${esc(p.position||"Position")}</div><div class="profile-meta">Roll Number: ${esc(p.rollNo||"To be added")}</div>${p.group?`<div class="profile-meta">${esc(p.group)}</div>`:""}</article>`).join(""):`<div class="glass-card empty-profile-card"><strong>Student Office Bearers</strong>Office Bearer and Junior Office Bearer cards will appear here when profile details are added.</div>`;let b=document.querySelector("[data-students-more]");if(b){let open=false;b.hidden=list.length<=6;b.onclick=()=>{open=!open;students.querySelectorAll(".student-hidden").forEach(x=>x.classList.toggle("student-visible",open));b.textContent=open?"View Less":"View More";};}}

 const gallery=document.getElementById("gallery-groups");
 if(gallery){
   gallery.innerHTML=(data.gallery||[]).map(g=>{
     const imgs=g.images||[];
     return `<div class="gallery-group"><h3>${esc(g.title)}</h3><div class="gallery-grid">${imgs.map((src,i)=>`<div class="gallery-item${i>=4?" gallery-hidden":""}"><img src="${esc(src)}" alt="${esc(g.title)} photograph" data-lightbox></div>`).join("")}</div>${imgs.length>4?`<div class="gallery-actions"><button class="btn btn-outline gallery-group-more" type="button">View More</button></div>`:""}</div>`;
   }).join("");
   gallery.querySelectorAll(".gallery-group-more").forEach(b=>{
     let open=false;
     b.onclick=()=>{
       open=!open;
       b.closest(".gallery-group").querySelectorAll(".gallery-hidden").forEach(x=>x.classList.toggle("gallery-visible",open));
       b.textContent=open?"View Less":"View More";
     };
   });
 }

 const sponsors=document.getElementById("sponsor-grid");
 if(sponsors){const list=data.sponsors||[];sponsors.innerHTML=list.length?list.map(s=>`<a class="glass-card sponsor-card" href="${esc(s.url||"#")}" ${s.url?'target="_blank" rel="noopener"':''} aria-label="${esc(s.name||"Sponsor website")}">${s.logo?`<img src="${esc(s.logo)}" alt="${esc(s.name||"Sponsor logo")}">`:`<span class="sponsor-name">${esc(s.name||"Sponsor")}</span>`}</a>`).join(""):`<div class="glass-card sponsor-empty"><strong>Sponsor logos will be added soon.</strong><span>Confirmed sponsor names and logos will be displayed here.</span></div>`;}

 // Events & Activities: adding an event requires only a new object in spart-data.js.
 const renderEvents=(id,status)=>{
   const root=document.getElementById(id);if(!root)return;
   const list=(data.events||[]).filter(e=>e.status===status);
   root.innerHTML=list.map(e=>{
     const short=e.shortDescription||((e.description||"").length>180?(e.description||"").slice(0,180).trim()+"…":(e.description||""));
     const long=e.description||short;
     const detailImages=Array.isArray(e.detailImage)?e.detailImage.filter(Boolean):(e.detailImage?[e.detailImage]:[]);
     const hasMore=long.trim()!==short.trim()||detailImages.length>0;
     return `<article class="glass-card event-card" id="event-${esc(e.id)}"><div class="event-poster">${e.cardImage?`<img src="${esc(e.cardImage)}" alt="${esc(e.title)} event poster" data-lightbox>`:`<span>${esc(e.title)} IMAGE PLACEHOLDER</span>`}</div><span class="status">${esc(e.status)}</span><h3>${esc(e.title)}</h3><p class="event-description" data-short="${esc(short)}" data-full="${esc(long)}">${esc(short)}</p>${detailImages.length?`<div class="event-expanded-image" hidden>${detailImages.map(src=>`<img src="${esc(src)}" alt="${esc(e.title)} additional event image" data-lightbox style="margin-bottom: 12px;">`).join("")}</div>`:""}${hasMore?`<button class="btn btn-outline event-read-more" type="button" aria-expanded="false">Read More</button>`:""}</article>`;
   }).join("")||`<p class="section-intro">No ${status} events listed yet.</p>`;
 };
 renderEvents("upcoming-events","upcoming");renderEvents("completed-events","completed");
 document.querySelectorAll(".event-read-more").forEach(button=>button.addEventListener("click",()=>{
   const p=button.parentElement.querySelector(".event-description");const expanded=button.getAttribute("aria-expanded")==="true";
   p.textContent=expanded?p.dataset.short:p.dataset.full;const extraImage=button.parentElement.querySelector(".event-expanded-image");if(extraImage)extraImage.hidden=expanded;button.setAttribute("aria-expanded",String(!expanded));button.textContent=expanded?"Read More":"Read Less";
 }));

 // Reusable full-resolution image viewer for every content image except linked sponsor logos and brand marks.
 const lb=document.querySelector(".lightbox");
 if(lb){
   const im=lb.querySelector("img"),close=()=>{lb.classList.remove("open");im.removeAttribute("src");};
   document.addEventListener("click",e=>{const x=e.target.closest("img[data-lightbox]");if(x){im.src=x.currentSrc||x.src;im.alt=x.alt||"Expanded image";lb.classList.add("open");}});
   const closeBtn=lb.querySelector("button");if(closeBtn)closeBtn.addEventListener("click",close);
   lb.addEventListener("click",e=>{if(e.target===lb)close();});
   document.addEventListener("keydown",e=>{if(e.key==="Escape")close();});
 }
});