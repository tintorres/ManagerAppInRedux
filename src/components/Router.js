import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';

const RouterComponent = () => {
  return(
      <Router sceneStyle={{ paddingTop:65 }}>
          <Scene key="root" hideNavBar>
            <Scene key="auth">
              <Scene key="login" title="Please Login" component={LoginForm} />
            </Scene>
            <Scene key="main">
              <Scene key="employeeList"
                    title="Employees"
                    component={EmployeeList}
                    rightTitle="Add"
                    onRight = {() => Actions.employeeCreate()}
                    initial
              />
              <Scene key="employeeCreate" title="Create Employee" component={EmployeeCreate} />
              <Scene key="employeeEdit" title="Edit Employee" component={EmployeeEdit} />
            </Scene>
          </Scene>
      </Router>
  );
};

export default RouterComponent;
