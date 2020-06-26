var lv = 1;
var sc=0;
//heading
var firstlevel=document.createElement('h2')
var firstc=document.createElement('center')
firstc.setAttribute('class','levelheader')
firstc.innerHTML ='Level '+lv
document.body.append(firstlevel)
firstlevel.appendChild(firstc)
//music button
var mbutton=document.createElement('input')
mbutton.setAttribute('type','button')
mbutton.setAttribute('class','button')
mbutton.setAttribute('id','buttonPlayMusic')
mbutton.setAttribute('value','Turn On Music')
mbutton.setAttribute('onclick','playit()')
document.body.append(mbutton)
//lives
var lives=["&#10084;","&#10084;","&#10084;"];
var ht1 = document.createElement('label')
ht1.setAttribute('type','text')
ht1.setAttribute ('id','life')
ht1.setAttribute('class','ht')
document.body.append(ht1)
document.getElementById("life").innerHTML= "lives :" +lives[0] +lives[1] + lives[2]
//show colours
var show=document.createElement('input')
show.setAttribute('type','button')
show.setAttribute('id','btnLetsGo')
show.setAttribute('class','button2show')
show.setAttribute('value','lets go')
document.body.append(show)
show.setAttribute('onclick','stages(lv)')
//show.setAttribute('onclick','level(levelOneClsColors)')

var label1 = document.createElement('label')
label1.setAttribute('type','text')
label1.setAttribute('id','scores')
label1.setAttribute('class','label1')
label1.innerHTML = "your score is :" +sc
document.body.append(label1)
//music source html
var music = document.createElement('audio')
music.setAttribute('src','bgmusic1.mp3')
music.setAttribute('id','bgm')

document.body.append(music)
//music play
function playit()
{
    if(document.getElementById("buttonPlayMusic").value == 'Turn On Music')
    {
        var aud = document.getElementById("bgm");
        aud.autoplay = true;
        aud.load();
        document.getElementById("buttonPlayMusic").value='Turn Off Music';
    }
    else if(document.getElementById("buttonPlayMusic").value == 'Turn Off Music')
    {
        var aud = document.getElementById("bgm");
        aud.autoplay = false;
        aud.load();
        document.getElementById("buttonPlayMusic").value='Turn On Music';
    }
}

//play area table 2 rows first row-6c second row-1c
var tab = document.createElement('table')
tab.setAttribute('class','maint')
tab.setAttribute('align','center')
var row1 = document.createElement('tr')
var c1 = document.createElement('th')
var c2 = document.createElement('th')
var c3 = document.createElement('th')
var c4 = document.createElement('th')

var cc1=document.createElement('circle')
cc1.setAttribute('type','text')
cc1.setAttribute('id','crl1')
cc1.setAttribute('class','dot')

var cc2 =document.createElement('circle')
cc2.setAttribute('type','text')
cc2.setAttribute('id','crl2')
cc2.setAttribute('class','dot')
cc2.setAttribute('onclick','')

var cc3 =document.createElement('circle')
cc3.setAttribute('type','text')
cc3.setAttribute('id','crl3')
cc3.setAttribute('class','dot')

var cc4 =document.createElement('circle')
cc4.setAttribute('type','text')
cc4.setAttribute('id','crl4')
cc4.setAttribute('class','dot')

document.body.append(tab)
tab.appendChild(row1)
row1.appendChild(c1)
c1.appendChild(cc1)
row1.appendChild(c2)
c2.appendChild(cc2)
row1.appendChild(c3)
c3.appendChild(cc3)
row1.appendChild(c4)
c4.appendChild(cc4)

var row2 = document.createElement('tr')
var p1 = document.createElement('td')
p1.setAttribute('colspan','4')
p1.setAttribute('align','center')

tab.appendChild(row2)

var button1=document.createElement('input')
button1.setAttribute('type','submit')
button1.setAttribute('value','')
button1.setAttribute('id','btn1')
button1.setAttribute('class','button1')
row2.appendChild(p1)
p1.appendChild(button1)
button1.setAttribute('onclick','SetColor(1)')

var button2=document.createElement('input')
button2.setAttribute('id','btn2')
button2.setAttribute('type','submit')
button2.setAttribute('value','')
button2.setAttribute('class','button2')
button2.setAttribute('onclick','SetColor(2)')
row2.appendChild(p1)
p1.appendChild(button2)

var button3=document.createElement('input')
button3.setAttribute('id','btn3')
button3.setAttribute('type','submit')
button3.setAttribute('value','')
button3.setAttribute('class','button3')
button3.setAttribute('onclick','SetColor(3)')
row2.appendChild(p1)
p1.appendChild(button3)

var button4=document.createElement('input')
button4.setAttribute('id','btn4')
button4.setAttribute('type','submit')
button4.setAttribute('value','')
button4.setAttribute('class','button4')
button4.setAttribute('onclick','SetColor(4)')
row2.appendChild(p1)
p1.appendChild(button4)

var button5=document.createElement('input')
button5.setAttribute('id','btn5')
button5.setAttribute('type','submit')
button5.setAttribute('value','')
button5.setAttribute('class','button5')
button5.setAttribute('onclick','SetColor(5)')
row2.appendChild(p1)
p1.appendChild(button5)

var button6=document.createElement('input')
button6.setAttribute('id','btn6')
button6.setAttribute('type','submit')
button6.setAttribute('value','')
button6.setAttribute('class','button6')
button6.setAttribute('onclick','SetColor(6)')
row2.appendChild(p1)
p1.appendChild(button6)

var button7=document.createElement('input')
button7.setAttribute('id','btn7')
button7.setAttribute('type','submit')
button7.setAttribute('value','')
button7.setAttribute('class','button7')
button7.setAttribute('onclick','SetColor(7)')
row2.appendChild(p1)
p1.appendChild(button7)

//evaluvate
var division = document.createElement('div')
division.setAttribute('class','chck1')
var check=document.createElement('input')
check.setAttribute('type','button')
check.setAttribute('id','chck')
check.setAttribute('value','Check')
document.body.append(division)
division.appendChild(check)
check.setAttribute('onclick','resultswitch(lv)')


var c = 0;
var t;
var timer_is_on = 0;
var chooseColorLimit=0;
var retryLimit=3;


var levelOneClsColors=["crlbtn1","crlbtn3","crlbtn5","crlbtn6"];
var levelTwoClsColors=["crlbtn4","crlbtn2","crlbtn1","crlbtn2"];
var levelThreeClsColors=["crlbtn5","crlbtn1","crlbtn3","crlbtn4"];
var levelFourClsColors=["crlbtn2","crlbtn1","crlbtn6","crlbtn3"];
var levelFiveClsColors=["crlbtn7","crlbtn6","crlbtn5","crlbtn4"];
var levelSixClsColors=["crlbtn5","crlbtn1","crlbtn2","crlbtn5"];
var levelSevenClsColors=["crlbtn1","crlbtn3","crlbtn4","crlbtn5"];
var levelEightClsColors=["crlbtn2","crlbtn7","crlbtn4","crlbtn2"];
var levelNineClsColors=["crlbtn7","crlbtn7","crlbtn6","crlbtn1"];
var levelTenClsColors=["crlbtn6","crlbtn2","crlbtn1","crlbtn3"];



function timedCount() {
    
    c = c + 1;
    t = setTimeout(timedCount, 1000);
    
    switch (lv) {
        case 1:
            if(c==6)
                stopCount();        
                break;
        case 2:
            if(c==6)
                stopCount();        
                break;
        case 3:
            if(c==5)
                stopCount();        
                break;
        case 4:
            if(c==5)
                stopCount();        
                break;
        case 5:
            if(c==5)
                stopCount();        
                break;
        case 6:
            if(c==4)
                stopCount();        
                break;
        default:
            if(c==3)
                stopCount();        
            break;
    }
  }


function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
  }
}

function stopCount() {
    
  clearTimeout(t);
  document.getElementById("crl1").setAttribute('class','crlClear');
  document.getElementById("crl2").setAttribute('class','crlClear');
  document.getElementById("crl3").setAttribute('class','crlClear');
  document.getElementById("crl4").setAttribute('class','crlClear');
  c=0;
  timer_is_on = 0;
  
}

function next()
{
    document.getElementById("btnLetsGo").disabled = true;
    chooseColorLimit=0;
    startCount();
    
}
function level(arraycolour)
{
    //console.log(arraycolour[0])
    document.getElementById("crl1").className =arraycolour[0];
    document.getElementById("crl2").className =arraycolour[1];
    document.getElementById("crl3").className =arraycolour[2];
    document.getElementById("crl4").className =arraycolour[3];
    next();

}
function stages(val)
{
    switch (val) {
        case 1:level(levelOneClsColors)
        break;
        case 2:level(levelTwoClsColors)
        break;
        case 3:level(levelThreeClsColors)
        break;
        case 4:level(levelFourClsColors)
        break;
        case 5:level(levelFiveClsColors)
        break;
        case 6:level(levelSixClsColors)
        break;
        case 7:level(levelSevenClsColors)
        break;
        case 8:level(levelEightClsColors)
        break;
        case 9:level(levelNineClsColors)
        break;
        case 10:level(levelTenClsColors)
        break;
    
        default:
            break;
    }
}

function resultswitch(val2)
{
    switch (val2) {
        case 1:checkResult(levelOneClsColors)
        break;
        case 2:checkResult(levelTwoClsColors)
        break;
        case 3:checkResult(levelThreeClsColors)
        break;
        case 4:checkResult(levelFourClsColors)
        break;
        case 5:checkResult(levelFiveClsColors)
        break;
        case 6:checkResult(levelSixClsColors)
        break;
        case 7:checkResult(levelSevenClsColors)
        break;
        case 8:checkResult(levelEightClsColors)
        break;
        case 9:checkResult(levelNineClsColors)
        break;
        case 10:checkResult(levelTenClsColors)
        break;
    
        default:
            break;
    }
}

function SetColor(btnCtrl)
{
    var arrCtrls=['crl1','crl2','crl3','crl4'];
    
     switch (chooseColorLimit) 
     {
         case 0:
            document.getElementById("crl1").setAttribute('class','crlbtn'+ btnCtrl);
            chooseColorLimit=1;
             break;
        case 1:
            document.getElementById("crl2").setAttribute('class','crlbtn'+ btnCtrl);
            chooseColorLimit=2;
            break;
        case 2:
            document.getElementById("crl3").setAttribute('class','crlbtn'+ btnCtrl);
            chooseColorLimit=3;
            break;
        case 3:
            document.getElementById("crl4").setAttribute('class','crlbtn'+ btnCtrl);
            chooseColorLimit=0;
            break;
         default:
             break;
     }
     //console.log( document.getElementById("crl1").className);
}

function checkResult(checkarray)
{
    if( document.getElementById("crl1").className == checkarray[0] &&
    document.getElementById("crl2").className == checkarray[1] &&
    document.getElementById("crl3").className == checkarray[2] &&
    document.getElementById("crl4").className == checkarray[3] )
    {
        //Success
        if(lv<11)
        {
            lv=lv+1
            alert(" Congratulations !! Successfully completed this Level,Be ready for level "+ lv)
            firstc.innerHTML ='Level '+lv
            sc=sc+10
            label1.innerHTML = "your score is : "+sc
            document.getElementById("btnLetsGo").disabled = false;
            document.getElementById("crl1").setAttribute('class','crlClear');
            document.getElementById("crl2").setAttribute('class','crlClear');
            document.getElementById("crl3").setAttribute('class','crlClear');
            document.getElementById("crl4").setAttribute('class','crlClear');
        }
        else
        {
            alert("AWESOME !! YOU HAVE WON ALL TEN ROUNDS,YOUR SCORE IS "+sc)
        }
    }
    else
    {
        //Failure & retry logic
        if(retryLimit != 1)
        {
            document.getElementById("crl1").setAttribute('class','crlClear');
            document.getElementById("crl2").setAttribute('class','crlClear');
            document.getElementById("crl3").setAttribute('class','crlClear');
            document.getElementById("crl4").setAttribute('class','crlClear');
            retryLimit--;
            //set text in label to retry
            lives.pop()
            document.getElementById("life").innerHTML= "lives :" +lives

            alert(" Sorry !! Incorrect, please try again. You have " + retryLimit + " more life to play!! ");
            
        }
        else
        {
            //Game over
            alert(" Sorry !! You have lost this game. Better luck next time !!");
            BackToHome()
            
            
        }

    }
    chooseColorLimit=0;
}
function BackToHome()
{
    window.location = "index.html";
}