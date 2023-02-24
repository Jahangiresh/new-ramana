import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/orderdetails.scss";
import img from "../assets/images/Men-Shoes.png";
import LoadingBox from "../components/LoadingBox";
import { AiOutlineCheck } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

const OrderDetails = () => {
  // const dispatch = useDispatch();
  // const order = useSelector(getByDetails);

  // const loading = useSelector(getOrderLoading);
  // const params = useParams();
  // const id = params.id;
  // console.log(order);
  // useEffect(() => {
  //   dispatch(fetchOrderByDetails(id));
  // }, []);
  return (
    <div className="orderdetails">
      <div className="orderdetails__container container">
        <h1>order details</h1>
        <div className="orderdetails__details">
          <ul className="orderdetails__details__ul">
            <li className="orderdetails__details__ul__li">
              <h3>
                <AiOutlineCheck /> sifarish alindi
              </h3>
            </li>{" "}
            <li className="orderdetails__details__ul__li">
              <h3>
                <AiOutlineCheck /> sifarish hazirlanir
              </h3>
            </li>{" "}
            <li className="orderdetails__details__ul__li">
              <h3>
                {/* {order.status && order.status === "ondelivery" ? (
                  <AiOutlineCheck />
                ) : order.status === "delivered" ? (
                  <AiOutlineCheck />
                ) : order.status === "fail" ? (
                  <MdOutlineCancel />
                ) : (
                  ""
                )} */}
                yoldadir
              </h3>
            </li>{" "}
            <li className="orderdetails__details__ul__li">
              <h3>
                {/* {order.status && order.status === "ondelivery" ? (
                  ""
                ) : order.status === "delivered" ? (
                  <AiOutlineCheck />
                ) : order.status === "fail" ? (
                  <MdOutlineCancel />
                ) : (
                  ""
                )} */}
                teslim alindi
              </h3>
            </li>
          </ul>
        </div>
        <div className="orderdetails__details">
          <ul className="orderdetails__details__ul">
            <li className="orderdetails__details__ul__li">
              <h3>date of order</h3>
              <span>
                {/* {moment(order.createdDate && order.createdDate).format(
                  "DD MMM YYYY"
                )} */}
              </span>
            </li>{" "}
            <li className="orderdetails__details__ul__li">
              <h3>number of items</h3>
              {/* <span>{order.orderItems && order.orderItems.length}</span> */}
            </li>{" "}
            <li className="orderdetails__details__ul__li">
              <h3>name of buyer</h3>
              <span>
                {/* {order.user && order.user.name}{" "}
                {order.user && order.user.surname} */}
              </span>
            </li>{" "}
            <li className="orderdetails__details__ul__li">
              <h3>delivery date</h3>
              <span>12/12/2022</span>
            </li>
          </ul>
        </div>

        <div className="main__container__orders__row row">
          <div className="main__container__orders__row__title col-6">
            <p>prod name</p>
            <span>leat</span>
          </div>
          <div className="col-6 img">
            <img alt="categoryimg" />
          </div>
        </div>

        <div className="orderdetails__container__inputs row">
          <div className="orderdetails__container__inputs__left col-5">
            <label htmlFor="address">address:naximov 23</label>
            <input type="text" name="" id="" />
          </div>
          <div className="orderdetails__container__inputs__right col-5">
            <label htmlFor="address">phone number:06622131</label>
            <input type="text" name="" id="" />
          </div>
        </div>
        <div className="main__container__orderinfo row">
          <div className="main__container__orderinfo__box col-3">
            order no: 9807611
          </div>
          <div className="main__container__orderinfo__box col-3">
            delivery time: 2 days
          </div>
          <div className="main__container__orderinfo__box col-3 payment__box">
            <span>payment: 123</span>
            <svg
              className="svg__chevron"
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L7.5 7L14 1" stroke="#363636" strokeWidth="1.5" />
            </svg>
            <div className="payment__hover">
              <ul className="payment__hover__ul">
                <li className="payment__hover__ul__li">
                  <label htmlFor="debitcard">debit cart</label>
                  <input
                    className="payment__radio"
                    type="radio"
                    id="debitcard"
                    name="payment"
                    value="debit"
                  />
                </li>
                <li className="payment__hover__ul__li">
                  <label htmlFor="cash">cash on delivery</label>
                  <input
                    className="payment__radio"
                    type="radio"
                    id="cash"
                    name="payment"
                    value="cash"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="main__container__orderinfo__box col-3">
            your total: 234 azn
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
