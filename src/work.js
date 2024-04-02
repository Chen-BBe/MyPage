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
			'img': 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/ntt_data.png',
			'url': 'https://www.nttdata.com/global/en/',
			'title': 'Ntt Data', 'role': 'Front End Developer (Contractor)', 
			'date': 'May 2023 to August 2023',
			'description': [
				'Finished all prototypes with required features and designs', 
				'Identify and explain the gap between current Power BI system and Dash & Plotly', 
				'Created cache architectural layer for improving heavy load and real-time data visualization'
			]
		},		
		{
			'img': 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/pointerra.png',
			'url': 'https://www.pointerra.com/',
			'title': 'Pointerra', 'role': 'Full Stack Developer', 
			'date': 'June 2022 to December 2022',
			'description': [
				'Added walk-through feature to the platform for marketing team', 
				'Implemented a notification mechanism across different channels to support development', 
				'Helping deployment process for Pointerra’s SaaS applications'
			]
		},		
		{
			'img': 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/atomorphis.jpg',
			'url': 'https://www.idoba.com/',
			'title': 'Atomorphis (now known as Idoba)', 'role': 'Software Developer', 
			'date': 'November 2020 to June 2022', 
			'description': [
				'Implemented Gemini web based simulation tool from scratch', 
				'Exploring all possible tech and tools for supporting 2D & 3D in data visualizationa & simulation on web app', 
				'Played a pivotal role in every step of the product lifecycle', 
				'Helped product down to the ground and the product acquisition from Idoba'
			]
		},	
		// {
		// 	'img': 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/hotel.jpg',
		// 	'url': 'https://www.bunburyhotelkoombanabay.com.au/',
		// 	'title': 'South Pacific', 'role': 'Web Developer (Contract)', 
		// 	'date': 'July 2020 to November 2020', 
		// 	'description': ['Restore website and its data from the damaged backup & online booking system', 'Excel based data analysis tool', 'Off-line email marketing system']
		// },
		{
			'img': 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/lianjia.jpg',
			'url': 'https://sh.lianjia.com/',
			'title': 'Lianjia', 'role': 'Software Developer (Shang Hai - China)', 
			'date': 'January 2019 to September 2020', 
			'description': [
				'Accomplished the transition from a junior to a mid-level software developer role', 
				'Earning rewards of both full-attendance bonus and outstanding performance'
			]
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
