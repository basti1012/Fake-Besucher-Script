/*
a1='3000';// Sekunden * 1000 reloadzeit counter
a2='22-07-1980';
a3=500;////gesamtzähler bekommt die zahl am tag dazu.Wird minutengenau ausgerechnet
a4=10;// AktualiesierungsZeit wird immer langsamer um X millisekunde. 0 = Deaktiviert
a5='body';//Counter mit createelemnt erstellen , oder  in ein element einfügen gebe daür zb ( #deineid, .deine_classe, main:nth-child(1)) ein oder lasse es leer dann wird es erzeugt
a6=true;//Standart Style laden =true , oder eigenen Style einbinden dann hier auf false setzen damit der Style ausgeschaltet ist
fake_besucherzahler(a1,a2,a3,a4,a5,a6);
*/
function fake_besucherzahler(re,sta,be,ti,cre,style_true){
if(style_true==true){
head_=document.createElement('style');
head_.innerHTML=`
#counter_basti1012 *{
   margin:0;
   padding:0;
}
#counter_basti1012{
   width:200px;
   position:relative;
   margin:0 auto;
   border:2px solid black;
   margin-top:50px;
   border-radius:5px;
   background: rgb(193,193,205);
   background: linear-gradient(174deg, rgba(193,193,205,1) 0%, rgba(231,231,236,1) 35%, rgba(208,220,222,1) 60%, rgba(247,241,241,1) 96%);
   color:black;
   box-shadow:5px 5px 5px black;
   padding:10px;
}
#counter_basti1012 #counterh2{
   text-align:center;
}
.line{
   display:flex;
   font-size:100%;
   height:20px;
   justify-content:space-between;
   border-bottom:2px solid lightgrey;
}

.textright{
   font-size:50%;
   line-height:20px;
   transition:all 500ms;
   position:absolute;
   right:10px;
   z-index:1;
}
.textright:hover{
   font-size:120%;
   color:green;
   transition:all 500ms;
}
.textleft{
   position:absolute;
   left:10px;
   z-index:1;
}
.textleft:hover{
   font-size:130%;
   line-height:20px;
   color:green;
   transition:all 500ms;
}
.line.bottom{
   font-weight:900;
}`;
document.getElementsByTagName('head')[0].appendChild(head_)  
}

let ele = [
    ['id', 'counter_basti1012','class','',''],
    ['id', 'counterh2','class','','Besucherzähler'],
  
    ['id','line1','class', 'line',1],
    ['id','','class', 'textleft','Aktuell Online'],
    ['id','nowtime','class', 'textright',''],
    ['id','jetzt','class', 'line bottom',''],

    ['id','line2','class', 'line',1],
    ['id','','class', 'textleft','Besucher Heute '],
    ['id','nowdate','class', 'textright',''],
    ['id','heute','class', 'line bottom',''],
  
    ['id','line3','class', 'line',1],
    ['id','','class', 'textleft','Besucher diesen Monat'],
    ['id','monatnowtext','class', 'textright',''],
    ['id','monatnow','class', 'line bottom',''],
  
    ['id','line4','class', 'line',1],
    ['id','','class', 'textleft','Besucher letzten Monat'],
    ['id','monatlasttext','class', 'textright',''],
    ['id','monatlast','class', 'line bottom',''],
  
    ['id','line5','class', 'line',1],
    ['id','','class', 'textleft','Besucher  Seid dem'],
    ['id','wanntime','class', 'textright',''],
    ['id','gesammt','class', 'line bottom',''],
  
];

var s1=100;
var s2=0;
var he='';
for(x=0;x<=21;x++){
    newdiv=document.createElement('div'); 
    if(ele[x][1]!=''){
        newdiv.id=ele[x][1];
    }
    if(ele[x][3]!=''){
        newdiv.className=ele[x][3];
    }
    if(ele[x][4]!=1){
        newdiv.innerHTML=ele[x][4];
    }
    if(ele[x][4]==1){
         var he=ele[x][1];
         s1=x;
         s2=(x+2);
    }
    if(x>s1 && s2>=x){
          document.getElementById(he).appendChild(newdiv);
    }else{
         if(x==0){
              if(cre==''){
                   bod=document.getElementsByTagName('body')[0];
                   bod.appendChild(newdiv);
              }else{
                   let find = document.querySelector(cre)
                   find.appendChild(newdiv);
              } 
         }else{
             document.getElementById(ele[0][1]).appendChild(newdiv);
         }
    }
}
var stundensperre = new Date().getHours();
if(stundensperre<=10){
    var min = 5;// altuell zufall  minimum
    var max = 10;// altuell zufall  maximum
}else if(stundensperre>=11 && stundensperre<=16){
    var min = 15;// altuell zufall  minimum
    var max = 30;// altuell zufall  maximum
}else if (stundensperre>=17){
    var min = 35;// altuell zufall  minimum
    var max = 60;// altuell zufall  maximum
}
var reloadtime=2000;
if(re!=''){
    var reloadtime=re;
}  
var startdatum="24-12-2018";
if(sta!=''){
    var startdatum=sta;
}
var besucheramtag=501;
if(be!=''){
    var besucheramtag=be;
}
var timerspeed=501;
if(ti!=''){
    var timerspeed=ti;
}
  consolelog=true;
  if(consolelog==true){
    console.log('%c Danke \n das sie das \n Fake-Besucher-Script \nbenutzen \n' ,'background:blue; color: white; font-size: 18px; padding: 3px;width:100%;display:block');
    console.log('Klick %o to Website', 'https://github.com/basti1012/Fake-Besucher-Script');
  }
startdatum=startdatum.split("-");
var newDate=startdatum[1]+"/"+startdatum[0]+"/"+startdatum[2];
jetzt=new Date().getTime();

setInterval(zufall, reloadtime);
function zufall(){
  if(timerspeed>0){
       reloadtime+=timerspeed;
  }
   var Monatsname = ["Januar",
"Februar", "März", "April", "Mai","Juni",
"Juli", "August", "September", "Oktober","November",
"Dezember"];

var d = new Date();
var timestamp=d.getTime();
var tag=d.getDate();
var jahr=d.getFullYear();
var stunde=d.getHours();
var monat=d.getMonth();
var minute=d.getMinutes();
//var mobiso=d.getDay();
var monatsname=d.getMonth();
var besucherjetzt = Math.round(Math.random() * (max - min)) + min;
  
if(stunde < 10){
    var stunde1='0'+stunde;
}else{
    var stunde1=stunde;
}
if(minute < 10){
    var minute1='0'+minute;
}else{
    var minute1=minute;
}
 
document.getElementById('nowtime').innerHTML=' '+stunde1+' : '+minute1+' Uhr';
document.getElementById('jetzt').innerHTML=besucherjetzt;   
document.getElementById('nowdate').innerHTML=tag+'-'+Monatsname[monat]+'-'+jahr;
document.getElementById('monatlasttext').innerHTML=Monatsname[monat-1]; 
document.getElementById('monatnowtext').innerHTML=Monatsname[monat]; 
document.getElementById('wanntime').innerHTML=startdatum; 
  
let jj=new Date(newDate).getTime();
let tagegesammt=(jetzt-jj)/86400000;
let minutenplus=besucheramtag/1440;  
let mintewegamtag=stunde*60+minute; 
let besucheheute=mintewegamtag*minutenplus;
let diesenmonat=(besucheramtag*tag)+besucheheute; 
document.getElementById('monatnow').innerHTML=diesenmonat.toFixed(0);
document.getElementById('heute').innerHTML=besucheheute.toFixed(0);  
  
let allinclusive=(tagegesammt*besucheramtag)+minutenplus*mintewegamtag;
let monatevorbei=tagegesammt/30;
let lastmonat=allinclusive/monatevorbei;
document.getElementById('monatlast').innerHTML=lastmonat.toFixed(0);
document.getElementById('gesammt').innerHTML=allinclusive.toFixed(0);

}
  zufall();
}
