import React, { useState } from 'react';

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Users() {
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const totalPages = Math.ceil(rows.length / pageSize);
  const currentRows = rows.slice((page - 1) * pageSize, page * pageSize);
  const [selectedRows, setSelectedRows] = useState([]);

  const toggleSelect = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full border border-gray-200 text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-900 uppercase text-xs font-semibold">
            <tr>
              <th className="p-3 text-center">
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
              <th className="p-3">First Name</th>
              <th className="p-3">Last Name</th>
              <th className="p-3">Age</th>
              <th className="p-3">Full Name</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((row) => (
              <tr
                key={row.id}
                className={`border-t ${
                  selectedRows.includes(row.id)
                    ? 'bg-blue-50'
                    : 'hover:bg-gray-50'
                }`} 
              >
                <td className="p-3 text-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => toggleSelect(row.id)}
                  />
                </td>
                <td className="p-3">{row.id}</td>
                <td className="p-3">{row.firstName || '-'}</td>
                <td className="p-3">{row.lastName || '-'}</td>
                <td className="p-3">{row.age ?? '-'}</td>
                <td className="p-3">{`${row.firstName || ''} ${
                  row.lastName || ''
                }`}</td>
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
