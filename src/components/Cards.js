import React, { useState } from 'react'
import Card from './Card';
const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses,setlikeCourses]=useState([]);

    let allCourses=[];//empty array tahat store all the data of all category array
    const getCourses = () => {
        if(category==="All"){
            Object.values(courses).forEach( (courseCategory) =>{ //(object.values( ) will take only value from array of category) and then foreach loop go into single data that is a array of data
                courseCategory.forEach( (course) => {// now for every category array forEach loop will take a single data 
                    allCourses.push(course);//finally it push or add in our array that is allCourses..... 
                } )
            } )
            return allCourses;
        }
        else{
            // main sirf secific category ka array he show karunga
            return courses[category];
        }
    }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {getCourses().map((course) => {
            return (
                <Card 
                    key={course.id} 
                    course={course} 
                    likedCourses={likedCourses} 
                    setlikeCourses={setlikeCourses}
                />
            )
        })}
    </div>
  )
}

export default Cards