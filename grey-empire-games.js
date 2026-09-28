/* Хроники Grey Empire v16.4: фикс порчи HP при смерти карточки (гостевые индексы), Тень Sky бьёт+копит, Хейт без дубля приветствия */
(function(){
if(window.__GRE_EMPIRE_LOADED)return;
window.__GRE_EMPIRE_LOADED=true;

window.GX = window.GX || {};
var GX = window.GX;
GX.B64 = 'https://verstka-sites.s3.cloud.ru/assets/2952/';
GX.PR  = [
  GX.B64+'upload_2855eb8ffe87460dbdf8a9ca45c11619.webp',
  GX.B64+'upload_6f039d5415e34c3eaeaa619ea0eab764.webp',
  GX.B64+'upload_eefa4dbd38fc48079c75b1c91712b0c3.webp',
  GX.B64+'upload_2a74b6dd02504bcbb51a86b587c95a0a.webp'
];
GX.BA  = GX.B64+'upload_8947332c66874fecaa13cb0b948cf9ee.webp';
GX.GA  = GX.B64+'upload_7ac7c714935b45059cd05df5e1672314.webp';
GX.RA  = GX.B64+'upload_5935c399fbac4c67a79e02c1e4c88ef6.webp';
GX.BVO = 'https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/%D0%91%D1%8D%D0%BB%D1%8C%20(mp3cut.net).mp3';
GX.GVO = 'https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/%D0%93%D1%80%D0%B8%D1%84%D0%B8%D0%BD%20(mp3cut.net).mp3';
GX.GV  = GX.B64+'upload_3045498d06f44f7bb56d49f5ff147cb8.mp4';
GX.MA  = GX.B64+'upload_6946a52090cc45fd92424c134cf41a7f.webp';
GX.MT  = 'https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/Grey%20Empire%20%5BChronicles%5D%20-%20mecha-galeon%20v2.mp3';

var B64=GX.B64, PR=GX.PR, BA=GX.BA, GA=GX.GA, RA=GX.RA, BVO=GX.BVO, GVO=GX.GVO, GV=GX.GV, MA=GX.MA, MT=GX.MT;

var $=function(i){return document.getElementById(i);};
var wv=$('vrpg3-wave'),ph=$('vrpg3-phase'),lg=$('vrpg3-log'),en=$('vrpg3-enemies'),pt=$('vrpg3-party'),ac2=$('vrpg3-actions'),rs=$('vrpg3-result'),bt=$('vrpg3-bossTag');

if(wv){

(function(){if(document.getElementById('gr-css'))return;var s=document.createElement('style');s.id='gr-css';
s.textContent='@keyframes grX{0%{opacity:0;transform:scale(.5)}12%{opacity:1;transform:scale(1)}70%{opacity:1;transform:scale(1.12) rotate(6deg)}100%{opacity:0;transform:scale(1.7) rotate(18deg);filter:blur(8px)}}@keyframes grDust{0%{opacity:1;transform:translate(0,0) scale(1)}100%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(.2)}}@keyframes grWingL{0%{opacity:0;transform:rotate(38deg) scaleX(.3)}25%{opacity:1;transform:rotate(20deg) scaleX(1)}55%{transform:rotate(32deg) scaleX(.85)}80%{opacity:1}100%{opacity:0;transform:rotate(45deg) scaleX(1.15);filter:blur(6px)}}@keyframes grWingR{0%{opacity:0;transform:rotate(-38deg) scaleX(.3)}25%{opacity:1;transform:rotate(-20deg) scaleX(1)}55%{transform:rotate(-32deg) scaleX(.85)}80%{opacity:1}100%{opacity:0;transform:rotate(-45deg) scaleX(1.15);filter:blur(6px)}}@keyframes grFlash{0%{opacity:0}10%{opacity:1}100%{opacity:0}}#grOv{position:fixed;inset:0;z-index:99995;pointer-events:none;display:flex;align-items:center;justify-content:center;background:rgba(0,40,18,.45)}#grOv .bx{position:relative;width:220px;height:220px;animation:grX 1.7s ease-out forwards}#grOv .b1,#grOv .b2{position:absolute;left:50%;top:50%;background:linear-gradient(180deg,#b6ffd0,#2fe97a);box-shadow:0 0 30px #2fe97a;border-radius:6px}#grOv .b1{width:46px;height:220px;transform:translate(-50%,-50%)}#grOv .b2{width:220px;height:46px;transform:translate(-50%,-50%)}#grOv .dst{position:absolute;left:50%;top:50%;width:8px;height:8px;border-radius:50%;background:#7dffb4;box-shadow:0 0 8px #2fe97a;animation:grDust 1.5s ease-out forwards}#grWg{position:fixed;inset:0;z-index:99996;pointer-events:none;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle,rgba(0,60,30,.5),rgba(0,20,10,.75))}#grWg .fl{position:relative;width:340px;height:220px}#grWg .wL,#grWg .wR{position:absolute;top:50%;width:170px;height:110px;background:linear-gradient(180deg,#fff,#dfffe9);border-radius:60% 40% 45% 55%/70% 60% 40% 30%;box-shadow:0 0 40px rgba(255,255,255,.9)}#grWg .wL{left:0;transform-origin:right center;animation:grWingL 1.6s ease-out forwards}#grWg .wR{right:0;transform-origin:left center;animation:grWingR 1.6s ease-out forwards}#grWg .fl::after{content:"";position:absolute;left:50%;top:50%;width:14px;height:14px;border-radius:50%;background:#fff;box-shadow:0 0 24px #fff;transform:translate(-50%,-50%);animation:grFlash 1.6s ease-out forwards}.gx3-card.gx3-star1{border-color:#cd7f32!important;box-shadow:0 0 12px rgba(205,127,50,.45)}.gx3-card.gx3-star2{border-color:#c0c0c0!important;box-shadow:0 0 14px rgba(192,192,192,.55)}.gx3-card.gx3-star3{border-color:#ffd700!important;box-shadow:0 0 18px rgba(255,215,0,.65)}.gx3-card.gx3-star3.gx3-selected{box-shadow:0 0 18px rgba(255,215,0,.8)}.gx3-card.gx3-rey{border-color:#7ac3f0!important;box-shadow:0 0 15px rgba(122,195,240,.4)}.gxf-ico{position:absolute;top:2px;left:3px;z-index:13;font-size:12px;line-height:1;pointer-events:none;filter:drop-shadow(0 0 4px rgba(0,0,0,.8))}.gxf-ico2{position:absolute;top:20px;left:3px;z-index:13;font-size:12px;line-height:1;pointer-events:none;filter:drop-shadow(0 0 4px rgba(0,0,0,.8))}';
document.head.appendChild(s);})();

function grWings(){var o=document.createElement('div');o.id='grWg';o.innerHTML='<div class="fl"><div class="wL"></div><div class="wR"></div></div>';document.body.appendChild(o);setTimeout(function(){o.remove();},1700);}

var SK='grey_empire_rpg_v4',BE=5,UC=25,UM=1.8,MC=0.20,GRC=10,GRH=2.5;
function ldS(){try{var s=JSON.parse(localStorage.getItem(SK));if(s&&s.levels)return s;}catch(e){}return{levels:[1,1,1,1],xp:[0,0,0,0],maxWave:1};}
function pr(){try{localStorage.setItem(SK,JSON.stringify(sv));}catch(e){}}
function pk(a,key){if(!a||!a.length)return'';if(a.length<2)return a[0];if(!pk.q)pk.q={};var q=pk.q[key];if(!q||!q.length){q=a.slice();for(var i=q.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=q[i];q[i]=q[j];q[j]=t;}pk.q[key]=q;}return q.pop();}

function gxBuff(){try{var b=JSON.parse(localStorage.getItem('gx_buff')||'null');return(b&&Date.now()<b.until)?b.t:null;}catch(e){return null;}}

var BP={attack:['«Ммм… вот так… ещё…»','«Как приятно это ощущать…»','«Не останавливайся…»','«Я упиваюсь каждым ударом…»','«Ох… продолжай…»'],aoe:['«Все сразу… как же хорошо…»','«Они все такие сладкие…»','«Обожаю, когда их много…»','«Дрожите для меня…»'],execute:['«А-аах… ДА!»','«Небеса… это восхитительно!»','«Слишком… слишком хорошо!»','«Ещё… ещё убивай…»','«Я… я почти… ААХ!»'],ult:['«Сейчас будет очень горячо…»','«Получите всю мою силу…»','«Я больше не могу сдерживаться…»','«Исчезайте вместе со мной…»'],kill:['«АААХ! ВОТ ОНО!»','«Да-да-да-дааа!»','«Ещё один… ещё… я схожу с ума…»','«Охх… как глубоко он ушёл…»','«Я сейчас растаю от блаженства…»']};
var GP={attack:['Огонь по цели. MP-5 стабильна.','Контакт подтверждён. Открываю огонь.','Одиночная цель. Пробиваю очередь.','Стреляю на подавление. Держите линию.','Цель в секторе. Работаю.'],smoke:['Дымовая граната. Прикрываю отряд.','Дым поставлен. Ничего не видно — значит, никто не попадёт.','Завеса развёрнута. Отдышитесь.'],heal:['Держись. Поле — моя операционная.','Рана не смертельна. Шью.','Пакеты перевязки расходуются быстро. Огонь плотный.','Живые важнее победы. Лечу.'],ult:['Второй шанс выделяю один. Цени его.','Отряд не бросаю. Никогда.','Сердце ещё бьётся. Значит, бой продолжается.'],kill:['Цель нейтрализована. Следующая.','Зона чиста.','Счётчик фрагов растёт. Продолжаю.'],crit:['КРИТ! Точно в швы брони!','Идеальный выстрел. Отметил.'],hcrit:['КРИТ-лечение! Медицинское чудо.','Вколола всё. Поднимайтесь.']};
var HPT={attack:['Сканирую. Две цели заблокированы.','Дрон-залп готов. Выстрел.','Цели захвачены. Огонь.','Перекрёстный огонь. Отскок не предусмотрен.','Мои пушки не знают пощады. Как и я.','Считаю отдачу. Считаю фраги.','Данные цели загружены. Приговор — исполнен.'],
buff:['Ядро разогнано. Отряд, бейте в полную силу.','Поддержка активна. Используйте её.','Разгоняю ваши системы. Стреляйте ярче.','Каждый ваш выстрел теперь вдвое злее. Не подведите.','Энергия перекачана. Уничтожайте.'],
virus:['Вирус распространяется. Враги ослеплены.','Системы противника скомпрометированы.','Ваша броня больше не ваша. Как и ваши прицелы.','Инъекция доставлена. Враги бьют наугад.','Код заражения распространяется. Наслаждайтесь хаосом.'],
ult:['Взлом базы завершён. РЕКВИЕМ.','Запускаю. Небо станет огнём.','Доступ к арсеналу получен. Ракеты — ваши.','Протокол Реквием: принят. Уклонения не будет.','Перехватываю управление. Огонь по всем.'],
kill:['Цель отключена.','Фраг подтверждён.','Утилизация завершена. Следующая.','Она больше не мешает потоку данных.']};

var HR=[
{n:'N-04',cl:'Воин',st:3,col:'#dd4e60',hp:130,atk:14,cr:18,cd:160,ac:90,dd:8,img:'☠',ult:{cd:5,un:5},acts:[{k:'attack',l:'⚔ Удар',d:'обычная атака'},{k:'skill',l:'💥 Раскол',d:'урон + уязвимость +30%, КД 2'},{k:'ult',l:'✦ Ульта',d:'по всем'}]},
{n:'Alisa',cl:'Лекарь',st:3,col:'#9fd18a',hp:105,atk:9,cr:10,cd:140,ac:85,dd:12,img:'✦',ult:{cd:6,un:5},acts:[{k:'attack',l:'⚔ Удар',d:'обычная атака'},{k:'skill',l:'✧ Исцеление',d:'лечение отряда'},{k:'ult',l:'✦ Ульта',d:'мощное лечение'}]},
{n:'Crysta',cl:'Стрелок',st:2,col:'#7fb8d8',hp:95,atk:13,cr:25,cd:170,ac:95,dd:10,img:'◎',ult:{cd:5,un:5},acts:[{k:'attack',l:'⚔ Выстрел',d:'обычная атака'},{k:'skill',l:'🎯 Меткий',d:'+20% урона и крита, КД 3'},{k:'ult',l:'✦ Ульта',d:'снайперский'}]},
{n:'Sky',cl:'Ассасин',st:2,col:'#c9b8e8',hp:85,atk:12,cr:30,cd:190,ac:88,dd:22,img:'🕶',ult:{cd:5,un:5},acts:[{k:'attack',l:'⚔ Удар',d:'тратит тени: +30/60/90% урона и крита'},{k:'shadow',l:'🌑 Тень',d:'удар + накопить тень (до 3)'},{k:'ult',l:'✦ Ульта',d:'теневой удар'}]}];
var BL={n:'Bell',cl:'Загадка',st:4,col:'#e8a0ff',hp:115,atk:16,cr:22,cd:180,ac:93,dd:14,img:'🔔',ult:{cd:4,un:1},acts:[{k:'attack',l:'⚔ Удар',d:'по одной цели'},{k:'aoe',l:'💥 Волна',d:'по трём целям'},{k:'execute',l:'☠ Казнь',d:'5% мгновенная смерть'},{k:'ult',l:'✦ Ульта',d:'Колокол Пустоты'}]};
var GR={n:'Griffin',cl:'Медик-штурмовик',st:4,col:'#7cff9b',hp:110,atk:13,cr:15,cd:150,ac:88,dd:15,img:'✚',ult:{cd:99,un:1},acts:[{k:'attack',l:'🔫 MP-5',d:'по одной цели'},{k:'smoke',l:'💨 Дым',d:'75% уклонения, 2 хода'},{k:'heal',l:'✚ Усиленное лечение',d:'двойное лечение, КРИТ ×2.5'},{k:'ult',l:'🕊 Возрождение',d:'воскрешение павшего, 1 раз'}]};
var HEIT={n:'Хейт',cl:'Дрон-ИИ',st:4,col:'#7ac3f0',hp:100,atk:12,cr:20,cd:180,ac:90,dd:12,img:'🛸',ult:{cd:4,un:1},acts:[{k:'attack',l:'⚡ Атака Хейт',d:'150% по 2 целям'},{k:'reybuff',l:'🔧 Поддержка',d:'+100% урона, 2 хода, КД 4'},{k:'reyvirus',l:'🦠 Вирус в массы',d:'−40% урона врагов, КД 4'},{k:'ult',l:'✦ Реквием',d:'300% по всем, КРИТ ×2'}]};

var MP={ap:['Цель обнаружена. Отряд сопротивления — Grey Empire. Начинаю зачистку.','Протокол: найти и уничтожить все силы сопротивления. Приоритет — Grey Empire.','Сканирование завершено. Сопротивление будет ликвидировано.'],vul:['Залп назначен. Расчёт: уничтожение.','Пулемётная система активна. Цель захвачена.'],rkt:['Ракетный залп запущен. Поражение трёх целей.','Плотность огня максимальна. Сопротивление бесполезно.'],sh:['Укреплённый корпус активирован. Входящий урон снижен на 40%.','Броня перераспределена. Атаки Grey Empire признаны неэффективными.'],kl:['Фрагмент подтверждён. Сопротивление слабеет.','Единица сопротивления уничтожена. Следующая цель.'],df:['Критическое повреждение ядра… Сопротивление… недооценено…']};

var sndUnlocked=false;
document.addEventListener('pointerdown',function(){sndUnlocked=true;},{once:true});
document.addEventListener('keydown',function(){sndUnlocked=true;},{once:true});

function say(url,vol){try{var a=new Audio(url);a.volume=vol||0.6;a.preload='auto';a.load();var n=0;function go(){n++;a.currentTime=0;var p=a.play();if(p&&p.catch)p.catch(function(){if(n<3)document.addEventListener('pointerdown',go,{once:true});});}go();}catch(e){}}

var mAu=null,mGl=null;
function mOn(){if(!mGl){mGl=document.createElement('div');mGl.style.cssText='position:fixed;inset:0;z-index:99996;pointer-events:none;opacity:0;transition:opacity .3s linear;background:repeating-linear-gradient(0deg,rgba(255,40,70,.10) 0 2px,transparent 2px 5px),repeating-linear-gradient(90deg,rgba(150,50,255,.08) 0 3px,transparent 3px 7px)';mGl.innerHTML='<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-weight:800;letter-spacing:6px;color:#ff2a46;text-shadow:0 0 18px rgba(255,40,70,.8);font-size:clamp(22px,5vw,54px)">⚠ ATTENCION!</div>';document.body.appendChild(mGl);}mGl.style.opacity='1';}
function mOff(){if(mGl)mGl.style.opacity='0';}
function mE2(){if(!mAu){mAu=new Audio(MT);mAu.loop=true;mAu.volume=0.5;}try{var b=window.gxBackgroundAudio;if(b&&b.el)b.pause();}catch(e){}mAu.currentTime=0;mAu.play().catch(function(){});mOn();}
function mX(){if(mAu){mAu.pause();mAu.currentTime=0;}try{var b=window.gxBackgroundAudio;if(b&&b.el&&window.gxSoundMuted!==true)b.play().catch(function(){});}catch(e){}mOff();}

function grVid(){var o=document.createElement('div');o.style.cssText='position:fixed;inset:0;z-index:99997;display:flex;align-items:center;justify-content:center;background:rgba(0,10,4,.92)';var v=document.createElement('video');v.src=GV;v.muted=false;v.playsInline=true;v.setAttribute('playsinline','');v.autoplay=true;v.style.cssText='max-width:100%;max-height:100%;object-fit:contain';o.appendChild(v);document.body.appendChild(o);grWings();var done=false;function end(){if(done)return;done=true;try{v.pause();}catch(e){}o.remove();}v.addEventListener('ended',end);v.addEventListener('error',end);setTimeout(end,9000);var p=v.play();if(p&&p.catch)p.catch(function(){v.muted=true;v.play().catch(function(){});});}

var sv=ldS(),st=null,sel=null,tg=null,busy=false;
var __gxKill=null;
var pc=$('vrpg3-particles'),px=pc?pc.getContext('2d'):null,pp=[];
function rz(){var b=$('vrpg3-board');if(!b||!pc)return;pc.width=b.offsetWidth;pc.height=b.offsetHeight;}
window.addEventListener('resize',rz);setTimeout(rz,80);

function burst(x,y,o){if(!px)return;o=o||{};var n=o.count||18,col=o.color||'#c41e3a',sp=o.speed||4,lf=o.life||40,sz=o.size||3,gr=(o.gravity!==undefined)?o.gravity:0.08;if(pp.length>350)pp.splice(0,pp.length-280);for(var i=0;i<n;i++){var a=Math.random()*Math.PI*2,v=(Math.random()*0.6+0.4)*sp;pp.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:lf+Math.random()*12,ml:lf,s:sz+Math.random()*2,c:col,g:gr});}}
(function(){if(!px)return;(function lp(){px.clearRect(0,0,pc.width,pc.height);for(var i=pp.length-1;i>=0;i--){var p=pp[i];p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;p.l--;if(p.l<=0){pp.splice(i,1);continue;}var a=Math.max(0,p.l/p.ml);px.globalAlpha=a;px.fillStyle=p.c;px.beginPath();px.arc(p.x,p.y,p.s*a,0,Math.PI*2);px.fill();}px.globalAlpha=1;requestAnimationFrame(lp);})();})();

function cc(e){var r=e.getBoundingClientRect(),b=$('vrpg3-board').getBoundingClientRect();return{x:r.left+r.width/2-b.left,y:r.top+r.height/2-b.top};}
var _ax=null;function A(){if(!_ax){try{_ax=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}}return _ax;}
function sfx(t){var a=A();if(!a)return;if(a.state==='suspended')a.resume();var o=a.createOscillator(),g=a.createGain();o.connect(g);g.connect(a.destination);if(t==='attack'){o.type='square';o.frequency.setValueAtTime(180,a.currentTime);o.frequency.exponentialRampToValueAtTime(80,a.currentTime+0.1);g.gain.setValueAtTime(0.11,a.currentTime);g.gain.exponentialRampToValueAtTime(0.01,a.currentTime+0.1);o.start();o.stop(a.currentTime+0.1);}else if(t==='ult'){o.type='sawtooth';o.frequency.setValueAtTime(90,a.currentTime);o.frequency.exponentialRampToValueAtTime(35,a.currentTime+0.35);g.gain.setValueAtTime(0.2,a.currentTime);g.gain.exponentialRampToValueAtTime(0.01,a.currentTime+0.35);o.start();o.stop(a.currentTime+0.35);}else if(t==='level'){o.type='sine';o.frequency.setValueAtTime(420,a.currentTime);o.frequency.exponentialRampToValueAtTime(820,a.currentTime+0.25);g.gain.setValueAtTime(0.1,a.currentTime);g.gain.exponentialRampToValueAtTime(0.01,a.currentTime+0.25);o.start();o.stop(a.currentTime+0.25);}else if(t==='hit'){o.type='sawtooth';o.frequency.setValueAtTime(70,a.currentTime);g.gain.setValueAtTime(0.16,a.currentTime);g.gain.exponentialRampToValueAtTime(0.01,a.currentTime+0.18);o.start();o.stop(a.currentTime+0.18);}}

function rnd(a,b){return Math.floor(Math.random()*(b-a+1))+a;}
function xn(l){return 35+(l-1)*28;}
function starsOf(l){return Math.min(3,Math.floor((l-1)/10));}
function starMul(s){return s<=0?1:(s===1?1.5:(s===2?2:2.5));}
function hs(i){var l=sv.levels[i],h=HR[i],s=starsOf(l),m=starMul(s);
return{hp:Math.round(h.hp*m)+(l-1)*20,atk:Math.round(h.atk*m*10)/10+(l-1)*2.5,cr:h.cr+Math.floor((l-1)*0.8),cd:h.cd,ac:h.ac,dd:h.dd};}
function blv(){return Math.max(sv.levels[0],sv.levels[1],sv.levels[2],sv.levels[3])+2;}
function lvlOf(h){return h.bell||h.griffin||h.rey?h.lv:sv.levels[h.idx];}
/* ФИКС ПОРЧИ HP: любое здоровье нормализуется перед отображением/расчётом */
function fixHp(p){
if(!p)return;
if(!isFinite(p.mx)||p.mx<=0)p.mx=Math.max(1,Math.round(p.mx)||1);
if(!isFinite(p.hp))p.hp=0;
if(p.hp<0)p.hp=0;
if(p.hp>p.mx)p.hp=p.mx;
}
function log(m,c){var d=document.createElement('div');d.textContent=m;if(c)d.style.color=c;lg.appendChild(d);lg.scrollTop=lg.scrollHeight;}
function isB(w){return w%BE===0;}
function mkE(){var w=st.wave;if(isB(w)){if(Math.random()<MC){var mh=460+Math.floor(w/5)*240;return[{n:'MECHA-GALLEON',hp:mh,mx:mh,atk:18+w*1.8,al:true,boss:true,mecha:true,sh:0,tn:0}];}var hp=280+Math.floor(w/5)*140;return[{n:'Apofis — Ядро',hp:hp,mx:hp,atk:16+w*1.8,al:true,boss:true}];}var c=Math.min(2+Math.floor(w/2),5),L=[],N=['Агент Apofis','Юнит Осколок','Оперативник','Кибер-глашатай','Элитный Каратель'];for(var i=0;i<c;i++){var h2=40+w*12+rnd(0,12);L.push({n:N[rnd(0,4)],hp:h2,mx:h2,atk:9+w*1.5,al:true});}return L;}
function arm(e,d){if(e&&e.mecha&&e.sh>0)return Math.max(1,Math.round(d*0.6));return d;}
function dmgTo(e,d){if(e&&e.vuln>0)d=Math.round(d*1.3);return d;}
function mkB(){var l=blv(),s=starsOf(l),m=starMul(s);return{def:BL,idx:99,lv:l,hp:Math.round(BL.hp*m)+(l-1)*20,mx:Math.round(BL.hp*m)+(l-1)*20,atk:Math.round(BL.atk*m*10)/10+(l-1)*2.5,cr:BL.cr,cd2:BL.cd,ac:BL.ac,dd:BL.dd,act:false,uc:0,bell:true};}
function mkG(){var l=blv(),s=starsOf(l),m=starMul(s);return{def:GR,idx:98,lv:l,hp:Math.round(GR.hp*m)+(l-1)*20,mx:Math.round(GR.hp*m)+(l-1)*20,atk:Math.round(GR.atk*m*10)/10+(l-1)*2.5,cr:GR.cr+GRC,cd2:GR.cd,ac:GR.ac,dd:GR.dd,act:false,uc:0,griffin:true,smCd:0,revUsed:false};}
function mkHeit(){var l=blv(),s=starsOf(l),m=starMul(s);return{def:HEIT,idx:97,lv:l,hp:Math.round(HEIT.hp*m)+(l-1)*20,mx:Math.round(HEIT.hp*m)+(l-1)*20,atk:Math.round(HEIT.atk*m*10)/10+(l-1)*2.5,cr:HEIT.cr,cd2:HEIT.cd,ac:HEIT.ac,dd:HEIT.dd,act:false,uc:0,rey:true,reyCd:0,virCd:0};}
function grCrossFallback(){var o=document.createElement('div');o.style.cssText='position:fixed;inset:0;z-index:99995;pointer-events:none;display:flex;align-items:center;justify-content:center;background:rgba(0,40,18,.45)';var b=document.createElement('div');b.style.cssText='position:relative;width:220px;height:220px';b.innerHTML='<div style="position:absolute;left:50%;top:0;width:46px;height:220px;transform:translateX(-50%);background:linear-gradient(180deg,#b6ffd0,#2fe97a);box-shadow:0 0 30px #2fe97a;border-radius:6px"></div><div style="position:absolute;top:50%;left:0;width:220px;height:46px;transform:translateY(-50%);background:linear-gradient(180deg,#b6ffd0,#2fe97a);box-shadow:0 0 30px #2fe97a;border-radius:6px"></div>';o.appendChild(b);document.body.appendChild(o);setTimeout(function(){o.remove();},2000);}

var __gxGuestsSinceGriffin=0;
function tryB(){st.bA=false;st.party=st.party.filter(function(p){return!p.bell&&!p.griffin&&!p.rey;});if(st.wave>=5&&Math.random()<0.30){st.bA=true;var forceG=(__gxGuestsSinceGriffin>=3);var roll=Math.random();
if(forceG||roll<0.34){var g=mkG();st.party.push(g);__gxGuestsSinceGriffin=0;st.gJ=true;log('✚ Зелёный свет пронзает тьму... Griffin вступает в бой! (ур.'+g.lv+')','#7cff9b');try{if(window.GriffinClass){window.GriffinClass.cross();window.GriffinClass.say(0.6);}else{grCrossFallback();say(GVO,0.6);}}catch(e){grCrossFallback();say(GVO,0.6);}
}else if(roll<0.67){var guest=mkB();__gxGuestsSinceGriffin++;st.bJ=true;log('🔔 Из темноты появляется Bell... (ур.'+guest.lv+')','#e8a0ff');say(BVO,0.55);st.party.push(guest);
}else{var r=mkHeit();st.party.push(r);__gxGuestsSinceGriffin++;st.rJ=true;log('🛸 Из потоков данных материализуется Хейт! (ур.'+r.lv+')','#7ac3f0');
}
if(window.animateBellAppear&&pt){setTimeout(function(){var c=pt.querySelector('.gx3-bell,.gx3-griffin,.gx3-rey');if(c)window.animateBellAppear(c);},150);}}}

function nb(k){var s=k?sv.maxWave:1;st={wave:s,party:HR.map(function(h,i){var x=hs(i);return{def:h,idx:i,hp:x.hp,mx:x.hp,atk:x.atk,cr:x.cr,cd2:x.cd,ac:x.ac,dd:x.dd,act:false,uc:0,bell:false,dgB:0,reyDmg:0,skCd:0,crB:0,shSt:0};}),en:[],over:false,bA:false,bJ:false,gJ:false,rJ:false};st.en=mkE();var m0=st.en[0]&&st.en[0].mecha;if(m0)mE2();tryB();sel=tg=null;busy=false;lg.innerHTML='';rs.classList.add('hidden');if(!m0){if(isB(st.wave))log('⚠ БОСС! Ядро Apofis!','#e8c060');else log('Волна '+st.wave,'#e8c060');}rd();}
function aE(){return st.en.filter(function(e){return e.al;});}
function aH(){return st.party.filter(function(h){return h.hp>0;});}

function rd(){wv.textContent=st.wave;bt.classList.toggle('hidden',!isB(st.wave));ph.textContent=st.over?'Битва окончена':(busy?'Враги атакуют…':'Ваш ход');en.innerHTML='';st.en.forEach(function(e,i){if(!e.al)return;var c=document.createElement('div');c.className='gx3-card'+(e.boss?' gx3-boss':'')+(tg===i?' gx3-selected':'');c.dataset.eid=i;var p=Math.max(0,Math.round(e.hp/e.mx*100));var img;if(e.mecha){img='<div class="gx3-card-img" style="position:relative;padding:0;background:#0a0a0a"><img src="'+MA+'" alt="MECHA-GALLEON" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"><span style="position:absolute;top:2px;right:2px;font-size:15px;line-height:1;background:rgba(0,0,0,.7);border-radius:4px;padding:2px 4px;color:#ff2a46">⚙</span>'+(e.sh>0?'<span style="position:absolute;bottom:2px;left:2px;font-size:9px;background:rgba(120,60,255,.85);border-radius:4px;padding:1px 4px;color:#fff">ЩИТ −40%</span>':'')+'</div>';}else img='<div class="gx3-card-img">'+(e.boss?'👁':'☠')+'</div>';var fx='';if(e.vuln>0)fx+='<span class="gxf-ico">💥</span>';if(e.virus>0)fx+='<span class="gxf-ico2">🦠</span>';c.innerHTML=img+fx+'<div class="gx3-card-body"><div class="gx3-card-name" style="color:'+(e.mecha?'#ff2a46':(e.boss?'#e8c060':'#dd4e60'))+'">'+e.n+'</div><div class="gx3-hp-bar"><div class="gx3-hp-fill" style="width:'+p+'%;background:'+(e.mecha?'linear-gradient(90deg,#6a0fbf,#ff2a46)':'linear-gradient(90deg,#6e1222,#dd4e60)')+'"></div></div><div class="gx3-hp-text">'+Math.max(0,Math.round(e.hp))+'/'+Math.round(e.mx)+'</div></div>';en.appendChild(c);});pt.innerHTML='';st.party.forEach(function(h){
fixHp(h);
var sc=starsOf(lvlOf(h));
var cls='gx3-card'+(sel===h.idx?' gx3-selected':'')+(h.hp<=0?' gx3-dead':'')+(h.bell?' gx3-bell':'')+(h.griffin?' gx3-griffin':'')+(h.rey?' gx3-rey':'');
if(sc===1)cls+=' gx3-star1';else if(sc===2)cls+=' gx3-star2';else if(sc===3)cls+=' gx3-star3';
var c=document.createElement('div');c.className=cls;c.dataset.uid=h.idx;var p=Math.max(0,Math.round(h.hp/h.mx*100));
var imgHtml;if(h.bell){imgHtml='<div class="gx3-card-img" style="position:relative;padding:0;background:#0a0a0a"><img src="'+BA+'" alt="Bell" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"><span style="position:absolute;top:2px;right:2px;font-size:16px;line-height:1;background:rgba(0,0,0,.65);border-radius:4px;padding:2px 4px;color:#e8a0ff">🔔</span></div>';}else if(h.griffin){imgHtml='<div class="gx3-card-img" style="position:relative;padding:0;background:#0a0a0a"><img src="'+GA+'" alt="Griffin" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"><span style="position:absolute;top:2px;right:2px;font-size:16px;line-height:1;background:rgba(0,0,0,.65);border-radius:4px;padding:2px 4px;color:#7cff9b">✚</span></div>';}else if(h.rey){imgHtml='<div class="gx3-card-img" style="position:relative;padding:0;background:#0a0a0a"><img src="'+RA+'" alt="Хейт" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"><span style="position:absolute;top:2px;right:2px;font-size:16px;line-height:1;background:rgba(0,0,0,.65);border-radius:4px;padding:2px 4px;color:#7ac3f0">🛸</span></div>';}else{imgHtml='<div class="gx3-card-img" style="position:relative;padding:0;background:#0a0a0a"><img src="'+PR[h.idx]+'" alt="'+h.def.n+'" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block"><span style="position:absolute;top:2px;right:2px;font-size:16px;line-height:1;background:rgba(0,0,0,.65);border-radius:4px;padding:2px 4px;color:'+h.def.col+'">'+h.def.img+'</span></div>';}
var fx='';if(h.reyDmg>0)fx+='<span class="gxf-ico2">🔥</span>';if(h.crB>0)fx+='<span class="gxf-ico2" title="Меткий">🎯</span>';if(h.shSt>0)fx+='<span class="gxf-ico2" title="Тень ×'+h.shSt+'">🌑'+h.shSt+'</span>';
c.innerHTML=imgHtml+fx+'<div class="gx3-card-body"><div class="gx3-card-name" style="color:'+h.def.col+'">'+h.def.n+'</div><div class="gx3-card-meta">'+h.def.cl+' · ур.'+lvlOf(h)+(sc>0?' · <span style="color:#ffd700;text-shadow:0 0 6px rgba(255,215,0,.7)">'+'★'.repeat(sc)+'</span>':'')+'</div><div class="gx3-hp-bar"><div class="gx3-hp-fill" style="width:'+p+'%;background:'+h.def.col+'"></div></div><div class="gx3-hp-text">'+Math.max(0,Math.round(h.hp))+'/'+Math.round(h.mx)+'</div></div>';
pt.appendChild(c);});var h=sel!==null?st.party.find(function(p){return p.idx===sel;}):null;if(!h||h.hp<=0||h.act||st.over){ac2.innerHTML='<div class="text-[13px] text-white/40">'+(st.over?'':(h&&h.act?'Герой уже ходил':'Выберите героя'))+'</div>';}else{ac2.innerHTML=h.def.acts.map(function(a){var d=false,x='';if(a.k==='ult'){if(h.bell){if(h.lv<(h.def.ult.un||5)){d=true;x=' (с 5 ур.)';}else if(h.uc>0){d=true;x=' ('+h.uc+')';}}else if(h.griffin){if(h.revUsed){d=true;x=' (исп.)';}}else if(h.rey){if(h.uc>0){d=true;x=' ('+h.uc+')';}}else{if(sv.levels[h.idx]<(h.def.ult.un||5)){d=true;x=' (с 5 ур.)';}else if(h.uc>0){d=true;x=' ('+h.uc+')';}}}if(a.k==='smoke'&&h.smCd>0){d=true;x=' ('+h.smCd+')';}if(a.k==='reybuff'&&h.reyCd>0){d=true;x=' ('+h.reyCd+')';}if(a.k==='reyvirus'&&h.virCd>0){d=true;x=' ('+h.virCd+')';}if(a.k==='skill'&&h.skCd>0){d=true;x=' ('+h.skCd+')';}return '<button class="gx3-btn-act" data-act="'+a.k+'"'+(d?' disabled':'')+' style="border-color:'+h.def.col+'">'+a.l+x+'<small>'+a.d+'</small></button>';}).join('');}}

function fl(e,t,c,crit){var f=document.createElement('div');f.className='gx3-dmg-float'+(crit?' gx3-crit':'');f.style.color=c;f.textContent=t;e.appendChild(f);setTimeout(function(){f.remove();},900);}
function hitQ(a,dd){return Math.random()*100<Math.max(8,Math.min(95,a-dd*0.5));}
function dmg(b,c,cm){var d=b,crit=Math.random()*100<(c+(gxBuff()==='critd'?20:0));if(crit)d=Math.round(d*(cm/100));return{d:d,crit:crit};}
function bdmg(base){return gxBuff()==='dmg'?Math.round(base*1.3):base;}
function bheal(v){return gxBuff()==='heal'?Math.round(v*1.5):v;}
function ucr(){return Math.random()*100<UC;}
function kill(e){e.hp=0;e.al=false;
if(__gxKill&&__gxKill.idx>=0&&__gxKill.idx<4){
var bonus=__gxKill.boss?15:3;
sv.xp[__gxKill.idx]+=bonus;
log('★ '+HR[__gxKill.idx].n+' получает бонус опыта +'+(__gxKill.boss?'500%':'100%')+' за убийство!',__gxKill.boss?'#ffd700':'#9fd18a');
__gxKill=null;
}
if(e.mecha)log('MECHA-GALLEON: '+pk(MP.df,'mdf'),'#c08bff');}
function strongestAtk(){var b=0;st.party.forEach(function(p){if(!p.bell&&!p.griffin&&!p.rey&&p.hp>0&&p.atk>b)b=p.atk;});return b||12;}
function enemyDmg(e,dm){if(e&&e.virus>0)dm=Math.max(1,Math.round(dm*0.6));return dm;}
function heroBase(h,lo,hi){var b=bdmg(rnd(Math.round(h.atk)+lo,Math.round(h.atk)+hi));if(h.crB>0)b=Math.round(b*1.2);return b;}
function heroCrit(h){var c=h.cr;if(h.crB>0)c+=20;if(h.def.n==='Sky'&&h.shSt>0)c+=[0,15,20,30][h.shSt];return c;}
function skyStrike(h,lo,hi){
var b=heroBase(h,lo,hi);
if(h.shSt>0){b=Math.round(b*(1+h.shSt*0.3));log('🌑 Тень усиливает удар ×'+(1+h.shSt*0.3)+' и добавляет +'+[0,15,20,30][h.shSt]+'% к шансу крита!','#c9b8e8');h.shSt=0;}
return b;}

pt.addEventListener('click',function(e){if(st.over||busy)return;var c=e.target.closest('[data-uid]');if(!c)return;var h=st.party.find(function(p){return p.idx===+c.dataset.uid;});if(!h||h.hp<=0||h.act)return;sel=h.idx;tg=null;rd();});
en.addEventListener('click',function(e){if(st.over||busy)return;var c=e.target.closest('[data-eid]');if(!c)return;tg=+c.dataset.eid;rd();});

ac2.addEventListener('click',function(e){if(st.over||busy||sel===null)return;var b=e.target.closest('[data-act]');if(!b||b.disabled)return;var act=b.dataset.act;var h=st.party.find(function(p){return p.idx===sel;});if(!h||h.hp<=0||h.act)return;__gxKill=null;var mc=pt.querySelector('[data-uid="'+h.idx+'"]');var t=tg!==null?st.en[tg]:null;var al=aE();if(!t||!t.al)t=al[0]||null;if(h.uc>0&&['attack','aoe','execute','skill','ult'].indexOf(act)!==-1)h.uc--;
if(act==='attack'){if(h.rey){if(!al.length){log('Нет целей');return;}
sfx('attack');if(window.animateLunge)window.animateLunge(mc);
var base=bdmg(Math.round(strongestAtk()*1.5));
var ts=al.slice(0,2);log('Хейт: '+pk(HPT.attack,'ha'),'#7ac3f0');
ts.forEach(function(e2){var r2=dmg(bdmg(rnd(base-4,base+4)),h.cr,h.cd2);var d2=dmgTo(e2,arm(e2,r2.d));e2.hp-=d2;
var ec2=en.querySelector('[data-eid="'+st.en.indexOf(e2)+'"]');
if(ec2){if(window.animateShake)window.animateShake(ec2);fl(ec2,'−'+d2,r2.crit?'#ff4d6d':'#7ac3f0',r2.crit);}
if(e2.hp<=0){__gxKill={idx:h.idx,boss:!!e2.boss};kill(e2);log(e2.n+' уничтожен!','#7ac3f0');log('Хейт: '+pk(HPT.kill,'hk'),'#7ac3f0');}});
}
else{if(!t){log('Нет цели');return;}sfx('attack');if(window.animateLunge)window.animateLunge(mc);var c0=cc(mc);burst(c0.x,c0.y,{count:12,color:h.def.col,speed:4});if(h.bell)log('Bell: '+pk(BP.attack,'ba'),'#e8a0ff');if(h.griffin)log('Griffin: '+pk(GP.attack,'ga'),'#7cff9b');if(!hitQ(h.ac,6)){log(h.def.n+' промахнулся');}else{var r0=h.reyDmg>0?Math.round(heroBase(h,-2,4)*2):heroBase(h,-2,4);if(h.def.n==='Sky'&&h.shSt>0)r0=Math.round(skyStrike(h,-2,4));var r=dmg(r0,heroCrit(h),h.cd2);var dd=dmgTo(t,arm(t,r.d));if(h.griffin&&r.crit)log('Griffin: '+pk(GP.crit,'gc'),'#7cff9b');var ec=en.querySelector('[data-eid="'+st.en.indexOf(t)+'"]');t.hp-=dd;if(ec){if(window.animateShake)window.animateShake(ec);fl(ec,'−'+dd,r.crit?'#ff4d6d':'#fff',r.crit);}log(h.def.n+' → '+t.n+': −'+dd+(t.mecha&&t.sh>0?' (щит)':'')+(r.crit?' КРИТ':''),h.def.col);if(t.hp<=0){__gxKill={idx:h.idx,boss:!!t.boss};kill(t);log(t.n+' уничтожен!',h.def.col);if(h.bell)log('Bell: '+pk(BP.kill,'bk'),'#ff6bff');if(h.griffin)log('Griffin: '+pk(GP.kill,'gk'),'#7cff9b');}}}}
else if(act==='shadow'&&h.def.n==='Sky'){sfx('attack');if(window.animateLunge)window.animateLunge(mc);
if(!t){log('Нет цели');return;}
var rs1=dmg(heroBase(h,0,4),heroCrit(h),h.cd2);var ds1=dmgTo(t,arm(t,rs1.d));t.hp-=ds1;
var ecs=en.querySelector('[data-eid="'+st.en.indexOf(t)+'"]');
if(ecs){if(window.animateShake)window.animateShake(ecs);fl(ecs,'−'+ds1,h.def.col,rs1.crit);}
h.shSt=Math.min(3,(h.shSt||0)+1);
log('🌑 Sky наносит удар из полутени ('+h.shSt+'/3 стака): следующий удар +'+(h.shSt*30)+'% урона и +'+[0,15,20,30][h.shSt]+'% к шансу крита','#c9b8e8');
if(t.hp<=0){__gxKill={idx:h.idx,boss:!!t.boss};kill(t);}}
else if(act==='aoe'&&h.bell){sfx('attack');if(window.animateLunge)window.animateLunge(mc);var ts2=al.slice(0,3);log('Bell: '+pk(BP.aoe,'bo'),'#e8a0ff');ts2.forEach(function(e2){var r2=dmg(bdmg(rnd(Math.round(h.atk)-1,Math.round(h.atk)+3)),h.cr,h.cd2);var d2=dmgTo(e2,arm(e2,r2.d));e2.hp-=d2;var e2c=en.querySelector('[data-eid="'+st.en.indexOf(e2)+'"]');if(e2c){if(window.animateShake)window.animateShake(e2c);fl(e2c,'−'+d2,'#e8a0ff');var c2=cc(e2c);burst(c2.x,c2.y,{count:10,color:'#e8a0ff',speed:3.5});}if(e2.hp<=0){__gxKill={idx:h.idx,boss:!!e2.boss};kill(e2);log(e2.n+' уничтожен!');log('Bell: '+pk(BP.kill,'bk'),'#ff6bff');}});}
else if(act==='smoke'&&h.griffin){sfx('attack');if(window.animateLunge)window.animateLunge(mc);log('Griffin: '+pk(GP.smoke,'gs'),'#7cff9b');h.smCd=4;st.party.forEach(function(p){if(p.hp>0)p.dgB=2;});log('💨 Дымовая завеса! Все союзники: 75% уклонения на 2 хода','#7cff9b');}
else if(act==='reybuff'&&h.rey){sfx('attack');if(window.animateLunge)window.animateLunge(mc);h.reyCd=4;st.party.forEach(function(p){if(p.hp>0)p.reyDmg=2;});log('Хейт: '+pk(HPT.buff,'hb'),'#7ac3f0');log('🔧 Поддержка Хейт: +100% урона всему отряду на 2 хода!','#7ac3f0');}
else if(act==='reyvirus'&&h.rey){sfx('ult');if(window.animateLunge)window.animateLunge(mc);h.virCd=4;st.en.forEach(function(e){if(e.al)e.virus=2;});log('Хейт: '+pk(HPT.virus,'hv'),'#7ac3f0');log('🦠 Вирус в массы: урон всех врагов снижен на 40% на 2 хода!','#7ac3f0');}
else if(act==='heal'&&h.griffin){sfx('attack');if(window.animateLunge)window.animateLunge(mc);var hc=Math.random()*100<h.cr+(gxBuff()==='critd'?20:0);var base=bheal(rnd(30,46));if(hc)base=Math.round(base*GRH);log('Griffin: '+pk(GP.heal,'gh')+(hc?' КРИТ ×2.5':''),'#7cff9b');if(hc)log('Griffin: '+pk(GP.hcrit,'ghc'),'#7cff9b');var hd=0;st.party.forEach(function(p){fixHp(p);if(p.hp>0&&p.hp<p.mx){var ad=Math.min(p.mx-p.hp,base);p.hp+=ad;hd+=ad;}});log('✚ Усиленное лечение: +'+hd+' всему отряду'+(hc?' (КРИТ)':''),hc?'#ff4d6d':'#7cff9b');}
else if(act==='execute'&&h.bell){if(!t){log('Нет цели');return;}sfx('ult');if(window.animateLunge)window.animateLunge(mc);log('Bell: '+pk(BP.execute,'be'),'#e8a0ff');var ec3=en.querySelector('[data-eid="'+st.en.indexOf(t)+'"]');if(Math.random()<0.05&&!(t.mecha&&t.sh>0)){__gxKill={idx:h.idx,boss:!!t.boss};kill(t);if(ec3){fl(ec3,'КАЗНЬ','#ff0040',true);var c3=cc(ec3);burst(c3.x,c3.y,{count:30,color:'#ff0040',speed:6,life:45});}log('Bell мгновенно казнит '+t.n+'!','#ff0040');log('Bell: '+pk(BP.kill,'bk'),'#ff6bff');}else{var r3=dmg(bdmg(rnd(Math.round(h.atk)+3,Math.round(h.atk)+9)),h.cr+5,h.cd2);var d3=dmgTo(t,arm(t,r3.d));t.hp-=d3;if(ec3){if(window.animateShake)window.animateShake(ec3);fl(ec3,'−'+d3,'#e8a0ff');}log('Bell → '+t.n+': −'+d3+(t.mecha&&t.sh>0?' (щит)':''),'#e8a0ff');if(t.hp<=0){__gxKill={idx:h.idx,boss:!!t.boss};kill(t);log('Bell: '+pk(BP.kill,'bk'),'#ff6bff');}}}
else if(act==='ult'){if(h.griffin){var fallen=st.party.filter(function(p){return p.hp<=0&&p!==h;});if(!fallen.length){log('Нет павших — возрождать некого');return;}sfx('ult');h.revUsed=true;var tgt=fallen[Math.floor(Math.random()*fallen.length)];fixHp(tgt);tgt.hp=tgt.mx;tgt.act=false;log('Griffin: '+pk(GP.ult,'gu'),'#7cff9b');log('🕊 ВОЗРОЖДЕНИЕ! '+tgt.def.n+' возвращается в бой с полным здоровьем!','#7cff9b');grVid();}
else if(h.rey){sfx('ult');h.uc=h.def.ult.cd;
log('Хейт: '+pk(HPT.ult,'hu'),'#7ac3f0');
var base3=bdmg(Math.round(strongestAtk()*3));
al.forEach(function(e3){
var crit=Math.random()*100<(h.cr+20);
var dm=base3;if(crit)dm=Math.round(dm*2);
dm=dmgTo(e3,arm(e3,dm));e3.hp-=dm;
var e3c=en.querySelector('[data-eid="'+st.en.indexOf(e3)+'"]');
if(e3c)fl(e3c,'−'+dm,crit?'#ff4d6d':'#7ac3f0',crit);
if(e3.hp<=0){__gxKill={idx:h.idx,boss:!!e3.boss};kill(e3);}});
log('✦ РЕКВИЕМ: Хейт взламывает базу противника и запускает Ракетный удар по всем!','#7ac3f0');}
else{sfx('ult');h.uc=h.def.ult.cd;var c4=cc(mc);burst(c4.x,c4.y,{count:35,color:h.def.col,speed:6,size:4,life:50});if(h.bell){var bc=ucr();log('Bell: '+pk(BP.ult,'bu')+(bc?' КРИТ!':''),'#e8a0ff');al.forEach(function(e3){var dm=bdmg(rnd(20,34)+Math.floor(h.atk));if(bc)dm=Math.round(dm*UM);dm=dmgTo(e3,arm(e3,dm));e3.hp-=dm;var e3c=en.querySelector('[data-eid="'+st.en.indexOf(e3)+'"]');if(e3c)fl(e3c,'−'+dm,bc?'#ff4d6d':'#e8a0ff',bc);if(e3.hp<=0){__gxKill={idx:h.idx,boss:!!e3.boss};kill(e3);log('Bell: '+pk(BP.kill,'bk'),'#ff6bff');}});log('Bell использует Колокол Пустоты!'+(bc?' КРИТ ×1.8':''),bc?'#ff4d6d':'#e8a0ff');if(window.showBellUltVideo)window.showBellUltVideo();}else if(h.def.cl==='Лекарь'){var hc2=ucr();st.party.forEach(function(p){fixHp(p);if(p.hp>0){var ad=bheal(rnd(28,42));if(hc2)ad=Math.round(ad*UM);p.hp=Math.min(p.mx,p.hp+ad);}});log(h.def.n+(hc2?' КРИТ-исцеление отряда!':' мощно исцеляет отряд!'),hc2?'#ff4d6d':'#9fd18a');}else{var c4b=ucr();var d4=bdmg(rnd(24,38)+Math.floor(h.atk*1.3));if(c4b)d4=Math.round(d4*UM);if(h.crB>0)d4=Math.round(d4*1.2);al.forEach(function(e4){var d5=dmgTo(e4,arm(e4,d4));e4.hp-=d5;var e4c=en.querySelector('[data-eid="'+st.en.indexOf(e4)+'"]');if(e4c)fl(e4c,'−'+d5,c4b?'#ff4d6d':h.def.col,c4b);if(e4.hp<=0){__gxKill={idx:h.idx,boss:!!e4.boss};kill(e4);}});log(h.def.n+' использует ульту! −'+d4+' всем'+(c4b?' КРИТ ×1.8':''),c4b?'#ff4d6d':h.def.col);}}}
else if(act==='skill'){sfx('attack');if(window.animateLunge)window.animateLunge(mc);
if(h.def.cl==='Лекарь'){var hd2=0;st.party.forEach(function(p){fixHp(p);if(p.hp>0&&p.hp<p.mx){var ad=Math.min(p.mx-p.hp,bheal(Math.round(rnd(15,23)*1.5)));p.hp+=ad;hd2+=ad;}});log(h.def.n+' исцеляет на '+hd2,'#9fd18a');}
else if(h.def.n==='N-04'){if(!t)return;t.vuln=2;
var r4=dmg(heroBase(h,3,9),heroCrit(h),h.cd2);var d6=dmgTo(t,arm(t,r4.d));t.hp-=d6;
var e6c=en.querySelector('[data-eid="'+st.en.indexOf(t)+'"]');
if(e6c){fl(e6c,'−'+d6,h.def.col,r4.crit);if(window.animateShake)window.animateShake(e6c);}
log('💥 Раскол! '+t.n+' получает уязвимость: +30% урона по ней (2 хода)','#dd4e60');
if(t.hp<=0){__gxKill={idx:h.idx,boss:!!t.boss};kill(t);}}
else if(h.def.n==='Crysta'){h.crB=2;
log('🎯 Crysta сосредотачивается: +20% урона и +20% к шансу крита (2 хода)!','#7fb8d8');}
else{var r4c=dmg(skyStrike(h,3,9),heroCrit(h),h.cd2);
var d6c=dmgTo(t,arm(t,r4c.d));t.hp-=d6c;var e6b=en.querySelector('[data-eid="'+st.en.indexOf(t)+'"]');if(e6b)fl(e6b,'−'+d6c,h.def.col,r4c.crit);log(h.def.n+' навык → '+t.n+': −'+d6c+(t.mecha&&t.sh>0?' (щит)':''),h.def.col);if(t.hp<=0){__gxKill={idx:h.idx,boss:!!t.boss};kill(t);}}}
if(h.smCd>0)h.smCd--;if(h.reyCd>0)h.reyCd--;if(h.virCd>0)h.virCd--;
h.act=true;sel=null;tg=null;
var prevStars=st.party.map(function(p){return starsOf(lvlOf(p));});
st.party.forEach(function(p){if(p.hp>0&&!p.bell&&!p.griffin&&!p.rey){var i=p.idx;if(i<0||i>=4)return;sv.xp[i]+=3;while(sv.xp[i]>=xn(sv.levels[i])){sv.xp[i]-=xn(sv.levels[i]);sv.levels[i]++;sfx('level');log('★ '+HR[i].n+' достиг ур. '+sv.levels[i]+'!','#e8c060');
var ns2=starsOf(sv.levels[i]);if(ns2>prevStars[i]){p.mx=Math.round(HR[i].hp*starMul(ns2))+(sv.levels[i]-1)*20;p.hp=p.mx;p.atk=Math.round(HR[i].atk*starMul(ns2)*10)/10+(sv.levels[i]-1)*2.5;log('✦ '+HR[i].n+' получает '+ns2+'★! Характеристики ×'+starMul(ns2),'#ffd700');}}}});
pr();if(!aE().length){rd();setTimeout(wc,700);return;}if(lose())return;var left=st.party.filter(function(p){return p.hp>0&&!p.act;});if(left.length===0){busy=true;rd();setTimeout(et,850);}else rd();});

function wc(){log('Волна '+st.wave+' зачищена!','#e8c060');mX();try{var AK='grey_empire_achv',AS=JSON.parse(localStorage.getItem(AK)||'{}');var cleared=st.wave;if(cleared>=1&&!AS.ach1){AS.ach1=true;if(typeof window.showAch==='function')window.showAch({n:'Новичок на поле боя!',d:'Пройдена первая волна'});}if(cleared>=5&&!AS.ach2){AS.ach2=true;if(typeof window.showAch==='function')window.showAch({n:'Рядовой вояка!',d:'Пройдено пять волн'});}AS.maxCleared=Math.max(AS.maxCleared||0,cleared);localStorage.setItem(AK,JSON.stringify(AS));}catch(e){}if(st.bA){log('Гость растворяется в тени...','#e8a0ff');}st.party=st.party.filter(function(p){return!p.bell&&!p.griffin&&!p.rey;});st.bA=false;sv.maxWave=Math.max(sv.maxWave,st.wave+1);pr();st.wave++;st.en=mkE();var m1=st.en[0]&&st.en[0].mecha;if(m1)mE2();st.party.forEach(function(p){fixHp(p);var lv=sv.levels[p.idx]||1;if(p.hp>0&&isFinite(p.hp)){p.hp=Math.min(p.mx,p.hp+16+lv*2);p.act=false;p.dgB=0;p.reyDmg=0;p.skCd=0;p.crB=0;}});tryB();if(!m1&&isB(st.wave))log('⚠ Приближается БОСС!','#e8c060');rd();busy=true;setTimeout(et,1100);}

function et(){if(st.over){busy=false;rd();return;}var es=aE();if(!aH().length){busy=false;rd();return;}es.forEach(function(e){var hh=aH();if(!hh.length)return;if(e.mecha){e.tn++;e.sh=0;if(e.tn%3===0){e.sh=0.4;log('MECHA-GALLEON: '+pk(MP.sh,'ms'),'#c08bff');log('⚙ УЛЬТИМЕЙТ: Укреплённый корпус! Весь входящий урон −40%','#c08bff');var mC=en.querySelector('[data-eid="'+st.en.indexOf(e)+'"]');if(mC){var mc2=cc(mC);burst(mc2.x,mc2.y,{count:25,color:'#9b4dff',speed:5,size:4});}return;}if(Math.random()<0.5){log('MECHA-GALLEON: '+pk(MP.rkt,'mr'),'#ff2a46');var rt=hh.slice().sort(function(){return Math.random()-0.5;}).slice(0,3);rt.forEach(function(th){if(th.dgB>0&&Math.random()<0.75){log('💨 Дым спасает: '+th.def.n+' уклонился!','#7cff9b');return;}var dm=enemyDmg(e,Math.round((e.atk+rnd(-2,3))*1.5));th.hp-=dm;var cEl=pt.querySelector('[data-uid="'+th.idx+'"]');if(cEl){if(window.animateShake)window.animateShake(cEl);fl(cEl,'−'+dm,'#ff2a46');}log('🚀 Ракетный залп → '+th.def.n+': −'+dm,'#ff2a46');if(th.hp<=0){th.hp=0;log('✖ '+th.def.n+' пал','#dd4e60');}});sfx('ult');return;}var t2=hh[rnd(0,hh.length-1)];if(t2.dgB>0&&Math.random()<0.75){log('💨 Дым спасает: '+t2.def.n+' уклонился!','#7cff9b');return;}var d2=enemyDmg(e,Math.round((e.atk+rnd(-2,3))*1.5));t2.hp-=d2;var cE2=pt.querySelector('[data-uid="'+t2.idx+'"]');if(cE2){if(window.animateShake)window.animateShake(cE2);fl(cE2,'−'+d2,'#ff6b3d');var c2b=cc(cE2);burst(c2b.x,c2b.y,{count:12,color:'#ff6b3d',speed:4});}sfx('hit');log('MECHA-GALLEON: '+pk(MP.vul,'mv'),'#ff6b3d');log('🔫 Пулемётный залп → '+t2.def.n+': −'+d2,'#ff6b3d');if(t2.hp<=0){t2.hp=0;log('✖ '+t2.def.n+' пал','#dd4e60');}else if(Math.random()<0.5)log('MECHA-GALLEON: '+pk(MP.kl,'mk'),'#c08bff');return;}var t3=hh[rnd(0,hh.length-1)];var cE3=pt.querySelector('[data-uid="'+t3.idx+'"]');if(t3.dgB>0&&Math.random()<0.75){log('💨 Дым спасает: '+t3.def.n+' уклонился!','#7cff9b');return;}if(!hitQ(82,t3.dd)){log(e.n+' промахнулся');return;}var d3=enemyDmg(e,Math.round(e.atk+rnd(-2,3)));t3.hp-=d3;if(cE3){if(window.animateShake)window.animateShake(cE3);fl(cE3,'−'+d3,'#dd4e60');var c3b=cc(cE3);burst(c3b.x,c3b.y,{count:8,color:'#dd4e60',speed:3});}sfx('hit');log(e.n+' → '+t3.def.n+': −'+d3,e.boss?'#e8c060':'#dd4e60');if(t3.hp<=0){t3.hp=0;log('✖ '+t3.def.n+' пал','#dd4e60');}});st.party.forEach(function(p){if(p.dgB>0)p.dgB--;if(p.reyDmg>0)p.reyDmg--;if(p.crB>0)p.crB--;if(p.skCd>0)p.skCd--;if(p.reyCd>0)p.reyCd--;if(p.virCd>0)p.virCd--;if(p.hp>0)p.act=false;});
st.en.forEach(function(e){if(e.virus>0)e.virus--;if(e.vuln>0)e.vuln--;});busy=false;if(lose())return;rd();}

function lose(){if(st.party.every(function(h){fixHp(h);return h.hp<=0;})){st.over=true;mX();rs.textContent='✖ Отряд уничтожен';rs.classList.remove('hidden');log('ПОРАЖЕНИЕ. Прогресс сохранён.','#dd4e60');pr();rd();return true;}return false;}

if($('vrpg3-btnReset'))$('vrpg3-btnReset').onclick=function(){nb(true);};
if($('vrpg3-btnWipe'))$('vrpg3-btnWipe').onclick=function(){if(!confirm('Сбросить прогресс?'))return;sv={levels:[1,1,1,1],xp:[0,0,0,0],maxWave:1};pr();mX();__gxGuestsSinceGriffin=0;nb(false);};
nb(true);
} /* end if(wv) */


/* ========== МУЗЫКА: 3 трека, последовательное чередование ========== */
(function(){
if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
try{if(window.gxBackgroundAudio&&window.gxBackgroundAudio.el){try{window.gxBackgroundAudio.el.pause();}catch(e){}}}catch(e){}
var TRACKS=['https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/Elaerin-Kosetsu-Prolog-_%CE%B1_.mp3','https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/Grey%20Empire%20%5BChronicles%5D%20Ost%20mein%20menu.mp3','https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/Grey%20Empire%20%5BChronicles%5D%20Ost%20mein%20menu%20(2).mp3'];
var TKI=0;
try{TKI=(parseInt(localStorage.getItem('gx_track_idx')||'0',10)||0)%TRACKS.length;localStorage.setItem('gx_track_idx',String((TKI+1)%TRACKS.length));}catch(e){TKI=0;}
var a=new Audio(TRACKS[TKI]);
a.loop=true;a.volume=0.35;a.preload='auto';
window.gxBackgroundAudio={el:a,baseVolume:0.35,duckTo:function(v){a.volume=v;},restore:function(){a.volume=this.baseVolume;}};
var on=false;
var b=document.getElementById('gx-sound-toggle');
if(!b){
  b=document.createElement('button');
  b.id='gx-sound-toggle';
  b.setAttribute('aria-label','Звук вкл/выкл');
  b.textContent='🔇';
  b.style.cssText='position:fixed;bottom:20px;right:20px;z-index:99990;width:48px;height:48px;border-radius:50%;border:2px solid #e8c060;background:rgba(0,0,0,.8);color:#e8c060;font-size:22px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 0 14px rgba(232,192,96,.45);transition:transform .15s;';
  document.body.appendChild(b);
}
function r(){b.textContent=on?'🔊':'🔇';b.classList.toggle('on',on);}
r();
b.onclick=function(e){e.stopPropagation();on=!on;window.gxSoundMuted=!on;if(on)a.play().catch(function(){});else a.pause();r();};
function unlock(){if(on)return;on=true;window.gxSoundMuted=false;a.play().catch(function(){});r();}
document.addEventListener('click',unlock,{once:true});
document.addEventListener('pointerdown',unlock,{once:true});
document.addEventListener('keydown',unlock,{once:true});
var cx=null;function t(){try{if(!cx)cx=new(window.AudioContext||window.webkitAudioContext)();if(cx.state==='suspended')cx.resume();var o=cx.createOscillator(),g=cx.createGain();o.type='sine';o.frequency.value=880;g.gain.setValueAtTime(0.0001,cx.currentTime);g.gain.exponentialRampToValueAtTime(0.03,cx.currentTime+0.01);g.gain.exponentialRampToValueAtTime(0.0001,cx.currentTime+0.12);o.connect(g);g.connect(cx.destination);o.start();o.stop(cx.currentTime+0.14);}catch(e){}}
document.addEventListener('mouseover',function(e){if(!on)return;if(e.target.closest('a, button'))t();});
})();


/* ========== ПОПАПЫ ПЕРСОНАЖЕЙ ========== */
(function(){
if(window.__GX_POP)return;
window.__GX_POP=true;
var B64=(window.GX&&window.GX.B64)||'https://verstka-sites.s3.cloud.ru/assets/2952/';
var SWAP=[['upload_8c031b23d67649238457645e20ec2c39','upload_54691077664841278e76a37f596d32a4'],['upload_6f039d5415e34c3eaeaa619ea0eab764','upload_19dc1f6d63fa4de4bbb388795b5f3a0f'],['upload_eefa4dbd38fc48079c75b1c91712b0c3','upload_1ebccbc0ef3249508b98746eef0391dc'],['upload_2a74b6dd02504bcbb51a86b587c95a0a','upload_b3b52365c3844d17b3eef615c4bed8e5']];
var AL=['Я жила столько лет в голове, а по факту мне нет и месяца...','Первый раз ела настоящую еду. Тело запомнило, а я — нет. Странное чувство.','Сон — это то, о чём я мечтала, будучи лишь голосом в чужой памяти.','Дождь. Я слышала о нём в записях, но почувствовала только вчера.','Мои воспоминания старше меня самой. Забавно, правда?','Иногда я ловлю себя на том, что не знаю, чьи привычки повторяю — мои или её.','Раньше я существовала как данные. Теперь — как человек. Не уверена, что лучше.','Каждое утро просыпаюсь и заново учусь быть живой.'];
var bags={};
function drawFrom(arr,key){if(!arr||!arr.length)return'';if(!bags[key]||!bags[key].length){bags[key]=arr.slice();for(var i=bags[key].length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=bags[key][i];bags[key][i]=bags[key][j];bags[key][j]=t;}}return bags[key].pop();}

function init(){
var CH=[
{n:"N-04",i:"upload_8c031b23d67649238457645e20ec2c39",l:["Apofis думает, что её стены нерушимы. Мы уже внутри.","Том опять отправил своих псов. Пустая трата подшипников.","Маска треснула — но я всё ещё здесь. Вопреки Apofis.","Меня вывели в пробирке. Эксперимент под номером N-04. Даже имени не дали — только номер.","Клон. Просто клон из чьего-то расчёта. Но сердце бьётся не по формуле.","Я не помню лица матери. Только холодный свет лаборатории и запах стерильности.","Sada... если бы ты была рядом, всё было бы иначе.","Мне не хватает Сады. Её голос заглушал этот пустой шум внутри.","Иногда я смотрю на людей и не понимаю, каково это — быть настоящим.","Сада ждёт меня. Я чувствую это. Я должен вернуться.","(шёпотом) Original... я помню, с чего всё началось...","Империя не забывает долги. Особенно Тому."]},
{n:"Alisa",i:"upload_6f039d5415e34c3eaeaa619ea0eab764",l:["Apofis ведёт учёт каждого нашего шага. Пусть считает — это их последняя отчётность.","Том подписал ещё один приказ на зачистку. Бумажная крыса со штампом вместо совести.","Я видела планы Apofis. Им не место в этом мире.","Держитесь. Мы дойдём до ядра корпорации.","(шёпотом) Original... если ты слышишь — мы почти у цели...","(шёпотом) Про Original не должен знать даже Том. Особенно Том.","Отряд цел. Моя заслуга — и наша общая победа над Apofis."]},
{n:"Crysta",i:"upload_eefa4dbd38fc48079c75b1c91712b0c3",l:["N-04… я помню тебя другим. Но и таким — ты бьёшься за всех.","Старые файлы всплыли. Прости за то, что я тогда промолчала.","Alisa держит меня на ногах. Ей я даже улыбаюсь.","Тот, кто крадётся в тенях рядом… я тебя не знаю. И это тревожит меня.","Серверы Apofis видели меня. Я не оставила свидетелей.","Том думает, что камеры — его глаза. Я выколола их все.","Хрусталь острее стали. Спроси у людей Тома.","(шёпотом) Original... ты был прав насчёт корпорации...","(шёпотом) Имя Original — наш последний козырь. Тише.","Не задерживайся. Apofis не любит гостей."]},
{n:"Sky",i:"upload_2a74b6dd02504bcbb51a86b587c95a0a",l:["Контракт закрыт. Имя клиента — в архив.","Я беру плату за тишину после выстрела. Она всегда наступает.","Наёмник без имени. Apofis ищет меня в своих файлах — пусть ищет.","Цель — это просто договор. Чувства не входят в оплату.","Я работаю там, куда не сунутся даже тени Apofis.","Стрелок делает очередь. Убийца делает работу.","Оплата вперёд. Тело потом. Таков мой порядок.","Меня наняли ликвидировать империю. Я почти закончил."]}];

if(!document.getElementById('gx-pop-css')){
  var s=document.createElement('style');s.id='gx-pop-css';
  s.textContent='#character-popup{position:fixed;bottom:30px;left:30px;z-index:99980;display:flex;align-items:flex-end;gap:12px;opacity:0;pointer-events:none;transition:opacity .45s ease;max-width:92vw}#character-popup.show{opacity:1;pointer-events:auto}.char-bubble{background:rgba(8,8,8,.93);border:1px solid #e8c060;color:#eee;padding:12px 16px;border-radius:12px;font-size:14px;line-height:1.45;max-width:270px;box-shadow:0 6px 24px rgba(0,0,0,.55)}.char-image{width:88px;height:108px;background-size:cover;background-position:top center;border-radius:10px;border:2px solid #e8c060;box-shadow:0 0 16px rgba(232,192,96,.35);flex-shrink:0}';
  document.head.appendChild(s);
}

var cur=0;
var pop=document.createElement('div');
pop.id='character-popup';
pop.innerHTML='<div class="char-bubble" id="charBubble">...</div><div class="char-image" id="charImage"></div>';
document.body.appendChild(pop);

function show(){
  var ch=CH[cur],ci=document.getElementById('charImage'),cb=document.getElementById('charBubble');
  if(!ci||!cb)return;
  var img=B64+ch.i+'.webp';
  for(var k=0;k<SWAP.length;k++){if(ch.i===SWAP[k][0]){img=B64+SWAP[k][1]+'.webp';break;}}
  var line;
  if(ch.n==='Alisa')line=Math.random()<0.5?drawFrom(AL,'al'):ch.l[Math.floor(Math.random()*ch.l.length)];
  else line=ch.l[Math.floor(Math.random()*ch.l.length)];
  cb.textContent=line;
  ci.style.backgroundImage="url('"+img+"')";
  pop.classList.add('show');
  setTimeout(function(){pop.classList.remove('show');},6500);
  cur=(cur+1)%CH.length;
}
setTimeout(show,5500);
setInterval(show,48000);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();


/* ========== GRIFFIN ========== */
(function(){
if(window.GriffinClass)return;
var GVO=(window.GX&&window.GX.GVO)||'https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/%D0%93%D1%80%D0%B8%D1%84%D0%B8%D0%BD%20(mp3cut.net).mp3';
window.GriffinClass={
  vo:GVO,au:null,
  say:function(vol){try{if(!this.au){this.au=new Audio(this.vo);this.au.volume=vol||0.6;this.au.preload='auto';this.au.load();}var self=this,n=0;function go(){n++;self.au.currentTime=0;var p=self.au.play();if(p&&p.catch)p.catch(function(){if(n<3)document.addEventListener('pointerdown',go,{once:true});});}go();}catch(e){}},
  cross:function(){var o=document.createElement('div');o.id='grOv';var b=document.createElement('div');b.className='bx';b.innerHTML='<div class="b1"></div><div class="b2"></div>';o.appendChild(b);for(var i=0;i<26;i++){var d=document.createElement('div');d.className='dst';var a=Math.random()*Math.PI*2,r=90+Math.random()*160;d.style.setProperty('--dx',Math.cos(a)*r+'px');d.style.setProperty('--dy',Math.sin(a)*r+'px');d.style.animationDelay=(0.7+Math.random()*0.6)+'s';b.appendChild(d);}document.body.appendChild(o);setTimeout(function(){o.remove();},2400);}
};
})();


/* ========== DOOR BREAKER ========== */
(function(){
if(window.__GX_DB)return;
window.__GX_DB=true;

function startDB(){
  var cv=document.getElementById('game');
  if(!cv)return;

  var g=cv.getContext('2d');
  var ss=document.getElementById('startScreen');
  var sc=document.getElementById('score');
  var ll=document.getElementById('leadersList');
  if(!ss||!sc)return;

  var st=false,ov=false,score=0,sp=6,fr=0,ns=80;
  var P={x:80,y:290,w:50,h:70,dy:0,j:false,c:false,k:false,kt:0,gr:0.72,jf:-17.5};
  var ds=[],ps=[],keys={};
  var sp2=new Image();
  sp2.src=((window.GX&&window.GX.B64)||'https://verstka-sites.s3.cloud.ru/assets/2952/')+'upload_85ac1105f1c749a09ff339c82d14041b.webp';
  var ba=window.gxBackgroundAudio||null;
  var gm=new Audio();gm.src='https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/Zero%20episode.mp3';gm.loop=true;gm.volume=0.4;
  function duck(){if(ba)ba.duckTo(0.08);gm.play().catch(function(){});}
  function rest(){if(ba)ba.restore();gm.pause();gm.currentTime=0;}

  var ac=null;function A(){if(!ac){try{ac=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}}return ac;}
  function snd(t){var a=A();if(!a)return;if(a.state==='suspended')a.resume();var o=a.createOscillator(),gn=a.createGain();o.connect(gn);gn.connect(a.destination);
  if(t==='jump'){o.type='square';o.frequency.setValueAtTime(300,a.currentTime);o.frequency.exponentialRampToValueAtTime(140,a.currentTime+0.12);gn.gain.setValueAtTime(0.12,a.currentTime);gn.gain.exponentialRampToValueAtTime(0.01,a.currentTime+0.12);o.start();o.stop(a.currentTime+0.12);}
  if(t==='kick'){o.type='sawtooth';o.frequency.setValueAtTime(100,a.currentTime);o.frequency.exponentialRampToValueAtTime(40,a.currentTime+0.18);gn.gain.setValueAtTime(0.2,a.currentTime);gn.gain.exponentialRampToValueAtTime(0.01,a.currentTime+0.18);o.start();o.stop(a.currentTime+0.18);}
  if(t==='break'){var n=a.sampleRate*0.25,buf=a.createBuffer(1,n,a.sampleRate),d=buf.getChannelData(0);for(var i=0;i<n;i++)d[i]=(Math.random()*2-1)*(1-i/n);var s=a.createBufferSource();s.buffer=buf;var ng=a.createGain();s.connect(ng);ng.connect(a.destination);ng.gain.setValueAtTime(0.28,a.currentTime);ng.gain.exponentialRampToValueAtTime(0.01,a.currentTime+0.25);s.start();}
  if(t==='hit'){o.type='sawtooth';o.frequency.setValueAtTime(70,a.currentTime);o.frequency.exponentialRampToValueAtTime(25,a.currentTime+0.35);gn.gain.setValueAtTime(0.25,a.currentTime);gn.gain.exponentialRampToValueAtTime(0.01,a.currentTime+0.35);o.start();o.stop(a.currentTime+0.35);}}

  var BIN='6ab4252dac6210605aee29c9',KEY='$2a$10$7ZoTk/UmrtGsU6koso/u0ebOyRKk9rBDuefKQV2auxykZw5SHQzCS',LK='n04_leaders';
  function esc(s){return String(s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function loc(){try{return JSON.parse(localStorage.getItem(LK)||'[]');}catch(e){return[];}}
  function tbl(L){if(!ll)return;if(!L||!L.length){ll.innerHTML='Пока пусто';return;}var h='';for(var i=0;i<Math.min(10,L.length);i++)h+=(i+1)+'. '+esc(L[i].name)+' — '+L[i].score+'<br>';ll.innerHTML=h;}
  function loadL(){tbl(loc());fetch('https://api.jsonbin.io/v3/b/'+BIN+'/latest',{headers:{'X-Master-Key':KEY}}).then(function(r){return r.json();}).then(function(d){tbl(d.record&&d.record.doors?d.record.doors:(d.record||[]));}).catch(function(){});}
  function saveS(f){var nm=prompt('Введи имя для глобального рейтинга:','Игрок')||'Игрок';nm=nm.substring(0,20);var L=loc();L.push({name:nm,score:f});L.sort(function(a,b){return b.score-a.score;});L=L.slice(0,10);try{localStorage.setItem(LK,JSON.stringify(L));}catch(e){}
  fetch('https://api.jsonbin.io/v3/b/'+BIN+'/latest',{headers:{'X-Master-Key':KEY}}).then(function(r){return r.json();}).then(function(d){
  var rec=d.record||{};if(typeof rec==='string')rec={};
  if(!rec.doors)rec.doors=[];
  rec.doors.push({name:nm,score:f});
  rec.doors.sort(function(a,b){return b.score-a.score;});
  rec.doors=rec.doors.slice(0,10);
  return fetch('https://api.jsonbin.io/v3/b/'+BIN,{method:'PUT',headers:{'Content-Type':'application/json','X-Master-Key':KEY},body:JSON.stringify(rec)});}).then(function(){loadL();}).catch(function(){loadL();});}

  function jump(){if(!P.j&&!P.c){P.dy=P.jf;P.j=true;snd('jump');}}
  function kick(){if(!P.k){P.k=true;P.kt=14;snd('kick');}}
  document.addEventListener('keydown',function(e){keys[e.code]=true;if(st&&!ov&&(e.code==='ArrowUp'||e.code==='ArrowDown'))e.preventDefault();
  if(e.code==='ArrowUp'||e.code==='Space'){if(!st){go();snd('jump');}else if(ov){rs2();}else if(!P.j&&!P.c)jump();}
  if(st&&!ov&&e.code==='KeyF'&&!P.k)kick();});
  document.addEventListener('keyup',function(e){keys[e.code]=false;});

  function bind(id,dn,up){var el=document.getElementById(id);if(!el)return;el.addEventListener('touchstart',function(e){e.preventDefault();dn();},{passive:false});el.addEventListener('touchend',function(e){e.preventDefault();if(up)up();},{passive:false});el.addEventListener('mousedown',function(e){e.preventDefault();dn();});el.addEventListener('mouseup',function(e){e.preventDefault();if(up)up();});el.addEventListener('click',function(e){e.preventDefault();dn();});}
  function soj(){if(!st){go();snd('jump');}else if(ov){rs2();}else jump();}
  bind('gx-btn-up',soj);bind('gx-btn-down',function(){keys['ArrowDown']=true;},function(){keys['ArrowDown']=false;});bind('gx-btn-kick',function(){if(st&&!ov)kick();});bind('gx-btn-start',soj);

  function go(){st=true;ss.classList.add('gx-hidden');duck();}
  function rs2(){ov=false;score=0;sp=6;fr=0;ns=80;ds=[];ps=[];P.y=290;P.dy=0;P.j=P.c=P.k=false;sc.textContent='0';ss.classList.add('gx-hidden');ss.querySelector('.start-text').textContent='Нажми СТРЕЛКУ ВВЕРХ';duck();}
  function spawn(){var h=150+Math.random()*100;ds.push({x:cv.width,y:cv.height-h-40,w:50,h:h,b:false});}
  function cps(x,y){for(var i=0;i<16;i++)ps.push({x:x,y:y,vx:(Math.random()-0.5)*10,vy:(Math.random()-0.5)*10,l:40});}
  function up(){if(!st||ov)return;fr++;score++;sc.textContent=Math.floor(score/5);if(fr%380===0)sp+=0.3;P.dy+=P.gr;P.y+=P.dy;if(P.y>290){P.y=290;P.dy=0;P.j=false;}P.c=keys['ArrowDown']&&!P.j;if(P.k){P.kt--;if(P.kt<=0)P.k=false;}
  if(--ns<=0){spawn();var sh=Math.min(1,fr/3600),b=100-45*sh,s2=60-45*sh;ns=Math.floor(b-s2/2+Math.random()*s2);}
  for(var i=ds.length-1;i>=0;i--){var d=ds[i];d.x-=sp;
  if(P.k&&!d.b&&P.x+P.w>d.x&&P.x<d.x+d.w&&P.y+70>d.y){d.b=true;cps(d.x+25,d.y+60);score+=80;snd('break');}
  if(!d.b){var ph2=P.c?42:70,py=P.c?P.y+28:P.y;
  if(P.x+45>d.x+6&&P.x<d.x+d.w-6&&py+ph2>d.y&&py<d.y+d.h){ov=true;snd('hit');var f=Math.floor(score/5);saveS(f);rest();ss.classList.remove('gx-hidden');ss.querySelector('.start-text').textContent='ИГРА ОКОНЧЕНА — '+f+' очков. Нажми СТРЕЛКУ ВВЕРХ';}}
  if(d.x+d.w<0)ds.splice(i,1);}
  for(var j=ps.length-1;j>=0;j--){var p=ps[j];p.x+=p.vx;p.y+=p.vy;p.l--;if(p.l<=0)ps.splice(j,1);}}
  function draw(){g.clearRect(0,0,cv.width,cv.height);g.fillStyle='#1a1a1a';g.fillRect(0,360,cv.width,40);g.strokeStyle='#c41e3a';g.lineWidth=2;g.beginPath();g.moveTo(0,360);g.lineTo(cv.width,360);g.stroke();
  var h=P.c?42:70,y=P.c?P.y+28:P.y;
  if(sp2.complete&&sp2.naturalWidth>0){g.save();if(P.k){g.translate(P.x+30,y+h);g.rotate(0.22);g.drawImage(sp2,-32,-h-20,62,h+20);}else if(P.c){g.drawImage(sp2,P.x-6,y-16,62,h+16);}else{var bb=Math.sin(fr*0.15)*2;g.drawImage(sp2,P.x-6,y+bb-18,62,h+18);}g.restore();}
  else{g.fillStyle=P.k?'#ff4d6d':'#e0e0e0';g.fillRect(P.x,y,50,h);g.fillStyle='#c41e3a';g.fillRect(P.x+32,y+12,8,8);}
  ds.forEach(function(d){if(!d.b){g.fillStyle='#2c2c2c';g.fillRect(d.x,d.y,d.w,d.h);g.fillStyle='#c41e3a';g.fillRect(d.x+12,d.y+30,14,14);}});
  ps.forEach(function(p){g.fillStyle='rgba(196,30,58,'+(p.l/45)+')';g.fillRect(p.x,p.y,4,4);});}
  function loop(){up();draw();requestAnimationFrame(loop);}
  loadL();loop();
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',startDB);
}else{
  startDB();
}
})();

})(); /* end main */
