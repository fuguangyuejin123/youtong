import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Shield, 
  Clock, 
  Users, 
  Phone,
  BookOpen,
  Settings,
  Database,
  Monitor,
  CheckCircle,
  ChevronRight,
  Headphones,
  FileText,
  RefreshCw,
  Zap,
  Award,
  Target
} from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const Services = () => {
  const { isDarkMode, themeClasses } = useTheme()

  const serviceGuarantees = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: '7×12小时技术支持',
      description: '工作日7×12小时在线技术支持，快速响应解决问题',
      features: ['工作日即时响应', '专业技术团队', '远程协助支持', '问题跟踪管理']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '系统稳定性保障',
      description: '99.9%系统稳定性承诺，确保业务连续性',
      features: ['高可用架构', '数据备份机制', '故障快速恢复', '性能监控预警']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '专业实施团队',
      description: '经验丰富的实施团队，确保项目成功上线',
      features: ['项目管理规范', '实施方案定制', '数据迁移保障', '用户培训完善']
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: '免费升级服务',
      description: '定期免费系统升级，持续优化系统功能',
      features: ['功能持续优化', '安全补丁更新', '性能提升改进', '新功能免费享用']
    }
  ]

  const serviceProcess = [
    {
      step: '01',
      title: '需求调研',
      description: '深入了解企业需求，制定专属解决方案',
      icon: <Target className="w-6 h-6" />
    },
    {
      step: '02',
      title: '方案设计',
      description: '基于调研结果，设计详细的实施方案',
      icon: <FileText className="w-6 h-6" />
    },
    {
      step: '03',
      title: '系统实施',
      description: '专业团队进行系统部署和配置调试',
      icon: <Settings className="w-6 h-6" />
    },
    {
      step: '04',
      title: '用户培训',
      description: '全面的用户培训，确保熟练使用系统',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      step: '05',
      title: '上线支持',
      description: '系统上线期间提供全程技术支持',
      icon: <Zap className="w-6 h-6" />
    },
    {
      step: '06',
      title: '后续维护',
      description: '长期技术支持和系统维护服务',
      icon: <Headphones className="w-6 h-6" />
    }
  ]

  const supportChannels = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: '电话支持',
      description: '全国热线: 13686067077',
      available: '工作日 8:30-20:30'
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: '在线客服',
      description: '在线技术支持和问题解答',
      available: '工作日 8:30-20:30'
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: '远程协助',
      description: '远程桌面技术支持服务',
      available: '24小时预约服务'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: '工单系统',
      description: '问题工单提交和跟踪',
      available: '7×24小时'
    }
  ]

  const trainingServices = [
    {
      title: '系统操作培训',
      description: '全面的系统操作使用培训',
      duration: '2-3天',
      format: '现场培训'
    },
    {
      title: '管理员培训',
      description: '系统管理和配置培训',
      duration: '1-2天',
      format: '现场+远程'
    },
    {
      title: '新员工培训',
      description: '新入职员工系统使用培训',
      duration: '0.5天',
      format: '现场或远程'
    },
    {
      title: '功能升级培训',
      description: '新功能使用方法培训',
      duration: '1-2小时',
      format: '远程培训'
    }
  ]

  const maintenanceServices = [
    {
      icon: <Database className="w-8 h-8" />,
      title: '数据备份服务',
      description: '定期数据备份和恢复测试',
      benefits: ['自动备份机制', '多重备份策略', '数据完整性验证', '快速恢复能力']
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: '性能监控优化',
      description: '系统性能监控和优化调整',
      benefits: ['实时性能监控', '瓶颈问题诊断', '性能优化建议', '容量规划指导']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '安全维护服务',
      description: '系统安全检查和漏洞修复',
      benefits: ['安全漏洞扫描', '安全补丁更新', '权限管理审计', '安全策略建议']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: '系统升级维护',
      description: '系统版本升级和功能更新',
      benefits: ['版本升级计划', '功能测试验证', '兼容性检查', '升级风险评估']
    }
  ]

  const slaCommitments = [
    {
      level: '紧急问题',
      responseTime: '2小时内',
      resolveTime: '24小时内',
      description: '影响业务正常运行的严重问题'
    },
    {
      level: '重要问题',
      responseTime: '4小时内',
      resolveTime: '72小时内',
      description: '影响部分功能使用的重要问题'
    },
    {
      level: '一般问题',
      responseTime: '8小时内',
      resolveTime: '1周内',
      description: '不影响主要业务的一般问题'
    },
    {
      level: '咨询问题',
      responseTime: '24小时内',
      resolveTime: '3个工作日内',
      description: '使用咨询和功能建议'
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
              <span className="highlight">服务保障</span>
            </h1>
            <p className={`text-xl ${themeClasses.textSecondary} mb-8 max-w-4xl mx-auto leading-relaxed`}>
              完善的服务体系，专业的技术团队，为您的数智化转型提供全方位保障
            </p>
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="highlight">服务承诺</span>
            </h2>
            <p className={`text-lg ${themeClasses.textSecondary} max-w-3xl mx-auto`}>
              我们承诺为每一位客户提供专业、及时、可靠的服务保障
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceGuarantees.map((guarantee, index) => (
              <div key={index} className={`${themeClasses.card} rounded-2xl p-6 hover:scale-105 transition-all duration-300 group`}>
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg text-white mr-4 group-hover:animate-pulse" style={{ background: 'var(--adv-badge-bg)' }}>
                    {guarantee.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold ${themeClasses.text} mb-4`}>{guarantee.title}</h3>
                <p className={`${themeClasses.textSecondary} mb-6 leading-relaxed`}>{guarantee.description}</p>
                
                <div className="space-y-2">
                  {guarantee.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-center text-sm ${themeClasses.textMuted}`}>
                      <CheckCircle className="w-4 h-4 text-[var(--stat-3)] mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className={`py-20 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="highlight">服务流程</span>
            </h2>
            <p className={`text-lg ${themeClasses.textSecondary} max-w-3xl mx-auto`}>
              标准化的服务流程，确保项目实施的每一个环节都得到专业保障
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceProcess.map((process, index) => (
              <div key={index} className={`${themeClasses.card} rounded-2xl p-6 hover:scale-105 transition-all duration-300 group relative`}>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {process.step}
                </div>
                
                <div className="p-4 rounded-lg mb-4 mx-auto w-fit" style={{ background: 'var(--icon-gradient)' }}>
                  <div className="text-[var(--stat-2)]">
                    {process.icon}
                  </div>
                </div>
                
                <h3 className={`text-lg font-bold ${themeClasses.text} mb-4 text-center`}>{process.title}</h3>
                <p className={`text-sm ${themeClasses.textSecondary} text-center leading-relaxed`}>{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="highlight">技术支持</span>
              </h2>
              <p className={`text-lg ${themeClasses.textMuted} mb-8 leading-relaxed`}>
                我们提供多种技术支持渠道，确保您在使用过程中遇到的任何问题都能得到及时解决。
                专业的技术团队7×12小时在线服务，为您的业务连续性保驾护航。
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>支持渠道</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {supportChannels.map((channel, index) => (
                      <div key={index} className={`${themeClasses.card} rounded-lg p-4`}>
                        <div className="flex items-center mb-2">
                          <div className="text-[var(--stat-2)] mr-3">
                            {channel.icon}
                          </div>
                          <h4 className={`font-semibold ${themeClasses.text}`}>{channel.title}</h4>
                        </div>
                        <p className={`text-sm ${themeClasses.textSecondary} mb-1`}>{channel.description}</p>
                        <span className="text-[var(--stat-3)] text-xs font-medium">
                          {channel.available}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className={`text-2xl font-bold ${themeClasses.text} mb-6`}>服务等级协议(SLA)</h3>
              <p className={`${themeClasses.textSecondary} mb-8`}>
                根据问题严重程度，我们提供不同等级的响应和解决时间承诺
              </p>
              
              <div className="space-y-4">
                {slaCommitments.map((sla, index) => (
                  <div key={index} className={`${themeClasses.card} rounded-lg p-4`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className={`font-semibold ${themeClasses.text}`}>{sla.level}</h4>
                      <div className="text-right">
                        <div className="text-sm font-medium text-[var(--stat-2)]">
                          响应: {sla.responseTime}
                        </div>
                        <div className="text-sm font-medium text-[var(--stat-3)]">
                          解决: {sla.resolveTime}
                        </div>
                      </div>
                    </div>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>{sla.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Services */}
      <section className={`py-20 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="highlight">培训服务</span>
            </h2>
            <p className={`text-lg ${themeClasses.textSecondary} max-w-3xl mx-auto`}>
              全面的用户培训体系，确保每位用户都能熟练掌握系统操作
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingServices.map((training, index) => (
              <div key={index} className={`${themeClasses.card} rounded-2xl p-6 hover:scale-105 transition-all duration-300`}>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: 'var(--icon-gradient)' }}>
                  <BookOpen className="w-6 h-6 text-[var(--stat-3)]" />
                </div>
                <h3 className={`text-lg font-bold ${themeClasses.text} mb-4`}>{training.title}</h3>
                <p className={`${themeClasses.textSecondary} mb-4 text-sm leading-relaxed`}>{training.description}</p>
                <div className="space-y-2">
                  <div className={`flex justify-between text-sm`}>
                    <span className={themeClasses.textSecondary}>时长:</span>
                    <span className="text-[var(--stat-2)] font-medium">{training.duration}</span>
                  </div>
                  <div className={`flex justify-between text-sm`}>
                    <span className={themeClasses.textSecondary}>形式:</span>
                    <span className="text-[var(--stat-3)] font-medium">{training.format}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="highlight">维护服务</span>
            </h2>
            <p className={`text-lg ${themeClasses.textSecondary} max-w-3xl mx-auto`}>
              全方位的系统维护服务，确保系统长期稳定高效运行
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {maintenanceServices.map((maintenance, index) => (
              <div key={index} className={`${themeClasses.card} rounded-2xl p-6 hover:scale-105 transition-all duration-300 group`}>
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg text-white mr-4 group-hover:animate-pulse" style={{ background: 'var(--icon-gradient)' }}>
                    {maintenance.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${themeClasses.text}`}>{maintenance.title}</h3>
                </div>
                
                <p className={`${themeClasses.textSecondary} mb-6 leading-relaxed`}>{maintenance.description}</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {maintenance.benefits.map((benefit, idx) => (
                    <div key={idx} className={`flex items-center text-sm ${themeClasses.textMuted}`}>
                      <div className="w-2 h-2 rounded-full mr-2" style={{ background: 'var(--stat-3)' }}></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Contact */}
      <section className={`py-20 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="highlight">服务联系方式</span>
            </h2>
            <p className={`text-lg ${themeClasses.textSecondary} max-w-3xl mx-auto`}>
              遇到任何问题，随时联系我们的专业服务团队
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className={`${themeClasses.card} rounded-2xl p-8 text-center`}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--icon-gradient)' }}>
                <Phone className="w-8 h-8 text-[var(--stat-2)]" />
              </div>
              <h3 className={`text-xl font-bold ${themeClasses.text} mb-2`}>客服热线</h3>
              <p className="text-[var(--stat-2)] text-lg font-semibold mb-2">13686067077</p>
              <p className={`text-sm ${themeClasses.textSecondary}`}>工作日 8:30-20:30</p>
            </div>
            
            <div className={`${themeClasses.card} rounded-2xl p-8 text-center`}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--icon-gradient)' }}>
                <Users className="w-8 h-8 text-[var(--stat-3)]" />
              </div>
              <h3 className={`text-xl font-bold ${themeClasses.text} mb-2`}>项目合作</h3>
              <p className="text-[var(--stat-3)] text-lg font-semibold mb-2">13318438082</p>
              <p className={`text-sm ${themeClasses.textSecondary}`}>项目咨询与合作</p>
            </div>
            
            <div className={`${themeClasses.card} rounded-2xl p-8 text-center`}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--icon-gradient)' }}>
                <Headphones className="w-8 h-8 text-[var(--stat-4)]" />
              </div>
              <h3 className={`text-xl font-bold ${themeClasses.text} mb-2`}>技术支持</h3>
              <p className="text-[var(--stat-4)] text-lg font-semibold mb-2">18998050675</p>
              <p className={`text-sm ${themeClasses.textSecondary}`}>技术支持与维护</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 inline-flex items-center fixed-white-dark"
            >
              联系我们
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
