import { useState } from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent';
import Product from './components/Product';

function App() {

  const listProduct = [
    {
      name: "1",
      description: "aaaaa",
    },
    {
      name: "2",
      description: "bbb",
    },
    {
      name: "3",
      description: "cccc",
    },
    {
      name: "4",
      description: "dddd",
    }
  ]
  const [listProductState, setListProductState] = useState(listProduct);
  const [inputName, setInputName] = useState('');
  const [inputDes, setInputDes] = useState('');
  const submitForm = (event) => {
    event.preventDefault();
    console.log(inputName);
    console.log(inputDes);
    const newProduct = {
      name: inputName,
      description: inputDes
    };
    setListProductState([newProduct, ...listProductState])

    console.log('tao dang click submit form');
    setInputName('');
    setInputDes('');
  }

  const functionOnChangeInputName = (event) => {
    setInputName(event.target.value);
  }
  const functionOnChangeInputDes = (event) => {
    setInputDes(event.target.value);
  }
  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <label> name: </label>
        <input type='text' value={inputName} onChange={functionOnChangeInputName}></input>
        <br></br>
        <label> description: </label>
        <input type='text' value={inputDes} onChange={functionOnChangeInputDes}></input>
        <br></br>
        <button>submit</button>
      </form>
      {
      listProductState.map(item => {
        return <Product product={item}/>
      })
    }      
    </div>
  );
}

export default App;
