
// promocode click and  copy
const promoButton = document.getElementById("promo-button");
promoButton.addEventListener("click", function () {
  const promocode = promoButton.innerText;
  1;
  const textarea = document.createElement("textarea");
  textarea.value = promocode;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  copyTextElement.textContent = `copied: ${promoCode}`;
});

// promo code apply
document.getElementById("btn-apply").addEventListener("click", function () {
  const inputField = document.getElementById("input-code");
  const inputCode = inputField.value;

  const total = parseFloat(
    document.getElementById("total-item-price").innerText
  );

  if (inputCode === "SELL200" && total >= 200) {
    const discountPercentage = 0.2;
    const discount = total * discountPercentage;
    const grandTotal = total - discount;

    document.getElementById("discount-price").innerText = discount.toFixed(2);
    document.getElementById("grand-total").innerText = grandTotal.toFixed(2);

    alert("Congratulations! You have a 20% discount for this purchase.");
    inputField.removeAttribute("disabled");
  } else {
    inputField.setAttribute("disabled", true);

    document.getElementById("discount-price").innerText = "0.00";
    document.getElementById("grand-total").innerText = total.toFixed(2);
  }
});

let total = 0;

function clickButton(target) {
  const selectedItemContainer = document.getElementById("add-order");

  const itemName = target.querySelector(".card-title").innerText;
  const li = document.createElement("li");
  li.innerText = itemName;
  selectedItemContainer.appendChild(li);

  const priceString = target.querySelector("h2").innerText;
  const price = parseFloat(priceString.replace(" TK", ""));
  total += price;

  updateTotal();
}

function updateTotal() {
  document.getElementById("total-item-price").innerText = total.toFixed(2);
  document.getElementById("discount-price").innerText = "0.00";
  document.getElementById("grand-total").innerText = total.toFixed(2);
}

document
  .getElementById("btn-make-purchase")
  .addEventListener("click", function () {
    const makePurchase = parseFloat(
      document.getElementById("total-item-price").innerText
    );
    if (makePurchase !== 0) {
      alert("Congratulations! You have successfully made the purchase.");
    } else {
      alert("Please add items to your card before making the purchase.");
    }
  });

// homebutton clicked reload page
document.addEventListener("DOMContentLoaded", function () {
  const gotoHomeButton = document.getElementById("btn-gotohome");

  gotoHomeButton.addEventListener("click", function () {
    window.location.reload();
  });
})