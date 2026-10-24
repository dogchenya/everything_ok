# everything_ok

[简体中文](README.md) · [Video gallery](https://dogchenya.github.io/everything_ok/)

Useful GitHub tools, grouped by what you want to do. See them work before trying them.

**Want to share files easily?** Try [LocalSend](#localsend) on a local network, [PairDrop](#pairdrop) in a browser, or [GatherPack](#gatherpack) to collect and archive scattered files.

Recorded workflows play here as GIFs. Use the MP4 link below each preview for a clearer video. Recordings run at 2–3×, with normal-speed copies available.

[Share and organize files · 4](#file-sharing) · [Documents and productivity · 4](#office) · [Images, recording and video · 4](#media-tools) · [AI and local models · 2](#ai-tools) · [Development and automation · 2](#developer-tools) · [Photo management · 1](#photos)

17 reviewed projects. Star snapshot: 2026-10-24. Upstream media, step GIFs and partial recordings are labelled.

<a id="file-sharing"></a>

## Share and organize files

For a quick transfer, start with the first two. Use GatherPack to assemble an archive, or Syncthing for ongoing synchronization.

<a id="localsend"></a>

### [LocalSend](https://github.com/localsend/localsend)

**Share files across nearby devices**

Setup：Install on devices that can reach each other · ★ 95,358

![LocalSend recorded workflow](media/localsend-demo.gif)

[MP4 video](https://dogchenya.github.io/everything_ok/media/localsend-demo.mp4) · 2× · 12.5 s · [Normal speed](https://dogchenya.github.io/everything_ok/media/normal-speed/localsend-demo.mp4)

Accept a file → receive it successfully. Sent by a protocol test client on the same computer; two physical devices are not demonstrated.

<a id="pairdrop"></a>

### [PairDrop](https://github.com/schlagmichdoch/PairDrop)

**Transfer files between browsers**

Setup：Use the hosted app; self-hosting needs a server · ★ 11,663

![PairDrop demo](https://raw.githubusercontent.com/schlagmichdoch/PairDrop/master/docs/pairdrop_screenshot_mobile.gif)

[Upstream GIF source](https://github.com/schlagmichdoch/PairDrop/blob/master/docs/pairdrop_screenshot_mobile.gif)

Demo provided by the upstream project; original source retained.

<a id="gatherpack"></a>

### [GatherPack](https://github.com/dogchenya/GatherPack) · Own project

**Collect scattered files and archive them together**

Setup：Desktop installation; Alpha, with platform validation limits · ★ 0

![GatherPack recorded workflow](media/gatherpack-demo.gif)

[MP4 video](https://dogchenya.github.io/everything_ok/media/gatherpack-demo.mp4) · 2× · 25.5 s · [Normal speed](https://dogchenya.github.io/everything_ok/media/normal-speed/gatherpack-demo.mp4)

Collect files from two folders → inspect the collection → create a ZIP; two files written, no failures.

<a id="syncthing"></a>

### [Syncthing](https://github.com/syncthing/syncthing)

**Keep folders synchronized across your devices**

Setup：Install and pair devices, then choose synchronized folders · ★ 89,671

![Syncthing recorded workflow](media/syncthing-demo.gif)

[MP4 video](https://dogchenya.github.io/everything_ok/media/syncthing-demo.mp4) · 2× · 15.1 s · [Normal speed](https://dogchenya.github.io/everything_ok/media/normal-speed/syncthing-demo.mp4)

Two isolated local instances: write a file → synchronize → verify the received content.

<a id="office"></a>

## Documents and productivity

<a id="stirling-pdf"></a>

### [Stirling PDF](https://github.com/Stirling-Tools/Stirling-PDF)

**Merge, split, convert and process PDFs**

Setup：Desktop or self-hosted; distinguish community features and paid plans · ★ 94,822

![Stirling PDF recorded workflow](media/stirling-pdf-demo.gif)

[MP4 video](https://dogchenya.github.io/everything_ok/media/stirling-pdf-demo.mp4) · 2× · 16.3 s · [Normal speed](https://dogchenya.github.io/everything_ok/media/normal-speed/stirling-pdf-demo.mp4)

Import two PDFs → merge → inspect pages → download; page count and order verified.

<a id="excalidraw"></a>

### [Excalidraw](https://github.com/excalidraw/excalidraw)

**Sketch diagrams and explain ideas on a hand-drawn whiteboard**

Setup：Open the web app; paid collaboration offerings are separate · ★ 134,441

![Excalidraw recorded workflow](media/excalidraw-demo.gif)

[MP4 video](https://dogchenya.github.io/everything_ok/media/excalidraw-demo.mp4) · 2× · 14.2 s · [Normal speed](https://dogchenya.github.io/everything_ok/media/normal-speed/excalidraw-demo.mp4)

Draw a bilingual diagram → open export preview. File saving remains unverified; this is a partial workflow.

<a id="powertoys"></a>

### [PowerToys](https://github.com/microsoft/PowerToys)

**Productivity utilities for Windows**

Setup：Windows; install and enable selected utilities · ★ 139,688

[▶ Watch upstream demo video](https://raw.githubusercontent.com/microsoft/PowerToys/main/src/settings-ui/Settings.UI/Assets/Settings/Modules/OOBE/FancyZones.mp4)

Demo provided by the upstream project; original source retained.

<a id="flow-launcher"></a>

### [Flow Launcher](https://github.com/Flow-Launcher/Flow.Launcher)

**Find files and launch apps quickly**

Setup：Windows desktop installation · ★ 15,855

![Flow Launcher demo](https://user-images.githubusercontent.com/6903107/207167068-2196d2a3-2caa-4856-958b-a780fbda95c6.gif)

[Upstream GIF source](https://user-images.githubusercontent.com/6903107/207167068-2196d2a3-2caa-4856-958b-a780fbda95c6.gif)

Demo provided by the upstream project; original source retained.

<a id="media-tools"></a>

## Images, recording and video

<a id="losslesscut"></a>

### [LosslessCut](https://github.com/mifi/lossless-cut)

**Trim audio and video without re-encoding**

Setup：Desktop installation; learn ranges and format limitations · ★ 45,112

![LosslessCut recorded workflow](media/losslesscut-demo.gif)

[MP4 video](https://dogchenya.github.io/everything_ok/media/losslesscut-demo.mp4) · 2× · 20.5 s · [Normal speed](https://dogchenya.github.io/everything_ok/media/normal-speed/losslesscut-demo.mp4)

Import a video → select a segment → export without video re-encoding. Keyframe cuts can shift segment boundaries.

<a id="screentogif"></a>

### [ScreenToGif](https://github.com/NickeManarin/ScreenToGif)

**Record and edit screen GIFs**

Setup：Windows; check .NET runtime requirements · ★ 27,841

![ScreenToGif demo](https://nickemanarin.github.io/ScreenToGif-Website/media/Editor.gif)

[Upstream GIF source](https://nickemanarin.github.io/ScreenToGif-Website/media/Editor.gif)

Demo provided by the upstream project; original source retained.

<a id="obs-studio"></a>

### [OBS Studio](https://github.com/obsproject/obs-studio)

**Record tutorials, stream and compose multiple sources**

Setup：Desktop installation; configure video and audio sources · ★ 77,992

![OBS Studio recorded workflow](media/obs-studio-demo.gif)

[MP4 video](https://dogchenya.github.io/everything_ok/media/obs-studio-demo.mp4) · 3× · 21.1 s · [Normal speed](https://dogchenya.github.io/everything_ok/media/normal-speed/obs-studio-demo.mp4)

Add a media source → fit to canvas → start and stop recording → save the video.

<a id="upscayl"></a>

### [Upscayl](https://github.com/upscayl/upscayl)

**Upscale images with AI**

Setup：Desktop installation; requires compatible graphics hardware · ★ 50,922

[▶ Watch upstream demo video](https://raw.githubusercontent.com/upscayl/upscayl/main/upscayl.mp4)

Demo provided by the upstream project; original source retained.

<a id="ai-tools"></a>

## AI and local models

<a id="open-webui"></a>

### [Open WebUI](https://github.com/open-webui/open-webui)

**Chat with local and API models through one interface**

Setup：Requires deployment and Ollama or a compatible API; compute is separate · ★ 156,595

![Open WebUI recorded workflow](media/open-webui-demo.gif)

[MP4 video](https://dogchenya.github.io/everything_ok/media/open-webui-demo.mp4) · 3× · 19.3 s · [Normal speed](https://dogchenya.github.io/everything_ok/media/normal-speed/open-webui-demo.mp4)

Connect a local model → chat and retry → reload saved history. Includes a real failed implicit follow-up from the small model.

<a id="ollama"></a>

### [Ollama](https://github.com/ollama/ollama)

**Run and use open models on your own computer**

Setup：Install and download models; sufficient RAM and storage required; cloud plans differ · ★ 184,505

![Ollama recorded workflow](media/ollama-demo.gif)

[MP4 video](https://dogchenya.github.io/everything_ok/media/ollama-demo.mp4) · 2× · 10.7 s · [Normal speed](https://dogchenya.github.io/everything_ok/media/normal-speed/ollama-demo.mp4)

Local translation and execution metrics, shown in a labelled API test client rather than the official desktop UI.

<a id="developer-tools"></a>

## Development and automation

<a id="hoppscotch"></a>

### [Hoppscotch](https://github.com/hoppscotch/hoppscotch)

**Send requests and test APIs**

Setup：Requires API basics; some connections need extra configuration · ★ 80,677

![Hoppscotch demo](media/hoppscotch-demo.gif)

Send a GET request → inspect a 200 OK response. Shown as a step GIF.

<a id="n8n"></a>

### [n8n](https://github.com/n8n-io/n8n)

**Connect apps and automate repetitive workflows**

Setup：Self-host or use a cloud account; integrations may require credentials or fees · ★ 208,428

![n8n recorded workflow](media/n8n-demo.gif)

[MP4 video](https://dogchenya.github.io/everything_ok/media/n8n-demo.mp4) · 3× · 20.0 s · [Normal speed](https://dogchenya.github.io/everything_ok/media/normal-speed/n8n-demo.mp4)

Import a three-node template → edit input → execute → inspect output; no external accounts or APIs required.

<a id="photos"></a>

## Photo management

<a id="immich"></a>

### [Immich](https://github.com/immich-app/immich)

**Host your own photo library**

Setup：Requires a server, Docker and storage maintenance · ★ 117,038

![Immich demo](media/immich-demo.gif)

Official public demo: timeline → albums. Step GIF; uploads are disabled and not demonstrated.

## Notes and contributions

Some tools require hosting, models or paid APIs. Check official licensing and pricing. Stars do not guarantee quality, and demos cover only the stated workflows.

[Sources and demo scope](docs/MEDIA.md) · [Suggest a tool](https://github.com/dogchenya/everything_ok/issues/new) · [Contributing and maintenance](CONTRIBUTING.md)
