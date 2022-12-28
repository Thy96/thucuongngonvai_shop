import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home"
import { Provider } from 'react-redux';
import store from './redux/store';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  // toast.configure()
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
