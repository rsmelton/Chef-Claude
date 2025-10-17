const Header = () => {
  return (
    <header className="flex justify-center items-center gap-2 h-[100px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
        <img className="w-[43px] h-[52px]" src="/chef-claude-icon.png" alt="Chef Claude Icon" />
        <h1 className="inter-regular text-[32px] leading-[60px] tracking-tighter">Chef Claude</h1>
    </header>
  )
}

export default Header