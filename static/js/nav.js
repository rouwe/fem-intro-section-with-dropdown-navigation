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