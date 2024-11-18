import { contextBridge, ipcRenderer } from "electron";
import Veiculo from "./entity/Veiculo";
import Ususario from "./entity/Usuario";

contextBridge.exposeInMainWorld('bancoAPI', {
    createVeiculo: async (veiculo:Veiculo) => await ipcRenderer.invoke('create', veiculo),
    findAll: async () => await ipcRenderer.invoke('findAll'),
    findById: async (id: string) => await ipcRenderer.invoke('findById',id),
    deletarVeiculo: async (id: string) => await ipcRenderer.invoke('deletarVeiculo', id),
    crateUsuario: async (usuario: any)=> await ipcRenderer.invoke('createUsuario', usuario),
    findByEmail: async (email:string)=> await ipcRenderer.invoke('findByEmail', email)
})

contextBridge.exposeInMainWorld('navigateAPI', {
    irPaginaDetalhes: (id: string) => ipcRenderer.send("change-screen", id),
    irPaginaHome: () => ipcRenderer.send("change-screen-home"),

})

contextBridge.exposeInMainWorld('authAPI', {
    hash:async (credentials: any) => await ipcRenderer.invoke("hash_password",credentials)

})