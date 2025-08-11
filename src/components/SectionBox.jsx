import SectionTitle from "./SectionTitle";

function SectionBox({ title, children }) {
  return (
    <div className="relative w-full my-16">
      <div className="border-2 border-[#aab5c9] rounded-md px-6 py-12">
        {children}
      </div>
      <SectionTitle title={title} className="pb-5" />
    </div>
  );
}
export default SectionBox;
