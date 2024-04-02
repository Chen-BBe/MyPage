import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import MailOutlineIcon from '@material-ui/icons/MailOutline';





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
					<MyLocationIcon />
					<Typography variant="body2" style={{ marginLeft: '5px' }}>Perth WA, Australia</Typography>			
				</div>
				<div className={classes.personal_info}>
					<GitHubIcon />
					<a title="Github" style={{ marginLeft: '5px' }} href="https://github.com/Chen-BBe/">Github</a>
				</div>
				<div className={classes.personal_info}>
					<LinkedInIcon />
					<a title="Linkedin" style={{ marginLeft: '5px' }} href="https://www.linkedin.com/in/steven-bi-786728a8/">Linkedin</a>
				</div>				
				<div className={classes.personal_info}>
					<PhonelinkRingIcon />
					<a title="Mobile Phone" style={{ marginLeft: '5px' }} href="tel:0610450980608">(061) 0450980608</a>
				</div>
				<div className={classes.personal_info}>
					<MailOutlineIcon />
					<a title="Send Email" style={{ marginLeft: '5px' }} href="mailto:steven.bb.0221@gmail.com">steven.bb.0221@gmail.com</a>
				</div>
			</div>

			<Divider variant="middle" />

			<div className={classes.text_content}>
	            <Typography gutterBottom variant="body2">
					<p>I'm a seasoned Full Stack Developer with a strong passion for crafting end-to-end solutions. I am familiar with cloud technologies and have experience working in both development and product environments.</p>
	            </Typography>		
			</div>
		</Card>
	);
}