// HOC = a higher order component that renders another regular component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
);

const withAdminWarning = WrappedComponent => {
	return props => (
		<div>
			{props.isAdmin && <p>This is private info. Please don't share!</p>}

			<WrappedComponent {...props} />
		</div>
		// takes in every key value paired object and pass it down as props
		// use {props.isAdmin && then we can add conditional text if it passes the first condition}
	);
};

const requireAuthentication = WrappedComponent => {
	return props => (
		<div>
			{props.isAuthenticated ? (
				<WrappedComponent {...props} />
			) : (
				<p>Please login to view the info</p>
			)}
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
// 	<AdminInfo isAdmin={false} info="This is the detail" />,
// 	document.getElementById('app'),
// );

ReactDOM.render(
	<AdminInfo isAuthenticated={true} info="This is the detail" />,
	document.getElementById('app'),
);
