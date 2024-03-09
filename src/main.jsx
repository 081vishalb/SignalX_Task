import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  HashRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Modal from './components/Model.jsx';
import { ProductProvider } from './context/ProductContext.jsx';


const queryClient = new QueryClient();
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ProductProvider><App /></ProductProvider>,
//   },
//   {
//     path: "/add-product",
//     element: <ProductProvider><Modal /></ProductProvider>
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <RouterProvider router={router} /> */}
      <HashRouter>
        <Routes>
          <Route path='/' element={<ProductProvider><App /></ProductProvider>} />
          <Route path='/add-product' element={<ProductProvider><Modal /></ProductProvider>} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
