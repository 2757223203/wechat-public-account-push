export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx882fcdff56fc73d1",
    // 公众号appSecret
    appSecret: "1e006dbbe1daa9c972d00a18d84e1b02",
    // 模板消息id
    templateId: "8MCuWhivHxv2CUW24ISPw7PvJJFEdCqeKzfOkQB3P_E",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oVBhR5yI90B5BRQ99-SL3J4s91G8","oVBhR5wamtW8Jbag4W8BcIyRClR4"],
     
    // 信息配置
    // 所在省份
    province: "山东",
    // 所在城市
    city: "青岛",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "宝宝", "year": "2003", "date": "10-11", "type": 'new'}
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-08-11",
    // 结婚纪念日
    marryDate: "2020-01-04"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
