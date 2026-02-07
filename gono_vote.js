function gonoVote(array) {
    //write your code here
    if(!Array.isArray(array)){
        return "Invalid";
    }
    let st;
    let countA = 0;
    let countB = 0;
    for(st of array){
        if(st === "ha"){
            countA = countA + 1;
        }else if(st === "na"){
            countB = countB + 1;
        }
    }
    if(countA === countB){
        return "equal";
    }else if(countA > countB){
        return true;
    }else{
        return false;
    }

}