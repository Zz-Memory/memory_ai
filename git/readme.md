# git

- 开源的分布式版本控制工具
- 代码的安全 新版本 push
- 代码的协作、共享 pull
- github gitee 等仓库中（main）

## repo
- 仓库
- create a repo
## git 配置
    github、gitee 身份
- git config --global user.name "Zz-Memory"
- git config --global user.email "Zz-Memory@outlook.com"
- git init
- git add .
- git commit -m "备注"
- git branch -M main
- git remote add origin 远程仓库地址
- git push -u origin main 

### 查看工作区文件状态
git status
    - Changes not staged for commit 已修改但是尚未提交到暂存区的文件（之前提交过的文件）
    - Changes to be committed 已提交到暂存区的文件
    - Untracked files 尚未追踪的文件（新文件）
### 查看提交记录
git log --oneline

### 设置 Git 提交信息编码
git config --global i18n.commitencoding utf-8

### 设置 Git 日志显示编码
git config --global i18n.logoutputencoding utf-8

### 让终端正确显示 UTF-8 字符
git config --global core.quotepath false