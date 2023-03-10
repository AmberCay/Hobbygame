class Person {

    // set up propiedades

    private name:string;
    private nationality:string;
    private profession:string;
    private experienceYears:number;

    // constructor 
    
    constructor(name:string, nationality:string, profession:string, experienceYears:number) {
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
        this.experienceYears = experienceYears;
    }

    //methods

    public setName(newName:string) {
        this.name = newName;
    }

    public getName():string {
        return this.name
    }

    public setNationality(newNationality:string) {
        this.nationality = newNationality;
    }

    public getNationality():string {
        return this.nationality
    }

    public setProfession(newProfession:string) {
        this.profession = newProfession;
    }

    public getProfession():string {
        return this.profession
    }

    public setExpirienceYears(newExpirienceYears:number) {
        this.experienceYears = newExpirienceYears;
    }

    public getExpirienceYears():number {
        return this.experienceYears
    }

    
}