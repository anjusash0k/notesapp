function onclik_note(){
    let x= document.getElementById("msgbox1");
    if(x.value==""){
        alert("please, write something in the box...")
    } 
    else{
    let a=document.createElement("div");
    document.getElementById("div2").appendChild(a);
    a.className="container2";
    a.innerHTML=x.value;
    x.value="";
    }
    
}