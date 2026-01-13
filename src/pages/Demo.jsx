import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Play,
  Monitor,
  BarChart3,
  CheckCircle,
  Settings,
  Package,
  TrendingUp,
  ChevronRight
} from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const Demo = () => {
  const { isDarkMode, themeClasses } = useTheme()
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const features = [
    { title: '生产计划看板', description: '实时显示生产计划执行情况，直观展示各工序进度', demo: '点击查看生产计划看板实时数据展示', icon: <BarChart3 className="w-8 h-8" /> },
    { title: '质量追溯系统', description: '完整的质量追溯链条，从原料到成品全程可追溯', demo: '演示产品质量追溯完整流程', icon: <CheckCircle className="w-8 h-8" /> },
    { title: '设备管理联机', description: '设备状态实时监控，故障预警及时响应', demo: '查看设备运行状态监控界面', icon: <Settings className="w-8 h-8" /> },
    { title: '智能库位管理', description: '3D可视化库位展示，智能推荐最优存储位置', demo: '体验3D仓库可视化管理系统', icon: <Package className="w-8 h-8" /> },
    { title: '自动化拣货', description: '智能拣货路径规划，提高拣货效率50%以上', demo: '观看自动化拣货路径演示', icon: <TrendingUp className="w-8 h-8" /> },
    { title: '实时库存监控', description: '库存变动实时同步，库存预警智能提醒', demo: '查看实时库存监控大屏', icon: <BarChart3 className="w-8 h-8" /> }
  ]

  return (
    <div>
      <section className={`py-16 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="highlight">在线系统演示</span>
              </h2>
              <p className={`text-lg ${themeClasses.textSecondary} mb-8 leading-relaxed`}>
                观看我们的产品演示视频，了解系统的核心功能和操作流程。我们的专业顾问将为您详细介绍系统特点和应用场景。
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className={`w-5 h-5 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`} />
                  <span className={themeClasses.textMuted}>完整功能演示，涵盖所有核心模块</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className={`w-5 h-5 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`} />
                  <span className={themeClasses.textMuted}>真实业务场景，贴近实际应用</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className={`w-5 h-5 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`} />
                  <span className={themeClasses.textMuted}>专业讲解，易于理解</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                预约专属演示
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="relative">
              <div className={`${themeClasses.card} rounded-2xl p-8 aspect-video flex items-center justify-center relative overflow-hidden`}>
                {!isVideoPlaying ? (
                  <div className="text-center">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform mb-4 mx-auto"
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </button>
                    <h3 className={`text-xl font-semibold ${themeClasses.text} mb-2`}>系统演示视频</h3>
                    <p className={themeClasses.textSecondary}>点击播放，了解系统功能</p>
                  </div>
                ) : (
                  <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <Monitor className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>演示视频播放中...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="highlight">功能演示</span>
            </h2>
            <p className={`text-lg ${themeClasses.textSecondary} max-w-3xl mx-auto`}>
              深入体验各个功能模块，了解系统如何解决实际业务问题
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${themeClasses.card} rounded-2xl p-6 hover:scale-105 transition-all duration-300 group`}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white mr-4 group-hover:animate-pulse">
                    {feature.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${themeClasses.text}`}>{feature.title}</h3>
                </div>
                <p className={`${themeClasses.textSecondary} mb-6 leading-relaxed`}>{feature.description}</p>
                <div
                  className={`${isDarkMode ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-200'} rounded-lg p-4 mb-6`}
                >
                  <p className={`text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>
                    演示内容: {feature.demo}
                  </p>
                </div>
                <button
                  className={`w-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'} py-3 rounded-lg font-semibold transition-colors flex items-center justify-center`}
                >
                  <Play className="w-4 h-4 mr-2" />
                  开始演示
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold ${themeClasses.text} mb-6`}>想要深度体验我们的产品？</h2>
          <p className={`text-xl ${themeClasses.textSecondary} mb-8 max-w-3xl mx-auto`}>
            预约专属演示，我们的专业顾问将为您详细介绍产品功能，并根据您的需求提供定制化解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
              预约专属演示
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/products"
              className={`border ${isDarkMode ? 'border-gray-600 text-white hover:bg-gray-800' : 'border-gray-400 text-gray-700 hover:bg-gray-100'} px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center justify-center`}
            >
              查看产品详情
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Demo
