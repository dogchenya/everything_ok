# everything_ok

[简体中文](README.md) · [GitHub](https://github.com/dogchenya/everything_ok)

Useful GitHub tools you can understand before installing. **17 reviewed projects** with Chinese/English introductions, setup requirements and demos.

**Play the demos:** clone or download this repository and open [index.html](index.html) in a browser. No dependencies required. GitHub’s file viewer shows HTML source.

Nine recorded core workflows, one partial recording, two step GIFs and five upstream demos. Local recordings play at 2–3×, retaining workflow stages and results, with normal-speed copies. Excalidraw was reviewed but file export remains unverified.

GitHub stars checked on 2026-10-24. Newly selected projects exceeded 50,000 stars; other previously approved tools are retained. GatherPack is explicitly included as an own project. Stars are not a quality guarantee.

| Project | ★ | Purpose | Requirements | Demo |
| --- | ---: | --- | --- | --- |
| [Excalidraw](https://github.com/excalidraw/excalidraw) | 134,441 | Sketch diagrams and explain ideas on a hand-drawn whiteboard | Open the web app; paid collaboration offerings are separate | [Partial workflow](#excalidraw) |
| [LocalSend](https://github.com/localsend/localsend) | 95,358 | Share files across nearby devices | Install on devices that can reach each other | [Recorded workflow](#localsend) |
| [Stirling PDF](https://github.com/Stirling-Tools/Stirling-PDF) | 94,822 | Merge, split, convert and process PDFs | Desktop or self-hosted; distinguish community features and paid plans | [Recorded workflow](#stirling-pdf) |
| [Syncthing](https://github.com/syncthing/syncthing) | 89,671 | Keep folders synchronized across your devices | Install and pair devices, then choose synchronized folders | [Recorded workflow](#syncthing) |
| [OBS Studio](https://github.com/obsproject/obs-studio) | 77,992 | Record tutorials, stream and compose multiple sources | Desktop installation; configure video and audio sources | [Recorded workflow](#obs-studio) |
| [LosslessCut](https://github.com/mifi/lossless-cut) | 45,112 | Trim audio and video without re-encoding | Desktop installation; learn ranges and format limitations | [Recorded workflow](#losslesscut) |
| [GatherPack](https://github.com/dogchenya/GatherPack) (own project) | 0 | Collect scattered files and archive them together | Desktop installation; Alpha, with platform validation limits | [Recorded workflow](#gatherpack) |
| [PowerToys](https://github.com/microsoft/PowerToys) | 139,688 | Productivity utilities for Windows | Windows; install and enable selected utilities | [Upstream media](#powertoys) |
| [Upscayl](https://github.com/upscayl/upscayl) | 50,922 | Upscale images with AI | Desktop installation; requires compatible graphics hardware | [Upstream media](#upscayl) |
| [ScreenToGif](https://github.com/NickeManarin/ScreenToGif) | 27,841 | Record and edit screen GIFs | Windows; check .NET runtime requirements | [Upstream media](#screentogif) |
| [Flow Launcher](https://github.com/Flow-Launcher/Flow.Launcher) | 15,855 | Find files and launch apps quickly | Windows desktop installation | [Upstream media](#flow-launcher) |
| [PairDrop](https://github.com/schlagmichdoch/PairDrop) | 11,663 | Transfer files between browsers | Use the hosted app; self-hosting needs a server | [Upstream media](#pairdrop) |
| [n8n](https://github.com/n8n-io/n8n) | 208,428 | Connect apps and automate repetitive workflows | Self-host or use a cloud account; integrations may require credentials or fees | [Recorded workflow](#n8n) |
| [Ollama](https://github.com/ollama/ollama) | 184,505 | Run and use open models on your own computer | Install and download models; sufficient RAM and storage required; cloud plans differ | [Recorded workflow](#ollama) |
| [Open WebUI](https://github.com/open-webui/open-webui) | 156,595 | Chat with local and API models through one interface | Requires deployment and Ollama or a compatible API; compute is separate | [Recorded workflow](#open-webui) |
| [Immich](https://github.com/immich-app/immich) | 117,038 | Host your own photo library | Requires a server, Docker and storage maintenance | [Step GIF](#immich) |
| [Hoppscotch](https://github.com/hoppscotch/hoppscotch) | 80,677 | Send requests and test APIs | Requires API basics; some connections need extra configuration | [Step GIF](#hoppscotch) |

## Demos

<a id="excalidraw"></a>

### [Excalidraw](https://github.com/excalidraw/excalidraw)

Sketch diagrams and explain ideas on a hand-drawn whiteboard。 Open the web app; paid collaboration offerings are separate

[![Excalidraw demo](media/excalidraw-demo.jpg)](media/excalidraw-demo.mp4)

[Play video](media/excalidraw-demo.mp4) · 2× · 14.2 s · [Normal speed](media/normal-speed/excalidraw-demo.mp4)

官方 npm 开源组件 0.18.1 本地演示：双语流程节点、连接箭头及完整图导出预览；实际屏幕采集经剪辑。PNG 保存未验证成功，不能计为导出实测完成 / Official component hosted locally; actual drawing and export-preview footage. PNG file saving remains unverified.

<a id="localsend"></a>

### [LocalSend](https://github.com/localsend/localsend)

Share files across nearby devices。 Install on devices that can reach each other

[![LocalSend demo](media/localsend-demo.jpg)](media/localsend-demo.mp4)

[Play video](media/localsend-demo.mp4) · 2× · 12.5 s · [Normal speed](media/normal-speed/localsend-demo.mp4)

官方 LocalSend 1.18.2 实际接收录屏：确认发送方 → 接受 → 传输进度 → 完成；187,200 字节，接收文件 SHA-256 与发送端一致。同一台电脑上的协议测试端发送，不是两台实体设备，未录官方发送端 UI / Actual official-app receiving workflow. An isolated protocol client sends on the same computer; no second physical device or official sending UI is claimed. Received bytes verified equal.

<a id="stirling-pdf"></a>

### [Stirling PDF](https://github.com/Stirling-Tools/Stirling-PDF)

Merge, split, convert and process PDFs。 Desktop or self-hosted; distinguish community features and paid plans

[![Stirling PDF demo](media/stirling-pdf-demo.jpg)](media/stirling-pdf-demo.mp4)

[Play video](media/stirling-pdf-demo.mp4) · 2× · 16.3 s · [Normal speed](media/normal-speed/stirling-pdf-demo.mp4)

官方 Stirling PDF 3.2.1 本地部署：导入两份单页 PDF → 合并 → 翻页 → 下载。已核对结果为 2 页，正文和顺序正确。Windows 环境补齐官方 JPDFium 1.1.6 平台依赖后实测通过 / Official locally hosted deployment: import, merge, inspect and download. Two pages and content order verified; official Windows native dependency added.

<a id="syncthing"></a>

### [Syncthing](https://github.com/syncthing/syncthing)

Keep folders synchronized across your devices。 Install and pair devices, then choose synchronized folders

[![Syncthing demo](media/syncthing-demo.jpg)](media/syncthing-demo.mp4)

[Play video](media/syncthing-demo.mp4) · 2× · 15.1 s · [Normal speed](media/normal-speed/syncthing-demo.mp4)

本机双实例隔离演示：示例文件写入 → 重新扫描 → 接收端出现文件与最近更改；两端内容一致。实际连续屏幕采集，约 5 帧/秒 / Two isolated local nodes; actual timed screen capture; received contents verified equal.

<a id="obs-studio"></a>

### [OBS Studio](https://github.com/obsproject/obs-studio)

Record tutorials, stream and compose multiple sources。 Desktop installation; configure video and audio sources

[![OBS Studio demo](media/obs-studio-demo.jpg)](media/obs-studio-demo.mp4)

[Play video](media/obs-studio-demo.mp4) · 3× · 21.1 s · [Normal speed](media/normal-speed/obs-studio-demo.mp4)

官方 OBS 33.0.0 便携版实际操作：添加媒体源 → 导入合成视频 → 循环播放 → 适配画布 → 开始/停止录制 → 保存。确实生成 1280×720、约 15.33 秒的 H.264 视频；本次展示媒体源录制，未展示直播、摄像头或屏幕采集 / Actual official OBS workflow, verified output. Demonstrates media-source recording; streaming, webcam and display capture are not demonstrated.

<a id="losslesscut"></a>

### [LosslessCut](https://github.com/mifi/lossless-cut)

Trim audio and video without re-encoding。 Desktop installation; learn ranges and format limitations

[![LosslessCut demo](media/losslesscut-demo.jpg)](media/losslesscut-demo.mp4)

[Play video](media/losslesscut-demo.mp4) · 2× · 20.5 s · [Normal speed](media/normal-speed/losslesscut-demo.mp4)

官方 LosslessCut 3.70.1 实际录屏：12 秒合成片 → 标记 2.282–8.000 秒区间 → MP4 导出 → 成功。实际输出约 6.18 秒；关键帧裁剪存在边界偏差。183 个导出视频压缩数据包均与源片连续片段完全一致，已验证视频未重编码 / Actual editing/export workflow. Output ~6.18 s; keyframe cuts shift boundaries. All 183 compressed video packets match an input subsequence; no video re-encoding.

<a id="gatherpack"></a>

### [GatherPack](https://github.com/dogchenya/GatherPack)

Collect scattered files and archive them together。 Desktop installation; Alpha, with platform validation limits

[![GatherPack demo](media/gatherpack-demo.jpg)](media/gatherpack-demo.mp4)

[Play video](media/gatherpack-demo.mp4) · 2× · 25.5 s · [Normal speed](media/normal-speed/gatherpack-demo.mp4)

两个目录添加文件 → 检查目录 → ZIP 打包 → 写入 2、失败 0；真实录屏经剪辑，ZIP 完整性校验通过 / Edited actual recording; two files collected and ZIP integrity verified.

<a id="powertoys"></a>

### [PowerToys](https://github.com/microsoft/PowerToys)

Productivity utilities for Windows。 Windows; install and enable selected utilities

[Upstream demo video](https://github.com/microsoft/PowerToys/blob/main/src/settings-ui/Settings.UI/Assets/Settings/Modules/OOBE/FancyZones.mp4)

上游 FancyZones 功能视频 / Upstream FancyZones video

<a id="upscayl"></a>

### [Upscayl](https://github.com/upscayl/upscayl)

Upscale images with AI。 Desktop installation; requires compatible graphics hardware

[Upstream demo video](https://github.com/upscayl/upscayl/blob/main/upscayl.mp4)

上游视频 / Upstream video

<a id="screentogif"></a>

### [ScreenToGif](https://github.com/NickeManarin/ScreenToGif)

Record and edit screen GIFs。 Windows; check .NET runtime requirements

![ScreenToGif demo](https://nickemanarin.github.io/ScreenToGif-Website/media/Editor.gif)

[Demo source](https://nickemanarin.github.io/ScreenToGif-Website/media/Editor.gif)

上游编辑器 GIF / Upstream editor GIF

<a id="flow-launcher"></a>

### [Flow Launcher](https://github.com/Flow-Launcher/Flow.Launcher)

Find files and launch apps quickly。 Windows desktop installation

![Flow Launcher demo](https://user-images.githubusercontent.com/6903107/207167068-2196d2a3-2caa-4856-958b-a780fbda95c6.gif)

[Demo source](https://user-images.githubusercontent.com/6903107/207167068-2196d2a3-2caa-4856-958b-a780fbda95c6.gif)

上游 README 中的 GIF / GIF linked in upstream README

<a id="pairdrop"></a>

### [PairDrop](https://github.com/schlagmichdoch/PairDrop)

Transfer files between browsers。 Use the hosted app; self-hosting needs a server

![PairDrop demo](https://raw.githubusercontent.com/schlagmichdoch/PairDrop/master/docs/pairdrop_screenshot_mobile.gif)

[Demo source](https://github.com/schlagmichdoch/PairDrop/blob/master/docs/pairdrop_screenshot_mobile.gif)

上游 GIF / Upstream GIF

<a id="n8n"></a>

### [n8n](https://github.com/n8n-io/n8n)

Connect apps and automate repetitive workflows。 Self-host or use a cloud account; integrations may require credentials or fees

[![n8n demo](media/n8n-demo.jpg)](media/n8n-demo.mp4)

[Play video](media/n8n-demo.mp4) · 3× · 20.0 s · [Normal speed](media/normal-speed/n8n-demo.mp4)

官方 n8n 2.44.6 本地隔离实例：导入三节点模板 → 查看并修改输入参数 → 执行 → 核对真实输出。三个节点均成功；修改后的受众、zh/en 语言标记和 pending_review 状态已在输出表格核对。不使用外部账号、API 或模型；演示数据不修改主站人工审核记录 / Actual local execution with three successful nodes and verified output. No external credentials or models; demo output does not modify the catalog human reviews.

<a id="ollama"></a>

### [Ollama](https://github.com/ollama/ollama)

Run and use open models on your own computer。 Install and download models; sufficient RAM and storage required; cloud plans differ

[![Ollama demo](media/ollama-demo.jpg)](media/ollama-demo.mp4)

[Play video](media/ollama-demo.mp4) · 2× · 10.7 s · [Normal speed](media/normal-speed/ollama-demo.mp4)

官方 Ollama 0.40.10 CPU 服务和 qwen2.5:0.5b：选择已下载模型 → 输入翻译问题 → 实际流式推理 → 核对回答与耗时。画面是明确标注的 API 测试客户端，并非 Ollama 官方桌面界面；输出来自真实本地模型。只验证此问答流程，未覆盖其他模型、工具调用或部署功能 / Real local inference via a labelled API test client, not the official desktop UI. Only this prompt workflow is verified.

<a id="open-webui"></a>

### [Open WebUI](https://github.com/open-webui/open-webui)

Chat with local and API models through one interface。 Requires deployment and Ollama or a compatible API; compute is separate

[![Open WebUI demo](media/open-webui-demo.jpg)](media/open-webui-demo.mp4)

[Play video](media/open-webui-demo.mp4) · 3× · 19.3 s · [Normal speed](media/normal-speed/open-webui-demo.mp4)

官方 Open WebUI 0.12.3 本地隔离部署（官方 slim 依赖，保留登录认证），连接实际 Ollama / qwen2.5:0.5b：输入问题 → 中文翻译 → 追问 → 明确原文重试 → 英文翻译 → 刷新核对三轮历史。保留小模型未理解上下文追问的真实失误，未声称已验证知识库、语音或工具调用 / Actual official UI and model responses, including a failed implicit follow-up and successful explicit retry; all three turns survive reload. Knowledge, voice and tool calling are not verified.

<a id="immich"></a>

### [Immich](https://github.com/immich-app/immich)

Host your own photo library。 Requires a server, Docker and storage maintenance

![Immich demo](media/immich-demo.gif)

[Demo source](media/immich-demo.gif)

官方公开演示账号；照片时间线→相册。实例禁用上传，未演示上传 / Official public demo account; timeline to albums. Uploads are disabled and not demonstrated

<a id="hoppscotch"></a>

### [Hoppscotch](https://github.com/hoppscotch/hoppscotch)

Send requests and test APIs。 Requires API basics; some connections need extra configuration

![Hoppscotch demo](media/hoppscotch-demo.gif)

[Demo source](media/hoppscotch-demo.gif)

官方在线实例；公开 echo 接口 GET→200 OK / Official hosted app; public echo GET request to 200 OK

## Costs, licenses and media

Some tools require hosting, models or paid APIs. Source availability does not imply that all features are free. Projects including n8n and Open WebUI have specific license terms; check their current documentation. Upstream demos remain linked to their original sources.

[Media and verification notes](docs/MEDIA.md) · [Contribution guide](CONTRIBUTING.md)

## Maintenance and local review

`node scripts/build.mjs` regenerates the READMEs and gallery from catalog data.

`node review/server.mjs` starts the local review interface: http://127.0.0.1:43121/

Review notes and raw capture data stay local. AppFlowy, RustDesk and Dify are omitted from this release because their recordings were not completed.
