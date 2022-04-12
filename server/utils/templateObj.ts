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


// this is important information

// export const temp_1Obj:temp_1ObjInterface = {
//     name: 'soumyadeep mondal',
//     bio:'should 180 char',
//     experience:`should 130 char`,
//     skills:[],
//     languages:[],
//     contacts:[],
//     education:`should 130 char`,
//     projects: [  
//         {
//             porjectName:['should 70 char'],
//             porjectDescription:`should 230 char projects u should use only 4`
//         }
//     ]
// }
