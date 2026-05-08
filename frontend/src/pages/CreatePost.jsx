import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import API from '../api';

const CreatePost = () => {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);
        formData.append('caption', caption);

        try {
            const response = await API.post('/posts/create', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            
            console.log("Post Created:", response.data);
            
           
           
            navigate('/feed'); 
            
        } catch (error) {
            console.error("Upload error:", error);
            alert("Failed to create post. Please try again.");
        }
    };

    return (
        <section className='create-post-section'>
            <div className="form-container">
                <h1>Create a New Post</h1>
                <p className="subtitle">Share your moment with the world</p>
                
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="file-upload" className="custom-file-upload">
                            <span>{image ? image.name : "Click to upload image"}</span>
                            <input 
                                id="file-upload" 
                                type='file' 
                                name="image" 
                                accept="image/*" 
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </label>
                    </div>

                    <div className="input-group">
                        <input 
                            className="text-input"
                            type="text" 
                            name="caption" 
                            required 
                            placeholder='What’s on your mind?' 
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                        />
                    </div>

                    <button className="submit-btn" type='submit'>Share Post</button>
                </form>
            </div>
        </section>
    );
};

export default CreatePost;