import Navbar from './Navbar.js';
import Header from './Header.js';
import Main from './styled.js';

export default function Layout({children}) {
	return (
		<>
			<Header></Header>
			<Main>{children}</Main>
			<Navbar />
		</>
	);
}
