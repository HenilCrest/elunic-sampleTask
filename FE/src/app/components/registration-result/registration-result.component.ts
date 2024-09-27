import { Component, OnInit, Input, DoCheck} from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationOutcome } from 'src/app/interface/registrationOutcome';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration-result',
  templateUrl: './registration-result.component.html',
  styleUrls: ['./registration-result.component.css']
})
export class RegistrationResultComponent implements DoCheck {
  @Input() registrationOutcome!: RegistrationOutcome;

  constructor(private router: Router, private userService: UserService) {}

  ngDoCheck(): void {
    this.userService.outcome$.subscribe(outcome => {
      if (outcome) {
        this.registrationOutcome = outcome;
      } else {
        this.registrationOutcome = { success: false, errorMessage: "No registration outcome available." };
      }
    });
  }

}
