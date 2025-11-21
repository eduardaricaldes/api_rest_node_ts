import {ICidade} from '../../models/Cidade'

declare module 'knex/types/table'{
    interface Tables {
         cidade: ICidade
        //pessoa: IPessoa
        // usuario: IUsuario
    }
}