function vehicle(manufacturer: string, modelName: string, ...infoInPairs: any[]): object {
    let carInfo: any = {
      manufacturer: manufacturer,
      modelName: modelName,
    };
  
    for (let i = 0; i < infoInPairs.length; i += 2) {
      let key = infoInPairs[i];
      let value = infoInPairs[i + 1];
      carInfo[key] = value;
    }
  
    return carInfo;
  }
  
  let car2 = vehicle("Honda", "Civic", "Color", "Silver", "Year", 2023);
  console.log(car2);
