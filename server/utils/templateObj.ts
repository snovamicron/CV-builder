export type porjectInterface = {
    porjectName:string[],
    porjectDescription:string
}

export class temp_1Obj {
    constructor(
    name:string,
    bio:string,
    experience:string,
    skills:string[],
    languages:string[],
    contacts:string[],
    education:string,
    projects:porjectInterface[]
    ){
        this.name = name
        this.bio = bio
        this.experience = experience
        this.skills = skills
        this.languages = languages
        this.contacts = contacts
        this.education = education
        this.projects = projects 
    }
    name:string;
    bio:string;
    experience:string;
    skills:string[];
    languages:string[];
    contacts:string[];
    education:string;
    projects:porjectInterface[]
}


export class temp_2Obj {
    constructor(
    name:string,
    address:string,
    contact_number:string,
    email:string,
    Career_Objective:string,
    Educational_Qualification:string,
    Work_Experience:string,
    dob:string,
    Father_Name:string,
    sex:string,
    Marital_Status:string,
    Languages_Known:string,
    Nationality:string,
    Hobbies_Interest:string,
    Declaration:string,
    place:string,
    date:string,
    Technical_Skills:string[]
    ){
        this.name = name
        this.address = address
        this.contact_number = contact_number
        this.email = email
        this.Career_Objective = Career_Objective
        this.Educational_Qualification = Educational_Qualification
        this.Work_Experience = Work_Experience
        this.dob = dob, 
        this.Father_Name = Father_Name, 
        this.sex = sex, 
        this.Marital_Status = Marital_Status, 
        this.Languages_Known = Languages_Known, 
        this.Technical_Skills = Technical_Skills, 
        this.Nationality = Nationality, 
        this.Hobbies_Interest = Hobbies_Interest, 
        this.Declaration = Declaration,
        this.place = place,
        this.date = date
    }
    name:string;
    address:string;
    contact_number:string;
    email:string;
    Career_Objective:string;
    Educational_Qualification:string;
    Work_Experience:string;
    dob:string;
    Father_Name:string;
    sex:string;
    Marital_Status:string;
    Languages_Known:string;
    Technical_Skills:string[];
    Nationality:string;
    Hobbies_Interest:string;
    Declaration:string;
    place:string;
    date:string;
}


