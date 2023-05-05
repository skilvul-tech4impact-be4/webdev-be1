const apiUrl = "https://64527828a2860c9ed40d3b49.mockapi.io/users"
const formRegist = document.getElementById("formRegister")
const formLogin = document.getElementById("formLogin")

// Regist
if (formRegist) {
    formRegist.addEventListener("submit", async (event) => {
        event.preventDefault()
        const fname = document.getElementById("name").value
        const userEmail = document.getElementById("email").value
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        
        if (fname && userEmail && username && password && check) {
            class User {
                constructor(name, username, password, email) {
                    this.name = name
                    this.username = username
                    this.password = password
                    this.email = email
                }
            }
            const userData = new User(fname, username, password, userEmail)
                const response = await fetch(apiUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData)
                });
                const dataUser = await response.json()
                // console.log(dataUser);
                
                window.location.href = "../login/index.html";   
            }
        })    
}

// Login
if (formLogin) {
    formLogin.addEventListener('submit', async (event) => {
        event.preventDefault()
    
        const username = document.getElementById("usernameLogin").value
        const password = document.getElementById("passwordLogin").value
    
        const response = await fetch(apiUrl);
        const users = await response.json();
      
        const user = users.find(user => user.username === username && user.password === password);
        // console.log(user);
        if (user) {
            localStorage.setItem("username", username)
            window.location.href = "../index.html";
        }
    })
}