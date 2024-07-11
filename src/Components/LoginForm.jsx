'use client'
import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useState } from 'react';
import auth from '../../firebase.config';
import toast from 'react-hot-toast';


export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email= e.target.email.value;
    const password= e.target.password.value;
    
    const result= await signInWithEmailAndPassword(auth, email, password)
     if(result.user.email){
        toast.success('Logged in')
         
     }

    // console.log(email,password)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#60E9CE] via-[#648680] to-gray-400">
      <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-500 ease-in-out hover:scale-105">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-[#5899a5] hover:bg-[#83ada5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
            >
              Sign in
            </button>
            
          </div>

           <p className='text-black'> New here? Please <Link href='/signup' className='text-[#5899a5] '>Sign Up</Link> </p>
        </form>
        
      </div>
    </div>
  );
}
