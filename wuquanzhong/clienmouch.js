function clienmouch(){
  var clientX, clientY;//注册touchstart和touchend监听器
  document.addEventListener("touchstart", function(e) {　　
      //保存获取坐标
    startX = e.touches[0].clientX,
      startY = e.touches[0].clientY;　　
  }, false);　　
  document.addEventListener("touchmove", function(e) {　　　　　　
    EndX = e.touches[0].clientX, 　
      EndY = e.touches[0].clientY,
      //计算x和y坐标的差值
      X = EndX - startX, 　　　
      Y = EndY - startY;

    　//x和y进行比较，判断方向
    if (Math.abs(X) > Math.abs(Y) && X > 0) {　　　　　　
      console.log("右滑");　　　　
    }　　　　
    else if (Math.abs(X) > Math.abs(Y) && X < 0) {　　　　　　
      console.log("左滑");　　　　
    }　　　　
    else if (Math.abs(Y) > Math.abs(X) && Y > 0) {　　　　　　
      console.log("下滑");　　　　
    }　　　　
    else if (Math.abs(Y) > Math.abs(X) && Y < 0) {　　　　　　
      console.log("上滑");　　　　
    }　　　　
    else{　　　　　　
    　　
    }　　
  }, false);

}
