/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */
'use strict';

const requireNativeComponent = require('requireNativeComponent');

import type {SyntheticEvent} from 'CoreEventTypes';
import type {TextStyleProp} from 'StyleSheet';
import type {NativeComponent} from 'ReactNative';
import type {SemanticOrDynamicColorType} from 'normalizeColor'; // ]TODO(macOS ISS#2323203)

type PickerIOSChangeEvent = SyntheticEvent<
  $ReadOnly<{|
    newValue: number | string,
    newIndex: number,
  |}>,
>;

type RCTPickerIOSItemType = $ReadOnly<{|
  label: ?Label,
  value: ?(number | string),
  textColor: ?(number | SemanticOrDynamicColorType),
|}>;

type Label = Stringish | number;

type RCTPickerIOSType = Class<
  NativeComponent<
    $ReadOnly<{|
      items: $ReadOnlyArray<RCTPickerIOSItemType>,
      onChange: (event: PickerIOSChangeEvent) => void,
      onResponderTerminationRequest: () => boolean,
      onStartShouldSetResponder: () => boolean,
      selectedIndex: number,
      style?: ?TextStyleProp,
      testID?: ?string,
    |}>,
  >,
>;

module.exports = ((requireNativeComponent('RCTPicker'): any): RCTPickerIOSType);
