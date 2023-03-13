let userName = document.getElementById("userName");
let phoneNumber = document.getElementById("phoneNumber");
let date = document.getElementById("date");

let submit = document.getElementById("submit");
let btn= document.querySelector(".btn")

let info = document.querySelector(".info")
let input = document.querySelectorAll(".input")


let checkForm = () => {
    let name = userName.value
    let number = phoneNumber.value
    let dt = date.value
    console.log(dt)
    let pass = true;
    if(dt === "" || !(/^\d{4}\-\d{2}\-\d{2}$/.test(dt))){
        info.textContent = "Enter date format correctly. "
        pass = false
    }
    if(!/^[1-9]\d{9}$/.test(number)){
        info.textContent = "Enter 10 numbers and number should not start with 0. Your number length : " + number.length;
        pass = false
    }
    if(!/^[A-Za-z][.\sA-Za-z]*$/.test(name)){
        console.log(info.textContent);
        info.textContent = "Enter Username correctly. First letter should be alphabet. Only alphabets and spaces allowed."
        pass = false
    }
    if(pass === false){
        info.style.visibility = "visible"
        info.style.backgroundColor = "red"
        info.style.color = "white"

    }
    return pass;
}
submit.addEventListener('click', () => {
    if(checkForm){
        info.textContent = "Submitted succesfully"
        info.style.visibility = "visible"
        info.style.backgroundColor = "green"
        info.style.color = "white"
        console.log("Submitted succesfully")
    }
})

submit.addEventListener('mouseenter', () => {
    if(!checkForm()){
        let align = getComputedStyle(btn).textAlign;
        if(align === "center" || align === "right"){
            btn.style.textAlign = "left"
        }else {
            btn.style.textAlign = "right"
        }
    }
})


input.forEach(ele => {
    ele.addEventListener("change", () => {
        btn.style.textAlign = "center"
        info.style.visibility = "hidden"
        console.log("changed");
    })

})
