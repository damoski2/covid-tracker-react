import React, { Component } from 'react';
import style from './icon_drawer.css';


var cancelarea = React.createRef();
var textinput = React.createRef();
var bgcolor = React.createRef();


 class Commentdrawer extends Component {
       constructor(props){
           super(props);
       }

    cancelInput=(e)=>{
        cancelarea.current.value="";
        bgcolor.current.style.backgroundColor="#d5d5d5"
    }

    displaySubmit=(e)=>{
        return (
            cancelarea.current.value? bgcolor.current.style.backgroundColor="rgb(7, 57, 163)": bgcolor.current.style.backgroundColor="#d5d5d5"
        )
    }
    render() {
        let drawerclass= "side_comment"
        if(this.props.show==true){
            drawerclass="side_comment show"
        }
        
        return (
            <section className={drawerclass}>
                <section className='commentsection'>
                <div className="outerdiv">
                    <div className='main'>
                        <hr></hr>
                        <h1>ADD COMMENT</h1>
                        <input type="text" 
                        onChange={()=>this.displaySubmit()}
                        placeholder="ADD COMMENT..." ref={cancelarea}
                        />
                    </div>
                    
                    <div className="commentbtns">
                        <input type="button" value="Cancel" onClick={()=>this.cancelInput()} id="mini_cancel" />
                        <input ref={bgcolor} type="submit" value="Submit" id="mini_submit" />
                    </div>
                </div>
            </section>
            </section>
        )
    }
}

export default Commentdrawer