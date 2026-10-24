# 收录规范 / Contribution guide

自动发现候选，人工决定收录。优先选择用途清晰、仍在维护、普通用户容易上手的项目；星标仅作发现信号。

Discover candidates automatically and review them manually. Prefer useful, maintained projects that are easy to start using; stars are a discovery signal.

每项需提供 / Each submission needs:

- 项目官方仓库与中英文简介 / Official repository and Chinese/English introductions.
- 适用人群、使用门槛、费用和许可限制 / Audience, setup requirements, costs and license conditions.
- 展示真实功能的 GIF 或视频，以及来源和已知限制 / A real workflow GIF or video, source attribution and limitations.
- 自行录制应包括真实输入、操作与结果；不能用静态截图冒充连续录屏 / Record actual inputs, actions and results; do not present still-image slideshows as recordings.
- 缺素材、反复超时、环境无法完成实测的候选，跳过当前批次 / Skip candidates whose demos or required environments remain unavailable.

修改 `catalog/tools.json` 后运行 `node scripts/build.mjs`。提交前检查网页播放、双语说明、本地资源链接和素材来源。不要提交账号、密钥、本机审核备注、安装包或录屏原始文件。

After editing `catalog/tools.json`, run `node scripts/build.mjs`. Check playback, bilingual descriptions, local asset links and attribution. Never commit credentials, private review notes, installers or raw recordings.
