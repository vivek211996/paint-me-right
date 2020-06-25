
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


var list2 = document.createElement('ol')
list2.setAttribute('align','center')
var first1 = document.createElement('li')
first1.innerHTML='MUSIC button summons music'
var second1 = document.createElement('li')
second1.innerHTML='on each level click "lets go" button to show the colors to memorise'
var third1 = document.createElement('li')
third1.innerHTML='you will have 3 lives'
var fourth1 = document.createElement('li')
fourth1.innerHTML='you can enter colors only in linear sequence'

document.body.append(list2)
list2.appendChild(first1)
list2.appendChild(second1)
list2.appendChild(third1)
list2.appendChild(fourth1)

var start=document.createElement('input')
start.setAttribute('type','button')

start.setAttribute('class','btn btn-primary btn-lg')
start.setAttribute('value','START')
start.setAttribute('onclick','location1()')
document.body.append(start)


function location1()
{
    window.location = "gameplay.html"

}
