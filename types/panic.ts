export interface PanicLocation {
  latitude: number;
  longitude: number;
}

interface Contact {
  name: string;
  phoneNumber: string;
  email?: string;
}

export interface Panic {
  _id: string;
  userName: string;
  location: PanicLocation;
  contacts: Contact[];
  authorityType?: string;
  createdAt: string;
  updatedAt: string;
}
