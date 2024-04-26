import Header from './pages/Header'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
   <div className=' w-full flex justify-center flex-col overflow-hidden '>
    <Header/>
    <main className=' relative lg:pt-36 pt-16'>
    <Outlet/>
    
    </main>
   </div>
  )
}

export default App