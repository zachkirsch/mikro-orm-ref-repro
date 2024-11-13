import { Entity, ManyToOne, PrimaryKey, Ref } from "@mikro-orm/postgresql";
import { Address } from "./address.entity.js";

@Entity()
export class Person {
  @PrimaryKey()
  id!: string;

  @ManyToOne({ nullable: true })
  homeAddress!: Ref<Address> | null;
}
