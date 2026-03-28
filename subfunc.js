/**
 * 根据指定的 scheme、host、path、query 和 fragment 生成一个完整的 URL Scheme 字符串。
 * URL Scheme 完整格式：scheme://host/path?query#fragment
 *
 * @param {string} scheme - URL scheme，例如 'myapp'。必须提供。
 * @param {string|undefined} [host] - host 部分，例如 'user_profile'。
 * @param {string|string[]|undefined} [path] - path 部分，例如 'view/123'。
 * @param {Object<string, string|number|boolean|object>|undefined} [query] - 查询参数对象。
 * @param {string|undefined} [fragment] - fragment 标识符，即 URL 中 # 后面的部分。
 * @returns {string} - 生成的完整 URL 字符串。
 */
function generateUrlScheme(scheme, host, path, query, fragment) {
  // 1. 处理必须的 scheme
  if (!scheme) {
    console.error("Scheme is a required parameter.");
    return '';
  }
  // 2. 构建基础部分：scheme 和 host
  //    即使 host 为空，也会生成 'scheme://'，这对于 'file:///' 这类 scheme 是正确的
  let url = `${scheme}://${host || ''}`;

  // 3. 添加 path
  if (path) {
    if (Array.isArray(path)) {
      let pathStr = path.join('/')
      url += `/${pathStr.replace(/^\/+/, '')}`;
    }else{
      // 确保 host 和 path 之间只有一个斜杠，并处理 path 开头可能存在的斜杠
      url += `/${path.replace(/^\/+/, '')}`;
    }
  }

  // 4. 添加 query 参数
  if (query && Object.keys(query).length > 0) {
    const queryParts = [];
    for (const key in query) {
      // 确保我们只处理对象自身的属性
      if (Object.prototype.hasOwnProperty.call(query, key)) {
        const value = query[key];
        const encodedKey = encodeURIComponent(key);
        // 对值进行编码，如果是对象，则先序列化为 JSON 字符串
        const encodedValue = encodeURIComponent(
          typeof value === "object" && value !== null ? JSON.stringify(value) : value
        );
        queryParts.push(`${encodedKey}=${encodedValue}`);
      }
    }
    if (queryParts.length > 0) {
      url += `?${queryParts.join('&')}`;
    }
  }

  // 5. 添加 fragment
  if (fragment) {
    // Fragment 部分不应该被编码
    url += `#${fragment}`;
  }

  return url;
}
    /**
     *
     * @param {string} scheme - URL scheme, 例如 'myapp'。
     * @param {string} [host] - 可选的路径或操作名。
     * @param {Object<string, string|number|boolean>} [params] - 查询参数对象。
     */
    function postMessageToAddon(scheme, host, params) {
      let url = generateUrlScheme(scheme,host,undefined,params)
      window.location.href = url
    }

    function copyToClipboard(text) {
      postMessageToAddon("nativeAction","copy",{text:text})
    }
function getValidJSON(jsonString,debug = false) {
  try {
    if (typeof jsonString === "object") {
      return jsonString
    }
    return JSON.parse(jsonString)
  } catch (error) {
    try {
      return JSON.parse(jsonrepair(jsonString))
    } catch (error) {
      let errorString = error.toString()
      try {
        if (errorString.startsWith("Unexpected character \"{\" at position")) {
          return JSON.parse(jsonrepair(jsonString+"}"))
        }
        return {}
      } catch (error) {
        // debug && this.addErrorLog(error, "getValidJSON", jsonString)
        return {}
      }
    }
  }
}
/**
 * 
 * @param {string} md 
 * @returns 
 */
function md2html(md){
  md = renderKaTeXFormulas(md)
  let res = marked.parse(md.replace(/_{/g,'\\_\{').replace(/_\\/g,'\\_\\'))
  return res
}
/**
 * 将字符串中美元符号包裹的 LaTeX 公式替换为 KaTeX 渲染后的 HTML
 * @param {string} inputStr - 包含可能公式的原始字符串（如 "E=mc^2$，块级公式：$$\int_a^b f(x)dx$$"）
 * @param {Object} [katexOptions] - KaTeX 渲染配置项（可选，默认：{ throwOnError: false }）
 * @returns {string} 替换公式后的 HTML 字符串
 */
function renderKaTeXFormulas(inputStr, katexOptions = {}) {
  // 合并默认配置和用户配置（throwOnError 默认关闭，避免生产环境报错）
  const defaultOptions = { throwOnError: false, errorColor: "#cc0000" };
  const options = { ...defaultOptions, ...katexOptions };

  // 正则表达式：匹配 $$...$$（块级公式）和 $...$（行内公式）
  // 注意：使用非贪婪匹配（*?）避免跨多个公式匹配，同时排除转义的 \$（即 \$ 不视为公式分隔符）
  const formulaRegex = /(?<!\\)\$\$(.*?)(?<!\\)\$\$|(?<!\\)\$(.*?)(?<!\\)\$/gs;

  // 替换匹配到的公式
  return inputStr.replace(formulaRegex, (match, blockFormula, inlineFormula) => {
    // 判断是块级公式（$$...$$）还是行内公式（$...$）
    const isBlock = blockFormula !== undefined;
    const formulaContent = isBlock ? blockFormula.trim() : inlineFormula.trim();

    try {
      // 使用 KaTeX 渲染公式为 HTML 字符串
      return katex.renderToString(formulaContent, {
        ...options,
        displayMode: isBlock, // 块级公式设置 displayMode: true
      });
    } catch (error) {
      // 渲染失败时，返回错误提示（保留原始公式内容以便调试）
      console.error("KaTeX 渲染错误:", error, "公式内容:", formulaContent);
      return `<span style="color: ${options.errorColor}; background: #ffebee; padding: 2px 4px; border-radius: 2px;">
        [公式错误: ${formulaContent}]
      </span>`;
    }
  });
}
  /**
   * 
   * @param {string} jsonString 
   * @returns {boolean}
   */
  function isValidJSON(jsonString){
    // return NSJSONSerialization.isValidJSONObject(result)
     try{
         var json = JSON.parse(jsonString);
         if (json && typeof json === "object") {
             return true;
         }
     }catch(e){
         return false;
     }
     return false;
  }
function clearCache() {
  buttonCodeBlockCache = {}
  buttonPreContent = ""
}
  const multiLetterRegex = /(?<!\\)(\\[a-zA-Z]{2,})/g;
  const singleCharRegex = /(?<!\\)(\\(?:[cvHkdu]|[^a-zA-Z0-9\\]))/g;
/**
 * 使用两步替换策略，精准地纠正AI生成的字符串中未正确转义的LaTeX反斜杠。
 * 这种方法可以有效避免将标准的JavaScript转义序列（如 \n, \b）错误地转义。
 *
 * @param {string} text - 包含可能未转义的LaTeX公式的输入字符串。
 * @returns {string} - 返回修复了反斜杠转义的字符串。
 */
function fixLatexEscaping(text) {
  if (typeof text !== 'string' || !text) {
    return "";
  }
  let correctedText = text;
  // --- 第 1 步：修复多字母（2个及以上）的单词命令 ---
  // 正则表达式：匹配一个未转义的 \，后面跟着两个或更多的字母。
  // [a-zA-Z]{2,} - 匹配至少两个字母。
  correctedText = correctedText.replace(multiLetterRegex, '\\$1');
  // --- 第 2 步：修复特定的、安全的单字母命令和所有符号命令 ---
  // 正则表达式：匹配一个未转义的 \，后面跟着...
  // 1. 白名单中的一个单字母：[cvHkdu] (根据需要增删)
  // 2. 或 (|) 一个非字母、非数字、非反斜杠的字符：[^a-zA-Z0-9\\]
  //    我们排除了反斜杠，因为 `\\` 已经是正确的。
  //    排除了数字，因为像 \1 这样的命令在LaTeX中不常见，且可能与其他格式冲突。
  correctedText = correctedText.replace(singleCharRegex, '\\$1');
  return correctedText;
}
/**
 * 
 * @param {string} code 
 * @returns 
 */
function getChoiceBlock(code) {
  let url = `userselect://choice?content=${encodeURIComponent(code)}`
  let tem = code.split(". ")
  let backgroundColor = (theme === "dark") ? "rgba(213, 233, 255, 0.8)" : "rgba(194, 232, 255, 0.8)"
  let borderColor = (theme === "dark") ? "rgb(222, 226, 230)" : "rgb(193, 198, 202)"
  if (tem.length > 1 && tem[0].trim().length === 1) {
    let choiceWithLatex = md2html(tem.slice(1).join(". "))
    
  return `<div style="margin-top: 5px;">
    <a href="${url}" style="display: block; padding: 16px 16px; color:rgb(42, 48, 55); border-radius: 12px; text-decoration: none; border: 2px solid ${borderColor}; background:${backgroundColor}; font-size: 16px; cursor: pointer; box-sizing: border-box; transition: all 0.2s ease; box-shadow: 0 2px 4px rgba(0,0,0,0.02); position: relative;">
      <span style="display: inline-block; width: 26px; height: 26px; background: #2196f3; color: white; border-radius: 50%; text-align: center; line-height: 26px; font-weight: 600; font-size: 13px; margin-right: 12px; vertical-align: middle;">
      ${tem[0]}
      </span>
      <span style="vertical-align: middle;">${choiceWithLatex}</span>
  </a>
  </div>`
  }
  let choiceWithLatex = md2html(code)
  return `<div style="margin-top: 5px;">
    <a href="${url}" style="display: block; padding: 16px 20px; color:rgb(42, 48, 55); border-radius: 12px; text-decoration: none; border: 2px solid #dee2e6; background: ${backgroundColor}; font-size: 15px; cursor: pointer; box-sizing: border-box; transition: all 0.2s ease; box-shadow: 0 2px 4px rgba(0,0,0,0.02); position: relative;">
      <span style="vertical-align: middle;">${choiceWithLatex}</span>
  </a>
  </div>`
}
/**
 * 
 * @param {string} code 
 */
function getQustionBlock(code,notEnding = false) {
  // if (code.endsWith("...")) {
  //   //去除末尾的...
  //   code = code.slice(0, -3)
  // }
  code = fixLatexEscaping(code)
  let config = getValidJSON(code)
  // console.log(config);
  let keys = Object.keys(config)
      if (keys.length === 0) {
        return undefined
      }
      if (keys.length === 1 && keys[0] === "...") {
        return undefined
      }
    let encodedContent = encodeURIComponent(code);
      let createNoteURL = `userselect://addnote?content=${encodedContent}&type=choiceQuestion`
      
      let choices = []
      if ("choices" in config) {
        choices = config.choices.map(choice => { 
          return getChoiceBlock(choice)
        })
      }
      let titleHTML = ""
      if ("title" in config) {
        let titleColor = (theme === "dark") ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"
        titleHTML = `<h1 style="color: ${titleColor}; margin: 10px 0 10px 0; font-size: 24px; font-weight: 600;">${config.title}</h1>`
      }
      let descriptionHTML = ""
      if ("description" in config) {
        let descriptionWithLatex = md2html(config.description)
        let descriptionColor = (theme === "dark") ? "rgb(221, 221, 221)" : "rgb(22, 44, 66)"
        descriptionHTML = `<p style="color: ${descriptionColor}; margin: 10px 0 10px 0; font-size: 16px;">${descriptionWithLatex}</p>`
      }
      let backgroundColor = (theme === "dark") ? "rgba(133, 149, 159, 0.4)" : "rgba(233, 246, 255, 0.8)"
      let borderColor = (theme === "dark") ? "rgba(124, 141, 152, 0.4)" : "rgba(125, 140, 154, 0.8)"
      let newNoteButtonTextColor = (theme === "dark") ? "rgb(1, 71, 176)" : "rgb(1, 71, 176)"
      let newNoteButtonBackgroundColor = (theme === "dark") ? "rgba(213, 233, 255, 0.8)" : "rgba(13, 110, 253, 0.08)"
      let newNoteButtonBorderColor = (theme === "dark") ? "rgba(192, 217, 255, 0.47)" : "rgba(13, 110, 253, 0.15)"
      let newNoteButtonText = notEnding ? "渲染中..." : "➕ 点击创建卡片"
      if (notEnding && ("correctAnswer" in config || "explanation" in config)) {
        newNoteButtonText = "生成答案中..."
      }
      let newNoteButtonHTML = `<div style="display: inline-block; font-weight: 600; width: 120px; min-width: 120px; font-size: 14px; text-align: center; padding: 8px 5px; background: ${newNoteButtonBackgroundColor}; border-radius: 12px; border: 1px solid ${newNoteButtonBorderColor};">
            <a href="${notEnding ? "userselect://none": createNoteURL}" style="text-decoration: none; color: ${newNoteButtonTextColor}; display: block;">
               ${newNoteButtonText}
            </a>
        </div>`
      let answerButtonHTML = ""
      if (!notEnding && ("correctAnswer" in config || "explanation" in config)) {
        let encodedAnswer = encodeURIComponent(JSON.stringify(config))
        let showAnswerURL = `userselect://showanswer?content=${encodedAnswer}&type=choiceQuestion`
        answerButtonHTML = `<div style="display: inline-block; margin-right: 5px;font-weight: 600; width: 100px; min-width: 100px; font-size: 14px; text-align: center; padding: 8px 5px; background: ${newNoteButtonBackgroundColor}; border-radius: 12px; border: 1px solid ${newNoteButtonBorderColor};">
              <a href="${notEnding ? "userselect://none": showAnswerURL}" style="text-decoration: none; color: ${newNoteButtonTextColor}; display: block;">
                 👀 显示答案
              </a>
          </div>`
      }
      let questionHTML = `\n<div style="max-width: 500px; background: ${backgroundColor}; box-shadow: 0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04);  width: calc(100% - 20px);  border-radius: 16px; padding: 5px; margin: 3px; border: 1px solid ${borderColor}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <div style="text-align: right; margin-top: 1px; margin-bottom: 2px;">
      ${answerButtonHTML}${newNoteButtonHTML}
    </div>
      <div style="text-decoration: none; text-align: center; margin-bottom: 15px; margin-top: 15px;">
          ${titleHTML}
          ${descriptionHTML}
      </div>
      ${choices.join("")}
  </div>`
      return questionHTML
    }
/**
 * 检测Markdown字符串中是否包含图片链接
 * @param {string} markdownText - 要检测的Markdown文本
 * @param {boolean} [detailed=false] - 是否返回详细信息，默认只返回布尔值
 * @returns {boolean|Object} - 若detailed=true，返回详细匹配信息；否则返回是否包含图片的布尔值
 */
function hasMarkdownImages(markdownText, detailed = false) {
    // 确保输入是字符串
    if (typeof markdownText !== 'string') {
        throw new TypeError('输入必须是字符串');
    }
    // Markdown图片语法正则表达式
    // 支持:
    // - ![alt](url)
    // - ![alt](url "title")
    // - ![alt](url 'title')
    // - ![alt](url (title))
    // - ![alt](<url with spaces>)
    const imageRegex = /!\[([^\]]*)\]\((\s*<?([^)>]+)?>?\s*)(?:["']([^"']*)["']|\(([^)]*)\))?\)/g;
    // 查找所有匹配
    const matches = [];
    let match;
    
    while ((match = imageRegex.exec(markdownText)) !== null) {
        // 提取匹配的各个部分
        const fullMatch = match[0];
        const altText = match[1] || '';
        const urlPart = match[2].trim();
        const url = match[3] || '';
        const title = match[4] || match[5] || '';
        
        matches.push({
            fullMatch,
            altText,
            url,
            title,
            startIndex: match.index,
            endIndex: match.index + fullMatch.length
        });
    }
    
    if (detailed) {
        return {
            hasImages: matches.length > 0,
            count: matches.length,
            images: matches
        };
    }
    
    return matches.length > 0;
}
function codeBlockReplacer(lang,format,code){
    if (lang === "choiceQuestion") {
      return getQustionBlock(code)
    }
    let encodedContent = encodeURIComponent(code);
    if (lang === "userSelect") {
      let url = `userselect://choice?content=${encodedContent}`
      code = renderKaTeXFormulas(code)
      // code = md2html(code)
      return `\n<div style="max-width: 500px;"><a href="${url}" style="display: block; padding: 10px 12px; margin-top: 10px; background: #e3eefc; color: #1565c0; border-radius: 16px; text-decoration: none; border: 2px solid transparent; border-color: #90caf9; font-size: 15px; cursor: pointer; box-sizing: border-box;">
${code.trim()}
</a></div>`
    }
    if (lang === "addNote") {
      // console.log("addNote");
      let url = `userselect://addnote?content=${encodedContent}`
      if (format === "markdown") {
        // console.log("markdown");
        
        url = `userselect://addnote?content=${encodedContent}&format=markdown`
        code = md2html(code)
      }
      let newNoteButtonBackgroundColor = "rgba(221, 255, 213, 0.8)"
      let newNoteButtonBorderColor = "rgba(80, 181, 92, 0.8)"
      let newNoteButtonHTML = `<div style="display: inline-block; font-weight: 600; width: 120px; min-width: 120px; font-size: 14px; text-align: center; padding: 8px 5px; background: ${newNoteButtonBackgroundColor}; border-radius: 12px; border: 1px solid ${newNoteButtonBorderColor};">➕ 点击创建笔记</div>`

      return `\n<div style="max-width: 500px;"><a href="${url}" style="display: block; padding: 5px 5px; margin-top: 10px; margin-left: 3px; margin-right: 3px; background:rgb(230, 255, 239); color:#237427; border-radius: 16px; text-decoration: none; border: 2px solid transparent; border-color:#01b76e; font-size: 15px; cursor: pointer; box-sizing: border-box;">
<div style="text-align: right; margin-top: 1px; margin-bottom: 2px;">${newNoteButtonHTML}</div>
${code.trim()}
</a></div>`
  }
    if (lang === "addComment") {
      let url = `userselect://addcomment?content=${encodedContent}`
      if (format === "markdown") {
        url = `userselect://addnote?content=${encodedContent}&format=markdown`
        code = md2html(code)
      }
      let newNoteButtonBackgroundColor = "rgba(213, 233, 255, 0.8)"
      let newNoteButtonBorderColor = "rgba(192, 217, 255, 0.47)"
      let newNoteButtonHTML = `<div style="display: inline-block; font-weight: 600; width: 120px; min-width: 120px; font-size: 14px; text-align: center; padding: 8px 5px; background: ${newNoteButtonBackgroundColor}; border-radius: 12px; border: 1px solid ${newNoteButtonBorderColor};">➕ 点击添加评论</div>`
      return `\n<div style="max-width: 500px;"><a href="${url}" style="display: block; padding: 10px 12px; margin-top: 10px; margin-left: 3px; margin-right: 3px; background:rgb(230, 255, 239); color:#237427; border-radius: 16px; text-decoration: none; border: 2px solid transparent; border-color:#01b76e; font-size: 15px; cursor: pointer; box-sizing: border-box;">
<div style="text-align: right; margin-top: 1px; margin-bottom: 2px;">${newNoteButtonHTML}</div>
${code.trim()}
</a></div>`
  }
  return ""
}
function codeBlockReplacerNotEnding(lang,format,code){
    if (lang === "choiceQuestion") {
      return getQustionBlock(code,true)
    }
    let encodedContent = encodeURIComponent(code);
    if (lang === "userSelect") {
      let url = `userselect://choice?content=${encodedContent}`
      code = renderKaTeXFormulas(code)
      // code = md2html(code)
      return `\n<div style="max-width: 500px;"><a href="${url}" style="display: block; padding: 10px 12px; margin-top: 10px; background: #e3eefc; color: #1565c0; border-radius: 16px; text-decoration: none; border: 2px solid transparent; border-color: #90caf9; font-size: 15px; cursor: pointer; box-sizing: border-box;">
${code.trim()}
</a></div>`
    }
    if (lang === "addNote") {
      // console.log("addNote");
      let url = `userselect://addnote?content=${encodedContent}`
      if (format === "markdown") {
        // console.log("markdown");
        
        url = `userselect://addnote?content=${encodedContent}&format=markdown`
        code = md2html(code)
      }
      let newNoteButtonBackgroundColor = "rgba(221, 255, 213, 0.8)"
      let newNoteButtonBorderColor = "rgba(80, 181, 92, 0.8)"
      let newNoteButtonHTML = `<div style="display: inline-block; font-weight: 600; width: 120px; min-width: 120px; font-size: 14px; text-align: center; padding: 8px 5px; background: ${newNoteButtonBackgroundColor}; border-radius: 12px; border: 1px solid ${newNoteButtonBorderColor};">➕ 点击创建笔记</div>`
      return `\n<div style="max-width: 500px;"><a href="${url}" style="display: block; padding: 5px 5px; margin-top: 10px; margin-left: 3px; margin-right: 3px; background:rgb(230, 255, 239); color:#237427; border-radius: 16px; text-decoration: none; border: 2px solid transparent; border-color:#01b76e; font-size: 15px; cursor: pointer; box-sizing: border-box;">
<div  style="text-align: right; margin-top: 1px; margin-bottom: 2px;">${newNoteButtonHTML}</div>
${code.trim()}
</a></div>`
  }
    if (lang === "addComment") {
      let url = `userselect://addcomment?content=${encodedContent}`
      if (format === "markdown") {
        url = `userselect://addnote?content=${encodedContent}&format=markdown`
        code = md2html(code)
      }
      let newNoteButtonBackgroundColor = "rgba(213, 233, 255, 0.8)"
      let newNoteButtonBorderColor = "rgba(192, 217, 255, 0.47)"
      let newNoteButtonHTML = `<div style="display: inline-block; font-weight: 600; width: 120px; min-width: 120px; font-size: 14px; text-align: center; padding: 8px 5px; background: ${newNoteButtonBackgroundColor}; border-radius: 12px; border: 1px solid ${newNoteButtonBorderColor};">➕ 点击添加评论</div>`
      return `\n<div style="max-width: 500px;"><a href="${url}" style="display: block; padding: 10px 12px; margin-top: 10px; margin-left: 3px; margin-right: 3px; background:rgb(230, 255, 239); color:#237427; border-radius: 16px; text-decoration: none; border: 2px solid transparent; border-color:#01b76e; font-size: 15px; cursor: pointer; box-sizing: border-box;">
<div style="text-align: right; margin-top: 1px; margin-bottom: 2px;">${newNoteButtonHTML}</div>
${code.trim()}
</a></div>`
  }
  return ""
}
/**
 * 从markdown中提取 userSelect 或 addNote 代码块，并替换成指定内容
 * @param {string} markdown - 原始markdown
 * @returns {string} 
 */
function replaceSpecialBlocks(markdown) {
  // const blocks = [];
  // 正则：匹配```userSelect 或 ```addNote 开头，直到下一个```
const pattern = /```(userSelect|addNote|addComment|choiceQuestion)\s*(plaintext|markdown|json)?\n([\s\S]*?)```/g;
const newMarkdown = markdown.replace(pattern, (match, lang, format, code) => {
    // blocks.push(code);
    if (match in buttonCodeBlockCache) {
      // notyf.success("Using cache")
      return buttonCodeBlockCache[match]
    }
    let res = codeBlockReplacer(lang,format,code)
    // console.log(res);
    buttonCodeBlockCache[match] = res
    return res
    // return typeof replacer === 'function'
    //   ? replacer(lang,format,code)
    //   : String(replacer);
  });
  return newMarkdown;
}
/**
 * 匹配开头为 ``` 的代码块，但结尾不是 ``` 的代码块，并替换成指定内容
 * 不参与缓存检测
 * @param {string} markdown - 原始markdown
 * @returns {string} 
 */
function replaceSpecialBlocksNotEndingWithBacktick(markdown) {
  // const blocks = [];
  // 正则：匹配```userSelect 或 ```addNote 开头，直到下一个```
const pattern = /```(userSelect|addNote|addComment|choiceQuestion)\s*(plaintext|markdown|json)?\n([\s\S]*?)$/g;
const newMarkdown = markdown.replace(pattern, (match, lang, format, code) => {
    let res = codeBlockReplacerNotEnding(lang,format,code)
    if (res) {
      buttonPreContent = res
    }else{
      if (buttonPreContent) {
        return buttonPreContent
      }
      return ""
    }
    return res
  });
  return newMarkdown;
}
/**
 * 
 * @param {string} markdown 
 * @returns 
 */
function replaceButtonCodeBlocks(markdown) {
  let res = replaceSpecialBlocks(markdown)
  res = replaceSpecialBlocksNotEndingWithBacktick(res)
  if (!res) {
    return ""
  }
  return res
}