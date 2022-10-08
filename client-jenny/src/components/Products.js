import {useState, useEffect,} from 'react'
import {useLocation} from 'react-router-dom'
import styled from 'styled-components'

import Product from './Product'
import {publicRequest} from '../requestMethods'

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	margin: 0 5vw;
	gap: 3vw;
	margin-top: 6vh;
`
 const Error = styled.h2`
	text-align: center;
	margin: 10vh 0 ;
`

/*start*/

const Products = () => {
	const [products, setProducts] = useState([])
	const location = useLocation()
	const search= location.pathname.split('/')[3]

	let tag = ''
	if(location.pathname.split('/')[2] === 'tags') {
		tag = location.pathname.split('/')[3]
	}

	useEffect(()=>{
		const getProducts = async () => {
			try{
				if (tag) {
					const res = await publicRequest.get(`/products/?tag=${tag}`)
					setProducts(res.data)
				} else {
					const res = await publicRequest.get( search ? `/products/search/${search}`: `/products`)
					setProducts(res.data)
				}
			}catch (err) {
			}
		}
		getProducts()
	},[search, tag])

	return (
		<Container>
			{products.length <1  && <Error>Trying to fetch your products....</Error>}
			{ products.map((item) => (
				<Product  item={item}  key ={item._id}/>
			))}
		</Container>
	)
}
export default Products
