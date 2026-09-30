import { useEffect, useState } from "react";
import {
    NavLink,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import collegeLogo from "./images/collage.jpg";
import profileImage from "./images/profile.jpg";
import AcademicPage from "./pages/academic";
import AttendancePage from "./pages/attendance";
import DashboardPage from "./pages/dashboard";
import IdCardPage from "./pages/id-card";
import MessagesPage from "./pages/messages";
import NotFoundPage from "./pages/not-found";
import NoticesPage from "./pages/notices";
import ProfilePage from "./pages/profile";
import ServicePage from "./pages/service";
import InstallPrompt from "./components/InstallPrompt";

function getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
        return "Good Morning";
    }
    if (hour >= 12 && hour < 17) {
        return "Good Afternoon";
    }
    if (hour >= 17 && hour < 21) {
        return "Good Evening";
    }
    return "Good Night";
}

function Header() {
    const [greeting, setGreeting] = useState(getGreeting);

    useEffect(() => {
        const interval = setInterval(() => {
            setGreeting(getGreeting());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="px-[10px] pb-[16px] pt-[20px]">
            <div className="flex items-center justify-between">
                {/* Student Information */}
                <div className="flex min-w-0 items-center gap-[10px]">
                    {/* Profile Image */}
                    <div className="h-[48px] w-[48px] shrink-0 overflow-hidden rounded-full border-[2px] border-white bg-[#DCEBED] shadow-[0_1px_4px_rgba(0,0,0,0.12)]">
                        <img
                            src={profileImage}
                            alt="Digambar Sukhdev Bhujbal"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Student Name */}
                    <div className="min-w-0">
                        <p className="mb-[2px] text-[13px] font-normal leading-[15px] text-[#666666]">
                            {greeting}
                        </p>

                        <h1 className="whitespace-nowrap text-[16px] font-semibold uppercase leading-[1.35] tracking-[0.1px] text-[#3F3F3F]">
                            Pratik Barsu
                            <br />
                            Bornare
                        </h1>
                    </div>
                </div>

                {/* College Logo */}
                <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center overflow-hidden rounded-[6px] border border-[#EEEEEE] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                    <img
                        src={collegeLogo}
                        alt="Indira College of Commerce and Science"
                        className="h-[35px] w-[31px] scale-275 translate-y-[4px] object-contain"
                    />
                </div>
            </div>
        </header>
    );
}

/* =========================================================
   BOTTOM NAVIGATION ICONS (Google Material Icons Outlined)
========================================================= */

function HomeNavIcon({ size = 25, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
        </svg>
    );
}

function MessageNavIcon({ size = 25, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z" />
        </svg>
    );
}

function IdCardNavIcon({ size = 25, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14v14zm-7-7c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 8.58c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V17h12v-1.42zM8.48 15c.74-.51 2.23-1 3.52-1s2.78.49 3.52 1H8.48z" />
        </svg>
    );
}

function NoticeNavIcon({ size = 25, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
        </svg>
    );
}

function ProfileNavIcon({ size = 25, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
        </svg>
    );
}

function BottomNavigation() {
    const navigation = [
        { label: "Home", icon: HomeNavIcon, to: "/" },
        { label: "Message", icon: MessageNavIcon, to: "/messages" },
        { label: "Id Card", icon: IdCardNavIcon, to: "/id-card" },
        { label: "Notice", icon: NoticeNavIcon, to: "/notices" },
        { label: "Profile", icon: ProfileNavIcon, to: "/profile" },
    ];

    return (
        <nav
            aria-label="Primary navigation"
            className="fixed bottom-0 left-0 z-50 w-full border-t border-[#EEEEEE] bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_8px_rgba(0,0,0,0.08)]"
        >
            <div className="grid h-[63px] w-full grid-cols-5">
                {navigation.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.label}
                            to={item.to}
                            end={item.to === "/"}
                            aria-label={item.label}
                            className={({ isActive }) =>
                                `relative flex flex-col items-center justify-center gap-[3px] ${
                                    isActive
                                        ? "text-[#087F73] font-medium"
                                        : "text-[#757575] font-normal"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive && (
                                        <span className="absolute left-[7px] right-[7px] top-0 h-[3.5px] rounded-[1px] bg-[#087F73]" />
                                    )}
                                    <Icon size={26} className="shrink-0" />
                                    <span className="text-[11px] leading-tight tracking-[0.1px]">
                                        {item.label}
                                    </span>
                                </>
                            )}
                        </NavLink>
                    );
                })}
            </div>
        </nav>
    );
}

export default function App() {
    const { pathname } = useLocation();

    return (
        <div className="h-[100dvh] w-full overflow-hidden bg-[#F5F5F5]">
            <main className="h-full w-full overflow-y-auto overscroll-contain touch-pan-y">
                <div className="w-full">
                    {pathname === "/" && <Header />}
                    <Routes>
                        <Route path="/" element={<DashboardPage />} />
                        <Route path="/academic/attendance" element={<AttendancePage />} />
                        <Route path="/academic/:section" element={<AcademicPage />} />
                        <Route path="/services/:section" element={<ServicePage />} />
                        <Route path="/messages" element={<MessagesPage />} />
                        <Route path="/id-card" element={<IdCardPage />} />
                        <Route path="/notices" element={<NoticesPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </div>
            </main>
            <InstallPrompt />
            {pathname !== "/academic/attendance" && <BottomNavigation />}
        </div>
    );
}
