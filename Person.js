class person {
    constructor(name,age,sex,nationality,EducationQualification,designation){
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.nationality = nationality;
        this.educationqualification= EducationQualification ;  
        this.designation  = designation;
    }
    get Person(){
        return "Name: "+P.name+" Age: "+P.age+" Sex: "+P.sex+" Nationality: "+P.nationality+"Education: "+P.educationqualification+" Designation: "+P.designation;
    }
}

var P = new person("Manikandan","26","Male","Indian","MCA","FSD");

console.log(P.Person);
