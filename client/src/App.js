import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import Products from './components/products/Products'
import Navbar from './components/featuers/Navbar/Navbar';
import Footer from '../src/components/footer/Footer'

function App() {
  return (
    <div>
      {/* <AuthContext.Provider value={{user,setUser,logOut}} > */}
      <Navbar/>
        <AppRouter/>
            <Footer/>
          
        {/* <Products/> */}
        {/* <RegisterOneForm/> */}
        {/* <RegisterTwoForm/> */}
        
        {/* <LoginForm/>  */}
    </div>
  );
}

export default App;
