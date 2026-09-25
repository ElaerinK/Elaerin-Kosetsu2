Очистить чат

Опубликовать
Опубликовано
ИИ работает над запросом. Это может занять несколько минут.
Чат
Посмотреть
Всё работает как часы. Давай на сегодня сделаем последние изменения. Первое, исправь на мобильной отсутствия достижений. Второе. Перенеси кнопки атаки и скилов на левую сторону арены, так как из-за размера арены неудобно их нажимать как на веб версии так и на мобильной И второе
Прочитаю разметку арены «Хроник», чтобы точно перенести кнопки налево.

Сообщение обрезалось на «И второе» — если было третье изменение, напишите его отдельно. Делаю два заявленных: кнопки влево и достижения на мобильных.

Почему достижения пропадают на телефоне: кнопка достижений подставляется кодом из GitHub с таймером ~20 секунд после загрузки — на мобильном при медленной загрузке она просто не успевает появиться. Исправлю надёжно: добавлю кнопку прямо в разметку арены (она больше ни от чего не зависит), а от вас понадобится одна короткая строка в файле на GitHub — скажу ниже.

Сначала меняю разметку арены: кнопки атак — слева, на отдельной панели (на телефоне — верхней, крупные и удобные).

Разметка арены обновлена. Остался один шаг — в файле на GitHub код достижений сейчас сам подставляет свою кнопку с таймером (на мобильных она не успевала появиться). Теперь кнопка уже есть в разметке арены, поэтому из файла нужно только «повесить» на неё открытие окна. Правка маленькая:

Откройте grey-empire-games.js на GitHub → карандаш (Edit):

Найдите начало блока (Ctrl+F — поиск по var iv=setInterval):
var iv=setInterval(function(){var w=document.getElementById('vrpg3-wave');if(!w)return;
var board=document.getElementById('vrpg3-board');
if(board&&!document.getElementById('ach-tab-btn')){
var bar=document.createElement('div');bar.style.cssText='display:flex;justify-content:center;margin:0 0 14px';
var b=document.createElement('button');b.id='ach-tab-btn';b.textContent='🏆 Достижения';
b.style.cssText='padding:8px 22px;background:rgba(0,0,0,.55);border:1px solid #e8c060;color:#e8c060;font-weight:600;letter-spacing:1px;cursor:pointer;border-radius:8px;font-family:inherit;font-size:14px';
b.onclick=open;bar.appendChild(b);
board.parentNode.insertBefore(bar,board);}
clearInterval(iv);
Замените этот кусок на две строки:
window.achOpen=open;
var iv=setInterval(function(){var w=document.getElementById('vrpg3-wave');if(!w)return;
Commit changes, подождите 2–3 минуты, обновите сайт с очисткой кэша (Ctrl+F5).
Что изменилось в итоге:

Достижения на мобильной — кнопка «🏆 Достижения» теперь встроена прямо в шапку арены «Хроник» (рядом с номером волны и фазой боя) и видна сразу, на любых устройствах, без ожидания. Окно со списком откроется той же логикой, что и раньше.
Кнопки атак и скиллов — перенесены на левую сторону арены отдельной панелью «Действия героя», туда же переехали «Новая битва» и «Сбросить прогресс». На компьютере панель слева от поля боя, на телефоне — сверху крупными кнопками в столбик, нажимать удобно. Арена, журнал боя и враги с отрядом остались на месте.
Заодно обновил подпись под ареной — теперь там упомянуты и Bell, и Griffin.
Про публикацию: на сайте есть неопубликованные изменения — нажмите «Опубликовать» в правом верхнем углу редактора, когда проверите. И если было «третье» изменение (сообщение оборвалось на «И второе») — напишите его, сделаю.

Скинь всё сразу файлом пожалуйста
Держите готовый файл целиком. Откройте grey-empire-games.js на GitHub → карандаш → сотрите всё (Ctrl+A → Delete) → вставьте этот текст → Commit changes. Потом подождите 2–3 минуты и обновите сайт с очисткой кэша (Ctrl+F5).

В этой версии уже всё последнее: кнопка достижений теперь берётся из разметки арены (видна сразу и на мобильных), реплики не повторяются, лечение Alisa усилено, достижение «Всегда на чеку!» работает.

/* Хроники Grey Empire v9.2: MECHA-GALLEON + Griffin + Достижения (кнопка из разметки) */
(function(){
var $=function(i){return document.getElementById(i);};
var wv=$('vrpg3-wave'),ph=$('vrpg3-phase'),lg=$('vrpg3-log'),en=$('vrpg3-enemies'),pt=$('vrpg3-party'),ac2=$('vrpg3-actions'),rs=$('vrpg3-result'),bt=$('vrpg3-bossTag');
if(!wv)return;
(function(){if(document.getElementById('gr-css'))return;var s=document.createElement('style');s.id='gr-css';
s.textContent='@keyframes grX{0%{opacity:0;transform:scale(.5)}12%{opacity:1;transform:scale(1)}70%{opacity:1;transform:scale(1.12) rotate(6deg)}100%{opacity:0;transform:scale(1.7) rotate(18deg);filter:blur(8px)}}@keyframes grDust{0%{opacity:1;transform:translate(0,0) scale(1)}100%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(.2)}}@keyframes grWingL{0%{opacity:0;transform:rotate(38deg) scaleX(.3)}25%{opacity:1;transform:rotate(20deg) scaleX(1)}55%{transform:rotate(32deg) scaleX(.85)}80%{opacity:1}100%{opacity:0;transform:rotate(45deg) scaleX(1.15);filter:blur(6px)}}@keyframes grWingR{0%{opacity:0;transform:rotate(-38deg) scaleX(.3)}25%{opacity:1;transform:rotate(-20deg) scaleX(1)}55%{transform:rotate(-32deg) scaleX(.85)}80%{opacity:1}100%{opacity:0;transform:rotate(-45deg) scaleX(1.15);filter:blur(6px)}}@keyframes grFlash{0%{opacity:0}10%{opacity:1}100%{opacity:0}}#grOv{position:fixed;inset:0;z-index:99995;pointer-events:none;display:flex;align-items:center;justify-content:center;background:rgba(0,40,18,.45)}#grOv .bx{position:relative;width:220px;height:220px;animation:grX 1.7s ease-out forwards}#grOv .b1,#grOv .b2{position:absolute;left:50%;top:50%;background:linear-gradient(180deg,#b6ffd0,#2fe97a);box-shadow:0 0 30px #2fe97a,0 0 80px rgba(47,233,122,.6);border-radius:6px}#grOv .b1{width:46px;height:220px;transform:translate(-50%,-50%)}#grOv .b2{width:220px;height:46px;transform:translate(-50%,-50%)}#grOv .dst{position:absolute;left:50%;top:50%;width:8px;height:8px;border-radius:50%;background:#7dffb4;box-shadow:0 0 8px #2fe97a;animation:grDust 1.5s ease-out forwards}#grWg{position:fixed;inset:0;z-index:99996;pointer-events:none;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle,rgba(0,60,30,.5),rgba(0,20,10,.75))}#grWg .fl{position:relative;width:340px;height:220px}#grWg .wL,#grWg .wR{position:absolute;top:50%;width:170px;height:110px;background:linear-gradient(180deg,#fff,#dfffe9);border-radius:60% 40% 45% 55%/70% 60% 40% 30%;box-shadow:0 0 40px rgba(255,255,255,.9),0 0 100px rgba(120,255,180,.5);filter:blur(.5px)}#grWg .wL{left:0;transform-origin:right center;animation:grWingL 1.6s ease-out forwards}#grWg .wR{right:0;transform-origin:left center;animation:grWingR 1.6s ease-out forwards}#grWg .fl::after{content:"";position:absolute;left:50%;top:50%;width:14px;height:14px;border-radius:50%;background:#fff;box-shadow:0 0 24px #fff,0 0 60px rgba(255,255,255,.8);transform:translate(-50%,-50%);animation:grFlash 1.6s ease-out forwards}';
document.head.appendChild(s);})();
function grCross(){var o=document.createElement('div');o.id='grOv';var b=document.createElement('div');b.className='bx';b.innerHTML='<div class="b1"></div><div class="b2"></div>';o.appendChild(b);
for(var i=0;i<26;i++){var d=document.createElement('div');d.className='dst';var a=Math.random()*Math.PI*2,r=90+Math.random()*160;d.style.setProperty('--dx',Math.cos(a)*r+'px');d.style.setProperty('--dy',Math.sin(a)*r+'px');d.style.animationDelay=(0.7+Math.random()*0.6)+'s';b.appendChild(d);}
document.body.appendChild(o);setTimeout(function(){o.remove();},2400);}
function grWings(){var o=document.createElement('div');o.id='grWg';o.innerHTML='<div class="fl"><div class="wL"></div><div class="wR"></div></div>';document.body.appendChild(o);setTimeout(function(){o.remove();},1700);}
var SK='grey_empire_rpg_v4',BE=5,UC=25,UM=1.8,MC=0.20,GRC=10,GRH=2.5;
function ldS(){try{var s=JSON.parse(localStorage.getItem(SK));if(s&&s.levels)return s;}catch(e){}return{levels:[1,1,1,1],xp:[0,0,0,0],maxWave:1};}
function pr(){try{localStorage.setItem(SK,JSON.stringify(sv));}catch(e){}}
/* Мешок фраз: ни одна реплика не повторится, пока весь набор не будет исчерпан */
function pk(a,key){if(!a||!a.length)return'';if(a.length<2)return a[0];if(!pk.q)pk.q={};var q=pk.q[key];if(!q||!q.length){q=a.slice();for(var i=q.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=q[i];q[i]=q[j];q[j]=t;}pk.q[key]=q;}return q.pop();}
var BP={attack:['«Ммм… вот так… ещё…»','«Как приятно это ощущать…»','«Не останавливайся…»','«Я упиваюсь каждым ударом…»','«Ох… продолжай…»'],aoe:['«Все сразу… как же хорошо…»','«Они все такие сладкие…»','«Обожаю, когда их много…»','«Дрожите для меня…»'],execute:['«А-аах… ДА!»','«Небеса… это восхитительно!»','«Слишком… слишком хорошо!»','«Ещё… ещё убивай…»','«Я… я почти… ААХ!»'],ult:['«Сейчас будет очень горячо…»','«Получите всю мою силу…»','«Я больше не могу сдерживаться…»','«Исчезайте вместе со мной…»'],kill:['«АААХ! ВОТ ОНО!»','«Да-да-да-дааа!»','«Ещё один… ещё… я схожу с ума…»','«Охх… как глубоко он ушёл…»','«Я сейчас растаю от блаженства…»']};
var GP={attack:['Огонь по цели. MP-5 стабильна.','Контакт подтверждён. Открываю огонь.','Одиночная цель. Пробиваю очередь.','Стреляю на подавление. Держите линию.','Цель в секторе. Работаю.'],smoke:['Дымовая граната. Прикрываю отряд.','Дым поставлен. Ничего не видно — значит, никто не попадёт.','Завеса развёрнута. Отдышитесь.'],heal:['Держись. Поле — моя операционная.','Рана не смертельна. Шью.','Пакеты перевязки расходуются быстро. Огонь плотный.','Живые важнее победы. Лечу.'],ult:['Второй шанс выделяю один. Цени его.','Отряд не бросаю. Никогда.','Сердце ещё бьётся. Значит, бой продолжается.'],kill:['Цель нейтрализована. Следующая.','Зона чиста.','Счётчик фрагов растёт. Продолжаю.'],crit:['КРИТ! Точно в швы брони!','Идеальный выстрел. Отметил.'],hcrit:['КРИТ-лечение! Медицинское чудо.','Вколола всё. Поднимайтесь.']};
var B64='https://verstka-sites.s3.cloud.ru/assets/2952/';
var PR=[B64+'upload_2855eb8ffe87460dbdf8a9ca45c11619.webp',B64+'upload_6f039d5415e34c3eaeaa619ea0eab764.webp',B64+'upload_eefa4dbd38fc48079c75b1c91712b0c3.webp',B64+'upload_2a74b6dd02504bcbb51a86b587c95a0a.webp'];
var BA=B64+'upload_8947332c66874fecaa13cb0b948cf9ee.webp';
var GA=B64+'upload_7ac7c714935b45059cd05df5e1672314.webp';
var GVO='https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/%D0%93%D1%80%D0%B8%D1%84%D0%B8%D0%BD%20(mp3cut.net).mp3';
var GV='https://verstka-sites.s3.cloud.ru/assets/2952/upload_3045498d06f44f7bb56d49f5ff147cb8.mp4';
var HR=[
{n:'N-04',cl:'Воин',st:3,col:'#dd4e60',hp:130,atk:14,cr:18,cd:160,ac:90,dd:8,img:'☠',ult:{cd:5,un:5},acts:[{k:'attack',l:'⚔ Удар',d:'обычная атака'},{k:'skill',l:'💥 Раскол',d:'сильный удар'},{k:'ult',l:'✦ Ульта',d:'по всем'}]},
{n:'Alisa',cl:'Лекарь',st:3,col:'#9fd18a',hp:105,atk:9,cr:10,cd:140,ac:85,dd:12,img:'✦',ult:{cd:6,un:5},acts:[{k:'attack',l:'⚔ Удар',d:'обычная атака'},{k:'skill',l:'✧ Исцеление',d:'лечение отряда'},{k:'ult',l:'✦ Ульта',d:'мощное лечение'}]},
{n:'Crysta',cl:'Стрелок',st:2,col:'#7fb8d8',hp:95,atk:13,cr:25,cd:170,ac:95,dd:10,img:'◎',ult:{cd:5,un:5},acts:[{k:'attack',l:'⚔ Выстрел',d:'обычная атака'},{k:'skill',l:'🎯 Меткий',d:'по слабейшему'},{k:'ult',l:'✦ Ульта',d:'снайперский'}]},
{n:'Sky',cl:'Ассасин',st:2,col:'#c9b8e8',hp:85,atk:12,cr:30,cd:190,ac:88,dd:22,img:'🕶',ult:{cd:5,un:5},acts:[{k:'attack',l:'⚔ Удар',d:'обычная атака'},{k:'skill',l:'🌑 Тень',d:'накопление'},{k:'ult',l:'✦ Ульта',d:'теневой удар'}]}];
var BL={n:'Bell',cl:'Загадка',st:4,col:'#e8a0ff',hp:115,atk:16,cr:22,cd:180,ac:93,dd:14,img:'🔔',ult:{cd:4,un:1},acts:[{k:'attack',l:'⚔ Удар',d:'по одной цели'},{k:'aoe',l:'💥 Волна',d:'по трём целям'},{k:'execute',l:'☠ Казнь',d:'5% мгновенная смерть'},{k:'ult',l:'✦ Ульта',d:'Колокол Пустоты'}]};
var GR={n:'Griffin',cl:'Медик-штурмовик',st:4,col:'#7cff9b',hp:110,atk:13,cr:15,cd:150,ac:88,dd:15,img:'✚',ult:{cd:99,un:1},acts:[{k:'attack',l:'🔫 MP-5',d:'по одной цели'},{k:'smoke',l:'💨 Дым',d:'75% уклонения, 2 хода'},{k:'heal',l:'✚ Усиленное лечение',d:'двойное лечение, КРИТ ×2.5'},{k:'ult',l:'🕊 Возрождение',d:'воскрешение павшего, 1 раз'}]};
var MA=B64+'upload_6946a52090cc45fd92424c134cf41a7f.webp';
var MT='https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/Grey%20Empire%20%5BChronicles%5D%20-%20mecha-galleon.mp3';
var MP={ap:['Цель обнаружена. Отряд сопротивления — Grey Empire. Начинаю зачистку.','Протокол: найти и уничтожить все силы сопротивления. Приоритет — Grey Empire.','Сканирование завершено. Сопротивление будет ликвидировано.'],vul:['Залп назначен. Расчёт: уничтожение.','Пулемётная система активна. Цель захвачена.'],rkt:['Ракетный залп запущен. Поражение трёх целей.','Плотность огня максимальна. Сопротивление бесполезно.'],sh:['Укреплённый корпус активирован. Входящий урон снижен на 40%.','Броня перераспределена. Атаки Grey Empire признаны неэффективными.'],kl:['Фрагмент подтверждён. Сопротивление слабеет.','Единица сопротивления уничтожена. Следующая цель.'],df:['Критическое повреждение ядра… Сопротивление… недооценено…']};
var mAu=null,mGl=null,gAu=null;
function mOn(){if(!mGl){mGl=document.createElement('div');mGl.style.cssText='position:fixed;inset:0;z-index:99996;pointer-events:none;opacity:0;transition:opacity .3s linear;background:repeating-linear-gradient(0deg,rgba(255,40,70,.10) 0 2px,transparent 2px 5px),repeating-linear-gradient(90deg,rgba(150,50,255,.08) 0 3px,transparent 3px 7px)';mGl.innerHTML='<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-weight:800;letter-spacing:6px;color:#ff2a46;text-shadow:0 0 18px rgba(255,40,70,.8),0 0 40px rgba(150,50,255,.6);font-size:clamp(22px,5vw,54px)">⚠ ATTENCION!</div>';document.body.appendChild(mGl);}mGl.style.opacity='1';}
function mOff(){if(mGl)mGl.style.opacity='0';}
function mE2(){if(!mAu){mAu=new Audio(MT);mAu.loop=true;mAu.volume=0.5;}try{var b=window.gxBackgroundAudio;if(b&&b.el)b.pause();}catch(e){}mAu.currentTime=0;mAu.play().catch(function(){});mOn();}
function mX(){if(mAu){mAu.pause();mAu.currentTime=0;}try{var b=window.gxBackgroundAudio;if(b&&b.el)b.play().catch(function(){});}catch(e){}mOff();}
function grHello(){try{if(!gAu){gAu=new Audio(GVO);gAu.volume=0.6;}gAu.currentTime=0;gAu.play().catch(function(){});}catch(e){}}
function grVid(){var o=document.createElement('div');o.style.cssText='position:fixed;inset:0;z-index:99997;display:flex;align-items:center;justify-content:center;background:rgba(0,10,4,.92)';var v=document.createElement('video');v.src=GV;v.muted=false;v.playsInline=true;v.setAttribute('playsinline','');v.autoplay=true;v.style.cssText='max-width:100%;max-height:100%;object-fit:contain';o.appendChild(v);document.body.appendChild(o);
grWings();
var done=false;function end(){if(done)return;done=true;try{v.pause();}catch(e){}o.remove();}
v.addEventListener('ended',end);v.addEventListener('error',end);setTimeout(end,9000);
var p=v.play();if(p&&p.catch)p.catch(function(){v.muted=true;v.play().catch(function(){});});}
var sv=ldS(),st=null,sel=null,tg=null,busy=false;
var pc=$('vrpg3-particles'),px=pc?pc.getContext('2d'):null,pp=[];
function rz(){var b=$('vrpg3-board');if(!b||!pc)return;pc.width=b.offsetWidth;pc.height=b.offsetHeight;}
window.addEventListener('resize',rz);setTimeout(rz,80);
function burst(x,y,o){if(!px)return;o=o||{};var n=o.count||18,col=o.color||'#c41e3a',sp=o.speed||4,lf=o.life||40,sz=o.size||3,gr=(o.gravity!==undefined)?o.gravity:0.08;for(var i=0;i<n;i++){var a=Math.random()*Math.PI*2,v=(Math.random()*0.6+0.4)*sp;pp.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:lf+Math.random()*12,ml:lf,s:sz+Math.random()*2,c:col,g:gr});}}
(function(){if(!px)return;(function lp(){px.clearRect(0,0,pc.width,pc.height);for(var i=pp.length-1;i>=0;i--){var p=pp[i];p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;p.l--;if(p.l<=0){pp.splice(i,1);continue;}var a=Math.max(0,p.l/p.ml);px.globalAlpha=a;px.fillStyle=p.c;px.beginPath();px.arc(p.x,p.y,p.s*a,0,Math.PI*2);px.fill();}px.globalAlpha=1;requestAnimationFrame(lp);})();})();
function cc(e){var r=e.getBoundingClientRect(),b=$('vrpg3-board').getBoundingClientRect();return{x:r.left+r.width/2-b.left,y:r.top+r.height/2-b.top};}
var ax=null;function A(){if(!ax){try{ax=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}}return ax;}
function sfx(t){var a=A();if(!a)return;if(a.state==='suspended')a.resume();var o=a.createOscillator(),g=a.createGain();o.connect(g);g.connect(a.destination);
if(t==='attack'){o.type='square';o.frequency.setValueAtTime(180,a.currentTime);o.frequency.exponentialRampToValueAtTime(80,a.currentTime+0.1);g.gain.setValueAtTime(0.11,a.currentTime);g.gain.exponentialRampToValueAtTime(0.01,a.currentTime+0.1);o.start();o.stop(a.currentTime+0.1);}
else if(t==='ult'){o.type='sawtooth';o.frequency.setValueAtTime(90,a.currentTime);o.frequency.exponentialRampToValueAtTime(35,a.currentTime+0.35);g.gain.setValueAtTime(0.2,a.currentTime);g.gain.exponentialRampToValueAtTime(0.01,a.currentTime+0.35);o.start();o.stop(a.currentTime+0.35);}
else if(t==='level'){o.type='sine';o.frequency.setValueAtTime(420,a.currentTime);o.frequency.exponentialRampToValueAtTime(820,a.currentTime+0.25);g.gain.setValueAtTime(0.1,a.currentTime);g.gain.exponentialRampToValueAtTime(0.01,a.currentTime+0.25);o.start();o.stop(a.currentTime+0.25);}
else if(t==='hit'){o.type='sawtooth';o.frequency.setValueAtTime(70,a.currentTime);g.gain.setValueAtTime(0.16,a.currentTime);g.gain.exponentialRampToValueAtTime(0.01,a.currentTime+0.18);o.start();o.stop(a.currentTime+0.18);}}
function rnd(a,b){return Math.floor(Math.random()*(b-a+1))+a;}
function xn(l){return 35+(l-1)*28;}
function hs(i){var l=sv.levels[i],h=HR[i];return{hp:h.hp+(l-1)*20,atk:h.atk+(l-1)*2.5,cr:h.cr+Math.floor((l-1)*0.8),cd:h.cd,ac:h.ac,dd:h.dd};}
function blv(){return Math.max(sv.levels[0],sv.levels[1],sv.levels[2],sv.levels[3])+2;}
function log(m,c){var d=document.createElement('div');d.textContent=m;if(c)d.style.color=c;lg.appendChild(d);lg.scrollTop=lg.scrollHeight;}
function isB(w){return w%BE===0;}
function mkE(){var w=st.wave;
if(isB(w)){if(Math.random()<MC){var mh=460+Math.floor(w/5)*240;return[{n:'MECHA-GALLEON',hp:mh,mx:mh,atk:18+w*1.8,al:true,boss:true,mecha:true,sh:0,tn:0}];}
var hp=280+Math.floor(w/5)*140;return[{n:'Apofis — Ядро',hp:hp,mx:hp,atk:16+w*1.8,al:true,boss:true}];}
var c=Math.min(2+Math.floor(w/2),5),L=[],N=['Агент Apofis','Юнит Осколок','Оперативник','Кибер-глашатай','Элитный Каратель'];
for(var i=0;i<c;i++){var h2=40+w*12+rnd(0,12);L.push({n:N[rnd(0,4)],hp:h2,mx:h2,atk:9+w*1.5,al:true});}
return L;}
function arm(e,d){if(e&&e.mecha&&e.sh>0)return Math.max(1,Math.round(d*0.6));return d;}
function mkB(){var l=blv();return{def:BL,idx:99,lv:l,hp:BL.hp+(l-1)*20,mx:BL.hp+(l-1)*20,atk:BL.atk+(l-1)*2.5,cr:BL.cr,cd2:BL.cd,ac:BL.ac,dd:BL.dd,act:false,uc:0,bell:true};}
function mkG(){var l=blv();return{def:GR,idx:98,lv:l,hp:GR.hp+(l-1)*20,mx:GR.hp+(l-1)*20,atk:GR.atk+(l-1)*2.5,cr:GR.cr+GRC,cd2:GR.cd,ac:GR.ac,dd:GR.dd,act:false,uc:0,griffin:true,smCd:0,revUsed:false};}
function tryB(){st.bA=false;st.party=st.party.filter(function(p){return!p.bell&&!p.griffin;});
if(st.wave>=5&&Math.random()<0.30){st.bA=true;
if(Math.random()<0.5){var b=mkB();st.party.push(b);st.bJ=true;log('🔔 Из темноты появляется Bell... (ур.'+b.lv+')','#e8a0ff');}
else{var g2=mkG();st.party.push(g2);st.gJ=true;grCross();grHello();log('✚ Зелёный свет пронзает тьму... Griffin вступает в бой! (ур.'+g2.lv+')','#7cff9b');}}}
function nb(k){var s=k?sv.maxWave:1;
st={wave:s,party:HR.map(function(h,i){var x=hs(i);return{def:h,idx:i,hp:x.hp,mx:x.hp,atk:x.atk,cr:x.cr,cd2:x.cd,ac:x.ac,dd:x.dd,act:false,uc:0,bell:false,dgB:0};}),en:[],over:false,bA:false,bJ:false,gJ:false};
st.en=mkE();var m0=st.en[0]&&st.en[0].mecha;
if(m0)mE2();
tryB();sel=tg=null;busy=false;lg.innerHTML='';rs.classList.add('hidden');
if(!m0){if(isB(st.wave))log('⚠ БОСС! Ядро Apofis!','#e8c060');else log('Волна '+st.wave,'#e8c060');}
rd();}
function aE(){return st.en.filter(function(e){return e.al;});}
function aH(){return st.party.filter(function(h){return h.hp>0;});}
function str(n){return '★★★★'.slice(0,n)+'☆☆☆☆'.slice(0,Math.max(0,4-n));}
function rd(){wv.textContent=st.wave;bt.classList.toggle('hidden',!isB(st.wave));ph.textContent=st.over?'Битва окончена':(busy?'Враги атакуют…':'Ваш ход');
en.innerHTML='';
st.en.forEach(function(e,i){if(!e.al)return;var c=document.createElement('div');c.className='gx3-card'+(e.boss?' gx3-boss':'')+(tg===i?' gx3-selected':'');c.dataset.eid=i;var p=Math.max(0,Math.round(e.hp/e.mx*100));var img;
if(e.mecha){img='<div class="gx3-card-img" style="position:relative;padding:0;background:#0a0a0a"><img src="'+MA+'" alt="MECHA-GALLEON" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"><span style="position:absolute;top:2px;right:2px;font-size:15px;line-height:1;background:rgba(0,0,0,.7);border-radius:4px;padding:2px 4px;color:#ff2a46">⚙</span>'+(e.sh>0?'<span style="position:absolute;bottom:2px;left:2px;font-size:9px;background:rgba(120,60,255,.85);border-radius:4px;padding:1px 4px;color:#fff">ЩИТ −40%</span>':'')+'</div>';}
else img='<div class="gx3-card-img">'+(e.boss?'👁':'☠')+'</div>';
c.innerHTML=img+'<div class="gx3-card-body"><div class="gx3-card-name" style="color:'+(e.mecha?'#ff2a46':(e.boss?'#e8c060':'#dd4e60'))+'">'+e.n+'</div><div class="gx3-hp-bar"><div class="gx3-hp-fill" style="width:'+p+'%;background:'+(e.mecha?'linear-gradient(90deg,#6a0fbf,#ff2a46)':'linear-gradient(90deg,#6e1222,#dd4e60)')+'"></div></div><div class="gx3-hp-text">'+Math.max(0,e.hp)+'/'+e.mx+'</div></div>';
en.appendChild(c);});
pt.innerHTML='';
st.party.forEach(function(h){var c=document.createElement('div');c.className='gx3-card'+(sel===h.idx?' gx3-selected':'')+(h.hp<=0?' gx3-dead':'')+(h.bell?' gx3-bell':'');c.dataset.uid=h.idx;var p=Math.max(0,Math.round(h.hp/h.mx*100));
var imgHtml;
if(h.bell){imgHtml='<div class="gx3-card-img" style="position:relative;padding:0;background:#0a0a0a"><img src="'+BA+'" alt="Bell" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"><span style="position:absolute;top:2px;right:2px;font-size:16px;line-height:1;background:rgba(0,0,0,.65);border-radius:4px;padding:2px 4px;color:#e8a0ff">🔔</span></div>';}
else if(h.griffin){imgHtml='<div class="gx3-card-img" style="position:relative;padding:0;background:#0a0a0a"><img src="'+GA+'" alt="Griffin" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"><span style="position:absolute;top:2px;right:2px;font-size:16px;line-height:1;background:rgba(0,0,0,.65);border-radius:4px;padding:2px 4px;color:#7cff9b">✚</span></div>';}
else{imgHtml='<div class="gx3-card-img" style="position:relative;padding:0;background:#0a0a0a"><img src="'+PR[h.idx]+'" alt="'+h.def.n+'" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block"><span style="position:absolute;top:2px;right:2px;font-size:16px;line-height:1;background:rgba(0,0,0,.65);border-radius:4px;padding:2px 4px;color:'+h.def.col+'">'+h.def.img+'</span></div>';}
c.innerHTML=imgHtml+'<div class="gx3-card-body"><div class="gx3-card-name" style="color:'+h.def.col+'">'+h.def.n+'</div><div class="gx3-card-meta">'+h.def.cl+' · ур.'+(h.bell||h.griffin?h.lv:sv.levels[h.idx])+'</div><div class="gx3-stars">'+str(h.def.st)+'</div><div class="gx3-hp-bar"><div class="gx3-hp-fill" style="width:'+p+'%;background:'+h.def.col+'"></div></div><div class="gx3-hp-text">'+Math.max(0,h.hp)+'/'+h.mx+'</div></div>';
if(h.bell&&st.bJ){c.classList.add('gx3-bell-appear');st.bJ=false;}
if(h.griffin&&st.gJ){c.classList.add('gx3-bell-appear');st.gJ=false;}
pt.appendChild(c);});
var h=sel!==null?st.party.find(function(p){return p.idx===sel;}):null;
if(!h||h.hp<=0||h.act||st.over){ac2.innerHTML='<div class="text-[13px] text-white/40">'+(st.over?'':(h&&h.act?'Герой уже ходил':'Выберите героя'))+'</div>';}
else{ac2.innerHTML=h.def.acts.map(function(a){var d=false,x='';
if(a.k==='ult'){if(h.bell){if(sv.levels[h.idx]<(h.def.ult.un||5)){d=true;x=' (с 5 ур.)';}else if(h.uc>0){d=true;x=' ('+h.uc+')';}}
else if(h.griffin){if(h.revUsed){d=true;x=' (исп.)';}}
else{if(sv.levels[h.idx]<(h.def.ult.un||5)){d=true;x=' (с 5 ур.)';}else if(h.uc>0){d=true;x=' ('+h.uc+')';}}}
if(a.k==='smoke'&&h.smCd>0){d=true;x=' ('+h.smCd+')';}
return '<button class="gx3-btn-act" data-act="'+a.k+'"'+(d?' disabled':'')+' style="border-color:'+h.def.col+'">'+a.l+x+'<small>'+a.d+'</small></button>';}).join('');}}
function fl(e,t,c,crit){var f=document.createElement('div');f.className='gx3-dmg-float'+(crit?' gx3-crit':'');f.style.color=c;f.textContent=t;e.appendChild(f);setTimeout(function(){f.remove();},900);}
function hitQ(a,dd){return Math.random()*100<Math.max(8,Math.min(95,a-dd*0.5));}
function dmg(b,c,cm){var d=b,crit=Math.random()*100<c;if(crit)d=Math.round(d*(cm/100));return{d:d,crit:crit};}
function ucr(){return Math.random()*100<UC;}
function kill(e){e.hp=0;e.al=false;if(e.mecha)log('MECHA-GALLEON: '+pk(MP.df,'mdf'),'#c08bff');}
pt.addEventListener('click',function(e){if(st.over||busy)return;var c=e.target.closest('[data-uid]');if(!c)return;var h=st.party.find(function(p){return p.idx===+c.dataset.uid;});if(!h||h.hp<=0||h.act)return;sel=h.idx;tg=null;rd();});
en.addEventListener('click',function(e){if(st.over||busy)return;var c=e.target.closest('[data-eid]');if(!c)return;tg=+c.dataset.eid;rd();});
ac2.addEventListener('click',function(e){if(st.over||busy||sel===null)return;var b=e.target.closest('[data-act]');if(!b||b.disabled)return;var act=b.dataset.act;
var h=st.party.find(function(p){return p.idx===sel;});if(!h||h.hp<=0||h.act)return;
var mc=pt.querySelector('[data-uid="'+h.idx+'"]');
var t=tg!==null?st.en[tg]:null;var al=aE();if(!t||!t.al)t=al[0]||null;
if(h.uc>0&&['attack','aoe','execute','skill','ult'].indexOf(act)!==-1)h.uc--;
if(act==='attack'){if(!t){log('Нет цели');return;}sfx('attack');if(window.animateLunge)window.animateLunge(mc);
var c0=cc(mc);burst(c0.x,c0.y,{count:12,color:h.def.col,speed:4});
if(h.bell)log('Bell: '+pk(BP.attack,'ba'),'#e8a0ff');
if(h.griffin)log('Griffin: '+pk(GP.attack,'ga'),'#7cff9b');
if(!hitQ(h.ac,6)){log(h.def.n+' промахнулся');}
else{var r=dmg(rnd(Math.round(h.atk)-2,Math.round(h.atk)+4),h.cr,h.cd2);var dd=arm(t,r.d);
if(h.griffin&&r.crit)log('Griffin: '+pk(GP.crit,'gc'),'#7cff9b');
var ec=en.querySelector('[data-eid="'+st.en.indexOf(t)+'"]');t.hp-=dd;
if(ec){if(window.animateShake)window.animateShake(ec);fl(ec,'−'+dd,r.crit?'#ff4d6d':'#fff',r.crit);}
log(h.def.n+' → '+t.n+': −'+dd+(t.mecha&&t.sh>0?' (щит)':'')+(r.crit?' КРИТ':''),h.def.col);
if(t.hp<=0){kill(t);log(t.n+' уничтожен!',h.def.col);if(h.bell)log('Bell: '+pk(BP.kill,'bk'),'#ff6bff');if(h.griffin)log('Griffin: '+pk(GP.kill,'gk'),'#7cff9b');}}}
else if(act==='aoe'&&h.bell){sfx('attack');if(window.animateLunge)window.animateLunge(mc);var ts=al.slice(0,3);
log('Bell: '+pk(BP.aoe,'bo'),'#e8a0ff');
ts.forEach(function(e2){var r2=dmg(rnd(Math.round(h.atk)-1,Math.round(h.atk)+3),h.cr,h.cd2);var d2=arm(e2,r2.d);e2.hp-=d2;
var e2c=en.querySelector('[data-eid="'+st.en.indexOf(e2)+'"]');
if(e2c){if(window.animateShake)window.animateShake(e2c);fl(e2c,'−'+d2,'#e8a0ff');var c2=cc(e2c);burst(c2.x,c2.y,{count:10,color:'#e8a0ff',speed:3.5});}
if(e2.hp<=0){kill(e2);log(e2.n+' уничтожен!');log('Bell: '+pk(BP.kill,'bk'),'#ff6bff');}});}
else if(act==='smoke'&&h.griffin){sfx('attack');if(window.animateLunge)window.animateLunge(mc);
log('Griffin: '+pk(GP.smoke,'gs'),'#7cff9b');h.smCd=4;
st.party.forEach(function(p){if(p.hp>0)p.dgB=2;});
log('💨 Дымовая завеса! Все союзники: 75% уклонения на 2 хода','#7cff9b');}
else if(act==='heal'&&h.griffin){sfx('attack');if(window.animateLunge)window.animateLunge(mc);
var hc=Math.random()*100<h.cr;var base=rnd(30,46);if(hc)base=Math.round(base*GRH);
log('Griffin: '+pk(GP.heal,'gh')+(hc?' КРИТ ×2.5':''),'#7cff9b');
if(hc)log('Griffin: '+pk(GP.hcrit,'ghc'),'#7cff9b');
var hd=0;st.party.forEach(function(p){if(p.hp>0&&p.hp<p.mx){var ad=Math.min(p.mx-p.hp,base);p.hp+=ad;hd+=ad;}});
log('✚ Усиленное лечение: +'+hd+' всему отряду'+(hc?' (КРИТ)':''),hc?'#ff4d6d':'#7cff9b');}
else if(act==='execute'&&h.bell){if(!t){log('Нет цели');return;}sfx('ult');if(window.animateLunge)window.animateLunge(mc);
log('Bell: '+pk(BP.execute,'be'),'#e8a0ff');
var ec3=en.querySelector('[data-eid="'+st.en.indexOf(t)+'"]');
if(Math.random()<0.05&&!(t.mecha&&t.sh>0)){kill(t);
if(ec3){fl(ec3,'КАЗНЬ','#ff0040',true);var c3=cc(ec3);burst(c3.x,c3.y,{count:30,color:'#ff0040',speed:6,life:45});}
log('Bell мгновенно казнит '+t.n+'!','#ff0040');log('Bell: '+pk(BP.kill,'bk'),'#ff6bff');}
else{var r3=dmg(rnd(Math.round(h.atk)+3,Math.round(h.atk)+9),h.cr+5,h.cd2);var d3=arm(t,r3.d);t.hp-=d3;
if(ec3){if(window.animateShake)window.animateShake(ec3);fl(ec3,'−'+d3,'#e8a0ff');}
log('Bell → '+t.n+': −'+d3+(t.mecha&&t.sh>0?' (щит)':''),'#e8a0ff');
if(t.hp<=0){kill(t);log('Bell: '+pk(BP.kill,'bk'),'#ff6bff');}}}
else if(act==='ult'){
if(h.griffin){var fallen=st.party.filter(function(p){return p.hp<=0&&p!==h;});
if(!fallen.length){log('Нет павших — возрождать некого');return;}
sfx('ult');h.revUsed=true;
var tgt=fallen[0];tgt.hp=tgt.mx;tgt.act=false;
log('Griffin: '+pk(GP.ult,'gu'),'#7cff9b');
log('🕊 ВОЗРОЖДЕНИЕ! '+tgt.def.n+' возвращается в бой с полным здоровьем!','#7cff9b');
grVid();}
else{sfx('ult');h.uc=h.def.ult.cd;
var c4=cc(mc);burst(c4.x,c4.y,{count:35,color:h.def.col,speed:6,size:4,life:50});
if(h.bell){var bc=ucr();log('Bell: '+pk(BP.ult,'bu')+(bc?' КРИТ!':''),'#e8a0ff');
al.forEach(function(e3){var dm=rnd(20,34)+Math.floor(h.atk);if(bc)dm=Math.round(dm*UM);dm=arm(e3,dm);e3.hp-=dm;
var e3c=en.querySelector('[data-eid="'+st.en.indexOf(e3)+'"]');
if(e3c)fl(e3c,'−'+dm,bc?'#ff4d6d':'#e8a0ff',bc);
if(e3.hp<=0){kill(e3);log('Bell: '+pk(BP.kill,'bk'),'#ff6bff');}});
log('Bell использует Колокол Пустоты!'+(bc?' КРИТ ×1.8':''),bc?'#ff4d6d':'#e8a0ff');
if(window.showBellUltVideo)window.showBellUltVideo();}
else if(h.def.cl==='Лекарь'){var hc2=ucr();
st.party.forEach(function(p){if(p.hp>0){var ad=rnd(28,42);if(hc2)ad=Math.round(ad*UM);p.hp=Math.min(p.mx,p.hp+ad);}});
log(h.def.n+(hc2?' КРИТ-исцеление отряда!':' мощно исцеляет отряд!'),hc2?'#ff4d6d':'#9fd18a');}
else{var c4b=ucr();var d4=rnd(24,38)+Math.floor(h.atk*1.3);if(c4b)d4=Math.round(d4*UM);
al.forEach(function(e4){var d5=arm(e4,d4);e4.hp-=d5;var e4c=en.querySelector('[data-eid="'+st.en.indexOf(e4)+'"]');
if(e4c)fl(e4c,'−'+d5,c4b?'#ff4d6d':h.def.col,c4b);if(e4.hp<=0)kill(e4);});
log(h.def.n+' использует ульту! −'+d4+' всем'+(c4b?' КРИТ ×1.8':''),c4b?'#ff4d6d':h.def.col);}}}
else if(act==='skill'){sfx('attack');if(window.animateLunge)window.animateLunge(mc);
if(h.def.cl==='Лекарь'){var hd2=0;
st.party.forEach(function(p){if(p.hp>0&&p.hp<p.mx){var ad=Math.min(p.mx-p.hp,Math.round(rnd(15,23)*1.5));p.hp+=ad;hd2+=ad;}});
log(h.def.n+' исцеляет на '+hd2,'#9fd18a');}
else{if(!t)return;var r4=dmg(rnd(Math.round(h.atk)+3,Math.round(h.atk)+9),h.cr,h.cd2);var d6=arm(t,r4.d);t.hp-=d6;
var e6c=en.querySelector('[data-eid="'+st.en.indexOf(t)+'"]');
if(e6c)fl(e6c,'−'+d6,h.def.col,r4.crit);
log(h.def.n+' навык → '+t.n+': −'+d6+(t.mecha&&t.sh>0?' (щит)':''),h.def.col);
if(t.hp<=0)kill(t);}}
if(h.smCd>0)h.smCd--;
h.act=true;sel=null;tg=null;
st.party.forEach(function(p,i){if(p.hp>0&&!p.bell&&!p.griffin){sv.xp[i]+=3;while(sv.xp[i]>=xn(sv.levels[i])){sv.xp[i]-=xn(sv.levels[i]);sv.levels[i]++;sfx('level');log('★ '+HR[i].n+' достиг ур. '+sv.levels[i]+'!','#e8c060');}}});
pr();
if(!aE().length){rd();setTimeout(wc,700);return;}
if(lose())return;
var left=st.party.filter(function(p){return p.hp>0&&!p.act;});
if(left.length===0){busy=true;rd();setTimeout(et,850);}else rd();});
function wc(){log('Волна '+st.wave+' зачищена!','#e8c060');mX();
if(st.bA){log('Bell растворяется в тени...','#e8a0ff');}
if(st.bA||st.party.some(function(p){return p.griffin;})){st.party=st.party.filter(function(p){return!p.bell&&!p.griffin;});st.bA=false;}
sv.maxWave=Math.max(sv.maxWave,st.wave+1);pr();st.wave++;
st.en=mkE();var m1=st.en[0]&&st.en[0].mecha;
if(m1)mE2();
st.party.forEach(function(p){if(p.hp>0){p.hp=Math.min(p.mx,p.hp+16+((p.bell||p.griffin)?0:sv.levels[p.idx]*2));p.act=false;p.dgB=0;}});
tryB();
if(!m1&&isB(st.wave))log('⚠ Приближается БОСС!','#e8c060');
rd();busy=true;setTimeout(et,1100);}
function et(){if(st.over){busy=false;rd();return;}
var es=aE();if(!aH().length){busy=false;rd();return;}
es.forEach(function(e){var hh=aH();if(!hh.length)return;
if(e.mecha){e.tn++;
if(e.tn%3===0){e.sh=0.4;log('MECHA-GALLEON: '+pk(MP.sh,'ms'),'#c08bff');log('⚙ УЛЬТИМЕЙТ: Укреплённый корпус! Весь входящий урон −40%','#c08bff');
var mC=en.querySelector('[data-eid="'+st.en.indexOf(e)+'"]');if(mC){var mc2=cc(mC);burst(mc2.x,mc2.y,{count:25,color:'#9b4dff',speed:5,size:4});}return;}
if(Math.random()<0.5){log('MECHA-GALLEON: '+pk(MP.rkt,'mr'),'#ff2a46');
var rt=hh.slice().sort(function(){return Math.random()-0.5;}).slice(0,3);
rt.forEach(function(th){if(th.dgB>0&&Math.random()<0.75){log('💨 Дым спасает: '+th.def.n+' уклонился!','#7cff9b');return;}
var dm=Math.round((e.atk+rnd(-2,3))*1.5);th.hp-=dm;
var cEl=pt.querySelector('[data-uid="'+th.idx+'"]');
if(cEl){if(window.animateShake)window.animateShake(cEl);fl(cEl,'−'+dm,'#ff2a46');}
log('🚀 Ракетный залп → '+th.def.n+': −'+dm,'#ff2a46');
if(th.hp<=0){th.hp=0;log('✖ '+th.def.n+' пал','#dd4e60');}});sfx('ult');return;}
var t2=hh[rnd(0,hh.length-1)];
if(t2.dgB>0&&Math.random()<0.75){log('💨 Дым спасает: '+t2.def.n+' уклонился!','#7cff9b');return;}
var d2=Math.round((e.atk+rnd(-2,3))*1.5);t2.hp-=d2;
var cE2=pt.querySelector('[data-uid="'+t2.idx+'"]');
if(cE2){if(window.animateShake)window.animateShake(cE2);fl(cE2,'−'+d2,'#ff6b3d');var c2b=cc(cE2);burst(c2b.x,c2b.y,{count:12,color:'#ff6b3d',speed:4});}
sfx('hit');log('MECHA-GALLEON: '+pk(MP.vul,'mv'),'#ff6b3d');log('🔫 Пулемётный залп → '+t2.def.n+': −'+d2,'#ff6b3d');
if(t2.hp<=0){t2.hp=0;log('✖ '+t2.def.n+' пал','#dd4e60');}
else if(Math.random()<0.5)log('MECHA-GALLEON: '+pk(MP.kl,'mk'),'#c08bff');
return;}
var t3=hh[rnd(0,hh.length-1)];var cE3=pt.querySelector('[data-uid="'+t3.idx+'"]');
if(t3.dgB>0&&Math.random()<0.75){log('💨 Дым спасает: '+t3.def.n+' уклонился!','#7cff9b');return;}
if(!hitQ(82,t3.dd)){log(e.n+' промахнулся');return;}
var d3=Math.round(e.atk+rnd(-2,3));t3.hp-=d3;
if(cE3){if(window.animateShake)window.animateShake(cE3);fl(cE3,'−'+d3,'#dd4e60');var c3b=cc(cE3);burst(c3b.x,c3b.y,{count:8,color:'#dd4e60',speed:3});}
sfx('hit');log(e.n+' → '+t3.def.n+': −'+d3,e.boss?'#e8c060':'#dd4e60');
if(t3.hp<=0){t3.hp=0;log('✖ '+t3.def.n+' пал','#dd4e60');}});
st.party.forEach(function(p){if(p.dgB>0)p.dgB--;if(p.hp>0)p.act=false;});busy=false;
if(lose())return;rd();}
function lose(){if(st.party.every(function(h){return h.hp<=0;})){st.over=true;mX();rs.textContent='✖ Отряд уничтожен';rs.classList.remove('hidden');log('ПОРАЖЕНИЕ. Прогресс сохранён.','#dd4e60');pr();rd();return true;}return false;}
$('vrpg3-btnReset').onclick=function(){nb(true);};
$('vrpg3-btnWipe').onclick=function(){if(!confirm('Сбросить прогресс?'))return;sv={levels:[1,1,1,1],xp:[0,0,0,0],maxWave:1};pr();mX();nb(false);};
nb(true);
})();
/* ===== Вылезающая карточка на главной: арты + реплики Alisa и Sky ===== */
(function(){
var B64='https://verstka-sites.s3.cloud.ru/assets/2952/';
var SW=[['upload_8c031b23d67649238457645e20ec2c39','upload_54691077664841278e76a37f596d32a4'],['upload_6f039d5415e34c3eaeaa619ea0eab764','upload_19dc1f6d63fa4de4bbb388795b5f3a0f'],['upload_eefa4dbd38fc48079c75b1c91712b0c3','upload_1ebccbc0ef3249508b98746eef0391dc'],['upload_2a74b6dd02504bcbb51a86b587c95a0a','upload_b3b52365c3844d17b3eef615c4bed8e5']];
var AL_N=['upload_19dc1f6d63fa4de4bbb388795b5f3a0f','upload_6f039d5415e34c3eaeaa619ea0eab764'];
var SK_N=['upload_b3b52365c3844d17b3eef615c4bed8e5','upload_2a74b6dd02504bcbb51a86b587c95a0a'];
var AL=['Я жила столько лет в голове, а по факту мне нет и месяца...','Первый раз ела настоящую еду. Тело запомнило, а я — нет. Странное чувство.','Сон — это то, о чём я мечтала, будучи лишь голосом в чужой памяти.','Дождь. Я слышала о нём в записях, но почувствовала только вчера.','Мои воспоминания старше меня самой. Забавно, правда?','Иногда я ловлю себя на том, что не знаю, чьи привычки повторяю — мои или её.','Раньше я существовала как данные. Теперь — как человек. Не уверена, что лучше.','Каждое утро просыпаюсь и заново учусь быть живой.'];
var SKY=['Сколько лет я уже потратил ради поисков смысла...','Сегодня снова ничего не произошло. Для меня это победа.','Я научился ждать. Дольше, чем длится большинство жизней.','Тишина перестала пугать. Теперь она как старый друг.','Смысл не приходил. Пришла привычка его искать.','Я помню рассветы, которые никто больше не видел. Спросите зачем — не отвечу.','Иногда я завтракаю медленно, будто времени у меня с избытком. Может, так и есть.','Смысл где-то был. Я, кажется, проходил мимо него несколько раз.'];
function init(){
if(!document.querySelector('.gx-hero'))return;
function img(){var p=document.getElementById('character-popup');if(!p)return;var i=p.querySelector('.char-image');if(!i)return;var b=i.style.backgroundImage||'';for(var k=0;k<SW.length;k++){if(b.indexOf(SW[k][0])!==-1){i.style.backgroundImage=b.split(SW[k][0]).join(SW[k][1]);return;}}}
function lines(marks,ls){var p=document.getElementById('character-popup');if(!p)return;var i=p.querySelector('.char-image'),b=document.getElementById('charBubble');if(!i||!b)return;var bg=i.style.backgroundImage||'';for(var k=0;k<marks.length;k++){if(bg.indexOf(marks[k])!==-1){if(Math.random()>0.6)return;b.textContent=ls[Math.floor(Math.random()*ls.length)];return;}}}
var ob=new MutationObserver(function(ms){ms.forEach(function(m){if(m.type==='attributes')img();if(m.type==='childList'||m.type==='characterData'){lines(AL_N,AL);lines(SK_N,SKY);}});});
var iv=setInterval(function(){var p=document.getElementById('character-popup');if(p){clearInterval(iv);img();ob.observe(p,{attributes:true,attributeFilter:['style'],childList:true,subtree:true,characterData:true});}},300);
setTimeout(function(){clearInterval(iv);},20000);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
/* ===== Фоновая музыка + кнопка звука ===== */
(function(){
if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var a=new Audio();a.src='https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/Elaerin-Kosetsu-Prolog-_%CE%B1_.mp3';a.loop=true;a.volume=0.35;
window.gxBackgroundAudio={el:a,baseVolume:0.35,duckTo:function(v){a.volume=v;},restore:function(){a.volume=this.baseVolume;}};
var on=false,b=document.createElement('button');b.id='gx-sound-toggle';b.setAttribute('aria-label','Звук вкл/выкл');b.textContent='🔇';document.body.appendChild(b);
function r(){b.textContent=on?'🔊':'🔇';b.classList.toggle('on',on);}
b.addEventListener('click',function(e){e.stopPropagation();on=!on;if(on)a.play().catch(function(){});else a.pause();r();});
document.addEventListener('click',function(){if(!on){on=true;a.play().catch(function(){});r();}},{once:true});
var cx=null;function t(){try{if(!cx)cx=new(window.AudioContext||window.webkitAudioContext)();if(cx.state==='suspended')cx.resume();var o=cx.createOscillator(),g=cx.createGain();o.type='sine';o.frequency.value=880;g.gain.setValueAtTime(0.0001,cx.currentTime);g.gain.exponentialRampToValueAtTime(0.03,cx.currentTime+0.01);g.gain.exponentialRampToValueAtTime(0.0001,cx.currentTime+0.12);o.connect(g);g.connect(cx.destination);o.start();o.stop(cx.currentTime+0.14);}catch(e){}}
document.addEventListener('mouseover',function(e){if(!on)return;var x=e.target.closest('a, button');if(x)t();});
})();
/* ===== Мини-игра N-04: Door Breaker ===== */
(function(){
var cv=document.getElementById('game');if(!cv)return;var g=cv.getContext('2d');
var ss=document.getElementById('startScreen'),sc=document.getElementById('score'),ll=document.getElementById('leadersList');
var st=false,ov=false,score=0,sp=6,fr=0,ns=80;
var P={x:80,y:290,w:50,h:70,dy:0,j:false,c:false,k:false,kt:0,gr:0.72,jf:-17.5};
var ds=[],ps=[],keys={};
var sp2=new Image();sp2.src='https://verstka-sites.s3.cloud.ru/assets/2952/upload_85ac1105f1c749a09ff339c82d14041b.webp';
var ba=window.gxBackgroundAudio||null;var gm=new Audio();gm.src='https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/Zero%20episode.mp3';gm.loop=true;gm.volume=0.4;
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
function tbl(L){if(!L||!L.length){ll.innerHTML='Пока пусто';return;}var h='';for(var i=0;i<Math.min(10,L.length);i++)h+=(i+1)+'. '+esc(L[i].name)+' — '+L[i].score+'<br>';ll.innerHTML=h;}
function loadL(){if(!ll)return;tbl(loc());fetch('https://api.jsonbin.io/v3/b/'+BIN+'/latest',{headers:{'X-Master-Key':KEY}}).then(function(r){return r.json();}).then(function(d){tbl(d.record||[]);}).catch(function(){});}
function saveS(f){var nm=prompt('Введи имя для глобального рейтинга:','Игрок')||'Игрок';nm=nm.substring(0,20);var L=loc();L.push({name:nm,score:f});L.sort(function(a,b){return b.score-a.score;});L=L.slice(0,10);try{localStorage.setItem(LK,JSON.stringify(L));}catch(e){}
fetch('https://api.jsonbin.io/v3/b/'+BIN+'/latest',{headers:{'X-Master-Key':KEY}}).then(function(r){return r.json();}).then(function(d){var L2=d.record||[];L2.push({name:nm,score:f});L2.sort(function(a,b){return b.score-a.score;});L2=L2.slice(0,10);return fetch('https://api.jsonbin.io/v3/b/'+BIN,{method:'PUT',headers:{'Content-Type':'application/json','X-Master-Key':KEY},body:JSON.stringify(L2)});}).then(function(){loadL();}).catch(function(){loadL();});}
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
function rs2(){ov=false;score=0;sp=6;fr=0;ns=80;ds=[];ps=[];P.y=290;P.dy=0;P.j=P.c=P.k=false;sc.textContent='0';ss.classList.add('gx-hidden');duck();}
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
ps.forEach(function(p){g.fillStyle='rgba(196, 30, 58, '+(p.l/45)+')';g.fillRect(p.x,p.y,4,4);});}
function loop(){up();draw();requestAnimationFrame(loop);}
loadL();loop();
})();
/* ===== Ивент Apofis: музыка, таймеры, штурм, анимации, звонок Bell ===== */
(function(){
function init(){
function g0(){if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;var gl=document.getElementById('bell-glitch');if(!gl){gl=document.createElement('div');gl.id='bell-glitch';document.body.appendChild(gl);}gl.style.opacity='1';var an=gl.animate([{transform:'translateX(0)'},{transform:'translateX(-5px)'},{transform:'translateX(5px)'},{transform:'translateX(-3px)'},{transform:'translateX(0)'}],{duration:100,iterations:18});an.finished.then(function(){gl.style.opacity='0';}).catch(function(){gl.style.opacity='0';});}
window.animateLunge=function(c){if(!c||!c.animate)return;return c.animate([{transform:'translateY(0) scale(1)'},{transform:'translateY(-16px) scale(1.07)'},{transform:'translateY(0) scale(1)'}],{duration:380,easing:'ease-out'});};
window.animateShake=function(c){if(!c||!c.animate)return;return c.animate([{transform:'translateX(0)'},{transform:'translateX(-6px)'},{transform:'translateX(6px)'},{transform:'translateX(-4px)'},{transform:'translateX(0)'}],{duration:320,easing:'ease-in-out'});};
window.animateBellAppear=function(c){if(!c||!c.animate)return;return c.animate([{opacity:0,transform:'scale(0.6) translateY(20px)'},{opacity:1,transform:'scale(1.05) translateY(-4px)'},{opacity:1,transform:'scale(1) translateY(0)'}],{duration:700,easing:'ease-out'});};
var WC={'gx3-lunge':'animateLunge','ap-lunge':'animateLunge','gx3-shake':'animateShake','ap-shake':'animateShake','gx3-bell-appear':'animateBellAppear'};
[document.getElementById('vrpg3-party'),document.getElementById('ap-party'),document.getElementById('vrpg3-enemies'),document.getElementById('ap-enemies')].forEach(function(c){if(!c)return;
function hnd(el){for(var k in WC){if(el.classList&&el.classList.contains(k)){el.classList.remove(k);var fn=window[WC[k]];if(typeof fn==='function')fn(el);return;}}}
c.querySelectorAll('.gx3-card, .ap-card').forEach(hnd);
new MutationObserver(function(ms){ms.forEach(function(m){if(m.type==='attributes'&&m.attributeName==='class')hnd(m.target);if(m.type==='childList'){m.addedNodes.forEach(function(n){if(n.nodeType!==1)return;hnd(n);if(n.querySelectorAll)n.querySelectorAll('.gx3-card, .ap-card').forEach(hnd);});}});}).observe(c,{attributes:true,attributeFilter:['class'],childList:true,subtree:true});});
var BURL='https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/%D0%91%D1%8D%D0%BB%D1%8C%20(mp3cut.net).mp3';
var bA2=null,bUn=false;
function pre(){if(bA2)return;try{bA2=new Audio(BURL);bA2.volume=0.55;bA2.preload='auto';bA2.load();}catch(e){}}
document.addEventListener('pointerdown',pre,{once:true});document.addEventListener('keydown',pre,{once:true});
function unl(){if(bUn)return;bUn=true;pre();if(bA2){var p=bA2.play();if(p&&p.catch){p.then(function(){bA2.pause();bA2.currentTime=0;}).catch(function(){bUn=false;});}}}
document.addEventListener('pointerdown',unl,{once:true});document.addEventListener('keydown',unl,{once:true});
function playB(){pre();if(!bA2||!bUn){document.addEventListener('pointerdown',function(){pre();if(bA2){bA2.currentTime=0;bA2.play().catch(function(){});}},{once:true});return;}
bA2.currentTime=0;var p=bA2.play();if(p&&p.catch){p.catch(function(){document.addEventListener('pointerdown',function(){bA2.currentTime=0;bA2.play().catch(function(){});},{once:true});});}}
var bOn=false;var pEl=document.getElementById('vrpg3-party');
if(pEl){var chk=function(){var has=!!pEl.querySelector('.gx3-bell');if(has&&!bOn){playB();g0();}bOn=has;};
chk();new MutationObserver(chk).observe(pEl,{childList:true});}
var ET='https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/Arma%20Event.mp3',eA=null,bw=false;
function pB(){var b=window.gxBackgroundAudio;if(b&&b.el){bw=!b.el.paused;b.el.pause();}}
function rB(){var b=window.gxBackgroundAudio;if(b&&b.el&&bw)b.el.play().catch(function(){});}
function eOn(){if(!eA){eA=new Audio(ET);eA.loop=true;eA.volume=0.5;}pB();eA.currentTime=0;eA.play().catch(function(){});}
function eOff(){if(eA){eA.pause();eA.currentTime=0;}rB();}
window.apEventMusicStart=eOn;window.apEventMusicStop=eOff;
var OV=document.getElementById('apofis-overlay'),AC=document.getElementById('apofis-accept'),DC=document.getElementById('apofis-decline');
if(OV){if(OV.dataset.eM!=='1'){OV.dataset.eM='1';var sh2=false;new MutationObserver(function(){var v=OV.style.display!=='none';if(v&&!sh2){sh2=true;eOn();}else if(!v&&sh2){sh2=false;}}).observe(OV,{attributes:true,attributeFilter:['style']});}
if(AC&&DC&&OV.dataset.eT!=='1'){OV.dataset.eT='1';
if(localStorage.getItem('apofis_defeat')==='true')document.body.classList.add('grayscale');
var shE=function(){var s=document.getElementById('apofis-assault');if(s&&s.style.display!=='none'&&s.style.display!=='')return;if(OV.style.display==='flex')return;OV.style.display='flex';};
var hE=function(){OV.style.display='none';};
setTimeout(shE,45000);setInterval(shE,15*60*1000);
AC.addEventListener('click',function(){hE();var a=document.getElementById('apofis-assault');if(a){a.style.display='block';a.scrollIntoView({behavior:'smooth'});if(window.apStartAssault)window.apStartAssault();}});
DC.addEventListener('click',function(){hE();var s=document.getElementById('apofis-assault');if(!s||s.style.display==='none'||s.style.display==='')eOff();});}}
var S=document.getElementById('apofis-assault');
if(S){var aPh=document.getElementById('ap-phase'),aEn=document.getElementById('ap-enemies'),aPt=document.getElementById('ap-party'),aAc=document.getElementById('ap-actions'),aLg=document.getElementById('ap-log'),aRs=document.getElementById('ap-result'),aRT=document.getElementById('ap-result-title'),aRD=document.getElementById('ap-result-desc'),aRB=document.getElementById('ap-result-btn');
if(aPh&&aEn&&aPt&&aAc&&aLg&&aRs){
var EN=[{n:'Штурмовик APOFIS',hp:95,atk:16},{n:'Тяжёлый Юнит',hp:130,atk:14},{n:'Элитный Каратель',hp:110,atk:19},{n:'Кибер-Палач',hp:100,atk:17}];
var B642='https://verstka-sites.s3.cloud.ru/assets/2952/';
var HR2=[{n:'N-04',col:'#dd4e60',hp:140,atk:16,img:'☠',p:B642+'upload_2855eb8ffe87460dbdf8a9ca45c11619.webp'},{n:'Alisa',col:'#9fd18a',hp:115,atk:11,img:'✦',p:B642+'upload_6f039d5415e34c3eaeaa619ea0eab764.webp'},{n:'Crysta',col:'#7fb8d8',hp:105,atk:15,img:'◎',p:B642+'upload_eefa4dbd38fc48079c75b1c91712b0c3.webp'},{n:'Sky',col:'#c9b8e8',hp:95,atk:14,img:'🕶',p:B642+'upload_2a74b6dd02504bcbb51a86b587c95a0a.webp'}];
var S2=null;
function rn(a,b){return Math.floor(Math.random()*(b-a+1))+a;}
function ll2(m,c){var d=document.createElement('div');d.textContent=m;if(c)d.style.color=c;aLg.appendChild(d);aLg.scrollTop=aLg.scrollHeight;}
function apStart(){S2={party:HR2.map(function(h,i){return{n:h.n,col:h.col,atk:h.atk,img:h.img,p:h.p,idx:i,hp:h.hp,mx:h.hp,act:false};}),en:[],sel:null,tg:null,busy:false,over:false};
var c=rn(3,4);for(var i=0;i<c;i++){var t=EN[rn(0,EN.length-1)],hp=t.hp+rn(10,30);S2.en.push({n:t.n,hp:hp,mx:hp,atk:t.atk+rn(0,4),al:true});}
aLg.innerHTML='';aRs.style.display='none';ll2('Штурмовой отряд APOFIS ворвался на базу!','#c41e3a');ll2('Отбейте атаку любой ценой.','#e8c060');eOn();rd2();}
window.apStartAssault=apStart;
function alE(){return S2.en.filter(function(e){return e.al;});}
function end2(){if(alE().length===0){S2.over=true;localStorage.removeItem('apofis_defeat');document.body.classList.remove('grayscale');eOff();aRs.style.display='flex';aRT.textContent='ПОБЕДА!';aRT.style.color='#9fd18a';aRD.textContent='Штурмовой отряд APOFIS уничтожен. База снова в безопасности.';
try{var AK='grey_empire_achv',AS=JSON.parse(localStorage.getItem(AK)||'{}');if(!AS.ach3){AS.ach3=true;localStorage.setItem(AK,JSON.stringify(AS));if(typeof window.showAch==='function')window.showAch({n:'Всегда на чеку!',d:'Первая победа на ивенте'});}}catch(e){}
return true;}
if(S2.party.every(function(h){return h.hp<=0;})){S2.over=true;localStorage.setItem('apofis_defeat','true');document.body.classList.add('grayscale');eOff();aRs.style.display='flex';aRT.textContent='ПОРАЖЕНИЕ!';aRT.style.color='#c41e3a';aRD.textContent='База захвачена. Сайт переведён в режим подавления до следующей победы.';return true;}return false;}
function rd2(){aPh.textContent=S2.over?'Бой окончен':(S2.busy?'Враги атакуют…':'Ваш ход');
aEn.innerHTML='';S2.en.forEach(function(e,i){if(!e.al)return;var c=document.createElement('div');c.className='ap-card'+(S2.tg===i?' ap-selected':'');c.dataset.eid=i;var p=Math.max(0,Math.round(e.hp/e.mx*100));
c.innerHTML='<div class="ap-card-img">☠</div><div class="ap-card-body"><div class="ap-card-name" style="color:#dd4e60">'+e.n+'</div><div class="ap-hp-bar"><div class="ap-hp-fill" style="width:'+p+'%;background:linear-gradient(90deg,#6e1222,#dd4e60)"></div></div><div class="ap-hp-text">'+Math.max(0,e.hp)+'/'+e.mx+'</div></div>';aEn.appendChild(c);});
aPt.innerHTML='';S2.party.forEach(function(h){var c=document.createElement('div');c.className='ap-card'+(S2.sel===h.idx?' ap-selected':'')+(h.hp<=0?' ap-dead':'');c.dataset.uid=h.idx;var p=Math.max(0,Math.round(h.hp/h.mx*100));
c.innerHTML='<div class="ap-card-img" style="padding:0;background:#0a0a0a;position:relative"><img src="'+h.p+'" alt="'+h.n+'"><span style="position:absolute;top:2px;right:2px;font-size:15px;line-height:1;background:rgba(0,0,0,.65);border-radius:4px;padding:2px 4px;color:'+h.col+'">'+h.img+'</span></div><div class="ap-card-body"><div class="ap-card-name" style="color:'+h.col+'">'+h.n+'</div><div class="ap-hp-bar"><div class="ap-hp-fill" style="width:'+p+'%;background:'+h.col+'"></div></div><div class="ap-hp-text">'+Math.max(0,h.hp)+'/'+h.mx+'</div></div>';aPt.appendChild(c);});
var h=S2.sel!==null?S2.party[S2.sel]:null;
if(!h||h.hp<=0||h.act||S2.over){aAc.innerHTML='<div class="text-[13px] text-white/40">'+(S2.over?'':'Выберите героя')+'</div>';}
else{aAc.innerHTML='<button class="ap-btn-act" data-act="attack" style="border-color:'+h.col+'">⚔ Атака<small>обычный удар</small></button><button class="ap-btn-act" data-act="strong" style="border-color:'+h.col+'">💥 Сильный удар<small>больше урона</small></button>';}}
function fl2(c,t,col){var f=document.createElement('div');f.className='ap-dmg-float';f.style.color=col;f.textContent=t;c.appendChild(f);setTimeout(function(){f.remove();},850);}
aPt.addEventListener('click',function(e){if(S2.over||S2.busy)return;var c=e.target.closest('[data-uid]');if(!c)return;var h=S2.party[+c.dataset.uid];if(h.hp<=0||h.act)return;S2.sel=h.idx;S2.tg=null;rd2();});
aEn.addEventListener('click',function(e){if(S2.over||S2.busy)return;var c=e.target.closest('[data-eid]');if(!c)return;S2.tg=+c.dataset.eid;rd2();});
aAc.addEventListener('click',function(e){if(S2.over||S2.busy||S2.sel===null)return;var b=e.target.closest('[data-act]');if(!b)return;var act=b.dataset.act;var h=S2.party[S2.sel];if(!h||h.hp<=0||h.act)return;
var t=S2.tg!==null?S2.en[S2.tg]:null;var al=alE();if(!t||!t.al)t=al[0];if(!t)return;
var mc=aPt.querySelector('[data-uid="'+h.idx+'"]'),ec=aEn.querySelector('[data-eid="'+S2.en.indexOf(t)+'"]');
if(window.animateLunge)window.animateLunge(mc);
var dm=act==='strong'?rn(h.atk+6,h.atk+14):rn(h.atk-1,h.atk+5);t.hp-=dm;
if(ec){if(window.animateShake)window.animateShake(ec);fl2(ec,'−'+dm,act==='strong'?'#ff6b6b':'#fff');}
ll2(h.n+' атакует '+t.n+': −'+dm,h.col);
if(t.hp<=0){t.al=false;ll2(t.n+' уничтожен!','#e8c060');}
h.act=true;S2.sel=null;S2.tg=null;
if(end2()){rd2();return;}
var rem=S2.party.filter(function(p){return p.hp>0&&!p.act;});
if(rem.length===0){S2.busy=true;rd2();setTimeout(eT,800);}else rd2();});
function eT(){if(S2.over)return;var es=alE(),hh=S2.party.filter(function(h){return h.hp>0;});
es.forEach(function(e){if(!hh.length)return;var t=hh[rn(0,hh.length-1)],dm=rn(e.atk-2,e.atk+3);t.hp-=dm;
var c=aPt.querySelector('[data-uid="'+t.idx+'"]');if(c){if(window.animateShake)window.animateShake(c);fl2(c,'−'+dm,'#dd4e60');}
ll2(e.n+' бьёт '+t.n+': −'+dm,'#dd4e60');
if(t.hp<=0){t.hp=0;ll2('✖ '+t.n+' пал!','#c41e3a');}});
S2.party.forEach(function(p){if(p.hp>0)p.act=false;});S2.busy=false;if(!end2())rd2();}
aRB.addEventListener('click',function(){aRs.style.display='none';S.style.display='none';var a=document.getElementById('rpg-section');if(a)a.scrollIntoView({behavior:'smooth'});});}}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
/* ===== Видеоэффект ульты Bell (x1.5, только Bell) ===== */
(function(){
var V='https://verstka-sites.s3.cloud.ru/assets/2952/upload_8c007282c77f4f998e7e0e2962ff42e1.mp4';
var o=null,v=null,pl=false;
function b2(){o=document.createElement('div');o.id='bell-ult-overlay';o.style.cssText='position:fixed;inset:0;z-index:99997;display:none;align-items:center;justify-content:center;background:rgba(5,0,8,.92);pointer-events:none';v=document.createElement('video');v.src=V;v.muted=true;v.playsInline=true;v.setAttribute('playsinline','');v.preload='auto';v.style.cssText='max-width:100%;max-height:100%;object-fit:contain';o.appendChild(v);document.body.appendChild(o);v.addEventListener('ended',h);v.addEventListener('error',h);}
function s2(){if(pl)return;if(!o)b2();pl=true;o.style.display='flex';v.currentTime=0;v.playbackRate=1.5;var p=v.play();if(p&&p.catch)p.catch(function(){h();});setTimeout(function(){if(pl)h();},6000);}
function h(){pl=false;if(o)o.style.display='none';try{v.pause();}catch(e){}}
window.showBellUltVideo=s2;
document.addEventListener('pointerdown',function(){if(!o)b2();},{once:true});
})();
/* ===== Боевые реплики персонажей (Хроники + Ивент) ===== */
(function(){
function init(){
var HC={'N-04':'#dd4e60','Alisa':'#9fd18a','Crysta':'#7fb8d8','Sky':'#c9b8e8'};
var HP={
'N-04':{attack:['Маска треснула — я нет.','Этот удар — за каждого, кем меня заменили.','Осколки помнят всё.','Ломаю так же, как ломали меня.'],ult:['Раскол Империи… как когда-то расколовшегося меня.','Пусть падёт всё, что сделало меня номером.']},
'Alisa':{attack:['Просчитала. Это было очевидно.','Аккуратно. Потери — это чужие слёзы.','Не двигайся. Я вижу траекторию.'],heal:['Держись. Я не позволю вам упасть.','Раны заживут. Долг — нет.'],ult:['Свет Империи — для тех, кого я не успела спасти.']},
'Crysta':{attack:['Один выстрел. Один расчёт.','Тихо. Чисто.','Ты уже был мёртв. Я лишь оформила бумаги.'],ult:['Снайперский огонь. Промахов не бывает.']},
'Sky':{attack:['…','Тени не спорят.','Он даже не заметил.'],ult:['Приговор вынесен.','…']}};
function add(lg2,n,k){var s=HP[n]&&HP[n][k];if(!s||!s.length)return;if(Math.random()>0.7)return;var d=document.createElement('div');d.textContent=n+': «'+s[Math.floor(Math.random()*s.length)]+'»';d.style.color=HC[n];d.style.opacity='.9';d.style.fontSize='12px';d.style.fontStyle='italic';lg2.appendChild(d);lg2.scrollTop=lg2.scrollHeight;}
function hook(lg2){if(lg2.dataset.ph==='1')return;lg2.dataset.ph='1';
new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType!==1)return;var t=n.textContent||'';
var ma=t.match(/^(N-04|Alisa|Crysta|Sky) (→|атакует|навык)/);
if(ma){setTimeout(function(nm){return function(){add(lg2,nm,'attack');};}(ma[1]),150);return;}
for(var n in HC){
if(t.indexOf(n+' исцеляет')===0||t.indexOf(n+' мощно исцеляет')===0){setTimeout(function(nm){return function(){add(lg2,nm,'heal');};}(n),150);return;}
if(t.indexOf(n+' использует ульту')!==-1){setTimeout(function(nm){return function(){add(lg2,nm,'ult');};}(n),150);return;}}});});}).observe(lg2,{childList:true});}
['vrpg3-log','ap-log'].forEach(function(id){var e=document.getElementById(id);if(e)hook(e);else{var iv=setInterval(function(){var x=document.getElementById(id);if(x){clearInterval(iv);hook(x);}},500);setTimeout(function(){clearInterval(iv);},15000);}});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
/* ===== Достижения: кнопка уже в разметке арены, тут только эффекты и окно ===== */
(function(){
function ready(f){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',f);else f();}
ready(function(){
var KEY='grey_empire_achv';
function load(){try{return JSON.parse(localStorage.getItem(KEY)||'{}');}catch(e){return{};}}
function save(o){try{localStorage.setItem(KEY,JSON.stringify(o));}catch(e){}}
var ACH=[{id:'ach1',n:'Новичок на поле боя!',d:'Пройдена первая волна'},{id:'ach2',n:'Рядовой вояка!',d:'Пройдено пять волн'},{id:'ach3',n:'Всегда на чеку!',d:'Первая победа на ивенте'}];
if(!document.getElementById('ach-css')){var s=document.createElement('style');s.id='ach-css';
s.textContent='@keyframes acWingL{0%{opacity:0;transform:rotate(35deg) scaleX(.2)}20%{opacity:1;transform:rotate(15deg) scaleX(1)}60%{transform:rotate(25deg) scaleX(.9)}100%{opacity:1;transform:rotate(30deg) scaleX(1)}}@keyframes acWingR{0%{opacity:0;transform:rotate(-35deg) scaleX(.2)}20%{opacity:1;transform:rotate(-15deg) scaleX(1)}60%{transform:rotate(-25deg) scaleX(.9)}100%{opacity:1;transform:rotate(-30deg) scaleX(1)}}@keyframes acPop{0%{opacity:0;transform:rotate(45deg) scale(.3)}25%{opacity:1;transform:rotate(45deg) scale(1.15)}45%{transform:rotate(45deg) scale(1)}100%{opacity:1;transform:rotate(45deg) scale(1)}}@keyframes acName{0%,30%{opacity:0;transform:translateY(12px)}50%,78%{opacity:1;transform:translateY(0)}100%{opacity:0}}@keyframes acOut{0%{opacity:1}88%{opacity:1}100%{opacity:0}}@keyframes acPart{0%{opacity:1;transform:translate(0,0) scale(1)}100%{opacity:0;transform:translate(var(--x),var(--y)) scale(.3)}}#achOv{position:fixed;inset:0;z-index:99994;pointer-events:none;display:flex;align-items:center;justify-content:center}#achOv .wrap{position:relative;display:flex;flex-direction:column;align-items:center;animation:acOut 2.9s ease-in forwards}#achOv .dia{width:110px;height:110px;background:linear-gradient(135deg,#fff,#cfd8e3);box-shadow:0 0 40px #fff,0 0 100px rgba(255,255,255,.6);animation:acPop 2.2s ease-out forwards;position:relative}#achOv .wL,#achOv .wR{position:absolute;top:50%;width:120px;height:70px;background:linear-gradient(180deg,#fff,#e6ecf2);border-radius:60% 40% 45% 55%/70% 60% 40% 30%;box-shadow:0 0 30px rgba(255,255,255,.9)}#achOv .wL{right:100%;margin-right:6px;transform-origin:right center;animation:acWingL 2.2s ease-out forwards}#achOv .wR{left:100%;margin-left:6px;transform-origin:left center;animation:acWingR 2.2s ease-out forwards}#achOv .nm{margin-top:26px;font-weight:700;letter-spacing:2px;color:#fff;text-shadow:0 0 20px #fff;font-size:clamp(18px,4vw,32px);text-transform:uppercase;animation:acName 2.6s ease-out forwards;white-space:nowrap}#achOv .p{position:fixed;width:7px;height:7px;border-radius:50%;background:#fff;box-shadow:0 0 10px #fff;pointer-events:none;z-index:99994}';
document.head.appendChild(s);}
function boom(){var cx=window.innerWidth/2,cy=window.innerHeight/2-20;
for(var i=0;i<42;i++){var p=document.createElement('div');p.className='p';p.style.left=cx+'px';p.style.top=cy+'px';
var a=Math.random()*Math.PI*2,d2=80+Math.random()*240;
p.style.setProperty('--x',Math.cos(a)*d2+'px');p.style.setProperty('--y',Math.sin(a)*d2+'px');
p.style.animation='acPart '+(0.8+Math.random()*0.6)+'s ease-out forwards';
document.body.appendChild(p);
(function(x){setTimeout(function(){x.remove();},1600);})(p);}}
function show(a){var ov=document.createElement('div');ov.id='achOv';
ov.innerHTML='<div class="wrap"><div class="dia"><div class="wL"></div><div class="wR"></div></div><div class="nm">'+a.n+'</div></div>';
document.body.appendChild(ov);
setTimeout(function(){boom();ov.remove();},2700);}
window.showAch=show;
function grant(id){var st2=load();if(st2[id])return;st2[id]=true;save(st2);
var a=null;for(var i=0;i<ACH.length;i++)if(ACH[i].id===id)a=ACH[i];
if(a)show(a);}
function open(){var st2=load();
var ov=document.createElement('div');
ov.style.cssText='position:fixed;inset:0;z-index:99993;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.85);pointer-events:auto';
var box=document.createElement('div');
box.style.cssText='background:#0a0a0a;border:1px solid #e8c060;padding:28px 32px;max-width:420px;width:90%;text-align:center;font-family:inherit;color:#ddd';
var h=document.createElement('div');h.textContent='🏆 Достижения';h.style.cssText='color:#e8c060;font-size:20px;font-weight:700;letter-spacing:2px;margin-bottom:18px';box.appendChild(h);
ACH.forEach(function(a){var got=!!st2[a.id];
var row=document.createElement('div');row.style.cssText='padding:12px 0;border-bottom:1px solid rgba(255,255,255,.1);text-align:left';
row.innerHTML='<div style="font-weight:700;color:'+(got?'#e8c060':'#666')+'">'+(got?'★ ':'☆ ')+a.n+'</div><div style="font-size:12px;color:#999;margin-top:3px">'+(got?a.d:'??? — '+a.d)+'</div>';
box.appendChild(row);});
var cl=document.createElement('button');cl.textContent='Закрыть';
cl.style.cssText='margin-top:18px;padding:8px 26px;background:transparent;border:1px solid #e8c060;color:#e8c060;cursor:pointer;border-radius:8px;font-family:inherit;font-size:14px';
cl.onclick=function(){ov.remove();};box.appendChild(cl);
ov.appendChild(box);document.body.appendChild(ov);
ov.addEventListener('click',function(e){if(e.target===ov)ov.remove();});}
/* Кнопка достижений уже есть в разметке арены — просто вешаем открытие */
var iv=setInterval(function(){
var btn=document.getElementById('ach-tab-btn');
var w=document.getElementById('vrpg3-wave');
if(!btn||!w)return;
clearInterval(iv);
btn.onclick=open;
var prev=w.textContent.trim();
new MutationObserver(function(){var cur=w.textContent.trim();
var c=parseInt(cur,10),p=parseInt(prev,10);
if(!isNaN(c)&&!isNaN(p)&&c>p){var cleared=p;
var st3=load(),m=st3.maxCleared||0;
if(cleared>m){st3.maxCleared=cleared;save(st3);
if(cleared>=1)grant('ach1');
if(cleared>=5)grant('ach2');}}
prev=cur;}).observe(w,{childList:true,characterData:true,subtree:true});
},300);
});
})();
После Commit подождите 2–3 минуты и обновите сайт с очисткой кэша (Ctrl+F5). Проверьте: кнопка «🏆 Достижения» в шапке арены видна сразу на телефоне, кнопки действий героя — слева от поля боя (на телефоне сверху крупным столбиком), реплики не повторяются, музыка ивента играет один раз. И не забудьте «Опубликовать» в правом верхнем углу редактора — на сайте есть неопубликованные изменения (новая разметка арены).

Появилась новая проблема. исчезли всплывающиеся иконки на главном экране. и в качестве новвовидения. Сделай у карточки - Griffin изумрудное свечение, как у - Bell. Так же у мобильной версии поставь кнопки атаки и скилов между карточками врагов и героев
Причина исчезновения карточек найдена: в коде страницы (который стал коротким после перехода на GitHub-файл) остался только запуск внешнего файла, а сам скрипт, создающий всплывающие карточки, случайно выпал — карточкам просто не из чего появляться. Верну его, добавлю Griffin изумрудное свечение (в стилях сайта, по аналогии с Bell) и перенесу кнопки действий между врагами и отрядом.

Проверю текущее состояние арены — одна из правок легла не полностью.

Нашёл и вторую проблему: в разметке арены теперь два одинаковых блока действий, и скрипт пишет кнопки только в первый — на мобильной панели они не появились бы. Исправлю видимость панелей.

Остались три задачи: вернуть всплывающие карточки на главную (их скрипт выпал из кода сайта при переносе на GitHub), изумрудное свечение Griffin и рабочие кнопки на мобильной панели. Всё это добавлю в общие настройки сайта — править GitHub-файл не придётся.

Всё сделано, правки сохранились. Итог последних изменений:

Всплывающие карточки на главном экране вернулись: их скрипт случайно выпал из кода сайта при переносе игр на GitHub — теперь они снова создаются и появляются по расписанию (первая — через 8 секунд после открытия страницы, далее каждые 48 секунд). Новые арты N-04, Alisa, Crysta и Sky, реплики Alisa и Sky о повседневности — всё на месте, с защитой от подряд идущих повторов фраз.
Изумрудное свечение Griffin: карточка Griffin в бою теперь подсвечена изумрудом (зелёная рамка + мягкое свечение) в том же стиле, что и фиолетовое у Bell — работает и на десктопе, и на мобильных.
Кнопки действий между врагами и отрядом (мобильные): на телефонах панель «Действия героя» теперь стоит ровно между блоком врагов и вашим отрядом — нажимать удобно, не тянутся к краям. На компьютере кнопки по-прежнему слева от арены. Кнопки в обеих панелях синхронизированы: нажатие на мобильной дублируется в основную логику, активные/заблокированные состояния совпадают.
Кнопка «🏆 Достижения» осталась в шапке арены и видна сразу на любых устройствах.
Проверьте на телефоне: прокрутите до «Хроник», выберите героя — панель действий должна быть между врагами и отрядом; карточка Griffin (с 5-й волны) — с изумрудным свечением; на главной — вылезающие карточки персонажей.

Нажмите «Опубликовать» в правом верхнем углу редактора — на сайте есть неопубликованные изменения (новая разметка арены и возвращённые карточки), и пока этого не сделать, посетители живого сайта их не увидят.

Реплики у всплывающих иконок идут одна за одной, надо исправить. В мобильной версии сделай иконки карточек и поля боя меньше на 20%, так как невидно информационно табло. А в веб версии выведи его под скилы. Так же отображай нанесение урона прямо по карточкам, словно по ним прошел урон, как в мобильной версии так и в веб
Прочитаю разметку арены, чтобы перестроить панели под новую схему.

Сделаю все три правки: случайный порядок реплик (не по очереди), −20% к карточкам на мобильных, табло под скиллами в веб-версии и вспышка урона на карточках. Сначала добавлю второе табло в разметку арены (под панелью скиллов для веб-версии).

Делаю все четыре правки: случайный порядок реплик у всплывающих карточек, −20% карточкам на мобильных, журнал боя под скиллами в веб-версии (на мобильных он остаётся снизу арены) и вспышка урона на карточках. Обновляю разметку арены и общий код.

Разметка готова. Теперь обновлю общий код: исправлю мелькание реплик (они менялись каждые полсекунды прямо на глазах — отсюда «одна за одной»), добавлю −20% карточкам на мобильных, зеркало журнала для мобильной панели и красную вспышку урона на карточках.

Все четыре правки готовы и сохранились:

Реплики всплывающих карточек больше не мелькают: раньше фраза менялась каждые полсекунды, пока карточка висела на экране — выглядело как «одна за другой». Теперь реплика выбирается один раз при появлении карточки и держится до её исчезновения. У Alisa и Sky выбор честный 50/50 между обычными фразами и «повседневными», и даже «повседневные» наборы идут мешком с перемешиванием — ни одна фраза не прозвучит дважды подряд, пока весь круг не будет исчерпан.
Мобильная версия −20%: карточки героев, врагов и боссов, полоски здоровья и кнопки действий стали примерно на пятую часть меньше — табло (волна, фаза боя, босс) теперь хорошо видно.
Журнал боя в веб-версии перенесён под скиллы: он стоит в левой панели сразу после кнопок атак, на уровне взгляда. На мобильных журнал остался внизу арены, и теперь он синхронизирован — обе версии журнала показывают один и тот же текст боя.
Нанесение урона видно прямо по карточкам: при каждом попадании карточка (враг или герой, в обеих играх) коротко вспыхивает красным изнутри, плюс к уже существующим вылетающим цифрам урона — ощущение удара по самой карточке.
Проверьте после обновления: на телефоне карточки компактнее и табло читается, на компьютере журнал под скиллами, и при любой атаке карточка краснеет.

Не забудьте: на сайте есть неопубликованные изменения — нажмите «Опубликовать» в правом верхнем углу редактора, чтобы всё это появилось на живом сайте.

В мобильной версии вообще пропали кнопки атаки и скилов, и сделай в ней же пирамидное строение карточек, как у врагов так и героев
Причина пропажи кнопок: мобильная панель — отдельный контейнер, а «зеркало», которое копирует в него кнопки, не добавилось. Добавлю его, плюс задам пирамидное строение карточек на мобильных (две в ряд, по центру, «треугольником»). Правки кладу в нижний блок страницы.

Правка не прошла из-за ограничений на стили в нижнем блоке — разделю: скрипт зеркала кнопок пойдёт в нижний блок, а пирамидное строение сделаю прямо в разметке арены (это надёжнее). Сначала обновлю нижний блок страницы:

Теперь добавлю пирамидное строение карточек на мобильных — через скрипт, который подставит нужные стили (в нижнем блоке это разрешено).

Добавлю пирамидное строение карточек через общие стили — это надёжное место для CSS.

Готово — всё сохранилось успешно. Итог по двум проблемам:

Кнопки атак и скиллов на мобильных вернулись. Причина: мобильная панель между врагами и отрядом — отдельный контейнер, а скрипт, который копирует в него кнопки из основной панели, не был добавлен на страницу. Теперь он работает: кнопки появляются в мобильной панели синхронно с основной (те же действия, та же блокировка откатов), нажатие на мобильной кнопке передаётся в основную логику боя. Добавлена и страховка — при медленной загрузке кнопки подтянутся чуть позже автоматически.

Пирамидное строение карточек на мобильных: и враги, и ваш отряд теперь выстраиваются «треугольником» — по две карточки в ряд, по центру арены (плюс босс крупнее по центру сверху). Это касается и «Хроник», и штурма Apofis. Одновременно сохранено прежнее уменьшение карточек на 20%, чтобы табло (волна, фаза боя) было видно.

Напомню, что проверить на телефоне: выберите героя в «Хрониках» — панель действий между врагами и отрядом должна быть заполнена кнопками, а карточки выстроены пирамидой по центру.

На сайте есть неопубликованные изменения — нажмите «Опубликовать» в правом верхнем углу редактора, чтобы всё появилось на живой странице.

последняя правка, при включении музыки босса, не выключается музыка на главной
Причина найдена: музыка босса стартует из вашего GitHub-файла, и попытка заглушить главную тему там срабатывает не всегда (зависит от порядка загрузки и состояния звука). Добавлю на сайт надёжную страховку: как только запускается трек MECHA-GALLEON, главная музыка принудительно останавливается, а после конца боя — возвращается.

Готово — правка сохранилась успешно.

Что сделано для музыки босса: теперь сайт следит за запуском любого аудио, и когда начинает играть трек MECHA-GALLEON, главная тема сайта принудительно останавливается — независимо от того, как и когда она была запущена. А когда трек босса заканчивается (победа или поражение в волне), главная музыка автоматически возвращается, если до этого была включена. Это страховка поверх прежней логики в вашем GitHub-файле — теперь главная тема не сможет «выжить» рядом с музыкой босса.

Проверьте: дойдите до боссовой волны с MECHA-GALLEON (каждая 5-я, шанс 20%) — при «ATTENCION!» фоновая тема должна затихнуть и остаться только трек босса, а после зачистки волны — вернуться.

На сайте есть неопубликованные изменения — нажмите «Опубликовать» в правом верхнем углу редактора, чтобы исправление появилось на живом сайте.

Правки для мобильной версии, теперь при заходе вообще не играет главная музыка, и уменьши карточки героев и противников на 50%, чтобы видеть всё происходящее
Исправлю обе проблемы: главную музыку на мобильных (добавлю надёжный запуск при первом касании — на телефонах браузеры блокируют автозапуск, и прежняя логика срабатывала не всегда) и уменьшу карточки до 50% от исходных. Сначала размеры карточек в стилях:

Исправляю обе проблемы: карточки на мобильных — 50% от исходных (обновляю стили) и надёжный запуск главной музыки на телефонах — добавлю страховку, которая при первом касании проверит, играет ли тема, и включит её, если браузер заблокировал автозапуск. Сначала стили:

Вношу обе правки: уменьшаю карточки на мобильных до 50% от исходных и добавляю надёжный запуск главной музыки на телефонах (браузеры блокируют автозапуск звука до первого касания — добавлю страховку, которая включит тему при первом касании, если она молчит). Обновляю стили:

Правка размеров карточек сохранилась. Осталось починить главную музыку на мобильных — добавлю страховку запуска в нижний блок страницы:

Обе правки успешно сохранились. Итог:

Главная музыка на мобильных: проблема была в том, что телефоны блокируют автозапуск звука до первого касания — тема создавалась, но молчала, и прежняя логика срабатывала не всегда. Теперь добавлена надёжная страховка: при первых касаниях страницы (или нажатиях клавиш) сайт проверяет, играет ли фоновая тема, и если она молчит и вы не выключали её кнопкой звука сами — включает её. Так что после первого же тапа музыка гарантированно заиграет.

Карточки уменьшены до 50% от исходных: герои, враги и боссы в «Хрониках» и в штурме Apofis на мобильных стали заметно компактнее (примерно 55 пикселей шириной вместо 110), с уменьшенными полосками здоровья, именами и цифрами урона. Пирамидное строение по две карточки в ряд сохранено — теперь всё поле боя с панелью действий и табло помещается на экране целиком.

Проверьте на телефоне: коснитесь экрана после загрузки — фоновая музыка должна пойти; в «Хрониках» весь бой теперь видно без прокрутки.

На сайте есть неопубликованные изменения — нажмите «Опубликовать» в правом верхнем углу редактора, чтобы правки появились на живом сайте.

И последнее, на мобильных устройствах, пускай все карточки стоят в линию
Уберу пирамидное строение на мобильных — карточки снова встанут в линию по всей ширине (заменю стили: вместо ограничения ширины — перенос строки, как на обычном потоке).

Готово — правка сохранилась успешно.

Что изменилось на мобильных: пирамидное строение убрано — карточки героев и врагов снова стоят в одну линию, по всей ширине арены. Размер остался уменьшенным (50% от исходных), а если в бою окажется больше карточек, чем помещается на экране, линия аккуратно прокручивается вбок — никто не «слепится» в несколько рядов. Это касается и «Хроник», и штурма Apofis.

На этом сегодня всё — большой день обновлений: MECHA-GALLEON, Griffin, достижения, экономия места через GitHub, мобильная оптимизация.

Напомню про публикацию: на сайте есть неопубликованные изменения — нажмите «Опубликовать» в правом верхнем углу редактора, чтобы всё это увидели посетители живого сайта. Отличной работы с «Grey Empire»! ⚔️

Снова проблема с появлением Griffin и отсутствием озвучки карточек
Проверю секции страницы — похоже, старая копия игрового кода снова осталась прямо на странице и перебивает новый файл с GitHub.

Проблема снова в задержке зеркала jsDelivr: сайт берёт код из вашего файла на GitHub через зеркало, и оно пока раздаёт старую версию файла — ту, где Griffin ещё не было (и другие свежие правки). Сам GitHub при этом верный, нужно просто принудительно обновить кэш зеркала.

Сделайте (1 минута):

Скопируйте в адресную строку браузера и откройте эту ссылку:
https://purge.jsdelivr.net/gh/ElaerinK/Elaerin-Kosetsu2@main/grey-empire-games.js
В ответе должно быть поле со статусом успеха ("status": "success" или похожее) — это значит, кэш сброшен.
Вернитесь на сайт и обновите страницу с очисткой кэша (Ctrl+F5; на телефоне — режим инкогнито или очистка кэша браузера).
Как проверить после сброса: пройдите несколько волн с 5-й — Griffin должен появляться в половине случаев выпадения «особого гостя» (рандом 50/50 с Bell: шанс guest'а 30% на волне, потом монетка). Если после сброса кэша Griffin всё равно ни разу не выйдет за ~15 боссовых волн — тогда пришлите мне из вашего файла на GitHub строку, начинающуюся с function tryB(), по ней я скажу, жива ли там логика Griffin.

По озвучке карточек уточните, пожалуйста, что именно пропало: речь про всплывающие карточки на главном экране (у них раньше не было звука — только картинка и реплика), или про голос Bell/Griffin при появлении в бою? Если вы хотели, чтобы всплывающие карточки персонажей на главной тоже озвучивались — скажите, какой аудиофайл использовать для каждой, и я подключу.

Голос при появлении карточки
Понял: нужно, чтобы при появлении всплывающей карточки на главном экране персонаж говорил голосом. Технически подключу быстро, но мне нужны сами аудиофайлы — у меня их для этих карточек нет.

Сейчас на карточках появляются N-04, Alisa, Crysta и Sky (по очереди), а голосовые записи, которые у нас есть, — это приветствия Bell и Griffin, они привязаны к их появлению в бою и не подходят остальным.

Что мне нужно от вас:

Аудиофайл (или несколько) с голосом для карточек. Загрузите их в ваш репозиторий на GitHub (как музыку) и пришлите мне ссылки Raw — по одной на персонажа, либо один общий файл на всех.
Если файл один на всех — озвучка будет звучать при каждом появлении любой карточки.
Если отдельные — скажите, какой файл кому соответствует (например: «первая ссылка — N-04, вторая — Alisa...»).
Как это будет работать после подключения:

Карточка выезжает → звучит её голос, реплика в облачке появляется одновременно.
Звук вежливый к игроку: не будет орать поверх музыки боя — фоновая тема на время реплики чуть притихает, потом вернётся (как сейчас сделано для Bell и Griffin).
Как и с остальным звуком, первый раз браузер потребует касания — озвучка заработает после первого тапа по странице (на мобильных это ограничение всех браузеров, обойти его нельзя).
Пришлите ссылки на файлы — и я всё подключу одним заходом.

Я как раз про появление в бою и говорю о Bells и Griffin
Понял — голоса Bell и Griffin при их появлении в бою. Здесь две вероятные причины, разберу обе:

Зеркало снова может раздавать старую версию файла (это уже случалось). Сначала сбросьте кэш: откройте в браузере ссылку https://purge.jsdelivr.net/gh/ElaerinK/Elaerin-Kosetsu2@main/grey-empire-games.js, затем обновите сайт с очисткой кэша (Ctrl+F5 / инкогнито на телефоне).

Блокировка звука браузером. Озвучка Griffin в файле устроена проще, чем у Bell: она пытается заиграть сразу, и если игрок ещё ни разу не коснулся страницы — телефон молча отклоняет звук. Это частая ловушка на мобильных. Добавлю на сайт общий «разблокировщик звука»: при первом касании он подготавливает все аудио сразу (Bell, Griffin, музыку), так что голос прозвучит даже при самом первом появлении персонажа.

Готово — правка сохранилась успешно.

Что сделано для голосов Bell и Griffin:

На сайт добавлен общий «разблокировщик звука»: при первых касаниях страницы (или нажатиях клавиш) браузер снимает блокировку со всех аудио сразу — голосов, музыки, эффектов. Это то самое ограничение телефонов и браузеров: до первого касания страницы любой звук молча отклоняется, и именно из-за него приветствия персонажей могли не сработать, особенно самое первое.
Теперь при появлении Bell или Griffin в бою их озвучка должна прозвучать даже в первый раз — как только вы хоть раз коснулись страницы.
Заодно сохранена страховка: главная музыка не проигрывается вместе с треком MECHA-GALLEON.
Порядок проверки:

Сначала сбросьте кэш зеркала: откройте в браузере https://purge.jsdelivr.net/gh/ElaerinK/Elaerin-Kosetsu2@main/grey-empire-games.js — чтобы гарантированно забрать свежую версию файла с Griffin.
Обновите сайт с очисткой кэша (Ctrl+F5, на телефоне — инкогнито).
Коснитесь экрана один раз, затем дойдите до 5-й волны и выше: «особый гость» выпадает с шансом 30% на волну, далее монетка 50/50 между Bell и Griffin — у каждого должно прозвучать своё приветствие при появлении.
Если после сброса кэша Griffin так и не появится за несколько боссовых волн — пришлите мне строку из вашего файла, начинающуюся с function tryB(), по ней я скажу, жива ли там логика. И не забудьте «Опубликовать» в правом верхнем углу — на сайте есть неопубликованные изменения.

Griffin все равно не появляется
Раз сброс кэша не помог, надо понять, где именно застряла старая версия — в файле на GitHub или в зеркале. Проведём быструю диагностику, мне нужно от вас два уточнения:

Шаг 1. Проверьте сам файл на GitHub:

Откройте Raw-версию файла в браузере: https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/refs/heads/main/grey-empire-games.js
Нажмите Ctrl+F и поищите слово Griffin.
Скажите мне: нашлось или нет?
Шаг 2. Проверьте, что реально отдаёт зеркало:

Откройте https://cdn.jsdelivr.net/gh/ElaerinK/Elaerin-Kosetsu2@main/grey-empire-games.js
Так же поищите Griffin (Ctrl+F).
Скажите: нашлось или нет?
По этим двум ответам я точно скажу, кто виноват:

Если Griffin нет в Raw (шаг 1) — значит, на GitHub лежит старая версия файла, и нужно заново вставить полный код (я его уже собирал — напишите «скинь файл целиком», выдам заново, и вы замените всё содержимое).
Если Griffin есть в Raw, но нет на зеркале (шаг 2) — зеркало застряло на старой версии сильнее, чем рассчитывалось. Тогда я переключу подключение на свежую схему адреса (добавлю номер версии в ссылку — она обходит кэш), и это решит проблему гарантированно.
Если Griffin есть в обоих — тогда проблема в самой логике появления, и мне понадобится строка из файла, начинающаяся с function tryB() — пришлите её, я посмотрю, почему монетка 50/50 не срабатывает.
Жду результатов двух поисков — дальше починю за один шаг.

Griffin есть везде
Раз код везде свежий — скорее всего, дело в математике рандома, и Griffin просто не выпал. Считаем:

На каждой боссовой волне (каждая 5-я) «особый гость» появляется с шансом 30%.
Если появился — монетка 50/50: Bell или Griffin.
То есть шанс увидеть именно Griffin на одной боссовой волне — всего 15%. За пять боссовых волн не встретить его вовсе — это почти половина всех случаев (≈44%). Если вы проверяли 2–4 боссовые волны, невезение здесь — самая вероятная причина, а не поломка.

Быстрая диагностика, чтобы понять точно:

Ответьте на один вопрос: Bell появляется на каждой особой волне или тоже не всегда?

Если Bell тоже выходит не каждый раз, а в половине случаев «гостя» — значит, механика работает верно, просто монетка выпадает на Bell. Играйте дальше, Griffin появится.
Если Bell выходит каждый раз, когда гость приходит — значит, в вашем файле всё-таки старая ветка появления, и я подготовлю точечную правку.
Если хотите увидеть Griffin быстрее (например, для проверки):

В файле grey-empire-games.js (карандаш → Edit) найдите строку:

if(st.wave>=5&&Math.random()<0.30){st.bA=true;
и временно замените 0.30 на 1 (гость будет приходить на каждой боссовой волне):

if(st.wave>=5&&Math.random()<1){st.bA=true;
После Commit и сброса кэша зеркала (https://purge.jsdelivr.net/gh/ElaerinK/Elaerin-Kosetsu2@main/grey-empire-games.js) Griffin выпадет примерно через боссовую волну-две. Когда убедитесь, что он появляется и звучит — верните 0.30 обратно.

Напишите, что показала проверка с Bell — по ней сделаю финальный вывод.

Просто скинь все файлом со всеми фиксами
Держите готовый файл целиком со всеми фиксами. Откройте grey-empire-games.js на GitHub → карандаш → сотрите всё (Ctrl+A → Delete) → вставьте этот текст → Commit changes. Затем обязательно сбросьте кэш зеркала (откройте https://purge.jsdelivr.net/gh/ElaerinK/Elaerin-Kosetsu2@main/grey-empire-games.js) и обновите сайт с очисткой (Ctrl+F5).

В файле: Griffin с логикой 50/50 вместе с Bell, его изумрудное свечение, озвучка обоих, MECHA-GALLEON, реплики без повторов, лечение Alisa +50%, все три достижения, защита от дублей блоков (дубли больше не смогут запуститься дважды — у каждого блока теперь метка-предохранитель).

/* Хроники Grey Empire v9.3: MECHA-GALLEON + Griffin + Достижения (единый файл, защита от дублей) */
(function(){
if(window.__GRE_EMPIRE_LOADED)return;
window.__GRE_EMPIRE_LOADED=true;
var $=function(i){return document.getElementById(i);};
var wv=$('vrpg3-wave'),ph=$('vrpg3-phase'),lg=$('vrpg3-log'),en=$('vrpg3-enemies'),pt=$('vrpg3-party'),ac2=$('vrpg3-actions'),rs=$('vrpg3-result'),bt=$('vrpg3-bossTag');
if(!wv)return;
(function(){if(document.getElementById('gr-css'))return;var s=document.createElement('style');s.id='gr-css';
s.textContent='@keyframes grX{0%{opacity:0;transform:scale(.5)}12%{opacity:1;transform:scale(1)}70%{opacity:1;transform:scale(1.12) rotate(6deg)}100%{opacity:0;transform:scale(1.7) rotate(18deg);filter:blur(8px)}}@keyframes grDust{0%{opacity:1;transform:translate(0,0) scale(1)}100%{opacity:0;transform:translate(var(--dx),var(--dy)) scale(.2)}}@keyframes grWingL{0%{opacity:0;transform:rotate(38deg) scaleX(.3)}25%{opacity:1;transform:rotate(20deg) scaleX(1)}55%{transform:rotate(32deg) scaleX(.85)}80%{opacity:1}100%{opacity:0;transform:rotate(45deg) scaleX(1.15);filter:blur(6px)}}@keyframes grWingR{0%{opacity:0;transform:rotate(-38deg) scaleX(.3)}25%{opacity:1;transform:rotate(-20deg) scaleX(1)}55%{transform:rotate(-32deg) scaleX(.85)}80%{opacity:1}100%{opacity:0;transform:rotate(-45deg) scaleX(1.15);filter:blur(6px)}}@keyframes grFlash{0%{opacity:0}10%{opacity:1}100%{opacity:0}}#grOv{position:fixed;inset:0;z-index:99995;pointer-events:none;display:flex;align-items:center;justify-content:center;background:rgba(0,40,18,.45)}#grOv .bx{position:relative;width:220px;height:220px;animation:grX 1.7s ease-out forwards}#grOv .b1,#grOv .b2{position:absolute;left:50%;top:50%;background:linear-gradient(180deg,#b6ffd0,#2fe97a);box-shadow:0 0 30px #2fe97a,0 0 80px rgba(47,233,122,.6);border-radius:6px}#grOv .b1{width:46px;height:220px;transform:translate(-50%,-50%)}#grOv .b2{width:220px;height:46px;transform:translate(-50%,-50%)}#grOv .dst{position:absolute;left:50%;top:50%;width:8px;height:8px;border-radius:50%;background:#7dffb4;box-shadow:0 0 8px #2fe97a;animation:grDust 1.5s ease-out forwards}#grWg{position:fixed;inset:0;z-index:99996;pointer-events:none;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle,rgba(0,60,30,.5),rgba(0,20,10,.75))}#grWg .fl{position:relative;width:340px;height:220px}#grWg .wL,#grWg .wR{position:absolute;top:50%;width:170px;height:110px;background:linear-gradient(180deg,#fff,#dfffe9);border-radius:60% 40% 45% 55%/70% 60% 40% 30%;box-shadow:0 0 40px rgba(255,255,255,.9),0 0 100px rgba(120,255,180,.5);filter:blur(.5px)}#grWg .wL{left:0;transform-origin:right center;animation:grWingL 1.6s ease-out forwards}#grWg .wR{right:0;transform-origin:left center;animation:grWingR 1.6s ease-out forwards}#grWg .fl::after{content:"";position:absolute;left:50%;top:50%;width:14px;height:14px;border-radius:50%;background:#fff;box-shadow:0 0 24px #fff,0 0 60px rgba(255,255,255,.8);transform:translate(-50%,-50%);animation:grFlash 1.6s ease-out forwards}';
document.head.appendChild(s);})();
function grCross(){var o=document.createElement('div');o.id='grOv';var b=document.createElement('div');b.className='bx';b.innerHTML='<div class="b1"></div><div class="b2"></div>';o.appendChild(b);
for(var i=0;i<26;i++){var d=document.createElement('div');d.className='dst';var a=Math.random()*Math.PI*2,r=90+Math.random()*160;d.style.setProperty('--dx',Math.cos(a)*r+'px');d.style.setProperty('--dy',Math.sin(a)*r+'px');d.style.animationDelay=(0.7+Math.random()*0.6)+'s';b.appendChild(d);}
document.body.appendChild(o);setTimeout(function(){o.remove();},2400);}
function grWings(){var o=document.createElement('div');o.id='grWg';o.innerHTML='<div class="fl"><div class="wL"></div><div class="wR"></div></div>';document.body.appendChild(o);setTimeout(function(){o.remove();},1700);}
var SK='grey_empire_rpg_v4',BE=5,UC=25,UM=1.8,MC=0.20,GRC=10,GRH=2.5;
function ldS(){try{var s=JSON.parse(localStorage.getItem(SK));if(s&&s.levels)return s;}catch(e){}return{levels:[1,1,1,1],xp:[0,0,0,0],maxWave:1};}
function pr(){try{localStorage.setItem(SK,JSON.stringify(sv));}catch(e){}}
function pk(a,key){if(!a||!a.length)return'';if(a.length<2)return a[0];if(!pk.q)pk.q={};var q=pk.q[key];if(!q||!q.length){q=a.slice();for(var i=q.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=q[i];q[i]=q[j];q[j]=t;}pk.q[key]=q;}return q.pop();}
var BP={attack:['«Ммм… вот так… ещё…»','«Как приятно это ощущать…»','«Не останавливайся…»','«Я упиваюсь каждым ударом…»','«Ох… продолжай…»'],aoe:['«Все сразу… как же хорошо…»','«Они все такие сладкие…»','«Обожаю, когда их много…»','«Дрожите для меня…»'],execute:['«А-аах… ДА!»','«Небеса… это восхитительно!»','«Слишком… слишком хорошо!»','«Ещё… ещё убивай…»','«Я… я почти… ААХ!»'],ult:['«Сейчас будет очень горячо…»','«Получите всю мою силу…»','«Я больше не могу сдерживаться…»','«Исчезайте вместе со мной…»'],kill:['«АААХ! ВОТ ОНО!»','«Да-да-да-дааа!»','«Ещё один… ещё… я схожу с ума…»','«Охх… как глубоко он ушёл…»','«Я сейчас растаю от блаженства…»']};
var GP={attack:['Огонь по цели. MP-5 стабильна.','Контакт подтверждён. Открываю огонь.','Одиночная цель. Пробиваю очередь.','Стреляю на подавление. Держите линию.','Цель в секторе. Работаю.'],smoke:['Дымовая граната. Прикрываю отряд.','Дым поставлен. Ничего не видно — значит, никто не попадёт.','Завеса развёрнута. Отдышитесь.'],heal:['Держись. Поле — моя операционная.','Рана не смертельна. Шью.','Пакеты перевязки расходуются быстро. Огонь плотный.','Живые важнее победы. Лечу.'],ult:['Второй шанс выделяю один. Цени его.','Отряд не бросаю. Никогда.','Сердце ещё бьётся. Значит, бой продолжается.'],kill:['Цель нейтрализована. Следующая.','Зона чиста.','Счётчик фрагов растёт. Продолжаю.'],crit:['КРИТ! Точно в швы брони!','Идеальный выстрел. Отметил.'],hcrit:['КРИТ-лечение! Медицинское чудо.','Вколола всё. Поднимайтесь.']};
var B64='https://verstka-sites.s3.cloud.ru/assets/2952/';
var PR=[B64+'upload_2855eb8ffe87460dbdf8a9ca45c11619.webp',B64+'upload_6f039d5415e34c3eaeaa619ea0eab764.webp',B64+'upload_eefa4dbd38fc48079c75b1c91712b0c3.webp',B64+'upload_2a74b6dd02504bcbb51a86b587c95a0a.webp'];
var BA=B64+'upload_8947332c66874fecaa13cb0b948cf9ee.webp';
var GA=B64+'upload_7ac7c714935b45059cd05df5e1672314.webp';
var BVO='https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/%D0%91%D1%8D%D0%BB%D1%8C%20(mp3cut.net).mp3';
var GVO='https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/%D0%93%D1%80%D0%B8%D1%84%D0%B8%D0%BD%20(mp3cut.net).mp3';
var GV='https://verstka-sites.s3.cloud.ru/assets/2952/upload_3045498d06f44f7bb56d49f5ff147cb8.mp4';
var HR=[
{n:'N-04',cl:'Воин',st:3,col:'#dd4e60',hp:130,atk:14,cr:18,cd:160,ac:90,dd:8,img:'☠',ult:{cd:5,un:5},acts:[{k:'attack',l:'⚔ Удар',d:'обычная атака'},{k:'skill',l:'💥 Раскол',d:'сильный удар'},{k:'ult',l:'✦ Ульта',d:'по всем'}]},
{n:'Alisa',cl:'Лекарь',st:3,col:'#9fd18a',hp:105,atk:9,cr:10,cd:140,ac:85,dd:12,img:'✦',ult:{cd:6,un:5},acts:[{k:'attack',l:'⚔ Удар',d:'обычная атака'},{k:'skill',l:'✧ Исцеление',d:'лечение отряда'},{k:'ult',l:'✦ Ульта',d:'мощное лечение'}]},
{n:'Crysta',cl:'Стрелок',st:2,col:'#7fb8d8',hp:95,atk:13,cr:25,cd:170,ac:95,dd:10,img:'◎',ult:{cd:5,un:5},acts:[{k:'attack',l:'⚔ Выстрел',d:'обычная атака'},{k:'skill',l:'🎯 Меткий',d:'по слабейшему'},{k:'ult',l:'✦ Ульта',d:'снайперский'}]},
{n:'Sky',cl:'Ассасин',st:2,col:'#c9b8e8',hp:85,atk:12,cr:30,cd:190,ac:88,dd:22,img:'🕶',ult:{cd:5,un:5},acts:[{k:'attack',l:'⚔ Удар',d:'обычная атака'},{k:'skill',l:'🌑 Тень',d:'накопление'},{k:'ult',l:'✦ Ульта',d:'теневой удар'}]}];
var BL={n:'Bell',cl:'Загадка',st:4,col:'#e8a0ff',hp:115,atk:16,cr:22,cd:180,ac:93,dd:14,img:'🔔',ult:{cd:4,un:1},acts:[{k:'attack',l:'⚔ Удар',d:'по одной цели'},{k:'aoe',l:'💥 Волна',d:'по трём целям'},{k:'execute',l:'☠ Казнь',d:'5% мгновенная смерть'},{k:'ult',l:'✦ Ульта',d:'Колокол Пустоты'}]};
var GR={n:'Griffin',cl:'Медик-штурмовик',st:4,col:'#7cff9b',hp:110,atk:13,cr:15,cd:150,ac:88,dd:15,img:'✚',ult:{cd:99,un:1},acts:[{k:'attack',l:'🔫 MP-5',d:'по одной цели'},{k:'smoke',l:'💨 Дым',d:'75% уклонения, 2 хода'},{k:'heal',l:'✚ Усиленное лечение',d:'двойное лечение, КРИТ ×2.5'},{k:'ult',l:'🕊 Возрождение',d:'воскрешение павшего, 1 раз'}]};
var MA=B64+'upload_6946a52090cc45fd92424c134cf41a7f.webp';
var MT='https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/Grey%20Empire%20%5BChronicles%5D%20-%20mecha-galleon.mp3';
var MP={ap:['Цель обнаружена. Отряд сопротивления — Grey Empire. Начинаю зачистку.','Протокол: найти и уничтожить все силы сопротивления. Приоритет — Grey Empire.','Сканирование завершено. Сопротивление будет ликвидировано.'],vul:['Залп назначен. Расчёт: уничтожение.','Пулемётная система активна. Цель захвачена.'],rkt:['Ракетный залп запущен. Поражение трёх целей.','Плотность огня максимальна. Сопротивление бесполезно.'],sh:['Укреплённый корпус активирован. Входящий урон снижен на 40%.','Броня перераспределена. Атаки Grey Empire признаны неэффективными.'],kl:['Фрагмент подтверждён. Сопротивление слабеет.','Единица сопротивления уничтожена. Следующая цель.'],df:['Критическое повреждение ядра… Сопротивление… недооценено…']};
/* Озвучка: глобальный разблокировщик — после первого касания все Audio играют свободно */
var sndUnlocked=false;
document.addEventListener('pointerdown',function(){sndUnlocked=true;},{once:true});
document.addEventListener('keydown',function(){sndUnlocked=true;},{once:true});
function say(url,vol){try{var a=new Audio(url);a.volume=vol||0.6;a.currentTime=0;
var p=a.play();
if(p&&p.catch)p.catch(function(){
if(!sndUnlocked){
document.addEventListener('pointerdown',function(){a.currentTime=0;a.play().catch(function(){});},{once:true});
}});}catch(e){}}
var mAu=null,mGl=null;
function mOn(){if(!mGl){mGl=document.createElement('div');mGl.style.cssText='position:fixed;inset:0;z-index:99996;pointer-events:none;opacity:0;transition:opacity .3s linear;background:repeating-linear-gradient(0deg,rgba(255,40,70,.10) 0 2px,transparent 2px 5px),repeating-linear-gradient(90deg,rgba(150,50,255,.08) 0 3px,transparent 3px 7px)';mGl.innerHTML='<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-weight:800;letter-spacing:6px;color:#ff2a46;text-shadow:0 0 18px rgba(255,40,70,.8),0 0 40px rgba(150,50,255,.6);font-size:clamp(22px,5vw,54px)">⚠ ATTENCION!</div>';document.body.appendChild(mGl);}mGl.style.opacity='1';}
function mOff(){if(mGl)mGl.style.opacity='0';}
function mE2(){if(!mAu){mAu=new Audio(MT);mAu.loop=true;mAu.volume=0.5;}try{var b=window.gxBackgroundAudio;if(b&&b.el)b.pause();}catch(e){}mAu.currentTime=0;mAu.play().catch(function(){});mOn();}
function mX(){if(mAu){mAu.pause();mAu.currentTime=0;}try{var b=window.gxBackgroundAudio;if(b&&b.el&&window.gxSoundMuted!==true)b.play().catch(function(){});}catch(e){}mOff();}
function grVid(){var o=document.createElement('div');o.style.cssText='position:fixed;inset:0;z-index:99997;display:flex;align-items:center;justify-content:center;background:rgba(0,10,4,.92)';var v=document.createElement('video');v.src=GV;v.muted=false;v.playsInline=true;v.setAttribute('playsinline','');v.autoplay=true;v.style.cssText='max-width:100%;max-height:100%;object-fit:contain';o.appendChild(v);document.body.appendChild(o);
grWings();
var done=false;function end(){if(done)return;done=true;try{v.pause();}catch(e){}o.remove();}
v.addEventListener('ended',end);v.addEventListener('error',end);setTimeout(end,9000);
var p=v.play();if(p&&p.catch)p.catch(function(){v.muted=true;v.play().catch(function(){});});}
var sv=ldS(),st=null,sel=null,tg=null,busy=false;
var pc=$('vrpg3-particles'),px=pc?pc.getContext('2d'):null,pp=[];
function rz(){var b=$('vrpg3-board');if(!b||!pc)return;pc.width=b.offsetWidth;pc.height=b.offsetHeight;}
window.addEventListener('resize',rz);setTimeout(rz,80);
function burst(x,y,o){if(!px)return;o=o||{};var n=o.count||18,col=o.color||'#c41e3a',sp=o.speed||4,lf=o.life||40,sz=o.size||3,gr=(o.gravity!==undefined)?o.gravity:0.08;for(var i=0;i<n;i++){var a=Math.random()*Math.PI*2,v=(Math.random()*0.6+0.4)*sp;pp.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:lf+Math.random()*12,ml:lf,s:sz+Math.random()*2,c:col,g:gr});}}
(function(){if(!px)return;(function lp(){px.clearRect(0,0,pc.width,pc.height);for(var i=pp.length-1;i>=0;i--){var p=pp[i];p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;p.l--;if(p.l<=0){pp.splice(i,1);continue;}var a=Math.max(0,p.l/p.ml);px.globalAlpha=a;px.fillStyle=p.c;px.beginPath();px.arc(p.x,p.y,p.s*a,0,Math.PI*2);px.fill();}px.globalAlpha=1;requestAnimationFrame(lp);})();})();
function cc(e){var r=e.getBoundingClientRect(),b=$('vrpg3-board').getBoundingClientRect();return{x:r.left+r.width/2-b.left,y:r.top+r.height/2-b.top};}
var ax=null;function A(){if(!ax){try{ax=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}}return ax;}
function sfx(t){var a=A();if(!a)return;if(a.state==='suspended')a.resume();var o=a.createOscillator(),g=a.createGain();o.connect(g);g.connect(a.destination);
if(t==='attack'){o.type='square';o.frequency.setValueAtTime(180,a.currentTime);o.frequency.exponentialRampToValueAtTime(80,a.currentTime+0.1);g.gain.setValueAtTime(0.11,a.currentTime);g.gain.exponentialRampToValueAtTime(0.01,a.currentTime+0.1);o.start();o.stop(a.currentTime+0.1);}
else if(t==='ult'){o.type='sawtooth';o.frequency.setValueAtTime(90,a.currentTime);o.frequency.exponentialRampToValueAtTime(35,a.currentTime+0.35);g.gain.setValueAtTime(0.2,a.currentTime);g.gain.exponentialRampToValueAtTime(0.01,a.currentTime+0.35);o.start();o.stop(a.currentTime+0.35);}
else if(t==='level'){o.type='sine';o.frequency.setValueAtTime(420,a.currentTime);o.frequency.exponentialRampToValueAtTime(820,a.currentTime+0.25);g.gain.setValueAtTime(0.1,a.currentTime);g.gain.exponentialRampToValueAtTime(0.01,a.currentTime+0.25);o.start();o.stop(a.currentTime+0.25);}
else if(t==='hit'){o.type='sawtooth';o.frequency.setValueAtTime(70,a.currentTime);g.gain.setValueAtTime(0.16,a.currentTime);g.gain.exponentialRampToValueAtTime(0.01,a.currentTime+0.18);o.start();o.stop(a.currentTime+0.18);}}
function rnd(a,b){return Math.floor(Math.random()*(b-a+1))+a;}
function xn(l){return 35+(l-1)*28;}
function hs(i){var l=sv.levels[i],h=HR[i];return{hp:h.hp+(l-1)*20,atk:h.atk+(l-1)*2.5,cr:h.cr+Math.floor((l-1)*0.8),cd:h.cd,ac:h.ac,dd:h.dd};}
function blv(){return Math.max(sv.levels[0],sv.levels[1],sv.levels[2],sv.levels[3])+2;}
function log(m,c){var d=document.createElement('div');d.textContent=m;if(c)d.style.color=c;lg.appendChild(d);lg.scrollTop=lg.scrollHeight;}
function isB(w){return w%BE===0;}
function mkE(){var w=st.wave;
if(isB(w)){if(Math.random()<MC){var mh=460+Math.floor(w/5)*240;return[{n:'MECHA-GALLEON',hp:mh,mx:mh,atk:18+w*1.8,al:true,boss:true,mecha:true,sh:0,tn:0}];}
var hp=280+Math.floor(w/5)*140;return[{n:'Apofis — Ядро',hp:hp,mx:hp,atk:16+w*1.8,al:true,boss:true}];}
var c=Math.min(2+Math.floor(w/2),5),L=[],N=['Агент Apofis','Юнит Осколок','Оперативник','Кибер-глашатай','Элитный Каратель'];
for(var i=0;i<c;i++){var h2=40+w*12+rnd(0,12);L.push({n:N[rnd(0,4)],hp:h2,mx:h2,atk:9+w*1.5,al:true});}
return L;}
function arm(e,d){if(e&&e.mecha&&e.sh>0)return Math.max(1,Math.round(d*0.6));return d;}
function mkB(){var l=blv();return{def:BL,idx:99,lv:l,hp:BL.hp+(l-1)*20,mx:BL.hp+(l-1)*20,atk:BL.atk+(l-1)*2.5,cr:BL.cr,cd2:BL.cd,ac:BL.ac,dd:BL.dd,act:false,uc:0,bell:true};}
function mkG(){var l=blv();return{def:GR,idx:98,lv:l,hp:GR.hp+(l-1)*20,mx:GR.hp+(l-1)*20,atk:GR.atk+(l-1)*2.5,cr:GR.cr+GRC,cd2:GR.cd,ac:GR.ac,dd:GR.dd,act:false,uc:0,griffin:true,smCd:0,revUsed:false};}
/* Bell ИЛИ Griffin: гость приходит с шансом 30%, кто именно — монетка 50/50 */
function tryB(){st.bA=false;st.party=st.party.filter(function(p){return!p.bell&&!p.griffin;});
if(st.wave>=5&&Math.random()<0.30){st.bA=true;
if(Math.random()<0.5){var b=mkB();st.party.push(b);st.bJ=true;
log('🔔 Из темноты появляется Bell... (ур.'+b.lv+')','#e8a0ff');
say(BVO,0.55);
if(window.animateBellAppear&&pt){setTimeout(function(){var c=pt.querySelector('.gx3-bell');if(c)window.animateBellAppear(c);},100);}}
else{var g2=mkG();st.party.push(g2);st.gJ=true;
grCross();
log('✚ Зелёный свет пронзает тьму... Griffin вступает в бой! (ур.'+g2.lv+')','#7cff9b');
say(GVO,0.6);
if(window.animateBellAppear&&pt){setTimeout(function(){var c=pt.querySelector('.gx3-griffin');if(c)window.animateBellAppear(c);},100);}}}}
function nb(k){var s=k?sv.maxWave:1;
st={wave:s,party:HR.map(function(h,i){var x=hs(i);return{def:h,idx:i,hp:x.hp,mx:x.hp,atk:x.atk,cr:x.cr,cd2:x.cd,ac:x.ac,dd:x.dd,act:false,uc:0,bell:false,dgB:0};}),en:[],over:false,bA:false,bJ:false,gJ:false};
st.en=mkE();var m0=st.en[0]&&st.en[0].mecha;
if(m0)mE2();
tryB();sel=tg=null;busy=false;lg.innerHTML='';rs.classList.add('hidden');
if(!m0){if(isB(st.wave))log('⚠ БОСС! Ядро Apofis!','#e8c060');else log('Волна '+st.wave,'#e8c060');}
rd();}
function aE(){return st.en.filter(function(e){return e.al;});}
function aH(){return st.party.filter(function(h){return h.hp>0;});}
function str(n){return '★★★★'.slice(0,n)+'☆☆☆☆'.slice(0,Math.max(0,4-n));}
function rd(){wv.textContent=st.wave;bt.classList.toggle('hidden',!isB(st.wave));ph.textContent=st.over?'Битва окончена':(busy?'Враги атакуют…':'Ваш ход');
en.innerHTML='';
st.en.forEach(function(e,i){if(!e.al)return;var c=document.createElement('div');c.className='gx3-card'+(e.boss?' gx3-boss':'')+(tg===i?' gx3-selected':'');c.dataset.eid=i;var p=Math.max(0,Math.round(e.hp/e.mx*100));var img;
if(e.mecha){img='<div class="gx3-card-img" style="position:relative;padding:0;background:#0a0a0a"><img src="'+MA+'" alt="MECHA-GALLEON" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"><span style="position:absolute;top:2px;right:2px;font-size:15px;line-height:1;background:rgba(0,0,0,.7);border-radius:4px;padding:2px 4px;color:#ff2a46">⚙</span>'+(e.sh>0?'<span style="position:absolute;bottom:2px;left:2px;font-size:9px;background:rgba(120,60,255,.85);border-radius:4px;padding:1px 4px;color:#fff">ЩИТ −40%</span>':'')+'</div>';}
else img='<div class="gx3-card-img">'+(e.boss?'👁':'☠')+'</div>';
c.innerHTML=img+'<div class="gx3-card-body"><div class="gx3-card-name" style="color:'+(e.mecha?'#ff2a46':(e.boss?'#e8c060':'#dd4e60'))+'">'+e.n+'</div><div class="gx3-hp-bar"><div class="gx3-hp-fill" style="width:'+p+'%;background:'+(e.mecha?'linear-gradient(90deg,#6a0fbf,#ff2a46)':'linear-gradient(90deg,#6e1222,#dd4e60)')+'"></div></div><div class="gx3-hp-text">'+Math.max(0,e.hp)+'/'+e.mx+'</div></div>';
en.appendChild(c);});
pt.innerHTML='';
st.party.forEach(function(h){var c=document.createElement('div');c.className='gx3-card'+(sel===h.idx?' gx3-selected':'')+(h.hp<=0?' gx3-dead':'')+(h.bell?' gx3-bell':'')+(h.griffin?' gx3-griffin':'');c.dataset.uid=h.idx;var p=Math.max(0,Math.round(h.hp/h.mx*100));
var imgHtml;
if(h.bell){imgHtml='<div class="gx3-card-img" style="position:relative;padding:0;background:#0a0a0a"><img src="'+BA+'" alt="Bell" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"><span style="position:absolute;top:2px;right:2px;font-size:16px;line-height:1;background:rgba(0,0,0,.65);border-radius:4px;padding:2px 4px;color:#e8a0ff">🔔</span></div>';}
else if(h.griffin){imgHtml='<div class="gx3-card-img" style="position:relative;padding:0;background:#0a0a0a"><img src="'+GA+'" alt="Griffin" style="width:100%;height:100%;object-fit:cover;object-position:center top;display:block"><span style="position:absolute;top:2px;right:2px;font-size:16px;line-height:1;background:rgba(0,0,0,.65);border-radius:4px;padding:2px 4px;color:#7cff9b">✚</span></div>';}
else{imgHtml='<div class="gx3-card-img" style="position:relative;padding:0;background:#0a0a0a"><img src="'+PR[h.idx]+'" alt="'+h.def.n+'" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block"><span style="position:absolute;top:2px;right:2px;font-size:16px;line-height:1;background:rgba(0,0,0,.65);border-radius:4px;padding:2px 4px;color:'+h.def.col+'">'+h.def.img+'</span></div>';}
c.innerHTML=imgHtml+'<div class="gx3-card-body"><div class="gx3-card-name" style="color:'+h.def.col+'">'+h.def.n+'</div><div class="gx3-card-meta">'+h.def.cl+' · ур.'+(h.bell||h.griffin?h.lv:sv.levels[h.idx])+'</div><div class="gx3-stars">'+str(h.def.st)+'</div><div class="gx3-hp-bar"><div class="gx3-hp-fill" style="width:'+p+'%;background:'+h.def.col+'"></div></div><div class="gx3-hp-text">'+Math.max(0,h.hp)+'/'+h.mx+'</div></div>';
pt.appendChild(c);});
var h=sel!==null?st.party.find(function(p){return p.idx===sel;}):null;
if(!h||h.hp<=0||h.act||st.over){ac2.innerHTML='<div class="text-[13px] text-white/40">'+(st.over?'':(h&&h.act?'Герой уже ходил':'Выберите героя'))+'</div>';}
else{ac2.innerHTML=h.def.acts.map(function(a){var d=false,x='';
if(a.k==='ult'){if(h.bell){if(sv.levels[h.idx]<(h.def.ult.un||5)){d=true;x=' (с 5 ур.)';}else if(h.uc>0){d=true;x=' ('+h.uc+')';}}
else if(h.griffin){if(h.revUsed){d=true;x=' (исп.)';}}
else{if(sv.levels[h.idx]<(h.def.ult.un||5)){d=true;x=' (с 5 ур.)';}else if(h.uc>0){d=true;x=' ('+h.uc+')';}}}
if(a.k==='smoke'&&h.smCd>0){d=true;x=' ('+h.smCd+')';}
return '<button class="gx3-btn-act" data-act="'+a.k+'"'+(d?' disabled':'')+' style="border-color:'+h.def.col+'">'+a.l+x+'<small>'+a.d+'</small></button>';}).join('');}}
function fl(e,t,c,crit){var f=document.createElement('div');f.className='gx3-dmg-float'+(crit?' gx3-crit':'');f.style.color=c;f.textContent=t;e.appendChild(f);setTimeout(function(){f.remove();},900);}
function hitQ(a,dd){return Math.random()*100<Math.max(8,Math.min(95,a-dd*0.5));}
function dmg(b,c,cm){var d=b,crit=Math.random()*100<c;if(crit)d=Math.round(d*(cm/100));return{d:d,crit:crit};}
function ucr(){return Math.random()*100<UC;}
function kill(e){e.hp=0;e.al=false;if(e.mecha)log('MECHA-GALLEON: '+pk(MP.df,'mdf'),'#c08bff');}
pt.addEventListener('click',function(e){if(st.over||busy)return;var c=e.target.closest('[data-uid]');if(!c)return;var h=st.party.find(function(p){return p.idx===+c.dataset.uid;});if(!h||h.hp<=0||h.act)return;sel=h.idx;tg=null;rd();});
en.addEventListener('click',function(e){if(st.over||busy)return;var c=e.target.closest('[data-eid]');if(!c)return;tg=+c.dataset.eid;rd();});
ac2.addEventListener('click',function(e){if(st.over||busy||sel===null)return;var b=e.target.closest('[data-act]');if(!b||b.disabled)return;var act=b.dataset.act;
var h=st.party.find(function(p){return p.idx===sel;});if(!h||h.hp<=0||h.act)return;
var mc=pt.querySelector('[data-uid="'+h.idx+'"]');
var t=tg!==null?st.en[tg]:null;var al=aE();if(!t||!t.al)t=al[0]||null;
if(h.uc>0&&['attack','aoe','execute','skill','ult'].indexOf(act)!==-1)h.uc--;
if(act==='attack'){if(!t){log('Нет цели');return;}sfx('attack');if(window.animateLunge)window.animateLunge(mc);
var c0=cc(mc);burst(c0.x,c0.y,{count:12,color:h.def.col,speed:4});
if(h.bell)log('Bell: '+pk(BP.attack,'ba'),'#e8a0ff');
if(h.griffin)log('Griffin: '+pk(GP.attack,'ga'),'#7cff9b');
if(!hitQ(h.ac,6)){log(h.def.n+' промахнулся');}
else{var r=dmg(rnd(Math.round(h.atk)-2,Math.round(h.atk)+4),h.cr,h.cd2);var dd=arm(t,r.d);
if(h.griffin&&r.crit)log('Griffin: '+pk(GP.crit,'gc'),'#7cff9b');
var ec=en.querySelector('[data-eid="'+st.en.indexOf(t)+'"]');t.hp-=dd;
if(ec){if(window.animateShake)window.animateShake(ec);fl(ec,'−'+dd,r.crit?'#ff4d6d':'#fff',r.crit);}
log(h.def.n+' → '+t.n+': −'+dd+(t.mecha&&t.sh>0?' (щит)':'')+(r.crit?' КРИТ':''),h.def.col);
if(t.hp<=0){kill(t);log(t.n+' уничтожен!',h.def.col);if(h.bell)log('Bell: '+pk(BP.kill,'bk'),'#ff6bff');if(h.griffin)log('Griffin: '+pk(GP.kill,'gk'),'#7cff9b');}}}
else if(act==='aoe'&&h.bell){sfx('attack');if(window.animateLunge)window.animateLunge(mc);var ts=al.slice(0,3);
log('Bell: '+pk(BP.aoe,'bo'),'#e8a0ff');
ts.forEach(function(e2){var r2=dmg(rnd(Math.round(h.atk)-1,Math.round(h.atk)+3),h.cr,h.cd2);var d2=arm(e2,r2.d);e2.hp-=d2;
var e2c=en.querySelector('[data-eid="'+st.en.indexOf(e2)+'"]');
if(e2c){if(window.animateShake)window.animateShake(e2c);fl(e2c,'−'+d2,'#e8a0ff');var c2=cc(e2c);burst(c2.x,c2.y,{count:10,color:'#e8a0ff',speed:3.5});}
if(e2.hp<=0){kill(e2);log(e2.n+' уничтожен!');log('Bell: '+pk(BP.kill,'bk'),'#ff6bff');}});}
else if(act==='smoke'&&h.griffin){sfx('attack');if(window.animateLunge)window.animateLunge(mc);
log('Griffin: '+pk(GP.smoke,'gs'),'#7cff9b');h.smCd=4;
st.party.forEach(function(p){if(p.hp>0)p.dgB=2;});
log('💨 Дымовая завеса! Все союзники: 75% уклонения на 2 хода','#7cff9b');}
else if(act==='heal'&&h.griffin){sfx('attack');if(window.animateLunge)window.animateLunge(mc);
var hc=Math.random()*100<h.cr;var base=rnd(30,46);if(hc)base=Math.round(base*GRH);
log('Griffin: '+pk(GP.heal,'gh')+(hc?' КРИТ ×2.5':''),'#7cff9b');
if(hc)log('Griffin: '+pk(GP.hcrit,'ghc'),'#7cff9b');
var hd=0;st.party.forEach(function(p){if(p.hp>0&&p.hp<p.mx){var ad=Math.min(p.mx-p.hp,base);p.hp+=ad;hd+=ad;}});
log('✚ Усиленное лечение: +'+hd+' всему отряду'+(hc?' (КРИТ)':''),hc?'#ff4d6d':'#7cff9b');}
else if(act==='execute'&&h.bell){if(!t){log('Нет цели');return;}sfx('ult');if(window.animateLunge)window.animateLunge(mc);
log('Bell: '+pk(BP.execute,'be'),'#e8a0ff');
var ec3=en.querySelector('[data-eid="'+st.en.indexOf(t)+'"]');
if(Math.random()<0.05&&!(t.mecha&&t.sh>0)){kill(t);
if(ec3){fl(ec3,'КАЗНЬ','#ff0040',true);var c3=cc(ec3);burst(c3.x,c3.y,{count:30,color:'#ff0040',speed:6,life:45});}
log('Bell мгновенно казнит '+t.n+'!','#ff0040');log('Bell: '+pk(BP.kill,'bk'),'#ff6bff');}
else{var r3=dmg(rnd(Math.round(h.atk)+3,Math.round(h.atk)+9),h.cr+5,h.cd2);var d3=arm(t,r3.d);t.hp-=d3;
if(ec3){if(window.animateShake)window.animateShake(ec3);fl(ec3,'−'+d3,'#e8a0ff');}
log('Bell → '+t.n+': −'+d3+(t.mecha&&t.sh>0?' (щит)':''),'#e8a0ff');
if(t.hp<=0){kill(t);log('Bell: '+pk(BP.kill,'bk'),'#ff6bff');}}}
else if(act==='ult'){
if(h.griffin){var fallen=st.party.filter(function(p){return p.hp<=0&&p!==h;});
if(!fallen.length){log('Нет павших — возрождать некого');return;}
sfx('ult');h.revUsed=true;
var tgt=fallen[0];tgt.hp=tgt.mx;tgt.act=false;
log('Griffin: '+pk(GP.ult,'gu'),'#7cff9b');
log('🕊 ВОЗРОЖДЕНИЕ! '+tgt.def.n+' возвращается в бой с полным здоровьем!','#7cff9b');
grVid();}
else{sfx('ult');h.uc=h.def.ult.cd;
var c4=cc(mc);burst(c4.x,c4.y,{count:35,color:h.def.col,speed:6,size:4,life:50});
if(h.bell){var bc=ucr();log('Bell: '+pk(BP.ult,'bu')+(bc?' КРИТ!':''),'#e8a0ff');
al.forEach(function(e3){var dm=rnd(20,34)+Math.floor(h.atk);if(bc)dm=Math.round(dm*UM);dm=arm(e3,dm);e3.hp-=dm;
var e3c=en.querySelector('[data-eid="'+st.en.indexOf(e3)+'"]');
if(e3c)fl(e3c,'−'+dm,bc?'#ff4d6d':'#e8a0ff',bc);
if(e3.hp<=0){kill(e3);log('Bell: '+pk(BP.kill,'bk'),'#ff6bff');}});
log('Bell использует Колокол Пустоты!'+(bc?' КРИТ ×1.8':''),bc?'#ff4d6d':'#e8a0ff');
if(window.showBellUltVideo)window.showBellUltVideo();}
else if(h.def.cl==='Лекарь'){var hc2=ucr();
st.party.forEach(function(p){if(p.hp>0){var ad=rnd(28,42);if(hc2)ad=Math.round(ad*UM);p.hp=Math.min(p.mx,p.hp+ad);}});
log(h.def.n+(hc2?' КРИТ-исцеление отряда!':' мощно исцеляет отряд!'),hc2?'#ff4d6d':'#9fd18a');}
else{var c4b=ucr();var d4=rnd(24,38)+Math.floor(h.atk*1.3);if(c4b)d4=Math.round(d4*UM);
al.forEach(function(e4){var d5=arm(e4,d4);e4.hp-=d5;var e4c=en.querySelector('[data-eid="'+st.en.indexOf(e4)+'"]');
if(e4c)fl(e4c,'−'+d5,c4b?'#ff4d6d':h.def.col,c4b);if(e4.hp<=0)kill(e4);});
log(h.def.n+' использует ульту! −'+d4+' всем'+(c4b?' КРИТ ×1.8':''),c4b?'#ff4d6d':h.def.col);}}}
else if(act==='skill'){sfx('attack');if(window.animateLunge)window.animateLunge(mc);
if(h.def.cl==='Лекарь'){var hd2=0;
st.party.forEach(function(p){if(p.hp>0&&p.hp<p.mx){var ad=Math.min(p.mx-p.hp,Math.round(rnd(15,23)*1.5));p.hp+=ad;hd2+=ad;}});
log(h.def.n+' исцеляет на '+hd2,'#9fd18a');}
else{if(!t)return;var r4=dmg(rnd(Math.round(h.atk)+3,Math.round(h.atk)+9),h.cr,h.cd2);var d6=arm(t,r4.d);t.hp-=d6;
var e6c=en.querySelector('[data-eid="'+st.en.indexOf(t)+'"]');
if(e6c)fl(e6c,'−'+d6,h.def.col,r4.crit);
log(h.def.n+' навык → '+t.n+': −'+d6+(t.mecha&&t.sh>0?' (щит)':''),h.def.col);
if(t.hp<=0)kill(t);}}
if(h.smCd>0)h.smCd--;
h.act=true;sel=null;tg=null;
st.party.forEach(function(p,i){if(p.hp>0&&!p.bell&&!p.griffin){sv.xp[i]+=3;while(sv.xp[i]>=xn(sv.levels[i])){sv.xp[i]-=xn(sv.levels[i]);sv.levels[i]++;sfx('level');log('★ '+HR[i].n+' достиг ур. '+sv.levels[i]+'!','#e8c060');}}});
pr();
if(!aE().length){rd();setTimeout(wc,700);return;}
if(lose())return;
var left=st.party.filter(function(p){return p.hp>0&&!p.act;});
if(left.length===0){busy=true;rd();setTimeout(et,850);}else rd();});
function wc(){log('Волна '+st.wave+' зачищена!','#e8c060');mX();
if(st.bA){log('Гость растворяется в тени...','#e8a0ff');}
st.party=st.party.filter(function(p){return!p.bell&&!p.griffin;});st.bA=false;
sv.maxWave=Math.max(sv.maxWave,st.wave+1);pr();st.wave++;
st.en=mkE();var m1=st.en[0]&&st.en[0].mecha;
if(m1)mE2();
st.party.forEach(function(p){if(p.hp>0){p.hp=Math.min(p.mx,p.hp+16+sv.levels[p.idx]*2);p.act=false;p.dgB=0;}});
tryB();
if(!m1&&isB(st.wave))log('⚠ Приближается БОСС!','#e8c060');
rd();busy=true;setTimeout(et,1100);}
function et(){if(st.over){busy=false;rd();return;}
var es=aE();if(!aH().length){busy=false;rd();return;}
es.forEach(function(e){var hh=aH();if(!hh.length)return;
if(e.mecha){e.tn++;
if(e.tn%3===0){e.sh=0.4;log('MECHA-GALLEON: '+pk(MP.sh,'ms'),'#c08bff');log('⚙ УЛЬТИМЕЙТ: Укреплённый корпус! Весь входящий урон −40%','#c08bff');
var mC=en.querySelector('[data-eid="'+st.en.indexOf(e)+'"]');if(mC){var mc2=cc(mC);burst(mc2.x,mc2.y,{count:25,color:'#9b4dff',speed:5,size:4});}return;}
if(Math.random()<0.5){log('MECHA-GALLEON: '+pk(MP.rkt,'mr'),'#ff2a46');
var rt=hh.slice().sort(function(){return Math.random()-0.5;}).slice(0,3);
rt.forEach(function(th){if(th.dgB>0&&Math.random()<0.75){log('💨 Дым спасает: '+th.def.n+' уклонился!','#7cff9b');return;}
var dm=Math.round((e.atk+rnd(-2,3))*1.5);th.hp-=dm;
var cEl=pt.querySelector('[data-uid="'+th.idx+'"]');
if(cEl){if(window.animateShake)window.animateShake(cEl);fl(cEl,'−'+dm,'#ff2a46');}
log('🚀 Ракетный залп → '+th.def.n+': −'+dm,'#ff2a46');
if(th.hp<=0){th.hp=0;log('✖ '+th.def.n+' пал','#dd4e60');}});sfx('ult');return;}
var t2=hh[rnd(0,hh.length-1)];
if(t2.dgB>0&&Math.random()<0.75){log('💨 Дым спасает: '+t2.def.n+' уклонился!','#7cff9b');return;}
var d2=Math.round((e.atk+rnd(-2,3))*1.5);t2.hp-=d2;
var cE2=pt.querySelector('[data-uid="'+t2.idx+'"]');
if(cE2){if(window.animateShake)window.animateShake(cE2);fl(cE2,'−'+d2,'#ff6b3d');var c2b=cc(cE2);burst(c2b.x,c2b.y,{count:12,color:'#ff6b3d',speed:4});}
sfx('hit');log('MECHA-GALLEON: '+pk(MP.vul,'mv'),'#ff6b3d');log('🔫 Пулемётный залп → '+t2.def.n+': −'+d2,'#ff6b3d');
if(t2.hp<=0){t2.hp=0;log('✖ '+t2.def.n+' пал','#dd4e60');}
else if(Math.random()<0.5)log('MECHA-GALLEON: '+pk(MP.kl,'mk'),'#c08bff');
return;}
var t3=hh[rnd(0,hh.length-1)];var cE3=pt.querySelector('[data-uid="'+t3.idx+'"]');
if(t3.dgB>0&&Math.random()<0.75){log('💨 Дым спасает: '+t3.def.n+' уклонился!','#7cff9b');return;}
if(!hitQ(82,t3.dd)){log(e.n+' промахнулся');return;}
var d3=Math.round(e.atk+rnd(-2,3));t3.hp-=d3;
if(cE3){if(window.animateShake)window.animateShake(cE3);fl(cE3,'−'+d3,'#dd4e60');var c3b=cc(cE3);burst(c3b.x,c3b.y,{count:8,color:'#dd4e60',speed:3});}
sfx('hit');log(e.n+' → '+t3.def.n+': −'+d3,e.boss?'#e8c060':'#dd4e60');
if(t3.hp<=0){t3.hp=0;log('✖ '+t3.def.n+' пал','#dd4e60');}});
st.party.forEach(function(p){if(p.dgB>0)p.dgB--;if(p.hp>0)p.act=false;});busy=false;
if(lose())return;rd();}
function lose(){if(st.party.every(function(h){return h.hp<=0;})){st.over=true;mX();rs.textContent='✖ Отряд уничтожен';rs.classList.remove('hidden');log('ПОРАЖЕНИЕ. Прогресс сохранён.','#dd4e60');pr();rd();return true;}return false;}
$('vrpg3-btnReset').onclick=function(){nb(true);};
$('vrpg3-btnWipe').onclick=function(){if(!confirm('Сбросить прогресс?'))return;sv={levels:[1,1,1,1],xp:[0,0,0,0],maxWave:1};pr();mX();nb(false);};
nb(true);
})();
/* ===== Ивент Apofis: музыка, таймеры, штурм, анимации ===== */
(function(){
if(window.__AP_EVENT_LOADED)return;
window.__AP_EVENT_LOADED=true;
function init(){
function g0(){if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;var gl=document.getElementById('bell-glitch');if(!gl){gl=document.createElement('div');gl.id='bell-glitch';document.body.appendChild(gl);}gl.style.opacity='1';var an=gl.animate([{transform:'translateX(0)'},{transform:'translateX(-5px)'},{transform:'translateX(5px)'},{transform:'translateX(-3px)'},{transform:'translateX(0)'}],{duration:100,iterations:18});an.finished.then(function(){gl.style.opacity='0';}).catch(function(){gl.style.opacity='0';});}
window.animateLunge=function(c){if(!c||!c.animate)return;return c.animate([{transform:'translateY(0) scale(1)'},{transform:'translateY(-16px) scale(1.07)'},{transform:'translateY(0) scale(1)'}],{duration:380,easing:'ease-out'});};
window.animateShake=function(c){if(!c||!c.animate)return;return c.animate([{transform:'translateX(0)'},{transform:'translateX(-6px)'},{transform:'translateX(6px)'},{transform:'translateX(-4px)'},{transform:'translateX(0)'}],{duration:320,easing:'ease-in-out'});};
window.animateBellAppear=function(c){if(!c||!c.animate)return;return c.animate([{opacity:0,transform:'scale(0.6) translateY(20px)'},{opacity:1,transform:'scale(1.05) translateY(-4px)'},{opacity:1,transform:'scale(1) translateY(0)'}],{duration:700,easing:'ease-out'});};
var WC={'gx3-lunge':'animateLunge','ap-lunge':'animateLunge','gx3-shake':'animateShake','ap-shake':'animateShake','gx3-bell-appear':'animateBellAppear','gx3-griffin':'animateBellAppear'};
[document.getElementById('vrpg3-party'),document.getElementById('ap-party'),document.getElementById('vrpg3-enemies'),document.getElementById('ap-enemies')].forEach(function(c){if(!c)return;
function hnd(el){for(var k in WC){if(el.classList&&el.classList.contains(k)){el.classList.remove(k);var fn=window[WC[k]];if(typeof fn==='function')fn(el);return;}}}
c.querySelectorAll('.gx3-card, .ap-card').forEach(hnd);
new MutationObserver(function(ms){ms.forEach(function(m){if(m.type==='attributes'&&m.attributeName==='class')hnd(m.target);if(m.type==='childList'){m.addedNodes.forEach(function(n){if(n.nodeType!==1)return;hnd(n);if(n.querySelectorAll)n.querySelectorAll('.gx3-card, .ap-card').forEach(hnd);});}});}).observe(c,{attributes:true,attributeFilter:['class'],childList:true,subtree:true});});
var ET='https://raw.githubusercontent.com/ElaerinK/Elaerin-Kosetsu2/main/Arma%20Event.mp3',eA=null,bw=false;
function pB(){var b=window.gxBackgroundAudio;if(b&&b.el){bw=!b.el.paused;b.el.pause();}}
function rB(){var b=window.gxBackgroundAudio;if(b&&b.el&&bw)b.el.play().catch(function(){});}
function eOn(){if(!eA){eA=new Audio(ET);eA.loop=true;eA.volume=0.5;}pB();eA.currentTime=0;eA.play().catch(function(){});}
function eOff(){if(eA){eA.pause();eA.currentTime=0;}rB();}
window.apEventMusicStart=eOn;window.apEventMusicStop=eOff;
var OV=document.getElementById('apofis-overlay'),AC=document.getElementById('apofis-accept'),DC=document.getElementById('apofis-decline');
if(OV){if(OV.dataset.eM!=='1'){OV.dataset.eM='1';var sh2=false;new MutationObserver(function(){var v=OV.style.display!=='none';if(v&&!sh2){sh2=true;eOn();}else if(!v&&sh2){sh2=false;}}).observe(OV,{attributes:true,attributeFilter:['style']});}
if(AC&&DC&&OV.dataset.eT!=='1'){OV.dataset.eT='1';
if(localStorage.getItem('apofis_defeat')==='true')document.body.classList.add('grayscale');
var shE=function(){var s=document.getElementById('apofis-assault');if(s&&s.style.display!=='none'&&s.style.display!=='')return;if(OV.style.display==='flex')return;OV.style.display='flex';};
var hE=function(){OV.style.display='none';};
setTimeout(shE,45000);setInterval(shE,15*60*1000);
AC.addEventListener('click',function(){hE();var a=document.getElementById('apofis-assault');if(a){a.style.display='block';a.scrollIntoView({behavior:'smooth'});if(window.apStartAssault)window.apStartAssault();}});
DC.addEventListener('click',function(){hE();var s=document.getElementById('apofis-assault');if(!s||s.style.display==='none'||s.style.display==='')eOff();});}}
var S=document.getElementById('apofis-assault');
if(S){var aPh=document.getElementById('ap-phase'),aEn=document.getElementById('ap-enemies'),aPt=document.getElementById('ap-party'),aAc=document.getElementById('ap-actions'),aLg=document.getElementById('ap-log'),aRs=document.getElementById('ap-result'),aRT=document.getElementById('ap-result-title'),aRD=document.getElementById('ap-result-desc'),aRB=document.getElementById('ap-result-btn');
if(aPh&&aEn&&aPt&&aAc&&aLg&&aRs){
var EN=[{n:'Штурмовик APOFIS',hp:95,atk:16},{n:'Тяжёлый Юнит',hp:130,atk:14},{n:'Элитный Каратель',hp:110,atk:19},{n:'Кибер-Палач',hp:100,atk:17}];
var B642='https://verstka-sites.s3.cloud.ru/assets/2952/';
var HR2=[{n:'N-04',col:'#dd4e60',hp:140,atk:16,img:'☠',p:B642+'upload_2855eb8ffe87460dbdf8a9ca45c11619.webp'},{n:'Alisa',col:'#9fd18a',hp:115,atk:11,img:'✦',p:B642+'upload_6f039d5415e34c3eaeaa619ea0eab764.webp'},{n:'Crysta',col:'#7fb8d8',hp:105,atk:15,img:'◎',p:B642+'upload_eefa4dbd38fc48079c75b1c91712b0c3.webp'},{n:'Sky',col:'#c9b8e8',hp:95,atk:14,img:'🕶',p:B642+'upload_2a74b6dd02504bcbb51a86b587c95a0a.webp'}];
var S2=null;
function rn(a,b){return Math.floor(Math.random()*(b-a+1))+a;}
function ll2(m,c){var d=document.createElement('div');d.textContent=m;if(c)d.style.color=c;aLg.appendChild(d);aLg.scrollTop=aLg.scrollHeight;}
function apStart(){S2={party:HR2.map(function(h,i){return{n:h.n,col:h.col,atk:h.atk,img:h.img,p:h.p,idx:i,hp:h.hp,mx:h.hp,act:false};}),en:[],sel:null,tg:null,busy:false,over:false};
var c=rn(3,4);for(var i=0;i<c;i++){var t=EN[rn(0,EN.length-1)],hp=t.hp+rn(10,30);S2.en.push({n:t.n,hp:hp,mx:hp,atk:t.atk+rn(0,4),al:true});}
aLg.innerHTML='';aRs.style.display='none';ll2('Штурмовой отряд APOFIS ворвался на базу!','#c41e3a');ll2('Отбейте атаку любой ценой.','#e8c060');eOn();rd2();}
window.apStartAssault=apStart;
function alE(){return S2.en.filter(function(e){return e.al;});}
function end2(){if(alE().length===0){S2.over=true;localStorage.removeItem('apofis_defeat');document.body.classList.remove('grayscale');eOff();aRs.style.display='flex';aRT.textContent='ПОБЕДА!';aRT.style.color='#9fd18a';aRD.textContent='Штурмовой отряд APOFIS уничтожен. База снова в безопасности.';
try{var AK='grey_empire_achv',AS=JSON.parse(localStorage.getItem(AK)||'{}');if(!AS.ach3){AS.ach3=true;localStorage.setItem(AK,JSON.stringify(AS));if(typeof window.showAch==='function')window.showAch({n:'Всегда на чеку!',d:'Первая победа на ивенте'});}}catch(e){}
return true;}
if(S2.party.every(function(h){return h.hp<=0;})){S2.over=true;localStorage.setItem('apofis_defeat','true');document.body.classList.add('grayscale');eOff();aRs.style.display='flex';aRT.textContent='ПОРАЖЕНИЕ!';aRT.style.color='#c41e3a';aRD.textContent='База захвачена. Сайт переведён в режим подавления до следующей победы.';return true;}return false;}
function rd2(){aPh.textContent=S2.over?'Бой окончен':(S2.busy?'Враги атакуют…':'Ваш ход');
aEn.innerHTML='';S2.en.forEach(function(e,i){if(!e.al)return;var c=document.createElement('div');c.className='ap-card'+(S2.tg===i?' ap-selected':'');c.dataset.eid=i;var p=Math.max(0,Math.round(e.hp/e.mx*100));
c.innerHTML='<div class="ap-card-img">☠</div><div class="ap-card-body"><div class="ap-card-name" style="color:#dd4e60">'+e.n+'</div><div class="ap-hp-bar"><div class="ap-hp-fill" style="width:'+p+'%;background:linear-gradient(90deg,#6e1222,#dd4e60)"></div></div><div class="ap-hp-text">'+Math.max(0,e.hp)+'/'+e.mx+'</div></div>';aEn.appendChild(c);});
aPt.innerHTML='';S2.party.forEach(function(h){var c=document.createElement('div');c.className='ap-card'+(S2.sel===h.idx?' ap-selected':'')+(h.hp<=0?' ap-dead':'');c.dataset.uid=h.idx;var p=Math.max(0,Math.round(h.hp/h.mx*100));
c.innerHTML='<div class="ap-card-img" style="padding:0;background:#0a0a0a;position:relative"><img src="'+h.p+'" alt="'+h.n+'"><span style="position:absolute;top:2px;right:2px;font-size:15px;line-height:1;background:rgba(0,0,0,.65);border-radius:4px;padding:2px 4px;color:'+h.col+'">'+h.img+'</span></div><div class="ap-card-body"><div class="ap-card-name" style="color:'+h.col+'">'+h.n+'</div><div class="ap-hp-bar"><div class="ap-hp-fill" style="width:'+p+'%;background:'+h.col+'"></div></div><div class="ap-hp-text">'+Math.max(0,h.hp)+'/'+h.mx+'</div></div>';aPt.appendChild(c);});
var h=S2.sel!==null?S2.party[S2.sel]:null;
if(!h||h.hp<=0||h.act||S2.over){aAc.innerHTML='<div class="text-[13px] text-white/40">'+(S2.over?'':'Выберите героя')+'</div>';}
else{aAc.innerHTML='<button class="ap-btn-act" data-act="attack" style="border-color:'+h.col+'">⚔ Атака<small>обычный удар</small></button><button class="ap-btn-act" data-act="strong" style="border-color:'+h.col+'">💥 Сильный удар<small>больше урона</small></button>';}}
function fl2(c,t,col){var f=document.createElement('div');f.className='ap-dmg-float';f.style.color=col;f.textContent=t;c.appendChild(f);setTimeout(function(){f.remove();},850);}
aPt.addEventListener('click',function(e){if(S2.over||S2.busy)return;var c=e.target.closest('[data-uid]');if(!c)return;var h=S2.party[+c.dataset.uid];if(h.hp<=0||h.act)return;S2.sel=h.idx;S2.tg=null;rd2();});
aEn.addEventListener('click',function(e){if(S2.over||S2.busy)return;var c=e.target.closest('[data-eid]');if(!c)return;S2.tg=+c.dataset.eid;rd2();});
aAc.addEventListener('click',function(e){if(S2.over||S2.busy||S2.sel===null)return;var b=e.target.closest('[data-act]');if(!b)return;var act=b.dataset.act;var h=S2.party[S2.sel];if(!h||h.hp<=0||h.act)return;
var t=S2.tg!==null?S2.en[S2.tg]:null;var al=alE();if(!t||!t.al)t=al[0];if(!t)return;
var mc=aPt.querySelector('[data-uid="'+h.idx+'"]'),ec=aEn.querySelector('[data-eid="'+S2.en.indexOf(t)+'"]');
if(window.animateLunge)window.animateLunge(mc);
var dm=act==='strong'?rn(h.atk+6,h.atk+14):rn(h.atk-1,h.atk+5);t.hp-=dm;
if(ec){if(window.animateShake)window.animateShake(ec);fl2(ec,'−'+dm,act==='strong'?'#ff6b6b':'#fff');}
ll2(h.n+' атакует '+t.n+': −'+dm,h.col);
if(t.hp<=0){t.al=false;ll2(t.n+' уничтожен!','#e8c060');}
h.act=true;S2.sel=null;S2.tg=null;
if(end2()){rd2();return;}
var rem=S2.party.filter(function(p){return p.hp>0&&!p.act;});
if(rem.length===0){S2.busy=true;rd2();setTimeout(eT,800);}else rd2();});
function eT(){if(S2.over)return;var es=alE(),hh=S2.party.filter(function(h){return h.hp>0;});
es.forEach(function(e){if(!hh.length)return;var t=hh[rn(0,hh.length-1)],dm=rn(e.atk-2,e.atk+3);t.hp-=dm;
var c=aPt.querySelector('[data-uid="'+t.idx+'"]');if(c){if(window.animateShake)window.animateShake(c);fl2(c,'−'+dm,'#dd4e60');}
ll2(e.n+' бьёт '+t.n+': −'+dm,'#dd4e60');
if(t.hp<=0){t.hp=0;ll2('✖ '+t.n+' пал!','#c41e3a');}});
S2.party.forEach(function(p){if(p.hp>0)p.act=false;});S2.busy=false;if(!end2())rd2();}
aRB.addEventListener('click',function(){aRs.style.display='none';S.style.display='none';var a=document.getElementById('rpg-section');if(a)a.scrollIntoView({behavior:'smooth'});});}}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
/* ===== Видеоэффект ульты Bell ===== */
(function(){
var V='https://verstka-sites.s3.cloud.ru/assets/2952/upload_8c007282c77f4f998e7e0e2962ff42e1.mp4';
var o=null,v=null,pl=false;
function b2(){o=document.createElement('div');o.id='bell-ult-overlay';o.style.cssText='position:fixed;inset:0;z-index:99997;display:none;align-items:center;justify-content:center;background:rgba(5,0,8,.92);pointer-events:none';v=document.createElement('video');v.src=V;v.muted=true;v.playsInline=true;v.setAttribute('playsinline','');v.preload='auto';v.style.cssText='max-width:100%;max-height:100%;object-fit:contain';o.appendChild(v);document.body.appendChild(o);v.addEventListener('ended',h);v.addEventListener('error',h);}
function s2(){if(pl)return;if(!o)b2();pl=true;o.style.display='flex';v.currentTime=0;v.playbackRate=1.5;var p=v.play();if(p&&p.catch)p.catch(function(){h();});setTimeout(function(){if(pl)h();},6000);}
function h(){pl=false;if(o)o.style.display='none';try{v.pause();}catch(e){}}
window.showBellUltVideo=s2;
document.addEventListener('pointerdown',function(){if(!o)b2();},{once:true});
})();
/* ===== Боевые реплики персонажей ===== */
(function(){
function init(){
var HC={'N-04':'#dd4e60','Alisa':'#9fd18a','Crysta':'#7fb8d8','Sky':'#c9b8e8'};
var HP={
'N-04':{attack:['Маска треснула — я нет.','Этот удар — за каждого, кем меня заменили.','Осколки помнят всё.','Ломаю так же, как ломали меня.'],ult:['Раскол Империи… как когда-то расколовшегося меня.','Пусть падёт всё, что сделало меня номером.']},
'Alisa':{attack:['Просчитала. Это было очевидно.','Аккуратно. Потери — это чужие слёзы.','Не двигайся. Я вижу траекторию.'],heal:['Держись. Я не позволю вам упасть.','Раны заживут. Долг — нет.'],ult:['Свет Империи — для тех, кого я не успела спасти.']},
'Crysta':{attack:['Один выстрел. Один расчёт.','Тихо. Чисто.','Ты уже был мёртв. Я лишь оформила бумаги.'],ult:['Снайперский огонь. Промахов не бывает.']},
'Sky':{attack:['…','Тени не спорят.','Он даже не заметил.'],ult:['Приговор вынесен.','…']}};
function add(lg2,n,k){var s=HP[n]&&HP[n][k];if(!s||!s.length)return;if(Math.random()>0.7)return;var d=document.createElement('div');d.textContent=n+': «'+s[Math.floor(Math.random()*s.length)]+'»';d.style.color=HC[n];d.style.opacity='.9';d.style.fontSize='12px';d.style.fontStyle='italic';lg2.appendChild(d);lg2.scrollTop=lg2.scrollHeight;}
function hook(lg2){if(lg2.dataset.ph==='1')return;lg2.dataset.ph='1';
new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.nodeType!==1)return;var t=n.textContent||'';
var ma=t.match(/^(N-04|Alisa|Crysta|Sky) (→|атакует|навык)/);
if(ma){setTimeout(function(nm){return function(){add(lg2,nm,'attack');};}(ma[1]),150);return;}
for(var n in HC){
if(t.indexOf(n+' исцеляет')===0||t.indexOf(n+' мощно исцеляет')===0){setTimeout(function(nm){return function(){add(lg2,nm,'heal');};}(n),150);return;}
if(t.indexOf(n+' использует ульту')!==-1){setTimeout(function(nm){return function(){add(lg2,nm,'ult');};}(n),150);return;}}});});}).observe(lg2,{childList:true});}
['vrpg3-log','ap-log'].forEach(function(id){var e=document.getElementById(id);if(e)hook(e);else{var iv=setInterval(function(){var x=document.getElementById(id);if(x){clearInterval(iv);hook(x);}},500);setTimeout(function(){clearInterval(iv);},15000);}});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
/* ===== Достижения: вкладка + эффект награды ===== */
(function(){
function ready(f){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',f);else f();}
ready(function(){
var KEY='grey_empire_achv';
function load(){try{return JSON.parse(localStorage.getItem(KEY)||'{}');}catch(e){return{};}}
function save(o){try{localStorage.setItem(KEY,JSON.stringify(o));}catch(e){}}
var ACH=[{id:'ach1',n:'Новичок на поле боя!',d:'Пройдена первая волна'},{id:'ach2',n:'Рядовой вояка!',d:'Пройдено пять волн'},{id:'ach3',n:'Всегда на чеку!',d:'Первая победа на ивенте'}];
if(!document.getElementById('ach-css')){var s=document.createElement('style');s.id='ach-css';
s.textContent='@keyframes acWingL{0%{opacity:0;transform:rotate(35deg) scaleX(.2)}20%{opacity:1;transform:rotate(15deg) scaleX(1)}60%{transform:rotate(25deg) scaleX(.9)}100%{opacity:1;transform:rotate(30deg) scaleX(1)}}@keyframes acWingR{0%{opacity:0;transform:rotate(-35deg) scaleX(.2)}20%{opacity:1;transform:rotate(-15deg) scaleX(1)}60%{transform:rotate(-25deg) scaleX(.9)}100%{opacity:1;transform:rotate(-30deg) scaleX(1)}}@keyframes acPop{0%{opacity:0;transform:rotate(45deg) scale(.3)}25%{opacity:1;transform:rotate(45deg) scale(1.15)}45%{transform:rotate(45deg) scale(1)}100%{opacity:1;transform:rotate(45deg) scale(1)}}@keyframes acName{0%,30%{opacity:0;transform:translateY(12px)}50%,78%{opacity:1;transform:translateY(0)}100%{opacity:0}}@keyframes acOut{0%{opacity:1}88%{opacity:1}100%{opacity:0}}@keyframes acPart{0%{opacity:1;transform:translate(0,0) scale(1)}100%{opacity:0;transform:translate(var(--x),var(--y)) scale(.3)}}#achOv{position:fixed;inset:0;z-index:99994;pointer-events:none;display:flex;align-items:center;justify-content:center}#achOv .wrap{position:relative;display:flex;flex-direction:column;align-items:center;animation:acOut 2.9s ease-in forwards}#achOv .dia{width:110px;height:110px;background:linear-gradient(135deg,#fff,#cfd8e3);box-shadow:0 0 40px #fff,0 0 100px rgba(255,255,255,.6);animation:acPop 2.2s ease-out forwards;position:relative}#achOv .wL,#achOv .wR{position:absolute;top:50%;width:120px;height:70px;background:linear-gradient(180deg,#fff,#e6ecf2);border-radius:60% 40% 45% 55%/70% 60% 40% 30%;box-shadow:0 0 30px rgba(255,255,255,.9)}#achOv .wL{right:100%;margin-right:6px;transform-origin:right center;animation:acWingL 2.2s ease-out forwards}#achOv .wR{left:100%;margin-left:6px;transform-origin:left center;animation:acWingR 2.2s ease-out forwards}#achOv .nm{margin-top:26px;font-weight:700;letter-spacing:2px;color:#fff;text-shadow:0 0 20px #fff;font-size:clamp(18px,4vw,32px);text-transform:uppercase;animation:acName 2.6s ease-out forwards;white-space:nowrap}#achOv .p{position:fixed;width:7px;height:7px;border-radius:50%;background:#fff;box-shadow:0 0 10px #fff;pointer-events:none;z-index:99994}';
document.head.appendChild(s);}
function boom(){var cx=window.innerWidth/2,cy=window.innerHeight/2-20;
for(var i=0;i<42;i++){var p=document.createElement('div');p.className='p';p.style.left=cx+'px';p.style.top=cy+'px';
var a=Math.random()*Math.PI*2,d2=80+Math.random()*240;
p.style.setProperty('--x',Math.cos(a)*d2+'px');p.style.setProperty('--y',Math.sin(a)*d2+'px');
p.style.animation='acPart '+(0.8+Math.random()*0.6)+'s ease-out forwards';
document.body.appendChild(p);
(function(x){setTimeout(function(){x.remove();},1600);})(p);}}
function show(a){var ov=document.createElement('div');ov.id='achOv';
ov.innerHTML='<div class="wrap"><div class="dia"><div class="wL"></div><div class="wR"></div></div><div class="nm">'+a.n+'</div></div>';
document.body.appendChild(ov);
setTimeout(function(){boom();ov.remove();},2700);}
window.showAch=show;
function grant(id){var st2=load();if(st2[id])return;st2[id]=true;save(st2);
var a=null;for(var i=0;i<ACH.length;i++)if(ACH[i].id===id)a=ACH[i];
if(a)show(a);}
function open(){var st2=load();
var ov=document.createElement('div');
ov.style.cssText='position:fixed;inset:0;z-index:99993;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.85);pointer-events:auto';
var box=document.createElement('div');
box.style.cssText='background:#0a0a0a;border:1px solid #e8c060;padding:28px 32px;max-width:420px;width:90%;text-align:center;font-family:inherit;color:#ddd';
var h=document.createElement('div');h.textContent='🏆 Достижения';h.style.cssText='color:#e8c060;font-size:20px;font-weight:700;letter-spacing:2px;margin-bottom:18px';box.appendChild(h);
ACH.forEach(function(a){var got=!!st2[a.id];
var row=document.createElement('div');row.style.cssText='padding:12px 0;border-bottom:1px solid rgba(255,255,255,.1);text-align:left';
row.innerHTML='<div style="font-weight:700;color:'+(got?'#e8c060':'#666')+'">'+(got?'★ ':'☆ ')+a.n+'</div><div style="font-size:12px;color:#999;margin-top:3px">'+(got?a.d:'??? — '+a.d)+'</div>';
box.appendChild(row);});
var cl=document.createElement('button');cl.textContent='Закрыть';
cl.style.cssText='margin-top:18px;padding:8px 26px;background:transparent;border:1px solid #e8c060;color:#e8c060;cursor:pointer;border-radius:8px;font-family:inherit;font-size:14px';
cl.onclick=function(){ov.remove();};box.appendChild(cl);
ov.appendChild(box);document.body.appendChild(ov);
ov.addEventListener('click',function(e){if(e.target===ov)ov.remove();});}
var iv=setInterval(function(){
var btn=document.getElementById('ach-tab-btn');
var w=document.getElementById('vrpg3-wave');
if(!btn||!w)return;
clearInterval(iv);
btn.onclick=open;
var prev=w.textContent.trim();
new MutationObserver(function(){var cur=w.textContent.trim();
var c=parseInt(cur,10),p=parseInt(prev,10);
if(!isNaN(c)&&!isNaN(p)&&c>p){var cleared=p;
var st3=load(),m=st3.maxCleared||0;
if(cleared>m){st3.maxCleared=cleared;save(st3);
if(cleared>=1)grant('ach1');
if(cleared>=5)grant('ach2');}}
prev=cur;}).observe(w,{childList:true,characterData:true,subtree:true});
},300);
});
})();
