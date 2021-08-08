//activated when the heart is clicked on. Adds or removes the class favorite to this hear

function favorit(heart){

    heart.classList.toggle("favorit");

}


// expands the recipe cards - the functions´gets the button which is pressed and this will be the relation to all furtcher steps
function ausklappen(schalter){

    //selects the element above the pressed button a div which is only there to hide the table and the recipe
    let tabelle = schalter.previousElementSibling;
    

    //adds/remove a class to the hidden div
    tabelle.classList.toggle("contgrowBig");

    
    // selects ony the h3 in the pressed element, checks with one is displayd and changes the statur of visibility

    let knopf1 = schalter.firstElementChild;
    let knopf2 = schalter.lastElementChild;
    
    //if the plus button is not visible, it will be given a proper display and the minus button is set to display none.
    //else: vice versa
    if (knopf1.style.display === "none") {
        knopf1.style.display = "inline";
        knopf2.style.display = "none";
    } else {
       knopf1.style.display = "none";
       knopf2.style.display = "inline";
}
}


