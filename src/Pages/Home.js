import React from 'react';
import LinkAsButton from '../Components/LinkAsButton';

export default function Home() {

    return (
            <div>
            <header>
                <h1>Welcome to Cloudera Onboarding</h1>
            </header>
            <p>
                We are excited to have you onboard. Please choose your learning track below.
            </p>
            <LinkAsButton to="/developer" name="Developer" />
            <LinkAsButton to="/quality" name="Quality" />
            <LinkAsButton to="/support" name="Support" />
            </div>  
    )
}