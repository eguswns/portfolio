function Container({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`max-w-[1020px] mx-auto w-full mt-10 px-5 ${className}`}
    >
      {children}
    </section>
  );
}
export default Container;
