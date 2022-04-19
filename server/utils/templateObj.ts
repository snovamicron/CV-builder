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


