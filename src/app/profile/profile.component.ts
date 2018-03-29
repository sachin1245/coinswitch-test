import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControlName, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss']
})

export class ProfileComponent implements OnInit {

  showBasicInformation = true;
  showAdditionalInformation = false;
  showDocuments = false;
  userForm: any;
  countries = [
    {
      name: 'India',
      code: 'IN'
    },
    {
      name: 'United States',
      code: 'USA'
    },
    {
      name: 'Russia',
      code: 'RS'
    },
    {
      name: 'Japan',
      code: 'jp'
    },
    {
      name: 'China',
      code: 'ch'
    }
  ];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      country: ['', Validators.required],
      pincode: ['', Validators.required]
    });
  }

  toggleBasicInformation() {
    this.showBasicInformation = !this.showBasicInformation;
    if (this.showAdditionalInformation) {
      this.showAdditionalInformation = false;
    }
    if (this.showDocuments) {
      this.showDocuments = false;
    }
  }

  toggleAdditionalInformation() {
    this.showAdditionalInformation = !this.showAdditionalInformation;
    if (this.showBasicInformation) {
      this.showBasicInformation = false;
    }
    if (this.showDocuments) {
      this.showDocuments = false;
    }
  }

  toggleDocuments() {
    this.showDocuments = !this.showDocuments;
    if (this.showAdditionalInformation) {
      this.showAdditionalInformation = false;
    }
    if (this.showBasicInformation) {
      this.showBasicInformation = false;
    }
  }

  submitUserForm(data) {
    console.log(data);
    console.log(this.userForm);
  }
}
