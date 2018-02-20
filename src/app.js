import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {Header, Button, Card, CardSection, Spinner} from './common';
import Firebase from 'firebase';
import LoginForm from './common/loginform';


class App extends Component{

    state={loggedin:false};

    componentWillMount(){
        Firebase.initializeApp({
                apiKey: "AIzaSyBqhomJTwsnf-csLEytFQ8Dmhpn3u3UPDE",
                authDomain: "authentication-1e962.firebaseapp.com",
                databaseURL: "https://authentication-1e962.firebaseio.com",
                projectId: "authentication-1e962",
                storageBucket: "authentication-1e962.appspot.com",
                messagingSenderId: "579943658350"
        });

        Firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedin:true});
            }
            else{
                this.setState({loggedin:false});
            }
        })
    }

    renderContent(){
        switch(this.state.loggedin){
            case true:
                return(
                    <Card>
                        <CardSection>
                            <Button onPress={()=>Firebase.auth().signOut()}>Log Out</Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm/>;
            default:
                <Spinner size="large"/>
        }      
    }

    render(){
        return (
            <View>
                 <Header headerText={'Authentication'}/>
                {this.renderContent()}
            </View>
        );
    };
}

export default App;