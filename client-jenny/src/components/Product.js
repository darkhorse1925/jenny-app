import {addProduct} from '../redux/cartRedux'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {FavoriteBorderOutlined, AddShoppingCartOutlined} from '@material-ui/icons'

const Container = styled.div`
	background: black;
	flex: 1 0 21%;
	max-width: 22.5%;
	padding: 5px;
	margin-bottom: 10px;
	position: relative;
	border-radius: 0.5rem;

	&:hover {
		transform: scale(1.1);
		box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
	}
`
const Image= styled.img`
	width: 100%;
	height: 185px;
	object-fit: cover;
`

const Info= styled.div`
	display: flex;
	justify-content: space-between;
`
const Name= styled.p`
	color: white;
	text-transform: capitalize;
	display: inline-block;
	margin-bottom: 5px;
	margin-left: 5px;
`
const Favorite = styled.div`
	cursor: pointer;

	&:hover {
		transform: scale(1.1)
	}
`

const Buy= styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 7px;
`

const Button= styled.button`
	cursor: pointer;
	color: white;
	background:  #008fb3;
	border-color: transparent;
	border-radius: 0.5rem;
	letter-spacing: 1px;
	padding: 0.375rem 0.75rem;
	margin-left: 5px;
	text-transform: capitalize;
	display: inline-block;

	&:hover {
		background-color: #006680;
		transform: scale(1.1)
	}
`


const Icon= styled.div`
	display: flex;
	width: 2rem;
	height: 2rem;
	padding: 2px;
	justify-content: center;
	align-items: center;
	background-color: gold;
	color: black;
	padding: 2px;
	border-radius: 50%;
	cursor: pointer;

	&:hover {
		background-color: #B59410;
	}
`

/*Start*/

const Product = ({item}) => {

	const dispatch = useDispatch()
	function handleClick (){
		dispatch(
			addProduct({...item, quantity: 1})
		)
	}

	return (
		<Container >
			<Image src={item.img}/>
			<Info>
				<Name>{item.title}</Name>
				<Favorite>
					<FavoriteBorderOutlined style={{color: "#ff8ba7", }}/>
				</Favorite>
			</Info>
			<Buy>
				<Link to ={`/product/${item._id}`}>
					<Button>Buy ₹{item.price}</Button>
				</Link>
				<Icon onClick={handleClick}>
					<AddShoppingCartOutlined style={{fontSize: "18px", }}/>
				</Icon>
			</Buy>
		</Container>
	)
}
export default Product
