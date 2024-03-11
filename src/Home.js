import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsCurrencyDollar, BsEye } from 'react-icons/bs'
import { FiTruck } from 'react-icons/fi'
import { TbShoppingCartDiscount } from 'react-icons/tb'
import { BiHeadphone } from 'react-icons/bi'
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineCloseCircle } from 'react-icons/ai'
import './Home.css'
import HomeProduct from './HomeProduct'

const Home = ({detail, view, close, setClose, addtocart}) => {
    // const [HomeProduct, setHomeProduct] = useState(HomeProduct)
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
        <div className="top_banner">
            <div className="container">
                <div className="detail">
                    <h2>The Best Notebook Collection 2024</h2>
                    <Link className='link' to='/product' >Shop Now <BsArrowRight /> </Link>
                </div>
                <div className="img_box">
                    <img src="../img/tablet_notebook1.png" alt="notebook" style={{width:'300px'}}/>
                </div>
            </div>
        </div>

        <div className="product_type">
            <div className="container">
                <div className="box">
                    <div className="img_box">
                        <img src="../img/mobilephone1.png" alt="mobile" />
                    </div>
                    <div className="detail">
                        <p>20 products</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src="../img/watch.png" alt="watch" />
                    </div>
                    <div className="detail">
                        <p>35 products</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src="../img/laptop.png" alt="laptop" />
                    </div>
                    <div className="detail">
                        <p>42 products</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src="../img/printer.png" alt="printer" />
                    </div>
                    <div className="detail">
                        <p>18 products</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="about">
            <div className="container">
                <div className="box">
                    <div className="icon">
                        <FiTruck />
                    </div>
                    <div className="detail">
                        <h3>Free Shipping</h3>
                        <p>Orders above Rs.10,000 </p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <BsCurrencyDollar />
                    </div>
                    <div className="detail">
                        <h3>Return & Refund</h3>
                        <p>Money Back Guarantee</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <TbShoppingCartDiscount />
                    </div>
                    <div className="detail">
                        <h3>Member's Discount</h3>
                        <p>On Every Order</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <BiHeadphone />
                    </div>
                    <div className="detail">
                        <h3>Customer Support</h3>
                        <p>Available 24/7</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="product">
            <h2>Top Products</h2>
            <div className="container">

                {
                    HomeProduct.map((curElm) => 
                    {
                        return(
                                <>
                                    <div className="box" key={curElm.id}>
                                        <div className="img_box">
                                            <img src={curElm.Img} alt={curElm.Title}></img>
                                            <div className="icon">
                                                <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
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

        <div className="banner">
            <div className="container">
                <div className="detail">
                    <h4>Our Latest Product</h4>
                    <h3>Apple iPad 10.2 9th Gen </h3>
                    <p>Rs. 139,000</p>
                    <Link to={'./product'} className='link'>Shop Now <BsArrowRight /> </Link>
                </div>
                <div className="img_box">
                    <img src="./img/slider_img.png" alt="iPad" style={{width:'400px'}} />
                </div>
            </div>
        </div>
    </>
)
}

export default Home
