let allSelected = {};

function selectOption(id, elementClassName) {
  let selected = document.getElementById(id).firstElementChild.textContent;
  allSelected[elementClassName] = selected;
}

function openModal() {
  document.getElementById("modal").style.display = "block";
  let orderSummary = document.getElementById("orderSummary").textContent;
  console.log(orderSummary); // the sentence
  document.getElementById("sentence").innerHTML = orderSummary;
  totalPrice(orderSummary);
}

function totalPrice(orderSummary) {
  let stringToArray = orderSummary.split(" ");
  console.log("string to array: ", stringToArray);
  for (let i = 0; i < stringToArray.length; i++) {
    if (stringToArray[i] == "month.") {
      document.getElementById("price").innerHTML = "64.00";
    }
    if (stringToArray[i] == "weeks.") {
      document.getElementById("price").innerHTML = "34.50";
    }
    if (stringToArray[i] == "week.") {
      document.getElementById("price").innerHTML = "22.50";
    }
  }
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function fillInSummary(elementClassName) {
  if (elementClassName === "preference-options") {
    document.getElementById("one").innerHTML = allSelected[elementClassName];
  }
  if (elementClassName === "type-options") {
    document.getElementById("two").innerHTML = allSelected[elementClassName];
  }
  if (elementClassName === "quantity-options") {
    document.getElementById("three").innerHTML = allSelected[elementClassName];
  }
  if (elementClassName === "grind-options") {
    document.getElementById("four").innerHTML = allSelected[elementClassName];
  }
  if (elementClassName === "delivery-options") {
    document.getElementById("five").innerHTML = allSelected[elementClassName];
  }
}

function selectCardColor(id) {
  let elementClassName = document.getElementById(id).className;
  let divElements = document.getElementsByClassName(elementClassName);

  for (let i = 0; i < divElements.length; i++) {
    if (divElements[i].id === id) {
      Object.assign(document.getElementById(id).style, {
        backgroundColor: "rgb(14, 135, 134)",
        color: "white",
      });
    } else {
      Object.assign(divElements[i].style, {
        backgroundColor: "rgb(233, 233, 233)",
        color: "black",
      });
    }
  }
  selectOption(id, elementClassName);
  fillInSummary(elementClassName);
}

function showTypeOfCoffee(id) {
  document.getElementById("typeOfCoffee").style.display = "flex";
  document.getElementById("preferenceOne").style.color = "rgb(173, 173, 173)";
  document.getElementById("beanTypeTwo").style.color = "black";
  selectCardColor(id);
}

function showQuantity(id) {
  document.getElementById("quantity").style.display = "flex";
  document.getElementById("beanTypeTwo").style.color = "rgb(173, 173, 173)";
  document.getElementById("quantityThree").style.color = "black";
  selectCardColor(id);
}

function showGrindOptions(id) {
  document.getElementById("grind").style.display = "flex";
  document.getElementById("quantityThree").style.color = "rgb(173, 173, 173)";
  document.getElementById("grindFour").style.color = "black";
  selectCardColor(id);
}

function showDelivery(id) {
  document.getElementById("delivery").style.display = "flex";
  document.getElementById("grindFour").style.color = "rgb(173, 173, 173)";
  document.getElementById("deliveryFive").style.color = "black";
  selectCardColor(id);
}

function selectDelivery(id) {
  selectCardColor(id);
}
