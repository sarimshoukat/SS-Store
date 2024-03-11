import React from 'react'
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";
import { BsEye } from 'react-icons/bs';
// import { useAuth0 } from "@auth0/auth0-react";
import Productdetail from './ProductDetail'
import './Product.css'
const Product = ({product, setProduct, detail, view, close, setClose, addtocart}) => {

    const { loginWithRedirect, isAuthenticated  } = useAuth0();

    // const { loginWithRedirect,isAuthenticated} = useAuth0();
    const filterProduct = (product) =>
    {
        const update = Productdetail.filter((x) => 
        {
            return x.Cat === product;
        })
        setProduct(update);
    }
    const allProducts = () => 
    {
        setProduct(Productdetail)
    }
return (
    <>
            {
        close ?
        <div className='product_detail'>
        <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
            {
                detail.map((curElm) => 
                {
                    return(
                        <div className='productbox' key={curElm.id}>
                            <div className='img-box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <h4>{curElm.Cat}</h4>
                                <h2>{curElm.Title}</h2>
                                <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8... </p>
                                <h3>{curElm.Price}</h3>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className='productbox'></div>
        </div>
    </div> : null
    }
            <div className="products">
                <h2>Products</h2>
                <p>Home. products</p>
                <div className="container">
                    <div className="filter">
                        <div className="categories">
                            <h3>Categories</h3>
                            <ul>
                                <li onClick={() => allProducts ()}>All Products</li>
                                <li onClick={() => filterProduct ("Mobile")}>Mobile</li>
                                <li onClick={() => filterProduct ("Laptop")}>Laptop</li>
                                <li onClick={() => filterProduct ("Gaming")}>Gaming</li>
                                <li onClick={() => filterProduct ("Headphone")}>Headphone</li>
                                <li onClick={() => filterProduct ("Powerbank")}>Powerbank</li>
                            </ul>
                        </div>
                    </div>
                    <div className="product_box">
                        <div className="content">
                            {
                                product.map((curElm) => 
                                {
                                    return(
                                        <>
                                            <div className="box" key={curElm.id}>
                                                <div className="img_box">
                                                    <img src={curElm.Img} alt={curElm.Title}></img>
                                                    <div className="icon">
                                                        {
                                                            isAuthenticated ?
                                                                <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                                                                :
                                                                <li onClick={() => loginWithRedirect}><AiOutlineShoppingCart /></li>
                                                        }
                                                        <li onClick={() => view (curElm)}><BsEye /></li>
                                                        <li><AiOutlineHeart /></li>
                                                    </div>
                                                </div>
                                                <div className="detail">
                                                    <p>{curElm.Cat}</p>
                                                    <h3>{curElm.Title}</h3>
                                                    <h4>Rs. {curElm.Price}</h4>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Product