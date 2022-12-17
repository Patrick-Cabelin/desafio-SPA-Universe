export class Mapping{
   
  

    manager(){
        const { pathname} = window.location
        const route = this.router[pathname] || this.router["/"]
        fetch(route).then((infoPage)=>infoPage.text())
        .then(infoPage => {
           const main = document.querySelector("#app")
           main.innerHTML = infoPage

        })
        this.changeBackground()
    }

    router(event){
   
      event = event || window.event
      event.preventDefault()
      window.history.pushState({}, "", event.target.href)
    
      
      this.manager()
     
    }

    way(wayName, page){
        this.router[wayName] = page
       
    }
 
    changeBackground(){
      const body = document.querySelector('body')
      let { pathname } = window.location

      
      switch (pathname) {
        case '/':
          body.style.background = "url(./assets/mountains-universe-1.png)"
          body.style.backgroundSize= "100% 100vh"
          this.boldLink()
          break
        case '/explore':
          body.style.background = "url(./assets/mountains-universe-2.png)"
          body.style.backgroundSize= "100% 100vh"
          this.boldLink()
          break
        case '/universe':
          body.style.background = "url(./assets/mountains-universe-3.png)"
          body.style.backgroundSize= "100% 100vh"
          this.boldLink()
        default:
          break
      }

    }

    boldLink(){
      let { pathname } = window.location

      switch (pathname){
        case '/':
          document.querySelector(`.menu nav a:nth-child(2)`).classList.toggle('bold')
          break
        
        case'/explore':
        document.querySelector(`.menu nav a:nth-child(3)`).classList.toggle('bold')
          break
        case '/universe':
          document.querySelector(`.menu nav a:nth-child(4)`).classList.toggle('bold')
          break
      }
    }
}

