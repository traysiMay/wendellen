const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const photoDir = path.join(__dirname, "public/photos/full");
const smDir = path.join(__dirname, "public/photos/sm");

fs.readdir(photoDir, function(err, files) {
  const photoFiles = [];
  files.forEach(f => {
    photoFiles.push(f);
    sharp(`${photoDir}/${f}`)
      .resize(2000)
      .toFile(`${smDir}/${f}`, (err, info) => {
        console.log(err, info);
      });
  });
  photoFiles.sort(function(a, b) {
    return a.split("_")[0] - b.split("_")[0];
  });
  fs.writeFileSync("src/files.json", JSON.stringify(photoFiles));
});
