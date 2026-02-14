function validOtp(otp) {
    // Your code here
    if(typeof otp !== "string"){
        return "Invalid";
    }
    if(otp.length === 8 && ((otp[0] === 'p') && (otp[1] === 'h') && otp[2] === '-')){
        return true;
    }else{
        return false;
    }
}
