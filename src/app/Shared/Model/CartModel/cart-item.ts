
export interface ICartItem {
    
        productId:number;
        productName:string;
        quantity:number;
        unitPrice:number;
        availability:string;
        image:string;
        discount:number;
        description:string;
    
    
}



export class CartItem implements ICartItem {
        productId:number;
        productName:string;
        quantity:number;
        unitPrice:number;
        availability:string;
        image:string;
        discount:number;
        description:string;
        
    constructor(postData: any) {
        this.productId = postData.productId;
        this.productName = postData.productName;
        this.quantity = postData.quantity;
        this.unitPrice = postData.unitPrice;
        this.availability = postData.availability;
        this.image = postData.discount;
        this.description = postData.description;
        this.discount = postData.discount;
        this.availability = postData.availability;
    
    
    }
}

