import Header from './Header.js';
import Navbar from './Navbar.js';
import Main from './styled.js';

export default function Layout({children}) {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Navbar />
		</>
	);
}
