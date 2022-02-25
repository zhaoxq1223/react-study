import React from "react";
import "./App.css";
import { useAuth } from "context/auth-context";
import { AuthApp } from "auth-app";
import { UnAuthApp } from "unauth-app";

function App() {
  const { user } = useAuth();
  return <div className="App">{user ? <AuthApp /> : <UnAuthApp />}</div>;
}

export default App;
