# 推荐与维护 / Contributing

推荐工具请填写 [推荐表单](https://github.com/dogchenya/everything_ok/issues/new?template=tool.yml)，提供仓库、用途、使用门槛和演示。缺演示或实测失败的候选暂不收录。

Use the [suggestion form](https://github.com/dogchenya/everything_ok/issues/new?template=tool.yml). Include the repository, purpose, setup and a demo. Candidates without working demos remain pending.

## 维护 / Maintenance

- `catalog/tools.json`：介绍、使用门槛和演示来源 / Descriptions, setup and demo sources.
- `catalog/categories.json`：分类和排列顺序，每个工具只归一类 / Categories and order; one category per tool.
- `docs/MEDIA.md`：演示范围与限制 / Demo scope and limitations.
- `media/`：GIF、MP4 和海报；原速版在 `normal-speed/` / Media files; normal-speed copies in `normal-speed/`.

需要 Node.js 22+，无需安装依赖。在仓库根目录运行：

Requires Node.js 22+, with no package installation. Run from the repository root:

```sh
node --run build   # 生成 README 和网页 / Generate docs and gallery
node --run check   # 检查分类、双语字段和资源链接 / Validate catalog and links
node --run review  # 本机审核 / Local review: http://127.0.0.1:43121/
```

新增录屏后，安装 FFmpeg 并运行 `node --run gifs`；可用 `FFMPEG` 环境变量指定可执行文件。随后重新构建并提交生成文件。

For new recordings, install FFmpeg and run `node --run gifs`. Set `FFMPEG` for a specific executable. Rebuild and commit generated files.

CI 会重新构建并检查差异。不要提交密钥、账号、审核记录、安装包或原始录屏。上游素材保留来源，自行录制需展示真实操作和结果。

CI rebuilds and checks generated files. Keep credentials, review records, installers and raw recordings out of Git. Attribute upstream media and record real actions and results.
