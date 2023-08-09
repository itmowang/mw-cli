# Monorepo 项目模板

## 使用
```bash
# 安装依赖
pnpm install

# 启动项目
pnpm run start
```

## 项目整合功能
- [x] typescript
- [ ] eslint
- [ ] prettier
- [ ] commitlint
- [ ] husky
- [ ] lint-staged
- [x] pnpm
- [x] monorepo
- [ ] tailwindcss

## 项目结构
```
monorepo-template
├─ package.json
├─ packages
│  ├─ app1
│  │  └─ package.json
│  ├─ app2
│  │  └─ package.json
│  └─ app3
│     └─ package.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ README.md
└─ tsconfig.json

```