
function calculator1() {
    console.log("calculator 1")
    var x = parseFloat(document.getElementById('res1').value * 1);
    var y = parseFloat(document.getElementById('res2').value * 1);
    var z = parseFloat(document.getElementById('res3').value * 1);
    var total = Math.ceil(x / (y * 6));
    var total2 = Math.ceil(y / 20);
    var total3 = total * total2
    // add average value to the average element
    document.getElementById('priceoption_res').innerHTML = total3;

}

function calculator() {
    console.log("calculator")
    var grade1 = parseFloat(document.getElementById('comm1').value * 1);
    var grade2 = parseFloat(document.getElementById('comm2').value * 1);
    var grade3 = parseFloat(document.getElementById('comm3').value * 1);
    var grade4 = parseFloat(document.getElementById('comm4').value * 1);
    var grade5 = parseFloat(document.getElementById('comm5').value * 1);
    var total = grade5
    // add average value to the average element 
    document.getElementById('priceoption_comm').innerHTML = total;

}

function calculator2() {
    console.log("calculator 2")
    var grade1 = parseFloat(document.getElementById('hy1').value * 1);
    var grade2 = parseFloat(document.getElementById('hy2').value * 1);
    var grade3 = parseFloat(document.getElementById('hy3').value * 1);
    var grade4 = parseFloat(document.getElementById('hy4').value * 1);
    var grade5 = parseFloat(document.getElementById('hy5').value * 1);
    var grade6 = parseFloat(document.getElementById('hy6').value * 1);
    var total1 = grade1 * (grade2 + grade3)
    var total2 = Math.ceil(total1 / 1000)
    var total3 = Math.ceil((grade3 + grade2) / 20)
    var total4 = Math.ceil(total2 / total3)
    var total5 = Math.ceil(total2 * total3)
    // add average value to the average element 
    document.getElementById('priceoption_hyb').innerHTML = total2;

}

function calculator3() {
    console.log("calculator 3")
    var grade1 = parseFloat(document.getElementById('corp1').value * 1);
    var grade2 = parseFloat(document.getElementById('corp2').value * 1);
    var grade3 = parseFloat(document.getElementById('corp3').value * 1);
    var grade4 = parseFloat(document.getElementById('corp4').value * 1);
    var grade5 = parseFloat(document.getElementById('corp5').value * 1);
    var total1 = (grade2 + grade3) * grade5
    var total2 = Math.ceil(total1 / 1000)
    var total3 = Math.ceil((grade3 + grade2) / 20)
    var total4 = Math.ceil(total2 / total3)
    var total5 = Math.ceil(total4 * total3)
    // add average value to the average element 
    document.getElementById('priceoption_corp').innerHTML = total5;

}

function calculatorresi() {
    var grade1 = $('#stand').is(":checked");
    var grade2 = $('#premium').is(":checked");
    var grade3 = $('#excelium').is(":checked");
    var grade4 = document.getElementById('priceoption_res').innerHTML
    // var grade4 = parseFloat(document.getElementById('commresult').value * 1);
    // var total = grade1 * grade3


    if (grade1 == true) {


        var price = (grade4 * 7565)
        var price2 = (price * .10)
        var total = (price + price2)

        document.getElementById('priceinstal_res').innerHTML = total;
    }
    if (grade2 == true) {

        var price = (grade4 * 12345)
        var price2 = (price * .13)
        var total = (price + price2)

        document.getElementById('priceinstal_res').innerHTML = total;
    }
    if (grade3 == true) {

        var price = (grade4 * 15400)
        var price2 = (price * .16)
        var total = (price + price2)


        document.getElementById('priceinstal_res').innerHTML = total;
    }


}

function calculatorcomm() {
    var grade1 = $('#stand_com').is(":checked");
    var grade2 = $('#premium_com').is(":checked");
    var grade3 = $('#excelium_com').is(":checked");
    var grade4 = document.getElementById('priceoption_comm').innerHTML
    // var grade4 = parseFloat(document.getElementById('commresult').value * 1);
    // var total = grade1 * grade3

    if (grade1 == true) {


        var price = (grade4 * 7565)
        var price2 = (price * .10)
        var total = (price + price2)

        document.getElementById('priceinstal_comm').innerHTML = total;
    }
    if (grade2 == true) {

        var price = (grade4 * 12345)
        var price2 = (price * .13)
        var total = (price + price2)

        document.getElementById('priceinstal_comm').innerHTML = total;
    }
    if (grade3 == true) {

        var price = (grade4 * 15400)
        var price2 = (price * .16)
        var total = (price + price2)


        document.getElementById('priceinstal_comm').innerHTML = total;
    }


}

function calculatorhyb() {
    var grade1 = $('#stand_hyb').is(":checked");
    var grade2 = $('#premium_hyb').is(":checked");
    var grade3 = $('#excelium_hyb').is(":checked");
    var grade4 = document.getElementById('priceoption_hyb').innerHTML
    // var grade4 = parseFloat(document.getElementById('commresult').value * 1);
    // var total = grade1 * grade3

    if (grade1 == true) {


        var price = (grade4 * 7565)
        var price2 = (price * .10)
        var total = (price + price2)

        document.getElementById('priceinstal_hyb').innerHTML = total;
    }
    if (grade2 == true) {

        var price = (grade4 * 12345)
        var price2 = (price * .13)
        var total = (price + price2)

        document.getElementById('priceinstal_hyb').innerHTML = total;
    }
    if (grade3 == true) {

        var price = (grade4 * 15400)
        var price2 = (price * .16)
        var total = (price + price2)


        document.getElementById('priceinstal_hyb').innerHTML = total;
    }


}

function calculatorcorp() {
    
    var grade1 = $('#standcorp').is(":checked");
    var grade2 = $('#premiumcorp').is(":checked");
    var grade3 = $('#exceliumcorp').is(":checked");
    var grade4 = document.getElementById('priceoption_corp').innerHTML
    // var grade4 = parseFloat(document.getElementById('commresult').value * 1);
    // var total = grade1 * grade3

    if (grade1 == true) {
        var price = (grade4 * 7565)
        var price2 = (price * .10)
        var total = (price + price2)

        document.getElementById('priceinstal_corp').innerHTML = total;
    }
    if (grade2 == true) {
        var price = (grade4 * 12345)
        var price2 = (price * .13)
        var total = (price + price2)

        document.getElementById('priceinstal_corp').innerHTML = total;
    }
    if (grade3 == true) {
        var price = (grade4 * 15400)
        var price2 = (price * .16)
        var total = (price + price2)


        document.getElementById('priceinstal_corp').innerHTML = total;
    }


}

