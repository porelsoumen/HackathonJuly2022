import React from 'react';
import LinkAsButton from '../Components/LinkAsButton';
import {Link} from 'react-router-dom';

export default function Quality() {
    return (
        <div>
            <div className="home-container" style={{ display: 'flex', flexDirection: 'row', height:'100px', justifyContent: 'left', alignItems: 'center'}}>
                <Link to="/">Onboarding Home</Link>
                <h1 className="quality_head">Quality Engineering Road Map</h1> 
            </div>
            <div style={{ justifyContent: 'center', textAlign: 'center'}}>
            <iframe frameborder="0" width="1200" height="800" src="https://whimsical.com/embed/FaHciNqJa7P7KvQ9NB1wqb"></iframe>
            </div> 
        </div>
    
    );
}