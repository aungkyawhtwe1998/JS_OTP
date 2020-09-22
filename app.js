const getOTP = (length, option = {}) => {
    let input = document.getElementById('number');
    if (input.value === '') {
        // alert('Please Enter the Phone NO.');
        return false;
    }

    const digit = '0123456789';
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = alphabets.toUpperCase();
    const specialChars = '!@#$%^&*';

    let defaultOption = {
        digit: true,
        alphabets: true,
        upperCase: true,
        specialChars: true,
    };

    //chek opt option element true, false 
    let opt = { ...defaultOption, ...option };
    console.log(opt);

    //Combine all ellement in object defaultOption as a One String;
   
    //if digit in opt is true, take digit to allowChars;
    let allowChars = ((opt.digit || '') && digit);
    allowChars += ((opt.digit || '') && upperCase);
    allowChars += ((opt.digit || '') && specialChars);
    allowChars += ((opt.alphabets || '') && alphabets);
    console.log(allowChars);

    let getOTP = '';
    while (getOTP.length < length) {
        let random = Math.random();
        let charIndex = Math.floor(random * (allowChars.length - 1) + 0);//remove decimal value //-1 for no error
        getOTP += allowChars[charIndex];
    }
    document.getElementById('result').innerHTML = getOTP;

}