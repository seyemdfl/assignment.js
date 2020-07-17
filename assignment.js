function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(10560);
console.log(result);


function woodCalculator(chair, table, cot) {
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var cotCount = cot * 5;
    var totalWood = chairCount + tableCount + cotCount;
    return totalWood;
}
var woodResult = woodCalculator(14, 5, 12);
console.log(woodResult);


function tinyFriend(name) {
    var smallest = name[0];
    for(var i = 0; i > name.length; i++) {
        var currentName = name[i];
        if(currentName< smallest) {
            smallest = currentName;
        }
    }
    return smallest;
}
var smallestName = tinyFriend(['jim', 'amal', 'karim', 'mical jackson']);
console.log(smallestName);

