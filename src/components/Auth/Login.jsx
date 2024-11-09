import { useState } from "react";

export default function Login({handleLogin}) {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
            <div className="border-2 rounded-3xl border-emerald-600 bg-white shadow-xl p-10 md:p-20 w-80 md:w-96 transition-all transform hover:scale-105">
                <h2 className="text-2xl font-bold text-center text-emerald-600 mb-8">Welcome Back</h2>
                <form className="flex flex-col items-center space-y-6" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="border-2 rounded-full border-emerald-600 p-3 w-full focus:outline-none focus:border-blue-400 transition-all duration-300 shadow-sm"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        className="border-2 rounded-full border-emerald-600 p-3 w-full focus:outline-none focus:border-blue-400 transition-all duration-300 shadow-sm"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full rounded-full bg-emerald-600 p-3 text-white font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-lg"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
