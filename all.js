// 註冊
let registerBtn = document.querySelector('.register-submit');
registerBtn.addEventListener('click',registerMember,false);

function registerMember() {
    let registerAccount = document.querySelector('.register-account').value;
    let registerPwd = document.querySelector('.register-password').value;
    //console.log( registerAccount,registerPwd );
    let registerData = {}
    registerData.email = registerAccount;
    registerData.password = registerPwd;

    let xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send(JSON.stringify(registerData));
    xhr.onload = function(){
        if(xhr.status == 200) {
            let responseText = JSON.parse(xhr.responseText);
            alert(responseText.message);
        }else {
            alert('註冊失敗');
        }
    }

}



//登入

let loginBtn = document.querySelector('.login-submit');
loginBtn.addEventListener('click',loginMember,false);

function loginMember() {
    let loginAccount = document.querySelector('.login-account').value;
    let loginPwd = document.querySelector('.login-password').value;
    let loginData = `email=${loginAccount}&password=${loginPwd}`;
    // console.log(loginData);

    let xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send(loginData);
    xhr.onload = function(){
        if(xhr.status ==200) {
            let responseData = JSON.parse(xhr.responseText);
            alert(responseData.message);
        }else {
            alert('登入失敗!')
        }
    }
}