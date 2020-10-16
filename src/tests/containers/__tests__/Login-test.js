import 'react-native';
import expect from 'expect';
import React from 'react';
import Login from '../../../containers/login';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import InputField from '../../../components/form/InputField';
import authAction from '../../../store/actions/authAction';
import Enzyme, {mount, shallow} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

const middlewares = []; // you can mock any middlewares here if necessary

const mockStore = configureStore(middlewares);

const initialState = {
  auth: {
    loggedInState: false,
  },
};

// const store = mockStore(initialState);

describe('Test Login container', () => {
  let store;
  let component;
  let wrapper;
  let wrapperShallow;
  const mockLoginfn = jest.fn();
  const defaultState = {
    formValid: true,
    validEmail: false,
    emailAddress: '',
    password: '',
    validPassword: false,
    loadingVisible: false,
    secureInput: 'text',
  };

  beforeEach(() => {
    //creates the store with any initial state or middleware needed
    store = mockStore(initialState);
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    // wrapper = mount(
    //   <Provider store={store}>
    //     <Login />
    //   </Provider>,
    // );
    wrapperShallow = shallow(<Login store={store} login={mockLoginfn} />);
  });

  afterEach(() => {
    component.unmount();
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch an action on button click', () => {
    renderer.act(() => {
      component.root.findByType('button').props.onClick();
    });
    renderer.act(() => {
      component.root
        .findByType('input')
        .props.onChange({target: {value: 'some other text'}});
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      authAction.login('test@test.com', '123456'),
    );
  });

  it('renders the inner InputField', () => {
    expect(wrapperShallow.find(InputField).length).toEqual(2);
  });
});
