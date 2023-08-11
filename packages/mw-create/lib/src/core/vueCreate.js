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
const prompts = require("prompts");
const config = require("../config/repo.config");
// 读取vue模版
const vueCreate = (create) => __awaiter(void 0, void 0, void 0, function* () {
    const { blue, cyan, green, lightBlue, lightGreen, lightRed, } = require("kolorist");
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
    (() => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield prompts(questions);
        const { vueTemplate } = response;
        // 下载一号模版
        if (vueTemplate == "1") {
            const downloadFile = require("../util/download");
            downloadFile(config, create.projectName, process.cwd(), (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    // 下载成功后就退出进程
                    process.exit();
                }
            });
        }
        // ...
    }))();
});
module.exports = vueCreate;
