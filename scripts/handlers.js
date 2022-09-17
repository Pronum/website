const searchSection = document.getElementsByClassName("searchsection-XJa2sk")[0];

searchSection.addEventListener("click", ( ) => { onSearchSectionClick() });
window.addEventListener("keyup", ( kbd ) => { kbd.preventDefault(); if(kbd.ctrlKey && (kbd.key == "i" || kbd.key == "I" || kbd.key == "ه") && !kbd.shiftKey) { onSearchSectionClick() } })

const onSearchSectionClick = ( ) => {
    alert("[CURRENT] MODE DEV");
};