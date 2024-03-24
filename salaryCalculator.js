function calculatePayeTax(taxableIncome) {
    // Tax brackets and rates for the year 2023
    const taxBrackets = [
      { threshold: 24000, rate: 0.1 },
      { threshold: 32333, rate: 0.25 },
      { threshold: Infinity, rate: 0.3 }
    ];
  
    let remainingIncome = taxableIncome;
    let taxAmount = 0; 
    let previousThreshold = 0;
  
    // Loop through each tax bracket
    for (const { threshold, rate } of taxBrackets) {
      if (remainingIncome > threshold) {
        taxAmount += (threshold - previousThreshold) * rate;
        remainingIncome -= (threshold - previousThreshold);
        previousThreshold = threshold;
      } else {
        taxAmount += remainingIncome * rate;
        break;
      }
    }
  
    return taxAmount; // Return the calculated PAYE tax amount
  }
  
  // Function to calculate the NHIF deduction based on the gross salary
  function calculateNhifDeduction(grossSalary) {
    //NHIF rates for the year 2023.
    const nhifRates = [
      [6000, 150],
      [8000, 300],
      [12000, 400],
      [15000, 500],
      [20000, 600],
      [25000, 750],
      [30000, 850],
      [35000, 900],
      [40000, 950],
      [45000, 1000],
      [50000, 1100],
      [60000, 1200],
      [70000, 1300],
      [80000, 1400],
      [90000, 1500],
      [100000, 1600],
      [Infinity, 1700]
    ];
  
    // Loop through each NHIF rate bracket
    for (const [threshold, deduction] of nhifRates) {
      if (grossSalary <= threshold) {
        return deduction;
      }
    }
    return 1700;
  }
  //Function to calculate the NSSF deduction based on the gross salary
  function calculateNssfDeduction(grossSalary) {
    //NSSF rate for the year 2023
  
    const nssfDeduction = 0.06 * grossSalary; 
    return Math.min(nssfDeduction, 1080); 
  }
  
  // Function TO calculate the net salary based on the basic salary and benefits
  function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits; 
    const taxableIncome = grossSalary; 
  
    const payeTax = calculatePayeTax(taxableIncome); 
    const nhifDeduction = calculateNhifDeduction(grossSalary); 
    const nssfDeduction = calculateNssfDeduction(grossSalary);
  
    const netSalary = grossSalary - payeTax - nhifDeduction - nssfDeduction; 
  
    // Return an object containing all the calculated values
    return { grossSalary, payeTax, nhifDeduction, nssfDeduction, netSalary };
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter the basic salary: ', (basicSalary) => {
    readline.question('Enter the benefits: ', (benefits) => {
      const result = calculateNetSalary(parseFloat(basicSalary), parseFloat(benefits)); 
  //Print the salaries plus deductions
      console.log(`Gross Salary: ${result.grossSalary}`); 
      console.log(`PAYE Tax: ${result.payeTax}`); 
      console.log(`NHIF Deduction: ${result.nhifDeduction}`); 
      console.log(`NSSF Deduction: ${result.nssfDeduction}`); 
      console.log(`Net Salary: ${result.netSalary}`); 
  
      readline.close(); 
    });
  })