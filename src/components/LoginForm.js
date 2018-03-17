import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from './actions';

class LoginForm extends Component<{}> {

  onEmailChange( text ) {
    this.props.emailChanged( text );
  }

  onPasswordChange( text ) {
    this.props.passwordChanged( text );
  }

  onLoginUser() {
    const {email, password} = this.props;
    this.props.loginUser( { email, password } );
  }

  onLoginUserFail() {
    const error = this.props.error;
    const errorTextStyle = styles.errorTextStyle;
    return(
      <View>
          <Text style = {errorTextStyle}>{error}</Text>
      </View>
    );

  }

  render() {
      return(
          <Card>
            <CardSection>
              <Input
                  label="Email"
                  placeholder="email@gmail.com"
                  onChangeText={this.onEmailChange.bind(this)}
                  value={this.props.email}
               />
            </CardSection>
            <CardSection>
              <Input
                secureTextEntry
                label="Password"
                placeholder="password"
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </CardSection>

            { this.onLoginUserFail() }

            <CardSection>
              <Button onPress={this.onLoginUser.bind(this)}>
                Login
              </Button>
            </CardSection>
          </Card>
      )
  }

}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    user: state.auth.user,
    error: state.auth.error
  }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
