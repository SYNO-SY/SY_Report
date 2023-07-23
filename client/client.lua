ESX = exports["es_extended"]:getSharedObject()

local function toggleNuiFrame(shouldShow)
  SetNuiFocus(shouldShow, shouldShow)
  SendNUIMessage({
    action = 'setVisible',
    data = shouldShow
  })
end

RegisterCommand('show-nui', function()
  toggleNuiFrame(true)
end)

RegisterNUICallback('hideFrame', function(_, cb)
  toggleNuiFrame(false)
  cb({})
end)

RegisterNUICallback('getPlayerMoney', function(data, cb)
  local money = ESX.PlayerData.money
  cb(money)
end)


RegisterNUICallback('getConfig', function(_, cb)
  cb({
    primaryColor = Config.PrimaryColor,
    primaryShade = Config.PrimaryShade
  })
end)
