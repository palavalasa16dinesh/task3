import React from 'react' ;
import data from './data/data.json';
import profileicon from './woman.svg';
import profileicon1 from './medical-mask.svg';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import Resume from './resume.js';


let App=()=>{
    
    
    return(
        
            <BrowserRouter>
            <Switch>
            <Route exact path='/sample' component={Example} />
            <Route exact path='/' component={Home}/>
            <Route exact path='/' component={Resume}/>
            </Switch>
               
            </BrowserRouter> 
           
        
    )
}

let Example=()=>{
    return(
        <div>
            <h2>Example component</h2>
        </div>
    )
}

let Home=()=>{
    console.log(data);
    return(
        < div className="row justify-content-center">
        {data.profiles.map((value,index)=>(
            <div className="col-lg-4 col-md-4 col-sm-10 mt-1" key={index}>
            {/*card*/}
            <div className="card" style={{boxShadow:"0px 8px 8px -8px #000 "}}>
                <div className="card-body text-center">
                    {value.basics.Role==="Writer" ? <img src={profileicon} alt="Profile Icon" style={{width:"30%"}}/> : <img src={profileicon1} alt="Profile Icon" style={{width:"30%"}}/>}
                    <h3>{value.basics.name} </h3>
        <h5 className="text-secondary" style={{fontStyle:"italic"}}>{value.basics.Role}</h5><hr />
        <a href={"mailto:"+value.basics.email}>{value.basics.email}</a>
        <br/>
        <a href={"tel:"+value.basics["Mobile no."]}>{value.basics["Mobile no."]}    </a> < br />
        <Link to={{pathname:'/resume', data:{id:index}}} className="btn btn-secondary text-white btn-block btn-sm"> View Profile</Link>


                </div>
                
                </div> 
        </div>

        )
        )}
        </div>
        
    )
}


export default App;




