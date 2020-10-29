import {Component, OnInit} from '@angular/core';
import { MenuService } from '../../../service/Menu.service';

@Component({
    selector: 'app-menu',
    templateUrl: './Menu.component.html',
    styleUrls: ['./Menu.component.scss']
})
export class Menu implements OnInit {

    dailyMenu: any;
    dailyMenuOption: number;

    constructor(private menu: MenuService){}

    ngOnInit(): void {
        let h = (new Date()).getHours();
        this.dailyMenuOption = (h>=10 ? 1 : 0) + (h>=15 ? 1 : 0);
        this.menu.getDailyMenu().subscribe(
            data => {
                this.dailyMenu = data;
            },
            err => {
                console.log(err.error);
                this.dailyMenu = null;
            }
        );
    }

    nextOption(k:number): void{
        let v = this.dailyMenuOption+k;
        this.dailyMenuOption = (v<0) ? 2 : v%3;
    }
}
