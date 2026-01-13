import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Demo from './pages/Demo'
// 修复1：将useTheme引入移到文件顶部（符合ES6导入规范）
import { useTheme } from './hooks/useTheme';

// 修复2：只保留一个App组件定义，整合原有路由逻辑和主题key逻辑
function App() {
  // 引入主题Hook
  const { isDarkMode } = useTheme();
  
  return (
    // 修复3：添加主题key，强制主题切换时重建组件树
    <div key={isDarkMode ? 'dark' : 'light'}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App;