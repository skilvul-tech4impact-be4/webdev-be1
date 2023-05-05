import { generateKelas } from "./kelas.js";
generateKelas()


const dataLogin = localStorage.getItem("username")
        console.log(dataLogin);
        if (dataLogin) {
            const nav = document.getElementById("login-register")           
            const navLogin = document.getElementById("isLogin")
            const dashboard = document.getElementById("dashboardMenu")
            const btnGabung = document.getElementById("btnGabung")
            const btnHero = document.getElementById("btnHero")
            
            nav.style.display = "none";
            navLogin.style.display = "block";
            dashboard.style.display = "block";
            btnGabung.style.display = "none";
            btnHero.style.display = "block";
        }

const btnLogout = document.getElementById("logout")
btnLogout.addEventListener("click", async () => {
    localStorage.removeItem("username")
    location.reload()
})