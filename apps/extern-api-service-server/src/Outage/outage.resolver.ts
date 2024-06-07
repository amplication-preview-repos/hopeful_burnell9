import * as graphql from "@nestjs/graphql";
import { ClientOutageResponse } from "../outage/ClientOutageResponse";
import { OutageService } from "./outage.service";

export class OutageResolver {
  constructor(protected readonly service: OutageService) {}

  @graphql.Query(() => ClientOutageResponse)
  async GetClientOutages(
    @graphql.Args()
    args: string
  ): Promise<ClientOutageResponse> {
    return this.service.GetClientOutages(args);
  }
}
