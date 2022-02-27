import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';




const useStyles = makeStyles((theme) => ({
	base_top: {
		marginTop: '4vh',
		marginBottom: '3vh',
		backgroundColor: '#fafafa',
	},
	profile_img: {
		width: '80%',
		height: '70%',
		maxWidth: '300px',
		maxHeight: '400px',
	},
	text_content: {
		margin: theme.spacing(3),
		alignItems: 'center'
	},
	personal_info: {
		margin: theme.spacing(1.5),
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column'
		},
	},	
}));


const big_head = "https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/big_head.jpg";


export default function Top() {
	const classes = useStyles();

	return (
		<Card className={classes.base_top}>
			<Card>
				<img className={classes.profile_img} src={big_head} alt="me" />
			</Card>
			<div className={classes.text_content}>
	            <Typography gutterBottom variant="h4">
					STEVEN BI
	            </Typography>			
			</div>
            
			<div className={classes.text_content}>
	            <Typography gutterBottom variant="h6">
					FULL-STACK DEVELOPER
	            </Typography>			
			</div>

            <Divider variant="middle" />

			<div className={classes.personal_info}>
				<div className={classes.personal_info}>
					<strong>Location: </strong>
					<Typography variant="body2">Perth WA, Australia</Typography>			
				</div>
				<div className={classes.personal_info}>
					<strong>Github:</strong>
					<a title="Github" href="https://github.com/Chen-BBe/">github.com/Chen-BBe</a>
				</div>
				<div className={classes.personal_info}>
					<strong>Mobile:</strong>
					<a title="Mobile Phone" href="tel:0610450980608">(061) 0450980608</a>
				</div>
				<div className={classes.personal_info}>
					<strong>Email:</strong>
					<a title="Send Email" href="mailto:steven.bb.0221@gmail.com">steven.bb.0221@gmail.com</a>
				</div>
			</div>

			<Divider variant="middle" />

			<div className={classes.text_content}>
	            <Typography gutterBottom variant="body2">
				Qualified software engineer, experiences in coding Js, Python and core Java, passionate about web app 
				development with React/Django ecosystem, good on web based data visualization and API development. 
				Familiar with Docker, Git dev environment as well as knowledge of deploy to AWS/GCP.
	            </Typography>		
			</div>
		</Card>
	);
}