import './index.css'
function Modal()
{
    return(
        <div className="modal">
            <p>Are you sure you want to delete?</p>
            <button className="btn btn--alt">Cancel</button>
            <button>Confirm</button>
        </div>
    )
}

export default Modal;