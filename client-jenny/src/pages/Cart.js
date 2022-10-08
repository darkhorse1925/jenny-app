import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {ArrowBack, ArrowForward, Add, Remove} from '@material-ui/icons'
import {removeProduct, dscQuantity, ascQuantity} from '../redux/cartRedux'

import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'

import fishsvg from '../assets/fish2.svg'

const Container = styled.div`
`
const Wrapper= styled.div`
	padding: 20px;
`
const Title= styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Logo= styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

const TitleText= styled.h3`
	text-align: center;
	font-weight: bold;
`
const TitleSvg= styled.img`
	height: 100px;
	width: 100px;
`
const TitleButton= styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	cursor: pointer;
	border: none;
	background-color: ${(props)=>props.type === "filled" ? "#006680" :"pink"};
	color: ${(props)=>props.type === "filled" && "white"}
`
const ButtonText = styled.div`
`

const Top= styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

const TopText= styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
`
const Bottom= styled.div`
	margin-top: 5vh;
	display: flex;
`
const Info= styled.div`
	flex: 3;
`
const Product= styled.div`
	display: flex;
	justify-content: space-between;
`
const ProductDetails= styled.div`
	flex: 2;
	display: flex;
`
const Image= styled.img`
	min-width:300px;
	max-width:300px;
	border-radius: 1rem;
	height: 200px;
	margin: 0.5rem;
	object-fit: cover;
`
const Details= styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
`
const ProductName= styled.div`
`
const ProductId= styled.div`
`
const PriceDetails= styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`
const Quantity= styled.div`
	display:flex;
	align-items: center;
	font-weight: 700;
`
const QuantityNum= styled.div`
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
const Price = styled.h4`
	margin-top: 1rem;
	font-weight: bold;
`

const RemoveCart = styled.button`
	margin: 2rem 0;
	width: 30%;
	padding: 10px;
	background-color:#006680;
	color:white;
	letter-spacing:1px;
	border: none;
	border-radius: 0.5rem;
	cursor: pointer;
`

const Hr= styled.hr`
	background-color:grey;
	border: none;
	height: 1px;
`
const Summary= styled.div`
	flex: 1;
	margin: 0 1rem;
	padding: 0.5rem;
	height: 55vh;
	border: 1px solid grey;
	border-radius: 1rem;
`
const SummaryTitle= styled.h5`
	letter-spacing: 1px;
	text-align: center;
	text-decoration: underline;
	font-weight: bold;
	margin-bottom: 1rem;
`
const SummaryItem= styled.div`
	margin-top: 1rem;
	display:flex;
	justify-content: space-between;
	font-weight: ${(props)=> props.type ==="total" && "bold"}
`
const SummaryItemText= styled.div`
`
const SummaryItemPrice= styled.div`
`
const SummaryButton= styled.button`
	margin: 2rem 0;
	width: 100%;
	padding: 10px;
	background-color:#006680;
	color:white;
	letter-spacing:1px;
	border: none;
	border-radius: 0.5rem;
	cursor: pointer;
`
const MapWrapper = styled.div`
`
const Rupee= styled.div`
	font-family: Montserrat;
	font-size: 1.54rem;
	display: inline;
	margin: 0;
`

 const Error = styled.h2`
	text-align: center;
	margin: 10vh 0 ;
`

/*Start of function*/

const Cart = () => {
	
	//redux
	const cart = useSelector(state =>state.cart)
	const dispatch = useDispatch()
	const length = Number(cart.products.length)

	return (
		<Container>
			<Navbar />
			<Announcement/>
			{cart.cartCount === 0 ? <Error>No items in your cart</Error> :
			<Wrapper>
				<Title>
					<Link to="/products">
						<TitleButton >
							<ArrowBack style={{fontSize: "16px",}} />
							<ButtonText>CONTINUE SHOPPING</ButtonText>
						</TitleButton>
					</Link>
					<Logo>
						<TitleText>YOUR BAG </TitleText>
						<TitleSvg src={fishsvg}/>
					</Logo>
					<Link to="/">
						<TitleButton type="filled">
							<ButtonText>CHECKOUT NOW</ButtonText>
							<ArrowForward style={{fontSize: "16px",}}/>
						</TitleButton>
					</Link>
				</Title>
				<Top>
					<TopText>Shopping Cart({length})</TopText>
					<TopText>Wishlist(2)</TopText>
				</Top>
				<Bottom>
					<Info>
						{cart.products.map((product)=>(
						<MapWrapper key={product._id}>
						<Product>
							<ProductDetails>
								<Image src={product.img} />
								<Details>
									<ProductName><b>Product Name:</b> {product.title}</ProductName>
									<ProductId><b>Product Id:</b> {product._id}</ProductId>
									<ProductId><b>Price:</b> ₹{product.price}<small>/piece</small></ProductId>
								</Details>
							</ProductDetails>
							<PriceDetails>
								<Quantity>
									<Remove onClick={()=> product.quantity >1 && dispatch(dscQuantity(product))}/>
									<QuantityNum>{product.quantity}</QuantityNum>
									<Add onClick={()=> dispatch(ascQuantity(product))}/>
								</Quantity>
								<Price><Rupee>₹</Rupee> {product.price * product.quantity}</Price>
								<RemoveCart onClick ={()=>{dispatch(removeProduct(product))}}>Remove</RemoveCart>
							</PriceDetails>
						</Product>
						<Hr />
						</MapWrapper>
						))}
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>SUBTOTAL</SummaryItemText>
							<SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>ESTIMATED SHIPPING</SummaryItemText>
							<SummaryItemPrice>₹ 50</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>SHIPPING DISCOUNT</SummaryItemText>
							<SummaryItemPrice>₹ -50</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type ="total">
							<SummaryItemText >TOTAL</SummaryItemText>
							<SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
						</SummaryItem>
						<Link to="/">
							<SummaryButton>CHECKOUT NOW</SummaryButton>
						</Link>
					</Summary>
				</Bottom>
			</Wrapper>
			}
			<Footer />
		</Container>
	)
}
export default Cart
