import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/common/Layout";
import BetHistoryContainer from "./containers/BetHistoryContainer";
import ChangePasswordContainer from "./containers/ChangePasswordContainer";
import DashboardContainer from "./containers/DashboardContainer";
import GameContainer from "./containers/GameContainer";
import GameResultContainer from "./containers/GameResultContainer";
import LoginContainer from "./containers/LoginContainer";
import ProfitLossContainer from "./containers/ProfitLossContainer";
import SetButtonValueContainer from "./containers/SetButtonValueContainer";
import TransactionHistoryContainer from "./containers/TransactionHistoryContainer/TransactionHistoryContainer";
import UnSettledConatiner from "./containers/UnSettledContainer";
const Contact = () => <h1>Contact</h1>;
function Routing() {
  const localstorage = useSelector((state) => state.localstorage);
  const isLogin = localstorage.access ?? window.localStorage.getItem("access");
  return (
    <Routes>
      <Route
        path="/login"
        element={isLogin ? <Navigate to="/" /> : <LoginContainer />}
      />
      <Route
        path="/register"
        element={
          isLogin ? <Navigate to="/" /> : <LoginContainer isSignUp={true} />
        }
      />
      <Route
        path="/forgotPwd"
        element={
          isLogin ? <Navigate to="/" /> : <LoginContainer isForgotPwd={true} />
        }
      />
      <Route path="/" element={isLogin ? <Layout /> : <Navigate to="/login" />}>
        <Route path="/betHistory" element={<BetHistoryContainer />} />
        <Route
          path="/transactionHistory"
          element={<TransactionHistoryContainer />}
        />
        <Route path="/profitLoss" element={<ProfitLossContainer />} />
        <Route path="/unSettledBet" element={<UnSettledConatiner />} />
        <Route path="/setButtonValue" element={<SetButtonValueContainer />} />
        <Route path="/changePassword" element={<ChangePasswordContainer />} />
        <Route path="/game/:gameName" element={<GameContainer />} />
        <Route
          path="/game/:gameName/:placedBet"
          element={<GameContainer placeBet={true} />}
        />
        <Route path="/gameresult" element={<GameResultContainer />} />
        <Route index element={<DashboardContainer />} />
      </Route>
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default Routing;
