import Car from '../Car';
import Address from '../Address';
import './index.css';

function User(props) {
  const { firstName, lastName, image, cars, address, phone, email} = props.user;
  
  return (
    <div className='user'>
      <img src={image} alt={firstName} />
      <p>{firstName} {lastName}</p>

      <div className='cantact'>
        <p><h3>Telefon: </h3>{phone}</p>
        <p><h3>Email: </h3>{email}</p>
      </div>
      
      <div className="addres-contianer">
      <Address address={address} />
      </div>

      <div className='car-container'> 
        <h3>Cars:</h3> 
        {
          cars.length > 0 && cars.map((value, index) => {
            return (
              <Car car={value} key={index} />
            )
          })
        }

        {
          cars.length === 0 && <p>Mashina mavjud emas!</p>
        }

      </div>
      

    </div>
  );
}

export default User;

