enum contactType {
  SCHEDULING = 'scheduling',
  TECHNICAL = 'technical',
  PURCHASING = 'purchasing',
}

export interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  contactType: contactType;
}
