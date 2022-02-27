import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';




const useStyles = makeStyles((theme) => ({
	base_work: {
		marginTop: '3vh',
		marginBottom: '3vh',
		backgroundColor: '#F2F2F2',
	},
	work_layout: {
		margin: theme.spacing(1.5),
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
	},	
	bg_title: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2),
	},

	work_content: {
		margin: theme.spacing(2),
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center',
	    [theme.breakpoints.down('md')]: {
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
		// display: 'flex',
		// flexDirection: 'column',
		// alignItems: 'center',
		// justifyContent: 'center',
		// alignContent: 'center', 
		display: 'flex',
		marginLeft: '10vh',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'center', 
	    [theme.breakpoints.down('md')]: {
      		marginLeft: '0vh',
	    },
	},
	job_details: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'center', 
	},
	job_details_li: {
		margin: theme.spacing(1.5),
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
			'img': 'https://raw.githubusercontent.com/Seven-Bi/MyPage/master/src/static/img/atomorphis.jpg', 
			'title': 'Atomorphis', 'role': 'Software Developer', 
			'date': 'Nov 2020 to Present', 
			'description': ['UI/UX implementing', 'Interactive geological map and data visualization', 'Design and help in data visualization in 2D & 3D', 'Dockerize front-end sytem']
		},	
		{
			'img': 'https://raw.githubusercontent.com/Seven-Bi/MyPage/master/src/static/img/A.jpg', 
			'title': 'South Pacific', 'role': 'ICT Developer', 
			'date': 'February 2020 to June 2020', 
			'description': ['Website development & maintain', 'Marketing email system development', 'UI design']
		},
		// {
		// 	'img': 'https://raw.githubusercontent.com/Seven-Bi/MyPage/master/src/static/img/C.bmp', 
		// 	'title': 'PinYi', 
		// 	'role': 'Software Engineer', 
		// 	'date': 'September 2012 to July 2013', 
		// 	'description': ['System maintain & assist new feature development', 'Website maintain']
		// },
	];

	return (
		<Card className={classes.base_work}>
			<div className={classes.work_layout}>
	            <Typography className={classes.bg_title} gutterBottom variant="h5">
					<strong>WORK</strong>
	            </Typography>			
			</div>
			<div className={classes.work_layout}>
				{work_list.map((item, index) => (
					<div key={index} className={classes.work_content}>
						<Paper className={classes.work_content_left} elevation={3}>
							<div className={classes.logo_content}>
								<img src={item.img} alt="" width="150" height="150" />
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
			            <Divider variant="middle" />
			            <div className={classes.job_details}>
				            <Typography gutterBottom variant="body1">
								<ul>
								{item.description.map((sub_item, sub_index) => (
									<li key={sub_index} className={classes.job_details_li}>
										{sub_item}
									</li>
								))}
								</ul>
				            </Typography>
			            </div>
			            
					</div>	
				))}
			</div>
		</Card>
	);
}
