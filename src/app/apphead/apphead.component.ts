import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-head]',
  templateUrl: './apphead.component.html',
  styleUrls: ['./apphead.component.css']
})
export class AppheadComponent implements OnInit {
  title = 'Defective Shopping App';
  constructor() { }

  ngOnInit(): void {



    let glowingText = async () => {

      //let switchCo = new switchColor();
      setInterval(() => {

       let elem = document.querySelector("#appheadtext");

       let curColor = elem.getAttribute("class");
       if(curColor == "text-light"){
         elem.removeAttribute("class");
         elem.textContent = "Defective APP Online";
         elem.setAttribute("class", "text-dark");
       }else{
         elem.removeAttribute("class");
         elem.textContent = "Defective APP Offline"
         elem.setAttribute("class", "text-light");
       }


      }, 5000);
    };

   window.onload = () => {
     glowingText();
   }


  }




}
