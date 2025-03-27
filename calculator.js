   function displayOn(value){
    document.getElementById("display").value += value;
   }

   function clearOn(){
    document.getElementById("display").value = '';
   }
   function calculateResult(){
    document.getElementById("display").value = eval(document.getElementById("display").value);
   }
   