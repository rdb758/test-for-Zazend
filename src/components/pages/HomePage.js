import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


class Homepage extends Component {
    render(){
        return (
            <Router>
          <div className="wrap-post">
        
            <div className="card">
            <h1>Чернівці</h1>
        <img className="image" src="https://risu.org.ua/php_uploads/images/articles/ArticleImages_61614_01.jpg" />
            
             
  <p class="price">Автор:Володимир Шевченко</p>
  <p>Чернівці дуже гарне місто</p>
  
            
  <Route exact path="./comment" component={Comment} />
            <Link to="/comment"> Коментарі </Link>
             <p><button>Читати більше</button></p>
          </div>     
             <div className="card-two">
            <h1>Одеса</h1>
        <img className="image" src="https://1.bp.blogspot.com/-miFUuobe88w/WB9A503kbKI/AAAAAAAABRE/RFdF0iiWM9gKrWw7AwQ-o0LNMr3mWejPgCK4B/s1600/teschin-most1.jpg" />
            
             
  <p class="price">Автор:Сергій Петровський</p>
  <p>Одеса дуже гарне місто</p>
  
             <Route exact path="./comment" component={Comment} />
            <Link to="/comment"> Коментарі </Link >
      <p><button>Читати більше</button></p>
            
          </div>     
            
          </div>   
            </Router>
        )
    }
}

export default Homepage;

