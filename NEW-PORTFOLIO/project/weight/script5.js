const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const input = document.querySelector("input");
    const convertedWewight = document.querySelector("span");
    let kgToPound;

    if((isNaN(input.value)) || input.value <=0){
        convertedWewight.classList.add("error");
        convertedWewight.innerHTML = "<p>Please enter a valid number</p>"
        setTimeout(()=>{
            convertedWewight.innerHTML = "";
            convertedWewight.classList.remove("error");
        },2500);
        input.value = "";
        
    }else{ 
        kgToPound = Number(input.value) * 2.20462;
        convertedWewight.classList.add("seccusful")
        convertedWewight.innerHTML = `${kgToPound.toFixed(3)}`;

        setTimeout(()=>{
            convertedWewight.innerHTML = "";
            convertedWewight.classList.remove("seccusful");
            input.value = "";
        },10000);
        
    }
})