import styled from 'styled-components'

const Container = styled.div`
	margin: 2rem;
`
const Title = styled.h2`
	text-decoration: underline;
	font-weight: bold;
	margin-bottom: 1.5rem;
`
const Para = styled.p`
`
const SiteInfo= styled.h3`
	margin: 1rem 0;
	text-decoration: underline;
	margin-bottom: 1rem;
`
const Table = styled.table`
	margin-top:1rem;
	min-width: 50vw;
	text-align: left;
	border-collapse: collapse;
	position: relative;
`

const About = () => {
	return (
		<Container>
			<Title>About Page</Title>
			<Para>This website is solely made for demonstratie purpose and as a hobby. This site is meant to be a full-stack e-commerce website made with Mongodb(mongoose), Express, Node, React(MERN), Redux and JWT. Though this website was inspired by quite a few websites and projects, almost all of the code was typed by me in vim and the complete code is on github.</Para>
			<SiteInfo>Site Info</SiteInfo>
			<Para>Note some functionality this site might not work as expected due to the lack of development caused by the time constrains; a detailed list of functionality of the website is provided down below.</Para>
			<ul>
				<li>Site will break on mobile devices.</li>
				<li>So to get the best exerience try it on bigger screens, since I won't most likely be writing the css for it.</li>
				<li><strike>Filters in the products page, though not a big deal I haven't got the time to fix it. And iam looking forward to fix it and replace it with sort.</strike></li>
				<li>Tags in the Home screen will work.</li>
				<li>Register user is functional but I disabled it.</li>
				<li>Instead use login user to get the jwt token, though the site can be experienced to its fullest without logging in.</li>
				<li>The site uses redux, so the cart functionality is done on local storage, and doesnt call the api.</li>
				<li>Disabled cart details getting stored in backend.</li>
				<li>Wishlist Heart also is not implemented.</li>
				<li>Order page and processing orders, are not implemented. Initially used stripe for transactions, but could'nt complete it so I totally removed it.</li>
				<li>The Home screen might look bland, I initially intended to use slider js and have cool slider. But I havent got the time to do.</li>
				<li>You can click on the logo to return to the homepage anytime.</li>
				<li>The Api for this site is a lot polished and is capable of doing CRUD operations but the frontend as of now can only Read data even though the admin system is implemented.</li>
				<li>The admin page for this site is very have cooked so I didnt attack it anywhere.</li>
				<li>I personnaly used Postman to upload data to the Database.</li>
				<li><b>Credentials: admin@jenny.com, Password: adminjenny.</b></li>
				<li>Oh and btw the site name is from a childhood <a href="https://toomkygames.com/download-free-games/jennys-fish-shop/"><u>video game</u></a>, if u where curious</li>
			</ul>
			<SiteInfo>Contact Info</SiteInfo>
			<Table>
				<tr>
					<td>Email</td>
					<td>darkhorse1925@protonmail.com</td>
				</tr>
				<tr>
					<td>Github</td>
					<td><a href="https://github.com/darkhorse1925"><u>https://github.com/darkhorse1925</u></a></td>
				</tr>
			</Table>
		</Container>
	)
}
export default About
