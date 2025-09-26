import AppsDock from "@/components/AppsDock";
import { X, TerminalSquare } from "lucide-react";
import { useState } from "react";

const Home = () => {
    const [minimized, setMinimized] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col items-center justify-center">
            {/* Terminal Window */}
            {!minimized && (
                <div
                    className={
                        `rounded-xl shadow-2xl border border-zinc-700 bg-zinc-900/95 overflow-hidden transition-all duration-300 ` +
                        (fullscreen
                            ? 'fixed inset-0 z-50 w-screen h-screen max-w-none max-h-none flex flex-col'
                            : 'w-full max-w-2xl')
                    }
                    style={fullscreen ? { borderRadius: 0 } : {}}
                >
                    {/* Header */}
                    <div className="flex items-center px-4 py-2 bg-zinc-800 border-b border-zinc-700 relative select-none">
                        {/* MacOS traffic lights */}
                        <div className="flex space-x-2">
                            <button
                                className="w-3 h-3 rounded-full bg-red-500 border border-red-700"
                                aria-label="Close"
                                onClick={() => setMinimized(true)}
                            />
                            <button
                                className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-600"
                                aria-label="Minimize"
                                onClick={() => setMinimized(true)}
                            />
                            <button
                                className="w-3 h-3 rounded-full bg-green-500 border border-green-700"
                                aria-label="Fullscreen"
                                onClick={() => setFullscreen(f => !f)}
                            />
                        </div>
                        <div className="flex-1 text-center">
                            <span className="text-zinc-200 font-mono text-sm tracking-wide">Saikat's Portfolio</span>
                        </div>
                        <div className="flex items-center space-x-2 absolute right-4">
                            <X className="w-5 h-5 text-zinc-400 hover:text-red-400 transition cursor-pointer" onClick={() => setMinimized(true)} />
                        </div>
                    </div>
                    {/* Terminal body */}
                    <div className="p-6 bg-zinc-950 min-h-[300px] font-mono text-zinc-200 text-base flex-1">
                        <span className="text-green-400">saikat@portfolio</span>
                        <span className="text-zinc-400">:~$</span>
                        <span className="ml-2">Welcome to my terminal portfolio! 🚀</span>
                        <div className="mt-4 text-zinc-400">
                            # Type <span className="text-green-400">help</span> to see available commands.
                        </div>
                    </div>
                </div>
            )}
            {/* Dock (App Icon) */}
            {minimized && (
                <div className="flex flex-col items-center mt-8">
                    <div className="bg-zinc-800/80 rounded-2xl px-6 py-3 shadow-lg border border-zinc-700 flex items-end space-x-6">
                        <button
                            className="flex flex-col items-center group focus:outline-none"
                            onClick={() => setMinimized(false)}
                        >
                            <span className="rounded-lg shadow-md bg-zinc-900 p-2 group-hover:scale-110 transition-transform">
                                <TerminalSquare className="w-8 h-8 text-green-400" />
                            </span>
                            <span className="text-xs text-zinc-300 mt-1">Terminal</span>
                        </button>
                    </div>
                    <div className="h-2" />
                </div>
            )}

            <AppsDock /> 
        </div>
    );
}


export default Home;