import { useState } from 'react';
import productService from '../../services/productService';

export default function UpdateProduct() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    await productService.updateProduct(id, { name });
    alert("Product updated!");
  };

  return (
    <form onSubmit={handleUpdate}>
      <input className="form-control mb-2" type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
      <input className="form-control mb-2" type="text" placeholder="New Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button className="btn btn-warning">Update</button>
    </form>
  );
}
