import React, { useState, useEffect } from "react";
import {useDispatch} from 'react-redux'
import { addCart,delCart } from "../redux/action";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import { useSelector } from "react-redux";


const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartBtn,setCartbtn]=useState("Add To Cart")
//   const state = useSelector((state) => state.handleCart);
  //   useEffect(() => {
  //     const getProduct = async () => {
  //         setLoading(true);
  //       try {
  //         const resp = await axios.get(`http://fakestoreapi.com/products/`);
  //         setProduct(await resp.json());
  //         setLoading(false);
  //         console.log(setProduct());
  //       } catch (err) {
  //         setProduct([]);
  //         console.log(err);
  //       }
  //     };
  //     getProduct();
  //   }, [id]);

const dispatch=useDispatch();

const hanldleTheCart=(product)=>{
  
    if (cartBtn==="Add To Cart"){
        dispatch(addCart(product));
        setCartbtn("Remove From Cart")
    }
    else if(cartBtn==="Remove From Cart")
    {
        setCartbtn("Add To Cart")
        dispatch(delCart(product))     
    }
    // else if(state===product){
    //     console.log(state,"asd");
    //     setCartbtn("Remove From Cart")
    // }
}


  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await resp.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
            <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{lineHeight:2}}>
            <Skeleton height={50} width={300} />
            <Skeleton height={70}  />
            <Skeleton height={25} width={150} />
            <Skeleton height={50}  />
            <Skeleton height={110}  />
            <Skeleton height={50} width={100} style={{marginLeft:6}} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
      
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.id}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5"> {product.title}</h1>
            <p className="lead fw-bolder">
              rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">
                ${product.price}
            </h3>
            <p className="lead">{product.description}</p>
            <button className="btn btn-outline-dark" onClick={()=>hanldleTheCart(product)}>
            {cartBtn}
            </button>
            <NavLink  to="/cart" className="btn btn-dark ms-2 px-3">
                Go to Cart
            </NavLink>
         
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4 ">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;


//44.49 before