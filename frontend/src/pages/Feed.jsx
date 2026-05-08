import React, { useState, useEffect } from 'react';
import API from '../api'; // Adjust path based on your folder structure

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPosts = async () => {
            try {
                // Using API instance for GET request
                const response = await API.get('/posts/view');
                setPosts(response.data.posts);
                setLoading(false);
            } catch (error) {
                console.log("Fetch error:", error);
                setLoading(false);
            }
        };
        getPosts();
    }, []);

    if (loading) return <div className="loader">Loading cozy vibes...</div>;

    return (
        <section className="feed-container">
            <h2 className="feed-title">Community Feed</h2>
            <div className="posts-grid">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className="post-card">
                            <div className="post-image-wrapper">
                                <img src={post.image} alt="post" className="post-image" />
                            </div>
                            <div className="post-content">
                                <p className="post-caption">{post.caption}</p>
                                <span className="post-date">
                                    {new Date(post.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-posts">No posts found. Start the conversation!</p>
                )}
            </div>
        </section>
    );
};

export default Feed;