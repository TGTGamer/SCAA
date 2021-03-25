import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "@prisma/client";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UsersOnGuildsUpdateManyWithoutGuildInput } from "../inputs/UsersOnGuildsUpdateManyWithoutGuildInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class GuildUpdateWithoutAdminsInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UsersOnGuildsUpdateManyWithoutGuildInput, {
    nullable: true
  })
  members?: UsersOnGuildsUpdateManyWithoutGuildInput | undefined;
}
