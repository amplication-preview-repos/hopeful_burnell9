import { Module } from "@nestjs/common";
import { OutageService } from "./outage.service";
import { OutageController } from "./outage.controller";
import { OutageResolver } from "./outage.resolver";

@Module({
  controllers: [OutageController],
  providers: [OutageService, OutageResolver],
  exports: [OutageService],
})
export class OutageModule {}
