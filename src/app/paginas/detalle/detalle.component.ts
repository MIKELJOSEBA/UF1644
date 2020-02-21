import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  id: number;

  constructor(private route: ActivatedRoute) {
    this.id = 0;

    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit() {
  }

}
