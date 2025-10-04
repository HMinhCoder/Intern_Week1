import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">🏠 Home</Link>
        <Link to="/about">ℹ️ About</Link>
        <Link to="/phones">📱 Phones</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/phones" element={<PhoneList />} />
        <Route path="/phones/:id" element={<PhoneDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Trang chủ - Demo React Router DOM</h2>;
}

function About() {
  return <h2>Giới thiệu về dự án</h2>;
}

function PhoneList() {
  const phones = [
    { id: 1, name: "iPhone 15 Pro" },
    { id: 2, name: "Samsung S24 Ultra" },
    { id: 3, name: "Xiaomi 14" },
  ];

  return (
    <div>
      <h3>Danh sách điện thoại</h3>
      <ul>
        {phones.map(p => (
          <li key={p.id}>
            <Link to={`/phones/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PhoneDetail() {
  const { id } = useParams();
  return <h3>Chi tiết điện thoại có ID: {id}</h3>;
}

export default App;
