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
const vueCreate = (create) => __awaiter(void 0, void 0, void 0, function* () {
    const prompts = require("prompts");
    const config = require("../config/repo.config");
    const { blue, cyan, green, lightBlue, lightGreen, lightRed, } = require("kolorist");
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
                {
                    title: "template-vue3-webpack-ts",
                    value: "template-vue3-webpack-ts",
                    description: green("vue3 + ts + webpack 项目模版"),
                },
                {
                    title: "multi-application-template",
                    value: "multi-application-template",
                    description: green("vue3 + ts + vite 多应用模板"),
                },
            ],
        },
    ];
    (() => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield prompts(questions);
        const { vueTemplate } = response;
        // 复制template目录下载到本地
        const copydir = require("copy-dir");
        const ora = require("ora");
        const spinner = ora(blue("下载模版中..."));
        copydir.sync(`${config}/${vueTemplate}`, `./${create.projectName}`, {
            utimes: true,
            mode: true,
            cover: true,
            filter: function (stat, filepath, filename) {
                return true; // remind to return a true value when file check passed.
            },
        }, function (err) {
            if (err)
                throw err;
            spinner.fail(lightRed(`项目模版创建失败`));
        });
        spinner.succeed(lightGreen("项目模版创建成功"));
    }))();
});
module.exports = vueCreate;
