window.addEventListener("load", () =>{
    board = Array.from(document.querySelectorAll("#board >div"));
    let change =  true;


    //console.log(board);

    board.forEach(el =>{
        el.classList.add("square");
        el.onclick = () => {
            if (el.innerHTML == "X" || el.innerHTML == "O"){
                el.innerHTML = el.innerHTML;
            }
            else if (change){
                el.classList.add("X");
                el.innerHTML = "X";
                change = false;
            }
            else if(change == false){
                el.classList.add("O");
                el.innerHTML = "O";
                change = true;
            }
        }

    el.onmouseover = () => {
        el.classList.add("hover");
    }

    el.onmouseout = () => {
        el.classList.remove("hover");
    }

    });

   let button = document.getElementsByClassName ("btn")[0];
   button.onclick = () => {
       location.reload();
   }

   



});