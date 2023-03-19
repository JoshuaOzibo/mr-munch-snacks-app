
import ContextProvider from '../src/Components/Store/CartContextProvider/CartContextProvider'
import LinkToApp from './Components/LinkToAppJs/LinkToApp'
const App = () => {
  return (
    <ContextProvider>
        <LinkToApp />
    </ContextProvider>
  )
}

export default App