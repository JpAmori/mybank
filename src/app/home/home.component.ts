import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'HomeComponents',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    ngOnInit(): void {
        
    }

    mensagem: string = '';
    
}