# everything_ok

[简体中文](README.md) · [Video gallery](https://dogchenya.github.io/everything_ok/)

Useful GitHub tools, grouped by purpose, with descriptions, setup requirements and GIF demos.

[Share and organize files](#file-sharing) · [Documents and productivity](#office) · [Images, recording and video](#media-tools) · [AI and local models](#ai-tools) · [Development and automation](#developer-tools) · [Photo management](#photos)

<a id="file-sharing"></a>

## Share and organize files

<table>
<thead><tr><th>Tool</th><th>Purpose and setup</th><th>GIF demo</th></tr></thead>
<tbody>
<tr>
<td width="120" valign="top"><a id="localsend"></a><strong><a href="https://github.com/localsend/localsend">LocalSend</a></strong><br>★ 95,358</td>
<td width="260" valign="top"><strong>Share files across nearby devices</strong><br><br>Setup：Install on devices that can reach each other<details><summary>Demo scope</summary>Accept a file → receive it successfully. Sent by a protocol test client on the same computer; two physical devices are not demonstrated.</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/localsend-demo.mp4"><img src="media/localsend-demo.gif" width="420" alt="LocalSend recorded workflow"></a><br><a href="https://dogchenya.github.io/everything_ok/media/localsend-demo.mp4">MP4 video</a> · 2× · 12.5 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="pairdrop"></a><strong><a href="https://github.com/schlagmichdoch/PairDrop">PairDrop</a></strong><br>★ 11,663</td>
<td width="260" valign="top"><strong>Transfer files between browsers</strong><br><br>Setup：Use the hosted app; self-hosting needs a server<details><summary>Demo scope</summary>Demo provided by the upstream project.</details></td>
<td width="420" valign="top"><img src="https://raw.githubusercontent.com/schlagmichdoch/PairDrop/master/docs/pairdrop_screenshot_mobile.gif" width="420" alt="PairDrop demo"><br><a href="https://github.com/schlagmichdoch/PairDrop/blob/master/docs/pairdrop_screenshot_mobile.gif">Upstream GIF</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="gatherpack"></a><strong><a href="https://github.com/dogchenya/GatherPack">GatherPack</a></strong><br>★ 0<br>Own project</td>
<td width="260" valign="top"><strong>Collect scattered files and archive them together</strong><br><br>Setup：Desktop installation; Alpha, with platform validation limits<details><summary>Demo scope</summary>Collect files from two folders → inspect the collection → create a ZIP; two files written, no failures.</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/gatherpack-demo.mp4"><img src="media/gatherpack-demo.gif" width="420" alt="GatherPack recorded workflow"></a><br><a href="https://dogchenya.github.io/everything_ok/media/gatherpack-demo.mp4">MP4 video</a> · 2× · 25.5 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="syncthing"></a><strong><a href="https://github.com/syncthing/syncthing">Syncthing</a></strong><br>★ 89,671</td>
<td width="260" valign="top"><strong>Keep folders synchronized across your devices</strong><br><br>Setup：Install and pair devices, then choose synchronized folders<details><summary>Demo scope</summary>Two isolated local instances: write a file → synchronize → verify the received content.</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/syncthing-demo.mp4"><img src="media/syncthing-demo.gif" width="420" alt="Syncthing recorded workflow"></a><br><a href="https://dogchenya.github.io/everything_ok/media/syncthing-demo.mp4">MP4 video</a> · 2× · 15.1 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="files"></a><strong><a href="https://github.com/files-community/Files">Files</a></strong><br>★ 46,178</td>
<td width="260" valign="top"><strong>A Windows file manager with tabs, dual panes and column view</strong><br><br>Setup：Install on Windows; paid Store distribution and a website installer<details><summary>Demo scope</summary>Official column-view GIF. Dual panes, archive editing and a local installation are not demonstrated.</details></td>
<td width="420" valign="top"><img src="https://raw.githubusercontent.com/files-community/Website/main/static/blog-resources/v4/Columns.gif" width="420" alt="Files demo"><br><a href="https://raw.githubusercontent.com/files-community/Website/main/static/blog-resources/v4/Columns.gif">Upstream GIF</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="peazip"></a><strong><a href="https://github.com/peazip/PeaZip">PeaZip</a></strong><br>★ 8,015</td>
<td width="260" valign="top"><strong>Create, extract and inspect archives in common formats</strong><br><br>Setup：Windows, macOS and Linux; free portable builds available; some formats are extraction-only<details><summary>Demo scope</summary>Recorded: three synthetic text files packed into ZIP; entries and CRC verified. Extraction, encryption and RAR workflows are not recorded.</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/peazip-demo.mp4"><img src="media/peazip-demo.gif" width="420" alt="PeaZip recorded workflow"></a><br><a href="https://dogchenya.github.io/everything_ok/media/peazip-demo.mp4">MP4 video</a> · 2× · 12.2 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="czkawka"></a><strong><a href="https://github.com/qarmin/czkawka">Czkawka / Krokiet</a></strong><br>★ 34,514</td>
<td width="260" valign="top"><strong>Find duplicate files and similar images to help organize storage</strong><br><br>Setup：Windows, macOS and Linux; available interfaces and dependencies vary by build<br><br><strong>Step GIF</strong><details><summary>Demo scope</summary>Tested step GIF shows one group of duplicate synthetic files. No files deleted; not continuous video.</details></td>
<td width="420" valign="top"><img src="media/czkawka-demo.gif" width="420" alt="Czkawka / Krokiet demo"><br>Step GIF</td>
</tr>
</tbody>
</table>

<a id="office"></a>

## Documents and productivity

<table>
<thead><tr><th>Tool</th><th>Purpose and setup</th><th>GIF demo</th></tr></thead>
<tbody>
<tr>
<td width="120" valign="top"><a id="stirling-pdf"></a><strong><a href="https://github.com/Stirling-Tools/Stirling-PDF">Stirling PDF</a></strong><br>★ 94,822</td>
<td width="260" valign="top"><strong>Merge, split, convert and process PDFs</strong><br><br>Setup：Desktop or self-hosted; distinguish community features and paid plans. Some Office conversions require cloud or server support; check each format.<details><summary>Demo scope</summary>Import two PDFs → merge → inspect pages → download; page count and order verified.</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/stirling-pdf-demo.mp4"><img src="media/stirling-pdf-demo.gif" width="420" alt="Stirling PDF recorded workflow"></a><br><a href="https://dogchenya.github.io/everything_ok/media/stirling-pdf-demo.mp4">MP4 video</a> · 2× · 16.3 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="excalidraw"></a><strong><a href="https://github.com/excalidraw/excalidraw">Excalidraw</a></strong><br>★ 134,441</td>
<td width="260" valign="top"><strong>Sketch diagrams and explain ideas on a hand-drawn whiteboard</strong><br><br>Setup：Open the web app; paid collaboration offerings are separate<br><br><strong>Partial · export unverified</strong><details><summary>Demo scope</summary>Draw a bilingual diagram → open export preview. File saving remains unverified; this is a partial workflow.</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/excalidraw-demo.mp4"><img src="media/excalidraw-demo.gif" width="420" alt="Excalidraw recorded workflow"></a><br><a href="https://dogchenya.github.io/everything_ok/media/excalidraw-demo.mp4">MP4 video</a> · 2× · 14.2 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="powertoys"></a><strong><a href="https://github.com/microsoft/PowerToys">PowerToys</a></strong><br>★ 139,688</td>
<td width="260" valign="top"><strong>Productivity utilities for Windows</strong><br><br>Setup：Windows; install and enable selected utilities<details><summary>Demo scope</summary>Demo provided by the upstream project.</details></td>
<td width="420" valign="top"><a href="https://raw.githubusercontent.com/microsoft/PowerToys/main/src/settings-ui/Settings.UI/Assets/Settings/Modules/OOBE/FancyZones.mp4">▶ Upstream demo video</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="flow-launcher"></a><strong><a href="https://github.com/Flow-Launcher/Flow.Launcher">Flow Launcher</a></strong><br>★ 15,855</td>
<td width="260" valign="top"><strong>Find files and launch apps quickly</strong><br><br>Setup：Windows desktop installation<details><summary>Demo scope</summary>Demo provided by the upstream project.</details></td>
<td width="420" valign="top"><img src="https://user-images.githubusercontent.com/6903107/207167068-2196d2a3-2caa-4856-958b-a780fbda95c6.gif" width="420" alt="Flow Launcher demo"><br><a href="https://user-images.githubusercontent.com/6903107/207167068-2196d2a3-2caa-4856-958b-a780fbda95c6.gif">Upstream GIF</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="joplin"></a><strong><a href="https://github.com/laurent22/joplin">Joplin</a></strong><br>★ 56,852</td>
<td width="260" valign="top"><strong>Take offline notes, manage to-dos and organize information</strong><br><br>Setup：Desktop/mobile installation; choose a sync backend; Joplin Cloud is paid<details><summary>Demo scope</summary>Official clip shows editing an existing drawing inside a note; note creation, importing and synchronization are not tested.</details></td>
<td width="420" valign="top"><a href="https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/draw/edit-existing-drawing-on-desktop.mp4"><img src="media/joplin-demo.gif" width="420" alt="Joplin upstream video preview"></a><br><a href="https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/WebsiteAssets/images/draw/edit-existing-drawing-on-desktop.mp4">Upstream video</a> · 8.3 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="siyuan"></a><strong><a href="https://github.com/siyuan-note/siyuan">思源笔记 / SiYuan</a></strong><br>★ 46,905</td>
<td width="260" valign="top"><strong>Local-first Markdown notes with block references</strong><br><br>Setup：Desktop installation; synchronization and some services are paid<details><summary>Demo scope</summary>Official guide clip demonstrates list formatting only; block references, sync and AI are not demonstrated or locally tested.</details></td>
<td width="420" valign="top"><a href="https://raw.githubusercontent.com/siyuan-note/siyuan/master/app/guide/20210808180117-6v0mkxr/assets/formatting_elements-20210607225733-o1keasx.mp4"><img src="media/siyuan-demo.gif" width="420" alt="思源笔记 / SiYuan upstream video preview"></a><br><a href="https://raw.githubusercontent.com/siyuan-note/siyuan/master/app/guide/20210808180117-6v0mkxr/assets/formatting_elements-20210607225733-o1keasx.mp4">Upstream video</a> · 9.6 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="umi-ocr"></a><strong><a href="https://github.com/hiroi-sora/Umi-OCR">Umi-OCR</a></strong><br>★ 48,143</td>
<td width="260" valign="top"><strong>Extract copyable text from screenshots and scanned images, offline and in batches</strong><br><br>Setup：Portable Windows app; Linux version available. Tested image OCR on Windows Rapid v2.1.5 only<details><summary>Demo scope</summary>Import an image → run offline OCR → inspect text. Date, ID and amount verified; some lines merged. Printed image text only.</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/umi-ocr-demo.mp4"><img src="media/umi-ocr-demo.gif" width="420" alt="Umi-OCR recorded workflow"></a><br><a href="https://dogchenya.github.io/everything_ok/media/umi-ocr-demo.mp4">MP4 video</a> · 2× · 12.7 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="pdfmathtranslate"></a><strong><a href="https://github.com/PDFMathTranslate/PDFMathTranslate">PDFMathTranslate</a></strong><br>★ 37,812</td>
<td width="260" valign="top"><strong>Translate PDFs while preserving formulas, figures and layout where possible</strong><br><br>Setup：Hosted services are linked by the project; local installation available. Some translation providers require API keys or payment; data handling depends on deployment and provider<details><summary>Demo scope</summary>Official older GUI: import PDF → translate → inspect Chinese output and bilingual download links. Not tested this round; current UI may differ.</details></td>
<td width="420" valign="top"><img src="https://raw.githubusercontent.com/PDFMathTranslate/PDFMathTranslate/main/docs/images/gui.gif" width="420" alt="PDFMathTranslate demo"><br><a href="https://raw.githubusercontent.com/PDFMathTranslate/PDFMathTranslate/main/docs/images/gui.gif">Upstream GIF</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="super-productivity"></a><strong><a href="https://github.com/super-productivity/super-productivity">Super Productivity</a></strong><br>★ 23,123</td>
<td width="260" valign="top"><strong>Plan tasks, schedule time blocks and track focused work</strong><br><br>Setup：Web or desktop app; external calendar and issue tracker integrations require setup<details><summary>Demo scope</summary>Official reel: task entry and scheduling. External integrations and synchronization are not tested.</details></td>
<td width="420" valign="top"><img src="https://raw.githubusercontent.com/super-productivity/super-productivity/master/docs/screens/reel.gif" width="420" alt="Super Productivity demo"><br><a href="https://raw.githubusercontent.com/super-productivity/super-productivity/master/docs/screens/reel.gif">Upstream GIF</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="zotero"></a><strong><a href="https://github.com/zotero/zotero">Zotero</a></strong><br>★ 15,741</td>
<td width="260" valign="top"><strong>Collect research, annotate PDFs and generate citations and bibliographies</strong><br><br>Setup：Desktop installation; web capture uses Zotero Connector; attachment storage beyond the free quota may require payment<details><summary>Demo scope</summary>Third-party Grad Coach tutorial covers importing, organizing and citing. UI may be older than the current version; YouTube access required.</details></td>
<td width="420" valign="top"><a href="https://www.youtube.com/watch?v=tnbwKj6-pD8"><img src="https://i.ytimg.com/vi/tnbwKj6-pD8/hqdefault.jpg" width="420" alt="Zotero tutorial thumbnail"></a><br><a href="https://www.youtube.com/watch?v=tnbwKj6-pD8">▶ Third-party tutorial</a> · Grad Coach<br>YouTube access required</td>
</tr>
<tr>
<td width="120" valign="top"><a id="docuseal"></a><strong><a href="https://github.com/docusealco/docuseal">DocuSeal</a></strong><br>★ 18,787</td>
<td width="260" valign="top"><strong>Add fillable fields to PDFs and collect completed forms and signatures online</strong><br><br>Setup：Hosted service or self-hosting; community and Pro features and pricing differ<details><summary>Demo scope</summary>Official video: PDF templates, fields, recipients and signing. Not tested locally in this round.</details></td>
<td width="420" valign="top"><a href="https://www.docuseal.com/demo.mp4"><img src="https://github.com/docusealco/docuseal/assets/5418788/d8703ea3-361a-423f-8bfe-eff1bd9dbe14" width="420" alt="DocuSeal official demo thumbnail"></a><br><a href="https://www.docuseal.com/demo.mp4">▶ Official video</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="openrefine"></a><strong><a href="https://github.com/OpenRefine/OpenRefine">OpenRefine</a></strong><br>★ 12,069</td>
<td width="260" valign="top"><strong>Clean whitespace, formats and inconsistent values in tabular data</strong><br><br>Setup：Runs locally through a browser; some learning required; follow the release package Java requirements<details><summary>Demo scope</summary>Classic Google Refine 2.0 tutorial linked by the official resources page. Very old UI; current version not tested locally.</details></td>
<td width="420" valign="top"><a href="https://www.youtube.com/watch?v=B70J_H_zAWM"><img src="https://i.ytimg.com/vi/B70J_H_zAWM/hqdefault.jpg" width="420" alt="OpenRefine tutorial thumbnail"></a><br><a href="https://www.youtube.com/watch?v=B70J_H_zAWM">▶ Classic tutorial</a> · GoogleRefine<br>YouTube access required</td>
</tr>
<tr>
<td width="120" valign="top"><a id="paperless-ngx"></a><strong><a href="https://github.com/paperless-ngx/paperless-ngx">Paperless-ngx</a></strong><br>★ 47,071</td>
<td width="260" valign="top"><strong>Organize receipts and scanned documents into a searchable archive</strong><br><br>Setup：Requires a server or NAS, commonly Docker Compose; deployment and backups require technical setup<details><summary>Demo scope</summary>Third-party Techno Tim setup tutorial; AI is optional. Not deployed locally this round; YouTube access required.</details></td>
<td width="420" valign="top"><a href="https://www.youtube.com/watch?v=NMAwHjleqHg"><img src="https://i.ytimg.com/vi/NMAwHjleqHg/hqdefault.jpg" width="420" alt="Paperless-ngx tutorial thumbnail"></a><br><a href="https://www.youtube.com/watch?v=NMAwHjleqHg">▶ Third-party tutorial</a> · Techno Tim<br>YouTube access required</td>
</tr>
<tr>
<td width="120" valign="top"><a id="copytranslator"></a><strong><a href="https://github.com/CopyTranslator/CopyTranslator">CopyTranslator</a></strong><br>★ 18,122</td>
<td width="260" valign="top"><strong>Translate copied text without repeatedly pasting it into a translation website</strong><br><br>Setup：Desktop app; online providers need networking and may require API keys or payment; local model options need setup<details><summary>Demo scope</summary>Early GIF linked by the project README shows copied text and a translation. Current v12 and providers are not tested.</details></td>
<td width="420" valign="top"><img src="https://s1.ax1x.com/2018/11/30/FmrNFS.gif" width="420" alt="CopyTranslator demo"><br><a href="https://s1.ax1x.com/2018/11/30/FmrNFS.gif">Upstream GIF</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="nocodb"></a><strong><a href="https://github.com/nocodb/nocodb">NocoDB</a></strong><br>★ 65,351</td>
<td width="260" valign="top"><strong>Manage team data with grids, boards and forms</strong><br><br>Setup：Hosted plans or self-hosting; Sustainable Use License, not a permissive open-source license; review terms for commercial integration<details><summary>Demo scope</summary>Official README GIF shows grouped grids, galleries and boards. Permissions and importing are not tested.</details></td>
<td width="420" valign="top"><img src="https://github.com/nocodb/nocodb/assets/86527202/e2fad786-f211-4dcb-9bd3-aaece83a6783" width="420" alt="NocoDB demo"><br><a href="https://github.com/nocodb/nocodb/assets/86527202/e2fad786-f211-4dcb-9bd3-aaece83a6783">Upstream GIF</a></td>
</tr>
</tbody>
</table>

<a id="media-tools"></a>

## Images, recording and video

<table>
<thead><tr><th>Tool</th><th>Purpose and setup</th><th>GIF demo</th></tr></thead>
<tbody>
<tr>
<td width="120" valign="top"><a id="losslesscut"></a><strong><a href="https://github.com/mifi/lossless-cut">LosslessCut</a></strong><br>★ 45,112</td>
<td width="260" valign="top"><strong>Trim audio and video without re-encoding</strong><br><br>Setup：Desktop installation; learn ranges and format limitations<details><summary>Demo scope</summary>Import a video → select a segment → export without video re-encoding. Keyframe cuts can shift segment boundaries.</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/losslesscut-demo.mp4"><img src="media/losslesscut-demo.gif" width="420" alt="LosslessCut recorded workflow"></a><br><a href="https://dogchenya.github.io/everything_ok/media/losslesscut-demo.mp4">MP4 video</a> · 2× · 20.5 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="screentogif"></a><strong><a href="https://github.com/NickeManarin/ScreenToGif">ScreenToGif</a></strong><br>★ 27,841</td>
<td width="260" valign="top"><strong>Record and edit screen GIFs</strong><br><br>Setup：Windows; check .NET runtime requirements<details><summary>Demo scope</summary>Demo provided by the upstream project.</details></td>
<td width="420" valign="top"><img src="https://nickemanarin.github.io/ScreenToGif-Website/media/Editor.gif" width="420" alt="ScreenToGif demo"><br><a href="https://nickemanarin.github.io/ScreenToGif-Website/media/Editor.gif">Upstream GIF</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="obs-studio"></a><strong><a href="https://github.com/obsproject/obs-studio">OBS Studio</a></strong><br>★ 77,992</td>
<td width="260" valign="top"><strong>Record tutorials, stream and compose multiple sources</strong><br><br>Setup：Desktop installation; configure video and audio sources<details><summary>Demo scope</summary>Add a media source → fit to canvas → start and stop recording → save the video.</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/obs-studio-demo.mp4"><img src="media/obs-studio-demo.gif" width="420" alt="OBS Studio recorded workflow"></a><br><a href="https://dogchenya.github.io/everything_ok/media/obs-studio-demo.mp4">MP4 video</a> · 3× · 21.1 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="upscayl"></a><strong><a href="https://github.com/upscayl/upscayl">Upscayl</a></strong><br>★ 50,922</td>
<td width="260" valign="top"><strong>Upscale images with AI</strong><br><br>Setup：Desktop installation; requires compatible graphics hardware<details><summary>Demo scope</summary>Demo provided by the upstream project.</details></td>
<td width="420" valign="top"><a href="https://raw.githubusercontent.com/upscayl/upscayl/main/upscayl.mp4">▶ Upstream demo video</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="squoosh"></a><strong><a href="https://github.com/GoogleChromeLabs/squoosh">Squoosh</a></strong><br>★ 26,057</td>
<td width="260" valign="top"><strong>Compress images in a browser and compare quality and file size</strong><br><br>Setup：Browser app; images are compressed locally; the site includes analytics<br><br><strong>Step GIF</strong><details><summary>Demo scope</summary>Tested step GIF: official sample compressed from 2.79 MB to 862 kB. Downloading is unverified.</details></td>
<td width="420" valign="top"><img src="media/squoosh-demo.gif" width="420" alt="Squoosh demo"><br>Step GIF</td>
</tr>
<tr>
<td width="120" valign="top"><a id="penpot"></a><strong><a href="https://github.com/penpot/penpot">Penpot</a></strong><br>★ 61,626</td>
<td width="260" valign="top"><strong>Create interface prototypes and vector designs for collaborative handoff</strong><br><br>Setup：Hosted app requires an account; self-hosting available; design-tool learning required<details><summary>Demo scope</summary>Older official documentation GIF shows vector boolean operations. Complete prototypes and collaboration are not tested.</details></td>
<td width="420" valign="top"><img src="https://raw.githubusercontent.com/penpot/penpot/develop/docs/img/booleans.gif" width="420" alt="Penpot demo"><br><a href="https://raw.githubusercontent.com/penpot/penpot/develop/docs/img/booleans.gif">Upstream GIF</a></td>
</tr>
</tbody>
</table>

<a id="ai-tools"></a>

## AI and local models

<table>
<thead><tr><th>Tool</th><th>Purpose and setup</th><th>GIF demo</th></tr></thead>
<tbody>
<tr>
<td width="120" valign="top"><a id="open-webui"></a><strong><a href="https://github.com/open-webui/open-webui">Open WebUI</a></strong><br>★ 156,595</td>
<td width="260" valign="top"><strong>Chat with local and API models through one interface</strong><br><br>Setup：Requires deployment and Ollama or a compatible API; compute is separate<details><summary>Demo scope</summary>Connect a local model → chat and retry → reload saved history. Includes a real failed implicit follow-up from the small model.</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/open-webui-demo.mp4"><img src="media/open-webui-demo.gif" width="420" alt="Open WebUI recorded workflow"></a><br><a href="https://dogchenya.github.io/everything_ok/media/open-webui-demo.mp4">MP4 video</a> · 3× · 19.3 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="ollama"></a><strong><a href="https://github.com/ollama/ollama">Ollama</a></strong><br>★ 184,505</td>
<td width="260" valign="top"><strong>Run and use open models on your own computer</strong><br><br>Setup：Install and download models; sufficient RAM and storage required; cloud plans differ<details><summary>Demo scope</summary>Local translation and execution metrics, shown in a labelled API test client rather than the official desktop UI.</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/ollama-demo.mp4"><img src="media/ollama-demo.gif" width="420" alt="Ollama recorded workflow"></a><br><a href="https://dogchenya.github.io/everything_ok/media/ollama-demo.mp4">MP4 video</a> · 2× · 10.7 s</td>
</tr>
</tbody>
</table>

<a id="developer-tools"></a>

## Development and automation

<table>
<thead><tr><th>Tool</th><th>Purpose and setup</th><th>GIF demo</th></tr></thead>
<tbody>
<tr>
<td width="120" valign="top"><a id="hoppscotch"></a><strong><a href="https://github.com/hoppscotch/hoppscotch">Hoppscotch</a></strong><br>★ 80,677</td>
<td width="260" valign="top"><strong>Send requests and test APIs</strong><br><br>Setup：Requires API basics; some connections need extra configuration<br><br><strong>Step GIF</strong><details><summary>Demo scope</summary>Send a GET request → inspect a 200 OK response. Shown as a step GIF.</details></td>
<td width="420" valign="top"><img src="media/hoppscotch-demo.gif" width="420" alt="Hoppscotch demo"><br>Step GIF</td>
</tr>
<tr>
<td width="120" valign="top"><a id="n8n"></a><strong><a href="https://github.com/n8n-io/n8n">n8n</a></strong><br>★ 208,428</td>
<td width="260" valign="top"><strong>Connect apps and automate repetitive workflows</strong><br><br>Setup：Self-host or use a cloud account; integrations may require credentials or fees<details><summary>Demo scope</summary>Import a three-node template → edit input → execute → inspect output; no external accounts or APIs required.</details></td>
<td width="420" valign="top"><a href="https://dogchenya.github.io/everything_ok/media/n8n-demo.mp4"><img src="media/n8n-demo.gif" width="420" alt="n8n recorded workflow"></a><br><a href="https://dogchenya.github.io/everything_ok/media/n8n-demo.mp4">MP4 video</a> · 3× · 20.0 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="fzf"></a><strong><a href="https://github.com/junegunn/fzf">fzf</a></strong><br>★ 83,751</td>
<td width="260" valign="top"><strong>Fuzzy-find files and command history in a terminal</strong><br><br>Setup：Command-line installation and terminal familiarity<details><summary>Demo scope</summary>Author-maintained fuzzy-search GIF; the interface may differ from current versions. Not a local workflow test.</details></td>
<td width="420" valign="top"><img src="https://raw.githubusercontent.com/junegunn/i/master/fzf.gif" width="420" alt="fzf demo"><br><a href="https://raw.githubusercontent.com/junegunn/i/master/fzf.gif">Upstream GIF</a></td>
</tr>
<tr>
<td width="120" valign="top"><a id="lazygit"></a><strong><a href="https://github.com/jesseduffield/lazygit">Lazygit</a></strong><br>★ 83,396</td>
<td width="260" valign="top"><strong>Review changes, stage files and commit Git code in a terminal UI</strong><br><br>Setup：Install Git and Lazygit; basic Git knowledge required<details><summary>Demo scope</summary>Upstream commit_and_push demo; no local test or operation on the user repository.</details></td>
<td width="420" valign="top"><a href="https://github.com/user-attachments/assets/031799d1-740d-4cda-90cf-689513fa9860"><img src="media/lazygit-demo.gif" width="420" alt="Lazygit upstream video preview"></a><br><a href="https://github.com/user-attachments/assets/031799d1-740d-4cda-90cf-689513fa9860">Upstream video</a> · 11.4 s</td>
</tr>
<tr>
<td width="120" valign="top"><a id="beekeeper-studio"></a><strong><a href="https://github.com/beekeeper-studio/beekeeper-studio">Beekeeper Studio</a></strong><br>★ 23,788</td>
<td width="260" valign="top"><strong>Connect to databases, run SQL and inspect data in a desktop UI</strong><br><br>Setup：Desktop installation and database connection details; some features and database support are paid<details><summary>Demo scope</summary>Official database-client GIF. Not all shown features are guaranteed to be free; not locally tested.</details></td>
<td width="420" valign="top"><img src="https://raw.githubusercontent.com/beekeeper-studio/beekeeper-studio/master/apps/studio/screenshots/beekeeper-studio-demo.gif" width="420" alt="Beekeeper Studio demo"><br><a href="https://raw.githubusercontent.com/beekeeper-studio/beekeeper-studio/master/apps/studio/screenshots/beekeeper-studio-demo.gif">Upstream GIF</a></td>
</tr>
</tbody>
</table>

<a id="photos"></a>

## Photo management

<table>
<thead><tr><th>Tool</th><th>Purpose and setup</th><th>GIF demo</th></tr></thead>
<tbody>
<tr>
<td width="120" valign="top"><a id="immich"></a><strong><a href="https://github.com/immich-app/immich">Immich</a></strong><br>★ 117,038</td>
<td width="260" valign="top"><strong>Host your own photo library</strong><br><br>Setup：Requires a server, Docker and storage maintenance<br><br><strong>Step GIF</strong><details><summary>Demo scope</summary>Official public demo: timeline → albums. Step GIF; uploads are disabled and not demonstrated.</details></td>
<td width="420" valign="top"><img src="media/immich-demo.gif" width="420" alt="Immich demo"><br>Step GIF</td>
</tr>
</tbody>
</table>

## Notes and contributions

Some tools require hosting, models or paid APIs. Check official licensing and pricing. Stars do not guarantee quality, and demos cover only the stated workflows.

[Sources and demo scope](docs/MEDIA.md) · [Suggest a tool](https://github.com/dogchenya/everything_ok/issues/new) · [Contributing and maintenance](CONTRIBUTING.md)
