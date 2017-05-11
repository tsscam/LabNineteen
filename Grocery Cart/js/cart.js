var countBread = 0;
var countCheese = 0;
var countMilk = 0;
var countTurkey = 0;


function AddToCart(item) {

    var ItemPrices = [2.25, 2.5, 3.99, 7.75];

    var displayBread = document.getElementById("displayCountBread");
    var displayCheese = document.getElementById("displayCountCheese");
    var displayMilk = document.getElementById("displayCountMilk");
    var displayTurkey = document.getElementById("displayCountTurkey");

    displayBread.innerHTML = countBread;
    displayCheese.innerHTML  = countCheese;
    displayMilk.innerHTML  = countMilk;
    displayTurkey.innerHTML  = countTurkey;

    var displayBreadTotal = document.getElementById("Bread");
    displayBreadTotal.innerHTML  = parseInt(countBread) * ItemPrices[0];

    var displayCheeseTotal = document.getElementById("Cheese");
    displayCheeseTotal.innerHTML  = parseInt(countCheese) * ItemPrices[1]

    var displayMilkTotal = document.getElementById("Milk");
    displayMilkTotal.innerHTML  = parseInt(countMilk) * ItemPrices[2]

    var displayTurkeyTotal = document.getElementById("Turkey");
    displayTurkeyTotal.innerHTML  = parseInt(countTurkey) * ItemPrices[3]

    var displayTotal = document.getElementById("Total");
    displayTotal.innerHTML = (parseInt(countBread) * ItemPrices[0]) + (parseInt(countCheese) * ItemPrices[1]) + (parseInt(countMilk) * ItemPrices[2]) + (parseInt(countTurkey) * ItemPrices[3])
}
