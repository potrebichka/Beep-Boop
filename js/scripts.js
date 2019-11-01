$(document).ready(function() {
    $("#numberInput").focus(function() {
        $(".resultBox").slideUp(1000);
    });

    $("form#formInput").submit(function(event) {
        event.preventDefault();
        $("#result").empty();

        const number = parseInt($("#numberInput").val());
        const userName = $("#nameInput").val();
        const reverseFlag = $("#reverse")[0].checked;

        const results = BeepBoop(number, userName);
        if (reverseFlag) {
            results.reverse();
        }
        const len = results.length;
        results.forEach((result) => {
            if (len % 3 === 0) {
                $("#result").append("<li class='purpleClass'>" + result + "</li>")
            } else if (len % 3 === 1) {
                $("#result").append("<li class='redClass'>" + result + "</li>")
            } else {
                $("#result").append("<li class='blueClass'>" + result + "</li>")
            }
        });
        $(".resultBox").slideDown(2000);
    })
});

var BeepBoop = (number, name) => {
    if (number < 0 || isNaN(number)){
        alert("Incorrect input");
        return;
    }
    if (!name) {
        name = "Dave";
    }
    let resultArray = [];
    for (let i = 0; i <= number; i++) {
        const indexStr = i.toString();
        if (indexStr.includes(3)) {
            resultArray.push("I'm sorry, " + name + ". I'm afraid I can't do that.");
        } else if (indexStr.includes(2)) {
            resultArray.push("Boop");
        } else if (indexStr.includes(1)) {
            resultArray.push("Beep");
        } else {
            resultArray.push(i);
        }
    }
    return resultArray;
}