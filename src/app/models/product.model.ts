export interface Product
{
    product_id: number;
    product_name: string;
    product_price: number;
    product_stock: number;
    usercart_qty?: number
}