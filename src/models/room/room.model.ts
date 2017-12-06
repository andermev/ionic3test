export interface Room {
    key? : string;
    image? : string;
    name : string;
    numberSeats : number;
    location : string;
    lastCleanUp? : Date;
    busy : boolean;   
}