import { Component, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";

@Component({
    selector: 'HomeComponents',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    ngOnInit(): void {
        
    }
    
    constructor(private router: Router){}
 
    createAccount(){
        this.router.navigate(['/CriarConta'])
    }
}