import { ArrowLeft, CalendarDays } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

/* =========================================================
   ATTENDANCE DATA
========================================================= */

const attendanceData = [
    {
        subject: "PROJECT II- ONLINE CERTIFICATION PROGRAM",
        code: "24CEP501CS",
        faculty: "MONALI CHAUDHARI",
        percentage: 25,
        total: 4,
        present: 1,
        absent: 3,
    },
    {
        subject: "CORE JAVA",
        code: "24CS501T",
        faculty: "Dhruvi Jayesh Jariwala",
        percentage: 36,
        total: 25,
        present: 9,
        absent: 16,
    },
    {
        subject: "PRACTICAL COURSE BASED ON 24CS501T",
        code: "24CS502P",
        faculty: "Dhruvi Jayesh Jariwala",
        percentage: 57,
        total: 7,
        present: 4,
        absent: 3,
    },
    {
        subject: "WEB TECHNOLOGY - I",
        code: "24CS503T",
        faculty: "PROF SHITAL SAMEER PASHANKAR",
        percentage: 48,
        total: 27,
        present: 13,
        absent: 14,
    },
    {
        subject: "PRACTICAL COURSE BASED ON 24CS503T",
        code: "24CS504P",
        faculty: "PROF SHITAL SAMEER PASHANKAR",
        percentage: 88,
        total: 8,
        present: 7,
        absent: 1,
    },
    {
        subject: "OPERATING SYSTEMS - I",
        code: "24CS505T",
        faculty: "Shilpa Mahesh Nawale",
        percentage: 36,
        total: 25,
        present: 9,
        absent: 16,
    },
    {
        subject: "DATA SCIENCE",
        code: "24CS506T",
        faculty: "MS. SARITA MAREPA BYAGAR",
        percentage: 17,
        total: 24,
        present: 4,
        absent: 20,
    },
    {
        subject: "PRACTICAL COURSE BASED ON 24CS506T",
        code: "24CS507P",
        faculty: "PROF SHITAL SAMEER PASHANKAR",
        percentage: 57,
        total: 7,
        present: 4,
        absent: 3,
    },
    {
        subject: "BLOCKCHAIN TECHNOLOGY",
        code: "24CS508T",
        faculty: "MONALI CHAUDHARI",
        percentage: 45.6,
         total: 27,
         present: 12,
         absent: 15,

  },
{
    subject: "CYBER SECURITY CONCEPTS AND PRINCIPLES",
        code: "24CS509T",
            faculty: "MS SUWARNA SURESH KEDARI",
                percentage: 35,
                    total: 20,
                        present: 7,
                            absent: 13,
  },
{
    subject: "PRACTICAL COURSE ON CLOUD COMPUTING",
        code: "24CS510CS",
            faculty: "Deepali Devram Chaudhari",
                percentage: 83,
                    total: 6,
                        present: 5,
                            absent: 1,
  },
];

/* =========================================================
   DATE INPUT
========================================================= */

function DateInput() {
    return (
        <div className="flex min-w-0 flex-1 flex-col">
            <div
                className="
          flex
          h-[45px]
          w-full
          items-center
          rounded-[5px]
          border
          border-[#d5d5d5]
          bg-white
          px-[10px]
        "
            >
                <CalendarDays
                    size={19}
                    strokeWidth={1.8}
                    className="mr-[10px] shrink-0 text-[#555]"
                />

                <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    className="
            min-w-0
            w-full
            bg-transparent
            p-0
            text-[14px]
            leading-none
            text-[#777]
            outline-none
            placeholder:text-[#777]
          "
                />
            </div>
        </div>
    );
}

/* =========================================================
   ATTENDANCE CARD
========================================================= */

function AttendanceCard({
    subject,
    code,
    faculty,
    percentage,
    total,
    present,
    absent,
}) {
    return (
        <article
            className="
        mb-[9px]
        w-full
        rounded-[6px]
        bg-white
        px-[12px]
        py-[13px]
      "
        >
            {/* SUBJECT + SEE ALL */}

            <div className="flex items-start justify-between gap-[8px]">
                <h2
                    className="
            min-w-0
            flex-1
            text-[16px]
            font-medium
            uppercase
            leading-[22px]
            text-[#555]
          "
                >
                    {subject}
                </h2>

                <button
                    type="button"
                    className="
            shrink-0
            whitespace-nowrap
            pt-[1px]
            text-[16px]
            font-semibold
            leading-[21px]
            text-[#087f73]
          "
                >
                    See All
                </button>
            </div>

            {/* CODE */}

            <p
                className="
          mt-[8px]
          text-[15px]
          leading-[20px]
          text-[#555]
        "
            >
                Code : {code}
            </p>

            {/* FACULTY */}

            <p
                className="
          mt-[2px]
          text-[15px]
          leading-[20px]
          text-[#555]
        "
            >
                Faculty : {faculty}
            </p>

            {/* PERCENTAGE */}

            <p
                className="
          mt-[15px]
          text-[16px]
          font-semibold
          leading-[19px]
          text-[#4caf50]
        "
            >
                {percentage}%
            </p>

            {/* PROGRESS BAR */}

            <div
                className="
          mt-[4px]
          flex
          h-[8px]
          w-full
          gap-[1px]
        "
            >
                {/* PRESENT */}

                <div
                    className="
            h-full
            min-w-0
            rounded-full
            bg-[#4caf50]
          "
                    style={{
                        width: `calc(${percentage}% - 1.5px)`,
                    }}
                />

                {/* ABSENT */}

                <div
                    className="
            h-full
            min-w-0
            flex-1
            rounded-full
            bg-[#f44336]
          "
                />
            </div>

            {/* STATISTICS */}

            <div
                className="
          mt-[13px]
          grid
          grid-cols-3
          items-center
          text-[13px]
          leading-[16px]
          text-[#777]
        "
            >
                {/* TOTAL */}

                <div className="flex items-center gap-[4px]">
                    <span className="h-[10px] w-[10px] rounded-[2px] bg-[#9e9e9e]" />

                    <span>
                        Total{" "}
                        <strong className="font-semibold text-[#333]">
                            {total}
                        </strong>
                    </span>
                </div>

                {/* PRESENT */}

                <div className="flex items-center justify-center gap-[4px]">
                    <span className="h-[10px] w-[10px] rounded-[2px] bg-[#4caf50]" />

                    <span>
                        Present{" "}
                        <strong className="font-semibold text-[#333]">
                            {present}
                        </strong>
                    </span>
                </div>

                {/* ABSENT */}

                <div className="flex items-center justify-end gap-[4px]">
                    <span className="h-[10px] w-[10px] rounded-[2px] bg-[#f44336]" />

                    <span>
                        Absent{" "}
                        <strong className="font-semibold text-[#333]">
                            {absent}
                        </strong>
                    </span>
                </div>
            </div>
        </article>
    );
}

/* =========================================================
   ATTENDANCE PAGE
========================================================= */

export default function AttendancePage() {
    const { section = "attendance" } = useParams();
    const navigate = useNavigate();

    const title = section
        .split("-")
        .filter(Boolean)
        .map(
            (word) =>
                word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" ");

    return (
        <div
            className="
        fixed
        inset-0
        h-[100dvh]
        w-full
        overflow-hidden
        bg-[#f5f5f5]
      "
        >
            {/* SCROLLABLE PAGE */}

            <main
                className="
          h-full
          w-full
          overflow-x-hidden
          overflow-y-auto
          overscroll-y-contain
          touch-pan-y
          pb-[55px]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
            >
                {/* HEADER */}

                <header
                    className="
            flex
            h-[72px]
            w-full
            items-center
            px-[20px]
          "
                >
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        aria-label="Go back"
                        className="
              mr-[17px]
              flex
              h-[35px]
              w-[35px]
              shrink-0
              items-center
              justify-center
            "
                    >
                        <ArrowLeft
                            size={31}
                            strokeWidth={1.7}
                            className="text-[#444]"
                        />
                    </button>

                    <h1
                        className="
              text-[21px]
              font-normal
              leading-none
              text-[#333]
            "
                    >
                        {title}
                    </h1>
                </header>

                {/* DATE FILTER CARD */}

                <section
                    className="
            mx-[10px]
            rounded-[6px]
            bg-white
            px-[8px]
            py-[14px]
          "
                >
                    {/* DATE INPUTS */}

                    <div className="flex w-full gap-[5px]">
                        <div className="flex-1">
                            <h3
                                className="
                  mb-[4px]
                  text-[15px]
                  leading-[18px]
                  text-[#555]
                "
                            >
                                From Date
                            </h3>

                            <DateInput />
                        </div>

                        <div className="flex-1">
                            <h3
                                className="
                  mb-[4px]
                  text-[15px]
                  leading-[18px]
                  text-[#555]
                "
                            >
                                To Date
                            </h3>

                            <DateInput />
                        </div>
                    </div>

                    {/* SHOW ATTENDANCE */}

                    <button
                        type="button"
                        className="
              mt-[10px]
              h-[41px]
              w-full
              rounded-[5px]
              bg-[#087f73]
              text-[16px]
              font-normal
              text-white
              active:opacity-90
            "
                    >
                        Show Attendance
                    </button>
                </section>

                {/* ATTENDANCE CARDS */}

                <section
                    className="
            mt-[6px]
            w-full
            px-[10px]
          "
                >
                    {attendanceData.map((item) => (
                        <AttendanceCard
                            key={item.code}
                            {...item}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
}
