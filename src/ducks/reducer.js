const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';

function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_LOAN_TYPE:
            return Object.assign({}, state, {loanType: action.payload})
        case UPDATE_PROPERTY_TYPE:
            return Object.assign({}, state, {propertyType: action.payload} )
        case UPDATE_CITY:
            return Object.assign({}, state, {city: action.payload})   
        case UPDATE_PROP:
            return Object.assign({}, state, {propToBeUsedOn: action.payload})        
        default: return state
    }

}

export function updateLoanType( loanType ){
    console.log(loanType)
    return{
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}

export function updatePropertyType ( propertyType ){
    console.log(propertyType)
    return{
        type: UPDATE_PROPERTY_TYPE,
        payload: propertyType
    }
}

export function updateCity( city ) {
    console.log(city)
    return{
        type: UPDATE_CITY,
        payload: city
    }

}

export function updateProp( prop ){
    console.log(prop)
    return{
        type: UPDATE_PROP,
        payload: prop
    }
}

export default reducer;