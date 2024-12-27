import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />}>
          <Route path="product/:productId" element={<Product />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page.</p>
    </div>
  );
}

function Category() {
  const { id } = useParams();
  return (
    <div>
      <h1>Category {id}</h1>
      <Outlet/>
    </div>
  );
}

function Product() {
  const { productId } = useParams();
  return (
    <div>
      <h1>Product {productId}</h1>
      <p>This is product {productId}.</p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default App;