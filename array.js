function reverseArrayInPlace() {
    for (let i = 0; i < Math.floor(arraynames.length / 2); i++) {
        let oldvalue = arraynames[i];
        arraynames[i] = arraynames[arraynames.length - 1 - i];
        arraynames[arraynames.length - 1 - i] = oldvalue;
    }
    return arraynames;
}
function reverseArray() {
    let newarr = [];
    for (let i = arraynames.length - 1; i >= 0; i--) {
        newarr.push(arraynames[i]);
    }
    return newarr;
}



arraynames = ["A", "B", "c", "D", "E"];
reverseArray();
reverseArrayInPlace();