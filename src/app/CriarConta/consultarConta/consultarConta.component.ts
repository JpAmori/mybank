import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CriarContaComponent } from "../criarconta.component";

@Component({
    selector: 'ConsultarConta',
    templateUrl: './consultarConta.component.html',
    styleUrls: ['./consultarConta.component.css']
})
export class consultarContaComponent implements OnInit {
    
    constructor(){}
    ngOnInit(): void {}

    exibirConta():void{
        if (localStorage.getItem('BANK')) {
            /*this.user = JSON.parse(localStorage.getItem('BANK'))*/
        }
    }
}

