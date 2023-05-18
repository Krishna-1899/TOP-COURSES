import React from 'react';
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';
function Card(props) {
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setlikeCourses=props.setlikeCourses;
    const clickHandler=()=>{
        //logic
        if(likedCourses.includes(course.id)){
            //phele se like hua pada tha
            setlikeCourses( (prev)=>prev.filter((cid)=> cid !== course.id))
            toast.warning("like removed");
        }
        else{
            //phele sse like nahi tha
            //insert karna h ye course liked courses me  
            if(likedCourses.length === 0){
                setlikeCourses([course.id]);
            }
            else{
                //non empty phele sse 
                setlikeCourses((prev)=>[...prev,course.id]);
            }
            toast.success("Liked Successfully")
        }
    }
  return (
    <div className='w-[300px] bg-blue-950 rounded-md overflow-hidden bg-opacity-80'>
        <div className='relative '>
            <img src={course.image.url} alt=''></img>
            <div className='w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-[-11px] grid  place-items-center  '>
                <button onClick={clickHandler}>
                    {
                        !likedCourses.includes(course.id) ?
                        (<FcLikePlaceholder fontSize="1.75rem" />) : 
                        (<FcLike fontSize="1.75rem"/>)
                    }
                    
                </button>
            </div>
        </div>
        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>
                {course.title}
            </p>
            <p className='mt-2 text-white'>
                {
                    course.description.length > 100 ? 
                    (course.description.substr(0,100)) + "...":
                    (course.description)
                }
            </p>
        </div>
    </div>
  )
}

export default Card