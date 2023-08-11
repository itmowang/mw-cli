// 读取vue模版
const vueCommand = require("./vueCreate");

const createCommand = async () => {
  const {
    blue,
    cyan,
    green,
    lightBlue,
    lightGreen,
    lightRed,
  } = require("kolorist");

  const prompts = require("prompts");

  const questions = [
    {
      type: "text",
      name: "projectName",
      message: "请输入你需要创建的项目名称",
    },
    {
      type: "text",
      name: "projectVersion",
      message: "请输入你需要创建的项目版本号",
    },
    {
      type: "select",
      name: "projectTemplate",
      message: "请选择你需要创建的项目模板",
      choices: [
        {
          title: "Vue",
          value: "vue",
          description: blue("vue类型的一些项目模版"),
        },
        {
          title: "React",
          value: "react",
          description: blue("react类型的一些项目模版"),
        },
        {
          title: "Node",
          value: "node",
          description: blue("node类型的一些项目模,例如配置好mysql或者orm框架"),
        },
      ],
    },
  ];

  (async () => {
    const response = await prompts(questions);
    const { projectName, projectVersion, projectTemplate } = response;
    if (projectTemplate === "vue") {
      vueCommand(response);
    }

  })();
};

module.exports = createCommand;
