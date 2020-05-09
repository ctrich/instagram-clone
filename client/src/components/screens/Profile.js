import React from 'react'

const Profile = () => {
    return (
        <div className='profile-container'> 
            <div className='profile-top'> 
                <div>
                    <img src='https://images.unsplash.com/photo-1585699324524-5e642b2b30d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='face' class='profile-pic'/>
                </div>
                <div className='profile-stats-container'>
                    <h4>Jason Verma</h4>
                    <div className='profile-stats'>
                        <h6>40 Posts</h6>
                        <h6>40 Followers</h6>
                        <h6>40 Following</h6>
                    </div>
                </div>
            </div>
            <div className='gallery'>
                <img className='item' src='https://images.unsplash.com/photo-1585699324524-5e642b2b30d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='face' />
                <img className='item' src='https://images.unsplash.com/photo-1585699324524-5e642b2b30d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='face' />
                <img className='item' src='https://images.unsplash.com/photo-1585699324524-5e642b2b30d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='face' />
                <img className='item' src='https://images.unsplash.com/photo-1585699324524-5e642b2b30d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='face' />
                <img className='item' src='https://images.unsplash.com/photo-1585699324524-5e642b2b30d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='face' />
                <img className='item' src='https://images.unsplash.com/photo-1585699324524-5e642b2b30d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='face' />
            </div>
        </div>
    )
}


export default Profile