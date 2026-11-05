import React from 'react'
import Card1 from './componants/Card1'

const App = () => {
  return (
   <div className='parent'>
        <Card1 user='Abhay' age={12} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApLhNdsSKfJzEA2CTIaq7GwQpJgqgZYIRdu9mBtA96g&s=10" />
        <Card1 user='raj' age={12} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLaUiR5CLFPWgBs658BMBbFuSn3KHSdA85y_1y81fIw&s=10" />
        <Card1 user='sahil' age={12} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbLcKorSUVSM7J7XCc17lD5wPJXzmMT7_tWHPkLhe16A&s=10" />
    </div>
   
    
  )
}

export default App
