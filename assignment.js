//feet to mile convert function.
function feetToMile (feet) {
    if (0 <= feet) {
        var mile = (feet / 5280);
        return mile;
    }
    else {
        return "Feet unit cannot be negative.Please enter a positive value."
    }
}

//wood calculator function.Measuring unit cubic feet.
function woodCalculator (chair, table, bed) {
    if (0 <= chair) {
        var woodPerChair = (chair * 1);
        if (0 <= table){
            var woodPerTable = (table * 3);
            if (0 <= bed){
                var woodPerBed = (bed * 5);
                var woodtotal = (woodPerChair + woodPerTable + woodPerBed);
                return woodtotal;
            }
            else {
                return "chair, table, bed cannot be negative or empty.Please enter three positive value separated by comma."
            }
        }
        else {
            return "chair, table, bed cannot be negative or empty.Please enter three positive value separated by comma."
        }
    }
    else {
        return "chair, table, bed cannot be negative or empty.Please enter three positive value separated by comma."
    }
}

//brick calculator function.
function brickCalculator (buildingFloor) {
    var bricksPerFeet = 1000;
    if (buildingFloor >= 0 && buildingFloor <= 10) {
        var totalFeet = (buildingFloor * 15);
        var totalBricks = (totalFeet * bricksPerFeet); 
        return totalBricks;
    }
    else if (buildingFloor >= 0 && buildingFloor <= 20) {
        var firstTenFloorExtraBricks = 30000;
        totalFeet = (buildingFloor * 12);
        totalBricks = ((totalFeet * bricksPerFeet) + firstTenFloorExtraBricks);
        return totalBricks;
    }    
    else if (buildingFloor >= 0 && buildingFloor >= 21) {
        firstTenFloorExtraBricks = 30000;
        var secondTenFloorExtraBricks = 40000;
        totalFeet = (buildingFloor * 10);
        var extraTotalBricks = (firstTenFloorExtraBricks + secondTenFloorExtraBricks);
        totalBricks = ((totalFeet * bricksPerFeet) + extraTotalBricks);
        return totalBricks;
    }
    else {
        return "Please enter a positive value."
    }
}

//tiny friend name function.
function tinyFriend (nameArray) {
    var smallFriendName = nameArray[0];
    for (var i = 0; i < nameArray.length; i++) {
        var currentName = nameArray[i];
        if (currentName.length < smallFriendName.length) {
            smallFriendName = currentName;
        }
    }
    return smallFriendName;  
}
