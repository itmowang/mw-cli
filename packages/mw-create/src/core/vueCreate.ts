const prompts = require("prompts");
const config = require("../config/repo.config");

interface Create {
  projectName: string; // 项目名称
  projectVersion: string; // 项目版本号
  projectTemplate: string; // 项目模版
}

// 读取vue模版
const vueCreate = async (create: Create) => {
  const {
    blue,
    cyan,
    green,
    lightBlue,
    lightGreen,
    lightRed,
  } = require("kolorist");

  const questions = [
    {
      type: "select",
      name: "vueTemplate",
      message: "请选择你需要创建的项目模板",
      choices: [
        {
          title: "template-vue3-ts-vite",
          value: "template-vue3-ts-vite",
          description: green("vue3 + ts + vite 项目模版"),
        },
      ],
    },
  ];

  (async () => {
    const response = await prompts(questions);
    const { vueTemplate } = response;
    // 下载一号模版
      // 走copy-dir 不走github了 没意义 
      const copydir = require("copy-dir");
      // 进度
      const ora = require("ora");
      const spinner = ora(blue("下载模版中..."));
      copydir.sync(`${config}/${vueTemplate}`, `./${create.projectName}`, {
        utimes: true,  // keep add time and modify time
        mode: true,    // keep file mode
        cover: true,    // cover file when exists, default is true
        filter: function (stat: string, filepath: any, filename: string) {
          return true;  // remind to return a true value when file check passed.
        }
      }, function (err: Error) {
        if (err) throw err;
        spinner.fail(lightRed(`项目模版创建失败`));
      });

      spinner.succeed(lightGreen("项目模版创建成功"));

  })();
};

module.exports = vueCreate;
