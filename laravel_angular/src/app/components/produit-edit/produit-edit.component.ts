import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/produit';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.css']
})
export class ProduitEditComponent implements OnInit{
  id:any;
  data:any;
  produit = new Produit();

  constructor(private route:ActivatedRoute, private dataService:DataService) { }

  ngOnInit(): void{
    // console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.show(this.id).subscribe(res =>{
      // console.log(res);
      this.data = res;
      this.produit = this.data;
    });
  }

  update() {
    this.dataService.updateData(this.id, this.produit).subscribe( res => {
    });
  }
}
