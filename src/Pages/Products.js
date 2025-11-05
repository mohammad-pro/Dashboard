import React, { useState } from 'react';
import { productData, userData } from '../Components/Chart/chartData';
import { RiDeleteBin2Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function Users() {
  const [page, setPage] = useState(1);
  const [userInformation, setUserInformation] = useState([...productData]);
  const pageSize = 5;
  const totalPages = Math.ceil(userInformation.length / pageSize);
  const currentRows = userInformation.slice((page - 1) * pageSize, page * pageSize);
  const [selectedRows, setSelectedRows] = useState([]);

  // Function to toggle the selection of a row
  const toggleSelect = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  // Function to handle row deletion
  const handleDelete = (id) => {
    // Filter out the user with the given id from userInformation
    const updatedUserData = userInformation.filter((user) => user.id !== id);

    // Update the state with the new user data
    setUserInformation(updatedUserData);  // This updates the displayed user data after deletion
  };

  return (
    
    <div className="w-full max-w-6xl mx-auto p-4">
      {console.log(userInformation)}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full border border-gray-200 text-sm text-left text-gray-700">
          <thead className="bg-gray-100  text-gray-900 uppercase text-xs font-semibold">
            <tr className=''>
              <th className="p-3 text-center ">
                <input
                  type="checkbox"
                  checked={selectedRows.length === currentRows.length}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedRows(currentRows.map((r) => r.id));
                    } else {
                      setSelectedRows([]);
                    }
                  }}
                />
              </th>
              <th className="p-3">ID</th>
              <th className="p-3">Product</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Status</th>
              <th className="p-3">Price</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row) => (
              <tr
                key={row.id}
                className={`border-t  ${selectedRows.includes(row.id) ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
              >
                <td className="p-3 text-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => toggleSelect(row.id)}
                  />
                </td>
                <td className="p-3">{row.id}</td>
                <td className="p-3 flex items-center">
                  <div className=' w-10 h-10 rounded-full flex justify-center items-center'>
                    <img src={row.img} className=' object-fit' alt="" />
                  </div>
                  
                  {row.product || '-'}
                  
                  </td>
                <td className="p-3">{row.stock || '-'}</td>
                <td className="p-3">{row.status ?? '-'}</td>
                <td className="p-3">{row.price ?? '-'}</td>
                <td className="p-3 flex gap-x-3">
                  <RiDeleteBin2Line 
                    className="cursor-pointer text-base" 
                    onClick={() => handleDelete(row.id)} 
                  />

                  <Link to={`/product/${row.id}`} >
                    <FiEdit className="cursor-pointer text-base" />
                  </Link>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <span className="text-gray-600">
          Page {page} of {totalPages}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            Prev
          </button>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
