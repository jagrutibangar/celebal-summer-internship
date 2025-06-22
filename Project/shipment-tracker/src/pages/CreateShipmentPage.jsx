import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext";




const CreateShipmentPage = () => {

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    sender:"",
    reciver:"",
    address:"",
    packageSize:"",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "shipments"), {
        ...formData,
        userId: currentUser.uid,
        status: "Pending",
        createdAt: serverTimestamp(),
      });

      alert("Shipment created!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error adding shipment:", error);
      alert("Failed to create shipment.");
    }
  };


  return (
    <div className="min-h-screen bg-slate-200 p-6">
      <h2 className="text-2xl font-bold mb-4">📤 Create Shipment</h2>

      <form
        onSubmit={handleSubmit}
        className="p-6 rounded max-w-xl mx-auto"
      >
        <label className="block mb-2 font-medium">Sender Name</label>
        <input className="w-full  p-2 mb-4 rounded-full bg-white" name="sender"
          placeholder="Sender Name"
          value={formData.sender}
          onChange={handleChange}
          required />

        <label className="block mb-2 font-medium">Receiver Name</label>
        <input className="w-full p-2 mb-4 rounded-full bg-white" name="receiver"
          placeholder="Receiver Name"
          value={formData.receiver}
          onChange={handleChange}
          required />

        <label className="block mb-2 font-medium">Package Size</label>
        <select className="w-full p-2 mb-4 rounded-full bg-white" name="packageSize"
          value={formData.packageSize}
          onChange={handleChange}
          required>
          <option value="">Select size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <label className="block mb-2 font-medium">Delivery Address</label>
        <textarea className="w-full p-3 mb-4 rounded-full bg-white" rows="3" name="address"
          placeholder="Delivery Address"
          value={formData.address}
          onChange={handleChange} required />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-full cursor-pointer"
        >Submit Shipment
        </button>
      </form>
    </div>
  );
};

export default CreateShipmentPage;
