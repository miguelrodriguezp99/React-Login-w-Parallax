import '../styles/mainsite.css'
import {useNavigate} from 'react-router-dom';

const MainSite =({changeLoggedIn}) => {
  const navigate = useNavigate();

    return (
        <div>
          <div className="all">
            <div onClick={() => navigate('/projects')} className="lefter">
              <div className="text">Projects</div>
            </div>
            <div onClick={() => navigate('/tictactoe')}className="left">
              <div className="text">Tic Tac Toe</div>
            </div>
            <div className="center">
              <div className="explainer"><span>Menu</span></div>
              <div className="text">Miguel Rodriguez Perez</div>
            </div>
            <div className="right">
              <div className="text">Loading...</div>            
            </div>
            <div onClick={()=> {
              localStorage.removeItem('jwt')
              changeLoggedIn(false)
              navigate('/login')
              } }
              className="righter">
              <div className="text">Log Out</div>
            </div>
          </div>
        </div>
      );
};

export default MainSite