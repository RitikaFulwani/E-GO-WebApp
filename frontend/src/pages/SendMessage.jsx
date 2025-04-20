import React, { useState } from 'react';
import axios from 'axios';

const SendSMS = () => {
  const [to, setTo] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('');

  const handleSend = async (e) => {
    e.preventDefault();

    if (!to || !body) {
      setStatus('Please fill in both phone number and message.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/sms/send-sms', { to, body });

      if (res.data.success) {
        setStatus('✅ Message sent successfully!');
      } else {
        setStatus('❌ Failed to send message.');
      }
    } catch (err) {
      setStatus('❌ Error: ' + err.response?.data?.error || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">📩 Send SMS</h2>
        <form onSubmit={handleSend} className="space-y-5">
          <input
            type="text"
            placeholder="📞 Enter Phone Number"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="💬 Enter Message"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Send Message
          </button>
        </form>
        {status && (
          <p className="mt-6 text-center text-sm font-medium text-green-700 bg-green-50 border border-green-200 p-3 rounded-lg shadow-sm">
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default SendSMS;