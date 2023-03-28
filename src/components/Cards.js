import React from 'react';
import Card from './Card';
import { useState } from 'react';
const Cards=(props)=>{
    let courses=props.courses;
    let category=props.category;
    const[likedCourses,setLikedCourses]=useState([]);
    const getCourses=()=>{
        if(category==="All"){
            let allCourses=[];
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
       
    }
    console.log(getCourses());
    return(
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
       {
        getCourses().map((course,index)=>{
            return course===[]?(<h1>No courses found</h1>):<Card  key={index} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        })
       }
        </div>
    )
}
export default Cards;