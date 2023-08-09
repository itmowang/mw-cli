#!/usr/bin/env node

// 调用pkgjson
const pkg = require("../package.json")

// 引用commander
const program = require("commander")

//版本号 -v --version 选项
program.version(pkg.version ,'-v,--version')

program.parse(process.argv)

