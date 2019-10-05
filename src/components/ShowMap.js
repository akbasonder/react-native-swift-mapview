import React, { Component } from 'react';
import {StyleSheet,requireNativeComponent} from 'react-native';

const IosMap = requireNativeComponent('MapView');
export default class ShowMap extends Component {
    static navigationOptions = ({ navigation }) => {
        return{
            headerTitle: navigation.getParam('name'),
        }        
    };
    
  render() {
      const coordinates = this.props.navigation.getParam('coordinates');
      //console.log('coordinates===',coordinates);
      let totalLat=0,totalLng=0,total=0,maxLng,minLng,maxLat,minLat;
      let locations = [];
      for(i=0;i<coordinates.length;i++){          
        for(j=0;j<coordinates[i].length;j++){
            total++;
            const lat = coordinates[i][j][0];
            const lng = coordinates[i][j][1];
            totalLat += lat;
            totalLng += lng;
            if(lat<minLat || !minLat){
                minLat=lat;
            }
            if(lat>maxLat || !maxLat){
                maxLat=lat;
            }
            if(lng<minLng || !minLng){
                minLng=lng;
            }
            if(lng>maxLng || !maxLng){
                maxLng=lng;
            }
            locations.push({lat,lng});           
        }
      }
      //console.log('locations',locations);
      //console.log('lat:'+ (totalLat/total)+' lng:'+ totalLng/total+' latDelta:'+(maxLat-minLat)+'lngDelta:'+(maxLng-minLng))
    return (
        <>
        <IosMap
          markers={locations}
          mapCenter={{ lat: totalLat/total, lng: totalLng/total,latDelta:maxLat-minLat,lngDelta:maxLng-minLng }}
          style={StyleSheet.absoluteFillObject}
        />
      </>
    );
  }
}
