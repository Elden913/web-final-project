let zx = 0;
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
function guidGenerator() {
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
        ""
    );
    function rand() {
        return alphabet[Math.round(randomNumber(0, 51))];
    }
    let return_val = rand() + rand() + rand() + rand();
    return return_val;
}

class SWindow {
    constructor(content) {
        let swindow = te();
        document.body.appendChild(swindow);
        let id = guidGenerator();
        swindow.outerHTML = `
<div class="window" id="${id}">
    <div class="window-toolbar">
        <button class="center-child" onclick="this.parentElement.parentElement.remove()">
            <svg xmlns="http://www.w3.org/2000/svg" height="15px" width="15px" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </button>
    </div>
    <div class="window-content" style="height: 100%;">
       <iframe style="height: 100%; width: 100%;" src="${content}"></iframe>
    </div>
</div>
`;
        dragElement("#" + id);
    }
}

function dragElement(elementSelector) {
    let dragStartX, dragStartY;
    let objInitLeft, objInitTop;
    let inDrag = false;
    let dragTarget = document.querySelector(elementSelector);
    let dragHeader = dragTarget.querySelector(".window-toolbar");
    dragHeader.addEventListener("mousedown", function (e) {
        inDrag = true;
        objInitLeft = dragTarget.offsetLeft;
        objInitTop = dragTarget.offsetTop;
        dragStartX = e.pageX;
        dragStartY = e.pageY;
        zx += 1;
        dragTarget.style.zIndex = zx;
    });
    document.addEventListener("mousemove", function (e) {
        if (!inDrag) {
            return;
        }
        dragTarget.style.left = objInitLeft + e.pageX - dragStartX + "px";
        dragTarget.style.top = objInitTop + e.pageY - dragStartY + "px";
    });
    document.addEventListener("mouseup", function (e) {
        inDrag = false;
    });
}
