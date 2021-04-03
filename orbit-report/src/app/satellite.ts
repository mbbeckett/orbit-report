export class Satellite {
    name: string;
    type: string;
    launchDate: string;
    orbitType: string;
    operational: boolean;
    // shouldShowWarning: boolean = true; 

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    // shouldShowWarning(): void{
    //     if(this.type==="Space Debris"){
    //     } else {
    //     }
 
    // }
};
