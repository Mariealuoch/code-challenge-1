function studentGrade(grade){
  
    const studentName= "Marion"
   const studentMark = 0
 
     if (grade >=79){
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
 console.log(studentGrade(42))