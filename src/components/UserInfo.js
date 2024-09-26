import React, { useState, useEffect } from 'react';
import './UserInfo.css';

function UserInfo() {

    let userImageUrl = 'https://picsum.photos/350';
    const [imageUrl, setImageUrl] = useState('');
    const [user, setUser] = useState({username: "loading...", full_name: "loading...", short_description: "loading...", url: "loading...", posts_number: "loading...", followers_number: "loading...", followed_number: "loading..."});
    const mockarooUrl = 'https://my.api.mockaroo.com/parcial.json?key=92422330';

    useEffect(() => {
        fetch(userImageUrl)
            .then(response => response.url)
            .then(url => setImageUrl(url))
            .catch(error => console.error('Error fetching image:', error));
        fetch(mockarooUrl)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user info:', error));
    }, []);

    return (
        <div className="UserInfo">
            <div  id="UserInfo-div">
                <div className="UserInfo-Image" id="UserInfoImage-div">
                    <a  href="/usuario" >
                        <img src={imageUrl} alt="User"id="user-image" />
                    </a>
                </div>
                <div className="UserInfo-Text" id="UserInfo-Text">
                    <h1>{user.username}</h1>
                    <p><b>{user.full_name}</b></p>
                    <p>{user.short_description}</p>
                    <a href= {user.url}>{user.url}</a>
                    <div id="UserInfo-Numbers">
                        <p className="numbers"><b>{user.posts_number}</b> posts</p>
                        <p className="numbers"><b>{user.followers_number}</b> followers</p>
                        <p className="numbers"><b>{user.followed_number}</b> following</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default UserInfo;
  