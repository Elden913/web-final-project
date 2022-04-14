// query selector
let qs = (str) => document.querySelector(str);
// temporary element
let te = () => document.createElement("div");

function icon(svg_code, onclickname) {
    return `
<div class="icon" onclick="${onclickname}">
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
    `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em"
                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <circle cx="12" cy="20" r="2" fill="currentColor" />
                <circle cx="12" cy="4" r="2" fill="currentColor" />
                <circle cx="6.343" cy="17.657" r="2" fill="currentColor" />
                <circle cx="17.657" cy="6.343" r="2" fill="currentColor" />
                <circle cx="4" cy="12" r="2.001" fill="currentColor" />
                <circle cx="20" cy="12" r="2" fill="currentColor" />
                <circle cx="6.343" cy="6.344" r="2" fill="currentColor" />
                <circle cx="17.657" cy="17.658" r="2" fill="currentColor" />
            </svg>`,
    "launch_start_menu(event)"
);
insert_icons(
    `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"/><path fill="currentColor" d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7c-21.2 8.1-39.2 22.3-52.1 40.9c-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5c.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1 0 80 0a40 40 0 1 0-80 0z"/></svg>`,
    "launch_file_manager()"
);
insert_icons(
    `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM440.2 765h-50.8c-2.2 0-4.5-1.1-5.9-2.9L348 718.6l-35.5 43.5a7.38 7.38 0 0 1-5.9 2.9h-50.8c-6.6 0-10.2-7.9-5.8-13.1l62.7-76.8l-61.2-74.9c-4.3-5.2-.7-13.1 5.9-13.1h50.9c2.2 0 4.5 1.1 5.9 2.9l34 41.6l34-41.6c1.5-1.9 3.6-2.9 5.9-2.9h50.8c6.6 0 10.2 7.9 5.9 13.1L383.5 675l62.7 76.8c4.2 5.3.6 13.2-6 13.2zm7.8-382c0 2.2-1.4 4-3.2 4H376v68.7c0 1.9-1.8 3.3-4 3.3h-48c-2.2 0-4-1.4-4-3.2V387h-68.8c-1.8 0-3.2-1.8-3.2-4v-48c0-2.2 1.4-4 3.2-4H320v-68.8c0-1.8 1.8-3.2 4-3.2h48c2.2 0 4 1.4 4 3.2V331h68.7c1.9 0 3.3 1.8 3.3 4v48zm328 369c0 2.2-1.4 4-3.2 4H579.2c-1.8 0-3.2-1.8-3.2-4v-48c0-2.2 1.4-4 3.2-4h193.5c1.9 0 3.3 1.8 3.3 4v48zm0-104c0 2.2-1.4 4-3.2 4H579.2c-1.8 0-3.2-1.8-3.2-4v-48c0-2.2 1.4-4 3.2-4h193.5c1.9 0 3.3 1.8 3.3 4v48zm0-265c0 2.2-1.4 4-3.2 4H579.2c-1.8 0-3.2-1.8-3.2-4v-48c0-2.2 1.4-4 3.2-4h193.5c1.9 0 3.3 1.8 3.3 4v48z"/></svg>`,
    "launch_calculator()"
);
insert_icons(
    `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg>`,
    "launch_browser()"
);
