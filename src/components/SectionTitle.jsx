function SectionTitle({ title, className = "" }) {
  return (
    <div className="flex items-center w-full mb-10">
      <h2 className="text-[40px] font-extrabold text-[#aab5c9] leading-none md:text-[50px]">
        {title}
      </h2>
      <div className="border-t border-[#aab5c9] flex-1 ml-6" />
    </div>
  );
}

export default SectionTitle;
