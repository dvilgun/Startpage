let compteur = 0;
document.getElementById("test").addEventListener("click", egg, true);

function egg(){
    compteur += 1;
    if (compteur === 10){
        document.location.href="https://www.youtube.com/watch?v=ICcFMBzOnYs";
    }
    //https://www.youtube.com/watch?v=ICcFMBzOnYs
}