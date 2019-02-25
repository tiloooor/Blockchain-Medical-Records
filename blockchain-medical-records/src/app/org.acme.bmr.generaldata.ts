import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.bmr.generaldata{
   export enum Gender {
      MALE,
      FEMALE,
      OTHER,
   }
   export enum Race {
      ASIAN,
      WHITE,
      BLACK,
      HISPANIC,
      TWO_OR_MORE,
      OTHER,
   }
   export class Address {
      city: string;
      country: string;
      street: string;
      zip: string;
   }
   export class ContactInformation {
      email: string;
      phone: string;
      address: Address;
   }
// }
