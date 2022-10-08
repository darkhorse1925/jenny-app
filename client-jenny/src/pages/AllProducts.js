import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Footer from '../components/Footer'

import styled from 'styled-components'

const Container = styled.div`
`

/*Start*/

const AllProducts= () => {
		


	return (
		<Container>
			<Announcement />
			<Navbar/>
			<Products />
			<Footer/>
		</Container>
	)
}
export default AllProducts 
