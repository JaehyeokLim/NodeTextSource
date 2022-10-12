const fs = require("fs");

const d = fs.readFileSync("./jsontest.json", { encoding: "utf-8" });
console.log("d : " + d);
console.log("typeof d : " + typeof d);
console.log("d[0] : " + d[0]);
let Jd = JSON.parse(d);
console.log("Jd : " + Jd);
console.log("Jd[0] : " + Jd[0]);
console.log("typeof Jd : " + typeof Jd);

const data = fs.readFileSync("./vocab.json", { encoding: "utf-8" });
let Jdata = JSON.parse(data);
console.dir(Jdata);
console.dir(Jdata[0]);
console.log(Jdata[1]);
console.log("typeof Jdata : " + typeof Jdata);

const ob = {
  name: "Jeon",
  age: 50,
  description: "I am studying.",
};
fs.writeFileSync("./test.json", JSON.stringify(ob, null, 2));
