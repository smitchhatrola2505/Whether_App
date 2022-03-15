// -- Start Node js --
const fs = require("fs");
const request = require("requests");
const http = require("http");
const port = process.env.PORT || 8000;

const homeFile = fs.readFileSync("home.html", "utf-8");
const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%city%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
    return temperature;
};
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        request("https://api.openweathermap.org/data/2.5/weather?q=Surat&appid=4d6c73ba17c462d2d2cc46fe57817ba6")
            .on("data", (chunk) => {
                const obj = JSON.parse(chunk);
                const arr = [obj];
                const realTimeData = arr.map((val) => replaceVal(homeFile, val)).join("");
                res.write(realTimeData);
                // console.log(realTimeData);
            })
            .on("end", (err) => {
                if (err) return console.log("connection closed due to errors", err);
                res.end();
            });
    }
});

server.listen(port, () => {
    console.log(`starts  ${port}`);
});