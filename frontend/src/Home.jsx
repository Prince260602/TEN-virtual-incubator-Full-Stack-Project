    import './Home.css'
    
    
    
    import Accordian from './Components/Home_Page_FAQ/FAQ'
    import Home_page from './Components/Home_page/Home_page'
    
    import {Link }from 'react-router-dom'


    function Home(){
        return(
              <>
              <div className='Home_div'>
              <div className='home_body'>
              <Home_page/>
              </div>
              
              
          
          <Accordian/>
          </div>
              </>
        )
    }
    export default Home