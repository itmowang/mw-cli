"use strict";
/**
 * 下载文件
 * @param {string} url 下载地址
 * @param {string} filename 文件名
 * @param {string} dest 存放路径
 * @param {Function} callback 回调函数
 */
const gitRepo = require("download-git-repo");
const { blue, lightRed, lightGreen } = require("kolorist");
function downloadFile(url, filename, dest, callback) {
    const ora = require("ora");
    const spinner = ora(blue("下载模版中..."));
    spinner.start();
    gitRepo(url, `${dest}/${filename}`, { clone: false }, (err) => {
        if (err) {
            spinner.fail(lightRed(`项目模版创建失败,${err}`));
            callback(err);
        }
        else {
            spinner.succeed(lightGreen("项目模版创建成功"));
            callback(null);
        }
    });
}
module.exports = downloadFile;
