import React, { Component } from 'react'
import axios from 'axios'

class Home extends Component{
    state = {
        posts: [ ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    posts: res.data.slice(0,10)
                })
            })
    }
    render(){
        const { posts} = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No Posts Yet</div>
        )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
                {/* <p>
                My name is Tyler Sweeney and I am a Full-Stack Web Developer.
                I have 3 years experience building full application front to back. 
                I specialize in MERN stack builds, but am experienced in many coding languages. 
                I also have experience with SEO and online advertising.
        
                I began programming in 2015 with two Python classes at Orange Coast College. 
                I completed my Full-Stack Web Developer certification in April 2018. 
                A gamer since a young age when every game had to be launched from DOS, 
                my first interaction with programming was terminal commands.
        
                In my free time I have been learning C++ and the Unreal Engine. 
                Industries that I am passionate about being a part of are 
                Gaming, Music, Entertainment, Business, Real Estate, and Sports.
                </p> */}
            </div>
        )
    }
}
export default Home