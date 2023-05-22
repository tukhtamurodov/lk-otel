import "./sass/index.scss";
import { Route, Routes } from "react-router";
import SingIn from "./routes/SignIn/SignIn";
import SignUp from "./routes/SignUp/SignUp";
import RequireAuth from "./routes/notUiRoutes/RequireAuth/RequireAuth";
import PrivateRoutes from "./routes/notUiRoutes/PrivateRoutes/PrivateRoutes";
import NotFound from "./routes/notUiRoutes/NotFound/NotFound";
import ObjectManage from "./routes/ObjectManage/ObjectManage";
import RegistrNewObj from "./routes/RegistrNewObj/RegistrNewObj";
import Registrate1 from "./routes/RegistratePages/Registrate1/Registrate1";
import Registrate2 from "./routes/RegistratePages/Registrate2/Registrate2";
import Registrate3 from "./routes/RegistratePages/Registrate3/Registrate3";
import Registrate4 from "./routes/RegistratePages/Registrate4/Registrate4";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="singin" element={<SingIn />} />
        <Route path="singup" element={<SignUp />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <PrivateRoutes />
            </RequireAuth>
          }
        >
          <Route path="object-manage" element={<ObjectManage />} />
          <Route path="registre-new-object" element={<RegistrNewObj />}>
            <Route path="1" element={<Registrate1 />} />
            <Route path="2" element={<Registrate2 />} />
            <Route path="3" element={<Registrate3 />} />
            <Route path="4" element={<Registrate4 />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
