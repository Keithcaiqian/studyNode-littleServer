window.onload = function(){
    var xhr=new XMLHttpRequest();
    xhr.open('GET','/getData',true);
    xhr.send(null)
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText)
            console.log(typeof xhr.responseText)
        }
    }
}