// import { Component } from "react";


// class Circletask extends  Component{
//     render(){
//         return(
//             <div style={{width:100,height:100,border:"2px solid black",borderRadius:"50%"}} >

//             </div>
//         )
//     }
// }

// export default Circletask


import  { Component } from 'react';

class Circletask extends Component {
    state={
       circles:[] 
    }

    addCircles=()=>{
        this.setState(
            {
                circles:[...this.state.circles,true]
            }
        )
    }

   

    render() {
        return (
            <>
                      <button onClick={this.addCircles}>clic k to add circles</button>
                      <h2>total circles-- {this.state.circles.length}</h2>
          {
            this.state.circles.map(element=><Circle isHighLight={element} />)

          }

           </>
           
         
        );
    }
}

export default Circletask;

class Circle extends Component{
    render(){
        return(
            <div style={{ width: 100, height: 100, border: "2px solid black", borderRadius: "50%",backgroundColor:this.props.isHighLight?"black":"null" }}

            
            >

            </div>
        )
    }
}