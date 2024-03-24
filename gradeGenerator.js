function studentGrade(grade){
  
    const studentName= "Marion"//assign a variable 
   const studentMark = 0// // a variable assigned for the student markk
 
     if (grade >=79){// condtions
         return 'A'
     }
     else if (grade >= 60 && grade<=79){
         return "B"
     }
     else if (grade >=50 && grade <= 59){
         return "C"
     }
     else if (grade >=50 && grade <=49){
         return "D"
     }
     else {
         return "E"
     }
 }
 //Test Case
 console.log(studentGrade(42));// => E