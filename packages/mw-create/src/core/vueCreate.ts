const prompts = require("prompts");
const config = require("../config/repo.config.ts");

interface Create {
    projectName: string; // 项目名称
    projectVersion: string; // 项目版本号
    projectTemplate: string; // 项目模版
}

// 读取vue模版
const vueCreate = async (create:Create) => {
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
          title: "vue3 + ts + vite",
          value: "1",
          description: green("vue3 + ts + vite 项目模版"),
        },
      ],
    },
  ];

  (async () => {
    const response = await prompts(questions);
    const { vueTemplate } = response;
    // 下载一号模版
    if (vueTemplate == "1") {
      const downloadFile = require("../util/download.ts");
      downloadFile(config, create.projectName , process.cwd(), (err: any) => {
        if (err) {
          console.log(err);
        } else {
          // 下载成功后就退出进程
          process.exit();
        }
      });
    }
    // ...

  })();
};

module.exports = vueCreate;
