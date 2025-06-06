import { Search } from "lucide-react"
import React, { useState } from "react"
import { Button } from "./ui/button"
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "../redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const SearchJobHandler = () =>{
        dispatch(setSearchedQuery(query));
        navigate("/browse")
    }

    return (
        <div className="text-center">
            <div className='flex flex-col gap-5 my-10'>
            <span className='px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
            <h1 className='text-5xl font-bold'>Search, Apply & <br/> Get Your <span className='text-[#6A38C2]'>Dreams Jobs</span></h1>       
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quisquam nemo dolorem delectus fuga, a sint autem est architecto ipsum vero sequi. Iste placeat ratione fugiat nulla, ea ipsa modi.</p>
            <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                <input 
                type="text" 
                placeholder='Find Your dream jobs'
                onChange={(e) => setQuery(e.target.value)}
                className='outline-none border-none w-full'
                />
                <Button onClick={SearchJobHandler} className = 'rounded-r-full bg-[#6A38C2]'>
                    <Search className='h-5 w-5'/>
                </Button>
            </div>
            </div>
         </div>
    )
}

export default HeroSection