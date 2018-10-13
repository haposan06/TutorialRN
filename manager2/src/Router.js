import React from 'react';
import {Scene, Router, Stack, Actions} from 'react-native-router-flux'
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeCreate from "./components/EmployeeCreate";

const RouterComponent = () => {
    return(
        <Router>
            <Stack key="root" hideNavBar >
                <Stack key="auth">
                    <Scene key="login" component={LoginForm} title="Please login"
                           titleStyle={{flex: 1, textAlign: 'center'}}  initial/>
                </Stack>
                <Stack key="main">
                    <Scene key="employeeList" rightTitle="Add" onRight={()=>Actions.employeeCreate() }
                     component={EmployeeList} title="Employees"
                           titleStyle={{flex: 1, textAlign: 'center'}} initial />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee"
                           titleStyle={{flex: 1, textAlign: 'center'}} />
                </Stack>
            </Stack>
        </Router>
    );
};

export default RouterComponent;
