import React, { useContext } from "react";
import "../assets/css/likes.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StoreContext } from "../StoreContext";
import { BsBag, BsHeart, BsHeartFill, BsBagFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/images/Arrow.png";

const Likes = () => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 300,
    pauseOnHover: false,
    autoplay: false,
  };
  const navigate = useNavigate();
  const { favorites, setFavorites, cartItems, setCartItems } =
    useContext(StoreContext);
  //localFavadd
  const favoriteHandler = (product) => {
    let FavoritProds = JSON.parse(localStorage.getItem("favorites"));
    let existedProduct = FavoritProds.find((fav) => fav.id === product.id);

    if (!existedProduct) {
      product.isFav = true;

      favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      const updatedArray = FavoritProds.filter((fav) => fav.id !== product.id);
      product.isFav = false;

      setFavorites(updatedArray);
      localStorage.setItem("favorites", JSON.stringify(updatedArray));
    }
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
  };

  const cartHandler = (product) => {
    let existedProduct = cartItems.find((item) => item.id === product.id);
    if (!existedProduct) {
      cartItems.push(product);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      existedProduct.quantity = 22;
    }
    setCartItems(JSON.parse(localStorage.getItem("cartItems")));
  };
  return (
    <div className="likes">
      <div className="likes__container container">
        <h3 className="title__h">your likes</h3>
        <div className="likes__container__content row">
          {favorites &&
            favorites.map((product) => (
              <div key={product.id} className="product__box col-6">
                <div className="icons__div__product">
                  <span
                    onClick={() => cartHandler(product)}
                    className="icons__div__product__bag"
                  >
                    {cartItems && cartItems.find((c) => c.id === product.id) ? (
                      <BsBagFill />
                    ) : (
                      <BsBag />
                    )}
                  </span>
                  <span
                    onClick={() => favoriteHandler(product)}
                    className="icons__div__product__heart"
                  >
                    {favorites && favorites.find((f) => f.id === product.id) ? (
                      <BsHeartFill />
                    ) : (
                      <BsHeart />
                    )}
                  </span>
                </div>
                <div
                  onClick={() => navigate(`/singleproduct/${product.id}`)}
                  className="product__box__image"
                >
                  <Slider {...settings}>
                    {product.images &&
                      product.images.map((img) => (
                        <img
                          className="produc__img"
                          key={product.id}
                          src={img}
                          alt=""
                        />
                      ))}
                  </Slider>
                </div>
                <div
                  onClick={() => navigate(`/singleproduct/${product.id}`)}
                  className="product__box__content"
                >
                  <div className="product__box__content__details col-9">
                    <h3>{product.title}</h3>
                    <span>{product.price} AZN</span>
                  </div>
                  <div className="product__box__content__arrow col-3">
                    <img src={arrow} alt="" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Likes;
