function BorderAnimatedContainer({ children }) {
  return (
    <div className="border-animated-container w-full h-full rounded-2xl animate-border flex overflow-hidden">
      {children}
    </div>
  );
}
export default BorderAnimatedContainer;
