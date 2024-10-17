export type customers={
    _id: number | string,
    first_name: string,
    last_name: string,
    email: string,
    number: number | string,
    store_name: string,
    address: string,
    isActivated: boolean
}


// export type Invoice = {
//     id: string;
//     customer_id: string;
//     amount: number;
//     date: string;
//     // In TypeScript, this is called a string union type.
//     // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
//     status: 'pending' | 'paid';
//   };