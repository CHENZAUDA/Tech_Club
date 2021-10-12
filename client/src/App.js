import logo from './logo.svg';
import './App.css';
import AuthContext from './context/AuthContext';
import AppRouter from './components/AppRouter/AppRouter';
import Products from './components/products/Products'
import ToursHighTech from './components/ToursHighTech/ToursHighTech'

function App() {
  return (
    <div >
      {/* <AuthContext.Provider value={{user,setUser,logOut}} > */}
        {/* <AppRouter/> */}
        <ToursHighTech/>
        {/* <Products/> */}
        {/* <RegisterOneForm/> */}
        {/* <RegisterTwoForm/> */}
        
        {/* <LoginForm/>  */}
      {/* </AuthContext.Provider> */}
    </div>
  );
}

export default App;
