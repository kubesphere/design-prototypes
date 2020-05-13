const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

const dataFile = path.resolve(__dirname, "data.js");
const source = path.resolve(__dirname, "index.ejs");
const target = path.resolve(__dirname, "index.html");

compile(source);

function compile() {
  const data = eval(fs.readFileSync(dataFile, "utf8"));
  const template = fs.readFileSync(source, "utf8");
  const html = ejs.render(template, { data: data });
  fs.writeFileSync(target, html);
  console.log(new Date().toLocaleTimeString(), ": html generated.");
}
