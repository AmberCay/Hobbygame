class Platform {

    // set up propiedades

    private name:string;
    private releaseYear:number;
    private company:string;
    private nBits:number;
    private generation:number;
    private hasHD:boolean;
    private hdSize:number;
    private hasInternetConnection:boolean;
    private storageDevice:string;
    private color:string;

    // constructor

    constructor(name:string, releaseYear:number, nBits:number, generation:number, hasHD:boolean, hdSize:number, hasInternetConnection:boolean, storageDevice:string, color:string) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.nBits = nBits;
        this.generation = generation;
        this.hasHD = hasHD;
        this.hdSize = hdSize;
        this.hasInternetConnection = hasInternetConnection;
        this.storageDevice = storageDevice;
        this.color = color;
    }
}