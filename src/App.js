import React, { useState, useEffect } from 'react'; 
import * as yup from 'yup'
import axios from 'axios'
import Form from './components/Form'
import schema from './validation/formSchema'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css'


const initalPizzaValues = {
  ///// DROPDOWN /////
  pizzaSize: '',
  ///// RADIO BUTTONS /////
  sauce: '',
  ///// CHECKBOXES /////
  pepperoni: false,
  extraCheese: false,
  sasuage: false,
  bellPepper: false,
  anchovies: false,
  ///// TEXT INPUTS /////
  specialInstructions: '',
  fname: '',
}

const initialFormErrors = {
 ///// DROPDOWN /////
 pizzaSize: '',
 ///// RADIO BUTTONS /////
 sauce: '',
 ///// TEXT INPUTS /////
 fname: '',
}

const initialDisabled = true


function App() {
  const [formValues, setFormValues] = useState(initalPizzaValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled) 

  ///// EVENT HANDLER /////
  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value })
  }

  const formSubmit = () => {
    const newOrder = {
      pizzaSize: formValues.pizzaSize,
      sauce: formValues.sauce,
      toppings: ['pepperoni', 'extraCheese', 'sasuage', 'bellPepper', 'anchovies'].filter(top => formValues[top]), //gotta be a better way...
      specialInstructions: formValues.specialInstructions.trim(),
      fname: formValues.fname.trim(),
    }
    postPizza(newOrder)
  } 
  /////  /////

  ///// HELPERS /////
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({ ...formErrors, [name]: '' }) 
      }) //if validation is successful do not save an error message
      .catch(error => {
        setFormErrors({ ...formErrors, [name]: error.errors[0] }) 
      })
  }

  const postPizza = (newOrder) => {
    axios.post('https://reqres.in/api/users', newOrder)
    .then(response => {
      console.log('This is the POST respones', response.data)
      setFormValues(initalPizzaValues)
    })
    .catch(error => {
      console.log(error)
      debugger
    })
  }

  /////  /////
  ///// SIDE EFFECTS /////
  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <Router>
    <div className="App">
      <nav>
        <div className="header">Lambda Pizzas</div>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Order Now</Link>
      </nav>
      <Switch>
        <Route path='/pizza'>
          <Form
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            errors={formErrors}
            disabled={disabled}
          />
        </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
