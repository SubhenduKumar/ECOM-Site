import { ADDITEM, DELITEM } from "./action";

const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case ADDITEM:
            //check if product is Already Exist
            const exist = state.find((item) => item.id === product.id);
            if (exist) {
                //increase the quantity
                return state.map((item) =>
                    item.id === product.id ? {...item, qty: item.qty + 1 } : item
                );
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    },
                ];
            }
            break;

        case DELITEM:
            const exist1 = state.find((item) => item.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((i) => i.id !== exist1.id);
            } else {
                return state.map((i) =>
                    i.id === product.id ? {...i, qty: i.qty - 1 } : i
                );
            }
            break;

        default:
            return state;
            break;
    }
};
export default handleCart;