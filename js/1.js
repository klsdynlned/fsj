   //获取元素对象
   var img = document.getElementById("light");
   //开关
   var flag = false;
   //给对象绑定单机事件
   img.onclick = function () {
       //判断灯泡目前是开还是关
       if(flag){
        //灯泡是开的，把它变成关闭
        img.src="img/开关(2).png";
        	x=document.getElementById("deme");  //查找元素
			var a="关闭粉碎"
			x.innerHTML=a;    //改变内容
			x.style.color="gray"
        flag = false;
       }else{
           //灯泡是关闭的，把它变成开的
           img.src="img/开关(1).png";
           
            x=document.getElementById("deme");  //查找元素
			var a="开始粉碎"
			x.innerHTML=a;    //改变内容
			x.style.color="greenyellow"
           flag = true;
       }
   }
