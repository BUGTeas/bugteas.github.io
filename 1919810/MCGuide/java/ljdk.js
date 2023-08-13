loadInfo = "<h1>Liberica JDK 下载和安装指南</h1><p>和官方 Java 不同，Liberica JDK 全版本提供 JDK/JRE 两种类型，其 Full 版本中还内置了 HMCL 启动器所需的 JavaFX 运行时，在启动 HMCL 时无需等待下载运行时。</p><p>Liberica JDK 至今仍在提供不受官方 Java 支持的 32 位版本，老电脑用户狂喜！</p><h3>下载</h3><p>这是 Liberica JDK 的官方下载地址：<a href='https://bell-sw.com/libericajdk/'>showLink</a></p><img src='./LJDK.png'/><p>首先点击“Download center”，然后往下滑找到“All versions”。</p><img src='./LJDKFind.gif'/><p>在下方的筛选栏中从左往右筛选版本，以 64 位 Windows 安装 JRE 17 为例，第一项“Java Version”选择你想下载的大版本，“Release Version”选择更新版本，“Operating System”选择操作系统，“Architecture”选择 CPU 类型，“Bitness”选择系统位数，这两项不知道的可以查看当前系统类型，“Package Type”这里根据需求选择，如果是用来启动 HMCL 就选择“Full JRE”，内置 Java FX，否则选择“Standard JRE”。</p><img src='./LJDKSelect.gif'/><p>关于如何查看系统类型，Windows 10/11 系统中只需要右键“此电脑”图标选择属性，然后就能看到你的系统类型了，至于如何区分看下图：</p><img src='./LJDKGetWinInfo.png'/><p>之后页面就会筛选出你所需的版本，下面有两种格式，如果是直接安装到系统的就选第一个安装包，而如果是在U盘上用的话就选第二个免安装压缩包，无需安装解压后就能使用。</p><img src='./LJDKDn.png'/><p>点击下载后还会弹出收集用户意见的窗口，懂的就选，不懂就点右上角关闭，浏览器就会开始下载。</p><img src='./LJDKAdvice.png'/><h3>安装 (JRE/JDK 通用)</h3><p>双击打开安装程序</p><img src='./LJDKOpen.gif'/><p>点击“Next”到下一步，上面的选项不用动，如果需要更改安装路径可以点击右下角“Browse...”然后选择一个文件夹，路径中不能带有中文，而且<strong>一定要选择或创建空文件夹</strong>，否则安装的程序文件都将混入该文件夹原有的文件当中，在卸载时还会<strong>将这些原有文件一并删除！</strong></p><img src='./LJDKChDir.gif'/><p>再次点击“Next”，需要进行确认，确认无误就点“Install”开始安装。</p><img src='./LJDKInstall.gif'/><p>大概 10 秒后安装完成，关闭窗口或点击“Finish”即可。</p><img src='./LJDKFinish.png'/><h3>卸载</h3><p>在系统设置的“应用和功能”中找到下图所示的应用即可进行卸载。（版本号和名称可能不同）</p><img src='./LJDKRemove.png'/>"