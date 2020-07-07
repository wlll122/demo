// 前边写上分号保护立即执行函数
;
(function(w) {
	// 创建一个封闭的环境，保护声明的代码变量，函数内部和外部互不影响
	function Swiper(select, setting) {
		// 选中运动元素
		
		this.ele = document.querySelector(select + " .swiper");
		this.arrows = document.querySelectorAll(select + " .arrow");

		this.setting = Object.assign({
			loop: false,
			pagination: false,
			autoPlay: false,
			duration: 2000
		}, setting);

		// 计数器
		this.count = 0;
		// 声明一张图片的宽度  这里获取父类的宽度，就不用重新获取子元素的宽度
		// this.w = this.ele.children[0].offsetWidth;
		this.w = this.ele.parentNode.clientWidth;

		// 自动轮播的计时器
		this.timer = null;

		// 执行原型的初始化函数
		// 原型和构造函数执行共享一个 this
		this.init();
	}

	Swiper.prototype.extends = function(obj) {
		for (var i in obj) {
			Swiper.prototype[i] = obj[i];
		}
	}

	Swiper.prototype.extends({
		// init 表示初始化
		init() {
			this.initWidth();
			this.initClick();

			// 判断是否有添加小点
			if (this.setting.pagination) {
				this.initDots();
			}

			// 是否开启自动轮播
			if (this.setting.autoPlay) {
				this.auto();
			}
		},
		// 初始化swiper的宽度，item的宽度
		initWidth() {
			// 宽度是根据item的个数来制定的
			var items = this.ele.children;

			// 判断是否是loop循环如果是，复制第一个子元素添加到最后一个
			if (this.setting.loop) {
				this.ele.appendChild(items[0].cloneNode(true));
			}
			this.ele.style.width = 100 * items.length + "%";
			for (var i = 0; i < items.length; i++) {
				items[i].style.width = 100 / items.length + "%";
			}

			// 需要重置一张图片的宽度
			// this.w = items[0].offsetWidth;
		},
		// 初始化箭头的点击事件
		initClick() {
			// 一般来说当this指针需要更改的时候，常用that变量来接受
			var that = this;
			// 点击往左走
			this.arrows[0].onclick = function() {
				if (that.count == 0) {
					if (that.setting.loop) {
						// 定位到最后一张，往前一张移动
						that.count = that.ele.children.length - 1;
						that.ele.style.left = -that.count * that.w + "px";
					} else {
						that.count = that.ele.children.length
					}
				}
				that.count--;
				that.move();
				that.changeAct();
			}

			// 点击往右走
			this.arrows[1].onclick = function() {
				// 元素位于最后一张的时候
				if (that.count == that.ele.children.length - 1) {
					// 判断是否是无缝循环
					if (that.setting.loop) {
						// 如果是，定位值第一张图片，往第二张走
						that.count = 0;
						that.ele.style.left = "0px";
					} else {
						// 如果不是，让count+到0即可
						that.count = -1;
					}
				}
				that.count++;
				that.move();
				that.changeAct();
			}
		},
		// 初始化小点
		initDots() {
			var that = this;
			// 如果是无缝循环，小点个数等于item个数-1，如果不是无缝循环小点个数 = item的个数
			var str = `<ul class="pagination">`;
			var length = this.ele.children.length;
			length = this.setting.loop ? length - 1 : length;
			for (var i = 0; i < length; i++) {
				str += `<li class="${ i == 0 ? "act" : "" }" data-index="${ i }"></li>`;
			}
			str += `</ul>`;

			this.ele.insertAdjacentHTML("afterEnd", str);

			// 获取下一个兄弟节点
			var ulEle = this.ele.nextElementSibling;
			ulEle.onclick = function() {
				if (event.target.tagName === "LI") {
					// 同步count
					that.count = event.target.dataset.index;

					// 执行切换样式
					that.changeAct();

					that.move();
				}
			}
		},
		// 切换小点样式
		changeAct() {
			// 获取到激活的小点，去除它的样式
			document.querySelector(".pagination .act").classList.remove("act");
			var i = this.count;
			if(this.setting.loop){
				i = i % (this.ele.children.length - 1);
			}
			document.querySelectorAll(".pagination li")[i].classList.add("act");
		},
		// 开启自动轮播
		auto() {
			var that = this;
			fn();

			function fn() {
				that.timer = setInterval(function() {
					that.arrows[1].click();
				}, that.setting.duration);
			}

			this.ele.parentNode.onmouseenter = function() {
				clearInterval(that.timer);
			}
			this.ele.parentNode.onmouseleave = function() {
				fn();
			}
		},
		// 运动函数
		move() {
			var ele = this.ele;
			var target = -this.count * this.w;

			if (ele.timer) {
				clearInterval(ele.timer);
			}
			ele.timer = setInterval(function() {
				var start = ele.offsetLeft;
				var step = (target - start) / 10;
				if (Math.abs(step) < 1) {
					step = step > 0 ? 1 : Math.floor(step);
				}
				ele.style.left = start + step + "px";
				if (start + step == target) {
					clearInterval(ele.timer);
					ele.timer = null;
				}
			}, 1000 / 60);
		}
	})

	

	w.Swiper = Swiper; // 将构造函数暴露给window对象
}(window));
