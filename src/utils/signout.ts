import { MMKV } from 'react-native-mmkv'
import NavigationService from '../services/NavigationService'

const mmkv = new MMKV()


const signout = () => {
    try{
        mmkv.clearAll()
        NavigationService.reset('Auth');
    }catch(err){
        console.log('Erro no signout')
    }
}

export {signout}