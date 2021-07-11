function f1() {
    let howMany = document.querySelector('#theInput').value;
    let myObj = {};
    myObj["fname"] = "john";
    myObj["lname"] = "doe";
    let x1 = myObj["fname"].length;
    let x2 = myObj["lname"].length;
    let x3 = 3;
    if (!isNaN(howMany)) {
        console.log("just for the debugger");
        x3 = parseInt(howMany);
    }
    let y = x1 + x2 + x3;
    myObj["calculatedHowMany"] = y;
    document.querySelector('#div1').innerHTML = y;
}