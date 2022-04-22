//For add item to Cart
export const ADDITEM = "ADDITEM";
export const DELITEM = "DELITEM";

export const addCart = (product) => {
    return {
        type: ADDITEM,
        payload: product,
    };
};


export const delCart = (product) => {
    return {
        type: DELITEM,
        payload: product,
    };
};