import './index.css';

function Car(props) {
    const {car} = props;
  return (
    <div>
      <div className='car'>
          <span className='radio'></span>
          <span>{car}</span>
        </div>
    </div>
  )
}

export default Car