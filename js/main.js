const design = document.getElementById("design");
const designWording = document.querySelector(".DesignWording");


design.onclick = function(){
    designWording.style.display = "block";  
    design.style.display = "none";

  
}

const development = document.getElementById("development");
const developmentWording = document.querySelector(".DevelopmentWording");

development.onclick = function(){
    developmentWording.style.display = "block";
    development.style.display = "none";


}


const product = document.getElementById("product");
const productWording = document.querySelector(".ProductWording");


product.onclick = function(){
    productWording.style.display = "block";
    product.style.display = "none";


}

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.querySelector(".btn-primary");


submit.addEventListener("click", (e) =>{
    e.preventDefault();
    inputExist();
});

function inputExist(){
    let nameInput = name.value;
    let emailInput = email.value;
    let messageInput = message.value;

    if(nameInput == "" || emailInput == "" || messageInput == "" ){
        alert("please fill in your credentials!!!");
    }
    else{
        alert(nameInput + "" + "We have received your message." + "" + "Thank you for reaching us to us");
    }
    
    
}



















