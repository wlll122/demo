# AJAX

## 背景介绍

AJAX是 “Asynchronous JavaScript And XML”的缩写(即：异步的JavaScript和XML)，是一种实现**无页面刷新**获取服务器数据的**混合技术**。**它不是一种新的编程语言，而是一种用于创建更好更快以及交互性更强的Web应用程序的技术。**



### 1. xml 和 json

`XML` 是 "Extensible Markup Language" 的缩写（即：可拓展标记语言），是一种特征类似HTML，用来描述数据是什么，并承载数据的标记语言，中文的[维基百科](http://wanweibaike.com/wiki-XML)中有更完整的解释，我们只要知道它是一种用来承载数据的语言就足够了。

`JSON`仅仅是一种数据格式，在JSON发明之前，人们大量使用 `XML` 作为数据传输的载体，也正因如此，AJAX技术的最后一个字母为“X”。而如今情况则发生了些变化，`JSON` 这种类似于字符串对象的轻量级的数据格式越来越受到开发者青睐，几乎变成了AJAX技术的标准数据格式，因此网传AJAX技术如今应该换个名字，叫做 "AJAJ"。

### 2. 网络请求简介

最初互联网的建立是为了 "资源互换"，但是 "资源互换" 的主体都是计算机 。为了方便交流，我们通常将获取资源的一端称为**客户端**（主要的工具是浏览器），而将派发资源的一方称为**服务端**（又称为“服务器”）。

Ajax 出现之前，浏览器要从服务器请求资源，其交互模式为 “客户端发出请求 -> 服务端接收请求并返回相应HTML文档 -> 页面刷新，客户端加载新的HTML文档”。这种交互模式十分简洁明了，而且非常符合人的直觉，对于那时游走于互联网中的极客而言，也确实够用了。但是随着时代的进步，互联网渐渐不只是极客们的娱乐场，越来越多商业化网站的出现，使互联网不再局限于满足人们 “资源交换” 的需求，人们开始期待能够在互联网中获得更好的“**使用体验**”。

试想这样一种情景，当用户点击页面中的某个按钮向服务器发送请求时，页面本质上只是一些数据发生了变化，而此时服务器却要将重绘的整个页面再返回给浏览器加载，明明只是一些数据的变化却迫使服务器要返回整个HTML文档，这本身会给网络带宽带来不必要的开销。而且随着用户点击不断刷新页面的交互方式很难讨人喜欢。

在 2005 年，Google 通过其 Google Suggest 使 AJAX 变得流行起来。Google Suggest 使用 AJAX 创造出动态性极强的 web 界面：当我们在谷歌的搜索框输入关键字时，JavaScript 会把这些字符发送到服务器，然后服务器会返回一个搜索建议的列表，就像目前的百度：

![image.png](https://upload-images.jianshu.io/upload_images/6784887-902ab12b813a6175.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



AJAX 技术实现了在页面数据变动时，只向服务器请求新的数据，并且在阻止页面刷新的情况下，动态的替换页面中展示的数据。从此，开发者将在“数据”层面而不是“资源”层面以更高的自由度构建网站和Web应用。



### 3. 意义

提升用户体验

只从服务器获取需要的数据，节省带宽

提高开发能力，开拓设计范围



-----------------------------------



## AJAX 技术介绍

### 一、数据交互

与服务器数据交互的要点是: 

1. 从哪里获取数据

   我们通常使用**API**（Application Programming Interface）与各式各样的数据库交互，你可以想象一些数据是开放的并且在等待被使用，而我们获取这些数据的方式便是使用API。API通常的形式是一个URL，并提供指定的参数名和参数值用来定位所要获取的数据。

2. 操作数据的方式（获取/提交）



### 二、XMLHttpRequest

**`XMLHttpRequest`对象是AJAX技术的核心**，它是浏览器提供的一个API（而不是JavaScript原生的），用来顺畅地向服务器发送请求并解析服务器响应。

1. `XMLHttpRequest`只是一个JavaScript对象，确切的说，是一个**构造函数**。有属性，有方法，需要通过`new`关键字进行实例化；
2. `XMLHttpRequest`对象是不断被扩展的。随着XML对象被广泛的接收，W3C也开始着手制定相应的标准来规范其行为。目前，`XMLHttpRequest`有两个级别：1级提供了XML对象的实现细节，2级进一步发展了XML对象，额外添加了一些方法，属性和数据类型。但是，并不是所有浏览器都实现了XML对象2级的内容；



创建一个XML对象的实例：

```js
if (window.XMLHttpRequest) {
    // Mozilla, Safari, IE7+ ...
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    // IE 6 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```

该实例的属性，方法有：

+ 方法
  + `.open()`：准备启动一个AJAX请求；
  + `.setRequestHeader()`：设置请求头部信息；
  + `.send()`：发送AJAX请求；
  + `.getResponseHeader()`: 获得响应头部信息；
  + `.getAllResponseHeader()`：获得一个包含所有头部信息的长字符串；
  + `.abort()`：取消请求；

+ 属性
  + `.responseText`：包含响应主体返回文本；
  + `.responseXML`：如果响应的内容类型时`text/xml`或`application/xml`，该属性将保存包含着相应数据的XML DOM文档；
  + `.statusText`：HTTP状态的说明；
  + `.readyState`：表示“请求”/“响应”过程的当前活动阶段
  + `.status`：响应的HTTP状态如 200 表示成功，而 404 表示 "Not Found" 错误。当 `readyState` 小于 3 的时候读取这一属性会导致一个异常；



+ **浏览器还为该对象提供了一个`onreadystatechange`监听事件，每当XMLHttpRequest实例的`readyState`属性变化时，就会触发该事件的发生。**

+ **某些情况下，浏览器会将多个 XMLHttpRequest 请求的结果缓存在同一个URL。我们可以在每个URL的最后追加一个时间戳，这样可以确保URL的唯一性，从而避免获取的是浏览器缓存的结果**

#### AJAX请求

与服务器交互需要注意的点

- 向哪里发出请求？  --即相应API地址 URL；

+ 获取数据还是提交数据？  --表现为请求方式的不同：`GET` 或 `POST`；
+ 以何种方式等待响应？  --有“**同步**”和“**异步**”两种选择；（网络传输是一个过程，请求和响应不是同时发生的。）**同步被淘汰了~~**

而XMLHttpRequest实例的`.open()`方法的作用就是用来回答以上三个问题。`.open()`方法接收三个参数：**请求方式**，**请求URL地址**和**是否为异步请求的布尔值**。

下面是一个`.open()`方法调用的例子：

```js
// 该段代码会启动一个针对“example.php”的GET同步请求。
xhr.open("GET/POST", "example.php", true)
```



##### 请求方式

+ `GET`

  GET请求用于**获取数据**，有时候我们需要获取的数据需要通过“查询参数”进行定位，在这种情况下，我们会将查询参数追加到URL的末尾，令服务器解析。

  查询参数是指一个由`?`号起始，由`&`符号分割的包含相应**键值对**的字符串。用来告知浏览器所要查询的特定资源。

  ```js
  const query = "example.php?name=tom&age=24" // "?name=tom&age=24"即是一个查询参数
  ```

+ `POST`

  POST请求主要用于**向服务器发送应该被保存的数据**，因此POST请求天然比GET请求多需要一份**需要被保存的数据**。那么这些数据应该放在何处呢？毕竟`.open()`方法接收的三个参数都不是需要传的参数

  这里就需要用到`.send()`方法，需要发送的数据会作为`.send()`方法的参数最终被发往服务器，该数据可以是任意大小，任意类型。注意`.send()`方法的参数一般不可为空，也就是说，对于不需要发送任何数据的GET请求，也需要在调用`.send()`方法时，向其传入`null`值。

  

##### 设置请求头

每个HTTP请求和响应都会带有相应的头部信息，包含一些与数据，收发者网络环境与状态等相关信息。XMLHttpRequest对象提供的`.setRequestHeader()`方法为开发者提供了一个操作这两种头部信息的方法，并允许开发者自定义请求头的头部信息。

默认情况下，当发送AJAX请求时，会附带以下头部信息：

- `Accept`：浏览器能够处理的内容类型；
- `Accept-Charset`: 浏览器能够显示的字符集；
- `Accept-Encoding`：浏览器能够处理的压缩编码；
- `Accept-Language`：浏览器当前设置的语言；
- `Connection`：浏览器与服务器之间连接的类型；
- `Cookie`：当前页面设置的任何Cookie；
- `Host`：发出请求的页面所在的域；
- `Referer`：发出请求的页面URI；
- `User-Agent`：浏览器的用户代理字符串；
- `content-type`：  数据发送出去后，需要接收的服务端解析成功，一般服务端会根据content-type字段来获取参数是怎么编码的，然后对应去解码，一般认为`content-type`有以下四种类型：
  - `text/plain`	ajax请求的默认值
  - `application/json`   目前支持率比较高的编码方式
  - `application/x-www-form-urlencoded`   form表单数据的提交编码设置
  - `multipart/form-data`   二进制文件的编码方式 ( 常用来提交图片或者文件等 )



**注意：设置请求头需要在open方法之后，在send方法之前**



-----------------------------------

发送GET请求

```js
// 发送AJAX请求！
var xhr = new XMLHttpRequest()
xhr.open("GET", "example.php", true)
xhr.send(null);
```

换个POST请求试试看：

```js
// 发送AJAX请求！
var xhr = new XMLHttpRequest()
xhr.open("POST", "example.php", true)
xhr.send(some_data)
```



[常见的http状态码](https://www.runoob.com/http/http-status-codes.html)

当前我们只是发出了请求，还没有**处理响应**



----------------------------------



#### 处理响应

通过为XMLHTTPRequest实例添加`onreadystatechange`事件处理程序。

xhr实例的`readystatechange`事件会监听`xhr.readyState`属性的变化，你可以将这个属性想象为一个计数器，随着AJAX流程的推进而不断累加，其可取的值如下：

- **0**：未初始化 -- 尚未调用`.open()`方法；
- **1**：启动 -- 已经调用`.open()`方法，但尚未调用`.send()`方法；
- **2**：发送 -- 已经调用`.send()`方法，但尚未接收到响应；
- **3**：接收 -- 已经接收到部分响应数据；
- **4**：完成 -- 已经接收到全部响应数据，而且已经可以在客户端使用了；

有了这个时间处理程序对AJAX进程做监听，剩下的事就简单多了，一个异步的GET请求代码如下：

```js
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if (xhr.readyState  ==  4 && xhr.status == 200)
    {
    	console.log(xhr.responseText);
    }
  }
}
xhr.open("get", "example.url", true);
xhr.send(null);
```

**注意**：为了确保跨浏览器的兼容性，必须要在调用`.open()`方法之前指定事件处理程序，因为`.open()`方法的执行也包含在该事件处理程序的监听范围之内



++++++++++

#### 取消请求

调用`.abort()`方法。 常用于访问数据时间过长,主动取消  默认取消时间 10s

该方法会令XHR对象实例停止触发事件，并且不再允许访问任何和响应有关的对象属性。



--------------------------



#### 小结

创建ajax流程

1. 创建一个 XMLHttpRequest 对象
2. 为 XMLHttpRequest 对象添加 onreadystatechange 响应函数
   + 判断响应是否完成  XMLHttpRequest  对象的 readyState 属性值为 4
   + 判断响应是否可用 XMLHttpRequest 对象的 status 属性值为 200
   + 打印结果 responseText
3. 调用 XMLHttpRequest 对象的 open 方法（请求方式，请求地址，是否异步）
4. 调用 XMLHttpRequest 对象的 send 方法（不传参数使用null）

**封装方法：**

```js
/**
	* 封装的ajax函数
	* @param {Object} obj 接受一个对象参数,包含:
	* method 请求方式 默认GET  可传 "POST"
	* data 参数,默认为null
	* url 请求地址
	* success 请求成功后的回调函数,默认参数服务器返回的数据
	* fail 请求失败后的回调函数
*/
function ajax(obj){
	obj.method = obj.method || "GET";
	obj.data = obj.data || null;
	obj.url = obj.url || "list";
	obj.success = obj.success || function (res){
		console.log(res);
	}
	obj.fail = obj.fail || function (){
		console.log("fail ...");
	}
	var xhr = new XMLHttpRequest();
	xhr.onload = function (){
	var res = JSON.parse(xhr.responseText);
		obj.success(res);
	}
	xhr.onerror = function (){
		console.log("sorry, can't get reponse ...");
		if(obj.fail){
			obj.fail();
		}
	}
    xhr.open(obj.method,"http://59.110.138.169/api/ajax/user/"+ obj.url,true);
	if(obj.method === "POST"){
		xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	}
	xhr.send(obj.data);
}
```



### 新规范

此内容为 XMLHttpRequest2 级规范，还没有全面普及，存在一定的兼容性问题

#### 1. 超时设定

当我们发送一个AJAX请求，却迟迟得不到服务器响应，这种感觉是很糟糕的。为了缓解这种糟糕的感觉，XMLHttpRequest 2级规范为我们提供了一个额外的属性和事件监听事件：

+ `timeout`属性：设置超时时间，单位为毫秒；
+ `timeout`事件：当响应时间超出实例对象timeout属性时被触发；

使用方式如下：

```js
// 当响应时间超过1秒时，请求中止，弹出提示框
xhr.timeout = 1000
xhr.ontimeout = function() { alert("Request did not return in a second.") }
```

注意：当请求终止时，会调用`ontimeout`事件处理程序，此时xhr的`readyState`属性的值可能已变为4，这意味着会继续调用`onreadystatechange`事件处理程序。

浏览器兼容性：

+ 桌面端 
  - IE 10+ 与其他浏览器均支持
+ 移动端 
  - IE Mobile 10+ 与其他浏览器均支持



#### 2. 进度事件

Progress Events规范是W3C制定的一个工作草案。该规范定义了与客户端与服务器通信相关的一系列事件，这些事件监听了通信进程中的各个关键节点，使我们能够以更细的颗粒度掌控数据传输过程中的细节。目前共有6个进度事件，他们会随数据传输进展被顺序触发（除了error，abort事件），让我们看看他们的定义和浏览器兼容情况：

- `loadstart`：在接收到响应数据的第一个字节时触发； 
  - 桌面端：除 Safari Mobile 未知外，其他浏览器均支持
  - 移动端：除 Safari Mobile 未知外，其他浏览器均支持
- `progress`：在接收响应期间持续不断地触发； 
  - 该事件可以实现加载进度条效果。因为`onprogress`事件处理程序会接收到一个`event`对象，其`target`属性为XHR对象实例，但却额外包含着三个属性：
    - `lengthComputable`：表示进度信息是否可用的布尔值
    - `loaded`：表示目前接收的字节数
    - `total`：表示根据Content-Length响应头部确定的预期字节数
  - 桌面端：IE10+ 与其他浏览器均支持
  - 移动端：均支持
- `error`：在请求发生错误时触发； 
  - 桌面端：所有浏览器均支持（[信息来源](https://link.juejin.im?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FErrorEvent)）
  - 移动端：除IE Mobile不支持外，其他浏览器均支持（[信息来源](https://link.juejin.im?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FErrorEvent)）
- `abort`：在调用`abort()`方法时触发； 
  - 桌面端：未知
  - 移动端：未知
- `load`：在接收到完整的响应数据时触发； 
  - 该事件帮助我们节省了`readystatechange`事件，我们不必在XHR对象实例上绑定该事件监听函数以追踪实例上`readyState`属性的变化
  - 桌面端：IE7+ 与其他浏览器均支持
  - 移动端：Chrome for Android，Edge，Firefox Mobile支持，其余浏览器未知
- `loadend`：在通信完成或者触发`error`，`abort`，或`load`事件后触发； 
  - 桌面端：所有浏览器不支持
  - 移动端：所有浏览器不支持

以下方法可查看所有事件：

```html
<div class="controls">
    <input class="xhr success" type="button" name="xhr" value="Click to start XHR (success)" />
    <input class="xhr error" type="button" name="xhr" value="Click to start XHR (error)" />
    <input class="xhr abort" type="button" name="xhr" value="Click to start XHR (abort)" />
</div>

<textarea readonly class="event-log"></textarea>
```



```js
const xhrButtonSuccess = document.querySelector('.xhr.success');
const xhrButtonError = document.querySelector('.xhr.error');
const xhrButtonAbort = document.querySelector('.xhr.abort');
const log = document.querySelector('.event-log');

function handleEvent(e) {
    log.textContent = log.textContent + `${e.type}: ${e.loaded} bytes transferred\n`;
}

function addListeners(xhr) {
    xhr.addEventListener('loadstart', handleEvent);
    xhr.addEventListener('load', handleEvent);
    xhr.addEventListener('loadend', handleEvent);
    xhr.addEventListener('progress', handleEvent);
    xhr.addEventListener('error', handleEvent);
    xhr.addEventListener('abort', handleEvent);
}

function runXHR(url) {
    log.textContent = '';

    const xhr = new XMLHttpRequest();
    addListeners(xhr);
    xhr.open("GET", url);
    xhr.send();
    return xhr;  
}

xhrButtonSuccess.addEventListener('click', function(){
    runXHR('https://mdn.mozillademos.org/files/16553/DgsZYJNXcAIPwzy.jpg');
});

xhrButtonError.addEventListener('click', function(){
    runXHR('https://somewhere.org/i-dont-exist');
});

xhrButtonAbort.addEventListener('click', function(){
    runXHR('https://mdn.mozillademos.org/files/16553/DgsZYJNXcAIPwzy.jpg').abort();
});
```



**注意：需要在`.open()`方法前调用`onprogress`事件处理程序**





## JQuery中的Ajax

**注意：所有的选项都可以通过 $.ajaxSetup() 函数来全局设置**

语法：`$.ajax([settings])`

常用参数：

+ `url` String 默认值: 当前页地址。发送请求的地址
+ `type` String  请求方式 ("POST" 或 "GET")， 默认为 "GET"。注意：其它 HTTP 请求方法，如 PUT 和 DELETE 也可以使用，但仅部分浏览器支持。

+ `async` Boolean 默认为true，表示是否使用异步请求
+ `contentType` 同上文的ajax
+ `data` String 发送到服务器的数据
+ `beforeSend` 发送请求前执行的函数，如果此事件返回 false，可以取消 ajax 请求
+ `dataType` 预期服务器返回的数据类型。如果不指定，会自动识别返回的数据
+ `success` 请求成功后的回调函数。参数：由服务器返回，并根据 dataType 参数进行处理后的数据；描述状态的字符串。
+ `error` 请求失败时调用的函数。参数：XHR 对象、错误信息（null、timeout、error、notmodify和parsererror）
+ `complete(XHR, TS)` 请求完成后的回调函数，无论请求成功还是失败都会执行。参数是 XMLHTTPRequest 对象和一个描述请求类型的字符串
+ `jsonp` String 在一个 jsonp 请求中重写回调函数的名字。这个值用来替代在 "callback=?" 这种 GET 或 POST 请求中 URL 参数里的 "callback" 部分，比如 {jsonp:'onJsonPLoad'} 会导致将 "onJsonPLoad=?" 传给服务器。
+ `jsonpCallback` String 为 jsonp 请求指定一个回调函数名。这个值将用来取代 jQuery 自动生成的随机函数名。这主要用来让 jQuery 生成度独特的函数名，这样管理请求更容易，也能方便地提供回调函数和错误处理。你也可以在想让浏览器缓存 GET 请求的时候，指定这个回调函数名。

### 快捷方法

`$.get() $.post()`，它们分别是get和post方法的简化版，结构：`$.get(url,[data],[callback],[type])`带中括号的参数可以省略，两个方法的结构一致，回调函数 callback 有两个参数：data 代表返回的内容；textstatus 代表请求状态，其值可能是success、error、notmodify、timeout其中一种。



```js
/* 假设有一个test.json文件
{
	“name”: “zhangsan"，
   	"age": 24,
   	"tel": "123456789"
}
*/
$.ajax({
    url: "./test.json",
    method: "get", // 默认，可以不写
    success: function (res){
        console.log(res); // 成功后返回的文本
    },
    fail: function (err){
        console.log(err); // 失败后返回的原因
    }
})

// 换成 get 方法
$.get("./test.json", function (data,textstatus){
    console.log(res);
})
```



后言：尽管 JQuery 对前端开发工作者有着深远的影响，但是随着新一代的框架（VUE/REACT/ANGULAR）的兴起，以及 ES 规范的完善，更多 API 的更新，JQuery 这种大而全的 JS 库未来的路会越走越窄。网友戏评：廉颇老矣，尚能饭，但总有饭不动的一天。



### 豆瓣图片处理

豆瓣api图片在本地页面上无法显示，但是单独打开链接却显示，原因是 请求403，网传是因为豆瓣防盗链

解决办法，在页面上加入： `<meta name="referrer" content="never">`



## JS 中的同步和异步

简单来说，当两件或两件以上的事情同时发生的时候，这就叫同步；当他们并非同时发生的时候，就叫异步。

JavaScript使用的是消息队列，新进来的消息（或事件）被暂存在这里。**event-loop** 不断的对这些消息进行处理，将它们发送到调用堆栈（call stack）中执行。

**调用堆栈(call stack)：**一个具有`LIFO`(后进先出)结构的堆栈，用于存储在代码执行期间创建的所有执行上下文。每一条或一块语句执行之前，都会被加入到执行栈中，执行语句前创建执行栈，然后把语句加入，执行完成后就销毁该执行栈。



### JS执行顺序

`JS` 只有一个调用栈，因为它是一种单线程编程语言。调用堆栈具有 `LIFO` 结构，这意味着项目只能从堆栈顶部添加或删除。

看一段代码的执行过程：

```js
function fn(){
    console.log("fn");
}
function gn(){
    console.log("gn start");
    fn();
    console.log("gn end");
}
gn(); // gn start / fn / gn end
```

过程：

1. 当执行此代码时，将创建一个全局执行上下文(由main()表示)并将其推到调用堆栈的顶部。当遇到对`gn()`的调用时，它会被推送到堆栈的顶部。

2. `console.log('gn start')`被推送到堆栈的顶部，当它完成时，它会从堆栈中弹出。之后，我们调用`fn()`，因此`fn`函数被推到堆栈的顶部。
3. `console.log('fn')`被推送到堆栈顶部，并在完成时弹出堆栈。`fn()` 函数结束，从堆栈中弹出。
4. `console.log(“gn end”)`被推到堆栈的顶部，并在完成时删除。之后，`gn()`函数完成，因此从堆栈中删除它。
5. 程序在这一点上完成了它的执行，所以全局执行上下文(main())从堆栈中弹出。



### 阻塞

因为 JS 是单线程的，一旦某个调用堆栈的语句需要执行的时间过长，就会阻塞后面的语句的执行，就好比排队打饭，有一个孩子跟打饭阿姨产生了某种误会，后面所有的人都需要等待这个误会解除，否则都打不上饭。或者说你在排队上公交车，有一个人堵住了公交车的门，那么他后面的人就上不去。



### JS异步

解决阻塞的简单方法就是将某些需要长时间的操作改成异步操作，那么什么是异步操作呢？简单来说定时器、DOM事件和网络请求都是异步过程。来看一下异步的执行过程：

```js
const networkRequest = () => {
	// 假设某网络请求用时2秒
  	setTimeout(() => {
    	console.log('Async Code');
  	}, 2000);
};

console.log('Hello World');

networkRequest();

console.log('The End');
```

当上述代码在浏览器中加载时，`console.log(' Hello World ')` 被推送到堆栈中，并在完成后弹出堆栈。接下来，将遇到对 `networkRequest()` 的调用，因此将它推到堆栈的顶部。

下一个 `setTimeout()` 函数被调用，因此它被推到堆栈的顶部。

`setTimeout()` 方法在web api环境中启动一个2s的计时器。此时，`setTimeout()`已经完成，并从堆栈中弹出。`cosole.log(“the end”)` 被推送到堆栈中，在完成后执行并从堆栈中删除。

同时，计时器已经过期，现在回调被推送到消息队列。但是回调不会立即执行，这就是事件轮询开始的地方。

`event loop`（事件轮询）的工作是监听调用堆栈，并确定调用堆栈是否为空。如果调用堆栈是空的，它将检查消息队列，看看是否有任何挂起的回调等待执行。

2秒过后，定时器的回调函数执行，然后是 `console.log(“Async Code”)` 被推送到堆栈顶部，执行并从堆栈中弹出。此时，回调已经完成，因此从堆栈中删除它，程序最终完成。

过程如下图：

![img](https://user-gold-cdn.xitu.io/2019/9/17/16d3c7f24dee22e7?imageslim)

