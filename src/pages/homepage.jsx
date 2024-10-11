import { useState } from "react";

export default function Homepage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return;
    }
  
    let userString = localStorage.getItem("users");
    let userArray = [];
  
    const obj = { email, firstName, lastName, address, country, state, zip };
  
    if (userString) {
      userArray = JSON.parse(userString);
      let emailIndex = userArray.findIndex((el) => el.email === email);
  
      if (emailIndex === -1) {
        userArray.push(obj);
        localStorage.setItem("users", JSON.stringify(userArray));
        window.location.href = "signin"; // Assuming you meant "signin"
      } else {
        alert("This email is already registered");
      }
    } else {
      userArray.push(obj);
      localStorage.setItem("users", JSON.stringify(userArray));
      window.location.href = "/";
    }
  
    alert("Form submitted");
  };

  return (
    <div className="container mb-5"dir="rtl">
      <main>
        <div className="py-5 text-center">
          <img className="d-block mx-auto mb-4" src={'../assets/imges/istockphoto-1037437274-612x612.jpg'} alt="aaa" width="72" height="57" />
        </div>
        <div className="row g-3">        
          <div className="col-md-10 col-lg-12">
            <h4 className="mb-3">عنوان الفوترة</h4>
            <form className="needs-validation" onSubmit={handleSubmit} noValidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">الاسم الأول</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">يرجى إدخال اسم أول صحيح.</div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">اسم العائلة</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">يرجى إدخال اسم عائلة صحيح.</div>
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label">البريد الإلكتروني</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="invalid-feedback">يرجى إدخال عنوان بريد إلكتروني صحيح لتصلكم تحديثات الشحن.</div>
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">العنوان</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 الشارع الأول"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">يرجى إدخال عنوان الشحن الخاص بك.</div>
                </div>

                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">البلد</label>
                  <select
                    className="form-select"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  >
                    <option value="">اختر...</option>
                    <option>الولايات المتحدة الأمريكية</option>
                  </select>
                  <div className="invalid-feedback">يرجى اختيار بلد صحيح.</div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">المنطقة</label>
                  <select
                    className="form-select"
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  >
                    <option value="">اختر...</option>
                    <option>كاليفورنيا</option>
                  </select>
                  <div className="invalid-feedback">يرجى اختيار اسم منطقة صحيح.</div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="zip" className="form-label">الرمز البريدي</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">الرمز البريدي مطلوب.</div>
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">الاستمرار بالدفع</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
