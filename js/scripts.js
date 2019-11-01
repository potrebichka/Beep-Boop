$(document).ready(function() {
    $("form#formInput").submit(function(event) {
        event.preventDefault();
        const number = parseInt($("#userInput").val());
        const result = BeepBoop(number);
        $("#result").text(result.join(", "));
        $(".resultBox").show();
    })
});

var BeepBoop = (number) => {
    let resultArray = [];
    for (let i = 0; i <= number; i++) {
        const indexStr = i.toString();
        if (indexStr.includes(3)) {
            resultArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
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