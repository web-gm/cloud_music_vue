
## 使用less

优点：基本用法简单，使用方便
``` css

.parent{
    width: 100px;
    height: 100px;
}
.parent .children{
    width: 50px;
    height: 50px;
}
.parent .children:hover{
    width: 80px;
    height: 80px;
}
```

``` less
// https://less.bootcss.com/
.parent{
    width: 100px;
    height: 100px;
    .children{
        width: 50px;
        height: 50px;
        &:hover{
            width: 80px;
            height: 80px;
        }
    }
}
```

## http请求

目前：将所有的接口请求地址+请求方法放入一个js文件中,相当于在页面中引用变量进行请求
```js
// requestMap.js
// 文件有1500行，不方便查找
const phpApi = '/wag/index.php';
const phpUploadApi = '/api/v1/wag/index.php';
// 加密
const encryption = {
    // 拿到公钥
    getPubPriKey: {
        url: "/login/getpublickey",
        method: "post"
    }
}

// 登录
const login = {
}
export {
    encryption,
    login,
};

// index.vue
import { ipSeg } from "@/services/requestMap.js";

const { url,method } = ipSeg.pkiDel;
this.$request(url,method,param)
```

建议: 将带有url和请求方法的函数放入一个js文件中，并按照模块进行划分
``` js
// encryption.js
import { post } from '@utils/http'

const getPubPriKey = params => {
  return post('/login/getpublickey', params)
}

export { getPubPriKey }

// login.js
import { get } from '@utils/http'

const codePictureId = params => {
  return get('/login/newpic', params)
}

export { codePictureId }

// index.vue

import {getPubPriKey} from 'encryption.js'

getPubPriKey(params)

```

## eslint 代码规范
项目中没有eslint
建议：多人合作开发，需保持代码格式统一，使用vue-cli默认的eslint配置即可；
    vscode可在根目录中创建.editorconfig，使用编辑器的格式化

## 路由动态引入

路由文件过大，且加载都是同步加载，会导致首页加载时间增大

建议：合理分割路由文件， 异步引入页面vue


## element按需加载 或者 全局引入部分组件

目前使用的是完整引入，会有一些不需要的资源进入打包

``` js
// 按需加载，优点：可降低首页加载时间； 缺点：每个页面都需要引入和注册、

// 全局引入部分组件， 与上面相反 

```

## es6 相关使用

### 箭头函数
``` js
// 不使用箭头函数
created () {
    const vm = this
    setTimeout(function () {
        console.log(vm)
    }, 1000)
}

// 使用箭头函数
created () {
    // 省略this重新声明，代码更简洁清晰
    setTimeout(() => {
        console.log(this)
    }, 1000)
}
```

### async函数， 异步请求的同步写法
``` js
// 普通的promise
methods: {
    getData(){
        getData1(url, params).then(res => {
            getData2(url, params).then(res => {
                // 复杂功能会陷入回调地狱, 而async就不会有这个问题
            })
        })
    }
}

// async 写法 
methods: {
    async getData(){
        let res = await getData1(url, params)
        let res1 = await getData2(url, res)
    }
}

```

### 解构赋值
``` js
// 常用的接口请求
async fuction getData(){
    let res = await getData1()
    if(res.code === 200){
        let data = res.data
    }
}

async fuction getData(){
    let {code, data} = await getData1()
    if(code === 200){
        console.log(data)
    }
}

```

### 实际代码改写
```js
getpki(){
    const self = this;
    const { url,method } = ipSeg.getpki;
    self.loading = true;
    // 获取标签数据
    this.$request(
        url,
        method
    ).then(function (data) {
        self.loading = false;
        if (data.ERRON == 0 && data.data) {
                self.textAreaOne = self.getHtml(data.data.primaryDefault);
                self.textAreaTwo = self.getHtml(data.data.secondaryDefault);
                self.textAreaThr = self.getHtml(data.data.secondaryEncryp);
            //  console.log('self.textAreaOne ',self.textAreaOne );
        } else if(data.ERRMSG){
            self.$message.error(data.ERRMSG);
        } else {
            self.$message.error({
                message: "请求异常,请稍后再试",
                offset: 100,
            });
        }
    }).catch(function (error) {
        self.loading = false;
        // 请求接口出错提示
        self.$message.error(error.message);
    });
},

// 改写
async getpki(){
    this.loading = true
    // 获取标签数据
    let {
        ERRON, 
        data,
        ERRMSG="请求异常,请稍后再试"
    } = await this.$request(params)
    this.loading = false;
    if (ERRON === 0 && data) {
        let {primaryDefault,secondaryDefault,secondaryEncryp} = data
        this.textAreaOne = this.getHtml(primaryDefault);
        this.textAreaTwo = this.getHtml(secondaryDefault);
        this.textAreaThr = this.getHtml(secondaryEncryp);
    } else{
        this.$message.error(ERRMSG);
    }
    // 所有的catch错误都放在axios中进行统一处理
},
```