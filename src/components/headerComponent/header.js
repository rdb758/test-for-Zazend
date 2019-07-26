
import React, {Component} from 'react';


class Header extends Component {
    render(){
        return (
          <div className="wrap-header">
            
          <div className="logo">
             <img className="logo-image" src=" https://v.od.ua/uploads/92/logo.png" />
            
            </div>
           
            <div className="header-center">
   <a className="home" href="/pages/home.js">Головна</a>
   <a className="news" href="/pages/news.js">Новини</a>
   <a className="contact" href="/pages/contact.js">Контакти</a>
</div>
            
            
          </div>     
        )
    }
}

export default Header;
             
