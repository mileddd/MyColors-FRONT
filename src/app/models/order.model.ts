export interface Order
{
    order_id: number;
    order_date: number;
    order_status: string;
    order_details: any[];
    order_amount: any,
    order_canceled: boolean
}