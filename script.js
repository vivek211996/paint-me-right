
var title=document.createElement('h2')
var titlec=document.createElement('center')
titlec.setAttribute('class','titlemain')
titlec.innerHTML ='PAINT ME RIGHT'
document.body.append(title)
title.appendChild(titlec)

var rules =document.createElement('h3')
var titlec1=document.createElement('center')
titlec1.setAttribute('class','titlemain')
titlec1.innerHTML ='HOW TO PLAY?'
document.body.append(rules)
rules.appendChild(titlec1)


var list2 = document.createElement('ul')
list2.setAttribute('align','center')
var first1 = document.createElement('li')
first1.innerHTML='MUSIC toggle button summons music-music is on by default(if you donot hear music use turn off turn on toggle buttons)'
var second1 = document.createElement('li')
second1.innerHTML='On each level click "lets go" button to show the colors to memorise, which will show you colors for some time'
var third1 = document.createElement('li')
third1.innerHTML='You will have 3 lives'
var fourth1 = document.createElement('li')
fourth1.innerHTML='You can enter colors only in linear sequence'
var fifth1 = document.createElement('li')
fifth1.innerHTML='Show time reduces as you go uplevels'

document.body.append(list2)
list2.appendChild(first1)
list2.appendChild(second1)
list2.appendChild(third1)
list2.appendChild(fifth1)
list2.appendChild(fourth1)

var start=document.createElement('input')
start.setAttribute('type','button')

start.setAttribute('class','btn btn-primary btn-lg')
start.setAttribute('value','START')
start.setAttribute('onclick','location1()')
document.body.append(start)

var nxline=document.createElement('br')
document.body.append(nxline)

var name1 =document.createElement('h4')
var name2=document.createElement('center')
name2.setAttribute('class','text-black-50')
name2.innerHTML ='created by VIVEK for GUVI HACKATHON'
document.body.append(name1)
name1.appendChild(name2)


function location1()
{
    window.location = "gameplay.html"

}
