import './index.css'

function Backdrop(props) {
  return <div className='backdrop' onClick={props.onCancel} />;
}

export default Backdrop;