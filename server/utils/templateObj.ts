export type porjectInterface = {
    porjectName:Array<string>,
    porjectDescription:string
}

interface temp_1ObjInterface {
    name:string,
    bio:string,
    experience:string,
    skills:string[],
    languages:string[],
    contacts:string[],
    education:string,
    projects:porjectInterface[]
}

export const temp_1Obj:temp_1ObjInterface = {
    name: 'soumyadeep mondal',
    bio:'should 180 char',
    experience:`should 130 char`,
    skills:[],
    languages:[],
    contacts:[],
    education:`should 130 char`,
    projects: [  
        {
            porjectName:['should 70 char'],
            porjectDescription:`should 230 char projects u should use only 4`
        }
    ]
}
