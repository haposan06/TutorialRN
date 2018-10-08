import React, {Component} from 'react'
import {Button, Card, CardSection, Input, Spinner} from "./common";
import {connect} from 'react-redux';
import {View, Text} from 'react-native'
import {emailChanged, passwordChanged, loginUser} from "../actions";

class LoginForm extends Component{
    onEmailChange(text){
        this.props.emailChanged(text)
    }
    onPasswordChange(text){
        this.props.passwordChanged(text)
    }

    onLoginButtonPressed(){
        const {email, password, loginUser} = this.props;
        loginUser({email, password})
    }
    renderButton(){
        if (this.props.loading){
            return <Spinner size="large" />
        }

        return (
            <Button onPress={this.onLoginButtonPressed.bind(this)}>
                Login
            </Button>
        )
    };
    renderError(){
        if (this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyles}>{this.props.error}</Text>
                </View>
            )
        } else {
            return(
                <Button onPress={this.onLoginButtonPressed.bind(this)}>
                    Login
                </Button>
            )
        }
    }
    render(){
        const {email,password} = this.props;

        return (
            <Card>
                <CardSection>
                    <Input label="email" placeholder="email@gmail.com"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={email}/>
                </CardSection>

                <CardSection>
                    <Input secureTextEntry
                            label="password"
                           value={password}
                            onChangeText={this.onPasswordChange.bind(this)}
                            placeholder="password"/>
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyles : {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

function mapStateToProps(state){
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);