import {useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {Remove, Add} from '@material-ui/icons'
import styled from 'styled-components'
import {addProduct} from '../redux/cartRedux'
import {useDispatch} from 'react-redux'


import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import {publicRequest} from '../requestMethods'

const Container = styled.div`
`
const Wrapper= styled.div`
	margin: 50px;
	display:flex;
	gap: 5vw; 
`
const ImgContainer= styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
`
const Image= styled.img`
	max-height:100%;
	width: 66%;
	object-fit: cover;
	border-radius: 1.5rem;

`
const InfoContainer= styled.div`
	flex: 1;
	padding: 5px;
`
const Title= styled.h2`
`
const Desc= styled.p`
	margin: 20px 0 ;
`
const Price= styled.h3`
	margin-bottom: 1rem;
`
const AddContainer= styled.div`
	display:flex;
	width:50%;
	align-items: center;
	justify-content: space-between;
`
const AmountContainer = styled.div`
	display:flex;
	align-items: center;
	font-weight: 700;
`
const Amount= styled.div`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	text-align: center;
	border: 1px solid #006680;
	margin: 0 5px;
	display: flex;
	justify-content:center;
	align-items: center;
`
const Button= styled.button`
	padding: 15px;
	border: 1px solid #006680;
	border-radius: 10px;
	cursor: pointer;

	&:hover {
		background-color: #006680;
		color: white;
	}
`
/*Start*/

const SingleProduct = () => {

	const location = useLocation()
	const id = location.pathname.split('/')[2]

/*Fetch data from api*/
	const [product,setProduct] = useState({})
	useEffect(()=> {

		const getProduct= async () => {
			try {
				const res = await publicRequest.get('/products/find/'+id)
				setProduct(res.data)
			} catch (err) {
			}
		}
		getProduct()
	},[id])

/*Quantity*/
	const [quantity,setQuantity] = useState(1)
	function handleQuantity(type) {
		if(type=== 'dsc' )
			quantity > 1 && setQuantity(quantity-1)
		else 
			setQuantity(quantity+1)
	}

/*Redux cart update*/
	const dispatch = useDispatch()
	function handleClick (){
		dispatch(
			addProduct({...product, quantity})
		)
	}

	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImgContainer>
					<Image src={product.img} />
				</ImgContainer>
				<InfoContainer>
					<Title>{product.title}</Title>
					<Desc>{product.desc}</Desc>
					<Price>₹ {product.price}</Price>
					<AddContainer>
						<AmountContainer>
							<Remove onClick={()=>handleQuantity("dsc")}/>
							<Amount>{quantity}</Amount>
							<Add onClick={()=>handleQuantity("asc")}/>
						</AmountContainer>
						<Button onClick={handleClick}>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Footer />
		</Container>
	)
}

export default SingleProduct 
