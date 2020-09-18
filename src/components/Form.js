import React from 'react'

export default function Form(props) {
    const { values, change, submit, errors, disabled } = props
    
    const onChange = event => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    return(
        <form className='pizzaForm' onSubmit={onSubmit}>
            <div className='formContainer'>
                {/* ////////// DROPDOWN PSIZE ////////// */}
                <h3>Choice of Size</h3>
                <label htmlFor='pizzaSize'>
                    <select
                        id="pizzaSize"
                        name="pizzaSize"
                        value={values.pizzaSize}
                        onChange={onChange}
                    >
                        <option value=''> - Select an option -</option>
                        <option value='Small'>Small (10in.)</option>
                        <option value='Medium'>Medium (12in.)</option>
                        <option value='Large'>Large (14in.)</option>
                    </select>
                </label>

                {/* ////////// RADIO BUTTONS SAUCES ////////// */}
                <h3>Choice of Sauce</h3>
                <label> Original Red
            <input
                        type='radio'
                        name="sauce"
                        value="red"
                        checked={values.sauce === 'red'}
                        onChange={onChange}
                    />
                </label>
                <br/>

                <label> White Garlic
            <input
                        type='radio'
                        name="sauce"
                        value="white"
                        checked={values.sauce === 'white'}
                        onChange={onChange}
                    />
                </label>
                <br/>

                <label> Gross BBQ
            <input
                        type='radio'
                        name="sauce"
                        value="bbq"
                        checked={values.sauce === 'bbq'}
                        onChange={onChange}
                    />
                </label>
                <br/>

                <label> No Sauce
            <input
                        type='radio'
                        name="sauce"
                        value="noSauce"
                        checked={values.sauce === 'noSauce'}
                        onChange={onChange}
                    />
                </label>
                <br/>

                {/* ////////// CHECKBOX TOPPINGS ////////// */}
                <h3>Choice of Topping(s)</h3>
                <label> Pepperoni
            <input
                        type='checkbox'
                        name='pepperoni'
                        value={values.pepperoni}
                        onChange={onChange}
                    />
                </label>
                <br/>

                <label> Extra Cheese
            <input
                        type='checkbox'
                        name='extraCheese'
                        value={values.extraCheese}
                        onChange={onChange}
                    />
                </label>
                <br/>

                <label> Sasuage
            <input
                        type='checkbox'
                        name='sasuage'
                        value={values.sasuage}
                        onChange={onChange}
                    />
                </label>
                <br/>

                <label> Green Bell Peppers
            <input
                        type='checkbox'
                        name='bellPepper'
                        value={values.bellPepper}
                        onChange={onChange}
                    />
                </label>
                <br/>

                <label> Anchovies
            <input
                        type='checkbox'
                        name='anchovies'
                        value={values.anchovies}
                        onChange={onChange}
                    />
                </label>
                <br/>

                {/* ////////// TEXT FIELDS ////////// */}
                <h3>Any special instructions?</h3>
                <label>
                    <input
                        type='text'
                        name='specialInstructions'
                        placeholder="Input special instructions here."
                        value={values.specialInstructions}
                        onChange={onChange}
                    />
                </label>
                <br />

                <label>Name for Delivery
            <input
                        type='text'
                        name="fname"
                        placeholder='enter name'
                        value={values.fname}
                        onChange={onChange}
                    />
                </label>
                <br />

                {/* ////////// BUTTON ////////// */}
                <button className='submitOrder' disabled={disabled}>Submit Order</button>
                <div className='errors'>
                    <div>{errors.pizzaSize}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.fname}</div>
                </div>
            </div>
        </form>
    )
}