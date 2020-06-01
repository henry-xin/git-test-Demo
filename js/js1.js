var flag=ture;  /*全局变量 只在页面加载的时候定义一次*/
function show_menu(){
    var menu1=document.getElementById("menu1");
    if(flag){
        menu1.style.display="block";        /*块状显示--菜单的折叠功能*/
        flag=false;                    /* 逻辑类型不加引号"" */ 
    }else{
        menu1.style.display="none";
        flag=true; 
    }
}

function show_menu1(){
    //alert("5646");
    var menu1=document.getElementById("menu1");
    menu1.style.display="none";
    flag=true;
    
}
