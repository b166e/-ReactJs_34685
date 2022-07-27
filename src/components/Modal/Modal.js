import './Modal.scss'
const Modal = ({title, children}) => {
    return(
        <div className="modal-custom">
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Modal