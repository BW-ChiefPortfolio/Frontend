const userData = {
    name: 'Nathan Loveless',
    location: 'Northfield, VT',
    contactEmail: 'nathan.loveless@outlook.com',
    recipes: [],
    username: 'nathansl2003',
    password: 'password'
}

const recipes = [{ 
    id: '',
    title: '',
    image: '',
    mealType: '',
    Instructions: '',
    ingredients: [] 
},

{ 
    id: '',
    title: '',
    image: '',
    mealType: '',
    Instructions: '',
    ingredients: [] 
},

{ 
    id: '',
    title: '',
    image: '',
    mealType: '',
    Instructions: '',
    ingredients: [] 
},

{ 
    id: '',
    title: '',
    image: '',
    mealType: '',
    Instructions: '',
    ingredients: [] 
},

{ 
    id: '',
    title: '',
    image: '',
    mealType: '',
    Instructions: '',
    ingredients: [] 
},

{ 
    id: '',
    title: '',
    image: '',
    mealType: '',
    Instructions: '',
    ingredients: [] 
},

{ 
    id: '',
    title: '',
    image: '',
    mealType: '',
    Instructions: '',
    ingredients: [] 
},

{ 
    id: '',
    title: '',
    image: '',
    mealType: '',
    Instructions: '',
    ingredients: [] 
},

{ 
    id: '',
    title: '',
    image: '',
    mealType: '',
    Instructions: '',
    ingredients: [] 
},

{ 
    id: '',
    title: '',
    image: '',
    mealType: '',
    Instructions: '',
    ingredients: [] 
}],











const initialState = {
    user: { 
        name: '',
        location: '',
        contactEmail: '',
        recipes: [],  // This just stores the ID of the recipe to pull down the chef's recipes
        username: '',
        password: ''
    },

    recipes: {
        id: '',
        title: '',
        image: '',
        mealType: '',
        Instructions: ''
    },

    isFetching: false,
    error: ''
   }