function studentGrade(grade){
   
    if (grade >=79){
        return 'A'
    }
    else if (grade => 60 && grade<= 78){
        return "B"
    }
    else if (grade =>50 && grade <= 59){
        return "C"
    }
    else if (grade =>50 && grade <=49){
        return "D"
    }
    else {
        return "E"
    }
}
