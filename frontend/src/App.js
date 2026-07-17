import Home from "pages/home/Home";
import Root from "./pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Cart from "pages/Cart/Cart";
import NotFound from "NotFound";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import ProductDetails from "pages/details/ProductDetails";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
  <Route path="Product-Details/:id" element={<ProductDetails/>} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;