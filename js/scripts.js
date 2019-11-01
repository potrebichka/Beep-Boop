$(document).ready(function() {
    $("form#formInput").submit(function(event) {
        event.preventDefault();
        $("#result").empty();

        const number = parseInt($("#numberInput").val());
        const userName = $("#nameInput").val();

        const results = BeepBoop(number, userName);
        results.forEach((result) => {
            $("#result").append("<li>" + result + "</li>")
        });
        $(".resultBox").slideDown();
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