import { useState, useEffect } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { notesAPI } from "../services/noteAPI";
import AlertBox from "../components/AlertBox";
import GenericTable from "../components/GenericTable";
import EmptyState from "../components/EmptyState";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Notes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      if (editingId) {
        await notesAPI.updateNote(editingId, dataForm);
        setSuccess("Catatan berhasil diubah!");
      } else {
        await notesAPI.createNote(dataForm);
        setSuccess("Catatan berhasil ditambahkan!");
      }

      setDataForm({ title: "", content: "", status: "" });
      setEditingId(null);
      setTimeout(() => setSuccess(""), 3000);
      loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Yakin ingin menghapus catatan ini?");
    if (!confirm) return;
    try {
      setLoading(true);
      setError("");
      await notesAPI.deleteNote(id);
      setSuccess("Catatan berhasil dihapus!");
      loadNotes();
    } catch (err) {
      setError("Gagal menghapus catatan: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (note) => {
    setDataForm({
      title: note.title,
      content: note.content,
      status: note.status || "",
    });
    setEditingId(note.id);
  };

  const loadNotes = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await notesAPI.fetchNotes();
      setNotes(data);
    } catch (err) {
      setError("Gagal memuat catatan");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-white mb-4">Notes App</h2>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {editingId ? "Edit Catatan" : "Tambah Catatan Baru"}
        </h3>

        {error && <AlertBox type="error">{error}</AlertBox>}
        {success && <AlertBox type="success">{success}</AlertBox>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="title"
            type="text"
            value={dataForm.title}
            onChange={handleChange}
            required
            placeholder="Judul catatan"
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200"
          />
          <textarea
            name="content"
            rows="3"
            value={dataForm.content}
            onChange={handleChange}
            required
            placeholder="Isi catatan"
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-800 text-white font-semibold rounded-2xl transition-all"
          >
            {loading
              ? "Mohon Tunggu..."
              : editingId
              ? "Simpan Perubahan"
              : "Tambah Data"}
          </button>
        </form>
      </div>

      <div className="mt-8">
        {loading && <LoadingSpinner text="Memuat catatan..." />}
        {!loading && notes.length === 0 && <EmptyState text="Belum ada catatan." />}
        {!loading && notes.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-4">
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold">
                Daftar Catatan ({notes.length})
              </h3>
            </div>

            <GenericTable
              columns={["#", "Judul", "Isi Catatan", "Aksi"]}
              data={notes}
              renderRow={(note, index) => (
                <>
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-semibold text-black">
                    {note.title}
                  </td>
                  <td className="px-6 py-4 max-w-xs truncate">
                    {note.content}
                  </td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      onClick={() => handleEdit(note)}
                      className="text-purple-600 hover:text-purple-800"
                      title="Edit catatan"
                    >
                      <AiFillEdit className="inline text-xl" />
                    </button>
                    <button
                      onClick={() => handleDelete(note.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Hapus catatan"
                    >
                      <AiFillDelete className="inline text-xl" />
                    </button>
                  </td>
                </>
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
}
