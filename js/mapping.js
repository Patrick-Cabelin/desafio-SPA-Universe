export class Mapping{
    

    manager(){
        const { pathname} = window.location
        const route = this.router[pathname] || this.router["/"]
        fetch(route).then((infoPage)=>infoPage.text())
        .then(infoPage => {
           const main = document.querySelector("#app")
           main.innerHTML = infoPage

        })
        
    }

    router(event){
      console.log("KKARALHO FINUNCIONAD KACETE NDE NOTE DO KAREI")
      event = event || window.event
      event.preventDefault()
      window.history.pushState({}, "", event.target.href)
      console.log(event)
      
      this.manager()
      this.changeBackground()
    }

    way(wayName, page){
        this.router[wayName] = page
       
    }
 
    changeBackground(){
      const body = document.querySelector('body')
      let { href, pathname } = window.location
     console.log(pathname,'ai papaii', href)

      
      switch (pathname) {
        case '/':
          body.style.backgroundColor = "red"
          break
        case '/explore':
          body.style.backgroundColor = "green"
          break
        case '/universe':
          body.style.backgroundColor = "blue"
        default:
          break
      }

    }
}

