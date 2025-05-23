
export default function PageHeader() {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold text-white ">
                    Dashboard
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    <span id="breadcrumb-home" className="text-gray-400">Dashboard</span>
                    <span id="breadcrumb-separator" className="text-gray-400">/</span>
                    <span id="breadcrumb-current" className="text-gray-400">Order List</span>
                </div>
            </div>
            <div id="action-button" className="bg-white text-black px-4 py-2 rounded-lg font-semibold">
                <button id="add-button">
		                Add Button
		            </button>
            </div>
        </div>
    );
}