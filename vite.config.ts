import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Deutsch-mit-Yaser/', // تأكد من مطابقة اسم المستودع
  plugins: [react()],
  build: {
    minify: 'terser', // سنكتفي بهذا النوع من الحماية حالياً
  }
})
