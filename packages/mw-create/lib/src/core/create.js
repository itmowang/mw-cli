"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 读取vue模版
const vueCommand = require("./vueCreate");
const createCommand = () => __awaiter(void 0, void 0, void 0, function* () {
    const { blue, cyan, green, lightBlue, lightGreen, lightRed, } = require("kolorist");
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
    (() => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield prompts(questions);
        const { projectName, projectVersion, projectTemplate } = response;
        if (projectTemplate === "vue") {
            vueCommand(response);
        }
    }))();
});
module.exports = createCommand;
