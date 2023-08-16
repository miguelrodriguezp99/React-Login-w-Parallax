import Island from './models/IslandModel'
import Planet from './models/PlanetModel'
import '../styles/models.css'
import ParallaxStars from './menu/ParallaxStars';

const Models =() => {

return (
    <>
    <div className="page-container">
        <div className='table-controller'>
            
            <ParallaxStars/>
           
            <div className="row">
                <div className="column">
                    <div className="model-card">
                        <p>ISLAND</p>
                    </div>   
                </div>
                <div className="column">
                    <div className="dmodel">
                    <Island/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                <div className="model-card">
                        <p>PLANET</p>
                    </div>  
                </div>
                <div className="column">
                    <div className="dmodel">
                    <Planet/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <p>Hello</p>
                </div>
                <div className="column">
                    <p>Gekko</p>
                </div>
            </div>
            
        </div>
        
    </div>
   

    </>
)

}

export default Models;