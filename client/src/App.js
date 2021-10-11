import logo from './logo.svg';
import './App.css';
import AuthContext from './context/AuthContext';
import AppRouter from './components/AppRouter/AppRouter';

function App() {
  return (
    <div >
      {/* <AuthContext.Provider value={{user,setUser,logOut}} > */}
        <AppRouter/>
      {/* </AuthContext.Provider> */}
    </div>
  );
}

export default App;
