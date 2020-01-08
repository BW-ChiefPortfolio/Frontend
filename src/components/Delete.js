/* This will most likely be added into the ChefDashboard 
where the recipes are stored for each Chef.*/ 

/*Future updates: 

=> Add it to the dasboard where all the recipes a chef has are displayed...

=> Style - I will leave this in the end. Want to make sure the components
 are functioning first.

*/

import React from 'react';

const Delete = (props) => {
    //Starter code (example)
    // let recipesId = props.match.params.id;

    //Enables the certain post of recepi to be deleted.
    const onDelete = () => {
        //Starter code (example)
        // let recipesId = details.id;

        /* axios.delete here */
    };
    return (
        <button onClick={onDelete}>Delete</button>
    )
}

export default Delete;
