import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0)

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page) {
            setPage(selectedPage);
        }
        console.log(page);
    };

    // Function to fetch products from the API and set them in state
    const fetchProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=100`);
        const data = await res.json();
        console.log(data);

        if (data && data.products) {
            setProducts(data.products);
            setTotalPages(data.total)
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            {products.length > 0 && (
                <div className="products">
                    {products.slice(page * 10 - 10, page * 10).map((product) => {
                        return (
                            <span className="products__single" key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />
                                <span>{product.title}</span>
                            </span>
                        );
                    })}
                </div>
            )}
            {products.length > 0 && (
                <div className="pagination">
                    <span
                        className={page > 1 ? "" : "pagination__disable"}
                        onClick={() => selectPageHandler(page - 1)}
                    >
                        ◀
                    </span>
                    {[...Array(products.length / 10)].map((_, i) => {
                        return (
                            <span
                                className={page === i + 1 ? "pagination__selected" : ""}
                                onClick={() => selectPageHandler(i + 1)}
                                key={i}
                            >
                                {i + 1}
                            </span>
                        );
                    })}
                    <span
                        className={page < products.length / 10 ? "" : "pagination__disable"}
                        onClick={() => selectPageHandler(page + 1)}
                    >
                        ▶
                    </span>
                </div>
            )}
        </div>
    );
}

export default App;
