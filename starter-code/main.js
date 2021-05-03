// function setListColor() {
//   let elementClass = document.getElementB;
// }

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
