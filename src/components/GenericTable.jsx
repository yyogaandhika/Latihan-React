export default function GenericTable({ columns, data, renderRow }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y"  >
        {/* Header */}
        <thead className="bg-purple-600 text-black">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider border-b border-purple-300"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody className="bg-white divide-y divide-purple-200 text-black">
          {data.map((item, idx) => (
            <tr
              key={idx}
              className="hover:bg-purple-50 transition-all duration-200"
            >
              {renderRow(item, idx)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
