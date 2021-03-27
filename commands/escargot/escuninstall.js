module.exports = {
  name: "escuninstall",
  category: "escargot",
  aliases: ["uninstall", "wleuninstall", "fix2009installerror"],
  description: "Resolve installation errors while installing prepatched WLM 2009",
  run: async (client, message, args) => {
    message.channel.send(`If you have any Windows Live Essentials programs, you have to uninstall them before installing Windows Live Messenger 2009.
A quick and easy way to uninstall it is by pasting this on your Command Prompt or Run (super key + r):

C:/Program Files (x86)/Windows Live/installer/wlarp.exe /cleanup:all /q

If you use a 32-bit version of Windows, remove the (x86) part. You can also use the Control Panel, or Settings for Windows 10 users.`)
    }
  }