import React from 'react';

const Blog = () => {
    return (
        <div className='p-4'>
            <p className='font-bold'>Q: What is the difference between authorization and authentication?</p>
            <p>Answers:
            Authentication is the basically the validate check for the user or person.
            on the other hand authorization is the checking for the power or level of authentication.
            authorization can be escalated over time and priorities.
            </p>
            <p></p>
            <p className='mt-4 font-bold'>Why are you using firebase? What other options do you have to implement authentication?</p>
            <p>Answers:
            We use firebase for the authentication and hosting. Else firebase give the top notch security protocol
            cause it's maintained by google. Else we can use it's templates,hosting and other usefull services.
            Other Authentication service provide: oAuth, Okta, Auth0 etc.
            </p>
            <p></p>
            <p className='mt-4 font-bold'>What other services does firebase provide other than authentication?</p>
            <p>Answers:
            Except authentication firebase provides many more supports such as cloud services like storage,firestore,cloud functions.
            Else they provide messaging,analytics and hosting solutions.
            
            </p>
            
        </div>
    );
};

export default Blog;