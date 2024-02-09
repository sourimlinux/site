var useragent = navigator.userAgent.toLowerCase();
if (useragent.indexOf("mobile") > -1 || useragent.indexOf("android") > -1 || window.innerWidth <= 925){
    document.querySelector('body').classList.add('mobile');
    document.getElementById('logobutton').removeAttribute("href");
}

window.onresize = function() {
    var location = window.location.href.toString().split('/');
    if (window.innerWidth <= 925){
        document.querySelector('body').classList.add('mobile');
        document.getElementById('logobutton').removeAttribute("href");
    } else {
        document.querySelector('body').classList.remove('mobile');
        if (location[location.length - 2] == "news"){
            document.getElementById('logobutton').setAttribute("href", "../");
        } else {
            document.getElementById('logobutton').setAttribute("href", "./");
        }   
    }
}