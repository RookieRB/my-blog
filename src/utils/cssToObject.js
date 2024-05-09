export default function cssToObject(cssString) {
  // 使用正则表达式匹配 CSS 规则
  const cssRegex = /([\w-]+)\s*:\s*([^;]+?)\s*(?=;|$)/g;
  let match;
  const styleObject = {};

  // 循环遍历所有匹配的 CSS 规则
  while ((match = cssRegex.exec(cssString)) !== null) {
    const property = match[1].trim();
    const value = match[2].trim();
    // 将属性名转换为驼峰命名法
    const camelCaseProperty = property.replace(/-(\w)/g, (_, c) => c.toUpperCase());
    // 添加到对象中
    styleObject[camelCaseProperty] = value;
  }

  return styleObject;
}