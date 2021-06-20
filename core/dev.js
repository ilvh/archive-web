const fs = require("fs");
const pngToJpeg = require("png-to-jpeg");
function recur(dir) {
  let dirList = fs.readdirSync(dir);
  dirList.map(name => {
    if (/\.png$/.exec(name)) {
      convertImage(`${dir}/${name}`);
    } else if (fs.lstatSync(`${dir}/${name}`).isDirectory()) {
      recur(`${dir}/${name}`);
    }
  });
}

function convertImage(imgPath) {
  let buffer = fs.readFileSync(imgPath);
  pngToJpeg({ quality: 100 })(buffer).then(output =>
    fs.writeFileSync(imgPath.replace(".png", ".jpeg"), output)
  );
}

recur("./savvyuni/static/");
