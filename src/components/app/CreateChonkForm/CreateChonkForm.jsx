import React from 'react';
import { useState } from 'react';
import { createChonk } from '../../../actions/chonkActions';
import { useDispatch } from 'react-redux';

const CreateChonkForm = () => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState(1);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const dispatch = useDispatch();
  
  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'weight') setWeight(target.value);
    if(target.name === 'description') setDescription(target.value);
    if(target.name === 'imageUrl') setImageUrl(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createChonk({
      name,
      weight,
      description,
      imageUrl
    }));
    setName('');
    setWeight('');
    setDescription('');
    setImageUrl('');
  }
  
  return (
    <form onSubmit={handleSubmit}> 
      <h2>Create a new chonk!</h2>
      <input 
        type="text" 
        name="name" 
        value={name} 
        onChange={handleChange} />

      <input 
        type="number" 
        name="weight"
        value={weight}
        onChange={handleChange} />

      <input 
        type="text" 
        name="description"
        value={description}
        onChange={handleChange} />

      <input 
        type="text" 
        name="imageUrl" 
        value={imageUrl}
        onChange={handleChange} />

      <button>Submit Chonk</button>
    </form>
  )
}

export default CreateChonkForm;
