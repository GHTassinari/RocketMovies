import { BrowserRouter } from 'react-router-dom';

import { AuthRoutes } from './auth.routes'; 
import { AppRoutes } from './app.routes';

export function Routes(){
    const isAuthenticated = localStorage.getItem("userToken");

    return(
        
        <BrowserRouter>
            {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}
