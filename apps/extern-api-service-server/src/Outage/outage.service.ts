import { Injectable } from "@nestjs/common";
import { ClientOutageResponse } from "../outage/ClientOutageResponse";

@Injectable()
export class OutageService {
  constructor() {}
  async GetClientOutages(args: string): Promise<ClientOutageResponse> {
    throw new Error("Not implemented");
  }
}
