import { BaseModel, column } from "@adonisjs/lucid/orm";
import type { DateTime } from "luxon";

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

	@column()
	declare isSold:boolean

	@column()
	declare tel:string

	@column.dateTime({ autoCreate: true })
	declare createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	declare updatedAt: DateTime;
}
