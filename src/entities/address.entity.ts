import { Entity, PrimaryKey } from "@mikro-orm/postgresql";

export type UUID = string & { __uuid: true };
export type AddressId = `address-${UUID}`;

@Entity()
export class Address {
  @PrimaryKey({ type: "string" })
  id!: AddressId;
}
