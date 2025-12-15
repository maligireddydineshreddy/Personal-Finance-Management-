import React from "react";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Register from "./Pages/Register";
import UserProfile from "./Pages/UserProfile";
import About from "./Pages/About";
import Balance from "./Pages/Balance";
import Chart from "./Pages/Chart";
import AllTransaction from "./Pages/AllTransaction";
import Investment from "./Pages/Investment";
import BudgetPlanning from "./Pages/BudgetPlanning";
import News from "./Pages/News";
import StockInfo from "./Pages/StockInfo";
import StockPred from "./Pages/StockPred";
import Bills from "./Pages/Bills";
import ChatBot from "./components/ChatBot";

// Component to conditionally show ChatBot on authenticated pages
const AppContent = () => {
  const location = useLocation();
  const hideChatbotPaths = ["/", "/register"];
  const showChatbot = !hideChatbotPaths.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/about" element={<About />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/transactions" element={<AllTransaction />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/budgetPlanner" element={<BudgetPlanning />} />
        <Route path="/news" element={<News />} />
        <Route path="/stockInfo" element={<StockInfo />} />
        <Route path="/stockpred" element={<StockPred />} />
        <Route path="/bills" element={<Bills />} />
      </Routes>
      {showChatbot && <ChatBot />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
