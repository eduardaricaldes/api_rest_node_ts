import * as create  from "./Create"
import * as getAll from './GetAll'

export const CidadesController = {
    ...create,
    ...getAll,
};

// esse index agrupa todas as controllers em uma unica variavel
