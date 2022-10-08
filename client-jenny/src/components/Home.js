import {Link} from 'react-router-dom'
import styled from 'styled-components'
import GoldFish from '../assets/Big-Gold.jpeg'

const Container = styled.div`
	height:80vh;
	margin: 20px;
	display: flex;
	padding: 30px;
	gap: 5vw;
`
const WelcomeImage= styled.img`
	flex:1;
	object-fit:cover;
	border-radius: 2rem;
`

const Info= styled.div`
	flex: 1;
`
const Welcome= styled.h1`
	font-weight: bold;
	margin-bottom: 1rem;
`
const Message= styled.p`
`
const Shop= styled.button`
	cursor: pointer;
	letter-spacing: 1px;
	padding: 10px;
	border: none;
	background-color: black;
	color: white;
	border-radius: 0.5rem;
	border: 2px solid #006680;
	font-weight: bold;
	color: lightgrey;

	&:hover {
		transform: scale(1.1);
		box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
	}
`
const TagTitle= styled.p`
	font-weight: bold;
	margin-top: 1rem;
	margin-bottom: 0.5rem;
`
const Tags= styled.p`
	display: flex;
	gap: 5px;
`
const TagButton= styled.button`
	cursor: pointer;
	letter-spacing: 1px;
	padding: 10px;
	border: none;
	color: white;
	border-radius: 0.5rem;
	background-color: ${({type}) => 
		(type === "tropical" && "#5fbb9d") ||
		(type === "river" && "#1a2f1e") ||
		(type === "freshWater" && "#308ca4") ||
		(type === "best" && "crimson") ||
		(type === "saltWater" && "#0199d4")
	};

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
	}
`

const About = styled.span`
	text-decoration:underline;
	color: blueviolet;
	font-weight: bold;
	margin-left: 10px;
`

const Home = () => {
	return (
		<Container>
			<WelcomeImage src={GoldFish}/>
			<Info>
				<Welcome>Hi There! Welcome to Jenny's Aquarium</Welcome>
				<Message>You can serach for products by clicking the search box in the top left or by clicking the SHOP NOW button below!
					<Link to="/about">
						<About>README</About>
					</Link>
				</Message>
				<Link to="/products">
					<Shop>SHOP NOW</Shop>
				</Link>
				<TagTitle>Tags:</TagTitle>
				<Tags>
					<Link to="/products/tags/tropical">
						<TagButton type ="tropical">Tropical</TagButton>
					</Link>
					<Link to="/products/tags/freshwater">
						<TagButton type ="freshWater">Fresh Water</TagButton>
					</Link>
					<Link to="/products/tags/saltwater">
						<TagButton type ="saltWater">Salt Water</TagButton>
					</Link>
					<Link to="/products/tags/river">
						<TagButton type ="river">River</TagButton>
					</Link>
					<Link to="/products/tags/cheap">
						<TagButton type ="best">Best Deals</TagButton>
					</Link>
				</Tags>
			</Info>
		</Container>
	)
}
export default Home
