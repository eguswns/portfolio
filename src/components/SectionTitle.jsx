function SectionTitle({ title, className = "" }) {
  return (
    <div
      className={`absolute -top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-[#221f1f] px-6 ${className}`}
    >
      <h2 className="text-[#aab5c9] text-[24px] sm:text-[32px] md:text-[40px] font-extrabold whitespace-nowrap">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;
