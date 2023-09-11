import './App.css'
import Navbar from './navbar/navbar'
import Blogs from './components/blogs/blogs'


function App() {


  return (
    <>

      <Navbar></Navbar>
      <div className='flex gap-10 max-w-7xl mx-auto p-5'>
        <Blogs></Blogs>
      </div>


    </>
  )
}

export default App
