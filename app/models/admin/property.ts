import { BaseModel, CamelCaseNamingStrategy, column, manyToMany } from "@adonisjs/lucid/orm";
import type { ManyToMany } from "@adonisjs/lucid/types/relations";
import type { DateTime } from "luxon";
import Option from "./option.js";

export default class Property extends BaseModel {


	@column({ isPrimary: true })
	declare id: number;

	@column()
	declare title: string;

	@column()
	declare description: string;

	@column()
	declare surface: number;

	@column()
	declare rooms: number;

	@column()
	declare price: number;

	@column()
	declare city:string

	@column({columnName:'isSold'})
	declare is_sold:boolean

	@column()
	declare tel:string

	@manyToMany(()=>Option)
	declare options:ManyToMany<typeof Option>

	@column.dateTime({ autoCreate: true })
	declare createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	declare updatedAt: DateTime;
}
