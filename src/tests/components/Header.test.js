import React from 'react';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Header } from '../../components/Header';
// shallow rendering vs full Dom rendering
// react-test-renderer helps render components inside regular js file

test('should render Header correctly', () => {
	// const renderer = new ReactShallowRenderer();
	// renderer.render(<Header />);
	// expect(renderer.getRenderOutput()).toMatchSnapshot();
	// console.log(renderer.getRenderOutput());
	const wrapper = shallow(<Header startLogout={() => {}} />);
	expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
	const startLogout = jest.fn();
	const wrapper = shallow(<Header startLogout={startLogout} />);
	wrapper.find('button').simulate('click');
	expect(startLogout).toHaveBeenCalled();
});

