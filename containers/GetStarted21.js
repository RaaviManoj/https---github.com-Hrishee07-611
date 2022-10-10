import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, TouchableWithoutFeedback,ScrollView,Dimensions,SafeAreaView,StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from '../contants/Colors';
import Divider from '../components/Divider';
import Title from '../components/Title';
const { height } = Dimensions.get('window');



class GetStarted21 extends Component {
 
  constructor(props) {
    super(props);
    
    this.state = {
      HouseAddress: '',
      HouseRent: 0,
      LeasePeriod: 0,
      NumberOfBedrooms: 0,
      ValidAddress: '',
      ValidRent: '',
      ValidLease: '',
      ValidRooms: '',
     screenHeight: 0,
     
  };
  }
  onClickAllSet=(prop) =>
  {
    if (this.state.ValidAddress === false && this.state.ValidRent === false && this.state.ValidLease === false && this.state.ValidRooms === false) {
      prop.navigation.navigate('Rentals&Friends');
  } else {
    alert(Checkallvalues);
  }
  }

  onChangeAddress = (val) => {
    

    this.setState({
        HouseAddress: val
    });
    if(val!='' || val.length>10)
    {
      this.setState({
        ValidAddress: false
      });
    }
    else{
      this.setState({
        ValidAddress: true
      });
    }
    }

    onChangeRent = (val) => {
    
      this.setState({
        HouseRent: val
      });
      if(val==='' || val>0)
      {
        this.setState({
          ValidRent: false
        });
      }
      else{
        this.setState({
          ValidRent: true
        });
      }
    }

    onChangeLease = (val) => {
      this.setState({
        LeasePeriod: val
      });
      if(val==='' || val>0)
      {
        this.setState({
          ValidLease: false
        });
      }
      else{
        this.setState({
          ValidLease: true
        });
      }

    }
    onChangeRooms = (val) => {
      this.setState({
        NumberOfBedrooms : val
      });
      if(val==='' || val>0)
      {
        this.setState({
          ValidRooms: false
        });
      }
      else{
        this.setState({
          ValidRooms: true
        });
      }
    }


onContentSizeChange = (contentWidth, contentHeight) => {
  // Save the content height in state
  this.setState({ screenHeight: contentHeight });
};

 
  render() {
    // const { state, actions } = this.props;
    const scrollEnabled=true
   return(
    
    <SafeAreaView style={styles.con}>
 <StatusBar/>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollview}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
   <View style={styles.container}>
     
     <View style={{left: '12.62%'}}>
            <Title textMsg={'Get Started!'}/>
        </View>        
        <View style={styles.inputView}>
            <View style={{marginTop:10}}>
                <TextInput
                    style={styles.input}
                    val={this.state.HouseAddress}
                    onChangeText={(val) => this.onChangeAddress(val)}
                    placeholder="House Address : apt.no, street, city, state"
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={40}
                />
               
            </View>
            <View style={{marginTop:10}}>
            {this.state.ValidAddress && 
                    <Text style={styles.errorMsg}>please enter valid Address</Text>
                }
                </View>
            <View style={{marginTop:10}}>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    onChangeText={(val) => this.onChangeRent(val)}
                    val={this.state.HouseRent}
                    maxLength={10}
                    placeholder="House Rent in Dollars"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
            <View style={{marginTop:10}}>
            {this.state.ValidRent && 
                    <Text style={styles.errorMsg}>please enter valid House Rent</Text>
                }
                </View>
             
            <View style={{marginTop:10}}>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    onChangeText={(val) => this.onChangeLease(val)}
                    val={this.state.LeasePeriod}
                    maxLength={10}
                    placeholder="Lease Period In Months"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
            <View style={{marginTop:10}}>
            {this.state.ValidLease && 
                    <Text style={styles.errorMsg}>please enter valid Lease Period</Text>
                }
                </View>

                <View style={{marginTop:10}}>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    onChangeText={(val) => this.onChangeRooms(val)}
                    val={this.state.NumberOfBedrooms}
                    maxLength={10}
                    placeholder="Number of Bedrooms"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
            <View style={{marginTop:10}}>
            {this.state.ValidRooms && 
                    <Text style={styles.errorMsg}>please enter valid Number of Bedrooms</Text>
                }
                </View>


            <View style={styles.buttonView}>
           { this.state.ValidAddress === false && this.state.ValidRent === false &&  this.state.ValidLease === false &&  this.state.ValidRooms === false && this.state.HouseAddress != '' && this.state.HouseRent != 0 &&  this.state.LeasePeriod != 0 &&  this.state.NumberOfBedrooms != 0 ?
           (
                <TouchableWithoutFeedback
                onPress={()=>this.onClickAllSet(this.props)}
                >
                <Text style={[styles.nextbutton,{backgroundColor: Color.black}]}>I'M ALL SET</Text>
               </TouchableWithoutFeedback>
           ): (
               <TouchableWithoutFeedback disabled>
                <Text style={[styles.nextbutton,{backgroundColor: Color.grey}]}>I'M ALL SET</Text>
               </TouchableWithoutFeedback>
           )
           }
        </View>
        
        
       
      </View>
     </View>
     </ScrollView>  
     </SafeAreaView>
      
   )
    
  }
}






const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    marginTop: 20
},
con:{
    flex :1,
    backgroundColor:'white'
}
,
scrollview:{
  flexGrow:1
},
buttonView: {
  left: '12.62%',
    height: 40,
    marginTop: 60,
    width: '80%',
    // backgroundColor: Color.black,
    borderRadius: 5,
},
inputView: {
  left: '12.62%',
  marginTop: 50,
  width: '80%'
},
input: {
  height: 40,
  borderWidth: 2,
  padding: 10,
},
passwordStyle: {
 marginTop:15,
  flex:1,
  height: 40,
  borderWidth: 2,
  padding: 10,
},

errorMsg: {

color: '#FF0000',
fontSize: 14,
},
iconStyle: {
position:'absolute',
top: '50%',left: '90%'
},
buttonView:{
borderWidth: 2,
top:'5%',
width:'80%',
height:40,
left:'12.62%',
backgroundColor:'black'

},
already_reg: {
marginTop: 50,
height: 30,
left:'57%',
},
nextbutton:
{
color: Color.white,
fontSize: 15,
textAlign: 'center',
padding: 10
}
});


// function mapStateToProps(state) {
//   return {
//     state: state
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(appActions.actions, dispatch)
//   };
// }


// export default connect(mapStateToProps, mapDispatchToProps)(initialScreen);

export default GetStarted21;