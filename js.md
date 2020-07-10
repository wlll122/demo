# js

## 对象

### 判断对象是否存在:key in object

### 删除:del  obj.key

### 深浅克隆

- 深克隆是重新开辟堆
- 浅克隆是盖面栈中的名字

### 函数

- 创建方式

	- fn(x){}
	- var fn1 = function(){}
	- var fn2 = new function()

- 参数

	- 形参个数可以不等于实参个数
	- 参数集合:arguments

- 传入参数与默认参数合并

	- object.assign{默认参数,传入参数}

- 立即执行函数

	- (function fn(){})();

### 闭包

- 函数内部访问函数外部的量

### 对象的数据属性

- configurable

	- 设定属性是否可更改及配置

- enumerable

	- 是否可枚举

- writable

	- 是否可写入

- value

	- 属性的值

### 访问器属性

- configurable

	- 同上

- enumerable

	- 同上

- get

	- 读取属性值

- set

	- 设定属性值

## 原型

### 创建函数添加的protottype属性值

- 指向函数对象的原型

### 原型的方法及实例共享

### 实例无此属性会向上寻找

### 获取原型对象

- object.getPrototypeof(Object.prototype)

### 构造函数

- 独有方法卸载实例内
- 共享方法写在构造函数的原型上面
- 使用字面量改变原型上的属性就会致使其失效

## 继承

### call

- 调用一个方法,使用另一个对象执行

	- fun(thisobj,arg1,arg2)

### apply

- 与上面相同,第二参数为数组
- es6扩展

	- 剩余展开符( ... )

		- ...args代表出去对应形成形参之外的参数和

### bind

- 使用另一个对象替代当前对象的值,拥有莫格函数

	- var bound = func.bind(this.obj,args)

### 柯里化

### 继承

- 构造函数继承父类实例的方法及原型方法

### 组合继承

### 对象继承

### 寄生组合继承

## canvas

### 填写html元素

### 获取canvers元素

### 获取画笔工具

### 方法

- 起点:move,to
- 终点:.line to
- .stroke(线描边)
- 重新绘图:beginPath

## flex

### 重点

- width:calc

	- 可以实现响应式布局

- 主轴排列方式

	- justify-content

		- space-between
		- flex-start
		- flex-end
		- center

- 交叉轴排列方式

	- algin-items

		- center
		- flex-end
		- flex-start

- 换行控制

	- flex-werp

- 其他复合属性
- 主轴排列方式

	- flex-direction

		- row
		- row-revers
		- column

## 正则

## 插件

## ajax

### 通讯方式

- new ajax实例
- 判定是否连接成功
- 设置参数

### localstroage

- 本地浏览器存储

	- setItem
	- getItem

### history

- history.go(某一页)
- history(0)刷新页面
- hiatory

	- 刷新页面

## 数组字符串方法

### 字符串

- 截取

	- substring

		- a1,a2,    [起始位置,结束位置)

	- slice

		- a1,a2,    [起始位置,结束位置),支持附属,从后面截取

	- substr

		- a1,截取位置,a2截取长度

- 获取位置

	- indexof
	- lastindexof

		- 判定有无此值,无返回-1
		- es6新增

			- includes,判断有无

- 变换大小写

	- toupercase
	- tolowercase

- split(连接符)

	- 字符串转数组

- 字符串的扩展

	- 字符串对象.math(正则表达式)

		- 包含正则内容返回数组

	- 字符串对象.serach(正则表达式)

		- 查找字符串第一次出现的位置

### 数组

- 删除

	- 返回删除项

		- pop

			- 删除最后一个

		- shift

			- 删除第一个

- 新增

	- 返回新长度

		- push

			- 后面添加一项新值

		- unshift

			- 前面添加新值

- 连接字符串

	- join(连接符号)

		- 转换为字符串

- 连接多个数组

	- concat

- indexof

	- lastinsexof

		- 与字符串相同

- slice

	- 与字符串相同

- splice

	- 删除
	- 替换
	- 添加
	- 参数一:开始位置
	- 参数二:删除的个数
	- 参数3,......参数n(要添加的元素)
	- 删除自身(开始位置,1)

- for Earch循环

	- item(数组内容)
	- index(索引值)
	- arry(数组本身)
	- 参数从前往后

- map方法
- 去重

	- 利用jsonkey值无重复

		- var arr=[2,3,2,2,2,4,5],
		-         json={},
		-         arr2=[];
		-           arr.forEach(function(item,i){
		-             if(!json[item]){
		-               json[item]=222;
		-             }
		-           });
		-           for(var name in json){
		-             arr2.push(Number(name));//类型发生变化了
		-           }

