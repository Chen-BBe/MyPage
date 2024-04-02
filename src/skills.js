import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';




const useStyles = makeStyles((theme) => ({
	base_skill: {
		marginTop: '3vh',
		marginBottom: '3vh',
		backgroundColor: '#fafafa',
	},
	text_title: {
		margin: theme.spacing(1),
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
	},
	bg_title: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2),
	},
	text_content: {
		margin: theme.spacing(1),
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	content_item: {
		margin: theme.spacing(1.5),
		flex: '1 1 25%',
	},
}));

export default function Skills() {
	const classes = useStyles();

	return (
		<Card className={classes.base_skill}>
			<div className={classes.text_title}>
	            <Typography className={classes.bg_title} gutterBottom variant="h5">
					<strong style={{ color: "grey" }}>SKILLS</strong>
	            </Typography>			
			</div>

			<div className={classes.text_content}>
				<Chip className={classes.content_item} label="HTML & CSS & JS" />
				<Chip className={classes.content_item} label="Nodejs & Python" />
				<Chip className={classes.content_item} label="React & Vue" />
				<Chip className={classes.content_item} label="Flask & Django & FastApi" />
				<Chip className={classes.content_item} label="DeckGL & Mapbox" />
				<Chip className={classes.content_item} label="Restful API" />
				<Chip className={classes.content_item} label="Sql & NoSql DB" />
				<Chip className={classes.content_item} label="Jira & Gitlab & Azure DevOps" />
				<Chip className={classes.content_item} label="Git & Docker & AWS % Azure" />
			</div>
		</Card>
	);
}