function dateCalculate() {
    var year = document.querySelector(".year-input").value;
    var month = document.querySelector(".month-input").value;
    var day = document.querySelector(".day-input").value;
  
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    if (today.getFullYear() < year){
        alert("Please enter a valid year.")
    }
    else if (month > 12 || month < 1){
        alert("Please enter a valid month.")
    }
    else if (day > 31 || day < 1){
        alert("Please enter a valid day.")
    }
    else{
        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();
        let ageDays = today.getDate() - birthDate.getDate();
    
        if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
            ageYears--;
            ageMonths += 12;
            if (ageDays < 0) {
                ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            }
        }
    
        document.querySelector(".year-num").innerHTML = ageYears;
        document.querySelector(".month-num").innerHTML = ageMonths;
        document.querySelector(".day-num").innerHTML = ageDays;
    }
}