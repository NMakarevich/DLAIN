let loginForm = document.querySelector(".login-form");
let profileUrl = "profile.html"
let loginName = document.querySelector("input[name=login]");
let loginPassword = document.querySelector("input[name=password]");
let wrongLogin = document.querySelector(".wrong-login");

let login = {
	"name": "password"
};

loginForm.onsubmit = function (evt) {
	evt.preventDefault();

	if (loginName.value in login) {
		if (loginPassword.value === login.name) {
			document.location.href = profileUrl;
		}
		else {
			loginPassword.value = '';
			loginName.style.borderColor = 'red';
			loginPassword.style.borderColor = 'red';
			wrongLogin.classList.toggle('hidden');
		}
	}
	else {
		loginName.style.borderColor = 'red';
		loginPassword.style.borderColor = 'red';
		wrongLogin.classList.toggle('hidden');
	}
}

