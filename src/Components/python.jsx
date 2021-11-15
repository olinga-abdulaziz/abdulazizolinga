import img from '../Images/python.jpg'
function Python() {
    return ( 
    <div className="card cl">
        <img src={img} alt="" width="195" height="195" />
        <div className="card-footer">
            <p>My best programming language</p>
        </div>
    </div> );
}

export default Python;