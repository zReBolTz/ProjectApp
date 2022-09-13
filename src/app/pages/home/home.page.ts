import { Component, OnInit } from '@angular/core';
import { CardsHomeComponent } from '../cards-home/cards-home.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  resetarcor1(ativo: string){
      var cor1 = <HTMLDivElement> document.getElementById('cor1')
      var cor2 = <HTMLDivElement> document.getElementById('cor2')
      var cor3 = <HTMLDivElement> document.getElementById('cor3')
      var cor4 = <HTMLDivElement> document.getElementById('cor4')
      var cor5 = <HTMLDivElement> document.getElementById('cor5')

    switch(ativo){

    case "box1":
      
      cor2.classList.add("box2")
      cor3.classList.add("box3")
      cor4.classList.add("box4")
      cor5.classList.add("box5")
 console.log("teste1")
    break;

    case "box2":


      cor1.classList.add("box1")
      cor3.classList.add("box3")
      cor4.classList.add("box4")
      cor5.classList.add("box5")
      console.log("teste2")
    break;

    case "box3":

      cor1.classList.add("box1")
      cor2.classList.add("box2")
      cor4.classList.add("box4")
      cor5.classList.add("box5")

    break;

    case "box4":
      
      cor1.classList.add("box1")
      cor2.classList.add("box2")
      cor3.classList.add("box3")
      cor5.classList.add("box5")

    break;

    case "box5":
 
      
      cor1.classList.add("box1")
      cor2.classList.add("box2")
      cor3.classList.add("box3")
      cor4.classList.add("box4")

    break;
    }
  }


  transicao () {

      var div = <HTMLDivElement> document.getElementById('slider')   
     div.style.cssText = 'transform: translateX(0%);' 
     
     var cor = <HTMLDivElement> document.getElementById('cor1')  
     cor.classList.add("active") 

     this.resetarcor1("box1")
      }

      

  transicao1 () {

  var div = <HTMLDivElement> document.getElementById('slider')   
 div.style.cssText = 'transform: translateX(-20%);'   
 console.log(div.style.cssText)
 

 
 var cor = <HTMLDivElement> document.getElementById('cor2')  
     cor.classList.add("active") 

     this.resetarcor1("box2")
  }

  transicao2 () {

      var div = <HTMLDivElement> document.getElementById('slider')   
     div.style.cssText = 'transform: translateX(-40%);'   
     console.log(div.style.cssText)
     var cor = <HTMLDivElement> document.getElementById('cor3')  
     cor.classList.add("active")  


     var cor5 = <HTMLDivElement> document.getElementById('cor1')  
cor5.style.cssText = "opacity: 0.3;"
     this.resetarcor1("box3")
      }


      transicao3() {

          var div = <HTMLDivElement> document.getElementById('slider')   
         div.style.cssText = 'transform: translateX(-60%);'   
         console.log(div.style.cssText) 

         var cor = <HTMLDivElement> document.getElementById('cor4')  
     cor.classList.add("active")
     
     this.resetarcor1("box4") 
          }

          transicao4 () {

              var div = <HTMLDivElement> document.getElementById('slider')   
             div.style.cssText = 'transform: translateX(-80%);'   
             console.log(div.style.cssText)
             
             var cor = <HTMLDivElement> document.getElementById('cor5')  
     cor.classList.add("active") 

     this.resetarcor1("box5")
              }
  

             
  

}
