import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import img1 from './static/img/new_profile_img.jpg';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';




const useStyles = makeStyles((theme) => ({
	base_top: {
		marginTop: '4vh',
		marginBottom: '3vh',
		backgroundColor: '#F2F2F2',
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

export default function Top() {
	const classes = useStyles();

	return (
		<Card className={classes.base_top}>
			<Card>
				<img className={classes.profile_img} src={img1} alt="me" />
			</Card>
			<div className={classes.text_content}>
	            <Typography gutterBottom variant="h4">
					STEVEN BI
	            </Typography>			
			</div>
            
			<div className={classes.text_content}>
	            <Typography gutterBottom variant="h8">
					FULL-STACK DEVELOPER
	            </Typography>			
			</div>

            <Divider variant="middle" />

			<div className={classes.personal_info}>
	            <Typography gutterBottom variant="body1">
					<div className={classes.personal_info}>
						<strong>Location: </strong>
						Perth WA, Australia					
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
	            </Typography>
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