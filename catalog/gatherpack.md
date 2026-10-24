# GatherPack

- 分类 / Category：文件处理 / File management
- 项目 / Repository：https://github.com/dogchenya/GatherPack
- 下载 / Downloads：https://github.com/dogchenya/GatherPack/releases
- 使用方式 / Access：桌面安装 / Desktop installation
- 平台 / Platforms：Windows、macOS、Linux（以发布页对应版本为准）
- 状态 / Status：Alpha；尚未作为稳定版本推荐 / Alpha; not presented as a stable release
- 资料核对 / Sources reviewed：2026-10-24；项目 README

## 中文介绍

把不同目录的文件和文件夹集中到悬浮收集栏，检查包内结构后，一次导出 ZIP、7z 或 tar.gz。适合提交项目材料、交付设计文件和归档零散资料。收集与打包在本机完成，无需账号；源文件保留原处。

使用门槛：下载安装对应系统版本。快捷键收集和文件管理器集成的兼容情况需查看项目说明；README 说明 Linux 以 GNOME / X11 / Nautilus 为验证基线，Windows/macOS 完整文件管理器交互及其他环境仍待验证。安装包未签名，macOS 包未公证。

## English introduction

Collect files and folders from different locations in a floating shelf, review the archive structure, and export everything as ZIP, 7z, or tar.gz. Useful for project handoffs, design deliveries, and archiving scattered materials. Processing stays on your computer, requires no account, and leaves source files in place.

Requirements: install the package for your operating system. Check upstream documentation for file-manager and shortcut integration. The README identifies GNOME / X11 / Nautilus as its Linux validation baseline; full Windows/macOS file-manager interaction and other environments remain to be verified. Installers are unsigned and macOS packages are not notarized.

## 演示 / Demo

[自行录制完整收集打包视频 / Self-recorded collect-and-archive video](../media/gatherpack-demo.mp4) · 2×，25.5 秒 / seconds · [原速 47 秒 / Normal speed](../media/normal-speed/gatherpack-demo.mp4)

从两个目录添加示例文件 → 检查目录与问题 → 选择 ZIP 并指定输出 → 打包完成。实际 Windows 应用录屏经剪辑，包含中英文说明。结果为写入 2、失败 0；已核对 ZIP 包含两个预期文件并通过完整性校验。

Add sample files from two folders, inspect the collection, choose ZIP and an output path, and create the archive. Edited actual Windows application recording with bilingual captions. Result: two files written, zero failures; archive contents and integrity verified.

[上游贴边隐藏 GIF / Upstream edge-hide GIF](https://github.com/dogchenya/GatherPack/blob/master/docs/assets/edge-slide-alpha13.gif)

这份上游动图仅展示贴边隐藏功能；完整收集打包流程请看上面的视频。

This upstream animation demonstrates edge hiding. See the video above for the collect-and-archive workflow.

建议完整演示 / Proposed full demo：从两个目录添加示例文件 → 检查归档目录 → 选择 ZIP → 打包完成。

## 来源 / Source

[项目 README / Project README](https://github.com/dogchenya/GatherPack#readme)。现有素材保留上游链接，不以项目代码许可证推定所有素材的转载许可。
