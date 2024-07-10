import { Link } from 'react-scroll';

export default function LetsWork(){
    return(
        <div className="letsWork">
            <div>
            <p><span id="title">Let's work together!</span><br/>Hire me and get your project done.</p>
            </div>
            <div>
                <br/>
                <Link to="section7" smooth={true} duration={500}><button class="btn">Hire me</button></Link>
            
            </div>
        
        </div>
    )
}