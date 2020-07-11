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

### 请求方式

- GET/参数在url框不安全
- POST
- 设置请求头参数

### JQuary-ajax

- $.axjx()

### 声明实例

- 监听过程,判定是否成功

	- 设定返回函数

		- open

			- send

### 跨域

- jsonp方法(利用src的属性)

	- 原生写法:使用src
	- JQ:设置请求方式为jsonp

- cors方法解决

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

## websocket

### 实例对象

### readystat

- 判定连接状态

	- connecting(连接中)0
	- open(连接成功)1
	- closing(正在关闭)2
	- closed(已关闭)3

### 回调

- onopen(成功回调)
- onclose(关闭后回调)
- onerror(错误后回调)

### 发送消息

- sendmsge

## BOM

### offset

### 子主题 2

### 子主题 3

### 子主题 4

### 事件对象(桌面事件)

- 鼠标在当前元素的位置

	- e.clientX,clientY
	- PageX,pageY

### 对象

- e.target(具体触发事件元素)
- 绑定事件元素

### offset获取实际的宽高

- style获取的只能是行内的样式

### 阻止浏览器默认事件

- e.preventDefault

### 阻止事件的冒泡

子元素事件内添加:
e.stopPropagation();

### 缓动动画

步骤:
target - start

封装步骤:1.清除前一个定时器
2.设定步长
3,改变位置
4.关闭定时器

### 事件委托

element.addeventlistener('click',function(){
event.target.style.(事件)});

将事件委托在父元素上,提升性能

## DOM

### 事件

1.获取事件源
2.绑定事件
3.事件处理程序

### 绑定事件

1.标签名
2.类名
进行绑定

### 特殊dom对象

- body:document.body
- html:document.documnetElentment

### 样式操作

- element.style.(样式名)

### onload事件

- window.onload

### 元素关系操作

- 父元素:parentNode
- 子元素

	- element.firstElementChild

### 插入元素

父元素节点.appenchuild(新的子元素节点
)

### 删除节点

父元素.removeChild(子节点)
复制节点:clone

### 属性操作

setAttribute("属性名","属性值"),设定属性
get 获取属性值
remove 删除属性

### 元素内容操作

box.innterText();设定文本值
box.innerHtml();设定html对象

### 循环绑定事件注意事项

在循环绑定事件时i 要慎用,先获取i值
  // 解决方式:  lis[i].index = i;
或直接let声明

## H5

### 事件监听器

- addeventlistener

## CSS3新增

### 矢量字体

### 文本阴影

text-shadow: 参数1(水平偏移),参数2(垂直偏移)参数三(模糊半径)参数四(颜色)

### 盒子阴影

box-shadow: h-shadow(x) v-shadow(y)
 blur(模糊半径) spread(扩展范围) 
color(颜色)

### c3盒子模型

box-sizeing:border-box,
width即为盒子的实际宽度,border等不改变其宽度

### 过渡

- transition
- transform

  scale(x,y):垂直或水平缩放
  translate(x,y),改变水平或垂直位置
  rotate(deg);旋转元素
  倾斜:skew

## 轮播图

### 无缝轮播原理

在最后一张添加第一张图片,当滑到了最后一张再让其跳转到第二张

### 程序例子

function move(){  if(count==list.children.length-1){  count=0;  list.style.left=0;  }  count++;  //list.style.left=-w*count+"px";  slowlyMove(list,-w*count);  // 0 1 2 3 4  currentDots(count%4)   }   //自动lunbo  function autoplay(){  autoplay.timer=setInterval(function(){  move();  //console.log(1)  },2000)  }   autoplay();  //鼠标放上去停止轮播  banner.onmouseenter=function(){  clearInterval(autoplay.timer);  }  //鼠标离开开启轮播  banner.onmouseleave=function(){  autoplay();  }   //点击右侧按钮  arrowR.onclick=function(){  move();  }   //点击左侧按钮  arrowL.onclick=function(){  if(count===0){  count=list.children.length-1;  list.style.left=-count*w+"px";  }  count--;  slowlyMove(list,-w*count);  // 0 1 2 3 4  currentDots(count%4)  }   //点击下面小按纽轮播  for(var i=0;i<olis.length;i++){  olis[i].index=i;  olis[i].onclick=function(){  var i=this.index;  slowlyMove(list,-w*i);  currentDots(i);  count=i;  }  }   //封装简单缓动动画  function slowlyMove(ele,target){  if(ele.offsetLeft===target){  return  }   if(ele.timer){  clearInterval(ele.timer);  }   ele.timer=setInterval(function(){  //当前的位置  var start=ele.offsetLeft;  //步长  var step=(target-start)/10;  step=step>0?Math.ceil(step):Math.floor(step)  // if(Math.abs(step)<1){ //(-1,1)   // }    list.style.left=start+step+"px";   if(start+step===target){  clearInterval(ele.timer);  ele.timer=null;  }    },1000/60)   }  //排他思想，  function currentDots(i){  document.querySelector('.dots .current').classList.remove('current');  dots.children[i].classList.add('current');  }

