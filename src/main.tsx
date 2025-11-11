import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import axios from "axios";
import { setupInterceptorsTo } from '@/interceptors/http';
import "./styles.global.css";

setupInterceptorsTo(axios);

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
