
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNUiKitPickerSpec.h"

@interface UiKitPicker : NSObject <NativeUiKitPickerSpec>
#else
#import <React/RCTBridgeModule.h>

@interface UiKitPicker : NSObject <RCTBridgeModule>
#endif

@end
