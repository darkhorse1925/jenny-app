import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'

import {login} from '../redux/apiCalls'

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: pink;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Wrapper= styled.div`
	width: 33vw;
	min-width: 300px;
	padding: 20px;
`
const Title= styled.h1`
	margin-bottom: 10px;
`
const Form= styled.form`
	display: flex;
	flex-wrap: wrap;
	justify-content: center
`

const Input= styled.input`
	min-width: 100%;
	flex: 1;
	box-sizing: border-box;
	outline: none;
	margin: 10px  0;
	letter-spacing: 1px;
	padding: 10px;
`
const Register= styled.div`
	margin-top: 30px;
	margin-right: auto;
	margin-left: auto;
`
const Agreement= styled.div`
	font-size: 12px;
	margin-top: 10px ;
	margin-right: auto;
	margin-left: auto;
`
const Button= styled.button`
	width: 100%;
	margin-top: 2rem;
	padding: 15px 20px;
	border: none;
	background: teal;
	cursor: pointer;
	font-size: 1.1rem;
	color: white;

	&:disabled{
		background-color: lightgrey;
	}
`

const Error = styled.div`
	color: red;
	font-size: 0.7rem;
	width: 100%;
`

/*Start*/

const Login = () => {
	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")

	const dispatch = useDispatch()
	const {isFetching, error} =useSelector((state)=>state.user) 

	const handleClick = (e) =>  {
		e.preventDefault()
		login(dispatch,{email, password})
	}

	return (
		<Container>
			<Wrapper>
				<Title>Login</Title>
				<Form>
					<Input placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
					<Input 
						placeholder="Password"  
						type ="password"
						onChange={(e)=>setPassword(e.target.value)}/>
					<Button onClick={handleClick} disabled={isFetching}>Login</Button>
					{error && <Error>Something went wrong....</Error>}
					<Link to="/register">
						<Register>Dont have an Account? <u>Register</u></Register>
					</Link>
					<Agreement>By signing up you agree to our terms of service and Privacy policy</Agreement>
				</Form>
			</Wrapper>
		</Container>
	)
}
export default Login
