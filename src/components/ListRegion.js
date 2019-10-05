import React, { Component } from 'react';
import { Text, View,ScrollView,TouchableOpacity,TextInput,Dimensions,Platform } from 'react-native';
import {inputData} from '../data/input'
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class ListRegion extends Component {

    static navigationOptions = {
        headerTitle: 'Regions',    
      };

    constructor(props) {
        super(props);
        this.state = {
          searchName: ''
        }
    
      }
    
      
  render() {
    return (
        <View >
        <View style={{ paddingLeft: 10, paddingBottom: 20, height:50, borderBottomColor: 'rgb(125,125,125)' }}>
          <TextInput style={{ height:50,backgroundColor: 'rgb(240,240,240)', borderRadius: 10, borderColor: 'white',fontSize:20 }} 
            placeholder='Search' value={this.state.searchName} onChangeText={(text) => this.setState({ searchName: text })}></TextInput>
        </View>
        <ScrollView
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ width: SCREEN_WIDTH, borderBottomColor: 'rgb(125,125,125)', borderBottomWidth: 1 }}></View>

          {inputData.map((record, i) => {
              //console.log("record", record);
              return <View key={i}>
                <RecordComponent style={{ height: 50, width: 150 }} record={record} searchName={this.state.searchName} navigation={this.props.navigation} />
              </View>
            }
            ) 
          }

        </ScrollView>

      </View>
    );
  }
}

const RecordComponent = ({ record, searchName,navigation }) => {    
    if (record.name.toLowerCase().indexOf(searchName.toLowerCase()) < 0)
      return <View />
    return (<TouchableOpacity underlayColor="#f0f4f7" onPress={()=>{
        if(!record.geo_data || !record.geo_data.coordinates || record.geo_data.coordinates.length===0){
            alert('this location has no geographic coordinates');
            return;
        }
        if(Platform.OS==='ios'){
            navigation.navigate('ShowMapNav',{name:record.name,coordinates:record.geo_data.coordinates})
        }else{
            alert('MapView was only implemented for ios');
        }
    }}>
      <View style={{ flexDirection: 'row', height: 50, width: SCREEN_WIDTH, borderBottomColor: 'rgb(125,125,125)', borderBottomWidth: 1, alignItems: 'center' }}>
        <Text style={{ flex: 0.8, textAlign: 'left', marginLeft: 20 }}>{record.name}</Text>
        <Text style={{ flex: 0.2, textAlign: 'right', fontSize: 40,color:'rgb(150,150,150)',marginRight:10 }}> > </Text>
      </View>
    </TouchableOpacity>
    )
  }