import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import Products from './components/products/Products'
import Navbar from './components/featuers/Navbar/Navbar';

function App() {
  return (
    <div>
      {/* <AuthContext.Provider value={{user,setUser,logOut}} > */}
      <Navbar/>
        <AppRouter/>
        {/* <Products/> */}
        {/* <RegisterOneForm/> */}
        {/* <RegisterTwoForm/> */}
        
        {/* <LoginForm/>  */}
    </div>
  );
}

export default App;
