import React from 'react'
import '../FontawesomeIcons/FontawesomeIcons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import style from './icon.module.css';

export default function Comment_sectiondrawer(props) {
    
    return (
        <div className={style.mobile_comment} onClick={props.commenthandler} >
            <FontAwesomeIcon icon={faArrowCircleLeft} className={style.icon} />
            <p>Comment</p>
        </div>
    )
}


const icon={
    fontSize:'40px',
    cursor:'pointer',
    marginLeft:'80px'
}