import { useState } from "react";


const CategorySearch = ({categories, onclick}) => {
    const [isMenu, setIsMenu] = useState(false)

    const handleMenu=()=>{
        setIsMenu(!isMenu)
    }


    return (
 
           
                
            <div className=" flex-center w- rounded md:w-40 ">
                <div className="w-auto bg-white text-sm text-gray-500 font-bold px-5 py-2 ">
                    <div className="m-2 text-2xl">Categorias</div>
                </div>
                        {
                            categories
                            ?
                            categories.map((category, index) => (
                                <div key={index}>
                                    <div className="block">
                                        <div className="mt-2 px-2 ">
                                                <label className="inline-flex items-center">
                                                    <input type="checkbox" className="form-checkbox rounded text-red-500" onClick={onclick} value={category.id}/>
                                                    <span className="ml-2">{category.name}</span>
                                                </label>
                                        </div>
                                    </div>
                                </div>
                            ))
                            :
                            <></>
                        } 

                        </div>

                    
            
    )


}

export default CategorySearch