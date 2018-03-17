import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {



  onRowPress() {
    const { uid, name, phone, shift } = this.props.employee;
    console.log('onRowPress');
    console.log(this.props.employee);
    Actions.employeeEdit({employee: this.props.employee});
  }

  render() {
    const { uid, name, phone, shift } = this.props.employee;
    return(
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text> { uid } - { name } - { phone } </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  };

}

export default ListItem;
