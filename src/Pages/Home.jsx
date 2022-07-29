import React from 'react';
import LinkAsButton from '../Components/LinkAsButton';

export default function Home() {

    return (
        <div style={{ height: '100%', backgroundColor: 'white' }}>
        <div className="home-container">
                <div className='head'>
                    <h1>Welcome to Cloudera Onboarding</h1>
                </div>
                <div className='head-desc'>
                <p>
                    We are excited to have you onboard. Please choose your learning track below.
                </p>
                </div>
            </div>  
            <div className='card-container home-cards'>
            <LinkAsButton to="/developer" name="Developer" text="Set yourself up for contributing to the existing features or starting a new feature."/>
            <LinkAsButton to="/quality" name="Quality" text="Be ready to become a star gatekeeper for the platform releases."/>
            <LinkAsButton to="/support" name="Support" text="Get all the knowledge required to support customer issues/escalations."/>
            </div>  
        </div>
            
    )
}