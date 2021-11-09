import React, { useState } from "react";
import "./JoinPage.css";

const JoinPage = ({ history }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    history.push({
      pathname: "/chat",
      search: `?name=${name}`,
    });
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const renderLogin = () => (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={handleChange}
        placeholder="Username"
        type="text"
      />
      <input
        value={name}
        onChange={handleChange}
        placeholder="Password"
        type="text"
      />
      <div style={{ margin: "10px" }} />
      <button type="submit">Login</button>
      <button onClick={() => setShowSignup(true)}>Create Account</button>
    </form>
  );

  const renderSignup = () => (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={handleChange}
        placeholder="Username"
        type="text"
      />
      <input
        value={name}
        onChange={handleChange}
        placeholder="Password"
        type="text"
      />
      <input
        value={name}
        onChange={handleChange}
        placeholder="Re-enter Password"
        type="text"
      />
      <div style={{ margin: "10px" }} />
      <button type="submit">Signup</button>
      <button onClick={() => setShowSignup(false)}>Login</button>
    </form>
  );
  return (
    <div className="JoinPage">
      <section className="Page">
        {showSignup ? renderSignup() : renderLogin()}
      </section>
    </div>
  );
};

export default JoinPage;
