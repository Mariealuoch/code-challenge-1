const prompt = require ("prompt-sync")({sigint:true});

let grossSalary = prompt ("Enter grossSalary:", "0");
grossSalary = parseInt(grossSalary);
function calculateNhifDeduction(grossSalary){
    if(grossSalary <= 5999){
        return grossSalary-150;
    }
    else if(grossSalary >= 6000 && grossSalary <= 7999){
        return grossSalary - 300;
    
    }
    else if(grossSalary >= 8000 && grossSalary <=11999){
        return grossSalary
    }
}