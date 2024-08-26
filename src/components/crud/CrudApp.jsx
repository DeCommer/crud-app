import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthProvider from '../security/AuthContext';
import LoginComponenet from './LoginComponent';
import LogoutComponent from './LogOutComponent';
import HeaderComponent from './HeaderComponent';
import WelcomeComponent from './WelcomeComponent';
import ListItemsComponent from './ListItemsComponent';
import FooterComponent from './FooterComponent';
import ErrorComponent from './ErrorComponent';
import './AMain.css'

export default function CrudApp() {
    return (
        <AuthProvider>
            <div className="crud-app">
                <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path="/" element={<LoginComponenet/>} />
                    <Route path="/login" element={<LoginComponenet/>} />
                    <Route path="/welcome/:username" element={<WelcomeComponent/>} />
                    <Route path="/list" element={<ListItemsComponent/>} />
                    <Route path="/logout" element={<LogoutComponent/>} />
                    <Route path="*" element={<ErrorComponent/>} />
                </Routes>
                <FooterComponent />
                </BrowserRouter>
            </div>
        </AuthProvider>
    )
}