var main;
var btnC;
var body;
var btC;
var arr;
var display;
var h;
window.onload=function(){
crator();
};
arr=[];
function crator(){
body=document.getElementsByTagName("body")[0];
btnC=document.createElement("div");
body.appendChild(btnC);
btnC.id="main";
btnC.className="main";
ct1("dis","","","");
ct1("d9",9,9,9);
ct1("d8",8,8,8);
ct1("d7",7,7,7);
ct1("d6",6,6,6);
ct1("d5",5,5,5);
ct1("d4",4,4,4);
ct1("d3",3,3,3);
ct1("d2",2,2,2);
ct1("d1",1,1,1);
ct1("d0",0,0,0);
ct1("kama",",",'.',",");
ct1("zarb","&#215","*","&#215");
ct1("manfi","-","-","-");
ct1("plus","+","+","+");
ct1("taghsim","&#247","/","&#247");
mosavi()
}
cheker();
function ct1(x,s,n,m){
    btC=document.createElement("div");
    main=document.getElementById("main");
    main.appendChild(btC);
    btC.className="dis";
    main.appendChild(btC);
    btC.className=x;
    btC.innerHTML=s;
    btC.onclick=function(){pusher(n,m)}
}
function pusher(n,m){
    display=document.getElementsByClassName("dis")[0];
    display.innerHTML+=m;
    if(n=="+"||n=="-"||n=="/"||n=="*"){
    if(arr[0]==undefined){arr[0]=(parseFloat(display.innerHTML));}
    else{arr[2]=(parseFloat(display.innerHTML));};
    if(arr[1]!==undefined){arr[2]=(parseFloat(display.innerHTML));cheker();arr[0]=h;arr[1]=n;}
    else{arr[1]=n;};
    display.innerHTML="";};
}
function mosavi(){
   let dis=document.getElementsByClassName("dis")[0];
    let bt=document.createElement("div");
    let m1=document.getElementById("main");
    m1.appendChild(bt);
    bt.className="mosavi";
    bt.innerHTML="="
    bt.onclick=function(){ 
        arr[2]=(parseFloat(display.innerHTML)) ;
        cheker();
        dis.innerHTML=h;
    }
}
function mos(){
    
    if(arr[1]=="+"){ h=arr[0]+arr[2];arr=[h];arr[0]=h;arr[1]=arr[1]};
    if(arr[1]=="-"){ h=arr[0]-arr[2];arr=[h];arr[0]=h;arr[1]=arr[1]};
    if(arr[1]=="*"){ h=arr[0]*arr[2];arr=[h];arr[0]=h;arr[1]=arr[1]};
    if(arr[1]=="/"){ h=arr[0]/arr[2];arr=[h];arr[0]=h;arr[1]=arr[1]};
    return h;
}
function cheker(){
    if(arr.length==3){
        mos()
    }
}