import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../store/cart-slice";
import "./CheckoutForm.css";
// import Orders from "./Orders";
const CheckoutForm: React.FC<{
  formData: (formData: {}) => void;
  onSend: (formData: {}) => void;
}> = (props) => {
  const [street1, setStreet1] = useState("");
  const [street2, setStreet2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const dispatch = useDispatch();

  const formSubmitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = { street1, street2, city, state, zip };

    props.onSend(formData);
    console.log("formDatacheckout", formData);

    props.formData(formData);

    setStreet1("");
    setStreet2("");
    setCity("");
    setState("");
    setZip("");
  };

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <div>
      <form className="spacing" onSubmit={formSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="street1" className="form-label">
            Street 1
          </label>
          <input
            type="text"
            className="form-control"
            id="street1"
            value={street1}
            aria-describedby="detailHelp"
            onChange={(e) => {
              setStreet1(e.target.value);
            }}
            required
          />
          <div id="detailHelp" className="form-text">
            We'll never share your Details with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="street2" className="form-label">
            Street 2
          </label>
          <input
            type="text"
            className="form-control"
            id="street2"
            value={street2}
            onChange={(e) => {
              setStreet2(e.target.value);
            }}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="zip" className="form-label">
            zip code
          </label>
          <input
            type="text"
            className="form-control"
            id="zip"
            value={zip}
            onChange={(e) => {
              setZip(e.target.value);
            }}
            required
          />
        </div>
        {
          <Link to="/cart">
            <button type="button" className="btn btn-danger ">
              Cancel
            </button>
          </Link>
        }
          <button
            type="submit"
            className="btn btn-primary ml-2"
            onClick={clearCartHandler}
          >
            Order
          </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
