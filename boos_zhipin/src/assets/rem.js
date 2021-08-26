;
// 简单适配移动端屏幕
(function (win) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var _tid;
    function refreshRemFn() {
        // 取得屏幕宽度
        var _width = docEl.getBoundingClientRect().width;
        // 设置屏幕宽度，基准宽度定为640
        if (_width > 640) {
            _width = 640;
        }
        var _rem = _width / 6.4;
        // 1rem=100px
        docEl.style.fontSize = _rem + 'px';
    }
    // 当页面缩放时触发
    win.addEventListener('resize', function () {
        this.clearTimeout(_tid);
        _tid = this.setTimeout(refreshRemFn, 300)
    }, false)
    // 当页面加载时触发
    win.addEventListener('pageshow', function (e) {
        // 判断页面是否从浏览器缓存中加载e.persisted = true || false
        if (e.persisted) {
            this.clearTimeout(_tid);
            _tid = this.setTimeout(refreshRemFn, 300)
        }

    }, false);
    refreshRemFn();
})(window)