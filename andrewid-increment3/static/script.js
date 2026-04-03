
// var x = 5;
// var y = 7;
// var z = x + y;
// console.log(z);

// var A = "Hello ";
// var B = "world!";
// var C = A + B;
// console.log(C);

// function sumnPrint(x1, x2) {
//     console.log(x1 + x2);
// }

// sumnPrint(x, y);
// sumnPrint(A, B);

// if (C.length > z) {
//     console.log(C);
// } else if (C.length < z) {
//     console.log(z);
// } else {
//     console.log("good job!");
// }

// var L1 = ["Watermelon","Pineapple","Pear","Banana"];
// var L2 = ["Apple","Banana","Kiwi","Orange"];

// function findTheBanana(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === "Banana") {
//             alert("Banana");
//         }
//     }
// }

// findTheBanana(L1);
// findTheBanana(L2);


// PART 3

var now = new Date();
var hour = now.getHours(); 

function greeting(x) {
    var message = "";

    if (x < 5 || x >= 20) {
        message = "Good night";
    } else if (x < 12) {
        message = "Good morning";
    } else if (x < 18) {
        message = "Good afternoon";
    } else {
        message = "Good evening";
    }


    document.getElementById("greeting").innerHTML = message;
}

greeting(hour);

function addYear() {
    var year = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML = "© " + year + " MonoMuse. All rights reserved.";
}

