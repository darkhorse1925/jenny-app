import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
`

const Input= styled.input`
	min-width: 100%;
	flex: 1;
	box-sizing: border-box;
	margin: 10px 10px 0 0;
	padding: 10px;
`
const Login= styled.div`
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
	margin-top: 3rem;
	padding: 15px 20px;
	border: none;
	background: teal;
	cursor: pointer;
	font-size: 1.1rem;
	color: white;
`

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Create Account</Title>
				<Form>
					<Input placeholder="Name" />
					<Input placeholder="Email" />
					<Input placeholder="Password" type="password"/>
					<Input placeholder="Confirm Password" type="password"/>
					<Button>CREATE</Button>
					<Login>Already have an account?<Link to="/login"><u>Log In</u></Link></Login>
					<Agreement>By signing up you agree to our terms of service and Privacy policy</Agreement>
				</Form>
			</Wrapper>
		</Container>
	)
}
export default Register
