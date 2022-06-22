import Footer from '../Footer';
import Header from '../Header';

import Main from './styled.js';

export default function Layout({children}) {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
}
