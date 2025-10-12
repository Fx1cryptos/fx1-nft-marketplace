export default function Footer() {
  return (
    <footer className="mt-16 py-8 bg-gradient-to-br from-blue-900 via-black to-yellow-900 text-white text-center">
      <div className="mb-2 font-bold text-blue-400">FX1 Digital Hubs Marketplace</div>
      <div className="mb-2 text-sm text-yellow-400">Powered by $FDH on Base</div>
      <div className="flex flex-wrap justify-center gap-4 mb-2">
        <a href="https://twitter.com/fx1_hubs" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">X (Twitter)</a>
        <a href="https://discord.gg/fx1hubs" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Discord</a>
        <a href="https://youtube.com/@fx1hubs" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">YouTube</a>
        <a href="https://fx1.digital" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Website</a>
      </div>
      <div className="text-xs mt-2 text-gray-400">© 2025 FX1 Digital Hubs. All rights reserved.</div>
    </footer>
  );
}