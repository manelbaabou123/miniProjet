import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/produit';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits:any;
  produit = new Produit();

  constructor(private dataService:DataService) {}

  ngOnInit(): void {
    this.getProduitsData();
  }

  getProduitsData() {
    this.dataService.getData().subscribe(res =>{
      this.produits = res;
    });
  }

  insertData(){
    this.dataService.insertData(this.produit).subscribe(res => {
      this.getProduitsData();
    });
  }

  destroyData(id:any) {
    this.dataService.destroyData(id).subscribe(res => {
      this.getProduitsData();
    });
  }

}
