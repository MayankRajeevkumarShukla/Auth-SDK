import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Authcontext = createContext();

function AuthProvider({childern}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        axios
          .get("api/validateToken", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            setUser(response.data.user);
            setLoading(false);
          });
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post("api/login", { email, password });
      const { token, user } = response.data;
      localStorage.setItem("authToken", token);
      setUser(user);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    navigate("/login");
  };

  const isAuthenticated = () => {
    return !!user;
  };

  return (
    <Authcontext.Provider
      value={{ user, loading, login, logout, isAuthenticated }}
    >
      {!loading && childern}
    </Authcontext.Provider>
  );
}

export default AuthProvider;
export { Authcontext };
