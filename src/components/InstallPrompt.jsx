import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isInstalled, setIsInstalled] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true
    );
  });

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the browser install prompt
    await deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  // Don't render if already installed, dismissed, or no prompt event received
  if (isInstalled || isDismissed || !deferredPrompt) {
    return null;
  }

  return (
    <aside
      aria-label="Install App Banner"
      className="fixed bottom-[65px] left-[10px] right-[10px] z-50 flex items-center justify-between gap-3 rounded-[8px] border border-[#087F73]/20 bg-white p-3 shadow-lg"
    >
      <div className="flex items-center gap-3 min-w-0">
        <img
          src="/pwa-192.png"
          alt="Student Diary"
          className="h-10 w-10 shrink-0 rounded-lg object-contain"
        />
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-[#333333] leading-snug truncate">
            Install Student Diary
          </p>
          <p className="text-[11px] text-[#666666] leading-tight">
            Add to home screen for faster access
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={handleInstallClick}
          className="flex items-center gap-1.5 rounded-[5px] bg-[#087F73] px-3 py-1.5 text-[12px] font-medium text-white shadow-sm transition-colors hover:bg-[#06655c] active:scale-95"
        >
          <Download size={14} />
          Install
        </button>
        <button
          onClick={() => setIsDismissed(true)}
          className="p-1 text-[#888888] hover:text-[#444444]"
          aria-label="Dismiss install prompt"
        >
          <X size={18} />
        </button>
      </div>
    </aside>
  );
}
