import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Phone, Menu, X } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const Layout = ({ children }) => {
  const { isDarkMode, toggleThemeAndReload, themeClasses } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: '首页', path: '/' },
    { name: '产品方案', path: '/products' },
    { name: '企业介绍', path: '/about' },
    { name: '服务保障', path: '/services' },
    { name: '联系我们', path: '/contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className={`min-h-screen ${themeClasses.bg}`}>
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 ${themeClasses.header} backdrop-blur-lg border-b ${themeClasses.border}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link to="/" className="flex items-center">
              {/* 品牌Logo：保持原色 */}
              <img
                src={isDarkMode ? "/images/白logo.png" : "/images/logo.png"}
                alt="网站logo"
                className="w-24 h-24 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors font-medium ${
                    isActive(item.path)
                      ? 'text-blue-500 font-semibold'
                      : `${themeClasses.textSecondary} hover:${themeClasses.text}`
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleThemeAndReload}
                className={`p-1 rounded-lg transition-all hover:scale-110 ${
                  isDarkMode 
                    ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}
                title={isDarkMode ? '切换到日间模式' : '切换到夜间模式'}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <Link
                to="/demo"
                className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all font-medium force-white"
              >
                产品演示
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg ${themeClasses.text} hover:${themeClasses.button}`}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className={`md:hidden border-t ${themeClasses.border} py-4`}>
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block transition-colors font-medium ${
                      isActive(item.path)
                        ? 'text-blue-500 font-semibold'
                        : `${themeClasses.textSecondary} hover:${themeClasses.text}`
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/demo"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-center font-medium"
                >
                  产品演示
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-black' : 'bg-slate-900'} py-12 border-t ${isDarkMode ? 'border-gray-800' : 'border-slate-700'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="/images/白logo.png" 
                  alt="网站logo" 
                  className="w-24 h-24 object-contain"/>
              </div>
              <p className="text-gray-400 mb-4">东莞市友通计算机科技有限公司</p>
              <p className="text-gray-500 text-sm">专注企业数智化管理软件研发与服务的高新技术企业</p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">快速链接</h3>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link key={item.path} to={item.path} className="block text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">联系方式</h3>
              <div className="space-y-2 text-gray-400">
                <p>联系微信: 13686067077</p>
                <p>项目合作: 13318438082</p>
                <p>技术支持: 18998050675</p>
              </div>  
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © 2024 友通科技. 专注企业数智化管理软件研发与服务
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
