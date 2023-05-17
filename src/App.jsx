import "./sass/index.scss";
import { Route, Routes } from "react-router";
import SingIn from "./routes/SignIn/SignIn";
import SignUp from "./routes/SignUp/SignUp";
import RequireAuth from "./routes/notUiRoutes/RequireAuth/RequireAuth";
import PrivateRoutes from "./routes/notUiRoutes/PrivateRoutes/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/singin" element={<SingIn />} />
        <Route path="/singup" element={<SignUp />} />
        <Route
          path="*"
          element={
            <RequireAuth>
              <PrivateRoutes />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
