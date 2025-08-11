const form = document.getElementById("formData");
const formBtn = document.getElementById("formBtn");
const hidePasswd = document.getElementById("hidePasswd");
const passwd = document.getElementById("password");
const passwdConfirm = document.getElementById("password-confirm");

hidePasswd.addEventListener('click', () => {
    if(passwd.type == "password"){
        passwd.type = "text";
        if(passwdConfirm != null){
            passwdConfirm.type = "text";
        }
        
    } else {
        passwd.type = "password";
        if(passwdConfirm != null){
            passwdConfirm.type = "password";
        }
    }
});

if(passwdConfirm != null){
    passwdConfirm.addEventListener("input", () => {
        if(passwd.value != passwdConfirm.value){
            passwd.classList.add("confirm-pwd");
            passwdConfirm.classList.add("confirm-pwd");
            formBtn.disabled = true;
        } else {
            passwd.classList.remove("confirm-pwd");
            passwdConfirm.classList.remove("confirm-pwd");
            formBtn.disabled = false;
        }
    });
}

form.addEventListener("submit",async (e) => {
    e.preventDefault();
    console.log("hehe");
    const formData = new FormData(form);
    const data = {
        username: formData.get("username"),
        password: formData.get("password"),
    }

    const response = await fetch('/login', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
    });
    const result = await response.json();
    if(result.success){
        window.location.href = "/beranda";
        console.log("susah coy")
    } 
    else {
        console.log(result);
    }
});
