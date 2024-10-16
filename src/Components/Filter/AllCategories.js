import Filter from "./Filter";

const AllCategories=()=> {
    return (<div>
        <h1>Avocado shop</h1>
       
        {['ЗАКУСКИ', 'САЛАТЫ', 'ГЛАВНОЕ МЕНЮ', 'НАПИТКИ', 'ДЕСЕРТЫ', 'АКСЕССУАРЫ', 'ВСЕ'].map((category, index)=><Filter key ={index} category={category}/>)
        }

    </div>)
   
}
export default AllCategories;