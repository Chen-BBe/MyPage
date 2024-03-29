import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';




const useStyles = makeStyles((theme) => ({
	base_work: {
		marginTop: '3vh',
		marginBottom: '3vh',
		backgroundColor: '#fafafa',
	},
	work_layout: {
		margin: theme.spacing(1.5),
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
	},	
	bg_title: {
		padding: theme.spacing(2),
	},

	work_content: {
		margin: theme.spacing(2),
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center',
	    [theme.breakpoints.down('lg')]: {
      		flexDirection: 'column'
	    },	
	},
	work_content_left: {
		margin: theme.spacing(2),
		justifyContent: 'center',
		alignContent: 'center', 
	},
	logo_content: {
		margin: '0.5vh',
		backgroundColor: 'white',
	},
	job_title: {
		display: 'flex',
		minWidth: "500px",
		marginLeft: '10vh',
		flexDirection: 'column',
		justifyContent: 'center',
		alignContent: 'center', 
	    [theme.breakpoints.down('lg')]: {
      		marginLeft: '0vh',
	    },			
	},
	job_details: {
		display: 'flex',
		flexDirection: 'column',
	    [theme.breakpoints.down('md')]: {
			textAlign: 'center',
	  	},
	},
	job_details_li: {
		margin: theme.spacing(1),
		width: "300px",
		textAlign: 'left',
	    [theme.breakpoints.down('md')]: {
      		textAlign: 'center',
	    },
	}	
}));

export default function Work() {
	const classes = useStyles();
	
	const work_list = [
		{
			'img': 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/pointerra.png',
			'url': 'https://www.pointerra.com/',
			'title': 'Pointerra', 'role': 'Full Stack Developer', 
			'date': 'June 2022 to Present', 
			'description': ['Maintain platform reliability, scalability, and robustness improvements', 'Helping deployment process for Pointerra’s SaaS applications,', 'Managing and improving the automated software build and test platform for frontend system']
		},		
		{
			'img': 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/atomorphis.jpg',
			'url': 'https://www.atomorphis.com/',
			'title': 'Atomorphis', 'role': 'Software Developer', 
			'date': 'November 2020 to April 2022', 
			'description': ['Implement interactive and map based front-end system from scratch', 'Continuously work on Gemini data visualization of mining fleet and equipment simulation in 2D & 3D.', 'API development', 'Dockerize and maintain whole front-end sytem in docker container']
		},	
		{
			'img': 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/hotel.jpg',
			'url': 'https://www.bunburyhotelkoombanabay.com.au/',
			'title': 'South Pacific', 'role': 'Web Developer (Contract)', 
			'date': 'July 2020 to November 2020', 
			'description': ['Restore website and its data from the damaged backup & online booking system', 'Excel based data analysis tool', 'Off-line email marketing system']
		},
		{
			'img': 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/lianjia.jpg',
			'url': 'https://sh.lianjia.com/',
			'title': 'Lianjia', 'role': 'Software Developer (Shang Hai - China)', 
			'date': 'January 2019 to April 2020', 
			'description': ['Maintain online platform and bug fix', 'End to end test', 'Work on new features and UI improvement']
		},		
		// {
		// 	'img': 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/pinyi.bmp',
		// 	'url': 'http://www.shpy.com',
		// 	'title': 'PinYi', 'role': 'BI Developer (Shang Hai - China)', 
		// 	'date': 'Jun 2010 to Apr 2012', 
		// 	'description': ['6 months intership included', 'Offer consulting services for Bank of Communications', 'Data migrate & analysis & maintain for Bank of Communications']
		// },
	];

	return (
		<Card className={classes.base_work}>
			<div className={classes.work_layout}>
	            <Typography className={classes.bg_title} gutterBottom variant="h5">
					<strong style={{ color: "grey" }}>WORK</strong>
	            </Typography>			
			</div>
			<div className={classes.work_layout}>
				{work_list.map((item, index) => (
					<div key={index} className={classes.work_content}>
						<Paper className={classes.work_content_left} elevation={3}>
							<div className={classes.logo_content}>
								<a href={item.url}>
									<img src={item.img} alt="" width="150" height="150" />
								</a>								
							</div>
						</Paper>
						<div className={classes.job_title}>
							<Typography gutterBottom variant="h6">
								<strong>{item.title}</strong>
							</Typography>
							<Typography gutterBottom variant="subtitle1">
								{item.role}
							</Typography>
							<Typography gutterBottom variant="subtitle2">
								{item.date}
							</Typography>
						</div>
						
						<div style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							width: "100%"
						}}>
							<div className={classes.job_details}>
								<ul>
								{item.description.map((sub_item, sub_index) => (
									<li key={sub_index} className={classes.job_details_li}>
										<Typography gutterBottom variant="caption">{sub_item}</Typography>
									</li>
								))}
								</ul>
							</div>
			            </div>
					</div>	
				))}
			</div>
		</Card>
	);
}
