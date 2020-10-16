import 'react-native';
import React from 'react';
import NavBarButton from '../../../../components/buttons/NavBarButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../../../themes';

import TestRenderer from 'react-test-renderer';
// import {shallow, configure} from 'enzyme';
// import toJson from 'enzyme-to-json';
// import Adapter from 'enzyme-adapter-react-16';

// configure({adapter: new Adapter()});

// const navigation = {
//   navigate: jest.fn(),
// };

describe('Test NavBarButton', () => {
  const mockOnPress = jest.fn();
  const componentTreeIcon = TestRenderer.create(
    <NavBarButton
      location="left"
      color={colors.white}
      icon={<Icon name="angle-left" color={colors.white} size={30} />}
      handleButtonPress={mockOnPress}
    />,
  );

  const componentTreeText = TestRenderer.create(
    <NavBarButton
      location="right"
      text="Forgot Password"
      handleButtonPress={mockOnPress}
    />,
  );

  describe('Rendering NavBarButton', () => {
    it('should match to snapshot with Icon', () => {
      const componentSnapshotTreeIcon = componentTreeIcon.toJSON();
      expect(componentSnapshotTreeIcon).toMatchSnapshot();
    });
    it('should match to snapshot with Text', () => {
      const componentSnapshotTreeText = componentTreeText.toJSON();
      expect(componentSnapshotTreeText).toMatchSnapshot();
    });
  });

  //   describe('Rendering NavBarButton with Enzyme', () => {
  //     const wrapper = shallow(
  //       <NavBarButton
  //         location="left"
  //         color={colors.white}
  //         icon={<Icon name="angle-left" color={colors.white} size={30} />}
  //         handleButtonPress={mockOnPress}
  //       />,
  //     );

  //     it('should match to snapshot with Text', () => {
  //       expect(wrapper).toMatchSnapshot();
  //       console.log('wrapper: ', wrapper);

  //       wrapper.setProps({
  //         icon: <Icon name="angle-left" color={colors.white} size={30} />,
  //       });

  //       console.log('wrapper1: ', wrapper);

  //       expect(wrapper).toMatchSnapshot();

  //       const component = wrapper.dive();
  //       console.log('component2: ', component);
  //       expect(toJson(component)).toMatchSnapshot();
  //       console.log('toJson(component): ', toJson(component));
  //     });
  //   });
});
