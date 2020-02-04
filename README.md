# vue52yy_service
vue52yy 项目的服务端（node.js Express 框架构建）

## 前端项目

[点此跳转](https://github.com/AmbroseCdMeng/vue52yy)

## 后台项目

> 后端项目使用 nodejs + mongodb 构建

### 数据库 MongoDB

> NoSQL 泛指非关系型数据库，常见 NoSQL 数据库有 4 种：键值存储数据库、列存储数据库、文档型数据库、图形数据库。

> Mongodb 是文档型数据库的代表。

#### SQL 数据库与 NoSQL 数据库
- NoSQL 不擅长复杂查询。因为 NoSQL 数据库没有执行复杂查询的标准接口
- NoSQL 数据库可以更好的存储分层次的数据。因为它是以键值对的形式存储数据，类似于 JSON 数据。NoSQL 数据库更适用于大数据。
- NoSQL 对事务的处理能力有限。SQL 数据库非常适合，因为它更加稳定并且可以保证数据的原子性和一致性。
- NoSQL 对部署大型大数据扩展能力有限
- NoSQL 数据库遵循的 CAP（一致性、可用性和分区容忍性）；SQL 数据库遵循 ACID（原子性、一致性、隔离性和持久性）

#### MongoDB 的优点
- 速度快。其使用大量内存和系统资源作为优化。
- 扩展性好。可以水平扩展。
- 易管理。可以自动分片。对于开发者而言，隐去了对大量数据的存储问题，不需要使用者手动操作。
- 动态结构。可以灵活修改数据结构，而不需要修改已有数据。
- 支持基本查询和动态查询。
- 支持完全索引，包含内部对象。
- 支持复制和故障恢复。
- 使用高效二进制存储，包含大型对象。
- 文件存储格式为 BSON（JSON 格式的扩展）。

#### MongoDB 安装与启动
- 安装 MongoDB
- 初始化数据库文件，启动数据库
    - 进入 MongoDB 安装目录，使用命令 mongod.exe --dbpath D:\MongoDB\vue52yy 命令创建数据库文件

### Node.js

> Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境，用于方便的搭建响应速度快、易于扩展的网络应用。

#### Node.js 的优点
- 采用时间驱动、异步编程，为网络服务设计。
- Node.js 的非阻塞模式 I/O 处理给 Node.js 带来在相对低系统资源好用下的高性能与出众
的负载能力，非常适合用于依赖其他 I/O 资源的中间层服务。
- Node.js 轻量高效，可以认为是数据密集型分布式部署环境下的实时应用系统的完美解决方案。

#### Node.js 的缺点
- 可靠性低。
- 单进程，单线程，只支持单核 CPU，不能充分的利用多核 CPU 服务器。一旦该线程崩溃， 那么整个 web 都会崩溃。

### Express 框架

> Express 是基于 Node.js 平台的 web 应用开发框架。

Express 框架的核心特性如下：
- 可以设置中间件来响应 Http 请求；
- 定义了路由表用于执行不同的 Http 请求动作；
- 可以通过向模板传递参数来动态渲染 HTML 页面；

#### Express 安装（不推荐）
- npm i -S express

#### Express 应用生成器安装（推荐）
- npm i -g express-generator

***

## Express 服务端构建

### 新建 Express 工程
- 安装 Express 应用生成器
    - npm i -g express-generator
- 创建 Express 项目
    - express vue52yy_service
- 安装相关包
    - cd vue52yy_service && npm i
- 以调试模式启动应用
    - set DEBUG = vue52yy_service & npm start
- 访问 Express 框架测试页面
    - http://localhost:3000/
    
### Express 工程连接 MongoDB 数据库

- 安装 mongodb 中间件
    - npm i -S mongoose
- 新建测试路由
    - http://localhost:3000/mongoose_test
    
### Supervisor 实时监控代码修改

- 安装 Supervisor 插件
    - npm i -g supervisor
- 启动 Supervisor 插件
    - supervisor bin/www

### 数据集
这里先将连接数据库的代码提取到 common/db.js 公共文件中。

新建 model 目录， 创建 user.js 作为数据集合，包含基本属性及常用静态方法。
    
### 二级路由 users.js

- 访问 http://localhost:3000/ 时将导航到 index.js 路由文件
- 访问 http://localhost:3000/users 时将导航到 users.js 路由文件

users.js 路由文件中新增路由。