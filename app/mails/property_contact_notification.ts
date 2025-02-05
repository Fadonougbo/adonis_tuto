import { BaseMail } from "@adonisjs/mail";
import type { Infer } from "@vinejs/vine/types";
import type Property from "#models/admin/property";
import type { propertyContactValidator } from "#validators/property_contact";

export default class PropertyContactNotification extends BaseMail {
	from = "";
	subject = "contact property";

	constructor(
		private property: Property,
		private data: Infer<typeof propertyContactValidator>,
	) {
		super();
    this.from=this.data.email
	}

	/**
	 * The "prepare" method is called automatically when
	 * the email is sent or queued.
	 */
	prepare() {
		this.message.to('admin@gmail.com');
    this.message.htmlView('components/mail/mail',{property:this.property,data:this.data})
    this.message.text('message text')
	}
}
