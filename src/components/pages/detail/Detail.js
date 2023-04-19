import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {BsPencilSquare} from 'react-icons/bs';
import {AiOutlineDelete} from 'react-icons/ai';
import {blog} from '../../assets/data';
import './detail.css';
const Detail =()=>{
    const {id}=useParams();

    const [blogs, setBlogs]=useState(null);

    useEffect(()=>{
        let blogs = blog.find((blogs)=>blogs.id === parseInt(id))

        if(blogs){
            setBlogs(blogs)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <>
        {blogs ? (
            <section className="singlePost">
                <div className="container">
                    <div className="left">
                        <img src={blogs.cover} alt="" />
                    </div>
                    <div className='right'>
                        <div className="buttons">
                            <button className="button">
                                <BsPencilSquare />
                            </button>
                            <button className="button">
                                <AiOutlineDelete />
                            </button>
                            <h1>{blogs.title}</h1>
                            <p>{blogs.desc}</p>
                            <p>{blogs.desc}</p>
                            <p>{blogs.desc}</p>
                        </div> 
                    </div>
                </div>
            </section>):null}
        </>
    );
}

export default Detail;