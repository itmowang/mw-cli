/**
 * 下载文件
 * @param {string} url 下载地址
 * @param {string} filename 文件名
 * @param {string} dest 存放路径
 * @param {Function} callback 回调函数
 */

const gitRepo = require("download-git-repo");

function downloadFile(
  url: string,
  filename: string,
  dest: string,
  callback: Function
) {
  gitRepo(url, `${dest}/${filename}`, { clone: true }, (err: any) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
}

module.exports = downloadFile;