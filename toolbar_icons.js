function launch_file_manager() {
    new SWindow("src=about.html");
}

function launch_start_menu(e) {
    //  e.currentTarget
    if (qs("#start-menu") == undefined) {
        let panel = te();
        e.currentTarget.appendChild(panel);
        panel.outerHTML = `
        <div id="start-menu" class="panel">
        <div onclick="location.reload()"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M12.75 8a4.5 4.5 0 0 1-8.61 1.834l-1.391.565A6.001 6.001 0 0 0 14.25 8A6 6 0 0 0 3.5 4.334V2.5H2v4l.75.75h3.5v-1.5H4.352A4.5 4.5 0 0 1 12.75 8z" clip-rule="evenodd"/></svg> Restart</div>
        </div>
        `;
        return;
    }
    qs("#start-menu").classList.toggle("disp-none");
}

function launch_calculator() {
    new SWindow("src=calculator.html");
}
function launch_browser() {
    new SWindow("src=browser.html");
}
