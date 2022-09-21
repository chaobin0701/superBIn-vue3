const defineDirective = (app) => {
  /**
   * @aram stringArr ['类名','类名']
   * */
  // 类名懒加载指令
  app.directive("into", {
    mounted(el, binding) {
      // IntersectionObserver  => 监听元素是否进入可视范围
      const observer = new IntersectionObserver(
        // isIntersecting => 解构出的数据 | 为true表示元素已经进入可视范围
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            observer.unobserve(el); //取消观察目标
            el.classList.add('animated'); // animate.css @4

            // 添加类名
            binding.value.forEach((item) => {
              el.classList.add(item);
            });
          }
        },
        {
          threshold: 0.01,
        }
      );
      observer.observe(el); //观察目标
    },
  });
};

export default {
  install(app) {
    // 在app上进行扩展,app提供component directive 函数
    // 如果要挂载原型 app.config.globalProperties  方法

    // 自定指令
    defineDirective(app);
  },
};
