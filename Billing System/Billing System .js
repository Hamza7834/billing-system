
// Define item prices
const itemPrices = {
    item1: 100,
    item2: 120,
    item3: 150,
    item4: 90,
    item5: 300,
    item6: 70,
    item7: 90,
    item8: 50,
    item9: 20,
    item10: 85,
    item11: 160,
    item12: 230,
    item13: 123,
    item14: 55,
    item15: 85,
    item16: 290,
    item17: 140,
    item18: 155,
    item19: 160,
    item20: 275,
};


// *************** First Category start ******************



function updatePrice1() {
    const selectedItem1 = document.getElementById("itemList1").value;
    document.getElementById("itemPrice1").innerText = itemPrices[selectedItem1];
    // Recalculate total when the item changes
    calculateTotal1();
}


function calculateTotal1() {
    // Get the quantity entered by the user
    const quantity1 = document.getElementById("quantity1").value;
    // Get the item price   
    const itemPrice1 = parseInt(document.getElementById("itemPrice1").innerText);
    // Calculate total bill
    const totalBill1 = (quantity1 * itemPrice1);
    // Update the total bill in the table
    document.getElementById("totalBill1").innerText = totalBill1;
}



// *************** First Category End ******************





// *************** Second Category Start ******************


function updatePrice2() {
    const selectedItem2 = document.getElementById("itemList2").value;
    document.getElementById("itemPrice2").innerText = itemPrices[selectedItem2];
    // Recalculate total when the item changes
    calculateTotal2();
}


function calculateTotal2() {
    // Get the quantity entered by the user
    const quantity2 = document.getElementById("quantity2").value;
    // Get the item price   
    const itemPrice2 = parseInt(document.getElementById("itemPrice2").innerText);
    // Calculate total bill
    const totalBill2 = (quantity2 * itemPrice2);
    // Update the total bill in the table
    document.getElementById("totalBill2").innerText = totalBill2;
}



// *************** Second Category End ******************




// *************** Third Category Start ******************

function updatePrice3() {
    const selectedItem3 = document.getElementById("itemList3").value;
    document.getElementById("itemPrice3").innerText = itemPrices[selectedItem3];
    // Recalculate total when the item changes
    calculateTotal3();
}


function calculateTotal3() {
    // Get the quantity entered by the user
    const quantity3 = document.getElementById("quantity3").value;
    // Get the item price   
    const itemPrice3 = parseInt(document.getElementById("itemPrice3").innerText);
    // Calculate total bill
    const totalBill3 = (quantity3 * itemPrice3);
    // Update the total bill in the table
    document.getElementById("totalBill3").innerText = totalBill3;
}


// *************** Third Category End ******************




// *************** Four Category Start ******************


function updatePrice4() {
    const selectedItem4 = document.getElementById("itemList4").value;
    document.getElementById("itemPrice4").innerText = itemPrices[selectedItem4];
    // Recalculate total when the item changes
    calculateTotal4();
}


function calculateTotal4() {
    // Get the quantity entered by the user
    const quantity4 = document.getElementById("quantity4").value;
    // Get the item price   
    const itemPrice4 = parseInt(document.getElementById("itemPrice4").innerText);
    // Calculate total bill
    const totalBill4 = (quantity4 * itemPrice4);
    // Update the total bill in the table
    document.getElementById("totalBill4").innerText = totalBill4;


}
// *************** Four Category End ******************



// *************** Five Category Start ******************

function updatePrice5() {
    const selectedItem5 = document.getElementById("itemList5").value;
    document.getElementById("itemPrice5").innerText = itemPrices[selectedItem5];
    // Recalculate total when the item changes
    calculateTotal5();
}


function calculateTotal5() {
    // Get the quantity entered by the user
    const quantity5 = document.getElementById("quantity5").value;
    // Get the item price   
    const itemPrice5 = parseInt(document.getElementById("itemPrice5").innerText);
    // Calculate total bill
    const totalBill5 = (quantity5 * itemPrice5);
    // Update the total bill in the table
    document.getElementById("totalBill5").innerText = totalBill5;
}


// *************** Five Category End ******************




// *************** All Total part Start ******************

function alltotal() {
    let a = parseInt(document.getElementById("totalBill1").innerText)
    let b = parseInt(document.getElementById("totalBill2").innerText)
    let c = parseInt(document.getElementById("totalBill3").innerText)
    let d = parseInt(document.getElementById("totalBill4").innerText)
    let e = parseInt(document.getElementById("totalBill5").innerText)
    document.getElementById("alltotal").innerHTML = a + b + c + d + e + " Rs";
}


// *************** All Total part End ******************




function paid() {
    let a = parseInt(document.getElementById("paid").value)
    let b = parseInt(document.getElementById("alltotal").innerText)
    document.getElementById("remaining").innerHTML = a - b + " Rs";

}

