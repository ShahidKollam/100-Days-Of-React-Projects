import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
            setPage(selectedPage);
        }
    };

    // Function to fetch products from the API and set them in state
    const fetchProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=100`);
        const data = await res.json();

        if (data && data.products) {
            setProducts(data.products);
            setTotalPages(Math.ceil(data.products.length / 12));
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            {products.length > 0 && (
                <div className="products">
                    {products.slice(page * 12 - 12, page * 12).map((product) => {
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
                    <span className={page > 1 ? "" : "pagination__disable"} onClick={() => selectPageHandler(page - 1)}>
                        ◀
                    </span>
                    {[...Array(totalPages)].map((_, i) => {
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
                        className={page < totalPages ? "" : "pagination__disable"}
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
