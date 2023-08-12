// 复制template目录到lib目录
const copydir = require("copy-dir");

// 如果没有lib目录先创建
const fs = require("fs");
if (!fs.existsSync("./lib")) {
    fs.mkdirSync("./lib");
}

copydir.sync(`./template`, `./lib/template`, {
    utimes: true,  // keep add time and modify time
    mode: true,    // keep file mode
    cover: true    // cover file when exists, default is true
});
