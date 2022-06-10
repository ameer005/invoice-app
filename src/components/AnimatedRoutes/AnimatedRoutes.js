import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import InvoicePage from "../../pages/InvoicePage/InvoicePage";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import ScrollToTop from "../ScrollToTop/ScrollToTop";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <ScrollToTop>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/invoice/:id" element={<InvoicePage />} />
        </Routes>
      </ScrollToTop>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
