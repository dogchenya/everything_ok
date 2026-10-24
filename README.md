# everything_ok

[English](README.en.md) · [视频版网页](https://dogchenya.github.io/everything_ok/)

好用的 GitHub 工具，按用途分类，先看演示再决定要不要用。

**想简单分享文件？**同一网络传文件看 [LocalSend](#localsend)，不想安装看 [PairDrop](#pairdrop)，跨目录收集打包看 [GatherPack](#gatherpack)。

录屏已转为 GIF，在 README 中直接播放；点动图下方的「MP4 视频」可打开清晰版。录屏默认 2–3 倍速，原速版也保留。

[文件分享与整理 · 4](#file-sharing) · [文档与日常效率 · 4](#office) · [图像、录屏与视频 · 4](#media-tools) · [AI 与本地模型 · 2](#ai-tools) · [开发与自动化 · 2](#developer-tools) · [照片管理 · 1](#photos)

共 17 个已审核项目。星标快照：2026-10-24；上游素材、步骤 GIF 和部分实测会单独标明。

<a id="file-sharing"></a>

## 文件分享与整理

临时发文件优先看前两个；整理成包用 GatherPack，长期保持文件一致再考虑 Syncthing。

<a id="localsend"></a>

### [LocalSend](https://github.com/localsend/localsend)

**跨设备局域网传文件**

上手：下载安装；设备需能互相访问 · ★ 95,358

![LocalSend 实际操作演示](media/localsend-demo.gif)

[MP4 视频](https://dogchenya.github.io/everything_ok/media/localsend-demo.mp4) · 2× · 12.5 s · [原速版](https://dogchenya.github.io/everything_ok/media/normal-speed/localsend-demo.mp4)

接受文件 → 接收完成。发送端是本机协议测试客户端，未展示两台实体设备互传。

<a id="pairdrop"></a>

### [PairDrop](https://github.com/schlagmichdoch/PairDrop)

**浏览器跨设备传文件**

上手：网页即用；自部署需服务器环境 · ★ 11,663

![PairDrop 演示](https://raw.githubusercontent.com/schlagmichdoch/PairDrop/master/docs/pairdrop_screenshot_mobile.gif)

[上游 GIF 来源](https://github.com/schlagmichdoch/PairDrop/blob/master/docs/pairdrop_screenshot_mobile.gif)

演示由上游项目提供，保留原始来源。

<a id="gatherpack"></a>

### [GatherPack](https://github.com/dogchenya/GatherPack) · 自有项目

**跨目录收集文件，一次打包带走**

上手：桌面安装；Alpha 阶段，查看平台验证限制 · ★ 0

![GatherPack 实际操作演示](media/gatherpack-demo.gif)

[MP4 视频](https://dogchenya.github.io/everything_ok/media/gatherpack-demo.mp4) · 2× · 25.5 s · [原速版](https://dogchenya.github.io/everything_ok/media/normal-speed/gatherpack-demo.mp4)

从两个目录收集文件 → 检查目录 → ZIP 打包；写入 2 个文件，失败 0。

<a id="syncthing"></a>

### [Syncthing](https://github.com/syncthing/syncthing)

**让多台设备上的文件夹自动保持同步**

上手：两端安装并配对，需要配置同步目录 · ★ 89,671

![Syncthing 实际操作演示](media/syncthing-demo.gif)

[MP4 视频](https://dogchenya.github.io/everything_ok/media/syncthing-demo.mp4) · 2× · 15.1 s · [原速版](https://dogchenya.github.io/everything_ok/media/normal-speed/syncthing-demo.mp4)

本机两个隔离实例：写入文件 → 同步 → 接收端核对内容。

<a id="office"></a>

## 文档与日常效率

<a id="stirling-pdf"></a>

### [Stirling PDF](https://github.com/Stirling-Tools/Stirling-PDF)

**合并、拆分、转换和处理 PDF**

上手：桌面或自部署；区分社区功能与付费方案 · ★ 94,822

![Stirling PDF 实际操作演示](media/stirling-pdf-demo.gif)

[MP4 视频](https://dogchenya.github.io/everything_ok/media/stirling-pdf-demo.mp4) · 2× · 16.3 s · [原速版](https://dogchenya.github.io/everything_ok/media/normal-speed/stirling-pdf-demo.mp4)

导入两份 PDF → 合并 → 翻页检查 → 下载，结果页数与顺序已核对。

<a id="excalidraw"></a>

### [Excalidraw](https://github.com/excalidraw/excalidraw)

**手绘风格白板，快速解释流程与想法**

上手：网页打开即可；团队增值服务另计 · ★ 134,441

![Excalidraw 实际操作演示](media/excalidraw-demo.gif)

[MP4 视频](https://dogchenya.github.io/everything_ok/media/excalidraw-demo.mp4) · 2× · 14.2 s · [原速版](https://dogchenya.github.io/everything_ok/media/normal-speed/excalidraw-demo.mp4)

绘制双语流程图 → 导出预览。文件导出尚未验证，本项为部分流程。

<a id="powertoys"></a>

### [PowerToys](https://github.com/microsoft/PowerToys)

**Windows 效率工具集**

上手：Windows；安装后启用所需功能 · ★ 139,688

[▶ 查看上游演示视频](https://raw.githubusercontent.com/microsoft/PowerToys/main/src/settings-ui/Settings.UI/Assets/Settings/Modules/OOBE/FancyZones.mp4)

演示由上游项目提供，保留原始来源。

<a id="flow-launcher"></a>

### [Flow Launcher](https://github.com/Flow-Launcher/Flow.Launcher)

**搜索文件、快速启动应用**

上手：Windows 桌面安装 · ★ 15,855

![Flow Launcher 演示](https://user-images.githubusercontent.com/6903107/207167068-2196d2a3-2caa-4856-958b-a780fbda95c6.gif)

[上游 GIF 来源](https://user-images.githubusercontent.com/6903107/207167068-2196d2a3-2caa-4856-958b-a780fbda95c6.gif)

演示由上游项目提供，保留原始来源。

<a id="media-tools"></a>

## 图像、录屏与视频

<a id="losslesscut"></a>

### [LosslessCut](https://github.com/mifi/lossless-cut)

**快速无损裁剪音视频**

上手：桌面安装；学习剪切区间与格式限制 · ★ 45,112

![LosslessCut 实际操作演示](media/losslesscut-demo.gif)

[MP4 视频](https://dogchenya.github.io/everything_ok/media/losslesscut-demo.mp4) · 2× · 20.5 s · [原速版](https://dogchenya.github.io/everything_ok/media/normal-speed/losslesscut-demo.mp4)

导入视频 → 选取区间 → 无损导出。关键帧裁剪会造成时间边界偏差。

<a id="screentogif"></a>

### [ScreenToGif](https://github.com/NickeManarin/ScreenToGif)

**录屏并编辑 GIF**

上手：Windows；注意 .NET 运行库要求 · ★ 27,841

![ScreenToGif 演示](https://nickemanarin.github.io/ScreenToGif-Website/media/Editor.gif)

[上游 GIF 来源](https://nickemanarin.github.io/ScreenToGif-Website/media/Editor.gif)

演示由上游项目提供，保留原始来源。

<a id="obs-studio"></a>

### [OBS Studio](https://github.com/obsproject/obs-studio)

**录制教程、直播与多画面内容**

上手：桌面安装；首次需配置画面与音频来源 · ★ 77,992

![OBS Studio 实际操作演示](media/obs-studio-demo.gif)

[MP4 视频](https://dogchenya.github.io/everything_ok/media/obs-studio-demo.mp4) · 3× · 21.1 s · [原速版](https://dogchenya.github.io/everything_ok/media/normal-speed/obs-studio-demo.mp4)

添加媒体源 → 适配画布 → 开始与停止录制 → 保存视频。

<a id="upscayl"></a>

### [Upscayl](https://github.com/upscayl/upscayl)

**用 AI 放大图片**

上手：桌面安装；需兼容的显卡环境 · ★ 50,922

[▶ 查看上游演示视频](https://raw.githubusercontent.com/upscayl/upscayl/main/upscayl.mp4)

演示由上游项目提供，保留原始来源。

<a id="ai-tools"></a>

## AI 与本地模型

<a id="open-webui"></a>

### [Open WebUI](https://github.com/open-webui/open-webui)

**用统一界面与本地或 API 模型对话**

上手：需部署，并连接 Ollama 或兼容 API；不自带免费模型算力 · ★ 156,595

![Open WebUI 实际操作演示](media/open-webui-demo.gif)

[MP4 视频](https://dogchenya.github.io/everything_ok/media/open-webui-demo.mp4) · 3× · 19.3 s · [原速版](https://dogchenya.github.io/everything_ok/media/normal-speed/open-webui-demo.mp4)

连接本地模型 → 问答与重试 → 刷新后保留历史。保留了小模型未理解上下文追问的失误。

<a id="ollama"></a>

### [Ollama](https://github.com/ollama/ollama)

**在自己的电脑上运行和使用开放模型**

上手：安装后下载模型，需足够内存和磁盘；云模型另计 · ★ 184,505

![Ollama 实际操作演示](media/ollama-demo.gif)

[MP4 视频](https://dogchenya.github.io/everything_ok/media/ollama-demo.mp4) · 2× · 10.7 s · [原速版](https://dogchenya.github.io/everything_ok/media/normal-speed/ollama-demo.mp4)

本地模型翻译与执行指标。画面是录制用 API 测试客户端，非官方桌面界面。

<a id="developer-tools"></a>

## 开发与自动化

<a id="hoppscotch"></a>

### [Hoppscotch](https://github.com/hoppscotch/hoppscotch)

**发送请求并调试 API**

上手：需要 API 基础；部分连接需额外配置 · ★ 80,677

![Hoppscotch 演示](media/hoppscotch-demo.gif)

发送 GET 请求 → 查看 200 OK 响应。此处为步骤 GIF。

<a id="n8n"></a>

### [n8n](https://github.com/n8n-io/n8n)

**把重复的跨应用操作串成自动化流程**

上手：需自部署或云账号；第三方集成可能需要授权、付费 · ★ 208,428

![n8n 实际操作演示](media/n8n-demo.gif)

[MP4 视频](https://dogchenya.github.io/everything_ok/media/n8n-demo.mp4) · 3× · 20.0 s · [原速版](https://dogchenya.github.io/everything_ok/media/normal-speed/n8n-demo.mp4)

导入三节点模板 → 修改输入 → 执行成功 → 检查输出；不需要外部账号或 API。

<a id="photos"></a>

## 照片管理

<a id="immich"></a>

### [Immich](https://github.com/immich-app/immich)

**搭建自己的照片管理服务**

上手：需要服务器、Docker、存储维护 · ★ 117,038

![Immich 演示](media/immich-demo.gif)

官方公开演示：照片时间线 → 相册。步骤 GIF；实例禁用上传，未演示上传。

## 说明与补充项目

有些项目需要服务器、模型或付费 API，使用前请查看官方许可和费用。星标不代表质量保证；演示仅覆盖所注明的功能。

[演示来源与实测范围](docs/MEDIA.md) · [推荐一个工具](https://github.com/dogchenya/everything_ok/issues/new) · [收录规范与维护](CONTRIBUTING.md)
