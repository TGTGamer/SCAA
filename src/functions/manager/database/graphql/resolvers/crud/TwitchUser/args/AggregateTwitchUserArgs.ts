import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TwitchUserOrderByInput } from "../../../inputs/TwitchUserOrderByInput";
import { TwitchUserWhereInput } from "../../../inputs/TwitchUserWhereInput";
import { TwitchUserWhereUniqueInput } from "../../../inputs/TwitchUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTwitchUserArgs {
  @TypeGraphQL.Field(_type => TwitchUserWhereInput, {
    nullable: true
  })
  where?: TwitchUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TwitchUserOrderByInput], {
    nullable: true
  })
  orderBy?: TwitchUserOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => TwitchUserWhereUniqueInput, {
    nullable: true
  })
  cursor?: TwitchUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
