import * as yup from 'yup'

export default yup.object().shape({
    pizzaSize: yup.string()
        .oneOf(['Small', 'Medium', 'Large'], 'Desired Pizza size is required.')
        .required('Desired Pizza size is required.'),

    sauce: yup.string()
        .oneOf(['red', 'white', 'bbq', 'noSauce'])
        .required('Desired Sauce is required.'),

    pepperoni: yup.boolean(),
    extraCheese: yup.boolean(),
    sasuage: yup.boolean(),
    bellPepper: yup.boolean(),
    anchovies: yup.boolean(),
    
    fname: yup.string()
        .min(2, "Full name must be 2 characters or longer.")
        .required('Full name is required.')
})