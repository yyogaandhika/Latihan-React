export default function PageHeader({ onAddOrder, onAddCustomer, page = "Orders" }) {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex flex-col">
                <span className="text-3xl font-semibold text-white">
                    Dashboard
                </span>
                <div className="flex items-center font-medium space-x-2 mt-2">
                    <span className="text-gray-400">Dashboard</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-400">{page} List</span>
                </div>
            </div>
            <div className="flex space-x-4">
                {onAddOrder && (
                    <button
                        onClick={onAddOrder}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold"
                    >
                        Add Order
                    </button>
                )}
                {onAddCustomer && (
                    <button
                        onClick={onAddCustomer}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold"
                    >
                        Add Customer
                    </button>
                )}
            </div>
        </div>
    );
}
