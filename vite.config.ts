import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// import { Plugin } from 'vite';
// react 函数如何获取使用的文件位置使用
// function filePathPlugin(): Plugin {
//     return {
//         name: 'vite-plugin-file-path',
//         transform(code, id) {
//             if (id.endsWith('.tsx') || id.endsWith('.jsx')) {
//                 const filePath = id;
//                 const newCode = `const __filename = '${filePath}';\n${code}`;
//                 return newCode;
//             }
//         },
//     };
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react({
        babel:{
          plugins:[
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }]
          ]
        }
      }),
      // filePathPlugin()
  ],
    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src')
        }
  },
})
