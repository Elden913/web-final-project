// query selector
let qs = (str) => document.querySelector(str);
// temporary element
let te = () => document.createElement("div");

function icon(svg_code, onclickname) {
    return `
<div class="icon" onclick="${onclickname}()">
    ${svg_code}
</div>
`;
}

function insert_icons(svg_code, onclickname) {
    let icon_div = te();
    qs(".toolbar").appendChild(icon_div);
    icon_div.outerHTML = icon(svg_code, onclickname);
}

insert_icons(
    '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z"/></svg>',
    "launch_file_manager"
);

