import { useAuth } from '../context/AuthContext';
import './Profile.css';
import { useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const { user, profileUpdate } = useAuth();

  const [image, setImage] = useState('');
  console.log(image, '<-- image');

  // const toBase64 = (file) =>
  //   new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //   });

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'lzqx8ka3');

    axios
      .post(`https://api.cloudinary.com/v1_1/dp3auzpu2/image/upload`, formData)
      .then((res) => {
        const newUser = { ...user, avatar: res.data.url };
        profileUpdate(user.id, newUser);
      });
  };
  console.log(user, '<--- user');

  return (
    <section className='main_container'>
      <section className='profile-container'>
        <div className='profile-img-container'>
          <img
            className='profile-img'
            src={user.avatar}
            alt='imagen de usuario'
          />
          <label
            className='block mb-2 text-sm font-medium
           text-gray-900 dark:text-white'
            htmlFor='file_input'>
            Upload User Image
          </label>
          <input
            className='block w-full text-sm
                       text-gray-900 border border-gray-300 
                        rounded-lg cursor-pointer bg-gray-50
                       dark:text-gray-400 focus:outline-none
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
            id='file_input'
            type='file'
            onChange={(e) => setImage(e.target.files[0])}
          />
          {
            <button
              className='px-4 py-1 rounded-md bg-sky-900 m-4 shadow-inner cursor-pointer'
              type='submit'
              onClick={handleSubmit}>
              Submit Image
            </button>
          }
        </div>
        <div className='user-info-container'>
          <h1 className='datos'>Name: {user.name}</h1>
          <h1 className='datos'>Surname:{user.surname}</h1>
          <p className='datos'>{user.email}</p>
          <p className='datos'>{user.username}</p>
        </div>
      </section>
    </section>
  );
};

export default Profile;
