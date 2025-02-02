import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'option_property'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('property_id').references('id').inTable('properties').onDelete('CASCADE')
      table.integer('option_id').references('id').inTable('options').onDelete('CASCADE')
      table.primary(['property_id','option_id'])
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}