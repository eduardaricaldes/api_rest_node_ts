import type { Knex } from "knex";
import { ETableNames } from "../../ETableNames";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(ETableNames.cidade, table => {
        table.bigIncrements('id').primary().index();
        table.string('nome',150).primary().index().notNullable();

        table.comment('tabela usada para armazenar tabelas')
    })
    .then(()=>{
        console.log(`# Created table ${ETableNames.cidade}`)
    })


}

/**
 * 
 * create table  table name{
 * personId id  
 * }
 */


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(ETableNames.cidade)
    .then(()=>{
        console.log(`# Droped Table ${ETableNames.cidade}`)
    })

}

