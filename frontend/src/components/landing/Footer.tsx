import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          
          <div className="col-span-2 lg:col-span-2 pr-8">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
              <div className="bg-white w-8 h-8 rounded-lg flex items-center justify-center text-primary font-bold text-lg">B</div>
              BizPilot
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
               The all-in-one platform for modern businesses. Automate workflows, manage finances, and grow your team with confidence.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'linkedin', 'github'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              {['About', 'Careers', 'Blog', 'Press'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Product</h3>
            <ul className="space-y-4">
              {['Features', 'Integrations', 'Pricing', 'Docs', 'Changelog'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Resources</h3>
            <ul className="space-y-4">
              {['Community', 'Contact', 'Terms of Service', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} BizPilot Inc. All rights reserved.
          </p>
          
          <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-800 border-none rounded-full px-4 py-2 text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-primary outline-none w-64"
              />
              <button className="bg-primary hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-colors">
                 Subscribe
              </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
