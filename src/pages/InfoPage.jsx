export default function InfoPage({ title, icon: Icon, description }) {
  return (
    <section className="px-[10px] pt-[18px]">
      <div className="flex min-h-[150px] items-center gap-4 rounded-[6px] bg-white p-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e7f2f0] text-[#087F73]">
          <Icon size={25} />
        </div>
        <div>
          <h2 className="text-[18px] font-semibold text-[#444444]">{title}</h2>
          <p className="mt-1 text-[13px] text-[#777777]">{description}</p>
        </div>
      </div>
    </section>
  );
}
