export class IRegisterAdmin {
    public username : string;
    public email : string;
    public password : string;
    public phone : number;
    public address : string;
    public firstname : string;
    public lastname : string;
    public state : string;
}

export class IRegisterStudent {
    public username : string;
    public email : string;
    public password : string;
    public phone : number;
    public address : string;
    public firstname : string;
    public lastname : string;
    public state : string;
    public level : number;
    public date : Date;
    public deptId : number;
    public role : string;    
}

export class IUpdateStudent{
    public id : number;
    public level : number;
    public firstname : string;
    public password : string;
    public lastname : string;
    public phone : number;
}

export class IAddResult {
    public score : number;
    public semester : number;
    public CourseId : number;
    public StudentId : number;    
}

export class IUpdateResult {
    public score : number;
    public semester : number;
}

export class ILogin {
    public username : string;
    public password : string;
}

export class IEnroll {

    public stdId : number;
    public cosIds : Array<number>;
}
