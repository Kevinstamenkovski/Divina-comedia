var lastUsed;


function mainSectionActive() {
    document.getElementById("mainSection").style.display = "block";
    document.getElementById("cantoISection").style.display = "none";
    document.getElementById("cantoIIISection").style.display = "none";
    document.getElementById("cantoVSection").style.display = "none";
    document.getElementById("cantoVISection").style.display = "none";
    document.getElementById("cantoXSection").style.display = "none";
    document.getElementById("cantoXIIISection").style.display = "none";
    document.getElementById("cantoXVSection").style.display = "none";
    
    document.getElementsByClassName("control-1")[0].style.backgroundColor = "rgb(7, 119, 7)";
    document.getElementsByClassName("control-2")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-3")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-4")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-5")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-6")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-7")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-8")[0].style.backgroundColor = "rgb(69,78,86)";
    sessionStorage.removeItem("lastUsed");
    sessionStorage.setItem("lastUsed", 1);          
}



function cantoISectionActive() {
    document.getElementById("mainSection").style.display = "none";
    document.getElementById("cantoISection").style.display = "block";
    document.getElementById("cantoIIISection").style.display = "none";
    document.getElementById("cantoVSection").style.display = "none";
    document.getElementById("cantoVISection").style.display = "none";
    document.getElementById("cantoXSection").style.display = "none";
    document.getElementById("cantoXIIISection").style.display = "none";
    document.getElementById("cantoXVSection").style.display = "none";
    document.getElementsByClassName("control-1")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-2")[0].style.backgroundColor = "rgb(7, 119, 7)";
    document.getElementsByClassName("control-3")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-4")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-5")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-6")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-7")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-8")[0].style.backgroundColor = "rgb(69,78,86)";
    sessionStorage.removeItem("lastUsed");
    sessionStorage.setItem("lastUsed", 2); 
}



function cantoIIISectionActive() {
    document.getElementById("mainSection").style.display = "none";
    document.getElementById("cantoISection").style.display = "none";
    document.getElementById("cantoIIISection").style.display = "block";
    document.getElementById("cantoVSection").style.display = "none";
    document.getElementById("cantoVISection").style.display = "none";
    document.getElementById("cantoXSection").style.display = "none";
    document.getElementById("cantoXIIISection").style.display = "none";
    document.getElementById("cantoXVSection").style.display = "none";

    document.getElementsByClassName("control-1")[0].style.backgroundColor = "rgb(69,78,86)";   
    document.getElementsByClassName("control-2")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-3")[0].style.backgroundColor = "rgb(7, 119, 7)";
    document.getElementsByClassName("control-4")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-5")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-6")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-7")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-8")[0].style.backgroundColor = "rgb(69,78,86)";
    sessionStorage.removeItem("lastUsed");
    sessionStorage.setItem("lastUsed", 3); 
}





function cantoVSectionActive() {
    document.getElementById("mainSection").style.display = "none";
    document.getElementById("cantoISection").style.display = "none";
    document.getElementById("cantoIIISection").style.display = "none";
    document.getElementById("cantoVSection").style.display = "block";
    document.getElementById("cantoVISection").style.display = "none";
    document.getElementById("cantoXSection").style.display = "none";
    document.getElementById("cantoXIIISection").style.display = "none";
    document.getElementById("cantoXVSection").style.display = "none";

    document.getElementsByClassName("control-1")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-2")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-3")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-4")[0].style.backgroundColor = "rgb(7, 119, 7)";
    document.getElementsByClassName("control-5")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-6")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-7")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-8")[0].style.backgroundColor = "rgb(69,78,86)";
    sessionStorage.removeItem("lastUsed");
    sessionStorage.setItem("lastUsed", 4); 
}




function cantoVISectionActive() {
    document.getElementById("mainSection").style.display = "none";
    document.getElementById("cantoISection").style.display = "none";
    document.getElementById("cantoIIISection").style.display = "none";
    document.getElementById("cantoVSection").style.display = "none";
    document.getElementById("cantoVISection").style.display = "block";
    document.getElementById("cantoXSection").style.display = "none";
    document.getElementById("cantoXIIISection").style.display = "none";
    document.getElementById("cantoXVSection").style.display = "none";

    document.getElementsByClassName("control-1")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-2")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-3")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-4")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-5")[0].style.backgroundColor = "rgb(7, 119, 7)";
    document.getElementsByClassName("control-6")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-7")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-8")[0].style.backgroundColor = "rgb(69,78,86)";
    sessionStorage.removeItem("lastUsed");
    sessionStorage.setItem("lastUsed", 5); 
}

function cantoXSectionActive() {
    document.getElementById("mainSection").style.display = "none";
    document.getElementById("cantoISection").style.display = "none";
    document.getElementById("cantoIIISection").style.display = "none";
    document.getElementById("cantoVSection").style.display = "none";
    document.getElementById("cantoVISection").style.display = "none";
    document.getElementById("cantoXSection").style.display = "block";
    document.getElementById("cantoXIIISection").style.display = "none";
    document.getElementById("cantoXVSection").style.display = "none";

    document.getElementsByClassName("control-1")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-2")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-3")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-4")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-5")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-6")[0].style.backgroundColor = "rgb(7, 119, 7)";
    document.getElementsByClassName("control-7")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-8")[0].style.backgroundColor = "rgb(69,78,86)";
    sessionStorage.removeItem("lastUsed");
    sessionStorage.setItem("lastUsed", 6); 
}

function cantoXIIISectionActive() {
    document.getElementById("mainSection").style.display = "none";
    document.getElementById("cantoISection").style.display = "none";
    document.getElementById("cantoIIISection").style.display = "none";
    document.getElementById("cantoVSection").style.display = "none";
    document.getElementById("cantoVISection").style.display = "none";
    document.getElementById("cantoXSection").style.display = "none";
    document.getElementById("cantoXIIISection").style.display = "block";
    document.getElementById("cantoXVSection").style.display = "none";

    document.getElementsByClassName("control-1")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-2")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-3")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-4")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-5")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-6")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-7")[0].style.backgroundColor = "rgb(7, 119, 7)";
    document.getElementsByClassName("control-8")[0].style.backgroundColor = "rgb(69,78,86)";
    sessionStorage.removeItem("lastUsed");
    sessionStorage.setItem("lastUsed", 7); 
}

function cantoXVSectionActive() {
    document.getElementById("mainSection").style.display = "none";
    document.getElementById("cantoISection").style.display = "none";
    document.getElementById("cantoIIISection").style.display = "none";
    document.getElementById("cantoVSection").style.display = "none";
    document.getElementById("cantoVISection").style.display = "none";
    document.getElementById("cantoXSection").style.display = "none";
    document.getElementById("cantoXIIISection").style.display = "none";
    document.getElementById("cantoXVSection").style.display = "block";

    document.getElementsByClassName("control-1")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-2")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-3")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-4")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-5")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-6")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-7")[0].style.backgroundColor = "rgb(69,78,86)";
    document.getElementsByClassName("control-8")[0].style.backgroundColor = "rgb(7, 119, 7)";
    sessionStorage.removeItem("lastUsed");
    sessionStorage.setItem("lastUsed", 8); 
}



function wowWow(){
    let lUsed = sessionStorage.getItem("lastUsed");
    lastSectionUsed(lUsed);
}

function lastSectionUsed(lUsed) {
    switch (lUsed) {
        case '1':
            mainSectionActive();
            break;
        case '2':
            cantoISectionActive();
            break;
        case '3':
            cantoIIISectionActive();
            break;  
        case '4':
            cantoVSectionActive();
            break; 
        case '5':
            cantoVISectionActive();
            break;
        case '6':
            cantoXSectionActive();
            break;   
        case '7':
            cantoXIIISectionActive();
            break;     
        case '8':
            cantoXVSectionActive();
            break;
        default:
            mainSectionActive();
            break;             
    }
}