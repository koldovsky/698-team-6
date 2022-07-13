function addDashes(f) {
    var r = /(\D+)/g,
        firstNum = '',
        secondNum = '',
        thirdNum = '',
        lastNum = '';
    f.value = f.value.replace(r, '');
    firstNum = f.value.substr(0, 3);
    secondNum = f.value.substr(3, 3);
    thirdNum = f.value.substr(6, 2);
    lastNum = f.value.substr(8, 2);
    f.value = firstNum + '-' + secondNum + '-' + thirdNum + '-' + lastNum;
}