import {useState} from 'react'
import {useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components'

import {Badge} from '@material-ui/core'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import logoFish from '../assets/logo-fish.svg'

const Container = styled.div`
	height: 10%;
`
const Wrapper = styled.div`
	display: flex;
	background-color: pink;
	min-height: 100%;
	justify-content: space-between;
	padding: 10px 20px;
	align-items: center;
`
const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`
const SearchContainer= styled.div`
	display: flex;
	align-items: center;
	border: 2px solid #006680;
	border-radius: 1rem;
	padding-right: 10px;
`
const Input= styled.input`
	border: none;
	margin-left: 5px;
	background-color: transparent;
	padding: 5px;

	&:focus {
		outline: none;
	}
`
const Center = styled.div`
	text-align: center;
	flex: 1;
`
const Logo= styled.h2`
	margin: 0 0 ;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	text-transform: none;
`
const LogoFish= styled.img`
	width: 30px;
	height: 30px;
	padding: 0 2px;
`
const Right= styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`
const MenuItem= styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 10px;
`
const Login = styled.div`
	margin-right: 1rem;
	padding:0.5rem;
	text-decoration: underline;
	cursor: pointer;

	&:hover {
		border: 1.25px solid #006680;
		border-radius: 0.5rem;
	}
`

/*start*/

const Navbar = () => {

	const cartCount = useSelector(state=>state.cart.cartCount)
	const user = useSelector(state=>state.user.currentUser)
	const navigate = useNavigate()
	const [searchTerm, setSearchTerm] = useState('')

	function handleClick () {
		localStorage.clear()
		window.location.reload(false)
	}

	function handleKeyPress(e) {
		if(e.key === 'Enter' && searchTerm !== '') {
			navigate(`/products/search/${searchTerm}`)
		}
	}

	return (
		<Container>
			<Wrapper>
				<Left>
					<SearchContainer>
						<Input placeholder='Search.... ' 
							onChange={(e) => setSearchTerm(e.target.value)}
							onKeyDown = {handleKeyPress}/>
						<Search style={{color: "#006680", fontSize: "16px"}}/>
					</SearchContainer>
				</Left>
				<Center>
					<Link to="/">
						<Logo>Jenny's Aq<LogoFish src= {logoFish} />arium</Logo>
					</Link>
				</Center>
				<Right>
					<Link to='/login'>
						{user ? <Login onClick={handleClick}>Logout</Login> : <Login>Login</Login> }
					</Link>
					<MenuItem>
						<Link to='/cart'>
								<Badge overlap="rectangular" badgeContent={cartCount} color="primary">
								<ShoppingCartOutlined />
							</Badge>
						</Link>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	)
}
export default Navbar

