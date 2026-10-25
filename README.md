# everything_ok

[English](README.en.md) · [演示网页](https://dogchenya.github.io/everything_ok/)

实用 GitHub 工具合集，按用途分类，附简介、使用门槛和 GIF 演示。

[文件分享与整理](#file-sharing) · [文档与日常效率](#office) · [图像、录屏与视频](#media-tools) · [AI 与本地模型](#ai-tools) · [开发与自动化](#developer-tools) · [照片管理](#photos)

<a id="file-sharing"></a>

## 文件分享与整理

<table>
<thead><tr><th>工具</th><th>用途与上手门槛</th><th>GIF 演示</th></tr></thead>
<tbody>
<tr>
<td width="120" valign="top"><a id="localsend"></a><strong><a href="https://github.com/localsend/localsend">LocalSend</a></strong><br>★ 95,358</td>
<td width="260" valign="top"><strong>跨设备局域网传文件</strong><br><br>上手：下载安装；设备需能互相访问<details><summary>演示范围</summary>接受文件 → 接收完成。发送端是本机协议测试客户端，未展示两台实体设备互传。</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/localsend-demo.mp4"><img src="media/localsend-demo.gif" width="420" alt="LocalSend 实际操作演示"></a><br><a href="https://dogchenya.github.io/everything_ok/media/localsend-demo.mp4">MP4 视频</a> · 2× · 12.5 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="pairdrop"></a><strong><a href="https://github.com/schlagmichdoch/PairDrop">PairDrop</a></strong><br>★ 11,663</td>
<td width="260" valign="top"><strong>浏览器跨设备传文件</strong><br><br>上手：网页即用；自部署需服务器环境<details><summary>演示范围</summary>演示由上游项目提供。</details></td>
<td width="420" valign="top"><img src="https://raw.githubusercontent.com/schlagmichdoch/PairDrop/master/docs/pairdrop_screenshot_mobile.gif" width="420" alt="PairDrop 演示"><br><a href="https://github.com/schlagmichdoch/PairDrop/blob/master/docs/pairdrop_screenshot_mobile.gif">上游 GIF</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="gatherpack"></a><strong><a href="https://github.com/dogchenya/GatherPack">GatherPack</a></strong><br>★ 0<br>自有项目</td>
<td width="260" valign="top"><strong>跨目录收集文件，一次打包带走</strong><br><br>上手：桌面安装；Alpha 阶段，查看平台验证限制<details><summary>演示范围</summary>从两个目录收集文件 → 检查目录 → ZIP 打包；写入 2 个文件，失败 0。</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/gatherpack-demo.mp4"><img src="media/gatherpack-demo.gif" width="420" alt="GatherPack 实际操作演示"></a><br><a href="https://dogchenya.github.io/everything_ok/media/gatherpack-demo.mp4">MP4 视频</a> · 2× · 25.5 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="syncthing"></a><strong><a href="https://github.com/syncthing/syncthing">Syncthing</a></strong><br>★ 89,671</td>
<td width="260" valign="top"><strong>让多台设备上的文件夹自动保持同步</strong><br><br>上手：两端安装并配对，需要配置同步目录<details><summary>演示范围</summary>本机两个隔离实例：写入文件 → 同步 → 接收端核对内容。</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/syncthing-demo.mp4"><img src="media/syncthing-demo.gif" width="420" alt="Syncthing 实际操作演示"></a><br><a href="https://dogchenya.github.io/everything_ok/media/syncthing-demo.mp4">MP4 视频</a> · 2× · 15.1 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="files"></a><strong><a href="https://github.com/files-community/Files">Files</a></strong><br>★ 46,178</td>
<td width="260" valign="top"><strong>Windows 文件管理器：多标签、双栏和列视图</strong><br><br>上手：Windows 安装；商店版付费，另有官网安装包<details><summary>演示范围</summary>官方列视图 GIF：逐层浏览文件夹；未展示双栏、压缩包编辑或本轮安装实测。</details></td>
<td width="420" valign="top"><img src="https://raw.githubusercontent.com/files-community/Website/main/static/blog-resources/v4/Columns.gif" width="420" alt="Files 演示"><br><a href="https://raw.githubusercontent.com/files-community/Website/main/static/blog-resources/v4/Columns.gif">上游 GIF</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="peazip"></a><strong><a href="https://github.com/peazip/PeaZip">PeaZip</a></strong><br>★ 8,015</td>
<td width="260" valign="top"><strong>压缩、解压和检查常见格式的文件包</strong><br><br>上手：Windows、macOS、Linux；有便携版，免费；部分格式只支持解压<details><summary>演示范围</summary>实录：3 个测试文本文件打成 ZIP，条目与 CRC 已核对；解压、加密、RAR 未录。</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/peazip-demo.mp4"><img src="media/peazip-demo.gif" width="420" alt="PeaZip 实际操作演示"></a><br><a href="https://dogchenya.github.io/everything_ok/media/peazip-demo.mp4">MP4 视频</a> · 2× · 12.2 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="czkawka"></a><strong><a href="https://github.com/qarmin/czkawka">Czkawka / Krokiet</a></strong><br>★ 34,514</td>
<td width="260" valign="top"><strong>查找重复文件和相似图片，辅助清理磁盘</strong><br><br>上手：Windows、macOS、Linux；界面版本与依赖按下载包区分<br><br><strong>步骤 GIF</strong><details><summary>演示范围</summary>实测步骤 GIF：找出一组重复测试文件；未删除文件，非连续录像。</details></td>
<td width="420" valign="top"><img src="media/czkawka-demo.gif" width="420" alt="Czkawka / Krokiet 演示"><br>步骤 GIF</td>
</tr>
</tbody>
</table>

<a id="office"></a>

## 文档与日常效率

<table>
<thead><tr><th>工具</th><th>用途与上手门槛</th><th>GIF 演示</th></tr></thead>
<tbody>
<tr>
<td width="120" valign="top"><a id="stirling-pdf"></a><strong><a href="https://github.com/Stirling-Tools/Stirling-PDF">Stirling PDF</a></strong><br>★ 94,822</td>
<td width="260" valign="top"><strong>合并、拆分、转换和处理 PDF</strong><br><br>上手：桌面或自部署；区分社区功能与付费方案；部分 Office 转换需要云端或服务端支持，需逐项核对<details><summary>演示范围</summary>导入两份 PDF → 合并 → 翻页检查 → 下载，结果页数与顺序已核对。</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/stirling-pdf-demo.mp4"><img src="media/stirling-pdf-demo.gif" width="420" alt="Stirling PDF 实际操作演示"></a><br><a href="https://dogchenya.github.io/everything_ok/media/stirling-pdf-demo.mp4">MP4 视频</a> · 2× · 16.3 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="excalidraw"></a><strong><a href="https://github.com/excalidraw/excalidraw">Excalidraw</a></strong><br>★ 134,441</td>
<td width="260" valign="top"><strong>手绘风格白板，快速解释流程与想法</strong><br><br>上手：网页打开即可；团队增值服务另计<br><br><strong>部分流程 · 导出未验证</strong><details><summary>演示范围</summary>绘制双语流程图 → 导出预览。文件导出尚未验证，本项为部分流程。</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/excalidraw-demo.mp4"><img src="media/excalidraw-demo.gif" width="420" alt="Excalidraw 实际操作演示"></a><br><a href="https://dogchenya.github.io/everything_ok/media/excalidraw-demo.mp4">MP4 视频</a> · 2× · 14.2 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="powertoys"></a><strong><a href="https://github.com/microsoft/PowerToys">PowerToys</a></strong><br>★ 139,688</td>
<td width="260" valign="top"><strong>Windows 效率工具集</strong><br><br>上手：Windows；安装后启用所需功能<details><summary>演示范围</summary>演示由上游项目提供。</details></td>
<td width="420" valign="top"><a href="https://raw.githubusercontent.com/microsoft/PowerToys/main/src/settings-ui/Settings.UI/Assets/Settings/Modules/OOBE/FancyZones.mp4">▶ 上游演示视频</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="flow-launcher"></a><strong><a href="https://github.com/Flow-Launcher/Flow.Launcher">Flow Launcher</a></strong><br>★ 15,855</td>
<td width="260" valign="top"><strong>搜索文件、快速启动应用</strong><br><br>上手：Windows 桌面安装<details><summary>演示范围</summary>演示由上游项目提供。</details></td>
<td width="420" valign="top"><img src="https://user-images.githubusercontent.com/6903107/207167068-2196d2a3-2caa-4856-958b-a780fbda95c6.gif" width="420" alt="Flow Launcher 演示"><br><a href="https://user-images.githubusercontent.com/6903107/207167068-2196d2a3-2caa-4856-958b-a780fbda95c6.gif">上游 GIF</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="joplin"></a><strong><a href="https://github.com/laurent22/joplin">Joplin</a></strong><br>★ 56,852</td>
<td width="260" valign="top"><strong>离线记笔记、待办和整理资料</strong><br><br>上手：桌面或手机安装；云同步方案另选，Joplin Cloud 收费<details><summary>演示范围</summary>官方短视频仅展示笔记内已有绘图的编辑；笔记创建、导入和同步未做本轮实测。</details></td>
<td width="420" valign="top"><a href="https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/draw/edit-existing-drawing-on-desktop.mp4"><img src="media/joplin-demo.gif" width="420" alt="Joplin 上游视频预览"></a><br><a href="https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/draw/edit-existing-drawing-on-desktop.mp4">上游视频</a> · 8.3 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="siyuan"></a><strong><a href="https://github.com/siyuan-note/siyuan">思源笔记 / SiYuan</a></strong><br>★ 46,905</td>
<td width="260" valign="top"><strong>本地优先的 Markdown 笔记，支持块引用</strong><br><br>上手：桌面安装；同步及部分服务付费<details><summary>演示范围</summary>官方内置指南视频展示列表与格式编辑；块引用、同步、AI 未在这段素材中演示，非本轮实测。</details></td>
<td width="420" valign="top"><a href="https://raw.githubusercontent.com/siyuan-note/siyuan/master/app/guide/20210808180117-6v0mkxr/assets/formatting_elements-20210607225733-o1keasx.mp4"><img src="media/siyuan-demo.gif" width="420" alt="思源笔记 / SiYuan 上游视频预览"></a><br><a href="https://raw.githubusercontent.com/siyuan-note/siyuan/master/app/guide/20210808180117-6v0mkxr/assets/formatting_elements-20210607225733-o1keasx.mp4">上游视频</a> · 9.6 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="umi-ocr"></a><strong><a href="https://github.com/hiroi-sora/Umi-OCR">Umi-OCR</a></strong><br>★ 48,143</td>
<td width="260" valign="top"><strong>把截图和扫描图片转成可复制文字，支持离线批量识别</strong><br><br>上手：Windows 解压即用；Linux 另有版本。本次仅验证 Windows Rapid v2.1.5 图片识别<details><summary>演示范围</summary>导入图片 → 离线识别 → 查看文字；日期、编号、金额核对正确，部分段落合并。仅测试印刷体图片。</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/umi-ocr-demo.mp4"><img src="media/umi-ocr-demo.gif" width="420" alt="Umi-OCR 实际操作演示"></a><br><a href="https://dogchenya.github.io/everything_ok/media/umi-ocr-demo.mp4">MP4 视频</a> · 2× · 12.7 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="pdfmathtranslate"></a><strong><a href="https://github.com/PDFMathTranslate/PDFMathTranslate">PDFMathTranslate</a></strong><br>★ 37,812</td>
<td width="260" valign="top"><strong>翻译外文 PDF，尽量保留公式、图表和原有版式</strong><br><br>上手：可用官方推荐的在线服务；本地版需安装，部分翻译服务需密钥或收费。文件处理位置取决于部署和翻译服务<details><summary>演示范围</summary>官方旧版 GUI：导入 PDF → 翻译 → 查看中文结果和双语下载入口。未做本轮翻译实测，当前界面可能不同。</details></td>
<td width="420" valign="top"><img src="https://raw.githubusercontent.com/PDFMathTranslate/PDFMathTranslate/main/docs/images/gui.gif" width="420" alt="PDFMathTranslate 演示"><br><a href="https://raw.githubusercontent.com/PDFMathTranslate/PDFMathTranslate/main/docs/images/gui.gif">上游 GIF</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="super-productivity"></a><strong><a href="https://github.com/super-productivity/super-productivity">Super Productivity</a></strong><br>★ 23,123</td>
<td width="260" valign="top"><strong>安排待办、时间块和专注计时</strong><br><br>上手：网页或桌面版；外部日历和任务服务集成另需配置<details><summary>演示范围</summary>官方短片：输入任务并安排时间；外部集成、同步未实测。</details></td>
<td width="420" valign="top"><img src="https://raw.githubusercontent.com/super-productivity/super-productivity/master/docs/screens/reel.gif" width="420" alt="Super Productivity 演示"><br><a href="https://raw.githubusercontent.com/super-productivity/super-productivity/master/docs/screens/reel.gif">上游 GIF</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="zotero"></a><strong><a href="https://github.com/zotero/zotero">Zotero</a></strong><br>★ 15,741</td>
<td width="260" valign="top"><strong>收集文献、标注 PDF，生成引用和参考文献</strong><br><br>上手：桌面安装；浏览器抓取需 Connector，附件同步超出免费额度可能收费<details><summary>演示范围</summary>Grad Coach 第三方视频：导入、整理与引用；界面可能旧于当前版本，需访问 YouTube。</details></td>
<td width="420" valign="top"><a href="https://www.youtube.com/watch?v=tnbwKj6-pD8"><img src="https://i.ytimg.com/vi/tnbwKj6-pD8/hqdefault.jpg" width="420" alt="Zotero 视频教程封面"></a><br><a href="https://www.youtube.com/watch?v=tnbwKj6-pD8">▶ 第三方视频教程</a> · Grad Coach<br>需访问 YouTube</td>
</tr>
<tr>
<td width="120" valign="top"><a id="docuseal"></a><strong><a href="https://github.com/docusealco/docuseal">DocuSeal</a></strong><br>★ 18,787</td>
<td width="260" valign="top"><strong>给 PDF 添加填写字段，在线收集表单和签名</strong><br><br>上手：托管服务或自部署；社区版与 Pro 功能、费用不同<details><summary>演示范围</summary>官方视频：创建 PDF 模板、添加字段、收件人和签名；非本轮实测。</details></td>
<td width="420" valign="top"><a href="https://www.docuseal.com/demo.mp4"><img src="https://github.com/docusealco/docuseal/assets/5418788/d8703ea3-361a-423f-8bfe-eff1bd9dbe14" width="420" alt="DocuSeal 官方演示封面"></a><br><a href="https://www.docuseal.com/demo.mp4">▶ 官方视频</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="openrefine"></a><strong><a href="https://github.com/OpenRefine/OpenRefine">OpenRefine</a></strong><br>★ 12,069</td>
<td width="260" valign="top"><strong>批量清理表格中的空白、格式和不一致写法</strong><br><br>上手：下载后在本地浏览器使用；有学习成本，Java 要求按发行包说明<details><summary>演示范围</summary>官方资源页推荐的 Google Refine 2.0 经典教程；旧版界面，未实测当前版本。</details></td>
<td width="420" valign="top"><a href="https://www.youtube.com/watch?v=B70J_H_zAWM"><img src="https://i.ytimg.com/vi/B70J_H_zAWM/hqdefault.jpg" width="420" alt="OpenRefine 视频教程封面"></a><br><a href="https://www.youtube.com/watch?v=B70J_H_zAWM">▶ 经典旧版教程</a> · GoogleRefine<br>需访问 YouTube</td>
</tr>
<tr>
<td width="120" valign="top"><a id="paperless-ngx"></a><strong><a href="https://github.com/paperless-ngx/paperless-ngx">Paperless-ngx</a></strong><br>★ 47,071</td>
<td width="260" valign="top"><strong>把票据和扫描件整理成可搜索的文档档案</strong><br><br>上手：需服务器或 NAS，通常用 Docker Compose；部署和备份有门槛<details><summary>演示范围</summary>Techno Tim 第三方部署教程，AI 是可选扩展；未做本轮部署，需访问 YouTube。</details></td>
<td width="420" valign="top"><a href="https://www.youtube.com/watch?v=NMAwHjleqHg"><img src="https://i.ytimg.com/vi/NMAwHjleqHg/hqdefault.jpg" width="420" alt="Paperless-ngx 视频教程封面"></a><br><a href="https://www.youtube.com/watch?v=NMAwHjleqHg">▶ 第三方视频教程</a> · Techno Tim<br>需访问 YouTube</td>
</tr>
<tr>
<td width="120" valign="top"><a id="copytranslator"></a><strong><a href="https://github.com/CopyTranslator/CopyTranslator">CopyTranslator</a></strong><br>★ 18,122</td>
<td width="260" valign="top"><strong>复制一段外文后自动翻译，减少手动粘贴</strong><br><br>上手：桌面安装；在线引擎依赖网络，部分服务需密钥或收费；仅本地模型方案可另行配置<details><summary>演示范围</summary>项目 README 的早期 GIF：复制外文并显示译文；当前 v12 与引擎未实测。</details></td>
<td width="420" valign="top"><img src="https://s1.ax1x.com/2018/11/30/FmrNFS.gif" width="420" alt="CopyTranslator 演示"><br><a href="https://s1.ax1x.com/2018/11/30/FmrNFS.gif">上游 GIF</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="nocodb"></a><strong><a href="https://github.com/nocodb/nocodb">NocoDB</a></strong><br>★ 65,351</td>
<td width="260" valign="top"><strong>用表格、看板和表单管理团队数据</strong><br><br>上手：托管套餐或自部署；采用 Sustainable Use License，并非通用宽松开源许可，商业集成先看条款<details><summary>演示范围</summary>官方 README GIF：分组表格、画廊与看板；权限、导入未测。</details></td>
<td width="420" valign="top"><img src="https://github.com/nocodb/nocodb/assets/86527202/e2fad786-f211-4dcb-9bd3-aaece83a6783" width="420" alt="NocoDB 演示"><br><a href="https://github.com/nocodb/nocodb/assets/86527202/e2fad786-f211-4dcb-9bd3-aaece83a6783">上游 GIF</a></td>
</tr>
</tbody>
</table>

<a id="media-tools"></a>

## 图像、录屏与视频

<table>
<thead><tr><th>工具</th><th>用途与上手门槛</th><th>GIF 演示</th></tr></thead>
<tbody>
<tr>
<td width="120" valign="top"><a id="losslesscut"></a><strong><a href="https://github.com/mifi/lossless-cut">LosslessCut</a></strong><br>★ 45,112</td>
<td width="260" valign="top"><strong>快速无损裁剪音视频</strong><br><br>上手：桌面安装；学习剪切区间与格式限制<details><summary>演示范围</summary>导入视频 → 选取区间 → 无损导出。关键帧裁剪会造成时间边界偏差。</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/losslesscut-demo.mp4"><img src="media/losslesscut-demo.gif" width="420" alt="LosslessCut 实际操作演示"></a><br><a href="https://dogchenya.github.io/everything_ok/media/losslesscut-demo.mp4">MP4 视频</a> · 2× · 20.5 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="screentogif"></a><strong><a href="https://github.com/NickeManarin/ScreenToGif">ScreenToGif</a></strong><br>★ 27,841</td>
<td width="260" valign="top"><strong>录屏并编辑 GIF</strong><br><br>上手：Windows；注意 .NET 运行库要求<details><summary>演示范围</summary>演示由上游项目提供。</details></td>
<td width="420" valign="top"><img src="https://nickemanarin.github.io/ScreenToGif-Website/media/Editor.gif" width="420" alt="ScreenToGif 演示"><br><a href="https://nickemanarin.github.io/ScreenToGif-Website/media/Editor.gif">上游 GIF</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="obs-studio"></a><strong><a href="https://github.com/obsproject/obs-studio">OBS Studio</a></strong><br>★ 77,992</td>
<td width="260" valign="top"><strong>录制教程、直播与多画面内容</strong><br><br>上手：桌面安装；首次需配置画面与音频来源<details><summary>演示范围</summary>添加媒体源 → 适配画布 → 开始与停止录制 → 保存视频。</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/obs-studio-demo.mp4"><img src="media/obs-studio-demo.gif" width="420" alt="OBS Studio 实际操作演示"></a><br><a href="https://dogchenya.github.io/everything_ok/media/obs-studio-demo.mp4">MP4 视频</a> · 3× · 21.1 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="upscayl"></a><strong><a href="https://github.com/upscayl/upscayl">Upscayl</a></strong><br>★ 50,922</td>
<td width="260" valign="top"><strong>用 AI 放大图片</strong><br><br>上手：桌面安装；需兼容的显卡环境<details><summary>演示范围</summary>演示由上游项目提供。</details></td>
<td width="420" valign="top"><a href="https://raw.githubusercontent.com/upscayl/upscayl/main/upscayl.mp4">▶ 上游演示视频</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="squoosh"></a><strong><a href="https://github.com/GoogleChromeLabs/squoosh">Squoosh</a></strong><br>★ 26,057</td>
<td width="260" valign="top"><strong>在浏览器压缩图片，对比画质与文件大小</strong><br><br>上手：打开网页即用；图片压缩在本机进行，网站含统计采集<br><br><strong>步骤 GIF</strong><details><summary>演示范围</summary>实测步骤 GIF：官方示例 2.79 MB → 862 kB；下载未验证。</details></td>
<td width="420" valign="top"><img src="media/squoosh-demo.gif" width="420" alt="Squoosh 演示"><br>步骤 GIF</td>
</tr>
<tr>
<td width="120" valign="top"><a id="penpot"></a><strong><a href="https://github.com/penpot/penpot">Penpot</a></strong><br>★ 61,626</td>
<td width="260" valign="top"><strong>绘制界面原型和矢量设计，协作交付设计稿</strong><br><br>上手：在线版需账号，也可自部署；需要学习设计工具操作<details><summary>演示范围</summary>官方文档旧版 GIF：图形布尔运算；完整原型与协作未测。</details></td>
<td width="420" valign="top"><img src="https://raw.githubusercontent.com/penpot/penpot/develop/docs/img/booleans.gif" width="420" alt="Penpot 演示"><br><a href="https://raw.githubusercontent.com/penpot/penpot/develop/docs/img/booleans.gif">上游 GIF</a></td>
</tr>
</tbody>
</table>

<a id="ai-tools"></a>

## AI 与本地模型

<table>
<thead><tr><th>工具</th><th>用途与上手门槛</th><th>GIF 演示</th></tr></thead>
<tbody>
<tr>
<td width="120" valign="top"><a id="open-webui"></a><strong><a href="https://github.com/open-webui/open-webui">Open WebUI</a></strong><br>★ 156,595</td>
<td width="260" valign="top"><strong>用统一界面与本地或 API 模型对话</strong><br><br>上手：需部署，并连接 Ollama 或兼容 API；不自带免费模型算力<details><summary>演示范围</summary>连接本地模型 → 问答与重试 → 刷新后保留历史。保留了小模型未理解上下文追问的失误。</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/open-webui-demo.mp4"><img src="media/open-webui-demo.gif" width="420" alt="Open WebUI 实际操作演示"></a><br><a href="https://dogchenya.github.io/everything_ok/media/open-webui-demo.mp4">MP4 视频</a> · 3× · 19.3 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="ollama"></a><strong><a href="https://github.com/ollama/ollama">Ollama</a></strong><br>★ 184,505</td>
<td width="260" valign="top"><strong>在自己的电脑上运行和使用开放模型</strong><br><br>上手：安装后下载模型，需足够内存和磁盘；云模型另计<details><summary>演示范围</summary>本地模型翻译与执行指标。画面是录制用 API 测试客户端，非官方桌面界面。</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/ollama-demo.mp4"><img src="media/ollama-demo.gif" width="420" alt="Ollama 实际操作演示"></a><br><a href="https://dogchenya.github.io/everything_ok/media/ollama-demo.mp4">MP4 视频</a> · 2× · 10.7 s</td>
</tr>
</tbody>
</table>

<a id="developer-tools"></a>

## 开发与自动化

<table>
<thead><tr><th>工具</th><th>用途与上手门槛</th><th>GIF 演示</th></tr></thead>
<tbody>
<tr>
<td width="120" valign="top"><a id="hoppscotch"></a><strong><a href="https://github.com/hoppscotch/hoppscotch">Hoppscotch</a></strong><br>★ 80,677</td>
<td width="260" valign="top"><strong>发送请求并调试 API</strong><br><br>上手：需要 API 基础；部分连接需额外配置<br><br><strong>步骤 GIF</strong><details><summary>演示范围</summary>发送 GET 请求 → 查看 200 OK 响应。此处为步骤 GIF。</details></td>
<td width="420" valign="top"><img src="media/hoppscotch-demo.gif" width="420" alt="Hoppscotch 演示"><br>步骤 GIF</td>
</tr>
<tr>
<td width="120" valign="top"><a id="n8n"></a><strong><a href="https://github.com/n8n-io/n8n">n8n</a></strong><br>★ 208,428</td>
<td width="260" valign="top"><strong>把重复的跨应用操作串成自动化流程</strong><br><br>上手：需自部署或云账号；第三方集成可能需要授权、付费<details><summary>演示范围</summary>导入三节点模板 → 修改输入 → 执行成功 → 检查输出；不需要外部账号或 API。</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/n8n-demo.mp4"><img src="media/n8n-demo.gif" width="420" alt="n8n 实际操作演示"></a><br><a href="https://dogchenya.github.io/everything_ok/media/n8n-demo.mp4">MP4 视频</a> · 3× · 20.0 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="fzf"></a><strong><a href="https://github.com/junegunn/fzf">fzf</a></strong><br>★ 83,751</td>
<td width="260" valign="top"><strong>在终端中模糊搜索文件和命令历史</strong><br><br>上手：命令行安装；需要终端基础<details><summary>演示范围</summary>项目作者维护的功能 GIF，展示终端中的模糊筛选；素材界面可能与当前版本不同，非本轮实测。</details></td>
<td width="420" valign="top"><img src="https://raw.githubusercontent.com/junegunn/i/master/fzf.gif" width="420" alt="fzf 演示"><br><a href="https://raw.githubusercontent.com/junegunn/i/master/fzf.gif">上游 GIF</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="lazygit"></a><strong><a href="https://github.com/jesseduffield/lazygit">Lazygit</a></strong><br>★ 83,396</td>
<td width="260" valign="top"><strong>用终端界面查看改动、暂存和提交 Git 代码</strong><br><br>上手：安装 Git 与 Lazygit；需要 Git 基础<details><summary>演示范围</summary>上游 README 的 commit_and_push 视频展示暂存、提交与推送；仅观看官方素材，未操作用户仓库。</details></td>
<td width="420" valign="top"><a href="https://github.com/user-attachments/assets/031799d1-740d-4cda-90cf-689513fa9860"><img src="media/lazygit-demo.gif" width="420" alt="Lazygit 上游视频预览"></a><br><a href="https://github.com/user-attachments/assets/031799d1-740d-4cda-90cf-689513fa9860">上游视频</a> · 11.4 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="beekeeper-studio"></a><strong><a href="https://github.com/beekeeper-studio/beekeeper-studio">Beekeeper Studio</a></strong><br>★ 23,788</td>
<td width="260" valign="top"><strong>用图形界面连接数据库、运行 SQL 和查看数据</strong><br><br>上手：桌面安装；需数据库连接信息，部分功能与数据库支持付费<details><summary>演示范围</summary>官方仓库提供的数据库客户端 GIF，包含连接与查询界面；不保证素材中的所有功能均属于免费版，未做本轮实测。</details></td>
<td width="420" valign="top"><img src="https://raw.githubusercontent.com/beekeeper-studio/beekeeper-studio/master/apps/studio/screenshots/beekeeper-studio-demo.gif" width="420" alt="Beekeeper Studio 演示"><br><a href="https://raw.githubusercontent.com/beekeeper-studio/beekeeper-studio/master/apps/studio/screenshots/beekeeper-studio-demo.gif">上游 GIF</a></td>
</tr>
</tbody>
</table>

<a id="photos"></a>

## 照片管理

<table>
<thead><tr><th>工具</th><th>用途与上手门槛</th><th>GIF 演示</th></tr></thead>
<tbody>
<tr>
<td width="120" valign="top"><a id="immich"></a><strong><a href="https://github.com/immich-app/immich">Immich</a></strong><br>★ 117,038</td>
<td width="260" valign="top"><strong>搭建自己的照片管理服务</strong><br><br>上手：需要服务器、Docker、存储维护<br><br><strong>步骤 GIF</strong><details><summary>演示范围</summary>官方公开演示：照片时间线 → 相册。步骤 GIF；实例禁用上传，未演示上传。</details></td>
<td width="420" valign="top"><img src="media/immich-demo.gif" width="420" alt="Immich 演示"><br>步骤 GIF</td>
</tr>
</tbody>
</table>

## 说明与补充项目

有些项目需要服务器、模型或付费 API，使用前请查看官方许可和费用。星标不代表质量保证；演示仅覆盖所注明的功能。

[演示来源与实测范围](docs/MEDIA.md) · [推荐一个工具](https://github.com/dogchenya/everything_ok/issues/new) · [收录规范与维护](CONTRIBUTING.md)
