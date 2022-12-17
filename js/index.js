import { Mapping } from "./mapping.js"


const route = new Mapping() 

route.way("/","/pages/home.html")
route.way("/explore","/pages/explore.html")
route.way("/universe","/pages/universe.html")

route.manager()
