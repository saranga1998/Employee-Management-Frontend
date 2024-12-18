import EmployeeView from './Components/EmployeeView'
import { Provider } from 'react-redux'
import store from '../src/Redux/Store'
import './App.css'
import ErrorBoundary from './Components/ErrorBoundary'
import AddEmp from './Components/AddEmp'

function App() {


  return (
    <Provider store={store}>
      <div>
        <ErrorBoundary>
          {/* <EmployeeView /> */}
          <AddEmp/>
        </ErrorBoundary>

      </div>
    </Provider>
  )
}

export default App
