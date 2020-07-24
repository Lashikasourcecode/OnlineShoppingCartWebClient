export class CustomerDetails {
    Password:string;
    FirstName:string;
    LastName:string;
    BilingAddress:string;
    DeliveryAddress:string;
    DeliveryCity:string;
    MobileNo:string;
    Email:string;

    constructor(Password,FirstName,LastName,BilingAddress,DeliveryAddress,DeliveryCity,MobileNo,Email)
    {
        this.Password =Password;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.BilingAddress = BilingAddress;
        this.DeliveryAddress = DeliveryAddress;
        this.DeliveryCity = DeliveryCity;
        this.MobileNo = MobileNo;
        this.Email = Email;
    }

}
