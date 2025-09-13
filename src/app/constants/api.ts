import { environment } from "src/environments/environment";

export const api = {
    'login': environment.appUrl + 'authentication/login',
    'fetchProducts': environment.appUrl + 'products/fetchProducts',
    'fetchUserCart': environment.appUrl + 'checkout/fetchUserCart',
    'addToCart': environment.appUrl + 'checkout/addToCart',
    'changeUserProductQty': environment.appUrl + 'checkout/changeUserProductQty',
    'createOrder': environment.appUrl + 'order/createOrder',
    'fetchOrders': environment.appUrl + 'order/fetchOrders',
    'cancelOrder': environment.appUrl + 'order/cancelOrder',
}