import React, { useState, useEffect } from 'react';

// Mengimpor data dari file 'customers.json' yang ada di folder 'data'
import customersData from '../data/customers.json';

export default function Customers() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        // Memuat data customers dari file JSON
        setCustomers(customersData);
    }, []);

    return (
        <div className="text-white p-6">
            <h1 className="text-3xl font-semibold mb-4">Customer List</h1>
            <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
                <table className="min-w-full table-auto text-sm bg-white text-black">
                    <thead className="bg-purple-700 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left">Customer ID</th>
                            <th className="px-6 py-3 text-left">Customer Name</th>
                            <th className="px-6 py-3 text-left">Email</th>
                            <th className="px-6 py-3 text-left">Phone</th>
                            <th className="px-6 py-3 text-left">Loyalty</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-black">
                        {customers.map((customer) => (
                            <tr key={customer.customerId} className="hover:bg-purple-100 transition-colors duration-300">
                                <td className="px-6 py-4">{customer.customerId}</td>
                                <td className="px-6 py-4">{customer.customerName}</td>
                                <td className="px-6 py-4">{customer.email}</td>
                                <td className="px-6 py-4">{customer.phone}</td>
                                <td className="px-6 py-4">{customer.loyalty}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
