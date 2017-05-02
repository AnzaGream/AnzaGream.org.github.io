
document.onkeydown = function(e) {
e = e || window.event;
if(e.keyCode == 85 | e.keyCode == 83) {
return false;
}
return true;
}

window.onkeydown = function(evt) {
if(evt.keyCode == 123) return false;
};

window.onkeypress = function(evt) {
if(evt.keyCode == 123) return false;
};

    document.onkeydown = function(e) {
        if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
        }
        return false;
    };
    function click() {
        if (event.button == 2||event.button==3) {
            oncontextmenu='return false';
        }
    }
    document.onmousedown=click;
    document.oncontextmenu = new Function("return false;")
