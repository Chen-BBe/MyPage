import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile } from '@material-ui/core';
import { GridListTileBar } from '@material-ui/core';
import { Box } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import img1 from './static/qiuqiu_img/qiuqiu.jpg';
import img2 from './static/qiuqiu_img/qiuqiu1.jpg';
import img3 from './static/qiuqiu_img/qiuqiu2.jpg';
import img4 from './static/qiuqiu_img/qiuqiu3.jpg';
import img5 from './static/qiuqiu_img/qiuqiu4.jpg';
import img6 from './static/qiuqiu_img/qiuqiu5.jpg';
import img7 from './static/qiuqiu_img/qiuqiu6.jpeg';


const data = [
	{
		img: img1,
		title: '仲qiuqiu',
	},
	{
		img: img2,
		title: '仲qiuqiu',
	},
	{
		img: img3,
		title: '仲qiuqiu',
	},
	{
		img: img4,
		title: '仲qiuqiu',
	},
	{
		img: img5,
		title: '仲qiuqiu',
	},
	{
		img: img6,
		title: '仲qiuqiu',
	},
	{
		img: img7,
		title: '仲qiuqiu',
	},
];

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		margin: theme.spacing(1),
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		flexWrap: 'nowrap',
		transform: 'translateZ(0)',
	},
	titleBar: {
		background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
	},
}));

const iconStyles = makeStyles(theme => ({
	left: {
		left: 5,
	    top: 190,
	    position: 'absolute',
	    color: 'white',
	    fontSize: '60px',
	    zIndex: "tooltip"
	},
	right: {
		right: 360,
	    top: 190,
	    position: 'absolute',
	    color: 'white',
	    fontSize: '60px',
	    zIndex: "tooltip"
	},
}));


const SingleLineGridList = () => {

	const classes = useStyles();
	const iconcls = iconStyles();

	function handleClick(e){
	    e.preventDefault();
	    console.log('The link was clicked.');
	}
	//this.refs.hello.scrollIntoView(); // scroll...
	return (
		<div className={classes.root}>
			<Box zIndex="tooltip">
				<ArrowLeftIcon className={iconcls.left} />
			</Box>
			<GridList spacing={3} cellHeight={250} className={classes.gridList} cols={2.5}>
				{
					data.map(tile => (
						<GridListTile key={tile.img} onClick={handleClick}>
							<img src={tile.img} alt='' />
							<GridListTileBar
								title={tile.title}
								classes={{
									root: classes.titleBar,
									title: tile.title,
								}}
							/>
						</GridListTile>	
					))
				}				
			</GridList>
			<Box zIndex="tooltip">
				<ArrowRightIcon className={iconcls.right} />
			</Box>
		</div>
	)

}

export default SingleLineGridList;
