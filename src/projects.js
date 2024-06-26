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
		margin: theme.spacing(1),
		marginTop: "20px",
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
	},	
	bg_title: {
		padding: theme.spacing(1),
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
		backgroundColor: '#292929',
	},
	job_title: {
		display: 'flex',
		minWidth: "500px",
		marginLeft: '10vh',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'center', 
	    [theme.breakpoints.down('lg')]: {
      		marginLeft: '0vh',
	    },
	},
	job_details: {
		margin: theme.spacing(1),
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

export default function Projects() {
	const classes = useStyles();

	const work_list = [
		{
			'img': '', 
			'title': 'Demo (Gen AI)', 
			'sub': '',
			'url': '', 
			'description': ['Coming soon ...']
		},			
		{
			'img': 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/fancy_truck.jpg', 
			'title': 'Auto driving truck in Perth CBD', 
			'sub': 'A demo of auto driving truck on the map',
			'url': 'https://fancy-truck-086105e58a82.herokuapp.com/', 
			'description': ['Keep camera track the moving object', 'Able to support geographic coordinates and diffrent code(e.g. EPSG) transform', 'Allow multiple moving 3D objects']
		},		
		{
			'img': 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/bootbw.png', 
			'title': 'Decent website for enterprises', 
			'sub': 'A good looking website for mid-large business',
			'url': 'https://boot-bw.herokuapp.com/', 
			'description': ['Responsive design for mobile devices', 'All standard features ready for business users']
		},
		// {
		// 	'img': 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/crypto_stock.png', 
		// 	'title': 'Simulate crypto exchange demo', 
		// 	'sub': 'React & Crypto data & web-socket',
		// 	'url': 'https://visual-stock-v2.herokuapp.com/', 
		// 	'description': ['Dashboard', 'Websocket', 'Real-time']
		// },
		{
			'img': 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/visual_stock.png', 
			'title': 'Stock data dashboard', 
			'sub': 'Data visualization & Data fetching & Sync local DB and download hardcopy',
			'url': 'https://visual-stock.herokuapp.com/', 
			'description': ['Stock data visualization', '3rd party service integration', 'Save data entries as PDF file']},
	];

	return (
		<Card className={classes.base_work}>
			<div className={classes.work_layout}>
	            <Typography className={classes.bg_title} gutterBottom variant="h5">
					<strong style={{ color: "grey" }}>PROJECT</strong>
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
							<Typography gutterBottom variant="subtitle2">
								<a title={item.title} href={item.url}>{item.sub}</a>
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
