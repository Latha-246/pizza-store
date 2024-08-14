import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './styles.css';
function Items() {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [filter, setFilter] = useState('all');
    const [sortOption, setSortOption] = useState('none');
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetchItems();
    }, []);

    useEffect(() => {
        applyFilterAndSort();
    }, [items, filter, sortOption]);

    const fetchItems = () => {
        axios.get('http://localhost:5000/items')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the items data', error);
            });
    };
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/items/${id}`)
            .then(response => {
                fetchItems();
            })
            .catch(error => {
                console.error('There was an error deleting the items data', error);
            });
    };
    const handleAddToCart = (item) => {
        setCart([...cart, item]);
        alert(`${item.name} has been added to your cart!`);
    };
    const parseIngredients = (ingredients) => {
        return Array.isArray(ingredients) ? ingredients : ingredients.split(',').map(ingredient => ingredient.trim());
    };
    const applyFilterAndSort = () => {
        let updatedItems = [...items];
    
        if (filter === 'vegetarian') {
            updatedItems = updatedItems.filter(item =>
                parseIngredients(item.ingredients).some(ingredient =>
                    ingredient.toLowerCase().includes('mozzarella') ||
                    ingredient.toLowerCase().includes('vegetarian')
                )
            );
        } else if (filter === 'non-vegetarian') {
            updatedItems = updatedItems.filter(item =>
                parseIngredients(item.ingredients).some(ingredient =>
                    ingredient.toLowerCase().includes('pepperoni') ||
                    ingredient.toLowerCase().includes('chicken') ||
                    ingredient.toLowerCase().includes('seafood') ||
                    ingredient.toLowerCase().includes('shrimp') ||
                    ingredient.toLowerCase().includes('ham')
                )
            );
        }
        if (sortOption === 'priceAsc') {
            updatedItems.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'priceDesc') {
            updatedItems.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'nameAsc') {
            updatedItems.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOption === 'nameDesc') {
            updatedItems.sort((a, b) => b.name.localeCompare(a.name));
        }
    
        setFilteredItems(updatedItems);
    };
    return (
        <div className="container mt-4">
            <h2 className="para">Items List</h2>
            <div className="filter-sort-controls">
                <div className="filter-controls">
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="non-vegetarian">Non-Vegetarian</option>
                    </select>
                </div>
                <div className="sort-controls">
                    <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                        <option value="none">None</option>
                        <option value="priceAsc">Price: Low to High</option>
                        <option value="priceDesc">Price: High to Low</option>
                        <option value="nameAsc">Name: A to Z</option>
                        <option value="nameDesc">Name: Z to A</option>
                    </select>
                </div>
            </div>
            <div className="row">
                {filteredItems.map(item => (
                    <div className="col-md-3 mb-4" key={item.id}>
                        <div className="card">
                            <img src={item.image} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Price: ${item.price}</p>
                                <p className="card-text">Ingredients: { item.ingredients}</p>
                                <p className="card-text">Size: {item.size}</p>
                                <p className="card-text">Description: {item.description}</p>
                                <button className="btn btn-danger me-2" onClick={() => handleDelete(item.id)}>DELETE</button>
                                <button className="btn btn-warning" onClick={() => navigate(`/update-item/${item.id}`)}>UPDATE</button>
                                <button className="btn btn-primary ms-2" onClick={() => handleAddToCart(item)}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart">
                <h3>Cart</h3>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>{item.name} - ${item.price}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
export default Items;
