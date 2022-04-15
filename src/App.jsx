import styled from 'styled-components';
import { AppScaffold } from './AppScaffold';

const Container = styled.div`
	padding: 2rem;
`;

export const App = () => {
	return (
		<AppScaffold title="CSB Starter - React">
			<Container>
				<h1>Hello, World</h1>
				<p>
					Start editing to see{' '}
					<a className="running-text" href="#">
						some magic
					</a>{' '}
					happen!
				</p>
			</Container>
		</AppScaffold>
	);
};
