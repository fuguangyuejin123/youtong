import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Award, 
  Users, 
  Target, 
  Lightbulb,
  Building,
  Calendar,
  MapPin,
  ChevronRight,
  Star,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const About = () => {
  const { isDarkMode, themeClasses } = useTheme()

  const companyStats = [
    { value: '2008年', label: '公司成立', icon: <Calendar className="w-6 h-6" /> },
    { value: '18年', label: '技术沉淀', icon: <Award className="w-6 h-6" /> },
    { value: '500+', label: '服务企业', icon: <Building className="w-6 h-6" /> },
    { value: '50+', label: '专业团队', icon: <Users className="w-6 h-6" /> }
  ]

  const milestones = [
    {
      year: '2008',
      title: '公司成立',
      description: '东莞市友通计算机科技正式成立，专注企业信息化服务'
    },
    {
      year: '2012',
      title: 'MES系统研发',
      description: '自主研发MES制造执行系统，获得多项技术专利'
    },
    {
      year: '2016',
      title: 'WMS系统推出',
      description: '推出WMS仓储管理系统，完善产品线布局'
    },
    {
      year: '2020',
      title: '云端化升级',
      description: '系统全面云端化，支持移动办公和远程管理'
    },
    {
      year: '2024',
      title: '智能化转型',
      description: '融入AI技术，推出智能化数字工厂解决方案'
    }
  ]

  const teamMembers = [
    {
      name: '技术研发团队',
      role: '核心技术骨干',
      description: '拥有丰富的制造业信息化经验，深度理解企业业务流程',
      expertise: ['系统架构设计', '数据库优化', '移动端开发', '系统集成']
    },
    {
      name: '产品设计团队',
      role: '用户体验专家',
      description: '专注于产品易用性设计，持续优化用户操作体验',
      expertise: ['UI/UX设计', '交互设计', '原型设计', '用户研究']
    },
    {
      name: '实施服务团队',
      role: '项目实施专家',
      description: '具备丰富的项目实施经验，确保系统成功上线',
      expertise: ['项目管理', '系统培训', '数据迁移', '流程梳理']
    },
    {
      name: '技术支持团队',
      role: '7×12小时服务',
      description: '提供全天候技术支持，快速响应客户需求',
      expertise: ['故障诊断', '远程支持', '系统维护', '性能优化']
    }
  ]

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: '客户至上',
      description: '始终以客户需求为导向，提供优质的产品和服务'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: '持续创新',
      description: '不断投入研发，保持技术领先，引领行业发展'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '品质保证',
      description: '严格的质量控制体系，确保产品稳定可靠'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '团队协作',
      description: '发挥团队优势，协同创新，共同成长'
    }
  ]

  const achievements = [
    {
      title: '高新技术企业',
      description: '获得国家高新技术企业认定',
      year: '2020'
    },
    {
      title: '软件著作权',
      description: '拥有多项软件著作权证书',
      year: '2018-2024'
    },
    {
      title: '技术专利',
      description: '获得多项技术发明专利',
      year: '2019-2023'
    },
    {
      title: '行业认可',
      description: '获得制造业信息化优秀供应商奖',
      year: '2022'
    }
  ]

  // 新增：主题化颜色变量，统一管理动态颜色
  const themeColors = {
    primary: isDarkMode ? 'text-blue-400' : 'text-blue-600',
    primaryBg: isDarkMode ? 'bg-blue-500/10' : 'bg-blue-300/20',
    primaryLightBg: isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100',
    yellow: isDarkMode ? 'text-yellow-400' : 'text-yellow-600',
    yellowBg: isDarkMode ? 'bg-yellow-500/20' : 'bg-yellow-100',
    green: isDarkMode ? 'text-green-400' : 'text-green-600',
    purple: isDarkMode ? 'text-purple-400' : 'text-purple-600',
    border: isDarkMode ? 'border-gray-600' : 'border-gray-400',
    hoverBg: isDarkMode ? 'bg-gray-800' : 'bg-gray-100',
    textGray: isDarkMode ? 'text-white' : 'text-gray-700',
    timelineLine: isDarkMode ? 'bg-blue-500/30' : 'bg-blue-300',
    timelineDotBorder: isDarkMode ? 'bg-gray-900' : 'bg-white'
  }

  return (
    // 修复1：添加key强制重渲染，绑定themeClasses.bg
    <div key={isDarkMode ? 'dark' : 'light'} className={`pt-8 ${themeClasses.bg} !important`}>
      {/* Page Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* 修复2：使用主题化颜色变量 */}
          <div className={`absolute top-10 left-10 w-64 h-64 ${themeColors.primaryBg} rounded-full blur-3xl animate-pulse-slow`}></div>
          <div className={`absolute bottom-10 right-10 w-80 h-80 ${isDarkMode ? 'bg-purple-500/10' : 'bg-purple-300/20'} rounded-full blur-3xl animate-pulse-slow`}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="highlight">企业介绍</span>
            </h1>
            <p className={`text-xl ${themeClasses.textSecondary} mb-8 max-w-4xl mx-auto leading-relaxed !important`}>
              东莞市友通计算机科技，专注企业数智化管理软件研发与服务的高新技术企业
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className={`${themeClasses.card} rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 !important`}>
                {/* 修复3：使用主题化图标颜色 */}
                <div className={`${themeColors.primary} mb-4 flex justify-center !important`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-2">
                  <span className="highlight">{stat.value}</span>
                </div>
                <div className={`${themeClasses.textSecondary} text-sm !important`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className={`py-20 ${themeClasses.sectionBg} !important`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="highlight">关于友通科技</span>
              </h2>
              <div className="space-y-6">
                {/* 修复4：添加!important确保样式生效 */}
                <p className={`text-lg ${themeClasses.textMuted} leading-relaxed !important`}>
                  东莞市友通计算机科技有限公司成立于2008年，是一家专注于企业数智化管理软件研发与服务的高新技术企业。
                  公司深耕制造业信息化领域18年，为500+企业提供专业的MES制造执行系统和WMS仓储管理系统解决方案。
                </p>
                <p className={`text-lg ${themeClasses.textMuted} leading-relaxed !important`}>
                  我们始终坚持"客户至上、持续创新"的经营理念，以专业的技术团队、丰富的项目经验和完善的服务体系，
                  帮助制造业企业实现生产过程数字化、管理决策智能化、业务协同一体化。
                </p>
                <p className={`text-lg ${themeClasses.textMuted} leading-relaxed !important`}>
                  公司拥有完整的自主知识产权，多项软件著作权和技术专利，产品功能完善、性能稳定、易于使用，
                  已成功应用于电子制造、机械加工、汽车零部件、家具制造等多个行业领域。
                </p>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all inline-flex items-center justify-center fixed-white-dark"
                >
                  了解产品
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center justify-center fixed-white-dark"
                >
                  联系我们
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className={`${themeClasses.card} rounded-2xl p-8 !important`}>
                <h3 className={`text-xl font-bold ${themeClasses.text} mb-6 text-center !important`}>公司基本信息</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building className={`w-5 h-5 ${themeColors.primary} !important`} />
                    <div>
                      <span className={`${themeClasses.textSecondary} text-sm !important`}>公司全称:</span>
                      <div className={`${themeClasses.text} font-medium !important`}>东莞市友通计算机科技</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className={`w-5 h-5 ${themeColors.primary} !important`} />
                    <div>
                      <span className={`${themeClasses.textSecondary} text-sm !important`}>成立时间:</span>
                      <div className={`${themeClasses.text} font-medium !important`}>2008年</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className={`w-5 h-5 ${themeColors.primary} !important`} />
                    <div>
                      <span className={`${themeClasses.textSecondary} text-sm !important`}>注册地址:</span>
                      <div className={`${themeClasses.text} font-medium !important`}>广东省东莞市</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className={`w-5 h-5 ${themeColors.primary} !important`} />
                    <div>
                      <span className={`${themeClasses.textSecondary} text-sm !important`}>企业性质:</span>
                      <div className={`${themeClasses.text} font-medium !important`}>高新技术企业</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className={`w-5 h-5 ${themeColors.primary} !important`} />
                    <div>
                      <span className={`${themeClasses.textSecondary} text-sm !important`}>主营业务:</span>
                      <div className={`${themeClasses.text} font-medium !important`}>MES/WMS系统研发</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Milestones */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="highlight">发展历程</span>
            </h2>
            <p className={`text-lg ${themeClasses.textSecondary} max-w-3xl mx-auto !important`}>
              从2008年成立至今，友通科技始终专注于制造业信息化领域，不断创新发展
            </p>
          </div>
          
          <div className="relative">
            {/* 修复6：时间线样式主题化 */}
            <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${themeColors.timelineLine} rounded-full`}></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 md:px-8">
                    <div className={`${themeClasses.card} rounded-2xl p-6 hover:scale-105 transition-all duration-300 !important`}>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                          {milestone.year.slice(-2)}
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold ${themeClasses.text} !important`}>{milestone.title}</h3>
                          <span className={`text-sm ${themeClasses.textSecondary} !important`}>{milestone.year}</span>
                        </div>
                      </div>
                      <p className={`${themeClasses.textMuted} leading-relaxed !important`}>{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* 修复7：时间点样式主题化 */}
                  <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${themeColors.primary.replace('text-', 'bg-')} rounded-full border-4 ${themeColors.timelineDotBorder}`}></div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={`py-20 ${themeClasses.sectionBg} !important`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="highlight">企业价值观</span>
            </h2>
            <p className={`text-lg ${themeClasses.textSecondary} max-w-3xl mx-auto !important`}>
              我们坚持的核心价值观指引着公司的发展方向和文化建设
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`${themeClasses.card} rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 group !important`}>
                <div className={`${themeColors.primary} mb-4 flex justify-center group-hover:animate-pulse !important`}>
                  {value.icon}
                </div>
                <h3 className={`text-xl font-bold ${themeClasses.text} mb-4 !important`}>{value.title}</h3>
                <p className={`${themeClasses.textSecondary} leading-relaxed !important`}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="highlight">专业团队</span>
            </h2>
            <p className={`text-lg ${themeClasses.textSecondary} max-w-3xl mx-auto !important`}>
              拥有50+专业技术人员，涵盖研发、设计、实施、服务等各个环节
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className={`${themeClasses.card} rounded-2xl p-6 hover:scale-105 transition-all duration-300 !important`}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${themeClasses.text} !important`}>{member.name}</h3>
                    <span className={`text-sm ${themeColors.primary} font-medium !important`}>{member.role}</span>
                  </div>
                </div>
                
                <p className={`${themeClasses.textMuted} mb-6 leading-relaxed !important`}>{member.description}</p>
                
                <div>
                  <h4 className={`text-sm font-semibold ${themeClasses.text} mb-3 !important`}>专业领域:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className={`px-3 py-1 ${themeColors.primaryLightBg} ${themeColors.primary} rounded-full text-sm font-medium !important`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Honors */}
      <section className={`py-20 ${themeClasses.sectionBg} !important`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">
              <span className="highlight">荣誉资质</span>
            </h2>
            <p className={`text-lg ${themeClasses.textSecondary} max-w-3xl mx-auto !important`}>
              多年来获得的各项荣誉和资质认证，是对我们专业能力的认可
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className={`${themeClasses.card} rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 group !important`}>
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20' : 'bg-gradient-to-r from-yellow-100 to-orange-100'} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse`}>
                  <Star className={`w-8 h-8 ${themeColors.yellow} !important`} />
                </div>
                <h3 className={`text-lg font-bold ${themeClasses.text} mb-2 !important`}>{achievement.title}</h3>
                <p className={`text-sm ${themeClasses.textSecondary} mb-3 !important`}>{achievement.description}</p>
                <span className={`inline-block px-3 py-1 ${themeColors.yellowBg} ${themeColors.yellow} rounded-full text-xs font-medium !important`}>
                  {achievement.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="highlight">企业文化</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className={`text-xl font-semibold ${themeClasses.text} mb-3 !important`}>使命</h3>
                  <p className={`${themeClasses.textMuted} leading-relaxed !important`}>
                    让制造更智能，让管理更简单。通过先进的信息技术和专业的服务，
                    帮助制造企业提升效率、降低成本、优化管理。
                  </p>
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${themeClasses.text} mb-3 !important`}>愿景</h3>
                  <p className={`${themeClasses.textMuted} leading-relaxed !important`}>
                    成为制造业数智化转型的领导者，为中国制造业的智能化升级贡献力量，
                    打造具有国际竞争力的工业软件品牌。
                  </p>
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${themeClasses.text} mb-3 !important`}>价值观</h3>
                  <p className={`${themeClasses.textMuted} leading-relaxed !important`}>
                    客户至上、持续创新、品质保证、团队协作。我们始终将客户需求放在首位，
                    通过不断创新和团队协作，为客户提供优质的产品和服务。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className={`${themeClasses.card} rounded-2xl p-6 !important`}>
                <div className="flex items-center mb-4">
                  <TrendingUp className={`w-6 h-6 ${themeColors.green} mr-3 !important`} />
                  <h3 className={`text-lg font-semibold ${themeClasses.text} !important`}>持续成长</h3>
                </div>
                <p className={`${themeClasses.textSecondary} text-sm !important`}>
                  我们鼓励员工持续学习和成长，提供完善的培训体系和职业发展通道
                </p>
              </div>
              
              <div className={`${themeClasses.card} rounded-2xl p-6 !important`}>
                <div className="flex items-center mb-4">
                  <Zap className={`w-6 h-6 ${themeColors.primary} mr-3 !important`} />
                  <h3 className={`text-lg font-semibold ${themeClasses.text} !important`}>创新驱动</h3>
                </div>
                <p className={`${themeClasses.textSecondary} text-sm !important`}>
                  我们鼓励创新思维，不断探索新技术、新方法，保持技术领先优势
                </p>
              </div>
              
              <div className={`${themeClasses.card} rounded-2xl p-6 !important`}>
                <div className="flex items-center mb-4">
                  <Users className={`w-6 h-6 ${themeColors.purple} mr-3 !important`} />
                  <h3 className={`text-lg font-semibold ${themeClasses.text} !important`}>团队合作</h3>
                </div>
                <p className={`${themeClasses.textSecondary} text-sm !important`}>
                  我们倡导开放协作的工作氛围，发挥团队智慧，共同创造价值
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${themeClasses.sectionBg} !important`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold ${themeClasses.text} mb-6 !important`}>
            期待与您合作
          </h2>
          <p className={`text-xl ${themeClasses.textSecondary} mb-8 max-w-3xl mx-auto !important`}>
            如果您对我们的产品和服务感兴趣，欢迎联系我们，我们将竭诚为您服务
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 inline-flex items-center justify-center fixed-white-dark"
            >
              联系我们
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/products"
              
              className={`border ${themeColors.border} ${themeColors.textGray} hover:${themeColors.hoverBg} px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center justify-center !important`}
            >
              了解产品
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About