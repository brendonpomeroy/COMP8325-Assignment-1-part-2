function ebStdBannerFlash_24737242_3661072354298085_DoFSCommand(command,args){ try{ if(!args||args=='null')args='';command = command.replace(/FSCommand:/ig,''); return EBG.ads['24737242_3661072354298085']._CCs['ebStdBannerFlash_24737242_3661072354298085']._handleMessage(command,args,'ebStdBannerFlash_24737242_3661072354298085');}catch(e){if(window.mmFSExceptionAlert)mmFSExceptionAlert('Command: '+command+'\nargs: '+args.toString()+'\n\nexception in DoFS func:\n'+e.message)}}function ebIsFlashExtInterfaceExist(){return true;}