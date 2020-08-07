export class ProductDetail {
    productId:Number;
    productName : string;
    quantity:Number;
    image:String;
    Discription:String;
    unitPrice:Number;
    Discount:Number;
    CatergoryId:Number;

    constructor(productId,productName,quantity,image,Discription,unitPrice,Discount,CatergoryId)
    {
        this.productId = productId
        this.productName = productName
        this.quantity = quantity
        this.image = image
        this.Discription = Discription
        this.unitPrice = unitPrice
        this.Discount = Discount
        this.CatergoryId = CatergoryId

    }

}















