/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "RCTSinglelineTextInputViewManager.h"

#import "RCTBaseTextInputShadowView.h"
#import "RCTSinglelineTextInputView.h"

@implementation RCTSinglelineTextInputViewManager

RCT_EXPORT_MODULE()

- (RCTShadowView *)shadowView
{
  RCTBaseTextInputShadowView *shadowView =
    (RCTBaseTextInputShadowView *)[super shadowView];

  shadowView.maximumNumberOfLines = 1;

  return shadowView;
}

- (RCTUIView *)view // TODO(macOS ISS#3536887)
{
  return [[RCTSinglelineTextInputView alloc] initWithBridge:self.bridge];
}

@end
