
import {
    Github,
    Linkedin,
    Facebook,
    Code2,
    FolderKanban,
    MoreHorizontal
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "../components/ui/dialog";

const apps = [
    {
        name: "GitHub",
        icon: Github,
        url: "https://github.com/saikat2019",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        url: "https://linkedin.com/in/saikat2019",
    },
    {
        name: "Facebook",
        icon: Facebook,
        url: "https://facebook.com/saikat2019",
    },
    {
        name: "Codeforces",
        icon: Code2,
        url: "https://codeforces.com/profile/saikat2019",
    },
    {
        name: "Projects",
        icon: FolderKanban,
        url: "/projects",
    },
    {
        name: "More",
        icon: MoreHorizontal,
        url: "#more",
    },
];


const AppsDock = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [pendingApp, setPendingApp] = useState(null as null | typeof apps[0]);

    const handleAppClick = (app: typeof apps[0], e: React.MouseEvent) => {
        // Only confirm for external links
        if (app.url.startsWith("http")) {
            e.preventDefault();
            setPendingApp(app);
            setDialogOpen(true);
        }
        // else, let navigation happen (for internal links)
    };

    const handleConfirm = () => {
        if (pendingApp) {
            window.open(pendingApp.url, "_blank", "noopener,noreferrer");
            setDialogOpen(false);
            setPendingApp(null);
        }
    };

    return (
        <>
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
                <div className="relative flex flex-col items-center">
                    {/* Dock bar */}
                    <div className="flex items-end space-x-4 px-6 py-3 rounded-3xl border border-zinc-700 shadow-2xl bg-zinc-900/80 backdrop-blur-xl" style={{boxShadow: '0 8px 32px 0 rgba(31,38,135,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.25)'}}>
                        {apps.map((app) => {
                            const Icon = app.icon;
                            return (
                                <motion.a
                                    key={app.name}
                                    href={app.url}
                                    target={app.url.startsWith("http") ? undefined : undefined}
                                    rel={app.url.startsWith("http") ? undefined : undefined}
                                    className="flex flex-col items-center focus:outline-none"
                                    whileHover={{ scale: 1.35, y: -12, filter: 'drop-shadow(0 8px 24px #38bdf8cc)' }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                                    style={{ WebkitTapHighlightColor: 'transparent' }}
                                    onClick={app.url.startsWith("http") ? (e) => handleAppClick(app, e) : undefined}
                                >
                                    <span className="rounded-2xl shadow-lg bg-zinc-800 p-2 border border-zinc-700 flex items-center justify-center">
                                        <Icon className="w-9 h-9 text-zinc-200 transition-colors" />
                                    </span>
                                    <span className="text-xs text-zinc-300 mt-1 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 select-none">
                                        {app.name}
                                    </span>
                                </motion.a>
                            );
                        })}
                    </div>
                    {/* Reflection effect */}
                    <div className="absolute left-0 right-0 top-full flex justify-center pointer-events-none select-none">
                        <div className="w-full h-4 bg-gradient-to-t from-zinc-400/20 to-transparent rounded-b-3xl blur-sm" />
                    </div>
                </div>
            </div>
            {/* Confirmation Dialog */}
            <Dialog open={dialogOpen} 
                onOpenChange={setDialogOpen}>
                <DialogContent
                    showCloseButton 
                    className="backdrop-blur-sm">

                    <DialogHeader>
                        <DialogTitle className="text-zinc-100">Open external link?</DialogTitle>
                    </DialogHeader>
                    <div className="py-2 text-zinc-500 text-center">
                        {pendingApp && (
                            <>
                                You are about to open <span className="font-semibold text-zinc-200">{pendingApp.name}</span> in a new tab.<br />
                                <span className="break-all text-xs">{pendingApp.url}</span>
                            </>
                        )}
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <button className="px-4 py-2 rounded-md bg-zinc-700 text-zinc-200 hover:bg-zinc-600 transition">Cancel</button>
                        </DialogClose>
                        <button
                            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition"
                            onClick={handleConfirm}
                            autoFocus
                        >
                            Open Link
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default AppsDock;