import React, {Component} from "react";
import Footer from "./components/headerComponent/footer";
import Header from "./components/headerComponent/header";
import Homepage from "./components/pages/HomePage";
import Comment from "./comment";
import "./header.css";
import "./footer.css";
import "./homepage.css";


class App extends Component {
  render() {
    return (
     
            <div className="wr">
          
             <Header/>
             <Homepage />
             
             <Footer/>
           
            
            </div>
       
    );
  }
}

export default App;


