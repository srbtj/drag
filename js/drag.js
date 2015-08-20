function Drag(id){
    this.obj = document.getElementById(id);
    this.disX = 0;
    this.disY = 0;
};

Drag.prototype.init = function(){
    var that = this;
    /** 设置IE低版本的全局捕获 **/
    if(this.obj.setCapture){
        this.obj.setCapture();
    }
    /** 鼠标按下时 **/
    this.obj.onmousedown = function(ev){
        var ev = ev || window.event;
        that.mouseDown(ev);
        /** 鼠标移动时 **/
        document.onmousemove = function(ev){
            var ev = ev || window.event;
            that.mouseMove(ev);
        };
        /** 鼠标离开时 **/
        document.onmouseup = function(){

            that.mouseUp();
        };

        ev.preventDefault();
    };
};

Drag.prototype.mouseDown = function(ev){

    this.disX = ev.clientX - this.obj.offsetLeft;
    this.disY = ev.clientY - this.obj.offsetTop;

};

Drag.prototype.mouseMove = function(ev){

    this.obj.style.left = ev.clientX - this.disX + 'px';
    this.obj.style.top = ev.clientY - this.disY + 'px';
};

Drag.prototype.mouseUp = function(){

    document.onmousemove = document.onmouseup = null;
    /** 释放全局捕获 **/
    if(this.obj.releaseCapture){
        this.obj.releaseCapture();
    }
}