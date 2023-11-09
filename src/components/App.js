import React from 'react'
import Navbar from './Navbar';
import Card from './Card';
import links from './links';
import Footer from './Footer';


function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                {links.map( (link, index)=> {
                    return <Card key={link.urlKey} urlKey={link.urlKey} title={link.title}/>
                })}
            </div>
            <Footer />
        </>
    );
}

export default App;