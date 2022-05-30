import { createI18n } from 'vue-i18n'  //引⼊vue-i18n组件
import zh from '../lang/zh';
import en from "../lang/en";
  //注册i8n实例并引⼊语⾔⽂件
 const I18n = createI18n({
    locale: 'en',
     messages: {
        en,zh
    }
 })
export default I18n
