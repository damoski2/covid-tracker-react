import React from 'react'
import style from './Commentsection.module.css';



var cancelarea = React.createRef();
var textinput = React.createRef();
var bgcolor = React.createRef();

 class Commentsection extends React.Component {

   
    
    state={
        backg:'#d5d5d5',
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
   
    render(){
        
      return(
            <section className={style.commentsection} id="feedback">
                <div>
                    <hr></hr>
                    <h1>ADD COMMENT</h1>
                    <input type="text" 
                    onChange={()=>this.displaySubmit()}
                    placeholder="ADD COMMENT..." ref={cancelarea}
                    style={{color:'#000'}}
                     />
                    <div className={style.btns}>
                        <input type="button" value="Cancel" onClick={()=>this.cancelInput()} className={style.cancel} />
                        <input ref={bgcolor} type="submit" value="Submit" className={style.submit} />
                    </div>
                </div>
            </section>
        )
    }
   
}


export default Commentsection