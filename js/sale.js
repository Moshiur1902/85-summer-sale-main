// promocode click and  copy
const promoButton = document.getElementById('promo-button');
promoButton.addEventListener('click', function(){
    const promocode = promoButton.innerText;1
    const textarea = document.createElement('textarea');
    textarea.value = promocode;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    copyTextElement.textContent = `copied: ${promoCode}`;
})



// promo code apply

document.getElementById('btn-apply').addEventListener('click', function(){
    const inputField = document.getElementById('input-code');
    const inputCode = inputField.value;
    if(inputCode=== 'SELL200'){
        alert('Congratulation you have 20% discound for this Products')
        inputField.removeAttribute("disabled");
    }
    else{
        inputField.setAttribute("disabled");
    }
})



// add ordered Product

let total=0;

function clickButton(target){
    const selectedItemContainer=document.getElementById('add-order')
    
    const itemName=target.childNodes[1].innerText;
    const li=document.createElement('li');
    li.innerText=itemName;
    selectedItemContainer.appendChild(li);
    

    const price=target.childNodes[3].innerText.split(' ')[0];
    total = parseFloat (total) + parseFloat(price);
    

    document.getElementById('total-item-price').innerText=total;
}









document.getElementById('btn-make-purchase').addEventListener('click', function(){
    const purchaseField = document.getElementById('total-item-price');
    const makePurchase = purchaseField.innerText;
    if(makePurchase=== 'SELL200'){
        alert('Congratulation you have 20% discound for this Products')
        inputField.removeAttribute("disabled");
    }
    else{
        inputField.setAttribute("disabled");
    }
})










// homebutton clicked reload page
document.addEventListener("DOMContentLoaded",function(){
    const gotoHomeButton = document.getElementById("btn-gotohome");
    
    gotoHomeButton.addEventListener("click",function(){
        window.location.reload();
    })
    
})

