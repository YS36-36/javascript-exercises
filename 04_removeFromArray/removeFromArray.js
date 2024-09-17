const removeFromArray = function(arr, arg) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let bo = true;
        for (let j = 1; j <= arguments.length; j++) {
            if (arr[i] === arguments[j]) {
                bo = false
                break;
            }
        }
        if (bo === true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
