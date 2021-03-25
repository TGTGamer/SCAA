import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { BotUpdateManyWithoutHostsInput } from "../inputs/BotUpdateManyWithoutHostsInput";
import { BotUpdateManyWithoutPriorityHostInput } from "../inputs/BotUpdateManyWithoutPriorityHostInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutHostsInput } from "../inputs/UserUpdateOneRequiredWithoutHostsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class HostUpdateWithoutShardsInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  ip?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  url?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  port?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  shardLimit?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutHostsInput, {
    nullable: true
  })
  owner?: UserUpdateOneRequiredWithoutHostsInput | undefined;

  @TypeGraphQL.Field(_type => BotUpdateManyWithoutHostsInput, {
    nullable: true
  })
  bots?: BotUpdateManyWithoutHostsInput | undefined;

  @TypeGraphQL.Field(_type => BotUpdateManyWithoutPriorityHostInput, {
    nullable: true
  })
  priorityBot?: BotUpdateManyWithoutPriorityHostInput | undefined;
}
