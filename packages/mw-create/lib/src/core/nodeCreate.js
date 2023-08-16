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
const nodeCreate = (create) => __awaiter(void 0, void 0, void 0, function* () {
    const prompts = require("prompts");
    const config = require("../config/repo.config");
    const { blue, cyan, green, lightBlue, lightGreen, lightRed, } = require("kolorist");
    const questions = [
        {
            type: "select",
            name: "nodeTemplate",
            message: "请选择你需要创建的项目模板",
            choices: [
                {
                    title: "template-lib-ts",
                    value: "template-lib-ts",
                    description: green("node工具库 and 脚手架项目模版 (主打快速创建"),
                },
            ],
        },
    ];
    (() => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield prompts(questions);
        const { nodeTemplate } = response;
        // 走copy-dir 不走github了 没意义 
        const copydir = require("copy-dir");
        // 进度
        const ora = require("ora");
        const spinner = ora(blue("下载模版中..."));
        copydir.sync(`${config}/${nodeTemplate}`, `./${create.projectName}`, {
            utimes: true,
            mode: true,
            cover: true,
            filter: function (stat, filepath, filename) {
                return true; // remind to return a true value when file check passed.
            }
        }, function (err) {
            if (err)
                throw err;
            spinner.fail(lightRed(`项目模版创建失败`));
        });
        spinner.succeed(lightGreen("项目模版创建成功"));
    }))();
});
module.exports = nodeCreate;
