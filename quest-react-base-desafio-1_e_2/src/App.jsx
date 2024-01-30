import React from 'react'
import Text from './components/text/Text'
import Button from './components/button/Button'
import './App.css'

function App() {
  
  const labelShow = (label) => {
    alert("A label desse botão é " + label)
  }

  return (
    <>
      <Text>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non distinctio aliquam minus, delectus iste aperiam corporis dolorum, possimus quaerat tenetur deserunt perferendis dolorem laboriosam fuga ipsum beatae quo eius. Hic.</span>
        </Text>

      <Button label='Baixar CV' labelshow={labelShow} />
    </>
  )
}

export default App
