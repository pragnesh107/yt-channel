import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <div className="box">
                <iframe src={`https://www.youtube.com/embed/${props.urlKey}`} title={props.title} allowfullscreen="true"></iframe>
            </div>
            <div className="box">
                <p>{props.title}</p>
            </div>
        </div>
    );
}

export default React.memo(Card);