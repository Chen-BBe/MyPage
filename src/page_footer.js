import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
	base_footer: {
		marginTop: '0',
		marginBottom: '2vh',
		textAlign: 'center',
		width: '100%',
	},
	text_title: {
		margin: theme.spacing(1),
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'nowrap',
		alignItems: 'center',
	},
}));


const resume_url = "https://github.com/Chen-BBe/my-page-assets/blob/main/resume/Steven-Bi.pdf";
const token = "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";


export default function FootBar() {
	const classes = useStyles();


  const download_result = (url, token) => {
    let reqOption = {
      method: 'GET',
      headers: {'Content-Type': 'application/json', 'authorization': `Bearer ${token}`},
    };

    fetch(url, reqOption)
    .then((res) => {
      if(!res.ok) {
        if (res.statusText === "Unauthorized") {
          alert('Failed to download, please email me for the latest resume');        
          return;
        }        
      }
      return res.json()
    })
    .then((data) => {
      let blob_data = new Blob([data], {type: 'application/pdf'});
      let csvURL = window.URL.createObjectURL(blob_data);
      let tempLink = document.createElement('a');
      tempLink.href = csvURL;
      tempLink.setAttribute('download', 'steven_bi_resume.pdf'); 
      tempLink.click();
    });
  };

	return (
		<Paper className={classes.base_footer}>
      <Button onClick={() => download_result(resume_url, token)} variant="contained" color="primary" style={{ width: "100%" }}>
        Download resume
      </Button>
		</Paper>
	);
}