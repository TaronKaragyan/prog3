function bodyClick(evt) {
    console.log("Clicked at X: " + evt.pageX + ", Y: " + evt.pageY);
}

window.onclick = bodyClick;