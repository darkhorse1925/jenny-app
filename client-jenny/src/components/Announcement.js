import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled.div`
	background-color: #006680;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 500;
`
const About = styled.div`
	text-decoration:underline;
	color: yellowgreen;
	font-weight: bold;
	margin-left: 10px;
`
const Announcement = () => {
	return (
		<div>
			<Container>
				The UI is not yet made responsive for mobile devices so it might break.
				<Link to="/about">
					<About>README</About>
				</Link>
			</Container>
		</div>
	)
}
export default Announcement

