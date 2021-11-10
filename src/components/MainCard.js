import { Card } from "react-bootstrap";

function MainCard({ handelCardClick, date, content, author }) {
    const isContentCard = Boolean(content);
	return (
		<>
			<Card
				onClick={handelCardClick}
				style={{
					cursor: "pointer",
					height: "200px",
					margin: "10px 10px",
					textOverflow: "ellipsis",
				}}
			>
				<Card.Body>
					{isContentCard ? (
						<>
							<Card.Title>{author}</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'>{date}</Card.Subtitle>
							<Card.Text>{content}</Card.Text>
						</>
					) : (
						<p>New Post</p>
					)}
				</Card.Body>
			</Card>
		</>
	);
}

export default MainCard;
