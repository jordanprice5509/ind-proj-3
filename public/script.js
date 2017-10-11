
   // array storing products to display
var products = ["Crayon Bounce ($1200)", "Bounce with Slide ($2500)", "Fire Station ($2800)", "Obstacle Course ($3100)", "Wet Slide (3500)"]
   //create a matching array of the label elements
var labels = document.getElementsByTagName("label");
   //function to generage list from array
function processProducts() {
   for (var i = 0; i < 5; i++) {  //write each array element to its corresponding label
     // OLD CODE:  listItem = "item" + (i + 1);
      labels[i].innerHTML = products[i];
   }
}

if (window.addEventListener) {
   window.addEventListener("load", processProducts, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", processProducts);
}

// function to add values of selected check boxes and display total
  function calcTotal()
  {
    var itemTotal = 0;                                   //stores a "running total' of selected items
    var salesTaxRate = .06;
    var salesTax = 0
    var subtotal = 0;
    var items = document.getElementsByTagName("input");  //creates an array of <input> elements
    for (var i=0; i<5; i++) {                            //i is the counter, initialized at 0 and stops when i=5
         if(items[i].checked) {                          //check to see if each of the elements in the array is checked
           itemTotal += (items[i].value * 1);            //if it is checked, then add to the running total
         }
      }
    subtotal = itemTotal;
    salesTax = (itemTotal * salesTaxRate);
    itemTotal *= 1+ salesTaxRate;
    document.getElementById("total").innerHTML = 
       "Subtotal: $" + subtotal.toFixed(2) +
       '\n' + "Tax: $" + salesTax.toFixed(2) +
       '\n' + "Your order total is $" + itemTotal.toFixed(2);
  }

  //add the event listener to call the function
  var submitButton = document.getElementById("sButton");
    if (submitButton.addEventListener) {
      submitButton.addEventListener("click", calcTotal, false);
    } else if (submitButton.attachEvent); {
      submitButton.attachEvent("onclick", calcTotal)   
    }