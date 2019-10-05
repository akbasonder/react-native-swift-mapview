//
//  MapView.swift
//  reactNativeSwiftMapView
//
//  Created by Onder Akbas on 5.10.2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

import Foundation
import UIKit
import MapKit

class MapView: UIView {
  
  @objc var mapCenter: NSDictionary = [:]
  @objc var markers: NSArray!
  
  override init(frame: CGRect) {
    super.init(frame: frame)
  }
  

  override func didSetProps(_ changedProps: [String]!) {
    let mapView = MKMapView()
    mapView.mapType = MKMapType.standard
    mapView.isZoomEnabled = true
    mapView.isScrollEnabled = true
    
    let lat = self.mapCenter.object(forKey: "lat") as! Double
    let lng = self.mapCenter.object(forKey: "lng") as! Double
    
    let latDelta = self.mapCenter.object(forKey: "latDelta") as! Double
    let lngDelta = self.mapCenter.object(forKey: "lngDelta") as! Double
    
    for i in 0...self.markers.count-1 {
      let marker = self.markers[i] as! NSDictionary
      let mLat = marker.object(forKey: "lat") as! Double
      let mLng = marker.object(forKey: "lng") as! Double
      
      let annotations = MKPointAnnotation()
     // annotations.title = "myTitle"
      annotations.coordinate = CLLocationCoordinate2D(latitude: mLat, longitude: mLng)
      mapView.addAnnotation(annotations)
    }
    
    let location = CLLocationCoordinate2D(latitude: lat, longitude: lng)
    let span = MKCoordinateSpan(latitudeDelta: latDelta, longitudeDelta: lngDelta)
    let region = MKCoordinateRegion(center: location, span: span)
    mapView.setRegion(region, animated: true)
    mapView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    
    self.addSubview(mapView);
  }
  
  required init(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  
}
