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
