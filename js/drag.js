function drag(obj){

    obj.onmousedown = function(ev){

        ev = ev || window.event;
        /** 计算鼠标按下的离目标元素左边的距离  */
        var disX = ev.clientX - obj.offsetLeft;
        var disY = ev.clientY - obj.offsetTop;

        /*** 设置全局捕获  目的是：阻止事件的默认行为;
         *
         *   标准下： return false;
         *   ie非标准下：  设置全局捕获
         **/

        if(obj.setCapture){

            obj.setCapture();
        }

        document.onmousemove = function(ev){

            ev = ev || window.event;
            /**
             *   计算鼠标移动的距离并赋值给目标元素;
             **/

            var L = ev.clientX - disX;
            var T = ev.clientY - disY;

            /** 指定目标元素在指定的范围内移动 */
            if(L < 0){
                L = 0;
            }else if( L > document.documentElement.clientWidth - obj.offsetWidth){

                L = document.documentElement.clientWidth - obj.offsetWidth;
            }


            if( T < 0 ){

                T = 0;
            }else if( T > document.documentElement.clientHeight - obj.offsetHeight){

                T = document.documentElement.clientHeight - obj.offsetHeight;
            }

            obj.style.left = L + 'px';
            obj.style.top = T + 'px';

         }

        document.onmouseup = function(){

            document.onmousemove = document.onmouseup = null;

            if(obj.releaseCapture) {

                obj.releaseCapture();
            }
        }

        return false;
    }
}