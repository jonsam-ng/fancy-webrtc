(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{581:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"webrtc-协议介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webrtc-协议介绍"}},[t._v("#")]),t._v(" WebRTC 协议介绍")]),t._v(" "),r("p",[t._v("本文介绍了基于 WebRTC API 构建的协议。")]),t._v(" "),r("h2",{attrs:{id:"ice"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ice"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Protocols#ice",title:"Permalink to ICE",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICE"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("交互式连接设施")]),r("a",{attrs:{href:"http://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment",target:"_blank",rel:"noopener noreferrer"}},[t._v("Interactive Connectivity Establishment (ICE)"),r("OutboundLink")],1),t._v(" 是一个允许你的浏览器和对端浏览器建立连接的协议框架。在实际的网络当中，有很多原因能导致简单的从 A 端到 B 端直连不能如愿完成。这需要绕过阻止建立连接的防火墙，给你的设备分配一个唯一可见的地址（通常情况下我们的大部分设备没有一个固定的公网地址），如果路由器不允许主机直连，还得通过一台服务器转发数据。ICE 通过使用以下几种技术完成上述工作。")]),t._v(" "),r("h2",{attrs:{id:"stun"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stun"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Protocols#stun",title:"Permalink to STUN",target:"_blank",rel:"noopener noreferrer"}},[t._v("STUN"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("NAT 的会话穿越功能")]),r("a",{attrs:{href:"http://en.wikipedia.org/wiki/STUN",target:"_blank",rel:"noopener noreferrer"}},[t._v("Session Traversal Utilities for NAT (STUN)"),r("OutboundLink")],1),t._v(" (缩略语的最后一个字母是 NAT 的首字母) 是一个允许位于 NAT 后的客户端找出自己的公网地址，判断出路由器阻止直连的限制方法的协议。")]),t._v(" "),r("p",[t._v("客户端通过给公网的 STUN 服务器发送请求获得自己的公网地址信息，以及是否能够被（穿过路由器）访问。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"An interaction between two users of a WebRTC application involving a STUN server.","data-src":"https://mdn.mozillademos.org/files/6115/webrtc-stun.png",loading:"lazy"}})]),t._v(" "),r("h2",{attrs:{id:"nat"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nat"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Protocols#nat",title:"Permalink to NAT",target:"_blank",rel:"noopener noreferrer"}},[t._v("NAT"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("网络地址转换协议")]),r("a",{attrs:{href:"http://en.wikipedia.org/wiki/NAT",target:"_blank",rel:"noopener noreferrer"}},[t._v("Network Address Translation (NAT)"),r("OutboundLink")],1),t._v(" 用来给你的（私网）设备映射一个公网的 IP 地址的协议。一般情况下，路由器的 WAN 口有一个公网 IP，所有连接这个路由器 LAN 口的设备会分配一个私有网段的 IP 地址（例如 192.168.1.3）。私网设备的 IP 被映射成路由器的公网 IP 和唯一的端口，通过这种方式不需要为每一个私网设备分配不同的公网 IP，但是依然能被外网设备发现。")]),t._v(" "),r("p",[t._v("一些路由器严格地限定了部分私网设备的对外连接。这种情况下，即使 STUN 服务器识别了该私网设备的公网 IP 和端口的映射，依然无法和这个私网设备建立连接。这种情况下就需要转向 TURN 协议。")]),t._v(" "),r("h2",{attrs:{id:"turn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#turn"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Protocols#turn",title:"Permalink to TURN",target:"_blank",rel:"noopener noreferrer"}},[t._v("TURN"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("一些路由器使用一种“"),r("strong",[t._v("对称型 NAT")]),t._v("”的 NAT 模型。这意味着路由器只接受和对端先前建立的连接（就是下一次请求建立新的连接映射）。")]),t._v(" "),r("p",[r("strong",[t._v("NAT 的中继穿越方式")]),r("a",{attrs:{href:"http://en.wikipedia.org/wiki/TURN",target:"_blank",rel:"noopener noreferrer"}},[t._v("Traversal Using Relays around NAT (TURN)"),r("OutboundLink")],1),t._v(" 通过 "),r("strong",[t._v("TURN 服务器中继所有数据")]),t._v("的方式来绕过“对称型 NAT”。你需要在 TURN 服务器上创建一个连接，然后告诉所有对端设备发包到服务器上，TURN 服务器再把包转发给你。很显然这种方式是开销很大的，所以只有在没得选择的情况下采用。")]),t._v(" "),r("p",[r("img",{staticClass:"lazy",attrs:{alt:"An interaction between two users of a WebRTC application involving STUN and TURN servers.","data-src":"https://mdn.mozillademos.org/files/6117/webrtc-turn.png",loading:"lazy"}})]),t._v(" "),r("h2",{attrs:{id:"sdp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sdp"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Protocols#sdp",title:"Permalink to SDP",target:"_blank",rel:"noopener noreferrer"}},[t._v("SDP"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("strong",[t._v("会话描述协议")]),r("a",{attrs:{href:"http://en.wikipedia.org/wiki/Session_Description_Protocol",target:"_blank",rel:"noopener noreferrer"}},[t._v("Session Description Protocol (SDP)"),r("OutboundLink")],1),t._v(" 是一个"),r("strong",[t._v("描述多媒体连接内容")]),t._v("的协议，例如"),r("strong",[t._v("分辨率，格式，编码，加密算法")]),t._v("等。所以在数据传输时两端都能够理解彼此的数据。本质上，这些描述内容的元数据并不是媒体流本身。")]),t._v(" "),r("p",[r("strong",[t._v("从技术上讲，SDP 并不是一个真正的协议，而是一种数据格式")]),t._v("，"),r("strong",[t._v("用于描述在设备之间共享媒体的连接")]),t._v("。")]),t._v(" "),r("p",[t._v("SDP 由一行或"),r("strong",[t._v("多行 UTF-8 文本")]),t._v("组成，每行以一个字符的类型开头，后跟等号（“ =”），然后是包含值或描述的结构化文本，其格式取决于类型。以给定字母开头的文本行通常称为“字母行”。例如，提供媒体描述的行的类型为“ m”，因此这些行称为“ m 行”。")]),t._v(" "),r("h1",{attrs:{id:"信令与视频通话"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#信令与视频通话"}},[t._v("#")]),t._v(" 信令与视频通话")]),t._v(" "),r("p",[t._v("WebRTC允许在两个设备之间进行实时的对等媒体交换。通过称为"),r("strong",[t._v("信令")]),t._v("的发现和协商过程建立连接。本教程将指导你构建双向视频通话。")]),t._v(" "),r("p",[t._v("WebRTC是一个完全对等技术，用于实时交换音频、视频和数据，同时提供一个中心警告。如其他地方所讨论的，必须进行一种发现和媒体格式协商，以使不同网络上的两个设备相互定位。这个过程被称为 "),r("strong",[t._v("信令")]),t._v(" ，并涉及两个设备连接到第三个共同商定的服务器。通过这个第三方服务器，这两台设备可以相互定位，并交换协商消息。")]),t._v(" "),r("h2",{attrs:{id:"信令服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#信令服务器"}},[t._v("#")]),t._v(" 信令服务器")]),t._v(" "),r("p",[t._v("两个设备之间建立 WebRTC 连接需要一个"),r("strong",[t._v("信令服务器")]),t._v("来实现双方通过网络进行连接。信令服务器的作用是"),r("strong",[t._v("作为一个中间人帮助双方在尽可能少的暴露隐私的情况下建立连接")]),t._v("。")]),t._v(" "),r("p",[t._v("WebRTC 并没有提供信令传递机制，你可以使用任何你喜欢的方式如"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebSocket"),r("OutboundLink")],1),t._v(" 或者"),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("XMLHttpRequest")]),r("OutboundLink")],1),t._v(" 等等，来交换彼此的令牌信息。")]),t._v(" "),r("p",[t._v("重要的是"),r("strong",[t._v("信令服务器并不需要理解和解释信令数据内容")]),t._v("。"),r("strong",[t._v("通过信令服务器的消息的内容实际上是一个黑")]),t._v("盒。重要的是，当"),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/ICE",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICE"),r("OutboundLink")],1),t._v("子系统指示你将信令数据发送给另一个对等方时，你就这样做，而另一个对等方知道如何接收此信息并将其传递给自己的 ICE 子系统。你所要做的就是来回传递信息。内容对信令服务器一点都不重要。")]),t._v(" "),r("h1",{attrs:{id:"信令与视频通话-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#信令与视频通话-2"}},[t._v("#")]),t._v(" 信令与视频通话")])])}),[],!1,null,null,null);e.default=o.exports}}]);