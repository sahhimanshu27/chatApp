import './App.css'
import Auth from './components/Authentication/Auth';

const UnAuthenticated = () => {
  return (
    <>
      <Auth />
    </>  
  )
}

const Authenticated = () => {
  return (
    <>
      <LeftSideBarMain />
    </>
  )
}

function App() {
  const isAuthenticated = false;
  
  return (
    <div className='App'>
      {isAuthenticated ? <Authenticated /> : <UnAuthenticated/>}    
    </div>
  )
}

export default App
