import img from '../Images/python.jpg'
function Spring() {
    return ( 
    <div className="card cl">
       <img width="200" height="200" src="data:image/png;base64,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" alt="" />
        <div className="card-footer">
        <button className="btn btn-success">Eplore technique</button>
        <p></p>
            <p>My best programming language .</p>
        </div>
    </div> );
}

export default Spring;