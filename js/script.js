// For Navbar Functionlity
var navbar =  document.querySelector("#wrap")
window.addEventListener("scroll",()=>{
    if(document.documentElement.scrollTop>50){
        navbar.classList.add("navbar-scroll")
    }
    else{
        navbar.classList.remove("navbar-scroll")
    }
})

window.addEventListener("load",()=>{
    if(document.documentElement.scrollTop>50){
        navbar.classList.add("navbar-scroll")
    }
    else{
        navbar.classList.remove("navbar-scroll")
    }
})
// Form Validation Functionlity
var Name =  document.querySelector("#Name")
var Email =  document.querySelector("#Email")
var Numberinput =  document.querySelector("#Numberinput")
var Date =  document.querySelector("#Date")
var Book = document.querySelector("#Book")


Book.addEventListener("click" , (e)=>{
    e.preventDefault()
if(Name.value == ""){
    alert("Please Fill Name")
}
else if(Email.value == ""){
    alert("Please Fill Email")
}
else if(Numberinput.value == ""){
    alert("Please Fill Number")
}
else if(Date.value == ""){
    alert("Please Fill Date")
}
else if(Name.value != "" && Email.value != "" && Numberinput.value != "" && Date.value != ""  ){
    alert("Successfully Data Added")
}
})