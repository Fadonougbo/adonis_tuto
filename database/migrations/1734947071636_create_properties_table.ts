import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'properties'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("title").notNullable()
      table.text("description")
      table.integer("surface").notNullable()
      table.integer("rooms").defaultTo(1)
      table.integer("price").notNullable()
      table.string("city").notNullable()
      table.boolean("isSold").defaultTo(false)
      table.string("tel").notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}