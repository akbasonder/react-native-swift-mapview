//
//  MapViewManager.swift
//  reactNativeSwiftMapView
//
//  Created by Onder Akbas on 5.10.2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
@objc(MapViewManager)
class MapViewManager: RCTViewManager {
  
  override func view() -> MapView {
    let map = MapView(frame: CGRect(x:0, y:0, width: 0, height: 0))
    return map
  }
}
