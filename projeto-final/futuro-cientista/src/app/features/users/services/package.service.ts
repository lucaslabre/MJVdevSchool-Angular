import { Injectable } from '@angular/core';
import { Package } from '../model/package.model';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private packages: Array<Package> = [
    {
      id: 1,
      name: "básico",
      numberOfClasses: 2,
      numberOfHours: 2
    },
    {
      id: 2,
      name: "bronze",
      numberOfClasses: 2,
      numberOfHours: 3
    },
    {
      id: 3,
      name: "prata",
      numberOfClasses: 4,
      numberOfHours: 2
    },
    {
      id: 4,
      name: "ouro",
      numberOfClasses: 4,
      numberOfHours: 3
    }
  ]

  constructor() { }

  getPackages() {
    return this.packages;
  }

}
