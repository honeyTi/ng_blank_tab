import { Component, OnInit } from '@angular/core';

@Component({
        // tslint:disable-next-line:component-selector
        selector: 'do-pages',
        template: '<router-outlet></router-outlet>'
})

export class PagesComponent implements OnInit {
        constructor() { }

        ngOnInit() { }
}
