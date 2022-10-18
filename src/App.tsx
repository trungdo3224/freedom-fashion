import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux/es/exports";
import { checkUserSession } from "./redux/user/user.action";
import { GlobalStyle } from "./global.styles";
import { Footer } from "./components/product-card/product-card.styles";

const Home = lazy(() => import("./pages/home/home.component"));
const Navigation = lazy(
  () => import("./components/navbar/navigation.component")
);
const Authentication = lazy(
  () => import("./pages/authentication/authentication.component")
);
const Shop = lazy(() => import("./pages/shop/shop.component"));
const CheckOut = lazy(() => import("./pages/checkout/checkout.component"));
const Contact = lazy(() => import("./pages/contact/contact.component"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <>
      <ToastContainer autoClose={1000} theme={"dark"} />
      <Suspense>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/shop/*" element={<Shop />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>

      </Suspense>
    </>
  );
}

export default App;
