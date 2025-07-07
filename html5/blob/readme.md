# html5 王者对象Blob


- 图片转成base64字符串编码
- atob(base64) 二进制的字符串编码
- for 每一个字符
  - charCodeAt() 0-255 之间的8位（1 byte）整数
  - Unit8Array() 8位无符号整型数组
- 二进制的文件对象描述 new Blob([unit8Array],类型)
- 二进制层面上去压缩、切割、修改
- 浏览器将会为二进制提供一个临时访问的地址
- URL.createObjectURL(blob)