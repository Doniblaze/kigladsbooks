export default function Divider() {
  return (
    <div className="flex items-center gap-6 px-12 my-16 max-w-7xl mx-auto opacity-60">
      <div className="flex-1 h-[0.5px] bg-[var(--border)]" />
      <span className="font-cormorant text-[1.2rem] text-gold">✦</span>
      <div className="flex-1 h-[0.5px] bg-[var(--border)]" />
    </div>
  );
}
