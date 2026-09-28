import {
  BarChart3,
  UserCheck,
  CalendarDays,
  CalendarClock,
  Contact,
  Trophy,
  Clipboard,
  BookOpen,
  ReceiptText,
  BookMarked,
  BadgeCheck,
  Award,
  TrainFront,
  Star,
  FileText,
  FileCheck,
  CreditCard,
  HelpCircle,
  Download,
  ShieldCheck,
  BusFront,
  GraduationCap,
  BookCopy,
  ClipboardCheck,
  IdCard,
} from "lucide-react";

import { Link } from "react-router-dom";

/* =========================================================
   CIRCULAR PROGRESS
========================================================= */

function CircularProgress({ percentage, color, label }) {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const progress =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[66px] w-[66px]">
        <svg
          viewBox="0 0 120 120"
          className="h-full w-full -rotate-90"
        >
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#E9E9E9"
            strokeWidth="10"
          />

          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={progress}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] font-semibold text-[#505050]">
            {percentage.toFixed(2)}%
          </span>
        </div>
      </div>

      <span className="mt-[6px] text-[14px] leading-[17px] text-[#4B4B4B]">
        {label}
      </span>
    </div>
  );
}

/* =========================================================
   ATTENDANCE SECTION
========================================================= */

function AttendanceSection() {
  return (
    <section className="mt-[14px]">
      <h2 className="mb-[10px] px-[10px] text-[16px] font-semibold leading-[20px] text-[#484848]">
        Attendance
      </h2>

      <div className="grid grid-cols-3 gap-[6px] px-[10px]">
        <div className="flex h-[111px] items-center justify-center rounded-[5px] bg-white">
          <CircularProgress
            percentage={52.5}
            color="#4CAF50"
            label="Theory"
          />
        </div>

        <div className="flex h-[111px] items-center justify-center rounded-[5px] bg-white">
          <CircularProgress
            percentage={68.75}
            color="#FF9800"
            label="Practical"
          />
        </div>

        <div className="flex h-[111px] items-center justify-center rounded-[5px] bg-white">
          <CircularProgress
            percentage={60.63}
            color="#087F73"
            label="Overall"
          />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SLUGIFY
========================================================= */

function slugify(label) {
  return label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* =========================================================
   GRID ITEM
========================================================= */

function GridItem({ icon: Icon, label, to }) {
  return (
    <Link
      to={to}
      className="flex min-w-0 flex-col items-center justify-start gap-[5px] active:scale-95"
    >
      <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[#EEEEEE] bg-white">
        <Icon
          size={21}
          strokeWidth={2}
          className="text-[#087F73]"
        />
      </div>

      <span className="max-w-[100px] text-center text-[10px] leading-[13px] text-[#444444]">
        {label}
      </span>
    </Link>
  );
}

/* =========================================================
   ACADEMIC ITEMS
========================================================= */

const academicItems = [
  {
    label: "Dashboard",
    icon: BarChart3,
  },
  {
    label: "Attendance",
    icon: UserCheck,
  },
  {
    label: "Class Schedule",
    icon: CalendarDays,
  },
  {
    label: "Exam Time Table",
    icon: CalendarClock,
  },
  {
    label: "Exam Hall Ticket",
    icon: Contact,
  },
  {
    label: "Result",
    icon: Trophy,
  },
  {
    label: "Internal Mark",
    icon: Clipboard,
  },
  {
    label: "ITLE",
    icon: BookOpen,
  },
  {
    label: "Fees Paid",
    icon: ReceiptText,
  },
  {
    label: "Register Subject",
    icon: BookMarked,
  },
  {
    label: "Calendar",
    icon: CalendarDays,
  },
];

/* =========================================================
   SERVICE ITEMS
========================================================= */

const serviceItems = [
  {
    label: "Certificate",
    icon: BadgeCheck,
  },
  {
    label: "Bonafide Certificate",
    icon: Award,
  },
  {
    label: "Railway Concession Apply",
    icon: TrainFront,
  },
  {
    label: "Feedback",
    icon: Star,
  },
  {
    label: "Application",
    icon: FileText,
  },
  {
    label: "Document Verification",
    icon: FileCheck,
  },
  {
    label: "Fee Payment",
    icon: CreditCard,
  },
  {
    label: "Help & Support",
    icon: HelpCircle,
  },
  {
    label: "Download Forms",
    icon: Download,
  },
  {
    label: "Student Verification",
    icon: ShieldCheck,
  },
  {
    label: "Bus Pass",
    icon: BusFront,
  },
  {
    label: "Scholarship",
    icon: GraduationCap,
  },
  {
    label: "Study Material",
    icon: BookCopy,
  },
  {
    label: "Applications",
    icon: ClipboardCheck,
  },
  {
    label: "Student ID",
    icon: IdCard,
  },
];

/* =========================================================
   ITEM SECTION
========================================================= */

function ItemSection({
  title,
  items,
  path,
  bottomPadding,
}) {
  return (
    <section className="mt-[14px] px-[10px]">
      <div
        className={`
          rounded-[6px]
          bg-white
          px-[10px]
          pt-[14px]
          ${bottomPadding}
        `}
      >
        <h2 className="mb-[20px] text-[16px] font-semibold leading-[20px] text-[#444444]">
          {title}
        </h2>

        <div className="grid grid-cols-3 gap-y-[30px]">
          {items.map((item) => (
            <GridItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              to={`/${path}/${slugify(item.label)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   COLLEGE CARD
========================================================= */

function CollegeCard() {
  return (
    <section
      className="
        flex
        h-[58px]
        w-full
        flex-col
        items-center
        justify-center
        rounded-[5px]
        bg-white
        px-[5px]
        text-center
      "
    >
      <h2
        className="
          w-full
          whitespace-nowrap
          text-[15px]
          font-semibold
          leading-[18px]
          text-[#3F3F3F]
        "
      >
        INDIRA COLLEGE OF COMMERCE &amp; SCIENCE
      </h2>

      <p
        className="
          mt-[3px]
          text-[14px]
          font-normal
          leading-[17px]
          text-[#444444]
        "
      >
        2026-2027
      </p>
    </section>
  );
}

/* =========================================================
   DASHBOARD PAGE
========================================================= */

export default function DashboardPage() {
  return (
    <main
      className="
        min-h-[100dvh]
        w-full
        overflow-x-hidden
        bg-[#F5F5F5]
        pb-[75px]
      "
    >
      <CollegeCard />

      <AttendanceSection />

      <ItemSection
        title="Academic"
        items={academicItems}
        path="academic"
        bottomPadding="pb-[30px]"
      />

      <ItemSection
        title="Services"
        items={serviceItems}
        path="services"
        bottomPadding="pb-[35px]"
      />
    </main>
  );
}