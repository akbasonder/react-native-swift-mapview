//
//  NativeBridge.m
//  reactNativeSwiftMapView
//
//  Created by Onder Akbas on 5.10.2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(MapViewManager, RCTViewManager)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}
  RCT_EXPORT_VIEW_PROPERTY(mapCenter, NSDictionary)
  RCT_EXPORT_VIEW_PROPERTY(markers, NSArray)  
@end
