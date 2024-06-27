function Topbar(props){

    function handlechange(e){
    props.setselectedCategory(e.target.value)
    //console.log(e.target.value)
    }
    return(
        <>
        <div className="">
            <select onChange={handlechange} className="select">
                <option value="select">Filter</option>
                {props.category.map((elem)=> <option key={elem.id} value={elem}>{elem}</option>)}
            </select>

        </div>
        
        </>

    )
}
export default Topbar