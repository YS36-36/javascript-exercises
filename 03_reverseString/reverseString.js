const reverseString = function(string) {
    str = '';
    for (let i = string.length-1; i >= 0; i--) {
        str += string[i];
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
