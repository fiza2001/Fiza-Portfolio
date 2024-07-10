export default function Footer(){
    const currDate = new Date();
    const year = currDate.getFullYear();
    return(
        <div style={{backgroundColor:'#282826', borderTop:'1px solid #ccd5ae', paddingBottom:'10px', color:'white'}}>
            <p>Copyright © {year} Fiza Hussain. All Rights Reserved.</p>
        </div>
    )
}