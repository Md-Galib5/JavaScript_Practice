function finalScore(omr) {
    //write your code here
    let ans = omr.right - (omr.wrong * .5);
    if(omr.right + omr.wrong + omr.skip !== 100){
        return "Invalid";
    }
    return Math.round(ans);
}