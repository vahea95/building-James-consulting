export const Container = ({ children }: { children: any }) => {
  return (
    <div>
      <div className="container px-40 py-20">{children}</div>
    </div>
  );
};
