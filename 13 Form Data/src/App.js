import { useState } from "react";

function App() {
  // declaring the state
  const [formData, setFormData] = useState({
    firstName: "",
    city: "",
    comments: "false",
    country: "",
    candidates: "false",
    email: "",
    lastName: "",
    offers: "false",
    postalcode: "",
    notifications: "",
    state: "",
    address: "",
  });

  // clear form
  function clearForm() {
    setFormData({
      firstName: "",
      city: "",
      comments: "false",
      country: "",
      candidates: "false",
      email: "",
      lastName: "",
      offers: "false",
      postalcode: "",
      notifications: "",
      state: "",
      address: "",
    });
  }

  // seting the values of variables
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  // handling the submition
  function submitHandler(event) {
    event.preventDefault();
    console.log("............ user data ...........");
    console.log(formData);
  }

  return (
    <form className="form">
      {/* for first name */}
      <div>
        <label htmlFor="firstName">first name</label>
        <input
          type="text"
          className="full-width"
          name="firstName"
          id="firstName"
          placeholder="yash"
          value={formData.firstName}
          onChange={changeHandler}
        />
      </div>

      {/* for last name */}
      <div>
        <label htmlFor="lastName">last name</label>
        <input
          type="text"
          className="full-width"
          name="lastName"
          id="lastName"
          placeholder="sawarkar"
          value={formData.lastName}
          onChange={changeHandler}
        />
      </div>

      {/* for email */}
      <div>
        <label htmlFor="email">email</label>
        <input
          type="email"
          className="full-width"
          name="email"
          id="email"
          placeholder="yashsawarkar01@gmail.com"
          value={formData.email}
          onChange={changeHandler}
        />
      </div>

      {/* for selecting country */}
      <div>
        <label htmlFor="country">country</label>

        <select
          name="country"
          className="full-width"
          value={formData.country}
          id="country"
          onChange={changeHandler}
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>

      {/* for address */}
      <div>
        <label htmlFor="address">address</label>
        <input
          type="text"
          className="full-width"
          placeholder="main road"
          name="address"
          id="address"
          onChange={changeHandler}
          value={formData.address}
        />
      </div>

      {/* for city */}
      <div>
        <label htmlFor="city">city</label>
        <input
          type="text"
          className="full-width"
          placeholder="Amaravati"
          name="city"
          id="city"
          onChange={changeHandler}
          value={formData.city}
        />
      </div>

      {/* state / province */}
      <div>
        <label htmlFor="state">state / province</label>
        <input
          type="text"
          className="full-width"
          placeholder="Maharashtra"
          name="state"
          id="state"
          onChange={changeHandler}
          value={formData.state}
        />
      </div>

      {/* zip code */}
      <div>
        <label htmlFor="postalcode">Zip / Postal Code</label>
        <input
          type="text"
          className="full-width"
          placeholder="444706"
          name="postalcode"
          id="postalcode"
          onChange={changeHandler}
          value={formData.postalcode}
        />
      </div>

      <p className="para">By Email</p>

      <div>
        <div className="prefrences">
          <input
            type="checkbox"
            name="comments"
            id="comments"
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="comments">Comments</label>
            <p className="faint">
              Get notified when someones posts a comment on a posting.
            </p>
          </div>
        </div>

        <div className="prefrences">
          <input
            type="checkbox"
            name="candidates"
            id="candidates"
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="candidates">Candidates</label>
            <p className="faint">
              Get notified when a candidate applies for a job.
            </p>
          </div>
        </div>

        <div className="prefrences">
          <input
            type="checkbox"
            name="offers"
            id="offers"
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="offers">Offers</label>
            <p className="faint">
              Get notified when a candidate accepts or rejects an offer.
            </p>
          </div>
        </div>
      </div>

      <div className="para">
        <p>Push Notifications</p>
        <p className="faint">
          These are delivered via SMS to your mobile phone.
        </p>
      </div>

      <div className="prefrences">
        <input
          type="radio"
          name="notifications"
          value="everything"
          id="everything"
          onChange={changeHandler}
          checked={formData.notifications === "everything"}
        />
        <label htmlFor="everything">Everything</label>
      </div>

      <div className="prefrences">
        <input
          type="radio"
          name="notifications"
          value="same-as-email"
          id="same-as-email"
          onChange={changeHandler}
          checked={formData.notifications === "same-as-email"}
        />
        <label htmlFor="same-as-email">Same as email</label>
      </div>

      <div className="prefrences">
        <input
          type="radio"
          name="notifications"
          value="noNotification"
          id="noNotification"
          onChange={changeHandler}
          checked={formData.notifications === "noNotification"}
        />
        <label htmlFor="noNotification">No push notifications</label>
      </div>

      <button onClick={submitHandler}>save</button>
      <button onClick={clearForm} className="clear">
        clear form{" "}
      </button>
    </form>
  );
}

export default App;
