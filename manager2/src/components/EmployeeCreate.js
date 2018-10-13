import React, {Component} from 'react';
import {connect} from 'react-redux'
import {employeeUpdate, employeeCreate} from '../actions'
import {Picker, Text} from 'react-native'
import {Card, CardSection, Input, Button} from './common'

class EmployeeCreate extends Component {
    onCreateButtonPressed(){
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift: shift || 'Tuesday'});

    }
    render(){
        const {name, phone, shift} = this.props;
        return(
            <Card>
                <CardSection>
                    <Input label="name" placeholder="Jane" value={name}
                    onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text})} />
                </CardSection>
                <CardSection>
                    <Input label="phone" placeholder="555-555-555" value={phone}
                           onChangeText={phone => this.props.employeeUpdate({prop: 'phone', value: phone})}/>
                </CardSection>
                <CardSection style={{flexDirection: 'row'}}>
                    <Text style={styles.pickTextStyle}>Shift</Text>
                    <Picker selectedValue={shift} style={{flex: 1}}
                    onValueChange={day=>this.props.employeeUpdate({prop: 'shift', value: day})}>
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onCreateButtonPressed.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickTextStyle: {
        fontSize:18,
        paddingLeft: 20
    }
};

function mapStateToProps(state){
    const {name, phone, shift} = state.employeeForm;
    return { name, phone, shift}
}

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);