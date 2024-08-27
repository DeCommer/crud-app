import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import AuthProvider, { useAuth } from './security/AuthContext';
import LoginComponenet from './LoginComponent';
import LogoutComponent from './LogOutComponent';
import HomepageComponent from './HomePageComponenet';
import HeaderComponent from './HeaderComponent';
import WelcomeComponent from './WelcomeComponent';
import ListItemsComponent from './ListItemsComponent';
import FooterComponent from './FooterComponent';
import ErrorComponent from './ErrorComponent';
import './AMain.css'

export default function CrudApp() {

    function AuthenticatedRoute( { children }) {
        const authContext = useAuth();
        if(authContext.isAuthenticated) {
            return children
        }
        return <Navigate to="/"></Navigate>
    }

    return (
        <AuthProvider>
            <div className="crud-app">
                <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path="/" element={<HomepageComponent/>} />
                    <Route path="/login" element={<LoginComponenet/>} />
                    <Route path="/welcome/:username" element={
                        <AuthenticatedRoute>
                            <WelcomeComponent/>
                        </AuthenticatedRoute>
                    } />
                    <Route path="/list" element={
                        <AuthenticatedRoute>
                            <ListItemsComponent/>
                        </AuthenticatedRoute>
                    } />
                    <Route path="/logout" element={
                        <AuthenticatedRoute>
                            <LogoutComponent/>
                        </AuthenticatedRoute>
                    } />
                    <Route path="*" element={<ErrorComponent/>} />
                </Routes>
                <FooterComponent />
                </BrowserRouter>
            </div>
        </AuthProvider>
    )
}