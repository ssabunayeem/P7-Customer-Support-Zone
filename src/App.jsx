import { Suspense } from "react";
import Navbar from "./components/Navbar";
import OrderContainer from "./components/OrderContainer";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

const loadOrders = () => fetch("/orders.json").then((res) => res.json());

const App = () => {
  const ordersPromise = loadOrders();

  return (
    <div>
      <header className="">
        <Navbar></Navbar>
      </header>

      <section>
        <Suspense className="w-11/12 mx-auto py-3" fallback={"Loading ⌛"}>
          <OrderContainer promise={ordersPromise}></OrderContainer>
        </Suspense>
      </section>

      <Footer></Footer>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default App;
