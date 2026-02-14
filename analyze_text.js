function analyzeText(str) {
    // Your code here
     if(typeof str !== "string") {
        return "Invalid";
    }
    if(str.length === 0){
        return "Invalid";
    }
    let words = str.split(" ");

    let max = "";
    let ch = 0;
    let word = 0;
    for(word of words){
        if(word.length > max.length){
            max = word;
        }
    }

    let count = 0;
    
    for(ch of str){
        if(ch !== " "){
            count++;
        }
    }

    return {
        longwords: max,
        token: count
    };
}