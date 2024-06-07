import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OutageService } from "./outage.service";
import { ClientOutageResponse } from "../outage/ClientOutageResponse";

@swagger.ApiTags("outages")
@common.Controller("outages")
export class OutageController {
  constructor(protected readonly service: OutageService) {}

  @common.Get("/outages/clients/:clientId")
  @swagger.ApiOkResponse({
    type: ClientOutageResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetClientOutages(
    @common.Body()
    body: string
  ): Promise<ClientOutageResponse> {
        return this.service.GetClientOutages(body);
      }
}
