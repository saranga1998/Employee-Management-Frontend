import EmployeeView from './Components/EmployeeView'
import { Provider } from 'react-redux'
import store from '../src/Redux/Store'
import './App.css'
import ErrorBoundary from './Components/ErrorBoundary'
import AddEmp from './Components/AddEmp'
import Pages from './Pages/Pages'

function App() {


  return (

    <>
      <Pages />
    </>
  )
}

export default App
