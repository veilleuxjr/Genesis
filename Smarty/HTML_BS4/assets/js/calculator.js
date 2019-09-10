
function calculator1()
{
    var x =parseFloat(document.getElementById('res1').value*1);
    var y =parseFloat(document.getElementById('res2').value*1);
    var z =parseFloat(document.getElementById('res3').value*1);
    var total= Math.ceil (x/(y*6));
    var total2= Math.ceil (y/20);
    var total3= total*total2
    // add average value to the average element
    document.getElementById('resresult').innerHTML = total3;

}

function calculator()
{
    var grade1=parseFloat(document.getElementById('comm1').value*1);
    var grade2=parseFloat(document.getElementById('comm2').value*1);
    var grade3=parseFloat(document.getElementById('comm3').value*1);
    var grade4=parseFloat(document.getElementById('comm4').value*1);
    var grade5=parseFloat(document.getElementById('comm5').value*1);
    var total=grade5
    // add average value to the average element 
    document.getElementById('commresult').innerHTML = total;

}

function calculator2()
{
    var grade1=parseFloat(document.getElementById('hy1').value*1);
    var grade2=parseFloat(document.getElementById('hy2').value*1);
    var grade3=parseFloat(document.getElementById('hy3').value*1);
    var grade4=parseFloat(document.getElementById('hy4').value*1);
    var grade5=parseFloat(document.getElementById('hy5').value*1);
    var grade6=parseFloat(document.getElementById('hy6').value*1);
    var total1=grade1 * (grade2 + grade3)
    var total2=total1 / 1000 
    var total3=(grade3 + grade2) / 20
    var total4=total2 * total3
    // add average value to the average element 
    document.getElementById('hybridresult').innerHTML = total4;

}

function calculator3()
	{
	var grade1=parseFloat(document.getElementById('corp1').value*1);
	var grade2=parseFloat(document.getElementById('corp2').value*1);
	var grade3=parseFloat(document.getElementById('corp3').value*1);
	var grade4=parseFloat(document.getElementById('corp4').value*1);
	var grade5=parseFloat(document.getElementById('corp5').value*1);
    var total1=(grade2 + grade3) * grade5
    console.log ("total1", total1);
    var total2=Math.ceil (total1 / 1000) 
    console.log ("total2", total2);
    var total3=Math.ceil(grade3 + grade2) / 20
    console.log ("total3", total3);
    var total4=total2 * total3
    console.log ("total4", total4);
    // add average value to the average element 
    document.getElementById('corpresult').innerHTML = total2;
													
    }	
    
    
