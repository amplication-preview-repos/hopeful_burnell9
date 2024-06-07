import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("ClientOutageResponseObject")
class ClientOutageResponse {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    clientId!: string;

    @Field(() => [GraphQLJSON])
    outages!: InputJsonValue;
}

export { ClientOutageResponse as ClientOutageResponse };