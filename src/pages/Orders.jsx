import React, { useState, useEffect } from 'react';
import ordersData from '../data/orders.json';

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newOrder, setNewOrder] = useState({
        orderId: '',
        customerName: '',
        status: 'Pending',
        totalPrice: '',
        orderDate: ''
    });
    const [editingOrderId, setEditingOrderId] = useState(null);
    const [editingData, setEditingData] = useState(null);

    useEffect(() => {
        setOrders(ordersData);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewOrder(prev => ({ ...prev, [name]: value }));
    };

    const handleAddOrder = (e) => {
        e.preventDefault();
        setOrders(prev => [...prev, newOrder]);
        setNewOrder({
            orderId: '',
            customerName: '',
            status: 'Pending',
            totalPrice: '',
            orderDate: ''
        });
        setShowForm(false);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditingData(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveEdit = () => {
        setOrders(prev =>
            prev.map(order =>
                order.orderId === editingOrderId ? editingData : order
            )
        );
        setEditingOrderId(null);
        setEditingData(null);
    };

    return (
        <div className="text-white p-6 bg-gradient-to-b from-black via-purple-900 to-black min-h-screen">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-white">Orders List</h1>
                <button
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg transition"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? 'Cancel' : 'Add Order'}
                </button>
            </div>

            {showForm && (
                <form onSubmit={handleAddOrder} className="bg-purple-900 p-4 rounded-lg shadow-lg mb-6 border border-purple-600">
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="orderId"
                            placeholder="Order ID"
                            value={newOrder.orderId}
                            onChange={handleInputChange}
                            className="p-2 rounded bg-purple-800 text-white border border-purple-600 placeholder-gray-300"
                            required
                        />
                        <input
                            type="text"
                            name="customerName"
                            placeholder="Customer Name"
                            value={newOrder.customerName}
                            onChange={handleInputChange}
                            className="p-2 rounded bg-purple-800 text-white border border-purple-600 placeholder-gray-300"
                            required
                        />
                        <select
                            name="status"
                            value={newOrder.status}
                            onChange={handleInputChange}
                            className="p-2 rounded bg-purple-800 text-white border border-purple-600"
                        >
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                        <input
                            type="number"
                            name="totalPrice"
                            placeholder="Total Price"
                            value={newOrder.totalPrice}
                            onChange={handleInputChange}
                            className="p-2 rounded bg-purple-600 text-white border border-purple-400 placeholder-gray-300"
                            required
                        />
                        <input
                            type="date"
                            name="orderDate"
                            value={newOrder.orderDate}
                            onChange={handleInputChange}
                            className="p-2 rounded bg-purple-800 text-white border border-purple-600 col-span-2"
                            required
                        />
                    </div>
                    <button type="submit" className="mt-4 bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white font-semibold transition">
                        Submit Order
                    </button>
                </form>
            )}

            <div className="overflow-x-auto bg-purple-900 rounded-lg shadow-lg border border-purple-700">
                <table className="min-w-full table-auto text-sm bg-white text-black">
                    <thead className="bg-purple-800 text-white font-semibold">
                        <tr>
                            <th className="px-6 py-3 text-left">Order ID</th>
                            <th className="px-6 py-3 text-left">Customer Name</th>
                            <th className="px-6 py-3 text-left">Status</th>
                            <th className="px-6 py-3 text-left">Total Price</th>
                            <th className="px-6 py-3 text-left">Order Date</th>
                            <th className="px-6 py-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white text-black">
                        {orders.map((order) => (
                            <tr key={order.orderId} className="hover:bg-purple-100 transition-colors duration-300">
                                {editingOrderId === order.orderId ? (
                                    <>
                                        <td className="px-6 py-4">
                                            <input type="text" name="orderId" value={editingData.orderId} onChange={handleEditChange} className="bg-purple-800 text-white p-1 rounded w-full border border-purple-600" />
                                        </td>
                                        <td className="px-6 py-4">
                                            <input type="text" name="customerName" value={editingData.customerName} onChange={handleEditChange} className="bg-purple-800 text-white p-1 rounded w-full border border-purple-600" />
                                        </td>
                                        <td className="px-6 py-4">
                                            <select name="status" value={editingData.status} onChange={handleEditChange} className="bg-purple-800 text-white p-1 rounded w-full border border-purple-600">
                                                <option value="Pending">Pending</option>
                                                <option value="Completed">Completed</option>
                                                <option value="Cancelled">Cancelled</option>
                                            </select>
                                        </td>
                                        <td className="px-6 py-4">
                                            <input type="number" name="totalPrice" value={editingData.totalPrice} onChange={handleEditChange} className="bg-purple-800 text-white p-1 rounded w-full border border-purple-600" />
                                        </td>
                                        <td className="px-6 py-4">
                                            <input type="date" name="orderDate" value={editingData.orderDate} onChange={handleEditChange} className="bg-purple-800 text-white p-1 rounded w-full border border-purple-600" />
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="text-sm text-green-400 hover:text-green-300" onClick={handleSaveEdit}>Save</button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td className="px-6 py-4">{order.orderId}</td>
                                        <td className="px-6 py-4">{order.customerName}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-sm font-semibold ${order.status === 'Completed' ? 'bg-green-500 text-black' : order.status === 'Pending' ? 'bg-yellow-400 text-black' : 'bg-red-500 text-white'}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">{parseInt(order.totalPrice).toLocaleString()}</td>
                                        <td className="px-6 py-4">{new Date(order.orderDate).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">
                                            <button
                                                className="text-sm text-blue-400 hover:text-blue-300"
                                                onClick={() => {
                                                    setEditingOrderId(order.orderId);
                                                    setEditingData({ ...order });
                                                }}
                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
