# 演示与素材 / Demos and media

本批 17 个项目已通过人工审核。视频展示选定场景，不代表软件全部功能均已覆盖。

All 17 projects in this release passed human review. Each demo covers a selected scenario, not every software feature.

| 项目 / Project | 类型 / Type | 来源 / Source | 范围与限制 / Scope |
| --- | --- | --- | --- |
| Excalidraw | 部分流程视频 / Partial workflow | [演示 / Demo](../media/excalidraw-demo.mp4) | 官方 npm 开源组件 0.18.1 本地演示：双语流程节点、连接箭头及完整图导出预览；实际屏幕采集经剪辑。PNG 保存未验证成功，不能计为导出实测完成 / Official component hosted locally; actual drawing and export-preview footage. PNG file saving remains unverified. |
| LocalSend | 实际操作视频 / Recorded workflow | [演示 / Demo](../media/localsend-demo.mp4) | 官方 LocalSend 1.18.2 实际接收录屏：确认发送方 → 接受 → 传输进度 → 完成；187,200 字节，接收文件 SHA-256 与发送端一致。同一台电脑上的协议测试端发送，不是两台实体设备，未录官方发送端 UI / Actual official-app receiving workflow. An isolated protocol client sends on the same computer; no second physical device or official sending UI is claimed. Received bytes verified equal. |
| Stirling PDF | 实际操作视频 / Recorded workflow | [演示 / Demo](../media/stirling-pdf-demo.mp4) | 官方 Stirling PDF 3.2.1 本地部署：导入两份单页 PDF → 合并 → 翻页 → 下载。已核对结果为 2 页，正文和顺序正确。Windows 环境补齐官方 JPDFium 1.1.6 平台依赖后实测通过 / Official locally hosted deployment: import, merge, inspect and download. Two pages and content order verified; official Windows native dependency added. |
| Syncthing | 实际操作视频 / Recorded workflow | [演示 / Demo](../media/syncthing-demo.mp4) | 本机双实例隔离演示：示例文件写入 → 重新扫描 → 接收端出现文件与最近更改；两端内容一致。实际连续屏幕采集，约 5 帧/秒 / Two isolated local nodes; actual timed screen capture; received contents verified equal. |
| OBS Studio | 实际操作视频 / Recorded workflow | [演示 / Demo](../media/obs-studio-demo.mp4) | 官方 OBS 33.0.0 便携版实际操作：添加媒体源 → 导入合成视频 → 循环播放 → 适配画布 → 开始/停止录制 → 保存。确实生成 1280×720、约 15.33 秒的 H.264 视频；本次展示媒体源录制，未展示直播、摄像头或屏幕采集 / Actual official OBS workflow, verified output. Demonstrates media-source recording; streaming, webcam and display capture are not demonstrated. |
| LosslessCut | 实际操作视频 / Recorded workflow | [演示 / Demo](../media/losslesscut-demo.mp4) | 官方 LosslessCut 3.70.1 实际录屏：12 秒合成片 → 标记 2.282–8.000 秒区间 → MP4 导出 → 成功。实际输出约 6.18 秒；关键帧裁剪存在边界偏差。183 个导出视频压缩数据包均与源片连续片段完全一致，已验证视频未重编码 / Actual editing/export workflow. Output ~6.18 s; keyframe cuts shift boundaries. All 183 compressed video packets match an input subsequence; no video re-encoding. |
| GatherPack | 实际操作视频 / Recorded workflow | [演示 / Demo](../media/gatherpack-demo.mp4) | 两个目录添加文件 → 检查目录 → ZIP 打包 → 写入 2、失败 0；真实录屏经剪辑，ZIP 完整性校验通过 / Edited actual recording; two files collected and ZIP integrity verified. |
| PowerToys | 上游素材 / Upstream media | [演示 / Demo](https://github.com/microsoft/PowerToys/blob/main/src/settings-ui/Settings.UI/Assets/Settings/Modules/OOBE/FancyZones.mp4) | 上游 FancyZones 功能视频 / Upstream FancyZones video |
| Upscayl | 上游素材 / Upstream media | [演示 / Demo](https://github.com/upscayl/upscayl/blob/main/upscayl.mp4) | 上游视频 / Upstream video |
| ScreenToGif | 上游素材 / Upstream media | [演示 / Demo](https://nickemanarin.github.io/ScreenToGif-Website/media/Editor.gif) | 上游编辑器 GIF / Upstream editor GIF |
| Flow Launcher | 上游素材 / Upstream media | [演示 / Demo](https://user-images.githubusercontent.com/6903107/207167068-2196d2a3-2caa-4856-958b-a780fbda95c6.gif) | 上游 README 中的 GIF / GIF linked in upstream README |
| PairDrop | 上游素材 / Upstream media | [演示 / Demo](https://github.com/schlagmichdoch/PairDrop/blob/master/docs/pairdrop_screenshot_mobile.gif) | 上游 GIF / Upstream GIF |
| n8n | 实际操作视频 / Recorded workflow | [演示 / Demo](../media/n8n-demo.mp4) | 官方 n8n 2.44.6 本地隔离实例：导入三节点模板 → 查看并修改输入参数 → 执行 → 核对真实输出。三个节点均成功；修改后的受众、zh/en 语言标记和 pending_review 状态已在输出表格核对。不使用外部账号、API 或模型；演示数据不修改主站人工审核记录 / Actual local execution with three successful nodes and verified output. No external credentials or models; demo output does not modify the catalog human reviews. |
| Ollama | 实际操作视频 / Recorded workflow | [演示 / Demo](../media/ollama-demo.mp4) | 官方 Ollama 0.40.10 CPU 服务和 qwen2.5:0.5b：选择已下载模型 → 输入翻译问题 → 实际流式推理 → 核对回答与耗时。画面是明确标注的 API 测试客户端，并非 Ollama 官方桌面界面；输出来自真实本地模型。只验证此问答流程，未覆盖其他模型、工具调用或部署功能 / Real local inference via a labelled API test client, not the official desktop UI. Only this prompt workflow is verified. |
| Open WebUI | 实际操作视频 / Recorded workflow | [演示 / Demo](../media/open-webui-demo.mp4) | 官方 Open WebUI 0.12.3 本地隔离部署（官方 slim 依赖，保留登录认证），连接实际 Ollama / qwen2.5:0.5b：输入问题 → 中文翻译 → 追问 → 明确原文重试 → 英文翻译 → 刷新核对三轮历史。保留小模型未理解上下文追问的真实失误，未声称已验证知识库、语音或工具调用 / Actual official UI and model responses, including a failed implicit follow-up and successful explicit retry; all three turns survive reload. Knowledge, voice and tool calling are not verified. |
| Immich | 步骤 GIF / Step GIF | [演示 / Demo](../media/immich-demo.gif) | 官方公开演示账号；照片时间线→相册。实例禁用上传，未演示上传 / Official public demo account; timeline to albums. Uploads are disabled and not demonstrated |
| Hoppscotch | 步骤 GIF / Step GIF | [演示 / Demo](../media/hoppscotch-demo.gif) | 官方在线实例；公开 echo 接口 GET→200 OK / Official hosted app; public echo GET request to 200 OK |

自行录制视频默认 2–3 倍速，结尾停留 2 秒；原速副本在 media/normal-speed/。原速版也经过剪辑，保留实测流程。

Local recordings play at 2–3× with a two-second result hold. Edited normal-speed copies are in media/normal-speed/.

上游素材仅链接或嵌入，不复制为自有素材；其版权、商标与许可证归原权利人。本站不提供第三方工具安装包。项目代码许可证不自动适用于全部视频和图片。

Upstream media remain linked or embedded from their sources. Third-party copyrights, trademarks and license terms remain with their owners. No third-party tool installers are distributed. A code license does not automatically cover all media.
