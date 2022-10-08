import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Home from '../components/Home'
import Footer from '../components/Footer'


const HomePage = () => {
	return (
		<div>
			<Announcement />
			<Navbar/>
			<Home />
			<Footer/>
		</div>
	)
}

export default HomePage
