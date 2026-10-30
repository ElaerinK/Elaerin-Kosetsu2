/* ============================================================
   GX-SITE.JS — Часть 1: инвентарь, сундуки, хомяк, достижения, статистика
   ElaerinK/Elaerin-Kosetsu2 · загружается с сайта после ядра
   ============================================================ */

/* ===== СЕТ «GALLEON» — регистрация трёх предметов + бонусы ===== */
(function(){if(window.__GX_GSET_ALL)return;window.__GX_GSET_ALL=true;
var ITEMS=[
{id:'galleon_axe',n:'Якорный топор',s:'weapon',st:{atk:30,cdmg:20,pierce:25},r:'Редкий',img:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_6b7c937fdf3f4377933d1fd1fc97b25a.webp',tip:'Бонусы: +30 Атк, +20% Крит-урон, +25% Игнор защиты\nЭффект: 10% сковывание врага (2 хода)'},
{id:'galleon_garb',n:'Пиратский Гарб',s:'armor',st:{dodge:20,hp:150,tdef:20},r:'Редкий',img:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_b88067c2e3b84b8b8145ce85a1a3214f.webp',tip:'Бонусы: +20% уклонение, +150 HP, +20% защита от урона\nЭффект: 20% шанс щита на карточку (20% HP хозяина, 2 хода)'},
{id:'galleon_ring',n:'Пиратское кольцо',s:'accessory',st:{acc:10,crit:20,tdef:15},r:'Редкий',img:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_f690fa7a53ea44e5ab6d29d2084827c0.webp',tip:'Бонусы: +10% точность, +20% Крит-шанс, +15% защита от урона\nЭффект: 10% шанс отразить весь урон врага обратно (без урона владельцу)'}];
ITEMS.forEach(function(it){try{
if(window.__GX_INV_ITEMS&&!window.__GX_INV_ITEMS[it.id])window.__GX_INV_ITEMS[it.id]={n:it.n,s:it.s,st:it.st,r:it.r,set:'Galleon',img:it.img};
}catch(e){}});
try{if(window.__GXE){var _bf=window.__GXE;window.__GXE=function(n){var b=_bf(n);try{
var s=JSON.parse(localStorage.getItem('gx_inventory_v1')||'null');
if(s&&s.heroes){var N=['N-04','Alisa','Crysta','Sky'],i=N.indexOf(n);
if(i>=0){var h=null;s.heroes.forEach(function(x){if(x.id===i)h=x;});
if(h){ITEMS.forEach(function(it){if(h.equipment[it.s]===it.id){for(var k in it.st)b[k]=(b[k]||0)+it.st[k];}});
var gc=0;['weapon','armor','accessory'].forEach(function(sl){var id=h&&h.equipment[sl];if(id&&id.indexOf('galleon_')===0)gc++;});
if(gc>=2)b.tdef=(b.tdef||0)+30;if(gc>=3)b.hp=(b.hp||0)+200;}}}
}catch(e){}return b;};}}catch(e){}
function rdy(f){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',f):f();}
rdy(function(){setInterval(function(){try{
var list=document.getElementById('gxiMItems');if(!list)return;
[].forEach.call(list.querySelectorAll('.gxi-item'),function(it){
var db=it.querySelector('[data-del]');if(!db)return;
var id=db.getAttribute('data-del');var it2=ITEMS.find(function(x){return x.id===id;});
if(!it2||it.dataset.gxSet)return;it.dataset.gxSet='1';
var st=it.querySelector('.s');
if(st&&!it.querySelector('.gset-badge')){
var b=document.createElement('div');b.style.cssText='font-size:10px;color:#4db4ff;margin-bottom:2px';b.textContent='Сет «Galleon»: 2 предм. +30% защита · 3 предм. +200 HP';st.parentNode.insertBefore(b,st);}
it.title='«'+it2.n+'»\n'+it2.tip;
});
}catch(e){}},2000);});
})();

/* ===== ИНВЕНТАРЬ 🎒 ===== */
(function(){if(window.__GX_INV)return;window.__GX_INV=true;var K='gx_inventory_v1';
var IT={rusty_blade:{n:'Ржавый клинок',s:'weapon',st:{atk:5}},black_vest:{n:'Чёрный жилет',s:'armor',st:{hp:30}},red_crystal:{n:'Красный кристалл',s:'accessory',st:{crit:8,atk:2}},apofis_core:{n:'Ядро Apofis',s:'accessory',st:{atk:7,hp:20,crit:5}},shadow_boots:{n:'Теневые ботинки',s:'armor',st:{dodge:6,hp:10}},iron_sword:{n:'Железный меч',s:'weapon',st:{atk:9}},pistol_9mm:{n:'9 мм пистолет',s:'weapon',st:{atk:5},r:'Обычный',img:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_102e93bfa0414753a68183e0812c566c.webp'},portupeya:{n:'Портупея',s:'armor',st:{hp:30},r:'Обычный',img:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_4ae3305e35514804a75ca5457854de80.webp'},necklace:{n:'Ожерелье',s:'accessory',st:{crit:5},r:'Обычный',img:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_fab48bbd8b984aa690e749170753f9d4.webp'},shotgun:{n:'Дробовик',s:'weapon',st:{atk:10,crit:5},r:'Хороший',img:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_46257ef678054873a7ada59e860b6621.webp'},jacket:{n:'Кожаная куртка',s:'armor',st:{hp:50,dodge:10},r:'Хороший',img:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_3a58a93d0ec744b2bc81382e601a6aa5.webp'},cross_necklace:{n:'Крест-ожерелье',s:'accessory',st:{dodge:10,crit:10},r:'Хороший',img:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_f4077e5badc54dfa996edc5bbd2d43a9.webp'},uzi:{n:'Узи',s:'weapon',st:{atk:10,heal:20},r:'Хороший',img:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_e28a6dcad5124066997672501c339598.webp'},lead_pistol:{n:'Свинцовый пистолет',s:'weapon',st:{atk:10},r:'Хороший',set:'Свинцовая роза',img:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_a4d3689463f84092b18a7de9b48c5720.webp'},lead_knife:{n:'Свинцовый нож',s:'armor',st:{atk:10},r:'Хороший',set:'Свинцовая роза',img:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_a4d3689463f84092b18a7de9b48c5720.webp'},lead_rose:{n:'Свинцовая роза',s:'accessory',st:{atk:10},r:'Хороший',img:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_a4d3689463f84092b18a7de9b48c5720.webp'},lead_cloak:{n:'Плащ розы',s:'armor',st:{hp:80,dodge:15},r:'Хороший',set:'Свинцовая роза',img:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_2f3f6150585a48f0a2b3affee2196bc0.webp'},lead_ring:{n:'Кольцо свинцовой розы',s:'accessory',st:{crit:15,cdmg:15},r:'Хороший',img:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_bedec1015d614468aff9aa1a556ea0db.webp'},med_robe:{n:'Мед халат',s:'armor',st:{hp:60},r:'Хороший',img:'https://verstка-sites.s3.cloud.ru/assets/2952/upload_339e1ae3f95b48aa8c69c8ac76040df3.webp'}};
var HB=[{id:0,n:'N-04',c:'#dd4e60',b:{hp:130,atk:14,crit:12,dodge:5}},{id:1,n:'Alisa',c:'#9fd18a',b:{hp:110,atk:9,crit:8,dodge:8}},{id:2,n:'Crysta',c:'#7fb8d8',b:{hp:100,atk:13,crit:18,dodge:6}},{id:3,n:'Sky',c:'#c9b8e8',b:{hp:95,atk:12,crit:22,dodge:14}}];
function ld(){try{var r=localStorage.getItem(K);if(r){var d=JSON.parse(r);if(d&&d.heroes&&d.inv)return d;}}catch(e){}return{heroes:HB.map(function(h){return{id:h.id,equipment:{weapon:null,armor:null,accessory:null}};}),inv:[]};}
var S=ld();function sv(){try{localStorage.setItem(K,JSON.stringify(S));}catch(e){}}
function hD(i){return S.heroes.find(function(h){return h.id===i;});}function hM(i){return HB.find(function(h){return h.id===i;});}
function sCt(i){var d=hD(i);if(!d)return 0;var c=0;['lead_pistol','lead_knife','lead_cloak'].forEach(function(p){['weapon','armor','accessory'].forEach(function(sl){if(d.equipment[sl]===p)c++;});});return c;}
function fSt(i){var m=hM(i),d=hD(i),st=Object.assign({},m.b);['weapon','armor','accessory'].forEach(function(sl){var id=d.equipment[sl];if(id&&IT[id]){var is=IT[id].st;for(var k in is)st[k]=(st[k]||0)+is[k];}});var sc=sCt(i);if(sc>=2)st.atk+=10;if(sc>=3)st.hp+=100;return st;}
window.__GX_INV_FINAL=fSt;window.__GX_INV_SV=S;window.__GX_INV_ITEMS=IT;window.__GX_SET_COUNT=sCt;
var c=document.createElement('style');c.textContent="#gxInv{position:fixed;inset:0;z-index:100050;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.92);font-family:Segoe UI,sans-serif;color:#eee;padding:16px;overflow-y:auto}#gxInv.open{display:flex}#gxInv .gxi-wrap{width:580px;max-width:96vw;max-height:92vh;overflow-y:auto;background:#141414;border:1px solid #c41e3a;border-radius:14px;padding:22px;position:relative}#gxInv h1{font-size:1.4rem;letter-spacing:2px;text-align:center;text-transform:uppercase}#gxInv h1 span{color:#c41e3a}#gxInv .gxi-sub{text-align:center;color:#888;font-size:12px;margin-bottom:20px}#gxInv .gxi-heroes{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}#gxInv .gxi-hero{width:250px;max-width:100%;background:#1a1a1a;border:2px solid #333;border-radius:12px;padding:14px;text-align:center}#gxInv .gxi-hname{font-size:16px;font-weight:700;margin-bottom:6px}#gxInv .gxi-hstats{font-size:12px;color:#aaa;line-height:1.6;margin-bottom:10px;text-align:left}#gxInv .gxi-set{font-size:11px;color:#7fc9ff;margin-bottom:8px}#gxInv .gxi-hero button{width:100%;padding:10px;background:#c41e3a;border:none;color:#fff;border-radius:6px;cursor:pointer;font-size:13px}#gxInv .gxi-close{position:absolute;top:12px;right:12px;width:38px;height:38px;background:rgba(0,0,0,.7);border:1px solid #555;border-radius:50%;color:#ccc;font-size:18px;cursor:pointer}#gxInvModal{position:fixed;inset:0;z-index:100060;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.85);padding:12px}#gxInvModal.active{display:flex}#gxInvModal .gxi-mc{background:#141414;border:1px solid #c41e3a;border-radius:14px;width:440px;max-width:96vw;padding:22px;max-height:90vh;overflow-y:auto}#gxInvModal h2{font-size:16px;color:#c41e3a;margin-bottom:14px}#gxInvModal .gxi-slot{background:#1a1a1a;border:1px dashed #444;border-radius:8px;padding:10px 12px;display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}#gxInvModal .gxi-slot.filled{border-style:solid;border-color:#c41e3a}#gxInvModal .gxi-sl{font-size:11px;color:#888;text-transform:uppercase}#gxInvModal .gxi-si{font-weight:600;font-size:13px;margin-top:2px}#gxInvModal .gxi-slot button{padding:8px 12px;font-size:12px;background:#333;border:none;color:#eee;border-radius:5px;cursor:pointer}#gxInvModal .gxi-sec{font-size:12px;color:#888;letter-spacing:1px;text-transform:uppercase;margin:16px 0 8px}#gxInvModal .gxi-items{display:grid;grid-template-columns:1fr 1fr;gap:8px}#gxInvModal .gxi-item{background:#1a1a1a;border:1px solid #333;border-radius:8px;padding:10px;font-size:13px;cursor:pointer;position:relative}#gxInvModal .gxi-item:hover{border-color:#c41e3a}#gxInvModal .gxi-item .n{font-weight:600;margin-bottom:3px}#gxInvModal .gxi-item .s{color:#888;font-size:12px}#gxInvModal .gxi-img{width:100%;height:64px;object-fit:contain;margin:5px 0;border-radius:6px;background:#0a0a0a;border:1px solid #222}#gxInvModal .gxi-del{position:absolute;top:6px;right:6px;width:28px;height:28px;background:rgba(0,0,0,.75);border:1px solid #7a1f1f;border-radius:50%;color:#ff8a8a;font-size:13px;cursor:pointer;z-index:2}#gxInvModal .gxi-del.confirm{background:#c41e3a;color:#fff}#gxInvModal .gxi-btn-close{width:100%;margin-top:16px;padding:12px;background:#333;border:none;color:#fff;border-radius:6px;cursor:pointer;font-weight:600}#gx-inv-btn{position:fixed;right:10px;bottom:90px;z-index:99990;width:52px;height:52px;background:rgba(0,0,0,.9);border:2px solid #c41e3a;color:#fff;font-size:22px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center}@media(max-width:640px){#gxInvModal .gxi-items{grid-template-columns:1fr!important}}";document.head.appendChild(c);
var ov=document.createElement('div');ov.id='gxInv';ov.innerHTML='<div class="gxi-wrap"><button class="gxi-close" id="gxiC" type="button">✕</button><h1>Инвентарь + <span>Экипировка</span></h1><p class="gxi-sub">Grey Empire · снаряжение отряда</p><div class="gxi-heroes" id="gxiH"></div></div>';document.body.appendChild(ov);
var md=document.createElement('div');md.id='gxInvModal';md.innerHTML='<div class="gxi-mc"><h2 id="gxiT">Экипировка</h2><div class="gxi-slot" id="gxi-s-weapon"><div><div class="gxi-sl">Оружие</div><div class="gxi-si" id="gxi-w">Пусто</div></div><button type="button" data-u="weapon">Снять</button></div><div class="gxi-slot" id="gxi-s-armor"><div><div class="gxi-sl">Броня</div><div class="gxi-si" id="gxi-a">Пусто</div></div><button type="button" data-u="armor">Снять</button></div><div class="gxi-slot" id="gxi-s-accessory"><div><div class="gxi-sl">Аксессуар</div><div class="gxi-si" id="gxi-ac">Пусто</div></div><button type="button" data-u="accessory">Снять</button></div><div class="gxi-sec">Доступные предметы</div><div class="gxi-items" id="gxiM"></div><button class="gxi-btn-close" id="gxiMC" type="button">Закрыть</button></div>';document.body.appendChild(md);
var cur=null;function fS(s){var n={hp:'HP',atk:'Атк',crit:'Крит',dodge:'Укл',heal:'Лечение',cdmg:'Крит-урон',tdef:'Защита',pierce:'Игнор защ.',acc:'Точность'};return Object.keys(s).map(function(k){return((k==='heal'||k==='cdmg'||k==='tdef'||k==='pierce'||k==='acc')?'+'+s[k]+'%':'+ '+s[k])+' '+(n[k]||k);}).join(', ');}
function rH(){var c=document.getElementById('gxiH');c.innerHTML='';HB.forEach(function(m){var st=fSt(m.id),sc=sCt(m.id),d=document.createElement('div');d.className='gxi-hero';d.innerHTML='<div class="gxi-hname" style="color:'+m.c+'">'+m.n+'</div><div class="gxi-hstats">HP: '+st.hp+'<br>Атака: '+st.atk+'<br>Крит: '+st.crit+'%<br>Уклонение: '+st.dodge+'%'+(st.heal?'<br>Лечение: +'+st.heal+'%':'')+(st.cdmg?'<br>Крит-урон: +'+st.cdmg+'%':'')+(st.tdef?'<br>Защита: +'+st.tdef+'%':'')+(st.pierce?'<br>Игнор защ.: +'+st.pierce+'%':'')+(st.acc?'<br>Точность: +'+st.acc+'%':'')+'</div>'+(sc?'<div class="gxi-set">🏆 Сет «Свинцовая роза»: '+sc+'/3'+(sc>=3?' — +100 HP, +10 атак':(sc>=2?' — +10 атак':''))+'</div>':'')+'<button type="button" data-eq="'+m.id+'">Экипировка</button>';c.appendChild(d);});}
function uS(sl,id){var n=document.getElementById(sl==='weapon'?'gxi-w':sl==='armor'?'gxi-a':'gxi-ac'),e=document.getElementById('gxi-s-'+sl);if(id&&IT[id]){n.textContent=IT[id].n;e.classList.add('filled');}else{n.textContent='Пусто';e.classList.remove('filled');}}
function rM(){var l=document.getElementById('gxiM');l.innerHTML='';if(!S.inv.length){l.innerHTML='<div style="color:#666;font-size:13px">Нет доступных предметов</div>';return;}S.inv.forEach(function(id){var it=IT[id];if(!it)return;var d=document.createElement('div');d.className='gxi-item';d.innerHTML='<button class="gxi-del" data-del="'+id+'" type="button">🗑</button><div class="n">'+it.n+(it.r?' <span style="font-size:10px;color:'+(it.r==='Хороший'?'#7fc9ff':'#c9a34a')+'">['+it.r+']</span>':'')+'</div>'+(it.set?'<div style="font-size:10px;color:#7fc9ff">Сет: '+it.set+'</div>':'')+(it.img?'<img class="gxi-img" src="'+it.img+'">':'')+'<div class="s">'+fS(it.st)+'</div>';d.addEventListener('click',function(e){if(e.target.closest('[data-del]'))return;eq(id);});l.appendChild(d);});}
function oE(hi){cur=hi;var m=hM(hi),d=hD(hi);document.getElementById('gxiT').textContent='Экипировка — '+m.n;uS('weapon',d.equipment.weapon);uS('armor',d.equipment.armor);uS('accessory',d.equipment.accessory);rM();md.classList.add('active');}
function eq(id){var it=IT[id],d=hD(cur),sl=it.s;if(d.equipment[sl])S.inv.push(d.equipment[sl]);d.equipment[sl]=id;S.inv=S.inv.filter(function(x){return x!==id;});sv();uS(sl,id);rM();rH();}
function un(sl){var d=hD(cur);if(!d.equipment[sl])return;S.inv.push(d.equipment[sl]);d.equipment[sl]=null;sv();uS(sl,null);rM();rH();}
function del(id){S.inv=S.inv.filter(function(x){return x!==id;});S.heroes.forEach(function(h){['weapon','armor','accessory'].forEach(function(sl){if(h.equipment[sl]===id)h.equipment[sl]=null;});});sv();var d=hD(cur);if(d){uS('weapon',d.equipment.weapon);uS('armor',d.equipment.armor);uS('accessory',d.equipment.accessory);}rM();rH();}
md.addEventListener('click',function(e){var dl=e.target.closest('[data-del]');if(dl){e.preventDefault();e.stopPropagation();if(!dl.classList.contains('confirm')){dl.classList.add('confirm');dl.textContent='✓';setTimeout(function(){if(document.body.contains(dl)){dl.classList.remove('confirm');dl.textContent='🗑';}},2500);return;}del(dl.getAttribute('data-del'));return;}
var u=e.target.closest('[data-u]');if(u){un(u.dataset.u);return;}if(e.target.id==='gxiMC'||e.target===md){md.classList.remove('active');cur=null;}});
document.getElementById('gxiC').addEventListener('click',function(){ov.classList.remove('open');md.classList.remove('active');});
ov.addEventListener('click',function(e){if(e.target===ov){ov.classList.remove('open');md.classList.remove('active');}});
document.getElementById('gxiH').addEventListener('click',function(e){var b=e.target.closest('[data-eq]');if(b)oE(+b.dataset.eq);});
function openI(){rH();ov.classList.add('open');}
var b=document.createElement('button');b.id='gx-inv-btn';b.type='button';b.innerHTML='🎒';b.title='Инвентарь';b.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();openI();});document.body.appendChild(b);
window.gxInvOpen=openI;})();

/* ===== СУНДУКИ — интерфейс вскрытия (детект дропа — на сайте) ===== */
(function(){if(window.__GX_CHEST)return;window.__GX_CHEST=true;
var CC='https://verstka-sites.s3.cloud.ru/assets/2952/upload_e1d1c6dabe264d8581d7810d41e9534e.webp',CO='https://verstka-sites.s3.cloud.ru/assets/2952/upload_af45f64ffe8b40c482a94e1a94cdbf0d.webp',GC='https://verstka-sites.s3.cloud.ru/assets/2952/upload_917dde3b8068423d877b1b3f2f62aa38.webp',GO='https://verstka-sites.s3.cloud.ru/assets/2952/upload_03260d9dfe864cbf8dd815377f45e583.webp',RC='https://verstka-sites.s3.cloud.ru/assets/2952/upload_9dda986b26c34f49829611660a75fe38.webp',RO='https://verstka-sites.s3.cloud.ru/assets/2952/upload_0ff766cacc5c4318b8e1a9df6d8bff92.webp',SC='https://verstka-sites.s3.cloud.ru/assets/2952/upload_e19725a51f1343b3b050d1801e475a46.webp',SO='https://verstka-sites.s3.cloud.ru/assets/2952/upload_8020d711c2ce4bdbbda4ff4eec2b5efb.webp',EI='https://verstka-sites.s3.cloud.ru/assets/2952/upload_7954134cbd4f487ba576c2bb7ca0cd04.webp';
var st=document.createElement('style');st.textContent='.gxc-badge{position:fixed;left:10px;top:8px;z-index:9001;background:rgba(2,6,23,.92);border:1px solid #e8c060;border-radius:10px;padding:4px 10px;color:#e8c060;font-weight:800;font-size:13px;font-family:Segoe UI,sans-serif}@media(max-width:640px){.gxc-badge{font-size:11px;padding:3px 8px}}#gxChestOv,#gxChestOv2,#gxChestOv3,#gxChestOv4{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.92);padding:14px;font-family:Segoe UI,sans-serif;overflow-y:auto}#gxChestOv{z-index:100085}#gxChestOv2{z-index:100086}#gxChestOv3{z-index:100087}#gxChestOv4{z-index:100088}#gxChestOv.open,#gxChestOv2.open,#gxChestOv3.open,#gxChestOv4.open{display:flex}#gxChestOv .chw,#gxChestOv2 .chw,#gxChestOv3 .chw,#gxChestOv4 .chw{background:#141414;border-radius:14px;padding:20px;max-width:96vw;width:480px;max-height:88vh;overflow-y:auto;position:relative;text-align:center;color:#eee}#gxChestOv .chw{border:1px solid #e8c060}#gxChestOv2 .chw{border:1px solid #4dff7a}#gxChestOv3 .chw{border:1px solid #c9b8e8}#gxChestOv4 .chw{border:1px solid #ff3355}.gxc-item{background:#1a1a1a;border:1px solid #333;border-radius:10px;padding:12px;display:inline-block;margin:6px;position:relative}.gxc-item.shake{animation:gxcShake .5s ease-in-out 2}@keyframes gxcShake{0%,100%{transform:rotate(0)}25%{transform:rotate(-4deg) scale(1.05)}75%{transform:rotate(4deg) scale(1.05)}}@keyframes gxcGlowPulse{0%,100%{filter:drop-shadow(0 0 8px currentColor) brightness(1)}50%{filter:drop-shadow(0 0 22px currentColor) brightness(1.18)}}.gxc-glowing-w{color:#fff;animation:gxcGlowPulse 1.4s ease-in-out infinite}.gxc-glowing-b{color:#6aa8ff;animation:gxcGlowPulse 1.4s ease-in-out infinite}.gxc-glowing-g{color:#ffe9a8;animation:gxcGlowPulse 1.2s ease-in-out infinite}.gxc-res{margin-top:10px;font-size:15px;font-weight:700}.gxc-res.w{color:#fff;text-shadow:0 0 12px rgba(255,255,255,.8)}.gxc-res.b{color:#6aa8ff;text-shadow:0 0 12px rgba(90,160,255,.8)}.gxc-res.g{color:#ffe9a8;text-shadow:0 0 14px rgba(232,192,96,.9)}';document.head.appendChild(st);
var EK='gx_emp_v1';function emp(){try{var d=JSON.parse(localStorage.getItem(EK)||'null');if(d&&typeof d.n==='number')return d.n;}catch(e){}return 0;}
function addEmp(n){try{var d=JSON.parse(localStorage.getItem(EK)||'null')||{n:0};d.n=(d.n||0)+n;localStorage.setItem(EK,JSON.stringify(d));}catch(e){}}
function rowC(){var r=document.getElementById('gxDropRow');if(!r){r=document.createElement('div');r.id='gxDropRow';r.style.cssText='position:fixed;left:50%;top:38%;transform:translateX(-50%);z-index:100071;display:flex;flex-direction:row;flex-wrap:wrap;gap:12px;align-items:flex-start;pointer-events:none;max-width:96vw';document.body.appendChild(r);setTimeout(function(){if(r&&!r.children.length)r.remove();},9000);}return r;}
function give(id){try{var s=JSON.parse(localStorage.getItem('gx_inventory_v1')||'null');if(!s||!s.inv)return false;if(s.inv.indexOf(id)!==-1)return false;s.inv.push(id);localStorage.setItem('gx_inventory_v1',JSON.stringify(s));if(window.__GX_INV_SV)window.__GX_INV_SV.inv=s.inv;if(window.gxInvOpen&&document.getElementById('gxInv')&&document.getElementById('gxInv').classList.contains('open'))try{window.gxInvOpen();}catch(e){}return true;}catch(e){return false;}}
function glowFX(box,resEl){var g=null;if(box.classList.contains('gxc-glow-w')||resEl.classList.contains('w'))g='w';else if(box.classList.contains('gxc-glow-b')||resEl.classList.contains('b'))g='b';else if(box.classList.contains('gxc-glow-g')||resEl.classList.contains('g'))g='g';if(!g)return;var img=box.querySelector('img');if(img)img.classList.add('gxc-glowing-'+g);var col=g==='b'?'106,168,255':(g==='g'?'255,233,168':'255,255,255');var rect=img?img.getBoundingClientRect():{left:innerWidth/2,top:innerHeight/2,width:0,height:0};for(var i=0;i<18;i++){var s=document.createElement('div');s.style.cssText='position:fixed;left:'+(rect.left+rect.width/2)+'px;top:'+(rect.top+rect.height/2)+'px;width:5px;height:5px;border-radius:50%;background:rgb('+col+');box-shadow:0 0 8px rgba('+col+',.9);z-index:100090;pointer-events:none;transition:transform .8s cubic-bezier(.15,.6,.3,1),opacity .8s linear';document.body.appendChild(s);var a=Math.random()*6.28,d=50+Math.random()*110;(function(el,dx,dy){requestAnimationFrame(function(){requestAnimationFrame(function(){el.style.transform='translate('+dx+'px,'+dy+'px)';el.style.opacity='0';setTimeout(function(){el.remove();},900);});});})(s,Math.cos(a)*d,Math.sin(a)*d);}setTimeout(function(){if(img)img.classList.remove('gxc-glowing-'+g);},4000);}
function axeFirework(){
var cx=innerWidth/2,cy=innerHeight/2,ov=document.createElement('div');
ov.style.cssText='position:fixed;inset:0;z-index:100070;pointer-events:none;overflow:hidden';
document.body.appendChild(ov);
var step=0;
function frame(){
if(step>60){try{ov.remove();}catch(e){}return;}
if(step<24){
var i=step,seg=document.createElement('div');
seg.style.cssText='position:absolute;left:'+(cx-3)+'px;top:'+(cy+90-i*6)+'px;width:6px;height:7px;background:linear-gradient(90deg,#7fd4ff,#2b9fd8);box-shadow:0 0 10px rgba(80,180,255,.9);border-radius:2px';
ov.appendChild(seg);}
else if(step<40){
var j=step-24,n=16,ang=-1.3+j*(2.6/n);
var bx=cx+Math.cos(ang)*70,by=cy-20+Math.sin(ang)*55;
var seg2=document.createElement('div');
seg2.style.cssText='position:absolute;left:'+bx+'px;top:'+by+'px;width:9px;height:9px;border-radius:50% 50% 50% 0;background:linear-gradient(135deg,#dff4ff,#4db4ff);box-shadow:0 0 14px rgba(80,180,255,1)';
ov.appendChild(seg2);}
else{
var a=Math.random()*6.28,d=30+Math.random()*150;
var s=document.createElement('div');
s.style.cssText='position:absolute;left:'+cx+'px;top:'+(cy+30)+'px;width:5px;height:5px;border-radius:50%;background:rgba(120,200,255,1);box-shadow:0 0 10px rgba(80,180,255,.95);transition:transform .9s cubic-bezier(.15,.6,.3,1),opacity .9s linear';
ov.appendChild(s);
(function(el,dx,dy){requestAnimationFrame(function(){el.style.transform='translate('+dx+'px,'+dy+'px)';el.style.opacity='0';});})(s,Math.cos(a)*d,Math.sin(a)*d);}
step++;requestAnimationFrame(frame);}
requestAnimationFrame(frame);
setTimeout(function(){try{ov.remove();}catch(e){}},4500);}
var GSET=[['galleon_axe','Якорный топор','https://verstka-sites.s3.cloud.ru/assets/2952/upload_6b7c937fdf3f4377933d1fd1fc97b25a.webp'],['galleon_garb','Пиратский Гарб','https://verstka-sites.s3.cloud.ru/assets/2952/upload_b88067c2e3b84b8b8145ce85a1a3214f.webp'],['galleon_ring','Пиратское кольцо','https://verstka-sites.s3.cloud.ru/assets/2952/upload_f690fa7a53ea44e5ab6d29d2084827c0.webp']];
var POOL=[['pistol_9mm','9 мм пистолет','Обычный','Оружие','https://verstka-sites.s3.cloud.ru/assets/2952/upload_102e93bfa0414753a68183e0812c566c.webp',2],['portupeya','Портупея','Обычный','Броня','https://verstka-sites.s3.cloud.ru/assets/2952/upload_4ae3305e35514804a75ca5457854de80.webp',2],['necklace','Ожерелье','Обычный','Аксессуар','https://verstka-sites.s3.cloud.ru/assets/2952/upload_fab48bbd8b984aa690e749170753f9d4.webp',2],['shotgun','Дробовик','Хороший','Оружие','https://verstka-sites.s3.cloud.ru/assets/2952/upload_46257ef678054873a7ada59e860b6621.webp',2],['jacket','Кожаная куртка','Хороший','Броня','https://verstka-sites.s3.cloud.ru/assets/2952/upload_3a58a93d0ec744b2bc81382e601a6aa5.webp',2],['cross_necklace','Крест-ожерелье','Хороший','Аксессуар','https://verstka-sites.s3.cloud.ru/assets/2952/upload_f4077e5badc54dfa996edc5bbd2d43a9.webp',2],['uzi','Узи','Хороший','Оружие','https://verstka-sites.s3.cloud.ru/assets/2952/upload_e28a6dcad5124066997672501c339598.webp',2],['lead_pistol','Свинцовый пистолет','Хороший','Оружие','https://verstka-sites.s3.cloud.ru/assets/2952/upload_a4d3689463f84092b18a7de9b48c5720.webp',1],['lead_knife','Свинцовый нож','Хороший','Броня','https://verstka-sites.s3.cloud.ru/assets/2952/upload_a4d3689463f84092b18a7de9b48c5720.webp',1],['lead_rose','Свинцовая роза','Хороший','Аксессуар','https://verstka-sites.s3.cloud.ru/assets/2952/upload_a4d3689463f84092b18a7de9b48c5720.webp',1],['lead_cloak','Плащ розы','Хороший','Броня','https://verstka-sites.s3.cloud.ru/assets/2952/upload_2f3f6150585a48f0a2b3affee2196bc0.webp',1],['lead_ring','Кольцо свинцовой розы','Хороший','Аксессуар','https://verstka-sites.s3.cloud.ru/assets/2952/upload_bedec1015d614468aff9aa1a556ea0db.webp',1],['med_robe','Мед халат','Хороший','Броня','https://verstka-sites.s3.cloud.ru/assets/2952/upload_339e1ae3f95b48aa8c69c8ac76040df3.webp',2]];
function pickItem(res,box,equalSet){var pool=POOL.filter(function(p){try{var s=JSON.parse(localStorage.getItem('gx_inventory_v1')||'null');return s&&s.inv&&s.inv.indexOf(p[0])===-1;}catch(e){return true;}});if(!pool.length){res.className='gxc-res';res.textContent='Сундук пуст — все предметы уже собраны.';return;}var wp=[];pool.forEach(function(p){var w=equalSet?2:(p[5]||2);for(var wi=0;wi<w;wi++)wp.push(p);});var p=wp[Math.random()*wp.length|0];give(p[0]);box.innerHTML='<img src="'+p[4]+'" style="width:120px;height:120px;object-fit:contain">';var isGood=p[2]==='Хороший';box.className='gxc-item'+(isGood?' gxc-glow-b':' gxc-glow-w');res.className='gxc-res '+(isGood?'b':'w');res.textContent=p[1]+' ['+p[2]+'] — '+p[3];glowFX(box,res);}
function mkOv(id,c,o,t,col){var ov=document.createElement('div');ov.id=id;ov.innerHTML='<div class="chw"><button style="position:absolute;top:10px;right:10px;width:34px;height:34px;background:rgba(0,0,0,.7);border:1px solid #555;border-radius:50%;color:#ccc;font-size:16px;cursor:pointer">✕</button><h2 style="font-size:1rem;letter-spacing:2px;text-transform:uppercase;color:'+col+';margin:0 0 12px">📦 '+t+'</h2><div class="gxcanim"><div class="gxc-item gxcbox"><img src="'+c+'" style="width:120px;height:120px;object-fit:contain"></div></div><div class="gxc-res gxcres" style="min-height:24px"></div></div>';document.body.appendChild(ov);ov.querySelector('button').addEventListener('click',function(){ov.classList.remove('open');});ov.addEventListener('click',function(e){if(e.target===ov)ov.classList.remove('open');});return ov;}
function animOpen(ov,o){var box=ov.querySelector('.gxcbox');setTimeout(function(){box.classList.add('shake');},400);setTimeout(function(){box.classList.remove('shake');var img=box.querySelector('img');if(img)img.src=o;},1600);return box;}
var K1='gx_chests_v1',K2='gx_chests2_v1',K3='gx_chests3_v1',K4='gx_chests4_v1';
function cnt(k){try{var d=JSON.parse(localStorage.getItem(k)||'null');if(d&&typeof d.n==='number')return d.n;}catch(e){}return 0;}
function setCnt(k,n){try{localStorage.setItem(k,JSON.stringify({n:n}));}catch(e){}}
function empRoll(res,box,base){var eRoll=Math.random(),amt,cls,glow;if(eRoll<0.60){amt=base;cls='w';glow='gxc-glow-w';}else if(eRoll<0.90){amt=base*5;cls='b';glow='gxc-glow-b';}else{amt=base*10;cls='g';glow='gxc-glow-g';}addEmp(amt);box.innerHTML='<img src="'+EI+'" style="width:120px;height:120px;object-fit:contain">';box.className='gxc-item '+glow;res.className='gxc-res '+cls;res.textContent='+'+amt+' EMP!';glowFX(box,res);}
function gsetDrop(res,box,anim){
var cand=GSET.filter(function(g){try{var s=JSON.parse(localStorage.getItem('gx_inventory_v1')||'null');return s&&s.inv&&s.inv.indexOf(g[0])===-1;}catch(e){return true;}});
if(!cand.length)return false;
if(Math.random()>=0.10)return false;
var g=cand[Math.random()*cand.length|0];
give(g[0]);
axeFirework();
setTimeout(function(){var row=rowC();
var bn=document.createElement('div');bn.className='gxDropBanner';bn.style.cssText='background:#0a0a0a;border:2px solid #4db4ff;border-radius:14px;padding:12px 14px;text-align:center;color:#eee;font-family:Segoe UI,sans-serif;flex-shrink:0';
bn.innerHTML='<div style="font-size:12px;font-weight:800;color:#4db4ff;margin-bottom:6px">🎯 РЕДКАЯ ДОБЫЧА!</div><img src="'+g[2]+'" style="width:82px;height:82px;object-fit:contain;background:#111;border-radius:8px;border:1px solid #2b6a8b;margin-bottom:6px"><div style="font-size:13px;font-weight:700">'+g[1]+'</div><div style="font-size:10px;color:#4db4ff">[Редкий] · Сет «Galleon»</div><div style="font-size:10px;color:#9fd18a;margin-top:3px">🎒 в инвентарь</div>';
row.appendChild(bn);setTimeout(function(){bn.style.transition='opacity .5s';bn.style.opacity='0';setTimeout(function(){bn.remove();},550);},5200);},400);
var box2=anim.querySelector('.gxcbox')||anim.querySelector('.gxc-item');
if(box2){box2.innerHTML='<img src="'+g[2]+'" style="width:120px;height:120px;object-fit:contain">';box2.className='gxc-item gxc-glowing-b';}
res.className='gxc-res b';
res.textContent=g[1]+' [Редкий] — Сет «Galleon»!';
return true;}
function coreOpen(){var n=cnt(K1);if(n<=0){alert('Сундуков нет — убей Ядро Apofis, чтобы добыть!');return;}setCnt(K1,n-1);var ov=document.getElementById('gxChestOv');if(!ov||!document.body.contains(ov))ov=mkOv('gxChestOv',CC,CO,'Вскрытие сундука…','#e8c060');ov.classList.add('open');var box=animOpen(ov,CO);setTimeout(function(){var res=ov.querySelector('.gxcres');if(Math.random()<0.70){empRoll(res,box,10);}else{var pool=POOL.filter(function(p){try{var s=JSON.parse(localStorage.getItem('gx_inventory_v1')||'null');return s&&s.inv&&s.inv.indexOf(p[0])===-1;}catch(e){return true;}}).filter(function(p){return p[2]==='Обычный';});if(!pool.length){res.className='gxc-res';res.textContent='Сундук пуст — обычные предметы уже собраны.';return;}var p=pool[Math.random()*pool.length|0];give(p[0]);box.innerHTML='<img src="'+p[4]+'" style="width:120px;height:120px;object-fit:contain">';box.className='gxc-item gxc-glow-w';res.className='gxc-res w';res.textContent=p[1]+' ['+p[2]+'] — '+p[3];glowFX(box,res);}},2100);}
function galleonOpen(){var n=cnt(K2);if(n<=0){alert('Сундуков Mecha Galleon нет — уничтожьте босса!');return;}setCnt(K2,n-1);var ov=document.getElementById('gxChestOv2');if(!ov||!document.body.contains(ov))ov=mkOv('gxChestOv2',GC,GO,'Вскрытие сундука Mecha Galleon…','#4dff7a');ov.classList.add('open');var box=animOpen(ov,GO);setTimeout(function(){var res=ov.querySelector('.gxcres');if(!gsetDrop(res,box,ov)){if(Math.random()<0.60){empRoll(res,box,20);}else{pickItem(res,box,false);}}},2100);}
function razorOpen(){var n=cnt(K3);if(n<=0){alert('Сундуков Razor нет — уничтожьте босса!');return;}setCnt(K3,n-1);var ov=document.getElementById('gxChestOv3');if(!ov||!document.body.contains(ov))ov=mkOv('gxChestOv3',RC,RO,'Вскрытие сундука Razor…','#c9b8e8');ov.classList.add('open');var box=animOpen(ov,RO);setTimeout(function(){var res=ov.querySelector('.gxcres');if(Math.random()<0.60){empRoll(res,box,30);}else{pickItem(res,box,true);}},2100);}
function seoshiOpen(){var n=cnt(K4);if(n<=0){alert('Сундуков Seoshi нет — уничтожьте босса!');return;}setCnt(K4,n-1);var ov=document.getElementById('gxChestOv4');if(!ov||!document.body.contains(ov))ov=mkOv('gxChestOv4',SC,SO,'Вскрытие сундука Seoshi…','#ff3355');ov.classList.add('open');var box=animOpen(ov,SO);setTimeout(function(){var res=ov.querySelector('.gxcres');if(Math.random()<0.60){empRoll(res,box,30);}else{pickItem(res,box,true);}},2100);}
function injectInv(){var wrap=document.querySelector('#gxInv .gxi-wrap');if(!wrap||document.getElementById('gxChestSec'))return;var sec=document.createElement('div');sec.id='gxChestSec';sec.style.cssText='text-align:center;margin-bottom:16px';sec.innerHTML='<div style="font-size:11px;color:#888;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Сокровищница</div><div style="display:flex;justify-content:center;gap:14px;align-items:center;flex-wrap:wrap"><div style="background:#1a1a1a;border:1px solid #e8c060;border-radius:10px;padding:8px 14px"><img src="'+CC+'" style="width:40px;height:40px;object-fit:contain;vertical-align:middle"><span style="font-weight:800;color:#e8c060;font-size:15px;margin-left:6px" id="gxCN">0</span> <span style="font-size:11px;color:#aaa">Ядро</span></div><div style="background:#1a1a1a;border:1px solid #4dff7a;border-radius:10px;padding:8px 14px"><img src="'+GC+'" style="width:40px;height:40px;object-fit:contain;vertical-align:middle"><span style="font-weight:800;color:#4dff7a;font-size:15px;margin-left:6px" id="gxCN2">0</span> <span style="font-size:11px;color:#aaa">Galleon</span></div><div style="background:#1a1a1a;border:1px solid #c9b8e8;border-radius:10px;padding:8px 14px"><img src="'+RC+'" style="width:40px;height:40px;object-fit:contain;vertical-align:middle"><span style="font-weight:800;color:#c9b8e8;font-size:15px;margin-left:6px" id="gxCN3">0</span> <span style="font-size:11px;color:#aaa">Razor</span></div><div style="background:#1a1a1a;border:1px solid #ff3355;border-radius:10px;padding:8px 14px"><img src="'+SC+'" style="width:40px;height:40px;object-fit:contain;vertical-align:middle"><span style="font-weight:800;color:#ff3355;font-size:15px;margin-left:6px" id="gxCN4">0</span> <span style="font-size:11px;color:#aaa">Seoshi</span></div><div style="background:#1a1a1a;border:1px solid #7fc9ff;border-radius:10px;padding:8px 14px"><img src="'+EI+'" style="width:40px;height:40px;object-fit:contain;vertical-align:middle"><span style="font-weight:800;color:#7fc9ff;font-size:15px;margin-left:6px" id="gxCEN">0</span> <span style="font-size:11px;color:#aaa">EMP</span></div></div><div style="margin-top:8px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap"><button id="gxCOpen" type="button" style="padding:8px 16px;background:#2a2213;color:#e8c060;border:1px solid #e8c060;border-radius:8px;font-weight:800;font-size:12px;cursor:pointer;font-family:inherit">📦 Ядро</button><button id="gxCOpen2" type="button" style="padding:8px 16px;background:#1a2b1a;color:#4dff7a;border:1px solid #4dff7a;border-radius:8px;font-weight:800;font-size:12px;cursor:pointer;font-family:inherit">🟢 Galleon</button><button id="gxCOpen3" type="button" style="padding:8px 16px;background:#251a2b;color:#c9b8e8;border:1px solid #c9b8e8;border-radius:8px;font-weight:800;font-size:12px;cursor:pointer;font-family:inherit">🟣 Razor</button><button id="gxCOpen4" type="button" style="padding:8px 16px;background:#2b1a1e;color:#ff3355;border:1px solid #ff3355;border-radius:8px;font-weight:800;font-size:12px;cursor:pointer;font-family:inherit">🌸 Seoshi</button></div>';wrap.insertBefore(sec,wrap.firstChild);document.getElementById('gxCOpen').addEventListener('click',function(e){e.stopPropagation();coreOpen();});document.getElementById('gxCOpen2').addEventListener('click',function(e){e.stopPropagation();galleonOpen();});document.getElementById('gxCOpen3').addEventListener('click',function(e){e.stopPropagation();razorOpen();});document.getElementById('gxCOpen4').addEventListener('click',function(e){e.stopPropagation();seoshiOpen();});}
function rdy(f){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',f):f();}
rdy(function(){
setInterval(function(){try{if(document.getElementById('gxInv')&&document.getElementById('gxInv').classList.contains('open')){injectInv();var a=document.getElementById('gxCN'),b2=document.getElementById('gxCN2'),c3=document.getElementById('gxCN3'),c4=document.getElementById('gxCN4'),ce=document.getElementById('gxCEN');if(a)a.textContent=cnt(K1);if(b2)b2.textContent=cnt(K2);if(c3)c3.textContent=cnt(K3);if(c4)c4.textContent=cnt(K4);if(ce)ce.textContent=emp();}}catch(e){}},1500);
var badge=document.createElement('div');badge.className='gxc-badge';document.body.appendChild(badge);
setInterval(function(){badge.innerHTML='💠 '+emp()+' EMP · 🟡 '+cnt(K1)+' · 🟢 '+cnt(K2)+' · 🟣 '+cnt(K3)+' · 🌸 '+cnt(K4);},1500);
});
})();

/* ===== ХОМЯК 🐹 ===== */
(function(){if(window.__GX_HAM)return;window.__GX_HAM=true;function rdy(f){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',f):f();}
rdy(function(){if(document.getElementById('gx-hammer-btn'))return;
var c=document.createElement('style');c.textContent='#gx-hammer-btn{position:fixed;right:10px;bottom:148px;z-index:99992;width:52px;height:52px;background:rgba(0,0,0,.85);border:1px solid #c41e3a;color:#fff;font-size:22px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center}#gxHamm{position:fixed;inset:0;z-index:100020;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.92);font-family:Segoe UI,sans-serif;user-select:none;padding:14px;overflow-y:auto}#gxHamm.open{display:flex}#gxHamm .gxh-wrap{display:flex;flex-direction:column;align-items:center;max-width:520px;width:100%}#gxHamm h1{font-size:1.7rem;letter-spacing:3px;text-transform:uppercase;color:#eee;font-weight:700}#gxHamm h1 span{color:#c41e3a}#gxHamm .gxh-stats{display:flex;gap:40px;margin-bottom:20px;font-size:18px;color:#eee}#gxHamm .gxh-stats span{color:#c41e3a;font-weight:bold}#gxHamm .gxh-game{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;width:100%;max-width:460px;padding:14px;background:#111;border-radius:16px;border:1px solid #333}#gxHamm .gxh-hole{width:100%;aspect-ratio:1/1;max-width:140px;justify-self:center;background:#1a1a1a;border:2px solid #333;border-radius:12px;position:relative;overflow:hidden}#gxHamm .gxh-mole{position:absolute;bottom:-100%;left:50%;transform:translateX(-50%);font-size:clamp(44px,14vw,64px);transition:bottom .15s ease-out;cursor:pointer;line-height:1}#gxHamm .gxh-mole.up{bottom:10px}#gxHamm .gxh-start{margin-top:24px;padding:14px 40px;font-size:16px;font-weight:600;background:#c41e3a;color:#fff;border:none;border-radius:8px;cursor:pointer;text-transform:uppercase;font-family:inherit}#gxHamm .gxh-start:disabled{background:#555}#gxHamm .gxh-msg{margin-top:16px;font-size:18px;height:28px;color:#c41e3a;text-align:center}#gxHamm .gxh-close{position:fixed;top:14px;right:14px;width:40px;height:40px;background:rgba(0,0,0,.7);border:1px solid #555;border-radius:50%;color:#ccc;font-size:18px;cursor:pointer}';document.head.appendChild(c);
var btn=document.createElement('button');btn.id='gx-hammer-btn';btn.type='button';btn.textContent='🐹';btn.title='Ударь хомяка';document.body.appendChild(btn);
var ov=document.createElement('div');ov.id='gxHamm';ov.innerHTML='<div class="gxh-wrap"><h1>Ударь <span>хомяка</span></h1><div class="gxh-stats"><div>Счёт: <span id="gxhScore">0</span></div><div>Время: <span id="gxhTime">30</span></div></div><div class="gxh-game" id="gxhGame"></div><button class="gxh-start" id="gxhStart" type="button">Старт</button><div class="gxh-msg" id="gxhMsg"></div></div>';document.body.appendChild(ov);
var cb=document.createElement('button');cb.className='gxh-close';cb.type='button';cb.textContent='✕';ov.appendChild(cb);
var g=ov.querySelector('#gxhGame');for(var i=0;i<9;i++){var h=document.createElement('div');h.className='gxh-hole';var m=document.createElement('div');m.className='gxh-mole';m.textContent='🐹';h.appendChild(m);g.appendChild(h);}
var holes=[].slice.call(ov.querySelectorAll('.gxh-hole')),moles=[].slice.call(ov.querySelectorAll('.gxh-mole')),sc=ov.querySelector('#gxhScore'),tm=ov.querySelector('#gxhTime'),sb=ov.querySelector('#gxhStart'),msg=ov.querySelector('#gxhMsg'),score=0,left=30,gi=null,playing=false,last=null;
function rh(){var h=holes[Math.random()*holes.length|0];if(h===last)return rh();last=h;return h;}
function peep(){if(!playing)return;var m=rh().querySelector('.gxh-mole');m.classList.add('up');setTimeout(function(){m.classList.remove('up');if(playing)peep();},450+Math.random()*700);}
function go(){if(playing)return;score=0;left=30;playing=true;sc.textContent=0;tm.textContent=30;msg.textContent='';sb.disabled=true;sb.textContent='Идёт игра...';peep();gi=setInterval(function(){tm.textContent=--left;if(left<=0)end();},1000);}
function end(){playing=false;clearInterval(gi);moles.forEach(function(m){m.classList.remove('up');});sb.disabled=false;sb.textContent='Ещё раз';msg.textContent='Игра окончена! Твой счёт: '+score;}
function hit(m){if(!playing||!m.classList.contains('up'))return;sc.textContent=++score;m.classList.remove('up');}
moles.forEach(function(m){m.addEventListener('mousedown',function(){hit(m);});m.addEventListener('touchstart',function(e){e.preventDefault();hit(m);},{passive:false});});
sb.addEventListener('click',go);btn.addEventListener('click',function(e){e.stopPropagation();e.preventDefault();ov.classList.add('open');});cb.addEventListener('click',function(e){e.stopPropagation();e.preventDefault();ov.classList.remove('open');if(playing)end();});
ov.addEventListener('click',function(e){if(e.target===ov){ov.classList.remove('open');if(playing)end();}});});})();

/* ===== ДОСТИЖЕНИЯ 🏆 ===== */
(function(){if(window.__GX_ACH)return;window.__GX_ACH=true;var K='gx_ach_v1';
var ACH=[{id:'core1',icon:'☢',name:'Ядро проблемы',desc:'Уничтожить Ядро Apofis. Ну что, Apofis, кто тут теперь ошибка в системе?',n:function(s){return s.core>=1;}},{id:'core10',icon:'💥',name:'Раскол базы данных',desc:'Уничтожить Ядро Apofis 10 раз. Твой номер в базе — теперь легенда.',n:function(s){return s.core>=10;}},{id:'boss1',icon:'🎯',name:'Контракт выполнен',desc:'Уничтожить первого большого босса. Galleon, Seoshi или Razor — адрес всех ваших претензий.',n:function(s){return s.boss>=1;}},{id:'boss5',icon:'📋',name:'Кадровый вопрос решён',desc:'Уничтожить 5 боссов. HR-отдел Apofis уже пишет заявление.',n:function(s){return s.boss>=5;}},{id:'boss15',icon:'⚰',name:'Кадровый голод Apofis',desc:'Уничтожить 15 боссов. На собеседования больше никто не приходит.',n:function(s){return s.boss>=15;}},{id:'pois5',icon:'☠',name:'Сомелье свинца',desc:'Отравить врагов 5 раз. Вино? Нет. Свинцовая роза — это высшая кухня.',n:function(s){return s.pois>=5;}},{id:'pois15',icon:'🧪',name:'Токсичный сотрудник года',desc:'Отравить врагов 15 раз. Apofis выдал вам премию — в виде противоядия.',n:function(s){return s.pois>=15;}},{id:'set3',icon:'🌹',name:'Свинцовая свадьба',desc:'Собрать все 3 предмета сета «Свинцовая роза». Красиво, тяжело и слегка ядовито.',n:function(s){return s.set>=3;}},{id:'coll8',icon:'🎒',name:'Оружейная комната',desc:'Собрать 8 предметов в инвентаре. N-04 не выходит из шока от вашего шопинга.',n:function(s){return s.inv>=8;}},{id:'ham15',icon:'🐹',name:'Хомяк-гладиатор',desc:'Забить счёт 15 в «Ударь хомяка». Секретная подготовка элитных бойцов Империи.',n:function(s){return s.ham>=15;}},{id:'heal20',icon:'✚',name:'Медбрат с Узи',desc:'Надеть Узи и вылечить союзников на 200+ HP суммарно. Странная медицина, но работает.',n:function(s){return s.heal>=200;}}];
var CH=[['ach1','🎖','Новичок на поле боя!','Пройдена первая волна'],['ach2','🥇','Рядовой вояка!','Пройдено пять волн'],['ach3','🏅','Всегда на чеку!','Первая победа на ивенте'],['achBell1','🔔','Первое знакомство!','Bell впервые лично убивает Mecha Galleon'],['achBell3','💀','Я боюсь Бэль!','Bell трижды лично убивает Mecha Galleon'],['achSkyD','🪂','Мне бы в небо!','В течение первых 20 волн Sky умирает трижды'],['achAlisa','⚡','Дезинтеграция!','Mecha Galleon первой убивает Alisa'],['achW10','🛡','Опытный боец!','Пройдено 10 волн'],['achW20','👑','Дальше идти некуда!','Пройдено 20 волн']];
function st(){try{var d=JSON.parse(localStorage.getItem(K)||'null');if(d&&d.stats)return d;}catch(e){}return{stats:{},unlocked:{}};}
function sv(d){try{localStorage.setItem(K,JSON.stringify(d));}catch(e){}}
function bmp(k){var d=st();d.stats[k]=(d.stats[k]||0)+1;sv(d);}
function iL(){try{var s=JSON.parse(localStorage.getItem('gx_inventory_v1')||'null');return s&&s.inv?s.inv.length:0;}catch(e){return 0;}}
function sC(){try{var s=JSON.parse(localStorage.getItem('gx_inventory_v1')||'null');if(!s||!s.heroes)return 0;var m=0;['weapon','armor','accessory'].forEach(function(sl){var c=0;['lead_pistol','lead_knife','lead_cloak'].forEach(function(p){s.heroes.forEach(function(h){if(h.equipment[sl]===p)c++;});});if(c>m)m=c;});return m;}catch(e){return 0;}}
var c=document.createElement('style');c.textContent='#gx-ach-btn{position:fixed;right:10px;bottom:322px;z-index:99991;width:52px;height:52px;background:rgba(0,0,0,.9);border:2px solid #e8c060;color:#e8c060;font-size:24px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center}#gx-ach-ov{position:fixed;inset:0;z-index:100085;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.92);padding:14px;font-family:Segoe UI,sans-serif;overflow-y:auto}#gx-ach-ov.open{display:flex}#gx-ach-ov .axw{background:#141414;border:1px solid #e8c060;border-radius:14px;padding:20px;max-width:96vw;width:520px;max-height:88vh;overflow-y:auto;position:relative}#gx-ach-ov h1{font-size:1.1rem;letter-spacing:2px;text-transform:uppercase;color:#e8c060;text-align:center;margin:0 0 10px}#gx-ach-ov .axs{color:#888;font-size:11px;text-align:center;margin-bottom:14px}#gx-ach-ov .axc{position:absolute;top:10px;right:10px;width:34px;height:34px;background:rgba(0,0,0,.7);border:1px solid #555;border-radius:50%;color:#ccc;font-size:16px;cursor:pointer}#gx-ach-ov .axi{display:flex;gap:10px;align-items:center;background:#1a1a1a;border:1px solid #333;border-radius:10px;padding:10px;margin-bottom:8px;opacity:.45}#gx-ach-ov .axi.done{opacity:1;border-color:#e8c060}#gx-ach-ov .axi .ic{font-size:26px;width:36px;text-align:center;flex-shrink:0}#gx-ach-ov .axi .nm{font-weight:700;font-size:13px;color:#eee}#gx-ach-ov .axi.done .nm{color:#e8c060}#gx-ach-ov .axi .ds{font-size:11px;color:#999;margin-top:2px}#gx-ach-ov .gxtab{flex:1;padding:10px 8px;background:#1a1a1a;border:1px solid #555;border-radius:8px;color:#ccc;font-size:12px;font-weight:700;cursor:pointer;min-height:42px}#gx-ach-ov .gxtab.on{background:#2a2213;border-color:#e8c060;color:#e8c060}#gx-ach-tst{position:fixed;left:50%;top:12%;transform:translateX(-50%);z-index:100090;background:#0a0a0a;border:2px solid #e8c060;border-radius:12px;padding:14px 22px;text-align:center;color:#eee;font-family:Segoe UI,sans-serif;max-width:92vw;transition:opacity .5s}#gx-ach-tst .ti{font-size:30px;margin-bottom:6px}#gx-ach-tst .tl{font-size:11px;font-weight:800;letter-spacing:2px;color:#e8c060}#gx-ach-tst .tn{font-size:16px;font-weight:800;margin-top:3px}#gx-ach-tst .td{font-size:11px;color:#aaa;margin-top:3px}';document.head.appendChild(c);
function toast(a){var o=document.getElementById('gx-ach-tst');if(o)o.remove();var t=document.createElement('div');t.id='gx-ach-tst';t.innerHTML='<div class="ti">'+a.icon+'</div><div class="tl">🏆 ДОСТИЖЕНИЕ ПОЛУЧЕНО!</div><div class="tn">'+a.name+'</div><div class="td">'+a.desc+'</div>';document.body.appendChild(t);setTimeout(function(){t.style.opacity='0';setTimeout(function(){t.remove();},550);},4200);}
var b=document.createElement('button');b.id='gx-ach-btn';b.type='button';b.textContent='🏆';b.title='Достижения';b.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();open();});document.body.appendChild(b);
var ov=document.createElement('div');ov.id='gx-ach-ov';ov.innerHTML='<div class="axw"><button class="axc" id="gxax" type="button">✕</button><h1>🏆 Достижения</h1><div id="gx-ach-tabs" style="display:flex;gap:8px;justify-content:center;margin-bottom:12px"><button type="button" data-t="gx" class="gxtab on">🏆 Grey Empire</button><button type="button" data-t="ch" class="gxtab">⚔ Хроники</button></div><p class="axs" id="gxA"></p><div id="gxl"></div></div>';document.body.appendChild(ov);
document.getElementById('gxax').addEventListener('click',function(){ov.classList.remove('open');});
ov.addEventListener('click',function(e){if(e.target===ov)ov.classList.remove('open');});
var cur='gx';
function rGX(){var d=st(),n=0,h='';ACH.forEach(function(a){var ok=!!d.unlocked[a.id];if(ok)n++;h+='<div class="axi'+(ok?' done':'')+'"><div class="ic">'+a.icon+'</div><div><div class="nm">'+a.name+'</div><div class="ds">'+a.desc+'</div></div></div>';});document.getElementById('gxl').innerHTML=h;document.getElementById('gxA').textContent='Открыто '+n+' из '+ACH.length;}
function rCH(){var d={};try{d=JSON.parse(localStorage.getItem('grey_empire_achv')||'{}');}catch(e){}var n=0,h='';CH.forEach(function(a){var ok=!!d[a[0]];if(ok)n++;h+='<div class="axi'+(ok?' done':'')+'"><div class="ic">'+a[1]+'</div><div><div class="nm">'+a[2]+'</div><div class="ds">'+a[3]+'</div></div></div>';});document.getElementById('gxl').innerHTML=h;document.getElementById('gxA').textContent='Открыто '+n+' из '+CH.length+' · Хроники';}
function open(){cur='gx';rGX();ov.querySelectorAll('[data-t]').forEach(function(x){x.classList.toggle('on',x.dataset.t==='gx');});ov.classList.add('open');}
document.getElementById('gx-ach-tabs').addEventListener('click',function(e){var t=e.target.closest('[data-t]');if(!t)return;cur=t.dataset.t;ov.querySelectorAll('[data-t]').forEach(function(x){x.classList.toggle('on',x.dataset.t===cur);});cur==='gx'?rGX():rCH();});
function chk(){var d=st();var s={core:d.stats.core||0,boss:d.stats.boss||0,pois:d.stats.pois||0,heal:d.stats.heal||0,ham:d.stats.ham||0,inv:iL(),set:sC()};ACH.forEach(function(a){if(!d.unlocked[a.id]&&a.n(s)){d.unlocked[a.id]=true;toast(a);}});sv(d);}
var CKr=/Ядр[oо0][^\n]{0,60}(уничтожен|ист[её]к кровью)/i,BKr=/(MECHA\s*-?\s*GALLEON|Seoshi|Рейзор|Razor)[^\n]{0,80}(уничтожен|ист[её]к кровью|повержен|исчез|разлетелся|рассыпался|пад[её]|гибнет)/i,LL=0;
function rdy(f){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',f):f();}
rdy(function(){
setInterval(function(){chk();},3000);
setInterval(function(){var el=document.getElementById('gxhScore');if(el){var v=parseInt(el.textContent,10)||0;if(v>0){var d=st();if((d.stats.ham||0)<v){d.stats.ham=v;sv(d);chk();}}}},2000);
setInterval(function(){try{var lg=document.getElementById('vrpg3-log');if(!lg)return;var t=lg.textContent||'';if(t.length<LL)LL=0;if(t.length>LL){var f=t.slice(LL);LL=t.length;if(!f)return;var ch2=false;if(CKr.test(f)){bmp('core');ch2=true;}else if(BKr.test(f)){bmp('boss');ch2=true;}if(ch2)chk();}}catch(e){}},1000);
var iv=setInterval(function(){var lg=document.getElementById('vrpg3-log');if(!lg)return;clearInterval(iv);new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType!==1)return;var t=n.textContent||'';if(/^(N-04|Alisa|Crysta|Sky)\s*(?:→|атакует|навык)/.test(t)&&t.indexOf('−')!==-1)bmp('atk');if(/^(N-04|Alisa|Crysta|Sky) (?:мощно )?исцеляет/.test(t)){var hm=t.match(/\+(\d+)/);if(hm){var d=st();d.stats.heal=(d.stats.heal||0)+ +hm[1];sv(d);chk();}}});});}).observe(lg,{childList:true});},600);setTimeout(function(){clearInterval(iv);},3e4);
var lp=0;setInterval(function(){var d=st(),p=d.stats.atk||0;if(p>lp){lp=p;if(p%5===0){bmp('pois');chk();}}},4000);
});})();

/* ===== СТАТИСТИКА 📊 ===== */
(function(){if(window.__GX_STAT)return;window.__GX_STAT=true;var K='gx_stat_v1';
function dt(){try{var d=JSON.parse(localStorage.getItem(K)||'null');if(d)return d;}catch(e){}return{kills:0,core:0,waves:0,drops:0,deaths:0,pois:0,ham:0,first:Date.now()};}
function sv(d){try{localStorage.setItem(K,JSON.stringify(d));}catch(e){}}
function iL(){try{var s=JSON.parse(localStorage.getItem('gx_inventory_v1')||'null');return s&&s.inv?s.inv.length:0;}catch(e){return 0;}}
function aD(){var n=0;try{var d=JSON.parse(localStorage.getItem('gx_ach_v1')||'null');if(d&&d.unlocked)for(var k in d.unlocked)n++;}catch(e){}try{var c=JSON.parse(localStorage.getItem('grey_empire_achv')||'{}');for(var k2 in c)n++;}catch(e){}return n;}
var c=document.createElement('style');c.textContent='#gx-stat-btn{position:fixed;right:10px;bottom:380px;z-index:99991;width:52px;height:52px;background:rgba(0,0,0,.9);border:2px solid #7fc9ff;color:#7fc9ff;font-size:24px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center}#gx-stat-ov{position:fixed;inset:0;z-index:100085;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.92);padding:14px;font-family:Segoe UI,sans-serif;overflow-y:auto}#gx-stat-ov.open{display:flex}#gx-stat-ov .sw{background:#141414;border:1px solid #7fc9ff;border-radius:14px;padding:20px;max-width:96vw;width:460px;max-height:88vh;overflow-y:auto;position:relative;color:#eee}#gx-stat-ov h1{font-size:1.05rem;letter-spacing:2px;text-transform:uppercase;color:#7fc9ff;text-align:center;margin:0 0 14px}#gx-stat-ov .sc{position:absolute;top:10px;right:10px;width:34px;height:34px;background:rgba(0,0,0,.7);border:1px solid #555;border-radius:50%;color:#ccc;font-size:16px;cursor:pointer}#gx-stat-ov .si{display:flex;justify-content:space-between;align-items:center;background:#1a1a1a;border:1px solid #333;border-radius:8px;padding:10px 12px;margin-bottom:6px}#gx-stat-ov .si .l{font-size:12px;color:#aaa}#gx-stat-ov .si .v{font-size:15px;font-weight:800;color:#7fc9ff}#gx-stat-ov .player{text-align:center;margin-bottom:14px}#gx-stat-ov .pn{font-size:17px;font-weight:800;color:#e8c060}#gx-stat-ov .ps{font-size:11px;color:#888;margin-top:2px}';document.head.appendChild(c);
function rdy(f){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',f):f();}
rdy(function(){
var b=document.createElement('button');b.id='gx-stat-btn';b.type='button';b.textContent='📊';b.title='Статистика профиля';b.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();open();});document.body.appendChild(b);
var ov=document.createElement('div');ov.id='gx-stat-ov';ov.innerHTML='<div class="sw"><button class="sc" id="gxsx" type="button">✕</button><h1>📊 Профиль</h1><div class="player" id="gsp"></div><div id="gsl"></div></div>';document.body.appendChild(ov);
document.getElementById('gxsx').addEventListener('click',function(){ov.classList.remove('open');});
ov.addEventListener('click',function(e){if(e.target===ov)ov.classList.remove('open');});
function fm(ms){var m=ms/6e4|0;if(m<60)return m+' мин';var h=m/60|0;return h+' ч '+(m%60)+' мин';}
function open(){var d=dt(),nm='Игрок';try{nm=localStorage.getItem('gx_player_name')||'Игрок';}catch(e){}
document.getElementById('gsp').innerHTML='<div class="pn">'+nm+'</div><div class="ps">Служащий Серой Империи</div>';
var h='';[['Боссов уничтожено',d.kills],['Ядер Apofis убито',d.core],['Лучшая волна',d.waves||0],['Предметов добыто',d.drops],['Смертей отряда',d.deaths],['Отравлений нанесено',d.pois||0],['Рекорд в «Ударь хомяка»',d.ham||0],['Предметов в инвентаре',iL()],['Достижений получено',aD()],['Время в игре',fm(Date.now()-(d.first||Date.now()))],['На службе с',new Date(d.first||Date.now()).toLocaleDateString('ru-RU')]].forEach(function(r){h+='<div class="si"><span class="l">'+r[0]+'</span><span class="v">'+r[1]+'</span></div>';});
document.getElementById('gsl').innerHTML=h;ov.classList.add('open');}
var CKr=/Ядр[oо0][^\n]{0,60}(уничтожен|ист[её]к кровью)/i,BKr=/(MECHA\s*-?\s*GALLEON|Seoshi|Рейзор|Razor)[^\n]{0,80}(уничтожен|ист[её]к кровью|повержен|исчез|разлетелся|рассыпался|пад[её]|гибнет)/i,LL=0;
setInterval(function(){try{var lg=document.getElementById('vrpg3-log');if(!lg)return;var t=lg.textContent||'';if(t.length<LL)LL=0;if(t.length>LL){var f=t.slice(LL);LL=t.length;if(!f)return;var d=dt(),ch=false;if(CKr.test(f)){d.kills++;d.core++;ch=true;}else if(BKr.test(f)){d.kills++;ch=true;}if(ch)sv(d);}}catch(e){}},1000);
var pi=iL();setInterval(function(){var i=iL();if(i>pi){var d=dt();d.drops+=i-pi;sv(d);}pi=i;},3000);
setInterval(function(){var el=document.getElementById('gxhScore');if(el){var v=parseInt(el.textContent,10)||0;if(v>0){var d=dt();if((d.ham||0)<v){d.ham=v;sv(d);}}}},2000);
setInterval(function(){try{var raw=localStorage.getItem('grey_empire_rpg_v4');if(!raw)return;var s=JSON.parse(raw);var d=dt(),w=s.wave||s.waves||0;if(w>(d.waves||0)){d.waves=w;sv(d);}}catch(e){}},5000);
});})();
/* ============================================================
   GX-SITE.JS — Часть 2: Leon, ивент, цифры, верхушка, биографии
   ============================================================ */

/* ===== ЗАГРУЗЧИК ХРОНИК/БРЕЙКЕРА + бонусы экипировки + патч зова Leon ===== */
(function(){if(window.__GX_LOADER)return;window.__GX_LOADER=true;
function bf(n){try{var s=JSON.parse(localStorage.getItem('gx_inventory_v1')||'null');if(!s||!s.heroes)return{hp:0,atk:0,crit:0,dodge:0,heal:0,cdmg:0};var N=['N-04','Alisa','Crysta','Sky'],i=N.indexOf(n);if(i<0)return{hp:0,atk:0,crit:0,dodge:0,heal:0,cdmg:0};var h=null;s.heroes.forEach(function(x){if(x.id===i)h=x;});if(!h)return{hp:0,atk:0,crit:0,dodge:0,heal:0,cdmg:0};var A={pistol_9mm:{atk:5},portupeya:{hp:30},necklace:{crit:5},shotgun:{atk:10,crit:5},jacket:{hp:50,dodge:10},cross_necklace:{dodge:10,crit:10},uzi:{atk:10,heal:20},lead_pistol:{atk:10},lead_knife:{atk:10},lead_rose:{atk:10},lead_cloak:{hp:80,dodge:15},lead_ring:{crit:15,cdmg:15},med_robe:{hp:60}};var b={hp:0,atk:0,crit:0,dodge:0,heal:0,cdmg:0};['weapon','armor','accessory'].forEach(function(sl){var id=h.equipment&&h.equipment[sl];if(id&&A[id]){var st=A[id];for(var k in st)b[k]=(b[k]||0)+st[k];}});var SET=['lead_pistol','lead_knife','lead_cloak'],sc=0;SET.forEach(function(p){['weapon','armor','accessory'].forEach(function(sl){if(h.equipment[sl]===p)sc++;});});if(sc>=2)b.atk+=10;if(sc>=3)b.hp+=100;return b;}catch(e){return{hp:0,atk:0,crit:0,dodge:0,heal:0,cdmg:0};}}
window.__GXE=bf;
var RP='var eb=(window.__GXE?window.__GXE(h.n):null)||{hp:0,atk:0,crit:0,dodge:0,heal:0,cdmg:0};window.__GX_POISON=window.__GX_POISON||{};window.__GX_POISON[h.n]=((h.equipment&&h.equipment.weapon&&h.equipment.weapon.indexOf("lead_")===0)?0.20:0)+((h.equipment&&h.equipment.accessory==="lead_ring")?0.10:0);return{hp:Math.round(h.hp*m)+(l-1)*30+eb.hp,atk:Math.round(h.atk*m*10)/10+(l-1)*4+eb.atk,cr:h.cr+(l-1)*1+eb.crit,cd:h.cd+(l-1)*2+(eb.cdmg||0),ac:Math.max(5,h.ac-eb.dodge),dd:h.dd};';
var AR=/return\{hp:Math\.round\(h\.hp\*m\)\+\(l-1\)\*30,atk:Math\.round\(h\.atk\*m\*10\)\/10\+\(l-1\)\*4,cr:h\.cr\+\(l-1\)\*1,cd:h\.cd\+\(l-1\)\*2,ac:h\.ac,dd:h\.dd\};/;
var TR=/if\(tzH&&hh\.indexOf\(tzH\)===-1\)hh=\[tzH\];/;
var S1='https://cdn.jsdelivr.net/gh/ElaerinK/Elaerin-Kosetsu2@main/grey-empire-games.js',S2='https://cdn.statically.io/gh/ElaerinK/Elaerin-Kosetsu2/main/grey-empire-games.js';
function inj(t){if(window.__GRE_EMPIRE_LOADED)return;try{var s=document.createElement('script');s.textContent=t;(document.head||document.body).appendChild(s);}catch(e){}}
function get(u,cb){try{fetch(u).then(function(r){if(!r.ok)throw 0;return r.text();}).then(function(t){if(AR.test(t))t=t.replace(AR,RP);if(TR.test(t))t=t.replace(TR,'if(tzH)hh=[tzH];');inj(t);cb(true);}).catch(function(){cb(false);});}catch(e){cb(false);}}
function load(){get(S1,function(ok){if(ok)return;get(S2,function(ok2){if(ok2)return;try{var s=document.createElement('script');s.src=S1;s.async=true;document.body.appendChild(s);}catch(e){}});});}
document.readyState==='complete'?setTimeout(load,1200):addEventListener('load',function(){setTimeout(load,1200);});
setTimeout(function(){if(!window.__GRE_EMPIRE_LOADED)load();},9000);})();

/* ===== РЕЕСТР МЕДИА (общий) ===== */
window.__gxMedia=new Set();var _oP=HTMLMediaElement.prototype.play;HTMLMediaElement.prototype.play=function(){try{window.__gxMedia.add(this);}catch(e){}var r;try{r=_oP.apply(this,arguments);}catch(e){r=Promise.reject(e);}if(r&&r.catch)r.catch(function(){});return r;};['pause','ended','emptied','error'].forEach(function(ev){var o=HTMLMediaElement.prototype[ev];if(typeof o==='function')HTMLMediaElement.prototype[ev]=function(){try{window.__gxMedia.delete(this);}catch(e){}try{return o.apply(this,arguments);}catch(e2){}};});

/* ===== ИВЕНТ APOFIS ===== */
(function(){if(window.__AP)return;window.__AP=true;var B64='https://verstka-sites.s3.cloud.ru/assets/2952/',ET='https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/Arma%20Event.mp3',eA=null,wasOn=false;window.__gxEventActive=false;
function eOn(){window.__gxEventActive=true;if(!eA){try{eA=new Audio(ET);eA.loop=true;eA.volume=.5;}catch(e){return;}}eA.currentTime=0;eA.play().catch(function(){});}
function eOff(){if(eA&&!eA.paused){try{eA.pause();eA.currentTime=0;}catch(e){}}}
function boot(){var OV=document.getElementById('apofis-overlay');if(!OV)return;
setInterval(function(){try{var S=document.getElementById('apofis-assault');var sv=S&&getComputedStyle(S).display!=='none'&&S.offsetWidth>0;var cs=getComputedStyle(OV);var v=cs.display!=='none'&&OV.offsetWidth>0;if(v||sv){if(!wasOn){wasOn=true;eOn();}}else if(wasOn){wasOn=false;eOff();}}catch(e){}},600);
var show=function(){try{if(window.__gxEventCooldown&&Date.now()<window.__gxEventCooldown)return;var S=document.getElementById('apofis-assault');if(S&&S.style.display==='block')return;if(OV.style.display!=='flex')OV.style.display='flex';}catch(e){}};
setTimeout(show,45e3);setInterval(show,12e5);
document.addEventListener('click',function(e){if(e.target&&e.target.closest&&e.target.closest('#apofis-accept')){try{OV.style.display='none';}catch(e2){}startA();}});
function startA(){var a=document.getElementById('apofis-assault');if(!a)return;a.style.display='block';var n=0,iv=setInterval(function(){if(window.__gxAssaultRun){try{window.__gxAssaultRun();}catch(e){}clearInterval(iv);}if(++n>20)clearInterval(iv);},400);}}
function initA(){var S=document.getElementById('apofis-assault');if(!S)return;var aP=document.getElementById('ap-phase'),aE=document.getElementById('ap-enemies'),aT=document.getElementById('ap-party'),aA=document.getElementById('ap-actions'),aL=document.getElementById('ap-log');if(!aP||!aE||!aT||!aA||!aL)return;
var EN=[{n:'Штурмовик APOFIS',hp:95,atk:16},{n:'Тяжёлый Юнит',hp:130,atk:14},{n:'Элитный Каратель',hp:110,atk:19},{n:'Кибер-Палач',hp:100,atk:17}];
var HR=[{n:'N-04',col:'#dd4e60',hp:140,atk:16,img:'☠',p:B64+'upload_2855eb8ffe87460dbdf8a9ca45c11619.webp'},{n:'Alisa',col:'#9fd18a',hp:115,atk:11,img:'✦',p:B64+'upload_6f039d5415e34c3eaeaa619ea0eab764.webp'},{n:'Crysta',col:'#7fb8d8',hp:105,atk:15,img:'◎',p:B64+'upload_eefa4dbd38fc48079c75b1c91712b0c3.webp'},{n:'Sky',col:'#c9b8e8',hp:95,atk:14,img:'🕶',p:B64+'upload_2a74b6dd02504bcbb51a86b587c95a0a.webp'}];
var G=null,bs=0;function rn(a,b){return Math.random()*(b-a+1)+a|0;}
function ll(m,c){try{var d=document.createElement('div');d.textContent=m;if(c)d.style.color=c;aL.appendChild(d);aL.scrollTop=aL.scrollHeight;}catch(e){}}
function al(){return G.en.filter(function(e){return e.al;});}
function fin(w){if(!G||G.over)return;G.over=true;window.__gxEventCooldown=Date.now()+12e5;eOff();try{S.style.display='none';}catch(e){}var ov=document.createElement('div');ov.style.cssText='position:fixed;inset:0;z-index:99998;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.9);padding:10px';ov.innerHTML='<div style="text-align:center;max-width:92vw;padding:24px;background:#0a0a0a;border:1px solid '+(w?'#9fd18a':'#c41e3a')+';border-radius:14px"><div style="font-size:26px;font-weight:800;letter-spacing:3px;color:'+(w?'#9fd18a':'#c41e3a')+'">'+(w?'ПОБЕДА!':'ПОРАЖЕНИЕ!')+'</div><div style="margin-top:12px;font-size:15px;color:#bbb">'+(w?'Штурмовой отряд APOFIS уничтожен.':'База захвачена. Попробуйте снова.')+'</div><button style="margin-top:20px;padding:14px 32px;background:'+(w?'#9fd18a':'#c41e3a')+';color:#0a0a0a;border:none;border-radius:8px;font-weight:800;font-size:16px;cursor:pointer" id="gxc">Продолжить</button></div>';document.body.appendChild(ov);ov.querySelector('#gxc').addEventListener('click',function(){ov.remove();});}
function rd(){try{aP.textContent=G.over?'Бой окончен':(G.busy?'Враги атакуют…':'Ваш ход');aE.innerHTML='';G.en.forEach(function(e,i){if(!e.al)return;var c=document.createElement('div');c.className='ap-card'+(G.tg===i?' ap-selected':'');c.dataset.eid=i;var p=Math.max(0,Math.round(e.hp/e.mx*100));c.innerHTML='<div class="ap-card-img">☠</div><div class="ap-card-body"><div class="ap-card-name" style="color:#dd4e60">'+e.n+'</div><div class="ap-hp-bar"><div class="ap-hp-fill" style="width:'+p+'%;background:linear-gradient(90deg,#6e1222,#dd4e60)"></div></div><div class="ap-hp-text">'+Math.max(0,e.hp)+'/'+e.mx+'</div></div>';aE.appendChild(c);});
aT.innerHTML='';G.party.forEach(function(h){var c=document.createElement('div');c.className='ap-card'+(G.sel===h.idx?' ap-selected':'')+(h.hp<=0?' ap-dead':'')+(h.act?' ap-acted':'');c.dataset.uid=h.idx;var p=Math.max(0,Math.round(h.hp/h.mx*100));c.innerHTML='<div class="ap-card-img" style="padding:0;background:#0a0a0a;position:relative"><img src="'+h.p+'"><span style="position:absolute;top:2px;right:2px;font-size:15px;background:rgba(0,0,0,.65);border-radius:4px;padding:2px 4px;color:'+h.col+'">'+h.img+'</span></div><div class="ap-card-body"><div class="ap-card-name" style="color:'+h.col+'">'+h.n+'</div><div class="ap-hp-bar"><div class="ap-hp-fill" style="width:'+p+'%;background:'+h.col+'"></div></div><div class="ap-hp-text">'+Math.max(0,h.hp)+'/'+h.mx+'</div></div>';aT.appendChild(c);});
var h=G.sel!==null?G.party[G.sel]:null;aA.innerHTML=(!h||h.hp<=0||h.act||G.over)?'<div class="text-[13px] text-white/40">Выберите героя</div>':'<button class="ap-btn-act" data-act="attack" style="border-color:'+h.col+'">⚔ Атака<small>обычный удар</small></button><button class="ap-btn-act" data-act="strong" style="border-color:'+h.col+'">💥 Сильный удар<small>больше урона</small></button>';}catch(e){}}
function fl(c,t,col){try{var f=document.createElement('div');f.className='ap-dmg-float';f.style.color=col;f.textContent=t;c.appendChild(f);setTimeout(function(){f.remove();},850);}catch(e){}}
function aa(){if(!al().length){rd();return setTimeout(function(){fin(true);},600);}if(G.party.every(function(h){return h.hp<=0;})){rd();return setTimeout(function(){fin(false);},600);}if(!G.party.some(function(p){return p.hp>0&&!p.act;})){G.busy=true;bs=Date.now();rd();return setTimeout(eT,800);}rd();}
function eT(){if(!G||G.over)return;try{al().forEach(function(e){var hh=G.party.filter(function(h){return h.hp>0;});if(!hh.length)return;var t=hh[rn(0,hh.length-1)],dm=rn(e.atk-2,e.atk+3);t.hp-=dm;try{var c=aT.querySelector('[data-uid="'+t.idx+'"]');if(c)fl(c,'−'+dm,'#dd4e60');}catch(e2){}ll(e.n+' бьёт '+t.n+': −'+dm,'#dd4e60');if(t.hp<=0){t.hp=0;ll('✖ '+t.n+' пал!','#c41e3a');}});G.party.forEach(function(p){if(p.hp>0)p.act=false;});G.busy=false;bs=0;if(G.party.every(function(h){return h.hp<=0;})){rd();return setTimeout(function(){fin(false);},600);}rd();}catch(e){G.busy=false;rd();}}
aT.addEventListener('click',function(e){if(!G||G.over||G.busy)return;var c=e.target.closest('[data-uid]');if(!c)return;var h=G.party[+c.dataset.uid];if(h.hp<=0||h.act)return;G.sel=h.idx;G.tg=null;rd();});
aE.addEventListener('click',function(e){if(!G||G.over||G.busy)return;var c=e.target.closest('[data-eid]');if(!c)return;G.tg=+c.dataset.eid;rd();});
aA.addEventListener('click',function(e){if(!G||G.over||G.busy||G.sel===null)return;var b=e.target.closest('[data-act]');if(!b)return;bs=Date.now();var h=G.party[G.sel],t=G.tg!==null?G.en[G.tg]:null,alv=al();if(!t||!t.al)t=alv[0];if(!t)return;try{var dm=b.dataset.act==='strong'?rn(h.atk+6,h.atk+14):rn(h.atk-1,h.atk+5);t.hp-=dm;ll(h.n+' атакует '+t.n+': −'+dm,h.col);if(t.hp<=0){t.al=false;ll(t.n+' уничтожен!','#e8c060');}}catch(e2){}h.act=true;G.sel=null;G.tg=null;aa();});
window.__gxAssaultRun=function(){G={party:HR.map(function(h,i){return{n:h.n,col:h.col,atk:h.atk,img:h.img,p:h.p,idx:i,hp:h.hp,mx:h.hp,act:false};}),en:[],sel:null,tg:null,busy:false,over:false};var c=rn(3,4);for(var i=0;i<c;i++){var t=EN[rn(0,EN.length-1)],hp=t.hp+rn(10,30);G.en.push({n:t.n,hp:hp,mx:hp,atk:t.atk+rn(0,4),al:true});}aL.innerHTML='';ll('Штурмовой отряд APOFIS ворвался на базу!','#c41e3a');eOn();rd();};
setInterval(function(){try{if(!G||G.over||!G.busy){bs=0;return;}if(!(getComputedStyle(S).display!=='none'&&S.offsetWidth>0)){bs=0;return;}if(!bs){bs=Date.now();return;}if(Date.now()-bs>6000){G.busy=false;bs=0;G.party.forEach(function(p){if(p.hp>0)p.act=false;});rd();ll('⟳ Бой восстановлен.','#e8c060');}}catch(e){}},1500);}
function bt(){try{boot();}catch(e){}try{initA();}catch(e){}}
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',bt):bt();})();

/* ===== ИМЯ РЕКОРДА ===== */
(function(){if(window.__GX_NAME)return;window.__GX_NAME=true;var REAL=window.fetch;
function show(w,cb){var o=document.getElementById('gxNameModal');if(o)o.remove();var sv='Игрок';try{sv=localStorage.getItem('gx_player_name')||'Игрок';}catch(e){}var ov=document.createElement('div');ov.id='gxNameModal';ov.style.cssText='position:fixed;inset:0;z-index:100080;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.92);padding:14px;font-family:Segoe UI,sans-serif';ov.innerHTML='<div style="background:#141414;border:1px solid #e8c060;border-radius:14px;padding:24px;max-width:92vw;width:380px;text-align:center;color:#eee"><div style="font-size:16px;font-weight:800;letter-spacing:2px;color:#e8c060;margin-bottom:8px">РЕКОРД ЗАФИКСИРОВАН!</div><div style="font-size:14px;color:#bbb;margin-bottom:14px">Волна <b style="color:#fff">'+w+'</b> — дайте имя своему результату:</div><input id="gxi" maxlength="20" value="'+sv.replace(/"/g,'&quot;')+'" style="width:100%;box-sizing:border-box;padding:12px;background:#0a0a0a;border:1px solid #555;border-radius:8px;color:#fff;font-size:15px;text-align:center;margin-bottom:14px"><button id="gxo" type="button" style="width:100%;padding:12px;background:#e8c060;color:#1a1206;border:none;border-radius:8px;font-weight:800;font-size:15px;cursor:pointer">СОХРАНИТЬ В РЕЙТИНГ</button></div>';document.body.appendChild(ov);var i=ov.querySelector('#gxi'),ok=ov.querySelector('#gxo');setTimeout(function(){try{i.focus();i.select();}catch(e){}},80);
function done(){var n=(i.value||'Игрок').trim()||'Игрок';try{localStorage.setItem('gx_player_name',n);}catch(e){}ov.remove();cb(n);}
ok.addEventListener('click',done);i.addEventListener('keydown',function(e){if(e.key==='Enter')done();});}
window.fetch=function(u,o){try{var u2=(typeof u==='string')?u:(u&&u.url)||'';if(u2.indexOf('api.jsonbin.io')!==-1&&u2.indexOf('6ab4252dac6210605aee29c9')!==-1&&o&&String(o.method||'').toUpperCase()==='PUT'&&o.body){var b=null;try{b=JSON.parse(o.body);}catch(e){}if(b&&b.waves&&Array.isArray(b.waves)&&!b.doors){var wF=0;b.waves.forEach(function(w){if(w&&w.waves>wF)wF=w.waves;});if(wF>0)return new Promise(function(res){show(wF,function(nm){b.waves.forEach(function(w){if(w&&w.waves===wF)w.name=nm;});o.body=JSON.stringify(b);res(REAL(u,o));});});}}}catch(e){}return REAL.apply(this,arguments);};})();

/* ===== ФИКС СКРОЛЛА ПОСЛЕ ЗАСТАВКИ САДЫ ===== */
(function(){if(window.__GX_AF)return;window.__GX_AF=true;function go(){try{var st=document.createElement('style');st.textContent='#sada-intro{cursor:pointer}';document.head.appendChild(st);
['pointerdown','click','touchstart'].forEach(function(ev){document.addEventListener(ev,function(e){if(document.getElementById('sada-intro')&&!(e.target.closest&&e.target.closest('#gx-inv-btn,#gx-hammer-btn,#gx-ach-btn,#gx-stat-btn'))){try{document.documentElement.style.overflow='';document.body.style.overflow='';}catch(e1){}}},true);});
setInterval(function(){try{if(!document.getElementById('sada-intro')&&!document.querySelector('#gxInv.open')&&!document.querySelector('#gxHamm.open')){if(document.documentElement.style.overflow==='hidden')document.documentElement.style.overflow='';if(document.body.style.overflow==='hidden')document.body.style.overflow='';}}catch(e2){}},2500);}catch(e){}}
function rdy(f){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',f):f();}
rdy(function(){setTimeout(go,300);});})();

/* ===== ВЕРХУШКА + моб.зеркало + иконки на карточках + сброс + скрытие «Новая битва» ===== */
(function(){if(window.__GX_TOPBAR2)return;window.__GX_TOPBAR2=true;
function rdy(f){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',f):f();}
rdy(function(){
var st=document.createElement('style');st.textContent='#gx-topbar{position:fixed;top:0;left:0;right:0;display:flex;flex-direction:row;gap:8px;align-items:center;justify-content:flex-end;padding:5px 10px;z-index:9000;background:rgba(2,6,23,.92);border-bottom:1px solid rgba(196,30,58,.3);pointer-events:none}#gx-topbar button{pointer-events:auto;position:static!important;width:26px!important;height:26px!important;font-size:13px!important;min-width:26px!important;min-height:26px!important;box-shadow:0 0 6px rgba(0,0,0,.5)!important;border-width:1px!important;margin:0!important;bottom:auto!important;right:auto!important;transition:transform .15s}#gx-topbar button:hover{transform:scale(1.15)}@media(max-width:640px){#gx-topbar{padding:4px 8px;gap:6px}#gx-topbar button{width:24px!important;height:24px!important;font-size:12px!important}#vrpg3-actions{display:grid!important;grid-template-columns:1fr 1fr!important;gap:6px!important;width:100%!important;padding:6px!important}.gx3-btn-act{width:100%!important;min-height:48px!important;font-size:13px!important}#vrpg3-log,#ap-log{max-height:28vh!important;overflow-y:auto!important;font-size:12px!important}body{overflow-x:hidden!important}#gxDropRow{flex-direction:column!important;gap:8px!important;top:10px!important;max-height:70vh;overflow-y:auto}#gxInv .gxi-wrap,#gx-ach-ov .axw,#gx-stat-ov .sw{width:94vw!important}#gxInvModal .gxi-items{grid-template-columns:1fr!important}}.gxe-items{position:absolute;bottom:2px;left:50%;transform:translateX(-50%);display:flex;gap:3px;z-index:14;pointer-events:none}.gxe-item-ico{width:20px;height:20px;object-fit:contain;border-radius:4px;background:rgba(0,0,0,.78);border:1px solid rgba(196,30,58,.55)}@media(max-width:640px){.gxe-item-ico{width:15px;height:15px}}';document.head.appendChild(st);
var IDS=['gx-inv-btn','gx-hammer-btn','gx-ach-btn','gx-stat-btn'];
var moved=false;
var iv=setInterval(function(){if(moved)return;var all=IDS.every(function(id){return document.getElementById(id);});if(!all)return;var bar=document.getElementById('gx-topbar');if(!bar){bar=document.createElement('div');bar.id='gx-topbar';document.body.appendChild(bar);}IDS.forEach(function(id){var b=document.getElementById(id);if(b&&b.parentNode!==bar)bar.appendChild(b);});moved=true;},600);
setTimeout(function(){clearInterval(iv);},40000);
setInterval(function(){if(!moved)return;var bar=document.getElementById('gx-topbar');if(!bar)return;IDS.forEach(function(id){var b=document.getElementById(id);if(b&&b.parentNode!==bar)bar.appendChild(b);});},5000);
var done=false;
function syncMobile(){if(done)return;var main=document.getElementById('vrpg3-actions'),mob=document.getElementById('vrpg3-actions-m');if(main&&mob){done=true;var lock=false;
function sync(){if(lock)return;lock=true;try{mob.innerHTML=main.innerHTML;[].forEach.call(mob.querySelectorAll('.gx3-btn-act'),function(b){b.dataset.actM=b.dataset.act;});}catch(e){}lock=false;}
new MutationObserver(sync).observe(main,{childList:true,subtree:true,characterData:true});
mob.addEventListener('click',function(e){var b=e.target.closest('[data-act]');if(!b||b.disabled)return;var twin=main.querySelector('[data-act="'+(b.dataset.actM||b.dataset.act)+'"]');if(twin&&!twin.disabled)twin.click();});
sync();setTimeout(sync,2000);setTimeout(sync,8000);}}
syncMobile();setInterval(syncMobile,1500);
var NAMES=['N-04','Alisa','Crysta','Sky'];
var IMGS={pistol_9mm:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_102e93bfa0414753a68183e0812c566c.webp',portupeya:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_4ae3305e35514804a75ca5457854de80.webp',necklace:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_fab48bbd8b984aa690e749170753f9d4.webp',shotgun:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_46257ef678054873a7ada59e860b6621.webp',jacket:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_3a58a93d0ec744b2bc81382e601a6aa5.webp',cross_necklace:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_f4077e5badc54dfa996edc5bbd2d43a9.webp',uzi:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_e28a6dcad5124066997672501c339598.webp',lead_pistol:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_a4d3689463f84092b18a7de9b48c5720.webp',lead_knife:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_a4d3689463f84092b18a7de9b48c5720.webp',lead_rose:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_a4d3689463f84092b18a7de9b48c5720.webp',lead_cloak:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_2f3f6150585a48f0a2b3affee2196bc0.webp',lead_ring:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_bedec1015d614468aff9aa1a556ea0db.webp',med_robe:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_339e1ae3f95b48aa8c69c8ac76040df3.webp',galleon_axe:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_6b7c937fdf3f4377933d1fd1fc97b25a.webp',galleon_garb:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_b88067c2e3b84b8b8145ce85a1a3214f.webp',galleon_ring:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_f690fa7a53ea44e5ab6d29d2084827c0.webp'};
function heroEq(name){try{var s=JSON.parse(localStorage.getItem('gx_inventory_v1')||'null');if(!s||!s.heroes)return null;var i=NAMES.indexOf(name);if(i<0)return null;var h=null;s.heroes.forEach(function(x){if(x.id===i)h=x;});return h?h.equipment:null;}catch(e){return null;}}
setInterval(function(){if(document.hidden)return;
try{
[['vrpg3-party','.gx3-card','.gx3-card-name'],['ap-party','.ap-card','.ap-card-name']].forEach(function(cfg){
var root=document.getElementById(cfg[0]);if(!root)return;
[].forEach.call(root.querySelectorAll(cfg[1]),function(card){
var ne=card.querySelector(cfg[2]);if(!ne)return;
var eq=heroEq(ne.textContent.trim());
var old=card.querySelector('.gxe-items');
var list=[];if(eq)['weapon','armor','accessory'].forEach(function(sl){var id=eq[sl];if(id&&IMGS[id])list.push(IMGS[id]);});
if(!list.length){if(old)old.remove();return;}
if(!old){var w=document.createElement('div');w.className='gxe-items';card.appendChild(w);}
var w2=card.querySelector('.gxe-items'),sig=list.join('|');
if(w2.dataset.sig!==sig){w2.dataset.sig=sig;w2.innerHTML='';list.forEach(function(src){var im=document.createElement('img');im.src=src;im.className='gxe-item-ico';w2.appendChild(im);});}
});});}catch(e){}
},2500);
function wipeAll(){try{
localStorage.setItem('gx_inventory_v1',JSON.stringify({heroes:NAMES.map(function(_,i){return{id:i,equipment:{weapon:null,armor:null,accessory:null}};}),inv:[]}));
if(window.__GX_INV_SV){window.__GX_INV_SV.inv=[];window.__GX_INV_SV.heroes.forEach(function(h){h.equipment={weapon:null,armor:null,accessory:null};});}
}catch(e){}}
var MK='gx_max_wave';
setInterval(function(){try{
var raw=localStorage.getItem('grey_empire_rpg_v4');if(!raw)return;
var s=JSON.parse(raw);var w=s.wave||s.waves||1;
var m=parseInt(localStorage.getItem(MK)||'1',10)||1;
if(w>m){localStorage.setItem(MK,String(w));return;}
if(w<=1&&m>1){wipeAll();localStorage.setItem(MK,'1');}
}catch(e){}},2000);
try{if(!localStorage.getItem('gx_inv_initialized')){localStorage.setItem('gx_inventory_v1',JSON.stringify({heroes:NAMES.map(function(_,i){return{id:i,equipment:{weapon:null,armor:null,accessory:null}};}),inv:[]}));localStorage.setItem('gx_inv_initialized','1');}}catch(e){}
function hb(){try{[].forEach.call(document.querySelectorAll('button,a'),function(el){var t=(el.textContent||'').trim();if(t==='Новая битва'||t==='Новая битва!')el.style.display='none';});}catch(e){}}
new MutationObserver(hb).observe(document.body,{childList:true,subtree:true});setInterval(hb,2000);hb();
});})();

/* ===== LEON: приветствие, реплики, видео ульты ===== */
(function(){if(window.__GX_LEON)return;window.__GX_LEON=true;
var HELLO='https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/%D0%9B%D0%B5%D0%BE%D0%BD%20%D0%BD%D0%B0%20%D1%81%D0%B2%D1%8F%D0%B7%D0%B8%20(1)%20(mp3cut.net).mp3';
var ULTVID='https://verstka-sites.s3.cloud.ru/assets/2952/upload_ef2bda5353004ce3a20a8415dde32d32.mp4';
var FAM=['Ради семьи я пойду на всё. Абсолютно всё.','Семья — вот ради чего я всё ещё дышу.'];
var DOUBT=['Apofis… чем дольше я рядом, тем меньше верю его словам.','Может, бойцы Grey Empire и вправду смогут… я почти поверил.'];
var lastHello=0;
function playHello(){var now=Date.now();if(now-lastHello<5000)return;lastHello=now;try{var a=new Audio(HELLO);a.volume=.8;a.play().catch(function(){});}catch(e){}}
function addLine(lg){var d=document.createElement('div');var isFam=Math.random()<.5;d.textContent='Leon: «'+((isFam?FAM:DOUBT)[Math.random()*2|0])+'»';d.style.cssText='color:#d8a24a;font-size:12px;font-style:italic;opacity:.9';lg.appendChild(d);lg.scrollTop=lg.scrollHeight;}
function hookLog(id){var lg=document.getElementById(id);if(!lg||lg.dataset.ln)return;lg.dataset.ln='1';
new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType!==1)return;var t=n.textContent||'';
if(/появляется\s+Leon|Leon\s+на\s+связи/i.test(t)){playHello();setTimeout(function(){addLine(lg);},900);return;}
if(/(^|\s)Leon\s*(→|атакует|навык|использует)/.test(t)&&Math.random()<.45)setTimeout(function(){addLine(lg);},150);
});});}).observe(lg,{childList:true});}
function ultVideo(){var o=document.createElement('div');o.style.cssText='position:fixed;inset:0;z-index:99997;display:flex;align-items:center;justify-content:center;background:rgba(4,6,2,.94)';var v=document.createElement('video');v.src=ULTVID;v.muted=false;v.volume=.85;v.playsInline=true;v.setAttribute('playsinline','');o.appendChild(v);document.body.appendChild(o);var done=false;function end(){if(done)return;done=true;try{v.pause();}catch(e){}o.remove();}v.addEventListener('ended',end);v.addEventListener('error',end);setTimeout(end,15000);var p=v.play();if(p&&p.catch)p.catch(function(){v.muted=true;v.play().catch(end);});}
function watch(){['vrpg3-log','ap-log'].forEach(hookLog);
try{var lg=document.getElementById('vrpg3-log');if(lg&&!lg.dataset.lv){lg.dataset.lv='1';
new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType===1&&/АБСОЛЮТНАЯ\s*ОБОРОНА/i.test(n.textContent||''))ultVideo();});});}).observe(lg,{childList:true});}}catch(e){}}
function rdy(f){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',f):f();}
rdy(function(){watch();setInterval(watch,1000);});
})();

/* ===== ПЛАВАЮЩИЕ ЦИФРЫ УРОНА + яд + дедуп дублей ===== */
(function(){if(window.__GX_FLOAT)return;window.__GX_FLOAT=true;
function fC(id,n){try{var l=document.getElementById(id);if(!l)return null;var cs=l.querySelectorAll('.gx3-card');for(var i=0;i<cs.length;i++){var nm=cs[i].querySelector('.gx3-card-name,.ap-card-name');if(nm&&nm.textContent.trim()===n)return cs[i];}return null;}catch(e){return null;}}
function isE(n){return /MECHA-GALLEON|Агент Apofis|Юнит Осколок|Оперативник|Кибер-глашатай|Элитный Каратель|Apofis — Ядро|Штурмовик APOFIS|Тяжёлый Юнит|Кибер-Палач/.test(n);}
function parse(t,ap){try{var pt=ap?'ap-party':'vrpg3-party',en=ap?'ap-enemies':'vrpg3-enemies';var ma=t.match(/(?:→|бьёт|навык →)\s+(.+?):\s*−(\d+)/);if(ma){var v=ma[1].replace(/\s*\(щит\)/,'').trim();var c=fC(isE(v)?en:pt,v)||fC(en,v);if(c){setTimeout(function(){var f=document.createElement('div');f.className='gx3-dmg-float'+(/КРИТ/.test(t)&&!/КРИТ-исцеление/.test(t)?' gx3-crit':'');f.textContent='−'+ma[2];c.appendChild(f);setTimeout(function(){f.remove();},1300);},60);
var at=t.match(/^(N-04|Alisa|Crysta|Sky|Leon)\s*(?:→|атакует|навык)/);var P=window.__GX_POISON||{};if(at&&P[at[1]]>0&&Math.random()<P[at[1]])setTimeout(function(){var f=document.createElement('div');f.className='gx3-dmg-float';f.style.color='#4dff88';f.textContent='☠−'+Math.round(ma[2]/2)+' (яд)';c.appendChild(f);setTimeout(function(){f.remove();},1300);},700);}}}catch(e){}}
function hook(id){var lg=document.getElementById(id);if(!lg||lg.dataset.hk)return;lg.dataset.hk='1';var ap=id==='ap-log';new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType!==1)return;var t=n.textContent||'';if(t)parse(t,ap);});});}).observe(lg,{childList:true});return true;}
var done={};['vrpg3-log','ap-log'].forEach(function(id){var iv=setInterval(function(){if(done[id])return clearInterval(iv);if(document.getElementById(id))done[id]=hook(id);},500);setTimeout(function(){clearInterval(iv);},2e4);});
function watch(id){var root=document.getElementById(id);if(!root||root.dataset.dd)return;root.dataset.dd='1';
var recent=new Map();
new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){
if(n.nodeType!==1||!n.classList||!n.classList.contains('gx3-dmg-float'))return;
var p=n.parentElement;if(!p)return;
var now=Date.now();
recent.forEach(function(t,k){if(now-t>1000)recent.delete(k);});
if(recent.has(p)){n.remove();}else{recent.set(p,now);}
});});}).observe(root,{childList:true,subtree:true});}
function rdy(f){document.readyState==='loading'?document.addEventListener('DOMContentLoaded',f):f();}
rdy(function(){
['vrpg3-enemies','vrpg3-party','ap-enemies','ap-party'].forEach(function(id){
var iv2=setInterval(function(){watch(id);},500);
setTimeout(function(){clearInterval(iv2);},20000);
});
});
})();

/* ===== БИОГРАФИИ: N-04/Alisa/Crysta/Sky ===== */
(function(){if(window.__GX_BIO)return;
window.__GX_BIO=true;
function rdy(f){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',f);else f();}
rdy(function(){
var BIOS={
'N-04':{art:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_5ddb1d1a59c74465adcc4aa442a953ec.webp',title:'N-04 · ELAERIN',sub:'Эксперимент · Клон · Побег',
text:'<p>Точная копия уже существующего человека — <b>Elaerin Kosetsu</b>. Единственная разница: N-04 — клон.</p><p>Всё, что он помнит, — события до двадцати лет оригинала. Дальше — только разрыв памяти и побег с космического корабля-<b>Apofis</b>, который он совершил вместе с сестрой — <b>Sada</b>.</p><p>На <b>Венере-2</b> попытка найти сестру провалилась. N-04 впал в кому на два месяца — и там, у постели без сознания, его нашла старая подруга <b>Криста</b>.</p><p>С тех пор он живёт с чужими воспоминаниями, треснувшей маской и одним вопросом: <i>где Sada?</i></p>'},
'Alisa':{art:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_d061a49047f14bac81efb13b476529c1.webp',title:'ALISA',sub:'Передовой учёный · Группа Тома',
text:'<p>Передовой учёный корпорации <b>Apofis</b>. Относится к исследовательской группе <b>Тома</b> — по изучению ДНК и использованию его в клонировании.</p><p>Мало рассказывает о себе — предпочитает работать, а не трепать языком. Строга к себе, но когда смущается — заикается, порой доходя до слёз.</p><p>В целом о ней все работники отзываются положительно — хоть она ни с кем толком и не разговаривает.</p>'},
'Crysta':{art:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_4e380790e0154550afce407fc30a2408.webp',title:'CRYSTA',sub:'Лидер сопротивления · Grey Empire',
text:'<p>Всё, что известно о ней на данный момент: она — лидер сопротивления <b>Grey Empire</b>.</p><p>В данный момент находится при исполнении миссии по захвату и сопровождению на основную базу объекта под кодовым именем <b>N-04</b>.</p><p>До его пробуждения работала под прикрытием учёного по обмену на борту КС <b>APOFIS</b>. Там познакомилась с учёной по имени <b>Alisa</b> — за короткий промежуток времени быстро сдружилась, и теперь они работают в паре над изучением клонирования.</p><p>Но при нападении неизвестного наёмника на КС Apofis была вынуждена принять меры по принудительному пробуждению <b>N-04</b> — на пару с Alisa.</p>'},
'Sky':{art:'https://verstka-sites.s3.cloud.ru/assets/2952/upload_c2438b9088e449559fac76daa2cc7800.webp',title:'SKY',sub:'Наёмный убийца · Семья Vallentain',
text:'<p>Наёмный убийца из известной семьи киллеров — <b>Vallentain</b>. Был усыновлён и обучен ремеслу наёмных убийц.</p><p>Движим целью отомстить…</p><p>В последний раз был замечен при посадке на челнок, отправлявшийся на КС <b>APOFIS</b>. В нынешнее время его местонахождение не установлено.</p>'}};
var ov=document.createElement('div');ov.id='gx-bio-n04';
ov.innerHTML='<div class="bio-box"><button class="bio-close" type="button" aria-label="Закрыть">✕</button><div class="bio-body"></div></div>';
document.body.appendChild(ov);
function open(key){
var b=BIOS[key];if(!b)return;
ov.querySelector('.bio-body').innerHTML='<img class="bio-art" src="'+b.art+'" alt="'+b.title+', полный арт"><div class="bio-title">'+b.title+'</div><div class="bio-sub">'+b.sub+'</div><div class="bio-text">'+b.text+'</div>';
ov.classList.add('open');
}
function close(){ov.classList.remove('open');}
window.gxOpenBio=open;
ov.querySelector('.bio-close').addEventListener('click',function(e){e.stopPropagation();close();});
ov.addEventListener('click',function(e){if(e.target===ov)close();});
document.addEventListener('click',function(e){
if(!e.target||!e.target.closest)return;
var card=e.target.closest('.gx-char-card');
if(!card)return;
var h=card.querySelector('h3');
if(!h)return;
var nm=h.textContent.trim();
if(nm.indexOf('N-04')===0){e.preventDefault();e.stopPropagation();open('N-04');}
else if(nm.indexOf('Alisa')===0){e.preventDefault();e.stopPropagation();open('Alisa');}
else if(nm.indexOf('Crysta')===0){e.preventDefault();e.stopPropagation();open('Crysta');}
else if(nm.indexOf('Sky')===0){e.preventDefault();e.stopPropagation();open('Sky');}
},true);
});
})();

/* ===== АНИМАЦИЯ ДОСТИЖЕНИЯ ===== */
(function(){
if(window.__GX_ACH_FX)return;
window.__GX_ACH_FX=true;
function ready(f){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',f);else f();}
ready(function(){
var o=document.createElement('div');o.id='gx-ach-fx';
document.body.appendChild(o);
window.showAch=function(a){
try{
var nm=a&&a.n?a.n:'Достижение!',dd=a&&a.d?a.d:'';
o.innerHTML='<div class="shield"><div class="plate"></div><div class="rim"></div><div class="star">🏆</div></div>'
+'<div class="diamond"><div class="txt"><div class="t1">'+nm+'</div>'+(dd?'<div class="t2">'+dd+'</div>':'')+'</div></div>';
for(var i=0;i<6;i++){
var m=document.createElement('div');m.className='missile';
var side=i%2?1:-1;
m.style.left=(50+side*(11+Math.random()*3))+'%';
m.style.top=(46+Math.random()*16)+'%';
m.style.animationDelay=(0.15+Math.random()*0.5)+'s';
o.appendChild(m);
}
o.classList.add('on');
setTimeout(function(){o.classList.remove('on');o.innerHTML='';},2700);
}catch(e){}
};
});
})();

/* ===== HEIT: дрон + матрица ===== */
(function(){
if(window.__GX_REY_FX)return;
window.__GX_REY_FX=true;
var HVO='https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/%D0%A5%D0%B5%D0%B9%D1%82.mp3';
function ready(f){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',f);else f();}
ready(function(){
var CHARS='01アイウエオカキクケコサシスセソタチツテトナニヌネノ01';
var _heitAu=null,_heitLast=0;
function heitVoice(){
var now=Date.now();
if(now-_heitLast<15000)return;
_heitLast=now;
try{
if(_heitAu){try{_heitAu.pause();}catch(e){}_heitAu=null;}
var a=new Audio(HVO);a.volume=0.6;a.preload='auto';_heitAu=a;
var n=0;
function go(){n++;a.currentTime=0;var p=a.play();if(p&&p.catch)p.catch(function(){if(n<3)document.addEventListener('pointerdown',go,{once:true});});}
go();
}catch(e){}
}
function heitAppear(){
heitVoice();
var o=document.getElementById('rey-fx');
if(!o){o=document.createElement('div');o.id='rey-fx';
o.innerHTML='<div class="drone"><div class="dear l"></div><div class="dear r"></div><div class="dbody"></div><div class="deye"></div><div class="dgun l"></div><div class="dgun r"></div></div>';
document.body.appendChild(o);}
[].forEach.call(o.querySelectorAll('.mcol'),function(c){c.remove();});
for(var i=0;i<16;i++){
var col=document.createElement('div');
col.className='mcol';
col.style.left=(Math.random()*100)+'%';
col.style.animationDuration=(1.2+Math.random()*1.4)+'s';
var txt='';
for(var j=0;j<40;j++)txt+=CHARS[Math.floor(Math.random()*CHARS.length)]+'\n';
col.textContent=txt;
o.appendChild(col);
}
o.classList.add('on');
setTimeout(function(){o.classList.remove('on');},3000);
}
var buffTurns=0,buffActive=false,buffT0=0;
function addFlames(){
var pt=document.getElementById('vrpg3-party');if(!pt)return;
[].forEach.call(pt.querySelectorAll('.gx3-card:not(.gx3-dead):not(.gx3-bell):not(.gx3-griffin):not(.gx3-rey)'),function(card){
if(card.querySelector('.gxf-reybuff'))return;
var f=document.createElement('div');f.className='gxf-reybuff';card.appendChild(f);
});
buffActive=true;buffT0=Date.now();
}
function removeFlames(){
buffActive=false;buffTurns=0;
[].forEach.call(document.querySelectorAll('.gxf-reybuff'),function(f){
f.classList.add('off');
setTimeout(function(){f.remove();},550);
});
}
function addDizzy(){
[].forEach.call(document.querySelectorAll('#vrpg3-enemies .gx3-card:not(.gx3-dead),#ap-enemies .ap-card:not(.ap-dead)'),function(card){
if(card.querySelector('.gxf-dizzy'))return;
var d=document.createElement('div');d.className='gxf-dizzy';d.textContent='💫';
card.appendChild(d);
});
}
function clearDizzy(){
[].forEach.call(document.querySelectorAll('.gxf-dizzy'),function(d){d.remove();});
}
try{
var lg=document.getElementById('vrpg3-log');
if(lg){
new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){
if(n.nodeType!==1)return;
var t=n.textContent||'';
if((t.indexOf('Хейт')!==-1||t.indexOf('Heit')!==-1||t.indexOf('Рей')!==-1)&&(t.indexOf('вступает')!==-1||t.indexOf('появляется')!==-1||t.indexOf('материализуется')!==-1)){setTimeout(heitAppear,200);return;}
if(t.indexOf('Поддержка')!==-1&&t.indexOf('Хейт')!==-1){setTimeout(function(){buffTurns=0;buffT0=Date.now();addFlames();},250);return;}
if(t.indexOf('Вирус в массы')!==-1){setTimeout(addDizzy,250);return;}
if(t.indexOf('Реквием')!==-1){setTimeout(clearDizzy,3000);}
if(buffActive){
var ea=/(→|бьёт)\s+.*:?\s*−\d+/.test(t)&&/MECHA-GALLEON|Агент Apofis|Юнит Осколок|Оперативник|Кибер-глашатай|Элитный Каратель|Apofis|Ракетный залп|Пулемёт/.test(t);
if(ea){buffTurns++;if(buffTurns>=2)removeFlames();}
}
});});}).observe(lg,{childList:true});
setInterval(function(){
if(!buffActive)return;
var pt=document.getElementById('vrpg3-party');
if(!pt)return;
[].forEach.call(pt.querySelectorAll('.gx3-card:not(.gx3-dead):not(.gx3-bell):not(.gx3-griffin):not(.gx3-rey)'),function(card){
if(!card.querySelector('.gxf-reybuff')){var f=document.createElement('div');f.className='gxf-reybuff';card.appendChild(f);}
});
},300);
setInterval(function(){try{if(buffActive&&Date.now()-buffT0>75000)removeFlames();}catch(e){}},1000);
}
}catch(e){}
});
})();

/* ===== УЛЬТА ХЕЙТ «РЕКВИЕМ»: видео ===== */
(function(){
if(window.__GX_HEIT_VID)return;
window.__GX_HEIT_VID=true;
var V='https://verstka-sites.s3.cloud.ru/assets/2952/upload_d016727043574075aa1338aa0c11837b.mp4';
var o=null,v=null,pl=false,lastPlay=0;
function build(){
o=document.createElement('div');o.id='heit-ult-overlay';
o.style.cssText='position:fixed;inset:0;z-index:99997;display:none;align-items:center;justify-content:center;background:rgba(2,8,20,.94)';
v=document.createElement('video');
v.src=V;v.muted=false;v.volume=0.8;v.playsInline=true;v.setAttribute('playsinline','');
v.preload='auto';v.style.cssText='max-width:100%;max-height:100%;object-fit:contain';
o.appendChild(v);document.body.appendChild(o);
v.addEventListener('ended',hide);v.addEventListener('error',hide);
}
function show(){
var now=Date.now();if(now-lastPlay<4000)return;lastPlay=now;
if(!o)build();
if(pl)return;
pl=true;o.style.display='flex';
v.currentTime=0;v.playbackRate=1;
var p=v.play();
if(p&&p.catch)p.catch(function(){v.muted=true;v.play().catch(function(){hide();});});
setTimeout(function(){if(pl)hide();},20000);
}
function hide(){
pl=false;if(o)o.style.display='none';
try{v.pause();}catch(e){}
}
window.showHeitUltVideo=show;
function ready(f){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',f);else f();}
ready(function(){
var iv=setInterval(function(){
var lg=document.getElementById('vrpg3-log');
if(!lg)return;clearInterval(iv);
new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){
if(n.nodeType===1&&(n.textContent||'').indexOf('РЕКВИЕМ')!==-1)show();
});});}).observe(lg,{childList:true});
},400);
setTimeout(function(){clearInterval(iv);},25000);
});
})();
