/**
* @license
* Copyright Larry Diamond 2017 All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://github.com/larrydiamond/typescriptcollectionsframework/LICENSE
*/
import {Collectable} from "../src/Collectable";
import {CollectionUtils} from "../src/CollectionUtils";
import {Comparator} from "../src/Comparator";
import {NaiveMap} from "../src/NaiveMap";

describe("Test NaiveMap functionality", function() {

  // PetStoreProduct will be used in testing
  class PetStoreProduct {
    private productName:string;
    private price:number;

    public constructor (iName:string, iPrice:number) {
      this.productName = iName;
      this.price = iPrice;
    }

    public getProductName ():string {
      return this.productName;
    }

    public getPrice():number {
      return this.price;
    }
  };

  let product2:PetStoreProduct = new PetStoreProduct("ChewToy", 14.99);
  let product1:PetStoreProduct = new PetStoreProduct("Catnip", 4.99);
  let product3:PetStoreProduct = new PetStoreProduct("Goldfish", 9.99);

  let alphabeticalSortPetStoreProduct:Comparator<PetStoreProduct> = {
    compare(o1:PetStoreProduct, o2:PetStoreProduct) : number {
      if (o1 === o2)
        return 0;
      if (o1 === null)
        return -1;
      if (o1 === undefined)
        return -1;
      if (o2 === null)
        return 1;
      if (o2 === undefined)
        return 1;
      if (o1.getProductName() === o2.getProductName())
        return 0;
      if (o1.getProductName() === null)
        return -1;
      if (o1.getProductName() === undefined)
        return -1;
      if (o2.getProductName() === null)
        return 1;
      if (o2.getProductName() === undefined)
        return 1;

      if (o1.getProductName() < o2.getProductName())
        return -1;

      return 1;
    }
  }

  let priceSortPetStoreProduct:Comparator<PetStoreProduct> = {
    compare(o1:PetStoreProduct, o2:PetStoreProduct) : number {
      if (o1 === o2)
        return 0;
      if (o1 === null)
        return -1;
      if (o1 === undefined)
        return -1;
      if (o2 === null)
        return 1;
      if (o2 === undefined)
        return 1;
      if (o1.getPrice() === o2.getPrice())
        return 0;
      if (o1.getPrice() === null)
        return -1;
      if (o1.getPrice() === undefined)
        return -1;
      if (o2.getPrice() === null)
        return 1;
      if (o2.getPrice() === undefined)
        return 1;

      if (o1.getPrice() < o2.getPrice())
        return -1;

      return 1;
    }
  }

  // Wanted to show a class in the value object but anything would work fine
  class ValueClass {
    blah1:number;
    blah2:string;
  }

  it("Test Creation state", function() {
    let naiveMap1:NaiveMap<PetStoreProduct,ValueClass> = new NaiveMap<PetStoreProduct,ValueClass> (alphabeticalSortPetStoreProduct);
    expect (naiveMap1.size ()).toEqual(0);

    let naiveMap2:NaiveMap<string,number> = new NaiveMap<string,number>(CollectionUtils.getStringComparator());
    expect (naiveMap2.size ()).toEqual(0);
  });

  it("Test Adding some items", function() {
    let petStoreMap1:NaiveMap<PetStoreProduct,ValueClass> = new NaiveMap<PetStoreProduct,ValueClass> (alphabeticalSortPetStoreProduct);
    let petStoreMap2:NaiveMap<PetStoreProduct,ValueClass> = new NaiveMap<PetStoreProduct,ValueClass> (priceSortPetStoreProduct);
    let basicTypesMap1:NaiveMap<string,number> = new NaiveMap<string,number>(CollectionUtils.getStringComparator());
    let basicTypesMap2:NaiveMap<number,string> = new NaiveMap<number,string>(CollectionUtils.getNumberComparator());

    petStoreMap1.put (product1, new ValueClass());
    petStoreMap1.put (product2, new ValueClass());
    petStoreMap1.put (product3, new ValueClass());
    expect (petStoreMap1.size ()).toEqual(3);

    petStoreMap2.put (product1, new ValueClass());
    petStoreMap2.put (product2, new ValueClass());
    expect (petStoreMap2.size ()).toEqual(2);

    basicTypesMap1.put ("ChewToy", 14.99);
    basicTypesMap1.put ("Catnip", 4.99);
    basicTypesMap1.put ("Goldfish", 9.99);
    basicTypesMap1.put ("AAAAA", 0.99);
    expect (basicTypesMap1.size ()).toEqual(4);

    basicTypesMap2.put (14.99, "ChewToy");
    basicTypesMap2.put (4.99, "Catnip");
    basicTypesMap2.put (9.99, "Goldfish");
    basicTypesMap2.put (0.99, "AAAAA");
    basicTypesMap2.put (5.99, "BBBBB");
    expect (basicTypesMap2.size ()).toEqual(5);
  });




});