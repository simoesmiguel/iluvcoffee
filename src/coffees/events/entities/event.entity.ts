import { Column, Entity, PrimaryGeneratedColumn, Index } from "typeorm";

/* Event */
@Entity()
@Index(["name", "type"]) // <--
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column("json")
  payload: Record<string, any>;
}
