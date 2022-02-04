const http = require("http");
const fs = require("fs");
// insatlled package
const requests = require("requests");

const homeFile = fs.readFileSync("./home.html", "utf-8");

const replaceVal = (tempval, orgval)=>{
    let temperature = tempval.replace("{%tempval%}", orgval.main.temp-273.15);
    temperature = temperature.replace("{%tempmin%}", orgval.main.temp_min-273.15);
    temperature = temperature.replace("{%tempmax%}", orgval.main.temp_max-273.15);
    temperature = temperature.replace("{%location%}", orgval.name);
    temperature = temperature.replace("{%country%}", orgval.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgval.weather[0].main);
    // console.log(temperature);
    return temperature;
}

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    // requests module code
    requests("http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=89a6368d58e9d2748b7d3ece1fa51c58")
      .on("data",(chunk) => {
        const objData = JSON.parse(chunk)
        const arrData = [objData];
        // kelvin to degree formula
        // degree = kelvin - 273.15
        // console.log(arrData[0].main.temp - 273.15);
        const realTimeData = arrData.map((val)=>replaceVal(homeFile, val)).join("")
        res.write(realTimeData);
        // console.log(realTimeData); 
      })
      .on("end",(err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
      });
  }
});

server.listen("1234", "127.0.0.1");



