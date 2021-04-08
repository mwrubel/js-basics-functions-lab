// Code your solution in this file!
function distanceFromHqInBlocks(numBlocks){
//returns number of blocks from Scubers to pickup location
if (numBlocks > 42){
return numBlocks-42
}
else 
return 42-numBlocks

}

function distanceFromHqInFeet(distance) {
//returns number of feet from Scubers to pickup location
let numFeet = distanceFromHqInBlocks(distance) *264
return numFeet
}

function distanceTravelledInFeet(pickUpLoc, dropOffLoc){
if (pickUpLoc > dropOffLoc){
    return (pickUpLoc - dropOffLoc) * 264
}
else{
    return (dropOffLoc-pickUpLoc) * 264
}
}

function calculatesFarePrice(start, destination){
    let cost;
    let dTravel = distanceTravelledInFeet(start, destination)
if(dTravel > 400 && dTravel <2000){
    return cost = (dTravel-400) *.02
}
else if(dTravel > 2000 && dTravel <2500){
    return cost = 25
}
else if(dTravel > 2500){
    return cost = 'cannot travel that far'
}
else{
    return cost =0;
    //free
}
}
