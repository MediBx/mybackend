var express = require('express');
var app = express();
let myAnother = require('./another')

//-------- send string --------
app.get('/hello/:howMany', function (req, res) {

    console.log(req.params.howMany);
    let myObj = {};
    let a = 8;
    let m = myAnother.add(9, 10);
    console.log(m);
    myObj["fname"] = "john";
    myObj["lname"] = "doe";
    let x1 = myObj["fname"].length;
    let x2 = myObj["lname"].length;
    let x3 = 3;
    if (!isNaN(req.params.howMany)) {
        console.log("just for the debugger");
        x3 = parseInt(req.params.howMany);
    }
    let y = x1 + x2 + x3;
    myObj["calculatedHowMany"] = y;
    res.send('Have a great day! the calculated value is ' + myObj["calculatedHowMany"]);
});

//-------- send html as string --------
app.get('/hello1', (req, res) => {
    res.send('<html><head><title>Shalom</title><head>' +
        '<body><h1>Hello World</h1></body></html>');
});

app.post('/hello1', (req, res) => {
    res.send('<html><head><title>Shalom</title><head>' +
        '<body><h1>Hello World</h1></body></html>');
});

app.patch('/hello1', (req, res) => {
    res.send('<html><head><title>Shalom</title><head>' +
        '<body><h1>Hello World</h1></body></html>');
});

//-------- send html as file using express --------
var path = require('path');
app.get('/hello2', function (req, res) {
    res.sendFile(path.join(__dirname, './html_files/hello.html'));
    // We shouldn't use this for pdf files,
    //  or any other files that we actually wish to send as a "download"
    // res.sendFile(path.join(__dirname,'./hello.pdf'));
});


//setting manually the 'Content-type' header 
app.get('/hello3', function (req, res) {
    //setting manually the 'Content-type' header using Express method
    res.type('json');
    res.send({ name: "John Doe", email: "j@gmail.com" });
});


//letting Express set the 'Content-type' header 
app.get('/hello4', function (req, res) {
    var myJson = {};
    myJson.name = "John Doe";
    myJson.carDetails = {
        make: "Toyota", model: "Camry", buildYear: "2021"
    };
    myJson.email = "j@gmail.com";
    //letting Express set the 'Content-type' header 
    res.json(myJson);
});


//JSON from a content of a file
//-------- send json from a content of file using express --------
var path = require('path');
app.get('/hello5', function (req, res) {
    res.sendFile(path.join(__dirname, './users.json'));
    // Note: we don't need to even set the 'Content-Type' header to
    // 'application/json; charset=UTF-8'
    // Express does that automatically for us,
    // it actually does that by itself as long as we name the file with
    // .json extension
    // (so make sure not to name it as .txt or anything else)
});


app.post('/hello', function (req, res) {

});



app.post('/welcome', (req, res) => {
    let obj = { fname: "john", lname: "doe" }
    res.json(obj)
})

app.get('/goodevening', (req, res) => {
    let obj = { howMany: 70, city: "Tiberias" }
    res.json(obj)
})



app.use(express.static('public'));
//=========================
const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`My app is listening on port ${port}!`);
});