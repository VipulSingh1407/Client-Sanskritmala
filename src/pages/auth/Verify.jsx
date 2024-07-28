import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserData } from '../../context/userContext';

const Verify = () => {
  const [otp, setOtp] = useState("");
  const { btnLoading, verifyOtp } = UserData();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    await verifyOtp(Number(otp), navigate);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Verify Account</h2>
        <form onSubmit={submitHandler} className="space-y-6">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-300">Enter OTP</label>
            <input
              type="number"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-100 focus:border-yellow-100 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={btnLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-orange hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {btnLoading ? "Loading..." : "Verify"}
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Go to <Link to='/login' className="text-indigo-500 hover:text-indigo-400">Login</Link> page.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Verify;
