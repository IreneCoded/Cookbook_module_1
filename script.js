//activated when the heart is clicked on. Adds or removes the class favorite to this hear

function favorit(heart){

    heart.classList.toggle("favorit");

}


// expands the recipe cards - the functions´gets the button which is pressed and this will be the relation to all furtcher steps
function ausklappen(schalter){

    //selects the element above the pressed button a div which is only there to hide the table and the recipe
    let tabelle = schalter.previousElementSibling;
   // selects the first in the hidden div (also a div)
   let beschreibung= tabelle.firstElementChild;
    

    //adds/remove a class to both of the hidden divs
    tabelle.classList.toggle("contgrowBig");
    beschreibung.classList.toggle("wachsen");

    
    // selects ony the h3 in the pressed element, checks with one is displayd and changes the statur of visibility

    let knopf1 = schalter.firstElementChild;
    let knopf2 = schalter.lastElementChild;
    
    console.log(knopf1);
    console.log(knopf2);
    if (knopf1.style.display === "none") {
        knopf1.style.display = "inline";
        knopf2.style.display = "none";
    } else {
       knopf1.style.display = "none";
       knopf2.style.display = "inline";
}
}


