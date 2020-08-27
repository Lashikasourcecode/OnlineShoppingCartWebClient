

export interface IUser{
    customerId:number;
    //Password:string;
    firstName:string;
    lastName:string;
    bilingAddress:string;
    deliveryAddress:string;
    deliveryCity:string;
    mobileNo:string;
    email:string;
}

export class User implements IUser {
    customerId:number;
    //Password:string;
    firstName:string;
    lastName:string;
    bilingAddress:string;
    deliveryAddress:string;
    deliveryCity:string;
    mobileNo:string;
    email:string;
    constructor(postData: any) {
        this.customerId = postData.customerId;
        this.firstName = postData.firstName;
        this.lastName = postData.lastName;
        this.bilingAddress = postData.bilingAddress;
        this.deliveryAddress = postData.deliveryAddress;
        this.mobileNo = postData.mobileNo;
        this.email = postData.email;
    }
}
