import 'react-native';
import React from 'react';
import HeartButton from '../../../../components/buttons/HeartButton';
import {colors} from '../../../../themes';

import TestRenderer, {act} from 'react-test-renderer';

describe('Test HeartButton', () => {
  const mockOnPress = jest.fn();
  const componentTree = TestRenderer.create(
    <HeartButton
      color={colors.white}
      selectedColor={colors.pink}
      selected={true}
      onPress={mockOnPress}
    />,
  );

  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const componentSnapshot = componentTree.toJSON();
      expect(componentSnapshot).toMatchSnapshot();
    });
  });

  it('should call onPress', () => {
    const instance = componentTree.getInstance();
    instance.addToFavorite();
    // Act
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('should call button testID="heartBtn"', () => {
    // press the button
    const button = componentTree.root.findByProps({testID: 'heartBtn'}).props;
    act(() => button.onPress());

    // expect test to equal "button pressed"
    // const
  });
});
