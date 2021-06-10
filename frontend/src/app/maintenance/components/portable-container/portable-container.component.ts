import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { PortableMaintenance } from '../../models/portable-maintenance.model';
import { PortableMaintenanceService } from '../../portable-maintenance.service';

@Component({
  selector: 'app-portable-container',
  templateUrl: './portable-container.component.html',
  styleUrls: ['./portable-container.component.scss'],
})
export class PortableContainerComponent implements OnInit, OnDestroy {
  maintenanceId: string | null = '';

  paramSub: Subscription = new Subscription();

  maintenanceData: PortableMaintenance = {
    jobID: '',
    customer: '',
    instruments: [],
  };

  constructor(
    private route: ActivatedRoute,
    private portableMaintenanceService: PortableMaintenanceService
  ) {}

  ngOnInit(): void {
    this.paramSub = this.route.paramMap.subscribe((param) => {
      this.maintenanceId = param.get('id');
    });

    // Only gets data once on init for now.
    // May need to be moved to subscription, if able to swap data for container on the fly
    if (this.maintenanceId) {
      this.maintenanceData = this.portableMaintenanceService.getDataById(
        this.maintenanceId
      );
    }
  }

  ngOnDestroy(): void {
    this.paramSub.unsubscribe();
  }
}
