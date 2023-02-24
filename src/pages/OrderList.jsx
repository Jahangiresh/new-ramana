import React, { useContext, useEffect } from "react";
import "../assets/css/orderlist.scss";
import { StoreContext } from "../StoreContext";
import Shoes from "../assets/images/Men-Shoes.png";
import { AiOutlineCheck } from "react-icons/ai";
import shoe from "../assets/images/Men-Shoes.png";
import LoadingBox from "../components/LoadingBox";
import { useNavigate } from "react-router-dom";
const OrderList = () => {
  // const { userInfo } = useContext(StoreContext);

  // const order = useSelector(getOrder);
  // const dispatch = useDispatch();
  // const loading = useSelector(getOrderLoading);
  // useEffect(() => {
  //   userInfo && dispatch(fetchOrderById(userInfo.user.id));
  // }, [userInfo]);
  const navigate = useNavigate();

  return (
    <div className="order">
      <div className="order__container container">
        <h3 className="title__h">Order History</h3>

        <div className="order__container__box">
          <div className="order__container__box__upper">
            <ul className="order__container__box__upper__ul">
              <li className="order__container__box__upper__ul__li">
                <h3>DATE OF ORDER</h3> <span>12 12 2022</span>
              </li>
              <li className="order__container__box__upper__ul__li">
                <h3>NUMBER OF ITEMS</h3> <span>2 ITEMS</span>
              </li>
              <li className="order__container__box__upper__ul__li">
                <h3>NAME OF BUYER</h3> <span>ali aliyev</span>
              </li>
              <li className="order__container__box__upper__ul__li">
                <h3>DELIVERY DATE</h3> <span>12 12 2022</span>
              </li>
            </ul>
          </div>
          <div className="order__container__box__down">
            <div className="order__container__box__down__left col-2">
              <AiOutlineCheck />
              <span className="span__progress">in progress</span>
              <button
                onClick={() => navigate(`/orderdetails/1`)}
                className="button__details"
              >
                see details
              </button>
            </div>
            <div className="order__container__box__down__right col-10">
              <div className="order__container__box__down__right__image">
                <img
                  // src={`https://newramanaapplication.azurewebsites.net/uploads/images/${order.product.images[0].path}`}
                  alt="categoryimg"
                  src="https://assets.adidas.com/images/w_600,f_auto,q_auto/cadaa8ea1a854bafa7d1ac9800a18850_9366/Kaptir_2.0_Shoes_Black_H00279_01_standard.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
