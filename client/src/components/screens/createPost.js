import React from 'react'


const CreatePost = () => {
    return (
        <div className='card input-filed create-post-container'>
            <input type='text' placeholder='title' />
            <input type='text' placeholder='body' />
            <div className='file-field input-field'>
                <div className='btn'>
                    <span>Upload image</span>
                    <input type='file' />
                </div>
                <div className='file-path-wrapper'>
                    <input className='file-path validate' type='text' />
                </div>
            </div> 
            <button className='btn'>Submit Post</button>
        </div>
    )
}


export default CreatePost