// declare variables
function speedDetector(speed) {

    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPointsLimit = 12;
  
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  
        if (demeritPoints >= demeritPointsLimit) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
  }
  
  // Test cases
  checkSpeed(89); // Output: Points: 3
  checkSpeed(35); // Output: Ok
  checkSpeed(150); // Output: License suspended
  