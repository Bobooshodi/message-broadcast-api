import { AutoMap } from "@nartc/automapper";
import { Column, Entity, ManyToMany, JoinTable } from "typeorm";
import { ScheduleStatus } from "../enums";
import { IdentityEntity } from "./common/IdentityEntity";
import { RecipientListEntity } from "./RecipientListEntity";

@Entity({ name: "schedules" })
export class ScheduleEntity extends IdentityEntity {
  @AutoMap()
  @Column({ type: "text", nullable: false })
  message: string;

  @AutoMap()
  @ManyToMany(() => RecipientListEntity)
  @JoinTable()
  recipientsList: RecipientListEntity[];

  @AutoMap()
  @Column({ type: "datetime", nullable: false })
  scheduledTime: Date;

  @AutoMap()
  @Column({
    type: "enum",
    enum: ScheduleStatus,
    default: ScheduleStatus.New,
  })
  status: ScheduleStatus;
}
