const data = {
    USD: {EUR: 0.82, GBP: 0.74, TL: 7.68},
    EUR: {USD: 1.23, GBP: 0.91, TL: 9.35},
    GBP: {USD: 1.35, EUR: 1.10, TL: 10.21},
    TL : {USD: 0.13, EUR: 0.11, GBP: 0.098}
  };
  function myFunction(text) {
    var x = document.getElementById("snackbar");
  
    x.className = "show";
    x.innerHTML = text;
  
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  };
  
  const currencyKeys = Object.keys(data);
  
  function createCurrencyElements(elements, root, inputName){
    for(let i =0; i< elements.length; i++){
      const currencyKeyDiv   = document.createElement("div");
      const currencyKeyInput = document.createElement("input");
      currencyKeyInput.setAttribute("type", "radio");
      currencyKeyInput.setAttribute("name", inputName);
      currencyKeyInput.setAttribute("id", inputName + elements[i]);
      currencyKeyInput.setAttribute("value", elements[i]);
  
      const currencyKeyLabel = document.createElement("label");
      currencyKeyLabel.setAttribute("for", inputName + elements[i]);
      currencyKeyLabel.textContent = elements[i];
  
      currencyKeyDiv.appendChild(currencyKeyInput);
      currencyKeyDiv.appendChild(currencyKeyLabel);
      root.appendChild(currencyKeyDiv);
    }
  }
  
  //from
  const parentEl = document.querySelector("#currency-box-from");
  const fromInputName = "currency_from";
  createCurrencyElements(currencyKeys, parentEl, fromInputName);
  
  // to
  const parentToEl = document.querySelector("#currency-box-to");
  const toInputName = "currency_to";
  createCurrencyElements(currencyKeys, parentToEl, toInputName);
  
  
  const calculateButton = document.querySelector("#calculate-button");
  calculateButton.addEventListener("click", function(){
    
   if (document.querySelector("input[name='currency_from']:checked") && document.querySelector("input[name='currency_to']:checked")){
    
    const fromTarget = document.querySelector("input[name='currency_from']:checked").value;
        
    const toTarget   = document.querySelector("input[name='currency_to']:checked").value;
        
    const amount     = document.querySelector("input[name='amount']").value;

    const currentCurrencyObject = data[fromTarget];
    const resultForOne = currentCurrencyObject[toTarget];
    const result = amount * resultForOne;

    const currencyResult = document.querySelector("#currency-result");
    if (fromTarget == toTarget) {
      message = "FARKLI DEGERLER SECMELISINIZ!";
      myFunction(message);

    }else if (isNaN(amount)){
      message1 = "DEGERI BIR SAYI OLARAK VERMELISINIZ!";
      myFunction(message1);
    }else {
      currencyResult.innerHTML = amount + " " + fromTarget + " = " + result + " " + toTarget;
    }
  
   }else if (document.querySelector("input[name='currency_from']:checked")){    
    message2 = "DONUSTURMEK ISTEDIGINIZ DEGERI GIRINIZ!";
    myFunction(message2);

   }else if (document.querySelector("input[name='currency_to']:checked")) {
    message3 = "DONUSTURULECEK DEGER GIRINIZ!";
    myFunction(message3);

   }else {
    message4 = 'HICBIR DEGER GIRILMEDI';
    myFunction(message4);
   }
  });