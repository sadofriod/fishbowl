export default function ajax(path,method,data,callback){
    let xhr = new XMLHttpRequest();
    xhr.open(method,path,true);
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhr.send(data);
    xhr.onreadystatechange = callback;
}