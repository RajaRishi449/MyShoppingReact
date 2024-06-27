import { useEffect, useState } from "react";
import Productcard from './Productcard';
import Topbar from "./Topbar";

function Products() {
    const [List, setList] = useState([]);
    const [category, setCategory] = useState([]);
    const [selectedCategory, setselectedCategory] = useState("select");
    const [apiRes, setapiRes] = useState([]);
    const [input, setinput] = useState("");

    const onInputChange = (e) => {
        const temp = e.target.value;
        setinput(temp);
    };

    useEffect(() => {
        fetch('https://mocki.io/v1/72f8d1e9-055c-4e6b-bd6a-630de0dad7f4')
            .then((res) => res.json())
            .then((json) => {
                setList(json);
                const c = json.map((elem) => elem.category);
                const temp = [...new Set(c)];
                setCategory(temp);
                setapiRes(temp);
            })
            .catch();
    }, []);

    useEffect(() => {
        if (selectedCategory === "select") {
            setapiRes(List); 
        } else {
            const res = List.filter(obj => obj.category === selectedCategory);
            setapiRes(res);
        }
    }, [selectedCategory, List]);

    function handleButtonClick() {
        const filteredProducts = List.filter(product => product.category === input);
        setapiRes(filteredProducts);
    }

    return (
        <div className="products-container">
            <div className="searchbar">
                <input type="text" placeholder="Search..." value={input} onChange={onInputChange} />
                <button type="submit" onClick={handleButtonClick}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>

            <Topbar category={category} setselectedCategory={setselectedCategory} />

            <div className="products-list">
                {apiRes.map((Product) => (
                    <Productcard key={Product.id} Product={Product} />
                ))}
            </div>
        </div>
    );
}

export default Products;