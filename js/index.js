import { Mapping } from "./mapping.js"


const route = new Mapping() 

const home = document.querySelector("a:nth-child(1)")
const explore = document.querySelector("a:nth-child(2)")
const universe = document.querySelector("a:nth-child(3)")



route.way("/","/pages/home.html")
route.way("/explore","/pages/explore.html")
route.way("/universe","/pages/universe.html")


home.addEventListener("click", route)
explore.addEventListener("click", route)
universe.addEventListener("click", route)


window.route = ()=> route.router()
route.manager()
window.onpopstate= () => route.manager()