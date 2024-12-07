//your JS code here. If required.
function handleLogin(){
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const checkbox = document.getElementByID('checkbox').checked;

	if(checbox){
		localStorage.setItem('username', username);
		localStorage.setItem('password', password)
	}else{
		localStorage.removeItem("username");
		localStorage.removeItem("password");
	}
	alert("Logged is as " + username);

	const savedUsername = localStorage.getItem("username");
     if (savedUsername) {
    document.getElementById("existing").style.display = "block";
  }
}
function handleExistingLogin() {
  const savedUsername = localStorage.getItem("username");
  alert("Logged in as " + savedUsername);
}