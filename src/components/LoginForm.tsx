import { useState } from 'react';
import { User, Key, Mail } from 'lucide-react';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }
    onLogin(username, password);
  };

  return (
    <div className="max-w-md w-full space-y-8">
      <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-xl border border-white/20">
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-4">

            <User className="h-10 w-10 " />

            <Key className="h-10 w-10 " />

          </div>
          <h2 className="text-3xl font-bold  text-center">
            Login
          </h2>
          <p className="mt-2 text-center ">
            Please sign in to continue
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-300 text-sm text-center bg-red-900/20 py-2 rounded-lg">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div className="relative">
              <label htmlFor="username" className="block text-sm font-medium  mb-1">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyan-500">
                  <User className="h-5 w-5 " />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-blue-500  rounded-lg bg-white/10   focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium  mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-cyan-500">
                  <Key className="h-5 w-5 " />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2  border-blue-500 border rounded-lg bg-white/10   focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium  bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transform transition-all duration-200 hover:scale-105"
            >
              Sign in
            </button>
          </div>


          <div className="text-center mt-4">
            <a href="#" className="text-sm  hover:text-blue-700">
              Forgot your password?
            </a>
          </div>

        </form>
      </div>
    </div>
  );
}