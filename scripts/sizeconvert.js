const impcol = document.getElementById("imp-col");
const improw = document.getElementById("imp-row");
const impcoltext = document.getElementById("imp-col-text");
const sections = document.getElementById("button-sections");

setInterval(( ) => {
    console.log(document.body.clientWidth)
    if(document.body.clientWidth < 900)
    {
        impcol.className = "flex-col";
        improw.className = "flex-col";
        sections.className = "buttonsection-DJnas2 flex-row";
        impcoltext.style.fontSize = "19px";
    }
    else if(document.body.clientWidth >= 900)
    {
        impcol.className = "flex-col";
        improw.className = "flex-row";
        impcoltext.style.position = "";
        sections.className = "buttonsection-DJnas2 flex-col";
        impcoltext.style.fontSize = "20px";
    }
}, 128);