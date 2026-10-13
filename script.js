const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fa=n=>Number(n).toLocaleString("fa-IR");
function art(t,c,w=200,h=220){const g=`<defs><linearGradient id="g${t}${c.slice(1)}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF9F6"/><stop offset="1" stop-color="#F6DDE5"/></linearGradient><linearGradient id="m${c.slice(1)}" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".4" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><rect width="200" height="220" fill="url(#g${t}${c.slice(1)})"/><ellipse cx="100" cy="186" rx="52" ry="7" fill="#49343C" opacity=".12"/>`;
const sh=`<rect x="0" y="0" width="200" height="220" fill="none"/>`,gl=`url(#m${c.slice(1)})`;let o="";
if(t=="serum")o=`<rect x="92" y="38" width="16" height="22" rx="3" fill="#49343C"/><path d="M96 60h8v14h-8z" fill="#f4f2ef"/><rect x="72" y="72" width="56" height="112" rx="12" fill="${c}"/><rect x="72" y="72" width="56" height="112" rx="12" fill="${gl}"/><rect x="82" y="108" width="36" height="40" rx="4" fill="#fff" opacity=".85"/>`;
if(t=="lip")o=`<rect x="78" y="112" width="44" height="72" rx="6" fill="#49343C"/><rect x="82" y="84" width="36" height="32" rx="4" fill="#d8b46a"/><path d="M86 84V56q14-14 28 0v28z" fill="${c}"/><rect x="78" y="112" width="44" height="72" rx="6" fill="${gl}"/>`;
if(t=="perf")o=`<rect x="88" y="42" width="24" height="24" rx="4" fill="#49343C"/><rect x="94" y="64" width="12" height="10" fill="#d8b46a"/><rect x="58" y="74" width="84" height="110" rx="14" fill="${c}" opacity=".75"/><rect x="58" y="74" width="84" height="110" rx="14" fill="${gl}"/><rect x="76" y="116" width="48" height="32" rx="3" fill="#fff" opacity=".9"/>`;
if(t=="jar")o=`<rect x="52" y="82" width="96" height="30" rx="8" fill="#49343C"/><rect x="56" y="112" width="88" height="72" rx="14" fill="${c}"/><rect x="56" y="112" width="88" height="72" rx="14" fill="${gl}"/><rect x="72" y="130" width="56" height="22" rx="3" fill="#fff" opacity=".85"/>`;
if(t=="pal")o=`<rect x="36" y="64" width="128" height="104" rx="12" fill="#49343C"/><rect x="36" y="64" width="128" height="104" rx="12" fill="${gl}"/>`+[0,1,2,3].map(i=>[0,1,2].map(j=>`<circle cx="${62+i*25}" cy="${92+j*25}" r="10" fill="${["#e9c4c0","#c98a9d","#9c6a7a","#f0d9cf","#b9847a","#d9a58f"][(i+j*2)%6]}"/>`).join("")).join("");
if(t=="pump")o=`<rect x="92" y="38" width="30" height="8" rx="3" fill="#49343C"/><rect x="104" y="46" width="8" height="22" fill="#49343C"/><rect x="66" y="66" width="68" height="120" rx="14" fill="${c}"/><rect x="66" y="66" width="68" height="120" rx="14" fill="${gl}"/><rect x="76" y="110" width="48" height="40" rx="4" fill="#fff" opacity=".85"/>`;
if(t=="tube")o=`<path d="M70 62h60l-6 124H76z" fill="${c}"/><path d="M70 62h60l-6 124H76z" fill="${gl}"/><rect x="74" y="46" width="52" height="18" rx="4" fill="#49343C"/><rect x="82" y="104" width="36" height="34" rx="3" fill="#fff" opacity=".85"/>`;
if(t=="comp")o=`<circle cx="100" cy="116" r="58" fill="#49343C"/><circle cx="100" cy="116" r="58" fill="${gl}"/><circle cx="100" cy="116" r="42" fill="${c}"/><circle cx="100" cy="116" r="42" fill="${gl}"/>`;
return`<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${t} product illustration">${g}${o}</svg>`}
const DEFS={logo:"منیر شاپ",ann:"ارسال رایگان برای خرید بالای ۱٫۵ میلیون تومان · نمونه رایگان با هر سفارش",h1:"زیبایی تو،",h2:"به سبک تو.",hsub:"محصولات روزمره‌ات را برای مراقبت از پوست، آرایش و آرامش پیدا کن.",promoT:"محصولات مورد علاقه‌ات، همه در یک جا.",promoP:"آنچه دوست داری را پیدا کن و هر روزت را کمی زیباتر کن.",nlT:"به باشگاه منیر بپیوندید",fdesc:"آرایشی، مراقبت از پوست، عطر و لوازم شخصی؛ انتخاب‌شده با دقت برای آیین‌های روزمره.",rose:"#D98CA5",pink:"#F6DDE5"};
const DEFP=[
{id:1,n:"سرم آبرسان درخشان",b:"هائون",c:"skincare",p:890000,s:null,r:4.8,v:412,t:"serum",col:"#e7a9bd",bd:"پرفروش",d:"سرم فوق‌سبک هیالورونیک که پوست را پر و نرم می‌کند و درخشش طبیعی می‌دهد."},
{id:2,n:"رژلب مات مخملی · رزوود",b:"منیر",c:"makeup",p:420000,s:360000,r:4.7,v:268,t:"lip",col:"#b9647f",bd:"جدید",d:"مات کرمی و راحت با رنگدهی قابل‌لایه‌گذاری و ته‌رنگ نرم."},
{id:3,n:"ادوپرفیوم صورتی پیونی",b:"میزون لون",c:"perfume",p:2450000,s:null,r:4.9,v:187,t:"perf",col:"#e8b4c4",bd:"پرفروش",d:"نت‌های گل صدتومانی، مشک سفید و گلابی؛ عطری لطیف برای هر روز."},
{id:4,n:"کرم ترمیم‌کننده سد پوستی",b:"هائون",c:"skincare",p:690000,s:590000,r:4.6,v:530,t:"jar",col:"#f4d3dc",bd:null,d:"مرطوب‌کننده غنی ولی سبک با سرامید برای تسکین و محافظت."},
{id:5,n:"پالت سایه نرم‌فوکوس",b:"منیر",c:"makeup",p:980000,s:null,r:4.5,v:149,t:"pal",col:"#c98a9d",bd:"جدید",d:"دوازده سایه رز و موکا در پرداخت مات و ساتن."},
{id:6,n:"روغن مو ابریشمی",b:"لومیر",c:"haircare",p:540000,s:null,r:4.7,v:301,t:"serum",col:"#d9b08c",bd:"پرفروش",d:"روغنی بسیار سبک که وزی مو را کنترل و بدون چربی درخشش می‌دهد."},
{id:7,n:"لوسیون بدن ابری",b:"پتال",c:"personal",p:380000,s:320000,r:4.4,v:96,t:"pump",col:"#efc7d3",bd:null,d:"لوسیون زود‌جذب با شی‌باتر و رایحه ملایم بادام."},
{id:8,n:"فوم شست‌وشوی ملایم",b:"هائون",c:"skincare",p:310000,s:null,r:4.8,v:620,t:"tube",col:"#f2d0da",bd:"پرفروش",d:"پاک‌کننده کم‌کف با pH متعادل که بدون خشکی، پوست را تمیز می‌کند."},
{id:9,n:"کرم پودر کوشن SPF30",b:"منیر",c:"makeup",p:790000,s:690000,r:4.6,v:215,t:"comp",col:"#d9a58f",bd:null,d:"پوشش طبیعی و سبک در کامپکت قابل‌شارژ."},
{id:10,n:"ادوتویلت عنبر و وانیل",b:"میزون لون",c:"perfume",p:1980000,s:null,r:4.5,v:73,t:"perf",col:"#d9a46c",bd:"جدید",d:"عنبر گرم و وانیل کرمی با نفسی از مرکبات."},
{id:11,n:"پک سه‌تایی کرم دست",b:"پتال",c:"personal",p:350000,s:null,r:4.7,v:188,t:"tube",col:"#e9b9c6",bd:null,d:"سه کرم دست مسافرتی با رایحه رز، چای و بادام."},
{id:12,n:"شامپو مراقبت از پوست سر",b:"لومیر",c:"haircare",p:420000,s:360000,r:4.5,v:142,t:"pump",col:"#d6c3c9",bd:null,d:"شامپوی ملایم بدون سولفات که پوست سر را متعادل و مو را نرم نگه می‌دارد."}];
const CATN={all:"همه",makeup:"آرایشی",skincare:"مراقبت پوست",perfume:"عطر",haircare:"مراقبت مو",personal:"مراقبت شخصی",offers:"تخفیف‌ها"};
const TYPE={makeup:"lip",skincare:"serum",perfume:"perf",haircare:"pump",personal:"tube"};
let S={set:{...DEFS},imgs:{},prd:DEFP.map(p=>({...p}))},MODE="none",DB=null,U=null;
const price=p=>p.s||p.p,money=n=>fa(n)+" تومان",stars=r=>"★".repeat(Math.round(r))+"☆".repeat(5-Math.round(r));
const pimg=(p,w)=>p.img?`<img src="${esc(p.img)}" alt="${esc(p.n)}" loading="lazy">`:art(p.t||TYPE[p.c]||"jar",p.col||"#e7a9bd");
let cart={},wish={};try{cart=JSON.parse(localStorage.getItem("ms_cart")||"{}");wish=JSON.parse(localStorage.getItem("ms_wish")||"{}")}catch(e){}
const saveCW=()=>{try{localStorage.setItem("ms_cart",JSON.stringify(cart));localStorage.setItem("ms_wish",JSON.stringify(wish))}catch(e){}};
const loadLocal=()=>{try{const x=JSON.parse(localStorage.getItem("ms_state")||"null");if(x){S.set={...DEFS,...x.set};S.imgs=x.imgs||{};S.prd=x.prd||S.prd}}catch(e){}};
const saveLocal=()=>{try{localStorage.setItem("ms_state",JSON.stringify(S))}catch(e){toast("حافظه مرورگر پر است؛ عکس‌ها را کوچک‌تر کنید")}};
let filt="all",term="",sortv="feat";
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(toast.i);toast.i=setTimeout(()=>t.classList.remove("on"),2200)}
function applySite(){const s=S.set;$$("[data-k]").forEach(e=>e.textContent=s[e.dataset.k]??"");
document.documentElement.style.setProperty("--rose",s.rose||DEFS.rose);document.documentElement.style.setProperty("--pink",s.pink||DEFS.pink);
const h=$("#hero");h.innerHTML=S.imgs.hero?`<img src="${esc(S.imgs.hero)}" alt="">`:`<svg viewBox="0 0 400 440" preserveAspectRatio="xMidYMid slice"><circle cx="300" cy="90" r="120" fill="#fff" opacity=".35"/><circle cx="60" cy="380" r="110" fill="#D98CA5" opacity=".22"/><ellipse cx="200" cy="395" rx="150" ry="14" fill="#49343C" opacity=".12"/>${[["jar","#fff","-10 120",1.2],["serum","#e7a9bd","120 20",1.5],["lip","#b9647f","190 150",1.2]].map(a=>`<g transform="translate(${a[2]}) scale(${a[3]})">${art(a[0],a[1]).replace(/<svg[^>]*>|<\/svg>|<rect width="200" height="220"[^>]*>|<ellipse[^>]*>|<defs>.*?<\/defs>/g,"")}</g>`).join("")}</svg>`;
$("#catGrid").innerHTML=[["makeup","آرایشی","lip"],["skincare","مراقبت پوست","serum"],["perfume","عطر","perf"],["body","مراقبت بدن و مو","pump"]].map(c=>`<button class="cat" data-cat="${c[0]}" aria-label="${c[1]}">${S.imgs[c[0]]?`<img src="${esc(S.imgs[c[0]])}" alt="">`:art(c[2],"#D98CA5")}<span>${c[1]}</span></button>`).join("")}
function list(){let l=S.prd.filter(p=>(filt=="all"||(filt=="offers"?p.s:filt=="body"?["haircare","personal"].includes(p.c):p.c==filt))&&(p.n+p.b+CATN[p.c]).toLowerCase().includes(term));
if(sortv=="low")l.sort((a,b)=>price(a)-price(b));if(sortv=="high")l.sort((a,b)=>price(b)-price(a));if(sortv=="rate")l.sort((a,b)=>b.r-a.r);return l}
function render(){$("#chips").innerHTML=Object.keys(CATN).map(k=>`<button class="chip ${filt==k?"on":""}" data-chip="${k}">${CATN[k]}</button>`).join("");
const l=list();$("#grid").innerHTML=l.length?l.map(p=>`<article class="card"><button class="pi" data-open="${p.id}" aria-label="مشاهده ${esc(p.n)}">${pimg(p)}</button>${p.s?`<span class="bd sale">${fa(Math.round((1-p.s/p.p)*100))}٪ تخفیف</span>`:p.bd?`<span class="bd">${esc(p.bd)}</span>`:""}<button class="wl ${wish[p.id]?"on":""}" data-w="${p.id}" aria-pressed="${!!wish[p.id]}" aria-label="علاقه‌مندی"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg></button><div class="pb"><span class="br">${esc(p.b)}</span><button class="pn" data-open="${p.id}">${esc(p.n)}</button><span class="rt"><b>${stars(p.r)}</b> ${fa(p.r)} (${fa(p.v)})</span><span class="pr">${p.s?`<em>${money(p.s)}</em><s>${money(p.p)}</s>`:money(p.p)}</span><button class="add" data-add="${p.id}">افزودن به سبد</button></div></article>`).join(""):`<div class="empty">محصولی برای «${esc(term)}» پیدا نشد. عبارت یا دسته‌بندی دیگری امتحان کنید.</div>`}
function cartR(){const ids=Object.keys(cart).filter(i=>cart[i]>0&&S.prd.find(x=>x.id==i));let n=0,s=0;
$("#items").innerHTML=ids.length?ids.map(i=>{const p=S.prd.find(x=>x.id==i);n+=cart[i];s+=cart[i]*price(p);return`<div class="it"><div class="th">${pimg(p)}</div><div><b style="font-weight:500;font-size:14.5px">${esc(p.n)}</b><br><small>${money(price(p))}</small><div class="q"><button data-dec="${i}" aria-label="کم کردن">−</button><span>${fa(cart[i])}</span><button data-inc="${i}" aria-label="زیاد کردن">+</button></div></div><button class="ib" data-rm="${i}" aria-label="حذف">✕</button></div>`}).join(""):`<p style="text-align:center;color:var(--mut);padding:40px 0">سبد خرید شما خالی است.<br>چیزی که دوست دارید اضافه کنید.</p>`;
$("#cnt").textContent=fa(n);$("#sub").textContent=money(s);saveCW()}
function add(id,q=1){cart[id]=(cart[id]||0)+q;cartR();toast("به سبد خرید اضافه شد")}
function drawer(on){$("#drawer").classList.toggle("on",on);$("#ov").classList.toggle("on",on)}
function modal(id){const p=S.prd.find(x=>x.id==id);$("#mb").innerHTML=`<button class="x" data-x aria-label="بستن">×</button><div class="mi">${pimg(p)}</div><div class="md"><span class="br">${esc(p.b)} · ${CATN[p.c]}</span><h2>${esc(p.n)}</h2><span class="rt"><b>${stars(p.r)}</b> ${fa(p.r)} · ${fa(p.v)} دیدگاه</span><div class="pr" style="font-size:20px">${p.s?`<em>${money(p.s)}</em><s>${money(p.p)}</s>`:money(p.p)}</div><p style="color:var(--mut);margin:4px 0">${esc(p.d)}</p><div class="q" style="align-self:flex-start"><button data-md="-1" aria-label="کم کردن">−</button><span id="mqn">1</span><button data-md="1" aria-label="زیاد کردن">+</button></div><button class="btn p" data-madd="${p.id}">افزودن به سبد</button><button class="btn s" data-wm="${p.id}">${wish[p.id]?"حذف از علاقه‌مندی‌ها":"ذخیره در علاقه‌مندی‌ها"}</button></div>`;$("#mb").querySelector("#mqn").dataset.n=1;$("#modal").classList.add("on");$("#ov").classList.add("on")}
function closeM(){$("#modal").classList.remove("on");if(!$("#drawer").classList.contains("on"))$("#ov").classList.remove("on")}
function go(f){if(f){filt=f;render()}}
document.addEventListener("click",e=>{const t=e.target,g=a=>t.closest(`[${a}]`);let el;
if(t.closest("#adm"))return admClick(e);
if(el=g("data-add"))add(el.dataset.add);
else if(el=g("data-open"))modal(el.dataset.open);
else if(el=g("data-w")||g("data-wm")){const id=(el.dataset.w||el.dataset.wm);wish[id]=!wish[id];saveCW();toast(wish[id]?"به علاقه‌مندی‌ها اضافه شد":"از علاقه‌مندی‌ها حذف شد");render();if(el.dataset.wm)el.textContent=wish[id]?"حذف از علاقه‌مندی‌ها":"ذخیره در علاقه‌مندی‌ها"}
else if(el=g("data-chip"))go(el.dataset.chip);
else if(el=g("data-inc")){cart[el.dataset.inc]++;cartR()}
else if(el=g("data-dec")){cart[el.dataset.dec]--;if(cart[el.dataset.dec]<1)delete cart[el.dataset.dec];cartR()}
else if(el=g("data-rm")){delete cart[el.dataset.rm];cartR()}
else if(g("data-x"))closeM();
else if(el=g("data-md")){const n=$("#mqn");n.dataset.n=Math.max(1,+n.dataset.n+ +el.dataset.md);n.textContent=fa(n.dataset.n)}
else if(el=g("data-madd")){add(el.dataset.madd,+$("#mqn").dataset.n);closeM();drawer(true)}
else if(el=g("data-cat")){go(el.dataset.cat);$("#shop").scrollIntoView()}
else if(t.id=="modal")closeM();
const a=t.closest("a[data-f]");if(a){go(a.dataset.f);$("#links").classList.remove("open")}
if(t.closest(".links a"))$("#links").classList.remove("open")});
$("#cBtn").onclick=()=>drawer(true);$("#cClose").onclick=()=>drawer(false);
$("#ov").onclick=()=>{drawer(false);closeM()};
$("#co").onclick=()=>Object.keys(cart).length?toast("نمایشی است: برای فروش واقعی درگاه پرداخت وصل کنید"):toast("سبد خرید خالی است");
$("#acct").onclick=()=>toast("ورود کاربران در این نسخه نمایشی فعال نیست");
$("#burger").onclick=()=>$("#links").classList.toggle("open");
$("#sBtn").onclick=()=>{$("#sbar").classList.toggle("open");$("#q").focus()};
$("#q").oninput=e=>{term=e.target.value.trim().toLowerCase();render();$("#shop").scrollIntoView()};
$("#sort").onchange=e=>{sortv=e.target.value;render()};
document.addEventListener("keydown",e=>{if(e.key=="Escape"){closeM();drawer(false);$("#adm").classList.remove("on")}});
$("#nf").onsubmit=e=>{e.preventDefault();const v=$("#em").value.trim(),m=$("#msg");
if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){m.className="msg err";m.textContent="ایمیل معتبر وارد کنید، مثل name@example.com";return}
m.className="msg ok";m.textContent="خوش آمدید! برای تأیید، صندوق ایمیل خود را بررسی کنید.";$("#em").value=""};
const sc=(a,b,x)=>`<svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice"><rect width="300" height="200" fill="${a}"/><circle cx="220" cy="60" r="90" fill="${b}" opacity=".7"/><circle cx="60" cy="170" r="70" fill="#fff" opacity=".4"/>${x}</svg>`;
$("#ed").innerHTML=[["روتین سه‌مرحله‌ای شب","پاک‌سازی، درمان، آب‌بندی. چطور آیینی ساده بسازیم که پوستتان قدردانش باشد.","#F6DDE5","#D98CA5",'<rect x="110" y="50" width="80" height="110" rx="14" fill="#fff"/><rect x="120" y="80" width="60" height="40" fill="#F6DDE5"/>'],["آرایش ملایم در پنج دقیقه","کوشن، کمی رژگونه و رژلب رزوود. همین و بس.","#EBC6D2","#fff",'<circle cx="150" cy="105" r="52" fill="#49343C"/><circle cx="150" cy="105" r="36" fill="#D98CA5"/>'],["هر روز را به آیین تبدیل کنید","آب گرم، یک لوسیون خوب و ده دقیقه آرامش. عادت‌های کوچک جمع می‌شوند.","#FFF1EA","#F6DDE5",'<path d="M150 150c-40-20-50-60-20-80 10 20 20 20 20 20s10 0 20-20c30 20 20 60-20 80z" fill="#D98CA5"/>']].map(a=>`<article class="ec">${sc(a[2],a[3],a[4])}<div><h3 style="font-size:19px">${a[0]}</h3><p>${a[1]}</p></div></article>`).join("");

/* ---------- Admin panel ---------- */
let tab="prd",editing=null,tmpImg=null;
const shrink=f=>new Promise((res,rej)=>{const r=new FileReader;r.onerror=rej;r.onload=()=>{const i=new Image;i.onerror=rej;i.onload=()=>{const k=Math.min(1,720/Math.max(i.width,i.height)),c=document.createElement("canvas");c.width=i.width*k;c.height=i.height*k;c.getContext("2d").drawImage(i,0,0,c.width,c.height);res(c.toDataURL("image/jpeg",.78))};i.src=r.result};r.readAsDataURL(f)});
async function openAdmin(){if(DB&&U&&!(await U.canEdit())){toast("فقط مدیران این صفحه به پنل دسترسی دارند");return}
MODE=DB?"db":"local";$("#adm").classList.add("on");
if(MODE=="db"){try{const sn=await DB.collection("products").get();if(sn.empty){for(const p of S.prd)await DB.collection("products").doc("p"+p.id).set(p);toast("محصولات نمونه در پایگاه داده ذخیره شد")}}catch(e){toast("خطا در اتصال به پایگاه داده")}}
admR()}
async function persistP(p){const i=S.prd.findIndex(x=>x.id==p.id);i<0?S.prd.push(p):S.prd[i]=p;if(MODE=="db")await DB.collection("products").doc("p"+p.id).set(p);else saveLocal()}
async function persistDel(id){S.prd=S.prd.filter(x=>x.id!=id);if(MODE=="db")await DB.collection("products").doc("p"+id).delete();else saveLocal()}
async function persistSet(){if(MODE=="db"){await DB.collection("site").doc("settings").set(S.set)}else saveLocal()}
async function persistImg(k,d){d?S.imgs[k]=d:delete S.imgs[k];if(MODE=="db"){const r=DB.collection("site").doc("img_"+k);d?await r.set({data:d}):await r.delete()}else saveLocal()}
function fld(l,id,v,o={}){return`<label class="${o.w?"w":""}">${l}${o.ta?`<textarea id="${id}" rows="3">${esc(v)}</textarea>`:`<input id="${id}" type="${o.t||"text"}" value="${esc(v)}" ${o.dir?'dir="ltr"':""}>`}</label>`}
function imgF(l,k,cur){return`<label class="w">${l}${cur?`<img src="${esc(cur)}" alt="">`:""}<input type="file" accept="image/*" data-up="${k}"><button class="sm d" type="button" data-a="delimg" data-k="${k}" style="align-self:flex-start">حذف عکس</button></label>`}
function admR(){const s=S.set;let b="";
if(tab=="prd"){b=`<button class="btn p" data-a="new" style="margin-bottom:16px">+ محصول جدید</button>`+(editing?prdForm(editing):"")+S.prd.map(p=>`<div class="row2"><div class="th">${pimg(p)}</div><div class="inf"><b>${esc(p.n)}</b><small>${CATN[p.c]} · ${money(price(p))}${p.s?" (تخفیف‌دار)":""}</small></div><button class="sm" data-a="edit" data-id="${p.id}">ویرایش</button><button class="sm d" data-a="del" data-id="${p.id}">حذف</button></div>`).join("")}
else{b=`<div class="fm"><h3>متن‌های سایت</h3>${fld("نام فروشگاه (لوگو)","k_logo",s.logo)}${fld("نوار اعلان بالای سایت","k_ann",s.ann)}${fld("عنوان اصلی (بخش اول)","k_h1",s.h1)}${fld("عنوان اصلی (بخش رنگی)","k_h2",s.h2)}${fld("توضیح زیر عنوان","k_hsub",s.hsub,{w:1})}${fld("عنوان بنر تبلیغاتی","k_promoT",s.promoT)}${fld("متن بنر تبلیغاتی","k_promoP",s.promoP)}${fld("عنوان خبرنامه","k_nlT",s.nlT)}${fld("توضیح فوتر","k_fdesc",s.fdesc,{ta:1,w:1})}<h3>رنگ‌ها</h3><label>رنگ اصلی دکمه‌ها<input id="k_rose" type="color" value="${esc(s.rose)}"></label><label>رنگ صورتی پس‌زمینه<input id="k_pink" type="color" value="${esc(s.pink)}"></label><button class="btn p w" data-a="saveset">ذخیره تنظیمات</button></div>
<div class="fm"><h3>عکس‌های سایت</h3>${imgF("عکس بخش اصلی (هیرو)","hero",S.imgs.hero)}${imgF("دسته آرایشی","makeup",S.imgs.makeup)}${imgF("دسته مراقبت پوست","skincare",S.imgs.skincare)}${imgF("دسته عطر","perfume",S.imgs.perfume)}${imgF("دسته مراقبت بدن و مو","body",S.imgs.body)}</div><button class="sm d" data-a="reset">بازگشت به تنظیمات پیش‌فرض</button>`}
$("#adm").innerHTML=`<div class="ah"><h2>پنل مدیریت</h2><div class="tabs"><button class="chip ${tab=="prd"?"on":""}" data-a="tab" data-t="prd">محصولات</button><button class="chip ${tab=="set"?"on":""}" data-a="tab" data-t="set">تنظیمات و عکس‌ها</button></div><button class="btn s" data-a="close" style="min-height:38px;padding:0 20px">بستن</button></div><div class="ab"><div class="note">${MODE=="db"?"تغییرات در پایگاه داده ذخیره می‌شود و برای همه بازدیدکنندگانی که به این صفحه دسترسی دارند دیده می‌شود.":"حالت محلی: تغییرات فقط در همین مرورگر ذخیره می‌شود و برای دیگران دیده نمی‌شود."}</div>${b}</div>`}
function prdForm(p){tmpImg=p.img||null;return`<div class="fm"><h3>${S.prd.find(x=>x.id==p.id)?"ویرایش محصول":"محصول جدید"}</h3>${fld("نام محصول","f_n",p.n)}${fld("برند","f_b",p.b)}<label>دسته‌بندی<select id="f_c">${Object.keys(TYPE).map(k=>`<option value="${k}" ${p.c==k?"selected":""}>${CATN[k]}</option>`).join("")}</select></label><label>برچسب<select id="f_bd">${["","جدید","پرفروش"].map(k=>`<option ${p.bd==k||(!p.bd&&!k)?"selected":""} value="${k}">${k||"بدون برچسب"}</option>`).join("")}</select></label>${fld("قیمت (تومان)","f_p",p.p,{t:"number"})}${fld("قیمت با تخفیف (اختیاری)","f_s",p.s||"",{t:"number"})}${fld("توضیحات","f_d",p.d,{ta:1,w:1})}${imgF("عکس محصول","prd",p.img)}<button class="btn p" data-a="saveprd">ذخیره محصول</button><button class="sm" data-a="cancel">انصراف</button></div>`}
async function admClick(e){const t=e.target;const a=t.closest("[data-a]");if(!a)return;const d=a.dataset;
try{if(d.a=="close")$("#adm").classList.remove("on");
else if(d.a=="tab"){tab=d.t;editing=null;admR()}
else if(d.a=="new"){editing={id:Date.now(),n:"",b:"",c:"makeup",p:0,s:null,r:4.5,v:0,d:"",bd:""};admR()}
else if(d.a=="edit"){editing={...S.prd.find(x=>x.id==d.id)};admR()}
else if(d.a=="cancel"){editing=null;admR()}
else if(d.a=="del"){if(confirm("این محصول حذف شود؟")){await persistDel(+d.id);render();cartR();admR();toast("حذف شد")}}
else if(d.a=="saveprd"){const g=i=>$("#"+i).value.trim(),n=g("f_n"),pr=+g("f_p");if(!n||!(pr>0)){toast("نام و قیمت معتبر وارد کنید");return}
const sp=+g("f_s");if(sp&&sp>=pr){toast("قیمت تخفیف‌دار باید کمتر از قیمت اصلی باشد");return}
const o={...editing,n,b:g("f_b"),c:g("f_c"),bd:g("f_bd")||null,p:pr,s:sp||null,d:g("f_d"),img:tmpImg||null,t:TYPE[g("f_c")],col:editing.col||"#e7a9bd"};
if(!o.img)delete o.img;await persistP(o);editing=null;render();cartR();admR();toast("محصول ذخیره شد")}
else if(d.a=="saveset"){["logo","ann","h1","h2","hsub","promoT","promoP","nlT","fdesc","rose","pink"].forEach(k=>S.set[k]=$("#k_"+k).value.trim()||DEFS[k]);await persistSet();applySite();toast("تنظیمات ذخیره شد")}
else if(d.a=="delimg"){if(d.k=="prd"){tmpImg=null;if(editing)delete editing.img;admR()}else{await persistImg(d.k,null);applySite();admR()}}
else if(d.a=="reset"){if(confirm("متن‌ها و عکس‌های سایت به حالت اولیه برگردد؟")){S.set={...DEFS};for(const k of Object.keys(S.imgs))await persistImg(k,null);await persistSet();applySite();admR()}}
}catch(err){toast("ذخیره نشد: "+(err.message||"خطای ناشناخته"))}}
document.addEventListener("change",async e=>{const f=e.target;if(!f.dataset||!f.dataset.up||!f.files[0])return;
try{const d=await shrink(f.files[0]);if(f.dataset.up=="prd"){tmpImg=d;if(editing)editing.img=d;const keep=["f_n","f_b","f_c","f_bd","f_p","f_s","f_d"].map(i=>[i,$("#"+i).value]);admR();keep.forEach(([i,v])=>$("#"+i).value=v)}else{await persistImg(f.dataset.up,d);applySite();admR();toast("عکس ذخیره شد")}}catch(err){toast("بارگذاری عکس انجام نشد")}});
$("#admBtn").onclick=openAdmin;

/* ---------- boot ---------- */
applySite();render();cartR();
(async()=>{try{if(window.claude&&claude.use){U=await claude.use("user");DB=await claude.use("db")}}catch(e){}
if(DB){try{const ps=await DB.collection("products").get();if(!ps.empty)S.prd=ps.docs.map(d=>d.data());
const ss=await DB.collection("site").get();ss.docs.forEach(d=>{const x=d.data();if(d.id=="settings")S.set={...DEFS,...x};else if(d.id.startsWith("img_"))S.imgs[d.id.slice(4)]=x.data})}catch(e){}}
else loadLocal();
applySite();render();cartR()})();
