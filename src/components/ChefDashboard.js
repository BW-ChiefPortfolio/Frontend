// Created by Nathan Loveless modified by Nathan and Giovani on 12/19/19
import React from 'react';
import { connect } from 'react-redux';

const ChefDashboard = (props) =>
{
    console.log(props);
    return (
        <div>
            This will be the chef dashboard!
        </div>
    )
}

const mapStateToProps = state => ({
    recipies: state.recipies
  });
  
  export default connect(
    mapStateToProps, { })(ChefDashboard);