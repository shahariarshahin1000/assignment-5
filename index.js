// Randomcolorchange
const change1=document.getElementById('changecolor1')
const change2=document.getElementById('changecolor2')
const change3=document.getElementById('changecolor3')
const change4=document.getElementById('changecolor4')
const change5=document.getElementById('changecolor5')
const change6=document.getElementById('changecolor6')

function colorChange(parameter){
function randomcolor() {
    return Math.floor(Math.random() * 255);
}
parameter.addEventListener('mouseenter', () => {
parameter.style.backgroundColor = 'rgba('
        + randomcolor() + ',' + randomcolor()
        + ',' + randomcolor() + '\)'
})

}
colorChange(change1);
colorChange(change2);
colorChange(change3);
colorChange(change4);
colorChange(change5);
colorChange(change6);


// Triangle 
let count =0
document.getElementById('triangleButton').addEventListener('click',function(){
  const triangleBase=document.getElementById('triangleBase').value;
  const triangleHeight=document.getElementById('triangleHeight').value ;
  if(isNaN(triangleBase && triangleHeight )){
alert("not number")
return
  }
  if((triangleBase && triangleHeight ) < 1){
alert("input are smaller then one")
return
  }
  const newTriangleBalance = (0.5 * triangleBase*triangleHeight).toFixed(2);
  const triangleName =document.getElementById('triangleName').innerText
  const result=document.getElementById('result')
  let tr =document.createElement("tr")
  count=count+1
  tr.innerHTML=`
  <div class='flex items-center gap-2 mt-10'>
  <p> ${count} </p>
  <p> ${triangleName} </p
  <p> ${newTriangleBalance} cm<sup>2</sup> </p>
  <button id="toMiter"  class="  w-max text-white text-xs bg-green-700 rounded-md p-2">Covert to m<sup>2</sup></button>
  <div id='click1'></div>
  </div>
  `
result.appendChild(tr)

document.getElementById("toMiter").addEventListener('click',function(){
  let cm = newTriangleBalance*100
  const convert = document.getElementById('click1')
  const div =document.createElement('div')
  div.innerHTML=`
  <td>${cm} m<sup>2</sup></td>

   `
   convert.appendChild(div)
})
})

// Rectangle
document.getElementById('rectangleButton').addEventListener('click',function(){
  const rectangleValueW =document.getElementById('rectangleValue-w').value;
  const rectangleValueI =document.getElementById('rectangleValue-i').value ;

  if (isNaN(rectangleValueW && rectangleValueI)){
    alert('Not a number')
    return;
  }
  if ((rectangleValueW && rectangleValueI) < 1){
    alert("input are smaller then one")
    return;
 }

  const newrectangleBalance = (rectangleValueW*rectangleValueI).toFixed(2);
  const numeRectangle =document.getElementById('numeRectangle').innerText;
  const result=document.getElementById('result')
  count=count+1
  let tr =document.createElement("tr")
  tr.innerHTML=`
   
    <tr class='flex items-center justify-between'>
    <td> ${count} </td>
      <td> ${numeRectangle} </td>
      <td> ${newrectangleBalance} cm <sup>2</sup> </td>
     <td> <button id='toMiter2'  class=" w-max text-white text-xs bg-green-700 rounded-md p-2">Covert to m<sup>2</sup></button></td>
     <td><div id='click2'></div></td>
    </tr>

  `
    result.appendChild(tr)

    document.getElementById("toMiter2").addEventListener('click',function(){
      let cm = newrectangleBalance*100
      const convert = document.getElementById('click2')
      const div =document.createElement('div')
      div.innerHTML=`
      <td>${cm} m<sup>2</sup></td>
    
       `
       convert.appendChild(div)
    })
})

//Parallelogram
document.getElementById('ParallelogramButton').addEventListener('click',function(){
  const ParallelogramValueB =parseFloat(document.getElementById('ParallelogramValue-b').value) ;
  const ParallelogramValueH =parseFloat(document.getElementById('ParallelogramValue-h').value) ;

  const newParalleiogramBalance = (ParallelogramValueB*ParallelogramValueH ).toFixed(2);
  const numeParallelogram = document.getElementById('numeparallelogram').innerText;
  const result =document.getElementById('result');
  count=count+1
  let tr =document.createElement("tr")
  tr.innerHTML=`
    <tr class='flex items-center justify-between gap-4'>
    <td> ${count} </td>
      <td> ${numeParallelogram} </td>
      <td> ${newParalleiogramBalance} cm <sup>2</sup> </td>
     <td> <button id='toMiter3'  class=" w-max text-white text-xs bg-green-700 rounded-md p-2">Covert to m<sup>2</sup></button></td>
     <td><div id='click3'></div></td>
    </tr>
  `
    result.appendChild(tr)

    document.getElementById("toMiter3").addEventListener('click',function(){
      let cm = newParalleiogramBalance*100
      const convert = document.getElementById('click3')
      const div =document.createElement('div')
      div.innerHTML=`
      <td>${cm} m<sup>2</sup></td>
       `
       convert.appendChild(div)
    })
})

//Rhombus
document.getElementById('roundedButton').addEventListener('click',function(){
  const rhombusValueD1 =parseFloat(document.getElementById('rhombusValue-d1').value) ;
  const rhombusValueD2 =parseFloat(document.getElementById('rhombusValue-d2').value) ;

  const newRhombusBalance = ( 0.5*rhombusValueD1*rhombusValueD2).toFixed(2);
  const numeRhombus = document.getElementById('numeRhombus').innerText;
  const result =document.getElementById('result');
  count=count+1
  let tr =document.createElement("tr")
  tr.innerHTML=`
    <tr class='flex items-center justify-between gap-4'>
    <td> ${count} </td>
      <td> ${numeRhombus} </td>
      <td> ${newRhombusBalance} cm <sup>2</sup> </td>
     <td> <button id='toMiter4'  class=" w-max text-white text-xs bg-green-700 rounded-md p-2">Covert to m<sup>2</sup></button></td>
     <td><div id='click4'></div></td>
    </tr>
  `
    result.appendChild(tr)

    document.getElementById("toMiter4").addEventListener('click',function(){
      let cm = newRhombusBalance*100
      const convert = document.getElementById('click4')
      const div =document.createElement('div')
      div.innerHTML=`
      <td>${cm} m<sup>2</sup></td>
       `
       convert.appendChild(div)
    })
})

//Pentagon
document.getElementById('pentagonButton').addEventListener('click',function(){
  const pentagonValueP =parseFloat(document.getElementById('pentagonValue-p').value) ;
  const pentagonValueB =parseFloat(document.getElementById('pentagonValue-b').value) ;

  const newPentagonBalance = ( 0.5 * pentagonValueP*pentagonValueB).toFixed(2);
  const numePentagon = document.getElementById('numePentagon').innerText;
  const result =document.getElementById('result');
  count=count+1
  let tr =document.createElement("tr")
  tr.innerHTML=`
    <tr class='flex items-center justify-between gap-4'>
    <td> ${count} </td>
      <td> ${numePentagon} </td>
      <td> ${newPentagonBalance} cm <sup>2</sup> </td>
     <td> <button id='toMiter5'  class=" w-max text-white text-xs bg-green-700 rounded-md p-2">Covert to m<sup>2</sup></button></td>
     <td><div id='click5'></div></td>
    </tr>
  `
    result.appendChild(tr)

    document.getElementById("toMiter5").addEventListener('click',function(){
      let cm = newPentagonBalance*100
      const convert = document.getElementById('click5')
      const div =document.createElement('div')
      div.innerHTML=`
      <td>${cm} m<sup>2</sup></td>
       `
       convert.appendChild(div)
    })
})

//Ellipse
document.getElementById('ellipseButton').addEventListener('click',function(){
  const ellipseValueA =parseFloat(document.getElementById('ellipseValue-a').value) ;
  const ellipseValueB=parseFloat(document.getElementById('ellipseValue-b').value) ;

  const newEllipseBalance = (3.1416* ellipseValueA*ellipseValueB ).toFixed(2);
  const numeEllipse = document.getElementById('numeEllipse').innerText;
  const result =document.getElementById('result');
  count=count+1
  let tr =document.createElement("tr")
  tr.innerHTML=`
    <tr class='flex items-center justify-between gap-4'>
    <td> ${count} </td>
      <td> ${numeEllipse} </td>
      <td> ${newEllipseBalance} cm <sup>2</sup> </td>
     <td> <button id='toMiter6'  class=" w-max text-white text-xs bg-green-700 rounded-md p-2">Covert to m<sup>2</sup></button></td>
     <td><div id='click6'></div></td>
    </tr>
  `
    result.appendChild(tr)

    document.getElementById("toMiter6").addEventListener('click',function(){
      let cm = newEllipseBalance*100
      const convert = document.getElementById('click6')
      const div =document.createElement('div')
      div.innerHTML=`
      <td>${cm} m<sup>2</sup></td>
       `
       convert.appendChild(div)
    })
})


