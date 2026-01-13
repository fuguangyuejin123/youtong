import React, { useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  Building,
  Users,
  MessageSquare,
  Calendar
} from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const Contact = () => {
  const { isDarkMode, themeClasses } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    industry: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false) // 新增：提交中状态

  // ✅ 替换 handleSubmit 为真实 Formspree 提交
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/mzddbbyr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setIsSubmitted(true)
        // 清空表单（可选）
        setFormData({ name: '', company: '', phone: '', email: '', industry: '', message: '' })
      } else {
        const errorData = await response.json()
        console.error('Formspree error:', errorData)
        alert('提交失败，请稍后重试')
      }
    } catch (error) {
      console.error('Network error:', error)
      alert('网络错误，请检查连接')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Building className="w-6 h-6" />,
      title: '公司名称',
      content: '东莞市友通计算机科技',
      detail: '东莞市莞城区旗峰路200号中天大厦3楼301室'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: '联系微信',
      content: '13686067077',
      detail: '工作日 8:30-20:30'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: '项目合作',
      content: '13318438082',
      detail: '项目咨询与商务合作'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: '技术支持',
      content: '18998050675',
      detail: '技术支持与售后服务'
    }
  ]

  const industries = [
    '电子制造', '机械加工', '汽车零部件', '家具制造', '纺织服装',
    '食品饮料', '化工制药', '五金制品', '塑胶制品', '其他行业'
  ]

  const businessHours = [
    { day: '周一至周五', time: '8:30 - 20:30', type: '客服&技术支持' },
    { day: '周六', time: '9:00 - 18:00', type: '客服支持' },
    { day: '周日', time: '预约服务', type: '紧急技术支持' }
  ]

  return (
    <div className="pt-8">
      {/* Page Header */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-10 left-10 w-64 h-64 ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-300/20'} rounded-full blur-3xl animate-pulse-slow`}></div>
          <div className={`absolute bottom-10 right-10 w-80 h-80 ${isDarkMode ? 'bg-purple-500/10' : 'bg-purple-300/20'} rounded-full blur-3xl animate-pulse-slow`}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="highlight">联系我们</span>
            </h1>
            <p className={`text-xl ${themeClasses.textSecondary} mb-8 max-w-4xl mx-auto leading-relaxed`}>
              期待与您合作，为您的企业数智化转型提供专业的解决方案和服务
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className={`${themeClasses.card} rounded-2xl p-6 min-h-[160px] flex flex-col justify-between text-center hover:scale-105 transition-all duration-300 group`}>
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse`}>
                  <div className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {info.icon}
                  </div>
                </div>
                <h3 className={`text-lg font-bold ${isDarkMode ? themeClasses.text : 'text-blue-600'} mb-2`}>{info.title}</h3>
                <p className={`text-xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>{info.content}</p>
                <p className={`text-sm ${themeClasses.textSecondary}`}>{info.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className={`py-20 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className={`${themeClasses.card} rounded-2xl p-8`}>
                <h3 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">留言咨询</h3>
                <p className={`text-lg ${themeClasses.textSecondary} mb-6`}>填写下表，我们的专业顾问将在24小时内与您联系，为您提供详细的产品介绍和解决方案。</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={`text-sm font-medium ${isDarkMode ? themeClasses.text : 'text-slate-700'}`}>姓名 *</label>
                    <input 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="请输入您的姓名" 
                      className="mt-2 border rounded-lg px-4 py-3 w-full bg-transparent" 
                      required 
                    />
                  </div>

                  <div>
                    <label className={`text-sm font-medium ${isDarkMode ? themeClasses.text : 'text-slate-700'}`}>公司名称 *</label>
                    <input 
                      name="company" 
                      value={formData.company} 
                      onChange={handleInputChange} 
                      placeholder="请输入公司名称" 
                      className="mt-2 border rounded-lg px-4 py-3 w-full bg-transparent" 
                      required 
                    />
                  </div>

                  <div>
                    <label className={`text-sm font-medium ${isDarkMode ? themeClasses.text : 'text-slate-700'}`}>联系电话 *</label>
                    <input 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="请输入联系电话" 
                      className="mt-2 border rounded-lg px-4 py-3 w-full bg-transparent" 
                      required 
                    />
                  </div>

                  <div>
                    <label className={`text-sm font-medium ${isDarkMode ? themeClasses.text : 'text-slate-700'}`}>邮箱地址</label>
                    <input 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="请输入邮箱地址" 
                      className="mt-2 border rounded-lg px-4 py-3 w-full bg-transparent" 
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className={`text-sm font-medium ${isDarkMode ? themeClasses.text : 'text-slate-700'}`}>所属行业 *</label>
                  <select 
                    name="industry" 
                    value={formData.industry} 
                    onChange={handleInputChange} 
                    className="mt-2 border rounded-lg px-4 py-3 w-full bg-transparent" 
                    required
                  >
                    <option value="">请选择所属行业</option>
                    {industries.map((it, i) => (
                      <option key={i} value={it}>{it}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className={`text-sm font-medium ${isDarkMode ? themeClasses.text : 'text-slate-700'}`}>需求描述 *</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    placeholder="请详细描述您的需求，例如：企业规模、当前管理痛点、期望实现的目标等" 
                    className="mt-2 border rounded-lg px-4 py-3 w-full min-h-[140px] bg-transparent" 
                    required
                  ></textarea>
                </div>

                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full text-white px-6 py-4 rounded-lg text-lg font-semibold inline-flex items-center justify-center gap-3 ${
                      isSubmitted
                        ? 'bg-green-500'
                        : isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-500 to-purple-600'
                    }`}
                  >
                    {isSubmitting ? (
                      <>提交中...</>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        已提交
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        提交咨询
                      </>
                    )}
                  </button>

                  {isSubmitted && (
                    <div className="flex items-center text-green-500 mt-4">
                      <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span>感谢您的留言，我们会在24小时内与您联系</span>
                    </div>
                  )}
                </div>
              </form>

              {/* Info Cards */}
              <div className="space-y-8">
                {/* Business Hours */}
                <div className={`${themeClasses.card} rounded-2xl p-6 min-h-[160px]`}>
                  <h3 className={`text-xl font-bold ${isDarkMode ? themeClasses.text : 'text-blue-600'} mb-6 flex items-center`}>
                    <Clock className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mr-3`} />
                    服务时间
                  </h3>
                  <div className="space-y-4">
                    {businessHours.map((hour, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <div className={`font-medium ${themeClasses.text}`}>{hour.day}</div>
                          <div className={`text-sm ${themeClasses.textSecondary}`}>{hour.type}</div>
                        </div>
                        <div className={`text-right ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>
                          {hour.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className={`${themeClasses.card} rounded-2xl p-6 min-h-[160px]`}>
                  <h3 className={`text-xl font-bold ${isDarkMode ? themeClasses.text : 'text-blue-600'} mb-6`}>快速联系</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className={`w-5 h-5 ${isDarkMode ? 'text-green-400' : 'text-green-600'} mr-3`} />
                      <div>
                        <div className={`font-medium ${themeClasses.text}`}>紧急技术支持</div>
                        <div className={`text-sm ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>18998050675</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <MessageSquare className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mr-3`} />
                      <div>
                        <div className={`font-medium ${themeClasses.text}`}>项目咨询</div>
                        <div className={`text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>13318438082</div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Calendar className={`w-5 h-5 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'} mr-3`} />
                      <div>
                        <div className={`font-medium ${themeClasses.text}`}>预约演示</div>
                        <div className={`text-sm ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>13686067077</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className={`${themeClasses.card} rounded-2xl p-6 min-h-[160px]`}>
                  <h3 className={`text-xl font-bold ${isDarkMode ? themeClasses.text : 'text-blue-600'} mb-6`}>常见问题</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className={`font-medium ${isDarkMode ? themeClasses.text : 'text-blue-600'} mb-2`}>Q: 系统实施需要多长时间？</h4>
                      <p className={`text-sm ${themeClasses.textSecondary}`}>A: 一般2-4周，具体时间根据企业规模和需求复杂度而定。</p>
                    </div>

                    <div>
                      <h4 className={`font-medium ${isDarkMode ? themeClasses.text : 'text-blue-600'} mb-2`}>Q: 是否提供免费试用？</h4>
                      <p className={`text-sm ${themeClasses.textSecondary}`}>A: 我们提供免费演示和试用服务，可联系我们安排。</p>
                    </div>

                    <div>
                      <h4 className={`font-medium ${isDarkMode ? themeClasses.text : 'text-blue-600'} mb-2`}>Q: 系统支持哪些设备？</h4>
                      <p className={`text-sm ${themeClasses.textSecondary}`}>A: 支持PC端、平板、手机等多种设备，支持iOS和Android系统。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              <span className={`highlight ${isDarkMode ? '' : 'text-blue-600'}`}>公司位置</span>
            </h2>
            <p className={`text-lg ${themeClasses.textSecondary}`}>
              欢迎您到公司实地考察交流
            </p>
          </div>
          
          <div className={`${themeClasses.card} rounded-2xl p-6`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <h3 className={`text-xl font-bold ${isDarkMode ? themeClasses.text : 'text-blue-600'} mb-4`}>东莞市友通计算机科技有限公司</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mr-3`} />
                    <span className={themeClasses.textMuted}>东莞市莞城区旗峰路200号中天大厦3楼301室</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className={`w-5 h-5 ${isDarkMode ? 'text-green-400' : 'text-green-600'} mr-3`} />
                    <span className={themeClasses.textMuted}>13686067077</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className={`w-5 h-5 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'} mr-3`} />
                    <span className={themeClasses.textMuted}>工作日 8:30-20:30</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className={`font-semibold ${isDarkMode ? themeClasses.text : 'text-blue-600'} mb-3`}>交通方式</h4>
                  <ul className={`text-sm ${themeClasses.textSecondary} space-y-1`}>
                    <li>• 地铁：可乘坐地铁到达</li>
                    <li>• 公交：多路公交车直达</li>
                    <li>• 自驾：提供停车位</li>
                    <li>• 打车：滴滴/出租车便利</li>
                  </ul>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg h-64 lg:h-80 w-full flex items-center justify-center`}>
                  <a 
                    href="https://cn.bing.com/maps?q=%E4%B8%AD%E5%A4%A9%E5%A4%A7%E5%8E%A6-%E8%A5%BF%E9%97%A8&ss=ypid.YN4067x17543553359663637730&name=%E4%B8%AD%E5%A4%A9%E5%A4%A7%E5%8E%A6-%E8%A5%BF%E9%97%A8&cp=mv3tzrtgf3z8&lvl=15.0&ppois=23.025535583496094_113.76447296142578_%E4%B8%AD%E5%A4%A9%E5%A4%A7%E5%8E%A6-%E8%A5%BF%E9%97%A8&trfc=&FORM=MPSRPL&mepi=0%7E%7EEmbedded%7ELargeMapLink" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full h-full block"
                  >
                    <img src="/images/ditu.png" alt="公司位置地图" className="w-full h-full object-cover rounded-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact