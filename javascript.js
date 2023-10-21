const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    console.log('Button clicked');
    document.body.classList.toggle('dark-mode');
     })

let responsiveBtn = document.getElementById("rbtn");
responsiveBtn.addEventListener("click", inputmsg);

function inputmsg(){
 let name = prompt("Enter the name of Student!"); 
 responsiveBtn.textContent ="User : "+ name;  
}