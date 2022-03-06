import React from "react";
import "./App.css";
import { useAuth } from "context/auth-context";
import { AuthApp } from "auth-app";
import { UnAuthApp } from "unauth-app";
import { ErrorBoundary } from "components/error-boundary";
import { FullPageErrorFallback } from "components/lib";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {user ? <AuthApp /> : <UnAuthApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
