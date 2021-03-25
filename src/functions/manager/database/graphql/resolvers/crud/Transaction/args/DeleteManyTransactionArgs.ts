import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { TransactionWhereInput } from "../../../inputs/TransactionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTransactionArgs {
  @TypeGraphQL.Field(_type => TransactionWhereInput, {
    nullable: true
  })
  where?: TransactionWhereInput | undefined;
}
