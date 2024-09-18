const hour_hand=document.querySelector('.hour-hand')
const min_hand=document.querySelector('.min-hand')
const sec_hand=document.querySelector('.sec-hand')
const dh=document.querySelector('.dh')
const dm=document.querySelector('.dm')
const ds=document.querySelector('.ds')

setInterval(()=>{
    let time=new Date();

    let h= time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();

    let hRotation=30*h+h/2;
    let mRotation=6*m;
    let sRotation=6*s;

    hour_hand.style.transform=`rotate(${hRotation}deg)`
    min_hand.style.transform=`rotate(${mRotation}deg)`
    sec_hand.style.transform=`rotate(${sRotation}deg)`

    // dh.textContent=(h<10?`0${h}`:h)>12 ? h-=12:h;
    dh.textContent=(h>12 ? h-=12:h)<10 ? '0'+h:h ;
    dm.textContent=m<10?`0${m}`:m;
    ds.textContent=s<10?`0${s}`:s;
});


/*calculation fo h hRotation
12hour = 360 deg 
1hour=30deg

nHour=30n    ******
matlab 1 gante me 30 deg ghuma raha he to jitna hour ho raha hoga n usme hum deg se multiply kredege lets example: 3hour=30deg*3 so jab 3 baj rahe honge tab obviously 90deg pe hoga apa hour wala ghanta 
because yahan degree upar wale line se start ho rahi he 12 se okay

ab socho hour wali hand dheere dheere ghumti he to use kese nikalenge to pehel bata krenge current minutes kya chal raha he us hisaab se hum nikalenge
60min=30deg  // ye isliye kiya kyunki 30 deg me 1 hour lg raha he and 1 hour me 60 mins hota he us hisaab se 
1min=1/2
nMin=1/2*n

so the formul will be
30*n+n/2

yahan ope n means he hour 
*/


/*
calculation for minute roattion
60 minutes = 360deg
1Min=6deg
nMin=6*n

where n represent krega ki minutes kitan he
*/
/*
calculation for second roattion
60 sec = 360deg
1sec=6deg
nsec=6*n

where n represent krega ki second  kitan ho raha he
*/

