import { useState, useEffect, useMemo } from 'react'

export const useTheme = () => {
  // 修复1：初始化逻辑优化，兼容SSR和localStorage不存在的情况
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // 浏览器环境下才读取localStorage，避免SSR报错
    if (typeof window === 'undefined') return false;
    
    try {
      const saved = localStorage.getItem('theme-preference');
      // 修复：处理JSON解析失败的情况
      return saved ? JSON.parse(saved) : 
        // 降级：优先使用系统主题偏好
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      // 异常处理：localStorage读取失败时使用系统主题
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });

  // 修复2：优化useEffect逻辑，避免重复操作DOM，添加防抖
  useEffect(() => {
    // 封装主题切换逻辑为函数，提高可读性
    const updateTheme = () => {
      try {
        // 保存到localStorage（添加异常捕获）
        localStorage.setItem('theme-preference', JSON.stringify(isDarkMode));
      } catch (e) {
        console.warn('Failed to save theme preference to localStorage:', e);
      }

      // 更新DOM类名和属性
      const root = document.documentElement;
      const body = document.body;

      // 清除旧类名
      body.classList.remove('light-theme', 'dark-theme');
      // 添加新类名
      body.classList.add(isDarkMode ? 'dark-theme' : 'light-theme');
      
      // 设置data-theme属性
      root.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
      
      // 修复：同步更新html元素的类名，确保样式优先级
      root.classList.remove('light-theme', 'dark-theme');
      root.classList.add(isDarkMode ? 'dark-theme' : 'light-theme');
    };

    // 防抖执行：避免快速切换时频繁操作DOM
    const timer = setTimeout(updateTheme, 100);
    return () => clearTimeout(timer);
  }, [isDarkMode]);

  // 修复3：使用useMemo缓存themeClasses，避免每次渲染重新创建对象
  const themeClasses = useMemo(() => ({
    // 主背景 - 优化渐变颜色，提升视觉效果
    bg: isDarkMode 
      ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' 
      : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100',
    
    // 页面头部 - 优化透明度和阴影
    header: isDarkMode 
      ? 'bg-black/80 backdrop-blur-md' 
      : 'bg-white/95 shadow-sm backdrop-blur-md',
    
    // 文字颜色 - 修复：添加!important确保覆盖默认样式
    text: 'text-[var(--text-color)] !important',
    textSecondary: 'text-[var(--text-secondary)] !important',
    textMuted: 'text-[var(--text-muted)] !important',
    
    // 卡片样式 - 修复：补充完整的过渡动画，添加!important确保优先级
    card: 'bg-[var(--card-bg)] border border-[var(--card-border)] shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300 !important',
    
    // 悬浮卡片样式 - 修复：统一过渡动画，优化hover效果
    cardHover: isDarkMode 
      ? 'tech-card hover:bg-gradient-to-br hover:from-gray-800/95 hover:to-black/95 transition-all duration-300' 
      : 'bg-white border border-slate-200 shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all duration-300',
    
    // 边框颜色 - 优化：使用CSS变量替代硬编码
    border: isDarkMode 
      ? 'border-[var(--card-border)] !important' 
      : 'border-[var(--card-border)] !important',
    
    // 强调背景 - 优化渐变效果
    accent: isDarkMode 
      ? 'bg-gradient-to-b from-gray-900/50 to-black' 
      : 'bg-gradient-to-b from-slate-50/80 to-blue-50/60',
    
    // 区块背景 - 修复：添加!important确保生效
    sectionBg: 'bg-[var(--section-bg)] !important',
    
    // 移动端卡片背景 - 优化：使用CSS变量
    mobileCard: isDarkMode 
      ? 'bg-gray-800/50 border border-gray-700/30' 
      : 'bg-slate-50 border border-slate-200/50',
    
    // 移动端高亮背景 - 优化：添加过渡动画
    mobileHighlight: isDarkMode 
      ? 'bg-blue-500/10 border border-blue-500/20 transition-all duration-300' 
      : 'bg-blue-50 border border-blue-200 transition-all duration-300',
    
    // 输入框样式 - 修复：补充完整的输入框样式，添加:focus状态
    input: 'bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-color)] placeholder:text-[var(--placeholder-color)] focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 rounded-lg px-3 py-2 outline-none transition-all duration-200 !important',
    
    // 按钮样式 - 优化：添加圆角和过渡
    button: 'bg-[var(--button-bg)] text-[var(--button-text)] hover:opacity-95 rounded-lg px-4 py-2 transition-all duration-200 !important',
    
    // 次要按钮样式 - 修复：统一border样式，添加过渡
    buttonSecondary: isDarkMode 
      ? 'border border-gray-600 text-white hover:bg-gray-800 rounded-lg px-4 py-2 transition-all duration-200' 
      : 'border border-slate-400 text-slate-700 hover:bg-slate-50 rounded-lg px-4 py-2 transition-all duration-200',
    
    // 状态指示器 - 优化：添加圆角和内边距，统一样式
    statusColors: {
      success: isDarkMode ? 'text-green-400 bg-green-500/20 rounded-md px-2 py-1' : 'text-green-600 bg-green-100 rounded-md px-2 py-1',
      warning: isDarkMode ? 'text-yellow-400 bg-yellow-500/20 rounded-md px-2 py-1' : 'text-yellow-700 bg-yellow-100 rounded-md px-2 py-1',
      info: isDarkMode ? 'text-blue-400 bg-blue-500/20 rounded-md px-2 py-1' : 'text-blue-600 bg-blue-100 rounded-md px-2 py-1',
      error: isDarkMode ? 'text-red-400 bg-red-500/20 rounded-md px-2 py-1' : 'text-red-600 bg-red-100 rounded-md px-2 py-1'
    }
  }), [isDarkMode]); // 依赖只有isDarkMode，避免不必要的重新计算

  // 修复4：添加切换主题的安全方法
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

// 修复5：添加手动设置主题的方法，增强灵活性
/**
 * 手动设置主题
 * @param {('light' | 'dark')} mode - 主题模式，可选值：'light' | 'dark'
 */
const setTheme = (mode) => {
  // 可选：添加参数校验，避免传入无效值
  if (!['light', 'dark'].includes(mode)) {
    console.warn('主题模式只能是 "light" 或 "dark"');
    return;
  }
  setIsDarkMode(mode === 'dark');
};

/**
 * 立即切换主题并刷新页面
 * 说明：同步写入 localStorage、更新 DOM 类名，然后刷新页面以确保整个应用在新主题下完整生效。
 */
const toggleThemeAndReload = () => {
  if (typeof window === 'undefined') return;
  try {
    const newMode = !isDarkMode;
    // 立即保存到 localStorage
    localStorage.setItem('theme-preference', JSON.stringify(newMode));
    // 立即更新 DOM（同步）
    const root = document.documentElement;
    const body = document.body;
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(newMode ? 'dark-theme' : 'light-theme');
    root.setAttribute('data-theme', newMode ? 'dark' : 'light');
    root.classList.remove('light-theme', 'dark-theme');
    root.classList.add(newMode ? 'dark-theme' : 'light-theme');
    // 更新内部状态（有助于 UI 在刷新前短暂一致）
    setIsDarkMode(newMode);
  } catch (e) {
    console.warn('Failed to toggle theme and reload:', e);
  }
  // 强制刷新页面以确保全局样式和第三方组件在新主题下生效
  window.location.reload();
};

  return { 
    isDarkMode, 
    setIsDarkMode, 
    toggleTheme, // 新增：便捷的切换方法
    toggleThemeAndReload, // 新增：立即切换并刷新
    setTheme,    // 新增：手动设置主题
    themeClasses 
  };
};