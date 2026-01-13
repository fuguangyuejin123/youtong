import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Factory, 
  Warehouse, 
  BarChart3, 
  Target, 
  Monitor, 
  FileText, 
  GitBranch,
  Package, 
  Truck, 
  MapPin, 
  RotateCcw, 
  Activity,
  Calendar,
  CheckCircle,
  Database,
  ChevronRight,
  Settings,
  Network,
  ShoppingCart
} from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const Products = () => {
  const { isDarkMode, themeClasses } = useTheme()

  const mesFeatures = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: '生产计划管理',
      description: '智能排产调度，实时计划执行跟踪',
      details: ['主生产计划制定', '车间作业排程', '产能平衡分析', '紧急订单插单'],
      benefits: ['提升计划准确性', '优化资源配置', '缩短交付周期', '降低库存成本']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: '生产执行控制',
      description: '全过程生产执行管控，实时数据采集',
      details: ['工艺路径管理', '工序进度跟踪', '质量检验记录', '异常情况处理'],
      benefits: ['实时监控生产', '快速响应异常', '提高生产效率', '保证产品质量']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: '质量管理体系',
      description: '全流程质量控制，追溯体系完善',
      details: ['质量检验标准', '不良品追溯', 'SPC统计分析', '质量报表生成'],
      benefits: ['提升产品质量', '降低不良率', '完善追溯体系', '符合质量标准']
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: '设备管理联机',
      description: '设备状态监控，数据实时采集',
      details: ['设备运行监控', '故障预警机制', '保养计划管理', '效率分析报表'],
      benefits: ['预防设备故障', '提高设备利用率', '降低维护成本', '延长设备寿命']
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: '生产报表看板',
      description: '可视化生产看板，实时数据展示',
      details: ['生产进度看板', '设备状态显示', '质量统计图表', 'KPI指标监控'],
      benefits: ['数据可视化展示', '便于管理决策', '提高透明度', '实时掌控全局']
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: '追溯管理系统',
      description: '产品全生命周期追溯，质量责任到人',
      details: ['原料批次追溯', '工艺参数记录', '操作人员追踪', '成品流向跟踪'],
      benefits: ['完善质量追溯', '快速定位问题', '责任明确到人', '满足法规要求']
    }
  ]

  const wmsFeatures = [
    {
      icon: <Package className="w-8 h-8" />,
      title: '入库管理',
      description: '智能入库策略，自动分配储位',
      details: ['采购入库管理', '生产入库处理', '退货入库流程', '质检入库控制'],
      benefits: ['提高入库效率', '减少人工错误', '优化存储空间', '加快周转速度']
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: '出库管理',
      description: '高效拣货策略，快速出库作业',
      details: ['销售出库管理', '生产领料出库', '调拨出库处理', '盘点差异出库'],
      benefits: ['缩短拣货时间', '提高出库准确率', '优化拣货路径', '降低操作成本']
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: '库位管理',
      description: '精确库位规划，最大化存储效率',
      details: ['库区规划设计', '储位优化配置', '货位状态跟踪', '空间利用分析'],
      benefits: ['最大化存储空间', '提高存储密度', '便于货物查找', '优化仓库布局']
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: '库存控制',
      description: '实时库存监控，智能补货提醒',
      details: ['安全库存设置', '库存预警机制', '呆滞料品分析', '周转率统计'],
      benefits: ['降低库存成本', '避免缺货风险', '提高资金周转', '优化库存结构']
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: '移库调拨',
      description: '灵活库间调拨，库存动态平衡',
      details: ['库间调拨管理', '货位移动操作', '批次属性调整', '库存状态变更'],
      benefits: ['优化库存分布', '提高库存利用率', '降低运输成本', '保证供应链畅通']
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: '盘点管理',
      description: '定期盘点作业，确保库存准确',
      details: ['循环盘点计划', '动态盘点执行', '差异分析处理', '盘点报表生成'],
      benefits: ['确保库存准确性', '及时发现问题', '减少盘点工作量', '提高盘点效率']
    }
  ]

  const integrationFeatures = [
    {
      title: '无缝对接ERP系统',
      description: '支持用友U9C、U8+、YS、T+，金蝶云星空、鼎捷等主流管理系统',
      icon: <Network className="w-12 h-12" />
    },
    {
      title: '数据实时同步',
      description: '生产数据、库存数据、质量数据实时同步到ERP系统，消除数据孤岛',
      icon: <Database className="w-12 h-12" />
    },
    {
      title: '统一操作界面',
      description: '提供统一的操作界面和用户体验，降低员工学习成本',
      icon: <Monitor className="w-12 h-12" />
    }
  ]

  return (
    <div className="pt-8">
      {/* Page Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl animate-pulse-slow" style={{ background: 'var(--blob-1)' }}></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl animate-pulse-slow" style={{ background: 'var(--blob-2)' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="highlight">产品解决方案</span>
            </h1>
            <p className={`text-xl ${themeClasses.textSecondary} mb-8 max-w-4xl mx-auto leading-relaxed`}>
              基于十余年制造业信息化经验，为企业提供专业的MES制造执行系统和WMS仓储管理系统解决方案
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 force-white"
            >
              立即体验演示
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* MES系统详细介绍 */}
      <section className={`py-20 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Factory className="w-12 h-12 text-[var(--stat-2)] mr-4" />
              <h2 className="text-4xl font-bold">
                <span className="highlight">MES制造执行系统</span>
              </h2>
            </div>
            <p className={`text-xl ${themeClasses.textSecondary} max-w-4xl mx-auto`}>
              覆盖生产计划、执行控制、质量管理、设备联机、报表看板、追溯管理的全流程制造执行解决方案
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {mesFeatures.map((feature, index) => (
              <div key={index} className={`${themeClasses.card} rounded-2xl p-6 hover:scale-105 transition-all duration-300 group`}>
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg text-white mr-4 group-hover:animate-pulse" style={{ background: 'var(--adv-badge-bg)' }}>
                    {feature.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${themeClasses.text}`}>{feature.title}</h3>
                </div>
                
                <p className={`${themeClasses.textSecondary} mb-6 leading-relaxed`}>{feature.description}</p>
                
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold ${themeClasses.text} mb-3`}>功能特点:</h4>
                  <div className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className={`flex items-center text-sm ${themeClasses.textMuted}`}>
                        <div className="w-2 h-2 rounded-full mr-3" style={{ background: 'var(--stat-2)' }}></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className={`text-sm font-semibold ${themeClasses.text} mb-3`}>业务价值:</h4>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className={`flex items-center text-sm ${themeClasses.textMuted}`}>
                        <CheckCircle className={`w-4 h-4 ${isDarkMode ? 'text-green-400' : 'text-green-500'} mr-2 flex-shrink-0`} />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* MES流程图 */}
          <div className={`${themeClasses.card} rounded-2xl p-8`}>
            <h3 className={`text-2xl font-bold ${themeClasses.text} text-center mb-8`}>MES系统业务流程</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: '计划下达', desc: '生产计划制定与下达', icon: <Calendar className="w-8 h-8" /> },
                { title: '生产执行', desc: '工艺路径执行控制', icon: <Factory className="w-8 h-8" /> },
                { title: '质量检验', desc: '过程质量控制管理', icon: <CheckCircle className="w-8 h-8" /> },
                { title: '数据采集', desc: '生产数据实时采集', icon: <Database className="w-8 h-8" /> }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="p-4 rounded-lg mb-4 mx-auto w-fit" style={{ background: 'var(--icon-gradient)' }}>
                    <div className="text-[var(--stat-2)]">
                      {step.icon}
                    </div>
                  </div>
                  <h4 className={`text-lg font-semibold ${themeClasses.text} mb-2`}>{step.title}</h4>
                  <p className={`text-sm ${themeClasses.textSecondary}`}>{step.desc}</p>
                  {index < 3 && (
                    <ChevronRight className="w-6 h-6 text-[var(--stat-2)] mx-auto mt-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WMS系统详细介绍 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Warehouse className="w-12 h-12 text-[var(--stat-3)] mr-4" />
              <h2 className="text-4xl font-bold">
                <span className="highlight">WMS仓储管理系统</span>
              </h2>
            </div>
            <p className={`text-xl ${themeClasses.textSecondary} max-w-4xl mx-auto`}>
              涵盖入库、出库、库位、库存、调拨、盘点的全方位智能仓储管理解决方案
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {wmsFeatures.map((feature, index) => (
              <div key={index} className={`${themeClasses.card} rounded-2xl p-6 hover:scale-105 transition-all duration-300 group`}>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg text-white mr-4 group-hover:animate-pulse">
                    {feature.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${themeClasses.text}`}>{feature.title}</h3>
                </div>
                
                <p className={`${themeClasses.textSecondary} mb-6 leading-relaxed`}>{feature.description}</p>
                
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold ${themeClasses.text} mb-3`}>功能特点:</h4>
                  <div className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className={`flex items-center text-sm ${themeClasses.textMuted}`}>
                        <div className={`w-2 h-2 ${isDarkMode ? 'bg-green-400' : 'bg-green-500'} rounded-full mr-3`}></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className={`text-sm font-semibold ${themeClasses.text} mb-3`}>业务价值:</h4>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className={`flex items-center text-sm ${themeClasses.textMuted}`}>
                        <CheckCircle className={`w-4 h-4 ${isDarkMode ? 'text-green-400' : 'text-green-500'} mr-2 flex-shrink-0`} />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* WMS流程图 */}
          <div className={`${themeClasses.card} rounded-2xl p-8`}>
            <h3 className={`text-2xl font-bold ${themeClasses.text} text-center mb-8`}>WMS系统作业流程</h3>
            <div className="grid md:grid-cols-6 gap-4">
              {[
                { title: '收货入库', icon: <ShoppingCart className="w-6 h-6" /> },
                { title: '上架存储', icon: <Package className="w-6 h-6" /> },
                { title: '库存管理', icon: <Database className="w-6 h-6" /> },
                { title: '拣货作业', icon: <MapPin className="w-6 h-6" /> },
                { title: '复核包装', icon: <CheckCircle className="w-6 h-6" /> },
                { title: '发货出库', icon: <Truck className="w-6 h-6" /> }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`p-3 ${isDarkMode ? 'bg-gradient-to-r from-green-500/20 to-blue-500/20' : 'bg-gradient-to-r from-green-100 to-blue-100'} rounded-lg mb-3 mx-auto w-fit`}>
                    <div className={`${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                      {step.icon}
                    </div>
                  </div>
                  <h4 className={`text-sm font-semibold ${themeClasses.text}`}>{step.title}</h4>
                  {index < 5 && (
                    <ChevronRight className={`w-4 h-4 ${isDarkMode ? 'text-green-400' : 'text-green-500'} mx-auto mt-2`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 系统集成与对接 */}
      <section className={`py-20 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="highlight">系统集成与对接</span>
            </h2>
            <p className={`text-xl ${themeClasses.textSecondary} max-w-4xl mx-auto`}>
              与主流ERP系统无缝对接，打通数据壁垒，实现企业信息化一体化管理
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {integrationFeatures.map((feature, index) => (
              <div key={index} className={`${themeClasses.card} rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300`}>
                <div className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-6 flex justify-center`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold ${themeClasses.text} mb-4`}>{feature.title}</h3>
                <p className={`${themeClasses.textSecondary} leading-relaxed`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
          
                    {/* 支持的ERP系统 —— 替换你现有的这部分 */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className={`${themeClasses.card} rounded-2xl p-8`}>
    <h3 className={`text-2xl font-bold ${themeClasses.text} text-center mb-8`}>支持的ERP系统</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { name: '用友U9C', desc: '大型制造企业', logo: '用友U9C.png' },
        { name: '用友U8plus', desc: '中型成长企业', logo: '用友U8plus.png' },
        { name: '用友YS', desc: '云端解决方案', logo: '用友YS.png' },
        { name: '用友Tplus', desc: '小微企业', logo: '用友Tplus.png' },
        { name: '金蝶云星空', desc: '云原生ERP', logo: '金蝶云星空.png' },
        { name: '鼎捷易飞', desc: '制造业ERP', logo: '鼎捷易飞.png' },
        { name: 'SAP系统', desc: '国际化企业', logo: 'SAP系统.png' },
        { name: '其他系统', desc: '定制化对接', logo: '其他系统.png' }
      ].map((erp, index) => (
        <div 
          key={index} 
          className={`text-center p-4 rounded-lg border ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700' 
              : 'bg-gray-50 border-gray-200'
          }`}
        >
          <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
            <img 
              src={`/images/${erp.logo}`} 
              alt={erp.name}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                const parent = e.target.parentElement;
                if (parent) {
                  parent.innerHTML = `<span class="${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-bold text-lg">${erp.name.charAt(0)}</span>`;
                }
              }}
            />
          </div>
          <h4 className={`font-semibold ${themeClasses.text} mb-1`}>{erp.name}</h4>
          <p className={`text-sm ${themeClasses.textSecondary}`}>{erp.desc}</p>
        </div>
      ))}
    </div>
  </div>
</div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold ${themeClasses.text} mb-6`}>
            想了解更多产品详情？
          </h2>
          <p className={`text-xl ${themeClasses.textSecondary} mb-8 max-w-3xl mx-auto`}>
            联系我们获取详细产品资料和定制化解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 inline-flex items-center justify-center force-white"
            >
              产品演示
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className={`${themeClasses.buttonSecondary} px-8 py-4 text-lg font-semibold inline-flex items-center justify-center`}
            >
              联系咨询
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
