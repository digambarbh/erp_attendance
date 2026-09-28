import {
    Bell,
    Contact,
    House,
    MessageSquare,
    UserRound,
} from "lucide-react";
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

function Header() {
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
                        <p className="mb-[2px] text-[11px] font-normal leading-[13px] text-[#666666]">
                            Good Afternoon
                        </p>

                        <h1 className="whitespace-nowrap text-[16px] font-semibold uppercase leading-[1.35] tracking-[0.1px] text-[#3F3F3F]">
                            DIGAMBAR SUKHDEV
                            <br />
                            BHUJBAL
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

function BottomNavigation() {
    const navigation = [
        { label: "Home", icon: House, to: "/" },
        { label: "Message", icon: MessageSquare, to: "/messages" },
        { label: "Id Card", icon: Contact, to: "/id-card" },
        { label: "Notice", icon: Bell, to: "/notices" },
        { label: "Profile", icon: UserRound, to: "/profile" },
    ];

    return (
        <nav
            aria-label="Primary navigation"
            className="fixed bottom-0 left-0 z-50 w-full border-t border-[#EEEEEE] bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_8px_rgba(0,0,0,0.08)]"
        >
            <div className="grid h-[55px] w-full grid-cols-5">
                {navigation.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.label}
                            to={item.to}
                            end={item.to === "/"}
                            aria-label={item.label}
                            className={({ isActive }) => `relative flex flex-col items-center justify-center gap-[3px] ${isActive ? "text-[#087F73]" : "text-[#A0A0A0]"}`}
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive && (
                                        <span className="absolute left-0 right-0 top-0 h-[4px] bg-[#087F73]" />
                                    )}
                                    <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                                    <span className="text-[10px] leading-none">{item.label}</span>
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
