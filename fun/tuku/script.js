var isPalindrome = function (string) {
    if (!string.length)
        return false;

    var mn = document.getElementById("min").value;
    var mx = document.getElementById("max").value;

    if (mn > mx)
        return false;
    // console.log(mn, mx);

    if (!mn && !mx) {
        if (string == string.split('').reverse().join('')) {
            return true;
        }
        else {
            return false;
        }
    }
    if (mn && mx && string.length >= mn && string.length <= mx) {
        if (string == string.split('').reverse().join('')) {
            return true;
        }
        else
            return false;
    }

    if (!mn && mx && string.length <= mx) {
        if (string == string.split('').reverse().join('')) {
            return true;
        }
        else
            return false;
    }

    if (mn && !mx && string.length >= mn) {
        if (string == string.split('').reverse().join('')) {
            return true;
        }
        else
            return false;
    }


    return false;
}



function showMessage() {
    var list = document.getElementById('your_input').value.split(' ');
    // console.log(list);

    const resultList = document.getElementById('display')

    list.forEach(element => {
        if (isPalindrome(element)) {
            // var message = element;
            // display.innerHTML = message;
            resultList.append(element)
            resultList.append(document.createElement('br'))
        }
    });

}