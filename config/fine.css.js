//移动端适配 js代码
//设置scale
/*var scale = 3/devicePixelRatio;
document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' +scale+ ', minimum-scale=' + scale + ', user-scalable=no');
console.log('移动端适配js代码')*/

//设置font-size html
document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
