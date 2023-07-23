fx_version "cerulean"

description "Advanced fivem report system "
author "SYNO"
version '1.0.0'
repository 'none'

lua54 'yes'

games {
  "gta5",
  "rdr3"
}

ui_page 'web/build/index.html'

shared_script 'shared/config.lua'
client_script "client/**/*"
server_script "server/**/*"

files {
  'web/build/index.html',
  'web/build/**/*',
}
