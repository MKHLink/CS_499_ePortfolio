import React from "react";

function CodeReview(){
    return(
        <div className="flex flex-col items-center space-y-4 p-4">
            <h1 style={{fontFamily:'inherit',fontSize:'25px', color:'white',textAlign:'center', marginBottom:'10px'}}>Code Review</h1>
            <div style={{margin:"20px"}}>
            <p style={{fontFamily:'inherit',fontSize:'25px', color:'white'}}>Part One</p>
                <iframe
                    src="https://drive.google.com/file/d/1WOC4fx7Sass5a6EzbDCk4TfQG1870kt2/preview"
                    allow="autoplay"
                    style={{width:"80%",height:"60vh"}}
                ></iframe>
            </div>
            <div style={{margin:"20px"}}>
            <p style={{fontFamily:'inherit',fontSize:'25px', color:'white'}}>Part Two</p>
                <iframe 
                    src="https://drive.google.com/file/d/1zGQMDq0jHyb-BKjUUpCClwWTGsZhUMTw/preview"
                    allow="autoplay"
                    style={{width:"80%",height:"60vh"}}
                ></iframe>
            </div>
        </div>
    );
}

export default CodeReview;