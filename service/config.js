const testUrl = 'http://zensuo.winderinfo.com' // 测试环境
const devUrl = 'http://fkjk.xznsyh.com' // 线上环境
const isdev = 0 //true 线上环境 false测试环境
const ajaxUrl = isdev ? devUrl : testUrl

export default {
  url: {
    authorization: `${ajaxUrl}/index.php/api/auth/authorization`, // 授权登录
    homeList: `${ajaxUrl}/index.php/api/index/index`, //首页
    get_agreement: `${ajaxUrl}/index.php/api/auth/get_agreement`, // 用户协议
    doorList: `${ajaxUrl}/index.php/api/door/index`, //上门服务列表
    homeIdentification: `${ajaxUrl}/index.php/api/index/identification`, // 确认就诊
    shopDoctorList: `${ajaxUrl}/index.php/api/index/emplacement_list`, //我的到店就诊
    doorServiceList: `${ajaxUrl}/index.php/api/door/emplacement_list`, //上门服务订单
    emplacement_clear: `${ajaxUrl}/index.php/api/index/emplacement_clear`,
    upload: `${ajaxUrl}/index.php/api/auth/upload`, // 上传
    identification: `${ajaxUrl}/index.php/api/door/identification`, // 选择上门服务确认
    appointment: `${ajaxUrl}/index.php/api/index/make_an_appointment`, // 医生详情
    selection_number: `${ajaxUrl}/index.php/api/index/selection_number`, // 医师预约选号
    about_us: `${ajaxUrl}/index.php/api/auth/about_us`, // 关于我们
    feedback: `${ajaxUrl}/index.php/api/index/feedback`, // 反馈
    
  }
}
