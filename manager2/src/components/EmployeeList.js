import React, {Component} from 'react';
import _ from 'lodash';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux'
import {employeeFetch} from '../actions'
import {Card, CardSection} from "./common";

class EmployeeList extends Component {
    componentWillMount(){
        this.props.employeeFetch();
    }
    renderItem(employee){
        console.log(employee);

        return (
            <CardSection>
                <Text>{employee}</Text>
            </CardSection>
        )
    }
    render(){
        return(
            <Card>
                <FlatList renderItem={this.renderItem} data={this.props.employee} />
            </Card>
        );
    }
}

function mapStateToProps(state){
    const employees = _.map(state.employee, (val, uid) => {
        return {...val, uid};
    });
    return {employees};
}

export default connect(mapStateToProps, {employeeFetch})(EmployeeList);