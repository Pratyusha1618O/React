// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import './Signup.css'
// import '../Login/Login.css'
// import axios from 'axios'

// function Signup() {
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     axios.post('http://localhost:3001/signup', {name, email, password})
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
//   }


//   return (
//     <div className='container'>
//       <div className="box">
//         <h4>Sign Up</h4>

//         <form onSubmit={handleSubmit}>
//           <div className="field">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               placeholder='Enter name'
//               autoComplete='off'
//               name='name'
//               className=''
//               required
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div className="field">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               placeholder='Enter email'
//               autoComplete='off'
//               name='email'
//               className=''
//               required
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="field">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               placeholder='password'
//               name='password'
//               className=''
//               required
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="signup-btn">
//             <Link to='/options'><button type='submit'> Register </button></Link>
//           </div>
//         </form>

//         <p>Already have an account?</p>
//         <div className="log-btn">
//           <Link to="/login"><button> Login </button></Link>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Signup



import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './Signup.css'

const Signup = () => {
  // Step state
  const [step, setStep] = useState(1);

  // Signup form state
  const [signupData, setSignupData] = useState({
    email: "",
    username: "",
    password: ""
  });

  // Radio selection state
  const [selectedOption, setSelectedOption] = useState("");

  // Handling signup form changes
  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  // Validation for signup inputs
  const validateSignup = () => {
    const { email, username, password } = signupData;
    return email && username && password;
  };

  // Move to the radio selection step if signup is valid
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (validateSignup()) {
      setStep(2);
    } else {
      alert("Please fill out all required fields");
    }
  };

  // Handling radio selection
  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Move to form step based on selected option
  const handleNext = () => {
    if (selectedOption) {
      setStep(3);
    } else {
      alert("Please select an option");
    }
  };

  // Forms based on selection
  const renderForm = () => {
    switch (selectedOption) {
      case "blood_bank":
        return <BloodBankForm />;
      case "hospital":
        return <HospitalForm />;
      case "ambulance":
        return <AmbulanceForm />;
      case "doctor":
        return <DoctorForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      {step === 1 && (
        <div className="container">
          <div className="box">
            <form onSubmit={handleSignupSubmit}>
              <h4>Signup</h4>

              <div className="field">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={signupData.username}
                  onChange={handleSignupChange}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required
                />
              </div>

              <div className="signup-btn">
                <button type="submit">Register</button>
              </div>

            </form>

            <p>Already have an account?</p>
            <div className="log-btn">
              <Link to="/login"><button> Login </button></Link>
            </div>
          </div>

        </div>

      )}

      {step === 2 && (
        <div>
          <h2>Select an Option</h2>
          <label>
            <input
              type="radio"
              value="blood_bank"
              checked={selectedOption === "blood_bank"}
              onChange={handleRadioChange}
            />
            Blood Bank
          </label>
          <label>
            <input
              type="radio"
              value="hospital"
              checked={selectedOption === "hospital"}
              onChange={handleRadioChange}
            />
            Hospital
          </label>
          <label>
            <input
              type="radio"
              value="ambulance"
              checked={selectedOption === "ambulance"}
              onChange={handleRadioChange}
            />
            Ambulance
          </label>
          <label>
            <input
              type="radio"
              value="doctor"
              checked={selectedOption === "doctor"}
              onChange={handleRadioChange}
            />
            Doctor
          </label>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Form for {selectedOption.replace("_", " ")}</h2>
          {renderForm()}
        </div>
      )}
    </div>
  );
};

// Example form components (you can customize these)
const BloodBankForm = () => (
  <form>
    <h3>Blood Bank Form</h3>
    {/* Your fields for blood bank */}
  </form>
);

const HospitalForm = () => (
  <form>
    <h3>Hospital Form</h3>
    {/* Your fields for hospital */}
  </form>
);

const AmbulanceForm = () => (
  <form>
    <h3>Ambulance Form</h3>
    {/* Your fields for ambulance */}
  </form>
);

const DoctorForm = () => (
  <form>
    <h3>Doctor Form</h3>
    {/* Your fields for doctor */}
  </form>
);

export default Signup;


