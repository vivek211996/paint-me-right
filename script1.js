//heading
var firstlevel=document.createElement('h2')
var firstc=document.createElement('center')
firstc.setAttribute('class','levelheader')
firstc.innerHTML ='Level 1'
document.body.append(firstlevel)
firstlevel.appendChild(firstc)
//music button
var mbutton=document.createElement('input')
mbutton.setAttribute('type','button')
mbutton.setAttribute('class','button')
mbutton.setAttribute('value','MUSIC')
mbutton.setAttribute('onclick','playit()')
document.body.append(mbutton)
//lives
var lives=[1,2,3];
var ht1 = document.createElement('label')
ht1.setAttribute('type','text')
ht1.setAttribute ('id','life')
ht1.setAttribute('class','ht')
document.body.append(ht1)
document.getElementById("life").innerHTML= "lives :" +lives
//show colours
var show=document.createElement('input')
show.setAttribute('type','button')
show.setAttribute('id','btnLetsGo')
show.setAttribute('class','button2show')
show.setAttribute('value','lets go')
document.body.append(show)
show.setAttribute('onclick','lv1()')
//music source html
var music = document.createElement('audio')
music.setAttribute('src','bgmusic1.mp3')
music.setAttribute('id','bgm')

document.body.append(music)
//music play
function playit()
{
    var aud = document.getElementById("bgm");
aud.autoplay = true;
aud.load();
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

//evaluvate
var division = document.createElement('div')
division.setAttribute('class','chck1')
var check=document.createElement('input')
check.setAttribute('type','button')
check.setAttribute('id','chck')
check.setAttribute('value','Check')
document.body.append(division)
division.appendChild(check)
check.setAttribute('onclick','checkResult()')

var c = 0;
var t;
var timer_is_on = 0;
var chooseColorLimit=0;
var retryLimit=2;

var levelTwoColors=["green","pink","blue","red"];
var levelOneClsColors=["crlbtn1","crlbtn3","crlbtn5","crlbtn6"];

function timedCount() {
    
    document.getElementById("crl1").setAttribute('class','crlbtn1');
    document.getElementById("crl2").setAttribute('class','crlbtn3');
    document.getElementById("crl3").setAttribute('class','crlbtn5');
    document.getElementById("crl4").setAttribute('class','crlbtn6');
    c = c + 1;
    t = setTimeout(timedCount, 1000);
    
    if(c==7)
        stopCount();
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

function lv1()
{
    document.getElementById("btnLetsGo").disabled = true;
    chooseColorLimit=0;
    startCount();
    
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
     console.log( document.getElementById("crl1").className);
    //var controlId= 'btn'+ btnCtrl;
    //var buttonColor=document.getElementById(controlId).style.background;
    //console.log(controlId);
    //console.log(buttonColor);
    //alert(document.getElementById(controlId).style.backgroundColor);
    //document.getElementById("crl1").style.background = "green";
    //document.getElementById("crl1").setAttribute('class','crlbtn'+ btnCtrl);
    
}

function checkResult()
{



    if( document.getElementById("crl1").className == levelOneClsColors[0] &&
    document.getElementById("crl2").className == levelOneClsColors[1] &&
    document.getElementById("crl3").className == levelOneClsColors[2] &&
    document.getElementById("crl4").className == levelOneClsColors[3] )
    {
        //Success
        //set text in label
        alert(" Successfully completed Level 1 !!")

    }
    else
    {
        //Failure & retry logic
        if(retryLimit != 0)
        {
            retryLimit--;
            //set text in label to retry
            lives.pop()
            document.getElementById("life").innerHTML= "lives :" +lives

            alert(" Sorry !! Incorrect, please try again. You have" + retryLimit + "  more life to play!! ");
        }
        else
        {
            //Game over
            //Set final message in label
            location3()
            alert(" Sorry !! You have lost this level. Better luck next time !!");
            
        }

    }
    chooseColorLimit=0;
}
function location3()
{
    window.location = "index.html";
}