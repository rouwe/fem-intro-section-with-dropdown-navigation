// Add event for mobile menu functionality
const OPEN_MENU = document.getElementsByClassName("open-menu")[0];
const CLOSE_MENU = document.getElementsByClassName("close-menu")[0];
OPEN_MENU.addEventListener("click", changeDisplayMenu);
CLOSE_MENU.addEventListener("click", changeDisplayMenu);
function changeDisplayMenu() {
    let navBox = document.getElementsByClassName("nav-box")[0];
    let navBoxStyleDisplay = navBox.style.display;
    switch(navBoxStyleDisplay) {
        case "":
            console.log("Not set");
            navBox.style.display = "flex";
            OPEN_MENU.style.display = "none";
            CLOSE_MENU.style.display = "block";
            break;
        case "flex":
            console.log("Open");
            navBox.style.display = "none";
            OPEN_MENU.style.display = "block";
            CLOSE_MENU.style.display = "none";
            break;
        case "none":
            console.log("Close");
            navBox.style.display = "flex";
            OPEN_MENU.style.display = "none";
            CLOSE_MENU.style.display = "block";
            break;
    } 
    
}
// Navigation dropdown link
const NAV_DROPDOWN_BOX = document.getElementsByClassName("nav-dropdown-box");
for (const dropdown of NAV_DROPDOWN_BOX) {
    dropdown.addEventListener("click", changeDisplaySubLink);
}
function changeDisplaySubLink() {
    // Display or Hide the sub links when clicked
    const subLink = this.getElementsByClassName("nav-sub-link-box")[0];
    const subLinkDisplay = subLink.style.display;
    const arrowUp = this.getElementsByClassName("nav-up-arrow")[0];
    const arrowDown = this.getElementsByClassName("nav-down-arrow")[0];
    console.log(subLink, subLinkDisplay)
    if (subLinkDisplay === '' || subLinkDisplay === "none") {
        subLink.style.display = "block";
        arrowUp.style.display = "flex";
        arrowDown.style.display = "none";
    } else if (subLinkDisplay === 'block'){
        subLink.style.display = "none";
        arrowUp.style.display = "none";
        arrowDown.style.display = "flex";
    }
}