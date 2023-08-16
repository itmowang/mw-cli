#!/usr/bin/env node
"use strict";
// 引用cross-spawn
const spawn = require("cross-spawn");
// 调用pkgjson
const pkg = require("../package.json");
// 引用commander
const program = require("commander");
// 引用创建项目逻辑
const createProject = require("../src/core/create");
//版本号 -v --version 选项
program.version(pkg.version, '-v,--version');
// 创建项目
program.command("create <projectName>").description("创建项目").action((projectName) => {
    createProject(projectName);
});
program.parse(process.argv);
