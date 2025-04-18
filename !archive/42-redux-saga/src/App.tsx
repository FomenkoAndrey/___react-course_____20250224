import { Provider } from 'react-redux'
import Counter from './components/Counter'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App
