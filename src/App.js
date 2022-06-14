import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import styles from "./App.module.scss";

import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import NavBar from "./components/NavBar/NavBar";
import { fetchInvoices } from "./features/invoice/invoiceSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);
  return (
    <div className={`${styles.app}`}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        <AnimatedRoutes />
      </main>
    </div>
  );
}

export default App;
