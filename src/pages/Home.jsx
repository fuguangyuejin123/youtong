import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ChevronRight, 
  Factory, 
  Warehouse, 
  Zap, 
  Smartphone,
  QrCode,
  CheckCircle,
  BarChart3,
  Network,
  Database,
  Monitor,
  Settings,
  Package,
  Target,
  Activity,
  Award,
  Shield,
  Clock,
  Users,
  TrendingUp,
  Globe,
  Lightbulb,
  FileText,
  Building2,
  Calendar,
  MapPin,
  Phone
} from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const Home = () => {
  const { isDarkMode, themeClasses } = useTheme()
  const [currentStat, setCurrentStat] = useState(0)
  
  const stats = [
    { value: '18', label: '年技术沉淀', color: '--stat-1' },
    { value: '500+', label: '服务企业', color: '--stat-2' },
    { value: '99.9%', label: '系统稳定性', color: '--stat-3' },
    { value: '7×12', label: '小时技术支持', color: '--stat-4' }
  ]

  const solutions = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'MES制造执行系统',
      description: '精确追溯体系，车间报工追溯过程，仓库出入库追溯，看板与追溯报表',
      features: ['生产计划管控', '质量追溯体系', '设备管理联机', '实时数据采集']
    },
    {
      icon: <Warehouse className="w-8 h-8" />,
      title: 'WMS仓储管理系统',
      description: '供应商协同平台，设备管理与数采联机，全过程精确追溯',
      features: ['智能库存管理', '自动化作业流程', '多仓协同管理', '数据实时同步']
    }
  ]

  const processes = [
    { step: '01', title: '精确追溯体系', icon: <BarChart3 className="w-6 h-6" /> },
    { step: '02', title: '供应商协同平台', icon: <Network className="w-6 h-6" /> },
    { step: '03', title: '仓库出入库追溯', icon: <Database className="w-6 h-6" /> },
    { step: '04', title: '车间报工追溯过程', icon: <Factory className="w-6 h-6" /> },
    { step: '05', title: '设备管理与数采联机', icon: <Settings className="w-6 h-6" /> },
    { step: '06', title: '看板与追溯报表', icon: <Monitor className="w-6 h-6" /> }
  ]

  const partners = [
    'Tzone', 'bipv', '唯尔得塑业', '常兴', '金洲', '长盛德',
    'DT', '银洲纸业', "Levi's", 'QIDA', '用友', '畅捷通'
  ]

  const advantages = [
    {
      icon: <Award className="w-8 h-8" />,
      title: '高新技术企业',
      description: '国家认定的高新技术企业，拥有多项自主知识产权和技术专利',
      badge: '权威认证'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '专业团队',
      description: '50+专业技术人员，平均行业经验8年以上，深度理解制造业需求',
      badge: '专业团队'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '系统稳定可靠',
      description: '99.9%系统稳定性，24小时监控，多重备份保障数据安全',
      badge: '稳定可靠'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: '持续创新',
      description: '每年投入20%以上营收用于研发，保持技术领先和产品创新',
      badge: '技术领先'
    }
  ]

  

  

  const newsAndEvents = [
    {
      type: '公司新闻',
      title: '友通科技荣获"制造业信息化优秀服务商"称号',
      date: '2024-03-15',
      summary: '在第十届制造业信息化大会上，友通科技凭借优秀的产品和服务荣获行业大奖'
    },
    {
      type: '产品更新',
      title: 'MES 5.0版本正式发布，新增AI智能排产功能',
      date: '2024-02-28',
      summary: '最新版本融入人工智能技术，实现更智能的生产计划和资源优化配置'
    },
    {
      type: '行业洞察',
      title: '2024年制造业数字化转型趋势分析报告',
      date: '2024-02-20',
      summary: '深度解析制造业数字化转型的发展趋势和技术应用前景'
    }
  ]

  const serviceHighlights = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: '定制化解决方案',
      description: '基于企业实际需求定制'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '快速实施部署',
      description: '2-4周完成系统上线'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: '专业培训支持',
      description: '全面的用户培训体系'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: '7×12技术支持',
      description: '全天候技术服务保障'
    }
  ]

  // 修复：定时器防抖 + 组件卸载时清理
  useEffect(() => {
    const statInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    
    return () => clearInterval(statInterval)
  }, [stats.length]) // 修复：添加依赖项

  

  // 修复：默认值兜底，防止themeClasses未定义导致报错
  const safeThemeClasses = {
    text: themeClasses?.text || (isDarkMode ? 'text-white' : 'text-slate-800'),
    textSecondary: themeClasses?.textSecondary || (isDarkMode ? 'text-gray-300' : 'text-slate-600'),
    textMuted: themeClasses?.textMuted || (isDarkMode ? 'text-gray-400' : 'text-slate-500'),
    card: themeClasses?.card || (isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-slate-200'),
    cardHover: themeClasses?.cardHover || (isDarkMode ? 'bg-gray-800/80 hover:bg-gray-700' : 'bg-white hover:bg-slate-50'),
    buttonSecondary: themeClasses?.buttonSecondary || (isDarkMode ? 'border-gray-600 text-white hover:bg-gray-700' : 'border-slate-300 text-slate-800 hover:bg-slate-100'),
    accent: themeClasses?.accent || (isDarkMode ? 'bg-gray-900' : 'bg-slate-50'),
    sectionBg: themeClasses?.sectionBg || (isDarkMode ? 'bg-gray-800/50' : 'bg-white'),
    border: themeClasses?.border || (isDarkMode ? 'border-gray-700' : 'border-slate-200'),
    mobileHighlight: themeClasses?.mobileHighlight || (isDarkMode ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-100 border border-blue-300'),
    mobileCard: themeClasses?.mobileCard || (isDarkMode ? 'bg-gray-700' : 'bg-slate-50'),
    statusColors: {
      info: themeClasses?.statusColors?.info || (isDarkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'),
      success: themeClasses?.statusColors?.success || (isDarkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'),
      warning: themeClasses?.statusColors?.warning || (isDarkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-600'),
    }
  }

  return (
    <div>
      {/* Hero Banner */}
      <section className="pt-8 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-20 w-72 h-72 ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-300/20'} rounded-full blur-3xl animate-pulse`}></div>
          <div className={`absolute bottom-20 right-20 w-96 h-96 ${isDarkMode ? 'bg-purple-500/10' : 'bg-purple-300/20'} rounded-full blur-3xl animate-pulse`}></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 ${isDarkMode ? 'bg-indigo-500/5' : 'bg-indigo-300/15'} rounded-full blur-3xl animate-pulse`}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className={`inline-flex items-center ${isDarkMode ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20' : 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300'} rounded-full px-6 py-2 mb-8`}>
              <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" /> {/* 修复：替换var变量为直接颜色 */}
              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">高新技术企业 · 数智化管理专家</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-blue-600 dark:text-blue-400">企业数智化</span><br /> {/* 修复：替换highlight类为直接颜色 */}
              <span className={`${isDarkMode ? 'text-white' : 'text-slate-800'}`}>管理软件专家</span>
            </h1>
            
            <p className={`text-xl ${safeThemeClasses.textSecondary} mb-12 max-w-3xl mx-auto leading-relaxed`}>
              专注MES制造执行系统、WMS仓储管理系统研发，为制造业企业提供全链条信息化解决方案，
              助力企业实现<span className="text-blue-600 dark:text-blue-400 font-medium">降本增效</span>与数字化转型
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center group force-white"
              >
                免费方案咨询
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className={`border px-8 py-4 rounded-lg text-lg font-semibold transition-all ${safeThemeClasses.buttonSecondary} text-blue-600 dark:text-white`}
              >
                产品演示
              </Link>
            </div>

            {/* Service Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {serviceHighlights.map((service, index) => (
                <div key={index} className={`${safeThemeClasses.card} rounded-xl p-4 hover:scale-105 transition-all duration-300`}>
                  <div className="text-blue-600 dark:text-blue-400 mb-3 flex justify-center"> {/* 修复：替换var变量 */}
                    {service.icon}
                  </div>
                  <h3 className={`text-sm font-semibold ${safeThemeClasses.text} mb-1`}>{service.title}</h3>
                  <p className={`text-xs ${safeThemeClasses.textSecondary}`}>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center p-6 rounded-xl transition-all duration-500 ${
                  currentStat === index 
                    ? (isDarkMode ? 'bg-blue-900/50 border-2 border-blue-500 shadow-2xl' : 'bg-white border-2 border-blue-400 shadow-2xl') // 修复：替换未定义的tech-card类
                    : (isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/70 border border-slate-200 shadow-lg')
                }`}
              >
                <div className="text-3xl font-bold mb-2 text-blue-600 dark:text-blue-400"> {/* 修复：替换var变量 */}
                  {stat.value}
                </div>
                <div className={safeThemeClasses.textSecondary}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Advantages */}
      <section className={`py-20 ${safeThemeClasses.accent}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-blue-600 dark:text-blue-400">为什么选择友通科技</span> {/* 修复：替换highlight类 */}
            </h2>
            <p className={`text-xl ${safeThemeClasses.textSecondary} max-w-3xl mx-auto`}>
              16年专业积淀，500+成功案例，让我们成为您数智化转型的最佳合作伙伴
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className={`${safeThemeClasses.card} rounded-2xl p-6 hover:scale-105 transition-all duration-300 group relative overflow-hidden`}>
                <div className={`absolute top-4 right-4 px-2 py-1 ${safeThemeClasses.statusColors.info} rounded-full text-xs font-medium`}>
                  {advantage.badge}
                </div>
                
                <div className="mb-6">
                  <div className="p-3 rounded-lg text-white w-fit group-hover:animate-pulse bg-gradient-to-r from-blue-500 to-purple-600"> {/* 修复：替换var变量 */}
                    {advantage.icon}
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold ${safeThemeClasses.text} mb-4`}>{advantage.title}</h3>
                <p className={`${safeThemeClasses.textSecondary} leading-relaxed`}>{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Interface Showcase */}
      <section className={`py-20 ${safeThemeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-blue-600 dark:text-blue-400">移动端生产管理</span> {/* 修复：替换highlight类 */}
            </h2>
            <p className={`text-xl ${safeThemeClasses.textSecondary} max-w-3xl mx-auto`}>
              扫描派工单工序条码，输入数量查看报工进度，随时随地掌控生产状态
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600"> {/* 修复：替换var变量 */}
                    <QrCode className="w-6 h-6 text-white" />
                  </div>
                <div>
                  <h3 className={`text-xl font-bold ${safeThemeClasses.text} mb-2`}>扫码派工</h3>
                  <p className={`${safeThemeClasses.textSecondary} leading-relaxed`}>
                    通过扫描二维码快速获取派工单信息，实现无纸化作业流程，提升工作效率
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600"> {/* 修复：替换var变量 */}
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${safeThemeClasses.text} mb-2`}>移动报工</h3>
                  <p className={`${safeThemeClasses.textSecondary} leading-relaxed`}>
                    实时输入生产数量，查看工序进度，支持异常情况快速上报和处理
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600"> {/* 修复：替换var变量 */}
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${safeThemeClasses.text} mb-2`}>实时统计</h3>
                  <p className={`${safeThemeClasses.textSecondary} leading-relaxed`}>
                    生产数据实时同步，自动生成统计报表，为管理决策提供数据支撑
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/demo"
                  className={`inline-flex items-center ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} font-semibold transition-colors`}
                >
                  体验移动端演示
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {/* 派工单界面 */}
                <div className={`${safeThemeClasses.cardHover} rounded-2xl p-4 relative overflow-hidden`}>
                  <div className={`${safeThemeClasses.mobileHighlight} rounded-lg p-3 mb-4`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">派工单</span> {/* 修复：替换var变量 */}
                      <span className={`${safeThemeClasses.textSecondary} text-xs`}>2026-3-15 至 2026-3-22</span>
                    </div>
                    <div className={`${safeThemeClasses.text} font-bold text-lg mb-2`}>SW-202603</div>
                  </div>
                  
                  <div className="space-y-3">
                    {['半成品类1/包装加工', '半成品类1/组装', '半成品类1/检测'].map((item, index) => (
                      <div key={index} className={`${safeThemeClasses.mobileCard} rounded-lg p-3`}>
                        <div className={`${safeThemeClasses.text} text-sm font-medium mb-1`}>{item}</div>
                        <div className={`flex justify-between text-xs ${safeThemeClasses.textSecondary}`}>
                          <span>工序编号: SW-202603-{index + 1}</span>
                          <span>数量: 100</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-center">
                    <div className={`${safeThemeClasses.statusColors.warning} px-3 py-1 rounded text-xs font-medium`}>
                      总单数: 5
                    </div>
                  </div>
                </div>
                
                {/* 派工单详情 */}
                <div className={`${safeThemeClasses.card} rounded-2xl p-4`}>
                  <div className="text-center mb-4">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">派工单详情</span> {/* 修复：替换var变量 */}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className={safeThemeClasses.textSecondary}>单据日期:</span>
                      <span className={safeThemeClasses.text}>2026-03-15</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className={safeThemeClasses.textSecondary}>工厂号:</span>
                      <span className={safeThemeClasses.text}>SW-202603</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className={safeThemeClasses.textSecondary}>生产订单:</span>
                      <span className={safeThemeClasses.text}>0000000001</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className={safeThemeClasses.textSecondary}>工序:</span>
                      <span className={safeThemeClasses.text}>自制</span>
                    </div>
                  </div>
                  
                  <div className={`mt-4 pt-4 border-t ${safeThemeClasses.border}`}>
                    <div className={`${safeThemeClasses.textSecondary} text-xs mb-2`}>存货编码</div>
                    <div className={`${safeThemeClasses.text} text-sm`}>bcp10001</div>
                  </div>
                  
                  <div className="mt-4 flex space-x-2">
                    <button className="flex-1 bg-green-500 text-white py-2 rounded text-sm font-medium hover:bg-green-600 transition-colors">确认</button>
                    <button className="flex-1 bg-blue-500 text-white py-2 rounded text-sm font-medium hover:bg-blue-600 transition-colors">开工</button>
                  </div>
                </div>
                
                {/* 生产统计 */}
                <div className={`${safeThemeClasses.card} rounded-2xl p-4`}>
                  <div className="text-center mb-4">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">生产统计</span> {/* 修复：替换var变量 */}
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { label: '总单数', value: '3', color: 'text-blue-600 dark:text-blue-400' }, // 修复：替换var变量
                      { label: '自制', value: '25365', color: 'text-green-600 dark:text-green-400' }, // 修复：替换var变量
                      { label: '委外', value: '0', color: safeThemeClasses.textSecondary },
                      { label: '金额', value: '0', color: safeThemeClasses.textSecondary }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className={`${safeThemeClasses.textSecondary} text-sm`}>{item.label}:</span>
                        <span className={`${item.color} font-medium`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4">
                    <div className={`${safeThemeClasses.statusColors.warning} px-3 py-1 rounded text-xs text-center font-medium`}>
                      总单数: 2
                    </div>
                  </div>
                </div>
                
                {/* 进度圆环 */}
                <div className={`${safeThemeClasses.card} rounded-2xl p-4`}>
                  <div className="text-center mb-4">
                    <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>生产进度</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { label: '加工', value: '42.4%', color: isDarkMode ? 'text-blue-400' : 'text-blue-600' },
                      { label: '组装', value: '66.9%', color: isDarkMode ? 'text-green-400' : 'text-green-600' },
                      { label: '测试', value: '25.2%', color: isDarkMode ? 'text-orange-400' : 'text-orange-600' }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className={`text-lg font-bold ${item.color}`}>{item.value}</div>
                        <div className={`${safeThemeClasses.textSecondary} text-xs`}>{item.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    {['组装', '振动', '完成', '包装测试'].map((label, index) => (
                      <div key={index} className="text-center">
                        <div className={`w-8 h-8 rounded-full border-2 ${isDarkMode ? 'border-gray-600' : 'border-slate-300'} mx-auto mb-1 flex items-center justify-center`}>
                          <span className={`${safeThemeClasses.textSecondary} text-xs`}>0</span>
                        </div>
                        <div className={`${safeThemeClasses.textSecondary} text-xs`}>{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className={`absolute -top-4 -right-4 w-24 h-24 ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-200/30'} rounded-full blur-xl animate-pulse`}></div>
              <div className={`absolute -bottom-4 -left-4 w-32 h-32 ${isDarkMode ? 'bg-purple-500/20' : 'bg-purple-200/30'} rounded-full blur-xl animate-pulse delay-1000`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-blue-600 dark:text-blue-400">核心解决方案</span> {/* 修复：替换highlight类 */}
            </h2>
            <p className={`text-xl ${safeThemeClasses.textSecondary} max-w-3xl mx-auto`}>
              深耕制造业十余年，打造覆盖生产、仓储、协同的全链条信息化解决方案
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className={`${safeThemeClasses.card} rounded-2xl p-8 hover:scale-105 transition-all duration-300 group`}>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white mr-4 group-hover:animate-pulse">
                    {solution.icon}
                  </div>
                  <h3 className={`text-2xl font-bold ${safeThemeClasses.text}`}>{solution.title}</h3>
                </div>
                
                <p className={`${safeThemeClasses.textSecondary} mb-6 leading-relaxed`}>{solution.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-center text-sm ${safeThemeClasses.textMuted}`}>
                      <div className={`w-2 h-2 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-500'} rounded-full mr-3`}></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/products"
                  className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} font-semibold flex items-center transition-colors`}
                >
                  了解详情
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      

      {/* Process Flow */}
      <section className={`py-20 ${safeThemeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-blue-600 dark:text-blue-400">全过程精确追溯</span> {/* 修复：替换highlight类 */}
            </h2>
            <p className={`text-xl ${safeThemeClasses.textSecondary}`}>从原料到成品，实现生产全流程的数字化管控</p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {processes.map((process, index) => (
                <div key={index} className="relative group">
                  <div className={`${safeThemeClasses.card} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300`}>
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {process.step}
                      </div>
                      
                      <div className={`p-4 ${isDarkMode ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-r from-blue-100 to-purple-100'} rounded-lg mb-4 mx-auto w-fit`}>
                        <div className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                          {process.icon}
                        </div>
                      </div>
                      
                      <h3 className={`text-lg font-semibold ${safeThemeClasses.text}`}>{process.title}</h3>
                    </div>
                  </div>
                  
                  {index < processes.length - 1 && index % 3 !== 2 && (
                    <div className={`hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News and Events — removed per request */}

      {/* Partners Section */}
      <section className={`py-20 ${safeThemeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-blue-600 dark:text-blue-400">合作客户</span> {/* 修复：替换highlight类 */}
            </h2>
            <p className={`text-xl ${safeThemeClasses.textSecondary} max-w-3xl mx-auto`}>
              我们深知合作才能共赢，和众多知名企业达成深入合作
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className={`${safeThemeClasses.cardHover} rounded-xl p-6 hover:scale-105 transition-all duration-300 group flex items-center justify-center`}
              >
                <div className="text-center">
                  {/* 修复：添加图片容错 + 样式优化 */}
                  <div className="w-16 h-16 rounded-lg mx-auto mb-3 overflow-hidden flex items-center justify-center bg-white/80 dark:bg-gray-800">
                    <img 
                      src={`/client-logos/${partner}.png`}  
                      alt={`${partner} logo`} 
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        // 容错：图片不存在时显示文字
                        e.target.style.display = 'none'
                        e.target.parentElement.innerHTML = `<span class="text-sm font-medium ${safeThemeClasses.text}">${partner}</span>`
                      }}
                    />
                  </div>
                  <div className={`${safeThemeClasses.textMuted} text-sm font-medium`}>{partner}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className={`${safeThemeClasses.textSecondary} mb-6`}>已累计为 <span className="text-blue-600 dark:text-blue-400 font-bold">500+</span> 家企业客户提供专业的数智化服务</p> {/* 修复：替换highlight类 */}
            <div className="flex flex-wrap justify-center gap-6">
              {['制造业', '流通业', '服务业', '政府机构'].map((industry, index) => (
                <div key={index} className={`flex items-center ${safeThemeClasses.textMuted}`}>
                  <CheckCircle className={`w-4 h-4 ${isDarkMode ? 'text-green-400' : 'text-green-500'} mr-2`} />
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              开启您的数智化转型之路
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              立即联系我们，获取专属的数智化解决方案，让技术赋能您的企业发展
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                立即咨询
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                预约演示
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3 text-blue-200" />
                <div className="text-left">
                  <div className="font-semibold">全国热线</div>
                  <div className="text-blue-100">13686067077</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Users className="w-6 h-6 mr-3 text-blue-200" />
                <div className="text-left">
                  <div className="font-semibold">项目合作</div>
                  <div className="text-blue-100">13318438082</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-3 text-blue-200" />
                <div className="text-left">
                  <div className="font-semibold">公司地址</div>
                  <div className="text-blue-100">东莞市莞城区旗峰路200号</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home