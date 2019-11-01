$(document).ready(function() {
    $("form#formInput").submit(function(event) {
        event.preventDefault();
        const number = parseInt($("#userInput").val());
        const result = BeepBoop(number);
        $("#result").text(result);
        $(".resultBox").show();
    })
});

var BeepBoop = (number) => {
    let resultArray = [];
    for (let i = 0; i <= number; i++) {
        resultArray.push(i);
    }
    return resultArray;
}