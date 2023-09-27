import { createBrowserRouter } from "react-router-dom";
import { MedidorPage } from "../pages/medidor_page/MedidorPage";
import { MedidoresPage } from "../pages/medidores_pages/MedidoresPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MedidoresPage />
  },
  {
    path: "/medidor/:id",
    element: <MedidorPage />
  }
])
