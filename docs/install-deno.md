# 安装 Deno

Deno 目前可以安装在 Windows、Linux、macOS 系统上，只支持 64 位系统，暂时不支持 32 位。

由于 Deno 只有 1 个可执行文件，没有任何第三方依赖，因此安装 Deno 非常简单。主流安装方式有：

## 使用安装器

官方提供了 [denoland/deno_install](https://github.com/denoland/deno_install) 安装脚本，可以通过运行一个命令完成 Deno 的下载和安装：

macOS 和 Linux 系统上使用 shell:

```shell
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Windows 系统上使用 PowerShell:

```ps
wr https://deno.land/x/install/install.ps1 -useb | iex
```

**⚠️注意**：deno_install 会从 GitHub Release 下载 Deno 可执行文件，由于 GitHub 文件托管在 aws 导致国内访问不是很顺畅。

国内用户推荐使用 [denocn/deno_install](https://github.com/denocn/deno_install) 提供的安装器来安装。用法和官方一样。

macOS 和 Linux 系统上使用 shell:

```shell
curl -fsSL https://x.deno.js.cn/install.sh | sh
```

Windows 系统上使用 PowerShell:

```ps
iwr https://x.deno.js.cn/install.ps1 -useb -outf install.ps1; .\install.ps1
```

## 使用包管理器

你还可以使用如下包管理器来安装。

使用 [Scoop](https://scoop.sh):

```powershell
scoop install deno
```

使用 [Homebrew](https://formulae.brew.sh/formula/deno):

```sh
brew install deno
```

使用 [Chocolatey](https://chocolatey.org/packages/deno):

```powershell
choco install deno
```

**💡提示**：如果你经常使用某个包管理器，你应该知道如何配置一个更快的国内源来提供更稳定的安装体验。

## 使用多版本管理工具

**使用 [asdf](https://asdf-vm.com) 和 [asdf-deno](https://github.com/asdf-community/asdf-deno):**

```sh
asdf plugin-add deno https://github.com/asdf-community/asdf-deno.git

asdf install deno 0.38.0

# Activate globally with:
asdf global deno 0.38.0

# Activate locally in the current folder with:
asdf local deno 0.38.0
```

**使用 [Scoop](https://github.com/lukesampson/scoop/wiki/Switching-Ruby-And-Python-Versions):**

```sh
# 安装某个特定版本的 Deno：
scoop install deno@0.22.0

# 切换到 v0.22.0
scoop reset deno@0.22.0

#切换到最新版
scoop reset deno
```

## 直接下载二进制文件

你甚至可以手动下载 Deno 可执行文件然后放在电脑的任何目录下。将此目录配置到 `PATH` 环境变量，输入 `deno --version` 来验证是否安装成功。

你还可以把 Deno 可执行文件放到你的项目里面，这样就把当前 Deno 版本和项目绑定在了一起。如此一来使得项目分发变得简单，当别人拿到你的项目时，即使他的电脑上没有安装 Deno 也可以运行你的项目，只需要运行：

```shell
./deno mod.ts
```

## 附加说明

当你使用安装器成功把 Deno 安装到电脑上是，大部分情况安装脚本已经自动为你配置了 `DENO_INSTALL` 环境变量，指向 Deno 的安装路径。当你再一次执行安装脚本时，新的文件总会覆盖原有的。如果你改变了 `DENO_INSTALL` 的值，再次安装时会使用新的位置。

在某些情况 `DENO_INSTALL` 环境变量无法自动添加到系统，此时安装完成后你会收到提示，需要你手动设置 `DENO_INSTALL` 变量，并把 Deno 执行路径手动添加到 `PATH`，提示内容大概为：

```plain
您需要手动将 Deno 目录添加到 $HOME/.bash_profile (或者其它类似目录)
  export DENO_INSTALL="/Users/justjavac/.deno"
  export PATH="$DENO_INSTALL/bin:$PATH"
运行 '/Users/justjavac/.deno/bin/deno --help' 查看 Deno 帮助信息
```

----

[目录](./README.md)

下一章：[配置 Deno 开发环境](./setup-environment.md)
