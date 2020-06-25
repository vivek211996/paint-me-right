
var title=document.createElement('h2')
var titlec=document.createElement('center')
titlec.setAttribute('class','titlemain')
titlec.innerHTML ='PAINT ME RIGHT'
document.body.append(title)
title.appendChild(titlec)

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
