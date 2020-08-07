<template>
    <div class="app-navbar">
        <div class="navbar">
            <div class="logo">
                <h1 class="logo-text">Weatherless</h1>
                <img src="../../public/ham..png" class="ham-logo">
            </div>
            <div class="nav-links">
                <nav>
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about">About the system </router-link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
* {
    margin: 0px;
    padding:0px;
    box-sizing: border-box;
}
.navbar {
    border: none;
    width: 100vw;
    height: 9vh;
    box-shadow: 0px 13px 35px -12px rgba(0,0,0,0.15);
    display: grid;
    grid-template-columns: 1fr 1fr;
}
@media query{
    
}
.logo {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-left: 110px;
}
.ham-logo {
    width: 38px;
    height: 38px;
    margin-left: 10px;
    margin-top: 1px;
}
.logo-text{
    margin-left:10px;
    font-size: 26px;
    margin-top: 1px;
    color: #707070;
}
.nav-links nav ul {
    display: flex;
    align-content: center;
    align-items: center;
}
.nav-links nav ul li {
    padding: 0px 15px;
    list-style: none;
    font-size: 19px;
    margin-top: 15px;
}
.nav-links nav ul li a:hover {
    color: #4A69BB;
}
.nav-links nav ul li a {
    text-decoration: none;
    color: #707070;
}
.arrow-down {
    width: 12px;
}
.btn-link {
    border: 1px solid rgb(92, 147, 218);
    padding: 4px 10px;
    background: rgb(92, 147, 218);
    color: #ffff !important;
}
</style>